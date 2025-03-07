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
 * @interface HitSessionStart
 */
export interface HitSessionStart {
    /**
     * 
     * @type {boolean}
     * @memberof HitSessionStart
     */
    bot?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof HitSessionStart
     */
    bounce?: boolean;
    /**
     * 
     * @type {string}
     * @memberof HitSessionStart
     */
    channel?: string;
    /**
     * 
     * @type {boolean}
     * @memberof HitSessionStart
     */
    device_switch_detected?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof HitSessionStart
     */
    fake_bot?: boolean;
    /**
     * 
     * @type {string}
     * @memberof HitSessionStart
     */
    geolocation_country?: string;
    /**
     * 
     * @type {number}
     * @memberof HitSessionStart
     */
    geolocation_latitude?: number;
    /**
     * 
     * @type {number}
     * @memberof HitSessionStart
     */
    geolocation_longitude?: number;
    /**
     * 
     * @type {string}
     * @memberof HitSessionStart
     */
    geolocation_province?: string;
    /**
     * 
     * @type {boolean}
     * @memberof HitSessionStart
     */
    no_cookie_support?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof HitSessionStart
     */
    prefetch?: boolean;
    /**
     * 
     * @type {string}
     * @memberof HitSessionStart
     */
    referrer?: string;
    /**
     * 
     * @type {number}
     * @memberof HitSessionStart
     */
    screen_height?: number;
    /**
     * 
     * @type {number}
     * @memberof HitSessionStart
     */
    screen_width?: number;
    /**
     * 
     * @type {number}
     * @memberof HitSessionStart
     */
    time_on_Site?: number;
    /**
     * 
     * @type {string}
     * @memberof HitSessionStart
     */
    user_agent?: string;
    /**
     * 
     * @type {string}
     * @memberof HitSessionStart
     */
    user_ip?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof HitSessionStart)[] = ["bot", "bounce", "channel", "device_switch_detected", "fake_bot", "geolocation_country", "geolocation_latitude", "geolocation_longitude", "geolocation_province", "no_cookie_support", "prefetch", "referrer", "screen_height", "screen_width", "time_on_Site", "user_agent", "user_ip"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the HitSessionStart interface.
 */
export function instanceOfHitSessionStart(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HitSessionStartFromJSON(json: any): HitSessionStart {
    return HitSessionStartFromJSONTyped(json, false);
}

export function HitSessionStartFromJSONTyped(json: any, ignoreDiscriminator: boolean): HitSessionStart {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bot': !exists(json, 'bot') ? undefined : json['bot'],
        'bounce': !exists(json, 'bounce') ? undefined : json['bounce'],
        'channel': !exists(json, 'channel') ? undefined : json['channel'],
        'device_switch_detected': !exists(json, 'device_switch_detected') ? undefined : json['device_switch_detected'],
        'fake_bot': !exists(json, 'fake_bot') ? undefined : json['fake_bot'],
        'geolocation_country': !exists(json, 'geolocation_country') ? undefined : json['geolocation_country'],
        'geolocation_latitude': !exists(json, 'geolocation_latitude') ? undefined : json['geolocation_latitude'],
        'geolocation_longitude': !exists(json, 'geolocation_longitude') ? undefined : json['geolocation_longitude'],
        'geolocation_province': !exists(json, 'geolocation_province') ? undefined : json['geolocation_province'],
        'no_cookie_support': !exists(json, 'no_cookie_support') ? undefined : json['no_cookie_support'],
        'prefetch': !exists(json, 'prefetch') ? undefined : json['prefetch'],
        'referrer': !exists(json, 'referrer') ? undefined : json['referrer'],
        'screen_height': !exists(json, 'screen_height') ? undefined : json['screen_height'],
        'screen_width': !exists(json, 'screen_width') ? undefined : json['screen_width'],
        'time_on_Site': !exists(json, 'time_on_Site') ? undefined : json['time_on_Site'],
        'user_agent': !exists(json, 'user_agent') ? undefined : json['user_agent'],
        'user_ip': !exists(json, 'user_ip') ? undefined : json['user_ip'],
    };
}

export function HitSessionStartToJSON(value?: HitSessionStart | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bot': value.bot,
        'bounce': value.bounce,
        'channel': value.channel,
        'device_switch_detected': value.device_switch_detected,
        'fake_bot': value.fake_bot,
        'geolocation_country': value.geolocation_country,
        'geolocation_latitude': value.geolocation_latitude,
        'geolocation_longitude': value.geolocation_longitude,
        'geolocation_province': value.geolocation_province,
        'no_cookie_support': value.no_cookie_support,
        'prefetch': value.prefetch,
        'referrer': value.referrer,
        'screen_height': value.screen_height,
        'screen_width': value.screen_width,
        'time_on_Site': value.time_on_Site,
        'user_agent': value.user_agent,
        'user_ip': value.user_ip,
    };
}

