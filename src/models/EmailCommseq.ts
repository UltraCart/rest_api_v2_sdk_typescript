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
    EmailCommseqStep,
    EmailCommseqStepFromJSON,
    EmailCommseqStepFromJSONTyped,
    EmailCommseqStepToJSON,
} from './EmailCommseqStep';

/**
 * 
 * @export
 * @interface EmailCommseq
 */
export interface EmailCommseq {
    /**
     * Array of steps
     * @type {Array<EmailCommseqStep>}
     * @memberof EmailCommseq
     */
    email_communication_sequence_steps?: Array<EmailCommseqStep>;
    /**
     * Email commseq UUID
     * @type {string}
     * @memberof EmailCommseq
     */
    email_communication_sequence_uuid?: string;
    /**
     * Merchant ID
     * @type {string}
     * @memberof EmailCommseq
     */
    merchant_id?: string;
    /**
     * Storefront oid
     * @type {number}
     * @memberof EmailCommseq
     */
    storefront_oid?: number;
}



/**
 * Check if a given object implements the EmailCommseq interface.
 */
export function instanceOfEmailCommseq(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailCommseqFromJSON(json: any): EmailCommseq {
    return EmailCommseqFromJSONTyped(json, false);
}

export function EmailCommseqFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailCommseq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email_communication_sequence_steps': !exists(json, 'email_communication_sequence_steps') ? undefined : ((json['email_communication_sequence_steps'] as Array<any>).map(EmailCommseqStepFromJSON)),
        'email_communication_sequence_uuid': !exists(json, 'email_communication_sequence_uuid') ? undefined : json['email_communication_sequence_uuid'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'storefront_oid': !exists(json, 'storefront_oid') ? undefined : json['storefront_oid'],
    };
}

export function EmailCommseqToJSON(value?: EmailCommseq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email_communication_sequence_steps': value.email_communication_sequence_steps === undefined ? undefined : ((value.email_communication_sequence_steps as Array<any>).map(EmailCommseqStepToJSON)),
        'email_communication_sequence_uuid': value.email_communication_sequence_uuid,
        'merchant_id': value.merchant_id,
        'storefront_oid': value.storefront_oid,
    };
}

