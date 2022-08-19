import invariant from "tiny-invariant";
import {APIClient} from "./APIClient";
import {
  GeneratedType,
  OfflineSigner,
  Registry,
  TxBodyEncodeObject,
} from "@cosmjs/proto-signing";
import { Any } from "cosmjs-types/google/protobuf/any";
import {
  BaseMsg,
  MsgCollect,
  MsgCollectReward,
  MsgCreatePool,
  MsgCreatePosition,
  MsgDecreaseLiquidity,
  MsgIncreaseLiquidity,
  MsgSwapExactIn,
  MsgSwapExactOut,
  MsgSubmitProposal,
  MsgDeposit,
  MsgVote,
  MsgVoteWeighted,
  MsgCreateValidator,
  MsgEditValidator,
  MsgDelegate,
  MsgBeginRedelegate,
  MsgUndelegate,
  MsgCollectRandSwapReward
} from "../msgs";
import { SigningStargateClient } from "@cosmjs/stargate";
import { PubKey } from "../proto/cosmos/crypto/secp256k1/keys";
import {
  SignerInfo,
  ModeInfo,
  ModeInfo_Single,
  Fee,
  AuthInfo,
  SignDoc,
  TxRaw,
} from "../proto/cosmos/tx/v1beta1/tx";
import { SignMode } from "../proto/cosmos/tx/signing/v1beta1/signing";
import { Coin } from "../proto/cosmos/base/v1beta1/coin";
import { fromBase64, toBase64 } from "@cosmjs/encoding";
import {Chain_Id, CHAIN_NAMES, NETWORK_DETAILS} from "../constants";

export interface ISender {
  address: string;
  pubkey: Uint8Array;
  accountNumber: number;
  sequence: number;
}

export interface TxGenerated {
  signDirect: {
    body: TxBodyEncodeObject;
    authInfo: AuthInfo;
    signBytes: string;
  };
}

export const SIGN_DIRECT = SignMode.SIGN_MODE_DIRECT;

export class TxClient {
  public chainId: Chain_Id;
  public apiClient: APIClient;
  public rpcUrl: string;
  public accountAddress: string;
  public signer: OfflineSigner;
  public registry: Registry;

  // public walletClient: SigningStargateClient | null = null;
  // public sender: ISender | null = null;

  constructor(
    chainId: Chain_Id,
    apiClient: APIClient,
    rpcUrl: string,
    signer: OfflineSigner,
    accountAddress: string,
  ) {
    invariant(!!signer, "wallet is required!");

    this.chainId = chainId;
    this.apiClient = apiClient;
    this.rpcUrl = rpcUrl;
    this.signer = signer;
    this.accountAddress = accountAddress;

    const registryTypes = new Map<string, GeneratedType>();
    registryTypes.set(MsgCollect.typeUrl, MsgCollect.Proto);
    registryTypes.set(MsgCollectReward.typeUrl, MsgCollectReward.Proto);
    registryTypes.set(MsgCreatePool.typeUrl, MsgCreatePool.Proto);
    registryTypes.set(MsgCreatePosition.typeUrl, MsgCreatePosition.Proto);
    registryTypes.set(MsgDecreaseLiquidity.typeUrl, MsgDecreaseLiquidity.Proto);
    registryTypes.set(MsgIncreaseLiquidity.typeUrl, MsgIncreaseLiquidity.Proto);
    registryTypes.set(MsgSwapExactIn.typeUrl, MsgSwapExactIn.Proto);
    registryTypes.set(MsgSwapExactOut.typeUrl, MsgSwapExactOut.Proto);
    registryTypes.set(MsgSubmitProposal.typeUrl, MsgSubmitProposal.Proto);
    registryTypes.set(MsgDeposit.typeUrl, MsgDeposit.Proto);
    registryTypes.set(MsgVote.typeUrl, MsgVote.Proto);
    registryTypes.set(MsgVoteWeighted.typeUrl, MsgVoteWeighted.Proto);
    registryTypes.set(MsgCreateValidator.typeUrl, MsgCreateValidator.Proto);
    registryTypes.set(MsgEditValidator.typeUrl, MsgEditValidator.Proto);
    registryTypes.set(MsgDelegate.typeUrl, MsgDelegate.Proto);
    registryTypes.set(MsgBeginRedelegate.typeUrl, MsgBeginRedelegate.Proto);
    registryTypes.set(MsgUndelegate.typeUrl, MsgUndelegate.Proto);
    registryTypes.set(MsgCollectRandSwapReward.typeUrl, MsgCollectRandSwapReward.Proto);

    this.registry = new Registry(registryTypes);
  }

  public async getSender(): Promise<ISender> {
    const { authAPI } = this.apiClient;
    const {
      account: {
        base_account: {
          pub_key,
          account_number,
          sequence,
        },
      },
    } = await authAPI.accounts(this.accountAddress);
    const { address, pubkey } = (await this.signer.getAccounts())[0];
    return {
      address: this.accountAddress,
      pubkey,
      accountNumber: parseInt(account_number),
      sequence: parseInt(sequence),
    } as ISender;
  }

