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
    HitPageViewMetaData,
    HitPageViewMetaDataFromJSON,
    HitPageViewMetaDataFromJSONTyped,
    HitPageViewMetaDataToJSON,
} from './HitPageViewMetaData';

/**
 * 
 * @export
 * @interface HitPageView
 */
export interface HitPageView {
    /**
     * 
     * @type {boolean}
     * @memberof HitPageView
     */
    bounce?: boolean;
    /**
     * 
     * @type {Array<HitPageViewMetaData>}
     * @memberof HitPageView
     */
    meta_data?: Array<HitPageViewMetaData>;
    /**
     * 
     * @type {string}
     * @memberof HitPageView
     */
    method?: string;
    /**
     * 
     * @type {boolean}
     * @memberof HitPageView
     */
    prefetch?: boolean;
    /**
     * 
     * @type {string}
     * @memberof HitPageView
     */
    query?: string;
    /**
     * 
     * @type {boolean}
     * @memberof HitPageView
     */
    recording?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof HitPageView
     */
    redirect?: boolean;
    /**
     * 
     * @type {string}
     * @memberof HitPageView
     */
    referrer?: string;
    /**
     * 
     * @type {number}
     * @memberof HitPageView
     */
    time_on_page?: number;
    /**
     * 
     * @type {string}
     * @memberof HitPageView
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof HitPageView
     */
    url?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof HitPageView)[] = ["bounce", "meta_data", "method", "prefetch", "query", "recording", "redirect", "referrer", "time_on_page", "title", "url"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the HitPageView interface.
 */
export function instanceOfHitPageView(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HitPageViewFromJSON(json: any): HitPageView {
    return HitPageViewFromJSONTyped(json, false);
}

export function HitPageViewFromJSONTyped(json: any, ignoreDiscriminator: boolean): HitPageView {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bounce': !exists(json, 'bounce') ? undefined : json['bounce'],
        'meta_data': !exists(json, 'meta_data') ? undefined : ((json['meta_data'] as Array<any>).map(HitPageViewMetaDataFromJSON)),
        'method': !exists(json, 'method') ? undefined : json['method'],
        'prefetch': !exists(json, 'prefetch') ? undefined : json['prefetch'],
        'query': !exists(json, 'query') ? undefined : json['query'],
        'recording': !exists(json, 'recording') ? undefined : json['recording'],
        'redirect': !exists(json, 'redirect') ? undefined : json['redirect'],
        'referrer': !exists(json, 'referrer') ? undefined : json['referrer'],
        'time_on_page': !exists(json, 'time_on_page') ? undefined : json['time_on_page'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function HitPageViewToJSON(value?: HitPageView | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bounce': value.bounce,
        'meta_data': value.meta_data === undefined ? undefined : ((value.meta_data as Array<any>).map(HitPageViewMetaDataToJSON)),
        'method': value.method,
        'prefetch': value.prefetch,
        'query': value.query,
        'recording': value.recording,
        'redirect': value.redirect,
        'referrer': value.referrer,
        'time_on_page': value.time_on_page,
        'title': value.title,
        'url': value.url,
    };
}

