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
    AutoOrder,
    AutoOrderFromJSON,
    AutoOrderToJSON,
    AutoOrderQuery,
    AutoOrderQueryFromJSON,
    AutoOrderQueryToJSON,
    AutoOrderQueryBatch,
    AutoOrderQueryBatchFromJSON,
    AutoOrderQueryBatchToJSON,
    AutoOrderResponse,
    AutoOrderResponseFromJSON,
    AutoOrderResponseToJSON,
    AutoOrdersRequest,
    AutoOrdersRequestFromJSON,
    AutoOrdersRequestToJSON,
    AutoOrdersResponse,
    AutoOrdersResponseFromJSON,
    AutoOrdersResponseToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface EstablishAutoOrderByReferenceOrderIdRequest {
    referenceOrderId: string;
    expand?: string;
}

export interface GetAutoOrderRequest {
    autoOrderOid: number;
    expand?: string;
}

export interface GetAutoOrderByCodeRequest {
    autoOrderCode: string;
    expand?: string;
}

export interface GetAutoOrderByReferenceOrderIdRequest {
    referenceOrderId: string;
    expand?: string;
}

export interface GetAutoOrdersRequest {
    autoOrderCode?: string;
    originalOrderId?: string;
    firstName?: string;
    lastName?: string;
    company?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    countryCode?: string;
    phone?: string;
    email?: string;
    originalOrderDateBegin?: string;
    originalOrderDateEnd?: string;
    nextShipmentDateBegin?: string;
    nextShipmentDateEnd?: string;
    cardType?: string;
    itemId?: string;
    status?: string;
    limit?: number;
    offset?: number;
    since?: string;
    sort?: string;
    expand?: string;
}

export interface GetAutoOrdersBatchRequest {
    autoOrderBatch: AutoOrderQueryBatch;
    expand?: string;
}

export interface GetAutoOrdersByQueryRequest {
    autoOrderQuery: AutoOrderQuery;
    limit?: number;
    offset?: number;
    sort?: string;
    expand?: string;
}

export interface UpdateAutoOrderRequest {
    autoOrderOid: number;
    autoOrder: AutoOrder;
    validateOriginalOrder?: string;
    expand?: string;
}

export interface UpdateAutoOrdersBatchRequest {
    autoOrdersRequest: AutoOrdersRequest;
    expand?: string;
    placeholders?: boolean;
    async?: boolean;
}

/**
 * AutoOrderApi - interface
 * 
 * @export
 * @interface AutoOrderApiInterface
 */
