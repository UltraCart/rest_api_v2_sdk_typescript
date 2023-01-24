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

import { exists, mapValues } from '../runtime';
import {
    ModelError,
    ModelErrorFromJSON,
    ModelErrorFromJSONTyped,
    ModelErrorToJSON,
} from './ModelError';
import {
    ResponseMetadata,
    ResponseMetadataFromJSON,
    ResponseMetadataFromJSONTyped,
    ResponseMetadataToJSON,
} from './ResponseMetadata';
import {
    Warning,
    WarningFromJSON,
    WarningFromJSONTyped,
    WarningToJSON,
} from './Warning';

/**
 * 
 * @export
 * @interface CouponExistsResponse
 */
export interface CouponExistsResponse {
    /**
     * Coupon Code
     * @type {string}
     * @memberof CouponExistsResponse
     */
    coupon_code?: string;
    /**
     * 
     * @type {ModelError}
     * @memberof CouponExistsResponse
     */
    error?: ModelError;
    /**
     * Exists
     * @type {boolean}
     * @memberof CouponExistsResponse
     */
    _exists?: boolean;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof CouponExistsResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof CouponExistsResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof CouponExistsResponse
     */
    warning?: Warning;
}

export function CouponExistsResponseFromJSON(json: any): CouponExistsResponse {
    return CouponExistsResponseFromJSONTyped(json, false);
}

export function CouponExistsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponExistsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'coupon_code': !exists(json, 'coupon_code') ? undefined : json['coupon_code'],
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        '_exists': !exists(json, 'exists') ? undefined : json['exists'],
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function CouponExistsResponseToJSON(value?: CouponExistsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'coupon_code': value.coupon_code,
        'error': ModelErrorToJSON(value.error),
        'exists': value._exists,
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}
