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
    CustomerStoreCreditLedgerEntry,
    CustomerStoreCreditLedgerEntryFromJSON,
    CustomerStoreCreditLedgerEntryFromJSONTyped,
    CustomerStoreCreditLedgerEntryToJSON,
} from './CustomerStoreCreditLedgerEntry';

/**
 * 
 * @export
 * @interface CustomerStoreCredit
 */
export interface CustomerStoreCredit {
    /**
     * Available store credit which is defined as unused and vested
     * @type {number}
     * @memberof CustomerStoreCredit
     */
    available?: number;
    /**
     * Amount of store credit expiring within 30 days
     * @type {number}
     * @memberof CustomerStoreCredit
     */
    expiring?: number;
    /**
     * Array of future ledger entries including expiring entries
     * @type {Array<CustomerStoreCreditLedgerEntry>}
     * @memberof CustomerStoreCredit
     */
    future_ledgers?: Array<CustomerStoreCreditLedgerEntry>;
    /**
     * Array of past ledger entries including accrual, usage, and expiring entries
     * @type {Array<CustomerStoreCreditLedgerEntry>}
     * @memberof CustomerStoreCredit
     */
    past_ledgers?: Array<CustomerStoreCreditLedgerEntry>;
    /**
     * Total lifetime store credit for this customer.
     * @type {number}
     * @memberof CustomerStoreCredit
     */
    total?: number;
    /**
     * Amount of store credit vesting
     * @type {number}
     * @memberof CustomerStoreCredit
     */
    vesting?: number;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof CustomerStoreCredit)[] = ["available", "expiring", "future_ledgers", "past_ledgers", "total", "vesting"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the CustomerStoreCredit interface.
 */
export function instanceOfCustomerStoreCredit(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerStoreCreditFromJSON(json: any): CustomerStoreCredit {
    return CustomerStoreCreditFromJSONTyped(json, false);
}

export function CustomerStoreCreditFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerStoreCredit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'available': !exists(json, 'available') ? undefined : json['available'],
        'expiring': !exists(json, 'expiring') ? undefined : json['expiring'],
        'future_ledgers': !exists(json, 'future_ledgers') ? undefined : ((json['future_ledgers'] as Array<any>).map(CustomerStoreCreditLedgerEntryFromJSON)),
        'past_ledgers': !exists(json, 'past_ledgers') ? undefined : ((json['past_ledgers'] as Array<any>).map(CustomerStoreCreditLedgerEntryFromJSON)),
        'total': !exists(json, 'total') ? undefined : json['total'],
        'vesting': !exists(json, 'vesting') ? undefined : json['vesting'],
    };
}

export function CustomerStoreCreditToJSON(value?: CustomerStoreCredit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'available': value.available,
        'expiring': value.expiring,
        'future_ledgers': value.future_ledgers === undefined ? undefined : ((value.future_ledgers as Array<any>).map(CustomerStoreCreditLedgerEntryToJSON)),
        'past_ledgers': value.past_ledgers === undefined ? undefined : ((value.past_ledgers as Array<any>).map(CustomerStoreCreditLedgerEntryToJSON)),
        'total': value.total,
        'vesting': value.vesting,
    };
}

