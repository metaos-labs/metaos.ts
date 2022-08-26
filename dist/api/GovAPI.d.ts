import { BaseAPI } from "./BaseAPI";
import { PaginationOptions } from "./APIRequester";
import { QueryDepositResponse, QueryDepositsResponse, QueryParamsResponse, QueryProposalResponse, QueryProposalsResponse, QueryTallyResultResponse, QueryVoteResponse, QueryVotesResponse } from "../proto/cosmos/gov/v1beta1/query";
export declare class GovAPI extends BaseAPI {
    proposals(params?: PaginationOptions): Promise<QueryProposalsResponse>;
    proposal(proposalId: number): Promise<QueryProposalResponse>;
    deposits(proposalId: number, params?: PaginationOptions): Promise<QueryDepositsResponse>;
    deposit(proposalId: number, depositor: string): Promise<QueryDepositResponse>;
    votes(proposalId: number, params?: PaginationOptions): Promise<QueryVotesResponse>;
    vote(proposalId: number, voter: string): Promise<QueryVoteResponse>;
    tallyResult(proposalId: number): Promise<QueryTallyResultResponse>;
    params(paramsType: 'voting' | 'tally' | 'deposit'): Promise<QueryParamsResponse>;
}
