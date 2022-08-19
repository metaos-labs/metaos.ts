import {BaseAPI} from "./BaseAPI";
import {PaginationOptions} from "./APIRequester";
import {
  QueryDepositResponse,
  QueryDepositsResponse, QueryParamsResponse,
  QueryProposalResponse,
  QueryProposalsResponse, QueryTallyResultResponse, QueryVoteResponse,
  QueryVotesResponse
} from "../proto/cosmos/gov/v1beta1/query";
import {DepositParams, VotingParams} from "../proto/cosmos/gov/v1beta1/gov";

export class GovAPI extends BaseAPI {
  public async proposals(
    params?: PaginationOptions
  ): Promise<QueryProposalsResponse> {
    return this.request.get<QueryProposalsResponse>(
      `/cosmos/gov/v1beta1/proposals`,
      {
        ...params
      }
    );
  }

  public async proposal(
    proposalId: number,
  ): Promise<QueryProposalResponse> {
    return this.request.get<QueryProposalResponse>(
      `/cosmos/gov/v1beta1/proposals/${proposalId}`
    );
  }

  public async deposits(
    proposalId: number,
    params?: PaginationOptions
  ): Promise<QueryDepositsResponse> {
    return this.request.get<QueryDepositsResponse>(
      `/cosmos/gov/v1beta1/proposals/${proposalId}/deposits`,
      { ...params }
    );
  }

  public async depositsByDepositor(
    proposalId: number,
    depositor: string
  ): Promise<QueryDepositResponse> {
    return this.request.get<QueryDepositResponse>(
      `/cosmos/gov/v1beta1/proposals/${proposalId}/deposits/${depositor}`,
    );
  }

  public async votes(
    proposalId: number,
    params?: PaginationOptions
  ): Promise<QueryVotesResponse> {
    return this.request.get<QueryVotesResponse>(
      `/cosmos/gov/v1beta1/proposals/${proposalId}/votes`,
      { ...params }
    );
  }

  public async votesByVoter(
    proposalId: number,
    voter: string
  ): Promise<QueryVoteResponse> {
    return this.request.get<QueryVoteResponse>(
      `/cosmos/gov/v1beta1/proposals/${proposalId}/votes/${voter}`,
    );
  }

  public async tally(
    proposalId: number,
  ): Promise<QueryTallyResultResponse> {
    return this.request.get<QueryTallyResultResponse>(
      `/cosmos/gov/v1beta1/proposals/${proposalId}/tally`,
    );
  }

  public async params(paramsType: 'voting' | 'tally' | 'deposit'): Promise<QueryParamsResponse> {
    return this.request.get<QueryParamsResponse>(
      `/cosmos/gov/v1beta1/params/${paramsType}`,
    );
  }

}
