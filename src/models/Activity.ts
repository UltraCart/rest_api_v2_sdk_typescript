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
 * @interface Activity
 */
export interface Activity {
    /**
     * 
     * @type {string}
     * @memberof Activity
     */
    action?: string;
    /**
     * 
     * @type {string}
     * @memberof Activity
     */
    channel?: string;
    /**
     * 
     * @type {string}
     * @memberof Activity
     */
    metric?: string;
    /**
     * 
     * @type {number}
     * @memberof Activity
     */
    storefront_oid?: number;
    /**
     * 
     * @type {string}
     * @memberof Activity
     */
    subject?: string;
    /**
     * 
     * @type {number}
     * @memberof Activity
     */
    ts?: number;
    /**
     * 
     * @type {string}
     * @memberof Activity
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof Activity
     */
    uuid?: string;
}



/**
 * Check if a given object implements the Activity interface.
 */
export function instanceOfActivity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ActivityFromJSON(json: any): Activity {
    return ActivityFromJSONTyped(json, false);
}

export function ActivityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Activity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : json['action'],
        'channel': !exists(json, 'channel') ? undefined : json['channel'],
        'metric': !exists(json, 'metric') ? undefined : json['metric'],
        'storefront_oid': !exists(json, 'storefront_oid') ? undefined : json['storefront_oid'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'ts': !exists(json, 'ts') ? undefined : json['ts'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
    };
}

export function ActivityToJSON(value?: Activity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'channel': value.channel,
        'metric': value.metric,
        'storefront_oid': value.storefront_oid,
        'subject': value.subject,
        'ts': value.ts,
        'type': value.type,
        'uuid': value.uuid,
    };
}

