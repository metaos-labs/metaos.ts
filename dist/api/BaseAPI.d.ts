import { APIRequester } from "./APIRequester";
export declare abstract class BaseAPI {
    protected request: APIRequester;
    constructor(request: APIRequester);
}
