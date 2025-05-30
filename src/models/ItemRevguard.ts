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
 * @interface ItemRevguard
 */
export interface ItemRevguard {
    /**
     * Canceled CSR prompt group
     * @type {number}
     * @memberof ItemRevguard
     */
    revguard_canceled_csr_prompt_group?: number;
    /**
     * IVR prompt group
     * @type {number}
     * @memberof ItemRevguard
     */
    revguard_canceled_ivr_prompt_group?: number;
    /**
     * Canceled web prompt group
     * @type {number}
     * @memberof ItemRevguard
     */
    revguard_canceled_web_prompt_group?: number;
    /**
     * Client brand
     * @type {number}
     * @memberof ItemRevguard
     */
    revguard_client_brand?: number;
    /**
     * CSR prompt group
     * @type {number}
     * @memberof ItemRevguard
     */
    revguard_csr_prompt_group?: number;
    /**
     * IVR prompt group
     * @type {number}
     * @memberof ItemRevguard
     */
    revguard_ivr_prompt_group?: number;
    /**
     * Web prompt group
     * @type {number}
     * @memberof ItemRevguard
     */
    revguard_web_prompt_group?: number;
}



/**
 * Check if a given object implements the ItemRevguard interface.
 */
export function instanceOfItemRevguard(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemRevguardFromJSON(json: any): ItemRevguard {
    return ItemRevguardFromJSONTyped(json, false);
}

export function ItemRevguardFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemRevguard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'revguard_canceled_csr_prompt_group': !exists(json, 'revguard_canceled_csr_prompt_group') ? undefined : json['revguard_canceled_csr_prompt_group'],
        'revguard_canceled_ivr_prompt_group': !exists(json, 'revguard_canceled_ivr_prompt_group') ? undefined : json['revguard_canceled_ivr_prompt_group'],
        'revguard_canceled_web_prompt_group': !exists(json, 'revguard_canceled_web_prompt_group') ? undefined : json['revguard_canceled_web_prompt_group'],
        'revguard_client_brand': !exists(json, 'revguard_client_brand') ? undefined : json['revguard_client_brand'],
        'revguard_csr_prompt_group': !exists(json, 'revguard_csr_prompt_group') ? undefined : json['revguard_csr_prompt_group'],
        'revguard_ivr_prompt_group': !exists(json, 'revguard_ivr_prompt_group') ? undefined : json['revguard_ivr_prompt_group'],
        'revguard_web_prompt_group': !exists(json, 'revguard_web_prompt_group') ? undefined : json['revguard_web_prompt_group'],
    };
}

export function ItemRevguardToJSON(value?: ItemRevguard | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'revguard_canceled_csr_prompt_group': value.revguard_canceled_csr_prompt_group,
        'revguard_canceled_ivr_prompt_group': value.revguard_canceled_ivr_prompt_group,
        'revguard_canceled_web_prompt_group': value.revguard_canceled_web_prompt_group,
        'revguard_client_brand': value.revguard_client_brand,
        'revguard_csr_prompt_group': value.revguard_csr_prompt_group,
        'revguard_ivr_prompt_group': value.revguard_ivr_prompt_group,
        'revguard_web_prompt_group': value.revguard_web_prompt_group,
    };
}

