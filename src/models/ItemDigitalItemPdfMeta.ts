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
 * @interface ItemDigitalItemPdfMeta
 */
export interface ItemDigitalItemPdfMeta {
    /**
     * Assembly allowed
     * @type {boolean}
     * @memberof ItemDigitalItemPdfMeta
     */
    assembly_allowed?: boolean;
    /**
     * Copy/Paste is allowed
     * @type {boolean}
     * @memberof ItemDigitalItemPdfMeta
     */
    copy_allowed?: boolean;
    /**
     * A custom footer for each pdf page
     * @type {string}
     * @memberof ItemDigitalItemPdfMeta
     */
    custom_footer?: string;
    /**
     * A custom header for each pdf page
     * @type {string}
     * @memberof ItemDigitalItemPdfMeta
     */
    custom_header?: string;
    /**
     * Degraded printing allowed
     * @type {boolean}
     * @memberof ItemDigitalItemPdfMeta
     */
    degraded_printing_allowed?: boolean;
    /**
     * Fillin is allowed
     * @type {boolean}
     * @memberof ItemDigitalItemPdfMeta
     */
    fillin_allowed?: boolean;
    /**
     * Modifying annotations is allowed
     * @type {boolean}
     * @memberof ItemDigitalItemPdfMeta
     */
    modify_annotations_allowed?: boolean;
    /**
     * Modifying contents is allowed
     * @type {boolean}
     * @memberof ItemDigitalItemPdfMeta
     */
    modify_contents_allowed?: boolean;
    /**
     * Printing is allowed
     * @type {boolean}
     * @memberof ItemDigitalItemPdfMeta
     */
    printing_allowed?: boolean;
    /**
     * Screen readers are allowed
     * @type {boolean}
     * @memberof ItemDigitalItemPdfMeta
     */
    screen_readers_allowed?: boolean;
    /**
     * PDF is tagged
     * @type {boolean}
     * @memberof ItemDigitalItemPdfMeta
     */
    tagged?: boolean;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ItemDigitalItemPdfMeta)[] = ["assembly_allowed", "copy_allowed", "custom_footer", "custom_header", "degraded_printing_allowed", "fillin_allowed", "modify_annotations_allowed", "modify_contents_allowed", "printing_allowed", "screen_readers_allowed", "tagged"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ItemDigitalItemPdfMeta interface.
 */
export function instanceOfItemDigitalItemPdfMeta(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemDigitalItemPdfMetaFromJSON(json: any): ItemDigitalItemPdfMeta {
    return ItemDigitalItemPdfMetaFromJSONTyped(json, false);
}

export function ItemDigitalItemPdfMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemDigitalItemPdfMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assembly_allowed': !exists(json, 'assembly_allowed') ? undefined : json['assembly_allowed'],
        'copy_allowed': !exists(json, 'copy_allowed') ? undefined : json['copy_allowed'],
        'custom_footer': !exists(json, 'custom_footer') ? undefined : json['custom_footer'],
        'custom_header': !exists(json, 'custom_header') ? undefined : json['custom_header'],
        'degraded_printing_allowed': !exists(json, 'degraded_printing_allowed') ? undefined : json['degraded_printing_allowed'],
        'fillin_allowed': !exists(json, 'fillin_allowed') ? undefined : json['fillin_allowed'],
        'modify_annotations_allowed': !exists(json, 'modify_annotations_allowed') ? undefined : json['modify_annotations_allowed'],
        'modify_contents_allowed': !exists(json, 'modify_contents_allowed') ? undefined : json['modify_contents_allowed'],
        'printing_allowed': !exists(json, 'printing_allowed') ? undefined : json['printing_allowed'],
        'screen_readers_allowed': !exists(json, 'screen_readers_allowed') ? undefined : json['screen_readers_allowed'],
        'tagged': !exists(json, 'tagged') ? undefined : json['tagged'],
    };
}

export function ItemDigitalItemPdfMetaToJSON(value?: ItemDigitalItemPdfMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'assembly_allowed': value.assembly_allowed,
        'copy_allowed': value.copy_allowed,
        'custom_footer': value.custom_footer,
        'custom_header': value.custom_header,
        'degraded_printing_allowed': value.degraded_printing_allowed,
        'fillin_allowed': value.fillin_allowed,
        'modify_annotations_allowed': value.modify_annotations_allowed,
        'modify_contents_allowed': value.modify_contents_allowed,
        'printing_allowed': value.printing_allowed,
        'screen_readers_allowed': value.screen_readers_allowed,
        'tagged': value.tagged,
    };
}

