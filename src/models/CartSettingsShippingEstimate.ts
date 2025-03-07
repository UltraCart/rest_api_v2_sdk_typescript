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
    Currency,
    CurrencyFromJSON,
    CurrencyFromJSONTyped,
    CurrencyToJSON,
} from './Currency';

/**
 * 
 * @export
 * @interface CartSettingsShippingEstimate
 */
export interface CartSettingsShippingEstimate {
    /**
     * True if this method allows the customer to use their own shipper account number
     * @type {boolean}
     * @memberof CartSettingsShippingEstimate
     */
    allow_3rd_party_billing?: boolean;
    /**
     * Comment to display to the customer about this method
     * @type {string}
     * @memberof CartSettingsShippingEstimate
     */
    comment?: string;
    /**
     * 
     * @type {Currency}
     * @memberof CartSettingsShippingEstimate
     */
    cost?: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof CartSettingsShippingEstimate
     */
    cost_before_discount?: Currency;
    /**
     * True if this is the default method
     * @type {boolean}
     * @memberof CartSettingsShippingEstimate
     */
    default_method?: boolean;
    /**
     * 
     * @type {Currency}
     * @memberof CartSettingsShippingEstimate
     */
    discount?: Currency;
    /**
     * True if this method is discounted because of a coupon
     * @type {boolean}
     * @memberof CartSettingsShippingEstimate
     */
    discounted?: boolean;
    /**
     * The name to display to the customer
     * @type {string}
     * @memberof CartSettingsShippingEstimate
     */
    display_name?: string;
    /**
     * Date of the estimated delivery (or range)
     * @type {string}
     * @memberof CartSettingsShippingEstimate
     */
    estimated_delivery?: string;
    /**
     * True if a lift gate option for this method should be offered to the customer
     * @type {boolean}
     * @memberof CartSettingsShippingEstimate
     */
    lift_gate_option?: boolean;
    /**
     * Shipping method name
     * @type {string}
     * @memberof CartSettingsShippingEstimate
     */
    name?: string;
    /**
     * True if this shipping method requires customers to physically pickup product themselves
     * @type {boolean}
     * @memberof CartSettingsShippingEstimate
     */
    pickup?: boolean;
    /**
     * 
     * @type {Currency}
     * @memberof CartSettingsShippingEstimate
     */
    tax?: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof CartSettingsShippingEstimate
     */
    total_tax?: Currency;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof CartSettingsShippingEstimate)[] = ["allow_3rd_party_billing", "comment", "cost", "cost_before_discount", "default_method", "discount", "discounted", "display_name", "estimated_delivery", "lift_gate_option", "name", "pickup", "tax", "total_tax"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the CartSettingsShippingEstimate interface.
 */
export function instanceOfCartSettingsShippingEstimate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CartSettingsShippingEstimateFromJSON(json: any): CartSettingsShippingEstimate {
    return CartSettingsShippingEstimateFromJSONTyped(json, false);
}

export function CartSettingsShippingEstimateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartSettingsShippingEstimate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allow_3rd_party_billing': !exists(json, 'allow_3rd_party_billing') ? undefined : json['allow_3rd_party_billing'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'cost': !exists(json, 'cost') ? undefined : CurrencyFromJSON(json['cost']),
        'cost_before_discount': !exists(json, 'cost_before_discount') ? undefined : CurrencyFromJSON(json['cost_before_discount']),
        'default_method': !exists(json, 'default_method') ? undefined : json['default_method'],
        'discount': !exists(json, 'discount') ? undefined : CurrencyFromJSON(json['discount']),
        'discounted': !exists(json, 'discounted') ? undefined : json['discounted'],
        'display_name': !exists(json, 'display_name') ? undefined : json['display_name'],
        'estimated_delivery': !exists(json, 'estimated_delivery') ? undefined : json['estimated_delivery'],
        'lift_gate_option': !exists(json, 'lift_gate_option') ? undefined : json['lift_gate_option'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'pickup': !exists(json, 'pickup') ? undefined : json['pickup'],
        'tax': !exists(json, 'tax') ? undefined : CurrencyFromJSON(json['tax']),
        'total_tax': !exists(json, 'total_tax') ? undefined : CurrencyFromJSON(json['total_tax']),
    };
}

export function CartSettingsShippingEstimateToJSON(value?: CartSettingsShippingEstimate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allow_3rd_party_billing': value.allow_3rd_party_billing,
        'comment': value.comment,
        'cost': CurrencyToJSON(value.cost),
        'cost_before_discount': CurrencyToJSON(value.cost_before_discount),
        'default_method': value.default_method,
        'discount': CurrencyToJSON(value.discount),
        'discounted': value.discounted,
        'display_name': value.display_name,
        'estimated_delivery': value.estimated_delivery,
        'lift_gate_option': value.lift_gate_option,
        'name': value.name,
        'pickup': value.pickup,
        'tax': CurrencyToJSON(value.tax),
        'total_tax': CurrencyToJSON(value.total_tax),
    };
}