  public async sendTransaction(
    messages: BaseMsg | Array<BaseMsg>,
    gasLimit?: number,
    memo = "",
  ) {
    const sender = await this.getSender();
    // const pubKeyDecoded = Buffer.from(sender.pubkey, "base64");

    // 1. SignDirect
    const signInfoDirect = createSignerInfo(
      sender.pubkey,
      sender.sequence,
      SIGN_DIRECT
    );

    // 2. authInfo
    let authInfoDirect;
    if (gasLimit) {
      // 2. Fee
      const feeMessage = createFee(
        '',
        NETWORK_DETAILS[this.chainId].nativeCurrency.base,
        gasLimit
      );
      authInfoDirect = createAuthInfo(signInfoDirect, feeMessage);
    } else {
      authInfoDirect = AuthInfo.fromPartial({
        signerInfos: [signInfoDirect],
        fee:{}
      });
    }

    // 3. txbody
    // const body = createBodyWithMultipleMessages(messages, memo);
    const _messages = messages instanceof Array ? messages : [messages];
    const body = createTxBodyEncodeObject(_messages, memo);

    // 4. signDoc
    const signDocDirect = createSigDoc(
      this.registry.encode(body),
      AuthInfo.encode(authInfoDirect).finish(),
      this.chainId,
      sender.accountNumber
    );

    // 5. sign
    let walletClient;
    walletClient = await SigningStargateClient.connectWithSigner(
      this.rpcUrl,
      this.signer,
      {
        registry: this.registry,
        prefix: NETWORK_DETAILS[this.chainId].nativeCurrency.symbol.toLowerCase(),
      }
    );
    // @ts-ignore
    const { signed, signature } = await walletClient.signer.signDirect(
      this.accountAddress,
      signDocDirect
    );

    const txRaw = TxRaw.fromPartial({
      bodyBytes: signed.bodyBytes,
      authInfoBytes: signed.authInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
    const txBytes = TxRaw.encode(txRaw).finish();

    return walletClient.broadcastTx(txBytes);
  }

  public async getEstimatedFee(
    messages: BaseMsg | Array<BaseMsg>,
    memo: string = ""
  ) {
    const sender = await this.getSender();
    // const pubKeyDecoded = Buffer.from(sender.pubkey, "base64");

    // 1. SignDirect
    const signInfoDirect = createSignerInfo(
      sender.pubkey,
      sender.sequence,
      SIGN_DIRECT
    );

    // 2. authInfo
    const authInfoDirect = AuthInfo.fromPartial({
      signerInfos: [signInfoDirect],
      fee:{}
    });

    // 3. txbody
    // const body = createBodyWithMultipleMessages(messages, memo);
    const _messages = messages instanceof Array ? messages : [messages];
    const body = createTxBodyEncodeObject(_messages, memo);

    // 4. signDoc
    const signDocDirect = createSigDoc(
      this.registry.encode(body),
      AuthInfo.encode(authInfoDirect).finish(),
      this.chainId,
      sender.accountNumber
    );
    console.log(signDocDirect);

    const txRaw = TxRaw.fromPartial({
      bodyBytes: signDocDirect.bodyBytes,
      authInfoBytes: signDocDirect.authInfoBytes,
      signatures: [new Uint8Array()],
    });
    const txBytes = TxRaw.encode(txRaw).finish();

    const { gas_info: { gas_wanted, gas_used } } = await this.apiClient.txAPI.estimateGas(toBase64(txBytes));

    console.log('gas_used: ' + gas_used);

    return gas_used;
  }
}

export function createTxBodyEncodeObject(
  messages: Array<BaseMsg>,
  memo: string
): TxBodyEncodeObject {
  const results = messages.map((item) => {
    return item.generateMessage();
  });
  return {
    typeUrl: "/cosmos.tx.v1beta1.TxBody",
    value: {
      messages: results,
      memo: memo,
    },
  };
}

export function createSigDoc(
  bodyBytes: Uint8Array,
  authInfoBytes: Uint8Array,
  chainId: string,
  accountNumber: number
) {
  return SignDoc.fromPartial({
    bodyBytes,
    authInfoBytes,
    chainId,
    accountNumber,
  });
}

function createAuthInfo(signerInfo: SignerInfo, fee: Fee) {
  return AuthInfo.fromPartial({
    signerInfos: [signerInfo],
    fee,
  });
}

function createFee(fee: string, denom: string, gasLimit: number) {
  return Fee.fromPartial({
    amount: [
      Coin.fromPartial({
        denom,
        amount: fee,
      }),
    ],
    gasLimit,
  });
}

function createSignerInfo(
  publicKey: Uint8Array,
  sequence: number,
  mode: number
) {
  const pubkey = Any.fromPartial({
    typeUrl: "/ethermint.crypto.v1.ethsecp256k1.PubKey",
    value: PubKey.encode({
      key: publicKey,
    }).finish(),
  });
  const signerInfo = SignerInfo.fromPartial({
    publicKey: pubkey,
    modeInfo: ModeInfo.fromPartial({
      single: ModeInfo_Single.fromPartial({
        mode,
      }),
    }),
    sequence,
  });

  return signerInfo;
}
