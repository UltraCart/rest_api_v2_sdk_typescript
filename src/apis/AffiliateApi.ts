/* tslint:disable */
/* eslint-disable */
/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    AffiliateClickQuery,
    AffiliateClickQueryFromJSON,
    AffiliateClickQueryToJSON,
    AffiliateClicksResponse,
    AffiliateClicksResponseFromJSON,
    AffiliateClicksResponseToJSON,
    AffiliateLedgerQuery,
    AffiliateLedgerQueryFromJSON,
    AffiliateLedgerQueryToJSON,
    AffiliateLedgersResponse,
    AffiliateLedgersResponseFromJSON,
    AffiliateLedgersResponseToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface GetClicksByQueryRequest {
    clickQuery: AffiliateClickQuery;
    limit?: number;
    offset?: number;
    expand?: string;
}

export interface GetLedgersByQueryRequest {
    ledgerQuery: AffiliateLedgerQuery;
    limit?: number;
    offset?: number;
    expand?: string;
}

/**
 * AffiliateApi - interface
 * 
 * @export
 * @interface AffiliateApiInterface
 */
export interface AffiliateApiInterface {
    /**
     * Retrieves a group of clicks from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the clicks returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @summary Retrieve clicks
     * @param {AffiliateClickQuery} clickQuery Click query
     * @param {number} [limit] The maximum number of records to return on this one API call. (Maximum 10000)
     * @param {number} [offset] Pagination of the record set.  Offset is a zero based index.
     * @param {string} [expand] The object expansion to perform on the result.  Only option is link.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AffiliateApiInterface
     */
    getClicksByQueryRaw(requestParameters: GetClicksByQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AffiliateClicksResponse>>;

    /**
     * Retrieves a group of clicks from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the clicks returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * Retrieve clicks
     */
    getClicksByQuery(requestParameters: GetClicksByQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AffiliateClicksResponse>;

    /**
     * Retrieves a group of ledger entries from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the ledgers returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @summary Retrieve ledger entries
     * @param {AffiliateLedgerQuery} ledgerQuery Ledger query
     * @param {number} [limit] The maximum number of records to return on this one API call. (Maximum 200)
     * @param {number} [offset] Pagination of the record set.  Offset is a zero based index.
     * @param {string} [expand] The object expansion to perform on the result.  Only option is link.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AffiliateApiInterface
     */
    getLedgersByQueryRaw(requestParameters: GetLedgersByQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AffiliateLedgersResponse>>;

    /**
     * Retrieves a group of ledger entries from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the ledgers returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * Retrieve ledger entries
     */
    getLedgersByQuery(requestParameters: GetLedgersByQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AffiliateLedgersResponse>;

}

/**
 * 
 */
export class AffiliateApi extends runtime.BaseAPI implements AffiliateApiInterface {

    /**
     * Retrieves a group of clicks from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the clicks returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * Retrieve clicks
     */
    async getClicksByQueryRaw(requestParameters: GetClicksByQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AffiliateClicksResponse>> {
        if (requestParameters.clickQuery === null || requestParameters.clickQuery === undefined) {
            throw new runtime.RequiredError('clickQuery','Required parameter requestParameters.clickQuery was null or undefined when calling getClicksByQuery.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['_limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['_offset'] = requestParameters.offset;
        }

        if (requestParameters.expand !== undefined) {
            queryParameters['_expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["affiliate_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/affiliate/clicks/query`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AffiliateClickQueryToJSON(requestParameters.clickQuery),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AffiliateClicksResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves a group of clicks from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the clicks returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * Retrieve clicks
     */
    async getClicksByQuery(requestParameters: GetClicksByQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AffiliateClicksResponse> {
        const response = await this.getClicksByQueryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a group of ledger entries from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the ledgers returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * Retrieve ledger entries
     */
    async getLedgersByQueryRaw(requestParameters: GetLedgersByQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AffiliateLedgersResponse>> {
        if (requestParameters.ledgerQuery === null || requestParameters.ledgerQuery === undefined) {
            throw new runtime.RequiredError('ledgerQuery','Required parameter requestParameters.ledgerQuery was null or undefined when calling getLedgersByQuery.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['_limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['_offset'] = requestParameters.offset;
        }

        if (requestParameters.expand !== undefined) {
            queryParameters['_expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["affiliate_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/affiliate/ledgers/query`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AffiliateLedgerQueryToJSON(requestParameters.ledgerQuery),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AffiliateLedgersResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves a group of ledger entries from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the ledgers returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * Retrieve ledger entries
     */
    async getLedgersByQuery(requestParameters: GetLedgersByQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AffiliateLedgersResponse> {
        const response = await this.getLedgersByQueryRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
