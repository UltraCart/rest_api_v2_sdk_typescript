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
    ChargebackDispute,
    ChargebackDisputeFromJSON,
    ChargebackDisputeToJSON,
    ChargebackDisputeResponse,
    ChargebackDisputeResponseFromJSON,
    ChargebackDisputeResponseToJSON,
    ChargebackDisputesResponse,
    ChargebackDisputesResponseFromJSON,
    ChargebackDisputesResponseToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface DeleteChargebackRequest {
    chargebackDisputeOid: number;
}

export interface GetChargebackDisputeRequest {
    chargebackDisputeOid: number;
    expand?: string;
}

export interface GetChargebackDisputesRequest {
    orderId?: string;
    caseNumber?: string;
    status?: string;
    expirationDtsStart?: string;
    expirationDtsEnd?: string;
    chargebackDtsStart?: string;
    chargebackDtsEnd?: string;
    limit?: number;
    offset?: number;
    since?: string;
    sort?: string;
    expand?: string;
}

export interface InsertChargebackRequest {
    chargeback: ChargebackDispute;
    expand?: string;
}

export interface UpdateChargebackRequest {
    chargebackDisputeOid: number;
    chargeback: ChargebackDispute;
    expand?: string;
}

/**
 * ChargebackApi - interface
 * 
 * @export
 * @interface ChargebackApiInterface
 */
