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
 * @interface ScreenRecordingAdPlatform
 */
export interface ScreenRecordingAdPlatform {
    /**
     * Facebook Click Id (Cookie)
     * @type {string}
     * @memberof ScreenRecordingAdPlatform
     */
    fbc?: string;
    /**
     * Facebook Click Id Parameter (Parameter)
     * @type {string}
     * @memberof ScreenRecordingAdPlatform
     */
    fbclid?: string;
    /**
     * Facebook Browser Id (Cookie)
     * @type {string}
     * @memberof ScreenRecordingAdPlatform
     */
    fbp?: string;
    /**
     * Google Analytics CID (Cookie)
     * @type {string}
     * @memberof ScreenRecordingAdPlatform
     */
    gacid?: string;
    /**
     * Google Adwords Click Id (Parameter)
     * @type {string}
     * @memberof ScreenRecordingAdPlatform
     */
    glcid?: string;
    /**
     * Bing Click Id (Parameter
     * @type {string}
     * @memberof ScreenRecordingAdPlatform
     */
    msclkid?: string;
    /**
     * TikTok Click Id (Parameter
     * @type {string}
     * @memberof ScreenRecordingAdPlatform
     */
    ttclid?: string;
}

export function ScreenRecordingAdPlatformFromJSON(json: any): ScreenRecordingAdPlatform {
    return ScreenRecordingAdPlatformFromJSONTyped(json, false);
}

export function ScreenRecordingAdPlatformFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenRecordingAdPlatform {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fbc': !exists(json, 'fbc') ? undefined : json['fbc'],
        'fbclid': !exists(json, 'fbclid') ? undefined : json['fbclid'],
        'fbp': !exists(json, 'fbp') ? undefined : json['fbp'],
        'gacid': !exists(json, 'gacid') ? undefined : json['gacid'],
        'glcid': !exists(json, 'glcid') ? undefined : json['glcid'],
        'msclkid': !exists(json, 'msclkid') ? undefined : json['msclkid'],
        'ttclid': !exists(json, 'ttclid') ? undefined : json['ttclid'],
    };
}

export function ScreenRecordingAdPlatformToJSON(value?: ScreenRecordingAdPlatform | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fbc': value.fbc,
        'fbclid': value.fbclid,
        'fbp': value.fbp,
        'gacid': value.gacid,
        'glcid': value.glcid,
        'msclkid': value.msclkid,
        'ttclid': value.ttclid,
    };
}
