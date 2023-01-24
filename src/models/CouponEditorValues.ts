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
    CouponType,
    CouponTypeFromJSON,
    CouponTypeFromJSONTyped,
    CouponTypeToJSON,
} from './CouponType';
import {
    SimpleValue,
    SimpleValueFromJSON,
    SimpleValueFromJSONTyped,
    SimpleValueToJSON,
} from './SimpleValue';

/**
 * 
 * @export
 * @interface CouponEditorValues
 */
export interface CouponEditorValues {
    /**
     * affiliates
     * @type {Array<SimpleValue>}
     * @memberof CouponEditorValues
     */
    affiliates?: Array<SimpleValue>;
    /**
     * coupon_types
     * @type {Array<string>}
     * @memberof CouponEditorValues
     */
    coupon_types?: Array<string>;
    /**
     * coupon_types_for_display
     * @type {Array<CouponType>}
     * @memberof CouponEditorValues
     */
    coupon_types_for_display?: Array<CouponType>;
    /**
     * currency_codes
     * @type {Array<string>}
     * @memberof CouponEditorValues
     */
    currency_codes?: Array<string>;
    /**
     * deprecated_themes
     * @type {Array<SimpleValue>}
     * @memberof CouponEditorValues
     */
    deprecated_themes?: Array<SimpleValue>;
    /**
     * mix_and_match_names
     * @type {Array<string>}
     * @memberof CouponEditorValues
     */
    mix_and_match_names?: Array<string>;
    /**
     * shipping_methods
     * @type {Array<string>}
     * @memberof CouponEditorValues
     */
    shipping_methods?: Array<string>;
    /**
     * storefronts
     * @type {Array<SimpleValue>}
     * @memberof CouponEditorValues
     */
    storefronts?: Array<SimpleValue>;
    /**
     * usable_by
     * @type {Array<SimpleValue>}
     * @memberof CouponEditorValues
     */
    usable_by?: Array<SimpleValue>;
    /**
     * valid_with_other_coupons
     * @type {Array<string>}
     * @memberof CouponEditorValues
     */
    valid_with_other_coupons?: Array<string>;
}

export function CouponEditorValuesFromJSON(json: any): CouponEditorValues {
    return CouponEditorValuesFromJSONTyped(json, false);
}

export function CouponEditorValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponEditorValues {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'affiliates': !exists(json, 'affiliates') ? undefined : ((json['affiliates'] as Array<any>).map(SimpleValueFromJSON)),
        'coupon_types': !exists(json, 'coupon_types') ? undefined : json['coupon_types'],
        'coupon_types_for_display': !exists(json, 'coupon_types_for_display') ? undefined : ((json['coupon_types_for_display'] as Array<any>).map(CouponTypeFromJSON)),
        'currency_codes': !exists(json, 'currency_codes') ? undefined : json['currency_codes'],
        'deprecated_themes': !exists(json, 'deprecated_themes') ? undefined : ((json['deprecated_themes'] as Array<any>).map(SimpleValueFromJSON)),
        'mix_and_match_names': !exists(json, 'mix_and_match_names') ? undefined : json['mix_and_match_names'],
        'shipping_methods': !exists(json, 'shipping_methods') ? undefined : json['shipping_methods'],
        'storefronts': !exists(json, 'storefronts') ? undefined : ((json['storefronts'] as Array<any>).map(SimpleValueFromJSON)),
        'usable_by': !exists(json, 'usable_by') ? undefined : ((json['usable_by'] as Array<any>).map(SimpleValueFromJSON)),
        'valid_with_other_coupons': !exists(json, 'valid_with_other_coupons') ? undefined : json['valid_with_other_coupons'],
    };
}

export function CouponEditorValuesToJSON(value?: CouponEditorValues | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'affiliates': value.affiliates === undefined ? undefined : ((value.affiliates as Array<any>).map(SimpleValueToJSON)),
        'coupon_types': value.coupon_types,
        'coupon_types_for_display': value.coupon_types_for_display === undefined ? undefined : ((value.coupon_types_for_display as Array<any>).map(CouponTypeToJSON)),
        'currency_codes': value.currency_codes,
        'deprecated_themes': value.deprecated_themes === undefined ? undefined : ((value.deprecated_themes as Array<any>).map(SimpleValueToJSON)),
        'mix_and_match_names': value.mix_and_match_names,
        'shipping_methods': value.shipping_methods,
        'storefronts': value.storefronts === undefined ? undefined : ((value.storefronts as Array<any>).map(SimpleValueToJSON)),
        'usable_by': value.usable_by === undefined ? undefined : ((value.usable_by as Array<any>).map(SimpleValueToJSON)),
        'valid_with_other_coupons': value.valid_with_other_coupons,
    };
}
