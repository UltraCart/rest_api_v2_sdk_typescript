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
    EmailThirdPartyList,
    EmailThirdPartyListFromJSON,
    EmailThirdPartyListFromJSONTyped,
    EmailThirdPartyListToJSON,
} from './EmailThirdPartyList';
import {
    EmailThirdPartyTag,
    EmailThirdPartyTagFromJSON,
    EmailThirdPartyTagFromJSONTyped,
    EmailThirdPartyTagToJSON,
} from './EmailThirdPartyTag';

/**
 * 
 * @export
 * @interface EmailThirdPartyProvider
 */
export interface EmailThirdPartyProvider {
    /**
     * URL to the settings screen to connect.  Null if the provider is already connected.
     * @type {string}
     * @memberof EmailThirdPartyProvider
     */
    connect_url?: string;
    /**
     * list_count
     * @type {number}
     * @memberof EmailThirdPartyProvider
     */
    list_count?: number;
    /**
     * lists
     * @type {Array<EmailThirdPartyList>}
     * @memberof EmailThirdPartyProvider
     */
    lists?: Array<EmailThirdPartyList>;
    /**
     * logo_url
     * @type {string}
     * @memberof EmailThirdPartyProvider
     */
    logo_url?: string;
    /**
     * name
     * @type {string}
     * @memberof EmailThirdPartyProvider
     */
    name?: string;
    /**
     * True if this provider can support adding tags
     * @type {boolean}
     * @memberof EmailThirdPartyProvider
     */
    supports_add_tags?: boolean;
    /**
     * True if this provider can support list subscribe
     * @type {boolean}
     * @memberof EmailThirdPartyProvider
     */
    supports_list_subscribe?: boolean;
    /**
     * True if this provider can support list unsubscribe
     * @type {boolean}
     * @memberof EmailThirdPartyProvider
     */
    supports_list_unsubscribe?: boolean;
    /**
     * True if this provider can support remove tags
     * @type {boolean}
     * @memberof EmailThirdPartyProvider
     */
    supports_remove_tags?: boolean;
    /**
     * tag_count
     * @type {number}
     * @memberof EmailThirdPartyProvider
     */
    tag_count?: number;
    /**
     * tags
     * @type {Array<EmailThirdPartyTag>}
     * @memberof EmailThirdPartyProvider
     */
    tags?: Array<EmailThirdPartyTag>;
}



/**
 * Check if a given object implements the EmailThirdPartyProvider interface.
 */
export function instanceOfEmailThirdPartyProvider(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailThirdPartyProviderFromJSON(json: any): EmailThirdPartyProvider {
    return EmailThirdPartyProviderFromJSONTyped(json, false);
}

export function EmailThirdPartyProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailThirdPartyProvider {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'connect_url': !exists(json, 'connect_url') ? undefined : json['connect_url'],
        'list_count': !exists(json, 'list_count') ? undefined : json['list_count'],
        'lists': !exists(json, 'lists') ? undefined : ((json['lists'] as Array<any>).map(EmailThirdPartyListFromJSON)),
        'logo_url': !exists(json, 'logo_url') ? undefined : json['logo_url'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'supports_add_tags': !exists(json, 'supports_add_tags') ? undefined : json['supports_add_tags'],
        'supports_list_subscribe': !exists(json, 'supports_list_subscribe') ? undefined : json['supports_list_subscribe'],
        'supports_list_unsubscribe': !exists(json, 'supports_list_unsubscribe') ? undefined : json['supports_list_unsubscribe'],
        'supports_remove_tags': !exists(json, 'supports_remove_tags') ? undefined : json['supports_remove_tags'],
        'tag_count': !exists(json, 'tag_count') ? undefined : json['tag_count'],
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(EmailThirdPartyTagFromJSON)),
    };
}

export function EmailThirdPartyProviderToJSON(value?: EmailThirdPartyProvider | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'connect_url': value.connect_url,
        'list_count': value.list_count,
        'lists': value.lists === undefined ? undefined : ((value.lists as Array<any>).map(EmailThirdPartyListToJSON)),
        'logo_url': value.logo_url,
        'name': value.name,
        'supports_add_tags': value.supports_add_tags,
        'supports_list_subscribe': value.supports_list_subscribe,
        'supports_list_unsubscribe': value.supports_list_unsubscribe,
        'supports_remove_tags': value.supports_remove_tags,
        'tag_count': value.tag_count,
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(EmailThirdPartyTagToJSON)),
    };
}

