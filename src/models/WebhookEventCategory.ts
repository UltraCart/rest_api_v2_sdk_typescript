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
    WebhookEventSubscription,
    WebhookEventSubscriptionFromJSON,
    WebhookEventSubscriptionFromJSONTyped,
    WebhookEventSubscriptionToJSON,
} from './WebhookEventSubscription';

/**
 * 
 * @export
 * @interface WebhookEventCategory
 */
export interface WebhookEventCategory {
    /**
     * True if any events are subscribed to.
     * @type {boolean}
     * @memberof WebhookEventCategory
     */
    any_subscribed?: boolean;
    /**
     * Array of available expansion constants
     * @type {Array<string>}
     * @memberof WebhookEventCategory
     */
    available_expansions?: Array<string>;
    /**
     * Name of the event category
     * @type {string}
     * @memberof WebhookEventCategory
     */
    event_category?: string;
    /**
     * The events within the category.  Individual subscription flags contained within the child object.
     * @type {Array<WebhookEventSubscription>}
     * @memberof WebhookEventCategory
     */
    events?: Array<WebhookEventSubscription>;
    /**
     * True if all the events within this category are subscribed.  This is a convenience flag to make user interfaces easier.
     * @type {boolean}
     * @memberof WebhookEventCategory
     */
    subscribed?: boolean;
}

export function WebhookEventCategoryFromJSON(json: any): WebhookEventCategory {
    return WebhookEventCategoryFromJSONTyped(json, false);
}

export function WebhookEventCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookEventCategory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'any_subscribed': !exists(json, 'any_subscribed') ? undefined : json['any_subscribed'],
        'available_expansions': !exists(json, 'available_expansions') ? undefined : json['available_expansions'],
        'event_category': !exists(json, 'event_category') ? undefined : json['event_category'],
        'events': !exists(json, 'events') ? undefined : ((json['events'] as Array<any>).map(WebhookEventSubscriptionFromJSON)),
        'subscribed': !exists(json, 'subscribed') ? undefined : json['subscribed'],
    };
}

export function WebhookEventCategoryToJSON(value?: WebhookEventCategory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'any_subscribed': value.any_subscribed,
        'available_expansions': value.available_expansions,
        'event_category': value.event_category,
        'events': value.events === undefined ? undefined : ((value.events as Array<any>).map(WebhookEventSubscriptionToJSON)),
        'subscribed': value.subscribed,
    };
}

