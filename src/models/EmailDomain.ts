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
    Mailgun,
    MailgunFromJSON,
    MailgunFromJSONTyped,
    MailgunToJSON,
} from './Mailgun';
import {
    VerificationRecord,
    VerificationRecordFromJSON,
    VerificationRecordFromJSONTyped,
    VerificationRecordToJSON,
} from './VerificationRecord';

/**
 * 
 * @export
 * @interface EmailDomain
 */
export interface EmailDomain {
    /**
     * 
     * @type {string}
     * @memberof EmailDomain
     */
    comment?: string;
    /**
     * 
     * @type {Array<VerificationRecord>}
     * @memberof EmailDomain
     */
    dkim?: Array<VerificationRecord>;
    /**
     * 
     * @type {string}
     * @memberof EmailDomain
     */
    dkim_status?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailDomain
     */
    domain?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailDomain
     */
    esp_domain_uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailDomain
     */
    identity_status?: string;
    /**
     * 
     * @type {Mailgun}
     * @memberof EmailDomain
     */
    mailgun?: Mailgun;
    /**
     * 
     * @type {string}
     * @memberof EmailDomain
     */
    merchant_id?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailDomain
     */
    provider?: string;
    /**
     * 
     * @type {VerificationRecord}
     * @memberof EmailDomain
     */
    spf?: VerificationRecord;
    /**
     * 
     * @type {string}
     * @memberof EmailDomain
     */
    start_dkim_dts?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailDomain
     */
    start_identity_dts?: string;
    /**
     * 
     * @type {VerificationRecord}
     * @memberof EmailDomain
     */
    verification?: VerificationRecord;
}



/**
 * Check if a given object implements the EmailDomain interface.
 */
export function instanceOfEmailDomain(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailDomainFromJSON(json: any): EmailDomain {
    return EmailDomainFromJSONTyped(json, false);
}

export function EmailDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailDomain {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'dkim': !exists(json, 'dkim') ? undefined : ((json['dkim'] as Array<any>).map(VerificationRecordFromJSON)),
        'dkim_status': !exists(json, 'dkim_status') ? undefined : json['dkim_status'],
        'domain': !exists(json, 'domain') ? undefined : json['domain'],
        'esp_domain_uuid': !exists(json, 'esp_domain_uuid') ? undefined : json['esp_domain_uuid'],
        'identity_status': !exists(json, 'identity_status') ? undefined : json['identity_status'],
        'mailgun': !exists(json, 'mailgun') ? undefined : MailgunFromJSON(json['mailgun']),
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'provider': !exists(json, 'provider') ? undefined : json['provider'],
        'spf': !exists(json, 'spf') ? undefined : VerificationRecordFromJSON(json['spf']),
        'start_dkim_dts': !exists(json, 'start_dkim_dts') ? undefined : json['start_dkim_dts'],
        'start_identity_dts': !exists(json, 'start_identity_dts') ? undefined : json['start_identity_dts'],
        'verification': !exists(json, 'verification') ? undefined : VerificationRecordFromJSON(json['verification']),
    };
}

export function EmailDomainToJSON(value?: EmailDomain | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comment': value.comment,
        'dkim': value.dkim === undefined ? undefined : ((value.dkim as Array<any>).map(VerificationRecordToJSON)),
        'dkim_status': value.dkim_status,
        'domain': value.domain,
        'esp_domain_uuid': value.esp_domain_uuid,
        'identity_status': value.identity_status,
        'mailgun': MailgunToJSON(value.mailgun),
        'merchant_id': value.merchant_id,
        'provider': value.provider,
        'spf': VerificationRecordToJSON(value.spf),
        'start_dkim_dts': value.start_dkim_dts,
        'start_identity_dts': value.start_identity_dts,
        'verification': VerificationRecordToJSON(value.verification),
    };
}

