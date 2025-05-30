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
    ItemContentAssignment,
    ItemContentAssignmentFromJSON,
    ItemContentAssignmentFromJSONTyped,
    ItemContentAssignmentToJSON,
} from './ItemContentAssignment';
import {
    ItemContentAttribute,
    ItemContentAttributeFromJSON,
    ItemContentAttributeFromJSONTyped,
    ItemContentAttributeToJSON,
} from './ItemContentAttribute';
import {
    ItemContentMultimedia,
    ItemContentMultimediaFromJSON,
    ItemContentMultimediaFromJSONTyped,
    ItemContentMultimediaToJSON,
} from './ItemContentMultimedia';

/**
 * 
 * @export
 * @interface ItemContent
 */
export interface ItemContent {
    /**
     * StoreFront assignments
     * @type {Array<ItemContentAssignment>}
     * @memberof ItemContent
     */
    assignments?: Array<ItemContentAssignment>;
    /**
     * StoreFront attributes
     * @type {Array<ItemContentAttribute>}
     * @memberof ItemContent
     */
    attributes?: Array<ItemContentAttribute>;
    /**
     * Custom Thank You URL
     * @type {string}
     * @memberof ItemContent
     */
    custom_thank_you_url?: string;
    /**
     * Exclude from search
     * @type {boolean}
     * @memberof ItemContent
     */
    exclude_from_search?: boolean;
    /**
     * Exclude from the sitemap for the StoreFront
     * @type {boolean}
     * @memberof ItemContent
     */
    exclude_from_sitemap?: boolean;
    /**
     * Exclude from the top sellers list in the StoreFront
     * @type {boolean}
     * @memberof ItemContent
     */
    exclude_from_top_sellers?: boolean;
    /**
     * Extended description (max 10000 characters)
     * @type {string}
     * @memberof ItemContent
     */
    extended_description?: string;
    /**
     * Extended description text translation instance identifier
     * @type {number}
     * @memberof ItemContent
     */
    extended_description_translated_text_instance_oid?: number;
    /**
     * SEO meta description used by Storefronts
     * @type {string}
     * @memberof ItemContent
     */
    meta_description?: string;
    /**
     * SEO meta keywords used by Storefronts
     * @type {string}
     * @memberof ItemContent
     */
    meta_keywords?: string;
    /**
     * SEO meta title used by Storefronts
     * @type {string}
     * @memberof ItemContent
     */
    meta_title?: string;
    /**
     * Multimedia
     * @type {Array<ItemContentMultimedia>}
     * @memberof ItemContent
     */
    multimedia?: Array<ItemContentMultimedia>;
    /**
     * True if the item is new
     * @type {boolean}
     * @memberof ItemContent
     */
    new_item?: boolean;
    /**
     * The date the item should no longer be considered new
     * @type {string}
     * @memberof ItemContent
     */
    new_item_end?: string;
    /**
     * The date the item should start being considered new
     * @type {string}
     * @memberof ItemContent
     */
    new_item_start?: string;
    /**
     * Legacy view URL (not used by StoreFronts)
     * @type {string}
     * @memberof ItemContent
     */
    view_url?: string;
}



/**
 * Check if a given object implements the ItemContent interface.
 */
export function instanceOfItemContent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemContentFromJSON(json: any): ItemContent {
    return ItemContentFromJSONTyped(json, false);
}

export function ItemContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemContent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assignments': !exists(json, 'assignments') ? undefined : ((json['assignments'] as Array<any>).map(ItemContentAssignmentFromJSON)),
        'attributes': !exists(json, 'attributes') ? undefined : ((json['attributes'] as Array<any>).map(ItemContentAttributeFromJSON)),
        'custom_thank_you_url': !exists(json, 'custom_thank_you_url') ? undefined : json['custom_thank_you_url'],
        'exclude_from_search': !exists(json, 'exclude_from_search') ? undefined : json['exclude_from_search'],
        'exclude_from_sitemap': !exists(json, 'exclude_from_sitemap') ? undefined : json['exclude_from_sitemap'],
        'exclude_from_top_sellers': !exists(json, 'exclude_from_top_sellers') ? undefined : json['exclude_from_top_sellers'],
        'extended_description': !exists(json, 'extended_description') ? undefined : json['extended_description'],
        'extended_description_translated_text_instance_oid': !exists(json, 'extended_description_translated_text_instance_oid') ? undefined : json['extended_description_translated_text_instance_oid'],
        'meta_description': !exists(json, 'meta_description') ? undefined : json['meta_description'],
        'meta_keywords': !exists(json, 'meta_keywords') ? undefined : json['meta_keywords'],
        'meta_title': !exists(json, 'meta_title') ? undefined : json['meta_title'],
        'multimedia': !exists(json, 'multimedia') ? undefined : ((json['multimedia'] as Array<any>).map(ItemContentMultimediaFromJSON)),
        'new_item': !exists(json, 'new_item') ? undefined : json['new_item'],
        'new_item_end': !exists(json, 'new_item_end') ? undefined : json['new_item_end'],
        'new_item_start': !exists(json, 'new_item_start') ? undefined : json['new_item_start'],
        'view_url': !exists(json, 'view_url') ? undefined : json['view_url'],
    };
}

export function ItemContentToJSON(value?: ItemContent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'assignments': value.assignments === undefined ? undefined : ((value.assignments as Array<any>).map(ItemContentAssignmentToJSON)),
        'attributes': value.attributes === undefined ? undefined : ((value.attributes as Array<any>).map(ItemContentAttributeToJSON)),
        'custom_thank_you_url': value.custom_thank_you_url,
        'exclude_from_search': value.exclude_from_search,
        'exclude_from_sitemap': value.exclude_from_sitemap,
        'exclude_from_top_sellers': value.exclude_from_top_sellers,
        'extended_description': value.extended_description,
        'extended_description_translated_text_instance_oid': value.extended_description_translated_text_instance_oid,
        'meta_description': value.meta_description,
        'meta_keywords': value.meta_keywords,
        'meta_title': value.meta_title,
        'multimedia': value.multimedia === undefined ? undefined : ((value.multimedia as Array<any>).map(ItemContentMultimediaToJSON)),
        'new_item': value.new_item,
        'new_item_end': value.new_item_end,
        'new_item_start': value.new_item_start,
        'view_url': value.view_url,
    };
}