export interface AutoOrderApiInterface {
    /**
     * Establish an auto order by referencing a regular order id.  The result will be an auto order without any items.  You should add the items and perform an update call.  Orders must be less than 60 days old and use a credit card payment. 
     * @summary Establish an auto order by referencing a regular order id
     * @param {string} referenceOrderId The order id to attach this auto order to
     * @param {string} [expand] The object expansion to perform on the result.  See documentation for examples
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AutoOrderApiInterface
     */
    establishAutoOrderByReferenceOrderIdRaw(requestParameters: EstablishAutoOrderByReferenceOrderIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoOrderResponse>>;

    /**
     * Establish an auto order by referencing a regular order id.  The result will be an auto order without any items.  You should add the items and perform an update call.  Orders must be less than 60 days old and use a credit card payment. 
     * Establish an auto order by referencing a regular order id
     */
    establishAutoOrderByReferenceOrderId(requestParameters: EstablishAutoOrderByReferenceOrderIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoOrderResponse>;

    /**
     * Retrieves a single auto order using the specified auto order oid. 
     * @summary Retrieve an auto order by oid
     * @param {number} autoOrderOid The auto order oid to retrieve.
     * @param {string} [expand] The object expansion to perform on the result.  See documentation for examples
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AutoOrderApiInterface
     */
    getAutoOrderRaw(requestParameters: GetAutoOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoOrderResponse>>;

    /**
     * Retrieves a single auto order using the specified auto order oid. 
     * Retrieve an auto order by oid
     */
    getAutoOrder(requestParameters: GetAutoOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoOrderResponse>;

    /**
     * Retrieves a single auto order using the specified reference (original) order id. 
     * @summary Retrieve an auto order by code
     * @param {string} autoOrderCode The auto order oid to retrieve.
     * @param {string} [expand] The object expansion to perform on the result.  See documentation for examples
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AutoOrderApiInterface
     */
    getAutoOrderByCodeRaw(requestParameters: GetAutoOrderByCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoOrderResponse>>;

    /**
     * Retrieves a single auto order using the specified reference (original) order id. 
     * Retrieve an auto order by code
     */
    getAutoOrderByCode(requestParameters: GetAutoOrderByCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoOrderResponse>;

    /**
     * Retrieves a single auto order using the specified reference (original) order id. 
     * @summary Retrieve an auto order by order id
     * @param {string} referenceOrderId The auto order oid to retrieve.
     * @param {string} [expand] The object expansion to perform on the result.  See documentation for examples
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AutoOrderApiInterface
     */
    getAutoOrderByReferenceOrderIdRaw(requestParameters: GetAutoOrderByReferenceOrderIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoOrderResponse>>;

    /**
     * Retrieves a single auto order using the specified reference (original) order id. 
     * Retrieve an auto order by order id
     */
    getAutoOrderByReferenceOrderId(requestParameters: GetAutoOrderByReferenceOrderIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoOrderResponse>;

    /**
     * Retrieves auto orders from the account.  If no parameters are specified, all auto orders will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @summary Retrieve auto orders
     * @param {string} [autoOrderCode] Auto order code
     * @param {string} [originalOrderId] Original order id
     * @param {string} [firstName] First name
     * @param {string} [lastName] Last name
     * @param {string} [company] Company
     * @param {string} [city] City
     * @param {string} [state] State
     * @param {string} [postalCode] Postal code
     * @param {string} [countryCode] Country code (ISO-3166 two letter)
     * @param {string} [phone] Phone
     * @param {string} [email] Email
     * @param {string} [originalOrderDateBegin] Original order date begin
     * @param {string} [originalOrderDateEnd] Original order date end
     * @param {string} [nextShipmentDateBegin] Next shipment date begin
     * @param {string} [nextShipmentDateEnd] Next shipment date end
     * @param {string} [cardType] Card type
     * @param {string} [itemId] Item ID
     * @param {string} [status] Status
     * @param {number} [limit] The maximum number of records to return on this one API call. (Max 200)
     * @param {number} [offset] Pagination of the record set.  Offset is a zero based index.
     * @param {string} [since] Fetch auto orders that have been created/modified since this date/time.
     * @param {string} [sort] The sort order of the auto orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {string} [expand] The object expansion to perform on the result.  See documentation for examples
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AutoOrderApiInterface
     */
    getAutoOrdersRaw(requestParameters: GetAutoOrdersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoOrdersResponse>>;

    /**
     * Retrieves auto orders from the account.  If no parameters are specified, all auto orders will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * Retrieve auto orders
     */
    getAutoOrders(requestParameters: GetAutoOrdersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoOrdersResponse>;

    /**
     * Retrieves a group of auto orders from the account based on an array of auto order oids.  If more than 200 auto order ids are specified, the API call will fail with a bad request error. 
     * @summary Retrieve auto order batch
     * @param {AutoOrderQueryBatch} autoOrderBatch Auto order batch
     * @param {string} [expand] The object expansion to perform on the result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AutoOrderApiInterface
     */
    getAutoOrdersBatchRaw(requestParameters: GetAutoOrdersBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoOrdersResponse>>;

    /**
     * Retrieves a group of auto orders from the account based on an array of auto order oids.  If more than 200 auto order ids are specified, the API call will fail with a bad request error. 
     * Retrieve auto order batch
     */
    getAutoOrdersBatch(requestParameters: GetAutoOrdersBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoOrdersResponse>;

    /**
     * Retrieves a group of auto orders from the account based on a query object.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * @summary Retrieve auto orders by query
     * @param {AutoOrderQuery} autoOrderQuery Auto order query
     * @param {number} [limit] The maximum number of records to return on this one API call. (Maximum 200)
     * @param {number} [offset] Pagination of the record set.  Offset is a zero based index.
     * @param {string} [sort] The sort order of the auto orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {string} [expand] The object expansion to perform on the result.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AutoOrderApiInterface
     */
    getAutoOrdersByQueryRaw(requestParameters: GetAutoOrdersByQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoOrdersResponse>>;

    /**
     * Retrieves a group of auto orders from the account based on a query object.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * Retrieve auto orders by query
     */
    getAutoOrdersByQuery(requestParameters: GetAutoOrdersByQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoOrdersResponse>;

    /**
     * Update an auto order on the UltraCart account. 
     * @summary Update an auto order
     * @param {number} autoOrderOid The auto order oid to update.
     * @param {AutoOrder} autoOrder Auto order to update
     * @param {string} [validateOriginalOrder] Validate original order before updating
     * @param {string} [expand] The object expansion to perform on the result.  See documentation for examples
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AutoOrderApiInterface
     */
    updateAutoOrderRaw(requestParameters: UpdateAutoOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoOrderResponse>>;

    /**
     * Update an auto order on the UltraCart account. 
     * Update an auto order
     */
    updateAutoOrder(requestParameters: UpdateAutoOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoOrderResponse>;

    /**
     * Update multiple auto orders on the UltraCart account. 
     * @summary Update multiple auto orders
     * @param {AutoOrdersRequest} autoOrdersRequest Auto orders to update (synchronous maximum 20 / asynchronous maximum 100)
     * @param {string} [expand] The object expansion to perform on the result.  See documentation for examples
     * @param {boolean} [placeholders] Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API.
     * @param {boolean} [async] True if the operation should be run async.  No result returned
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AutoOrderApiInterface
     */
    updateAutoOrdersBatchRaw(requestParameters: UpdateAutoOrdersBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoOrdersResponse>>;

    /**
     * Update multiple auto orders on the UltraCart account. 
     * Update multiple auto orders
     */
    updateAutoOrdersBatch(requestParameters: UpdateAutoOrdersBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoOrdersResponse>;

}

/**
 * 
 */
export class AutoOrderApi extends runtime.BaseAPI implements AutoOrderApiInterface {

    /**
     * Establish an auto order by referencing a regular order id.  The result will be an auto order without any items.  You should add the items and perform an update call.  Orders must be less than 60 days old and use a credit card payment. 
     * Establish an auto order by referencing a regular order id
     */
    async establishAutoOrderByReferenceOrderIdRaw(requestParameters: EstablishAutoOrderByReferenceOrderIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoOrderResponse>> {
        if (requestParameters.referenceOrderId === null || requestParameters.referenceOrderId === undefined) {
            throw new runtime.RequiredError('referenceOrderId','Required parameter requestParameters.referenceOrderId was null or undefined when calling establishAutoOrderByReferenceOrderId.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['_expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["auto_order_write"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/auto_order/auto_orders/reference_order_id/{reference_order_id}`.replace(`{${"reference_order_id"}}`, encodeURIComponent(String(requestParameters.referenceOrderId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AutoOrderResponseFromJSON(jsonValue));
    }

    /**
     * Establish an auto order by referencing a regular order id.  The result will be an auto order without any items.  You should add the items and perform an update call.  Orders must be less than 60 days old and use a credit card payment. 
     * Establish an auto order by referencing a regular order id
     */
    async establishAutoOrderByReferenceOrderId(requestParameters: EstablishAutoOrderByReferenceOrderIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoOrderResponse> {
        const response = await this.establishAutoOrderByReferenceOrderIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a single auto order using the specified auto order oid. 
     * Retrieve an auto order by oid
     */
    async getAutoOrderRaw(requestParameters: GetAutoOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoOrderResponse>> {
        if (requestParameters.autoOrderOid === null || requestParameters.autoOrderOid === undefined) {
            throw new runtime.RequiredError('autoOrderOid','Required parameter requestParameters.autoOrderOid was null or undefined when calling getAutoOrder.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['_expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["auto_order_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/auto_order/auto_orders/{auto_order_oid}`.replace(`{${"auto_order_oid"}}`, encodeURIComponent(String(requestParameters.autoOrderOid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AutoOrderResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves a single auto order using the specified auto order oid. 
     * Retrieve an auto order by oid
     */
    async getAutoOrder(requestParameters: GetAutoOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoOrderResponse> {
        const response = await this.getAutoOrderRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a single auto order using the specified reference (original) order id. 
     * Retrieve an auto order by code
     */
    async getAutoOrderByCodeRaw(requestParameters: GetAutoOrderByCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoOrderResponse>> {
        if (requestParameters.autoOrderCode === null || requestParameters.autoOrderCode === undefined) {
            throw new runtime.RequiredError('autoOrderCode','Required parameter requestParameters.autoOrderCode was null or undefined when calling getAutoOrderByCode.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['_expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["auto_order_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/auto_order/auto_orders/code/{auto_order_code}`.replace(`{${"auto_order_code"}}`, encodeURIComponent(String(requestParameters.autoOrderCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AutoOrderResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves a single auto order using the specified reference (original) order id. 
     * Retrieve an auto order by code
     */
    async getAutoOrderByCode(requestParameters: GetAutoOrderByCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoOrderResponse> {
        const response = await this.getAutoOrderByCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a single auto order using the specified reference (original) order id. 
     * Retrieve an auto order by order id
     */
    async getAutoOrderByReferenceOrderIdRaw(requestParameters: GetAutoOrderByReferenceOrderIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoOrderResponse>> {
        if (requestParameters.referenceOrderId === null || requestParameters.referenceOrderId === undefined) {
            throw new runtime.RequiredError('referenceOrderId','Required parameter requestParameters.referenceOrderId was null or undefined when calling getAutoOrderByReferenceOrderId.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['_expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["auto_order_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/auto_order/auto_orders/reference_order_id/{reference_order_id}`.replace(`{${"reference_order_id"}}`, encodeURIComponent(String(requestParameters.referenceOrderId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AutoOrderResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves a single auto order using the specified reference (original) order id. 
     * Retrieve an auto order by order id
     */
    async getAutoOrderByReferenceOrderId(requestParameters: GetAutoOrderByReferenceOrderIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoOrderResponse> {
        const response = await this.getAutoOrderByReferenceOrderIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves auto orders from the account.  If no parameters are specified, all auto orders will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * Retrieve auto orders
     */
    async getAutoOrdersRaw(requestParameters: GetAutoOrdersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoOrdersResponse>> {
        const queryParameters: any = {};

        if (requestParameters.autoOrderCode !== undefined) {
            queryParameters['auto_order_code'] = requestParameters.autoOrderCode;
        }

        if (requestParameters.originalOrderId !== undefined) {
            queryParameters['original_order_id'] = requestParameters.originalOrderId;
        }

        if (requestParameters.firstName !== undefined) {
            queryParameters['first_name'] = requestParameters.firstName;
        }

        if (requestParameters.lastName !== undefined) {
            queryParameters['last_name'] = requestParameters.lastName;
        }

        if (requestParameters.company !== undefined) {
            queryParameters['company'] = requestParameters.company;
        }

        if (requestParameters.city !== undefined) {
            queryParameters['city'] = requestParameters.city;
        }

        if (requestParameters.state !== undefined) {
            queryParameters['state'] = requestParameters.state;
        }

        if (requestParameters.postalCode !== undefined) {
            queryParameters['postal_code'] = requestParameters.postalCode;
        }

        if (requestParameters.countryCode !== undefined) {
            queryParameters['country_code'] = requestParameters.countryCode;
        }

        if (requestParameters.phone !== undefined) {
            queryParameters['phone'] = requestParameters.phone;
        }

        if (requestParameters.email !== undefined) {
            queryParameters['email'] = requestParameters.email;
        }

        if (requestParameters.originalOrderDateBegin !== undefined) {
            queryParameters['original_order_date_begin'] = requestParameters.originalOrderDateBegin;
        }

        if (requestParameters.originalOrderDateEnd !== undefined) {
            queryParameters['original_order_date_end'] = requestParameters.originalOrderDateEnd;
        }

        if (requestParameters.nextShipmentDateBegin !== undefined) {
            queryParameters['next_shipment_date_begin'] = requestParameters.nextShipmentDateBegin;
        }

        if (requestParameters.nextShipmentDateEnd !== undefined) {
            queryParameters['next_shipment_date_end'] = requestParameters.nextShipmentDateEnd;
        }

        if (requestParameters.cardType !== undefined) {
            queryParameters['card_type'] = requestParameters.cardType;
        }

        if (requestParameters.itemId !== undefined) {
            queryParameters['item_id'] = requestParameters.itemId;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
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
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["auto_order_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/auto_order/auto_orders`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AutoOrdersResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves auto orders from the account.  If no parameters are specified, all auto orders will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * Retrieve auto orders
     */
    async getAutoOrders(requestParameters: GetAutoOrdersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoOrdersResponse> {
        const response = await this.getAutoOrdersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a group of auto orders from the account based on an array of auto order oids.  If more than 200 auto order ids are specified, the API call will fail with a bad request error. 
     * Retrieve auto order batch
     */
    async getAutoOrdersBatchRaw(requestParameters: GetAutoOrdersBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoOrdersResponse>> {
        if (requestParameters.autoOrderBatch === null || requestParameters.autoOrderBatch === undefined) {
            throw new runtime.RequiredError('autoOrderBatch','Required parameter requestParameters.autoOrderBatch was null or undefined when calling getAutoOrdersBatch.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['_expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["order_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/auto_order/auto_orders/batch`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AutoOrderQueryBatchToJSON(requestParameters.autoOrderBatch),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AutoOrdersResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves a group of auto orders from the account based on an array of auto order oids.  If more than 200 auto order ids are specified, the API call will fail with a bad request error. 
     * Retrieve auto order batch
     */
    async getAutoOrdersBatch(requestParameters: GetAutoOrdersBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoOrdersResponse> {
        const response = await this.getAutoOrdersBatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a group of auto orders from the account based on a query object.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * Retrieve auto orders by query
     */
    async getAutoOrdersByQueryRaw(requestParameters: GetAutoOrdersByQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoOrdersResponse>> {
        if (requestParameters.autoOrderQuery === null || requestParameters.autoOrderQuery === undefined) {
            throw new runtime.RequiredError('autoOrderQuery','Required parameter requestParameters.autoOrderQuery was null or undefined when calling getAutoOrdersByQuery.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['_limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['_offset'] = requestParameters.offset;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['_sort'] = requestParameters.sort;
        }

        if (requestParameters.expand !== undefined) {
            queryParameters['_expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["order_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/auto_order/auto_orders/query`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AutoOrderQueryToJSON(requestParameters.autoOrderQuery),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AutoOrdersResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves a group of auto orders from the account based on a query object.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 
     * Retrieve auto orders by query
     */
    async getAutoOrdersByQuery(requestParameters: GetAutoOrdersByQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoOrdersResponse> {
        const response = await this.getAutoOrdersByQueryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an auto order on the UltraCart account. 
     * Update an auto order
     */
    async updateAutoOrderRaw(requestParameters: UpdateAutoOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoOrderResponse>> {
        if (requestParameters.autoOrderOid === null || requestParameters.autoOrderOid === undefined) {
            throw new runtime.RequiredError('autoOrderOid','Required parameter requestParameters.autoOrderOid was null or undefined when calling updateAutoOrder.');
        }

        if (requestParameters.autoOrder === null || requestParameters.autoOrder === undefined) {
            throw new runtime.RequiredError('autoOrder','Required parameter requestParameters.autoOrder was null or undefined when calling updateAutoOrder.');
        }

        const queryParameters: any = {};

        if (requestParameters.validateOriginalOrder !== undefined) {
            queryParameters['validate_original_order'] = requestParameters.validateOriginalOrder;
        }

        if (requestParameters.expand !== undefined) {
            queryParameters['_expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json; charset=UTF-8';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["auto_order_write"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/auto_order/auto_orders/{auto_order_oid}`.replace(`{${"auto_order_oid"}}`, encodeURIComponent(String(requestParameters.autoOrderOid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AutoOrderToJSON(requestParameters.autoOrder),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AutoOrderResponseFromJSON(jsonValue));
    }

    /**
     * Update an auto order on the UltraCart account. 
     * Update an auto order
     */
    async updateAutoOrder(requestParameters: UpdateAutoOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoOrderResponse> {
        const response = await this.updateAutoOrderRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update multiple auto orders on the UltraCart account. 
     * Update multiple auto orders
     */
    async updateAutoOrdersBatchRaw(requestParameters: UpdateAutoOrdersBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AutoOrdersResponse>> {
        if (requestParameters.autoOrdersRequest === null || requestParameters.autoOrdersRequest === undefined) {
            throw new runtime.RequiredError('autoOrdersRequest','Required parameter requestParameters.autoOrdersRequest was null or undefined when calling updateAutoOrdersBatch.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['_expand'] = requestParameters.expand;
        }

        if (requestParameters.placeholders !== undefined) {
            queryParameters['_placeholders'] = requestParameters.placeholders;
        }

        if (requestParameters.async !== undefined) {
            queryParameters['_async'] = requestParameters.async;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json; charset=UTF-8';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["auto_order_write"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/auto_order/auto_orders/batch`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AutoOrdersRequestToJSON(requestParameters.autoOrdersRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AutoOrdersResponseFromJSON(jsonValue));
    }

    /**
     * Update multiple auto orders on the UltraCart account. 
     * Update multiple auto orders
     */
    async updateAutoOrdersBatch(requestParameters: UpdateAutoOrdersBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AutoOrdersResponse> {
        const response = await this.updateAutoOrdersBatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
