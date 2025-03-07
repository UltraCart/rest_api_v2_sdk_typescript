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
/**
 * 
 * @export
 * @interface PointOfSaleReader
 */
export interface PointOfSaleReader {
    /**
     * The device type of the reader.
     * @type {string}
     * @memberof PointOfSaleReader
     */
    device_type?: string;
    /**
     * The label of the reader.
     * @type {string}
     * @memberof PointOfSaleReader
     */
    label?: string;
    /**
     * The merchant id that owns this point of sale reader.
     * @type {string}
     * @memberof PointOfSaleReader
     */
    merchant_id?: string;
    /**
     * The payment provider for the card reader.
     * @type {string}
     * @memberof PointOfSaleReader
     */
    payment_provider?: PointOfSaleReaderPaymentProviderEnum;
    /**
     * Object identifier of the point of sale reader.
     * @type {number}
     * @memberof PointOfSaleReader
     */
    pos_reader_id?: number;
    /**
     * Object identifier of the point of sale register this reader is assigned to.
     * @type {number}
     * @memberof PointOfSaleReader
     */
    pos_register_oid?: number;
    /**
     * The serial number of the reader.
     * @type {string}
     * @memberof PointOfSaleReader
     */
    serial_number?: string;
    /**
     * If the payment provider is Stripe, this is the Stripe account id
     * @type {string}
     * @memberof PointOfSaleReader
     */
    stripe_account_id?: string;
    /**
     * If the payment provide is Stripe, this is the Stripe terminal reader id
     * @type {string}
     * @memberof PointOfSaleReader
     */
    stripe_reader_id?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof PointOfSaleReader)[] = ["device_type", "label", "merchant_id", "payment_provider", "pos_reader_id", "pos_register_oid", "serial_number", "stripe_account_id", "stripe_reader_id"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * @export
 */
export const PointOfSaleReaderPaymentProviderEnum = {
    Stripe: 'stripe'
} as const;
export type PointOfSaleReaderPaymentProviderEnum = typeof PointOfSaleReaderPaymentProviderEnum[keyof typeof PointOfSaleReaderPaymentProviderEnum];


/**
 * Check if a given object implements the PointOfSaleReader interface.
 */
export function instanceOfPointOfSaleReader(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PointOfSaleReaderFromJSON(json: any): PointOfSaleReader {
    return PointOfSaleReaderFromJSONTyped(json, false);
}

export function PointOfSaleReaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): PointOfSaleReader {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'device_type': !exists(json, 'device_type') ? undefined : json['device_type'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'payment_provider': !exists(json, 'payment_provider') ? undefined : json['payment_provider'],
        'pos_reader_id': !exists(json, 'pos_reader_id') ? undefined : json['pos_reader_id'],
        'pos_register_oid': !exists(json, 'pos_register_oid') ? undefined : json['pos_register_oid'],
        'serial_number': !exists(json, 'serial_number') ? undefined : json['serial_number'],
        'stripe_account_id': !exists(json, 'stripe_account_id') ? undefined : json['stripe_account_id'],
        'stripe_reader_id': !exists(json, 'stripe_reader_id') ? undefined : json['stripe_reader_id'],
    };
}

export function PointOfSaleReaderToJSON(value?: PointOfSaleReader | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'device_type': value.device_type,
        'label': value.label,
        'merchant_id': value.merchant_id,
        'payment_provider': value.payment_provider,
        'pos_reader_id': value.pos_reader_id,
        'pos_register_oid': value.pos_register_oid,
        'serial_number': value.serial_number,
        'stripe_account_id': value.stripe_account_id,
        'stripe_reader_id': value.stripe_reader_id,
    };
}