export interface ChargebackApiInterface {
    /**
     * Delete a chargeback on the UltraCart account. 
     * @summary Delete a chargeback
     * @param {number} chargebackDisputeOid The chargeback_dispute_oid to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChargebackApiInterface
     */
    deleteChargebackRaw(requestParameters: DeleteChargebackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChargebackDisputeResponse>>;

    /**
     * Delete a chargeback on the UltraCart account. 
     * Delete a chargeback
     */
    deleteChargeback(requestParameters: DeleteChargebackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChargebackDisputeResponse>;

    /**
     * Retrieves a single chargeback using the specified chargeback dispute oid. 
     * @summary Retrieve a chargeback
     * @param {number} chargebackDisputeOid The chargeback dispute oid to retrieve.
     * @param {string} [expand] The object expansion to perform on the result.  See documentation for examples
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChargebackApiInterface
     */
    getChargebackDisputeRaw(requestParameters: GetChargebackDisputeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChargebackDisputeResponse>>;

    /**
     * Retrieves a single chargeback using the specified chargeback dispute oid. 
     * Retrieve a chargeback
     */
    getChargebackDispute(requestParameters: GetChargebackDisputeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChargebackDisputeResponse>;

    /**
     * Retrieves chargebacks from the account.  If no parameters are specified, all chargebacks will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @summary Retrieve chargebacks
     * @param {string} [orderId] Order Id
     * @param {string} [caseNumber] Case number
     * @param {string} [status] Status
     * @param {string} [expirationDtsStart] Expiration dts start
     * @param {string} [expirationDtsEnd] Expiration dts end
     * @param {string} [chargebackDtsStart] Chargeback dts start
     * @param {string} [chargebackDtsEnd] Chargeback dts end
     * @param {number} [limit] The maximum number of records to return on this one API call. (Max 200)
     * @param {number} [offset] Pagination of the record set.  Offset is a zero based index.
     * @param {string} [since] Fetch chargebacks that have been created/modified since this date/time.
     * @param {string} [sort] The sort order of the chargebacks.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {string} [expand] The object expansion to perform on the result.  See documentation for examples
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChargebackApiInterface
     */
    getChargebackDisputesRaw(requestParameters: GetChargebackDisputesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChargebackDisputesResponse>>;

    /**
     * Retrieves chargebacks from the account.  If no parameters are specified, all chargebacks will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * Retrieve chargebacks
     */
    getChargebackDisputes(requestParameters: GetChargebackDisputesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChargebackDisputesResponse>;

    /**
     * Insert a chargeback on the UltraCart account. 
     * @summary Insert a chargeback
     * @param {ChargebackDispute} chargeback Chargeback to insert
     * @param {string} [expand] The object expansion to perform on the result.  See documentation for examples
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChargebackApiInterface
     */
    insertChargebackRaw(requestParameters: InsertChargebackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChargebackDisputeResponse>>;

    /**
     * Insert a chargeback on the UltraCart account. 
     * Insert a chargeback
     */
    insertChargeback(requestParameters: InsertChargebackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChargebackDisputeResponse>;

    /**
     * Update a chargeback on the UltraCart account. 
     * @summary Update a chargeback
     * @param {number} chargebackDisputeOid The chargeback_dispute_oid to update.
     * @param {ChargebackDispute} chargeback Chargeback to update
     * @param {string} [expand] The object expansion to perform on the result.  See documentation for examples
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChargebackApiInterface
     */
    updateChargebackRaw(requestParameters: UpdateChargebackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChargebackDisputeResponse>>;

    /**
     * Update a chargeback on the UltraCart account. 
     * Update a chargeback
     */
    updateChargeback(requestParameters: UpdateChargebackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChargebackDisputeResponse>;

}

/**
 * 
 */
export class ChargebackApi extends runtime.BaseAPI implements ChargebackApiInterface {

    /**
     * Delete a chargeback on the UltraCart account. 
     * Delete a chargeback
     */
    async deleteChargebackRaw(requestParameters: DeleteChargebackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChargebackDisputeResponse>> {
        if (requestParameters.chargebackDisputeOid === null || requestParameters.chargebackDisputeOid === undefined) {
            throw new runtime.RequiredError('chargebackDisputeOid','Required parameter requestParameters.chargebackDisputeOid was null or undefined when calling deleteChargeback.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["chargeback_write"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/chargeback/chargebacks/{chargeback_dispute_oid}`.replace(`{${"chargeback_dispute_oid"}}`, encodeURIComponent(String(requestParameters.chargebackDisputeOid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChargebackDisputeResponseFromJSON(jsonValue));
    }

    /**
     * Delete a chargeback on the UltraCart account. 
     * Delete a chargeback
     */
    async deleteChargeback(requestParameters: DeleteChargebackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChargebackDisputeResponse> {
        const response = await this.deleteChargebackRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a single chargeback using the specified chargeback dispute oid. 
     * Retrieve a chargeback
     */
    async getChargebackDisputeRaw(requestParameters: GetChargebackDisputeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChargebackDisputeResponse>> {
        if (requestParameters.chargebackDisputeOid === null || requestParameters.chargebackDisputeOid === undefined) {
            throw new runtime.RequiredError('chargebackDisputeOid','Required parameter requestParameters.chargebackDisputeOid was null or undefined when calling getChargebackDispute.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['_expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["chargeback_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/chargeback/chargebacks/{chargeback_dispute_oid}`.replace(`{${"chargeback_dispute_oid"}}`, encodeURIComponent(String(requestParameters.chargebackDisputeOid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChargebackDisputeResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves a single chargeback using the specified chargeback dispute oid. 
     * Retrieve a chargeback
     */
    async getChargebackDispute(requestParameters: GetChargebackDisputeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChargebackDisputeResponse> {
        const response = await this.getChargebackDisputeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves chargebacks from the account.  If no parameters are specified, all chargebacks will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * Retrieve chargebacks
     */
    async getChargebackDisputesRaw(requestParameters: GetChargebackDisputesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChargebackDisputesResponse>> {
        const queryParameters: any = {};

        if (requestParameters.orderId !== undefined) {
            queryParameters['order_id'] = requestParameters.orderId;
        }

        if (requestParameters.caseNumber !== undefined) {
            queryParameters['case_number'] = requestParameters.caseNumber;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        if (requestParameters.expirationDtsStart !== undefined) {
            queryParameters['expiration_dts_start'] = requestParameters.expirationDtsStart;
        }

        if (requestParameters.expirationDtsEnd !== undefined) {
            queryParameters['expiration_dts_end'] = requestParameters.expirationDtsEnd;
        }

        if (requestParameters.chargebackDtsStart !== undefined) {
            queryParameters['chargeback_dts_start'] = requestParameters.chargebackDtsStart;
        }

        if (requestParameters.chargebackDtsEnd !== undefined) {
            queryParameters['chargeback_dts_end'] = requestParameters.chargebackDtsEnd;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['_limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['_offset'] = requestParameters.offset;
        }

        if (requestParameters.since !== undefined) {
            queryParameters['_since'] = requestParameters.since;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['_sort'] = requestParameters.sort;
        }

        if (requestParameters.expand !== undefined) {
            queryParameters['_expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["chargeback_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/chargeback/chargebacks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChargebackDisputesResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves chargebacks from the account.  If no parameters are specified, all chargebacks will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * Retrieve chargebacks
     */
    async getChargebackDisputes(requestParameters: GetChargebackDisputesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChargebackDisputesResponse> {
        const response = await this.getChargebackDisputesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Insert a chargeback on the UltraCart account. 
     * Insert a chargeback
     */
    async insertChargebackRaw(requestParameters: InsertChargebackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChargebackDisputeResponse>> {
        if (requestParameters.chargeback === null || requestParameters.chargeback === undefined) {
            throw new runtime.RequiredError('chargeback','Required parameter requestParameters.chargeback was null or undefined when calling insertChargeback.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['_expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json; charset=UTF-8';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["chargeback_write"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/chargeback/chargebacks`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ChargebackDisputeToJSON(requestParameters.chargeback),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChargebackDisputeResponseFromJSON(jsonValue));
    }

    /**
     * Insert a chargeback on the UltraCart account. 
     * Insert a chargeback
     */
    async insertChargeback(requestParameters: InsertChargebackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChargebackDisputeResponse> {
        const response = await this.insertChargebackRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a chargeback on the UltraCart account. 
     * Update a chargeback
     */
    async updateChargebackRaw(requestParameters: UpdateChargebackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChargebackDisputeResponse>> {
        if (requestParameters.chargebackDisputeOid === null || requestParameters.chargebackDisputeOid === undefined) {
            throw new runtime.RequiredError('chargebackDisputeOid','Required parameter requestParameters.chargebackDisputeOid was null or undefined when calling updateChargeback.');
        }

        if (requestParameters.chargeback === null || requestParameters.chargeback === undefined) {
            throw new runtime.RequiredError('chargeback','Required parameter requestParameters.chargeback was null or undefined when calling updateChargeback.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['_expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json; charset=UTF-8';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["chargeback_write"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/chargeback/chargebacks/{chargeback_dispute_oid}`.replace(`{${"chargeback_dispute_oid"}}`, encodeURIComponent(String(requestParameters.chargebackDisputeOid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ChargebackDisputeToJSON(requestParameters.chargeback),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChargebackDisputeResponseFromJSON(jsonValue));
    }

    /**
     * Update a chargeback on the UltraCart account. 
     * Update a chargeback
     */
    async updateChargeback(requestParameters: UpdateChargebackRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChargebackDisputeResponse> {
        const response = await this.updateChargebackRaw(requestParameters, initOverrides);
        return await response.value();
    }

}