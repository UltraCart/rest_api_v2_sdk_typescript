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
 * @interface ItemContentAssignment
 */
export interface ItemContentAssignment {
    /**
     * True if this group is the default assignment for this item
     * @type {boolean}
     * @memberof ItemContentAssignment
     */
    default_assignment?: boolean;
    /**
     * Page (group) object identifier
     * @type {number}
     * @memberof ItemContentAssignment
     */
    group_oid?: number;
    /**
     * Page (group) path
     * @type {string}
     * @memberof ItemContentAssignment
     */
    group_path?: string;
    /**
     * StoreFront host name
     * @type {string}
     * @memberof ItemContentAssignment
     */
    host?: string;
    /**
     * Sort order (optional)
     * @type {number}
     * @memberof ItemContentAssignment
     */
    sort_order?: number;
    /**
     * URL part if the item id is not used
     * @type {string}
     * @memberof ItemContentAssignment
     */
    url_part?: string;
}

export function ItemContentAssignmentFromJSON(json: any): ItemContentAssignment {
    return ItemContentAssignmentFromJSONTyped(json, false);
}

export function ItemContentAssignmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemContentAssignment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'default_assignment': !exists(json, 'default_assignment') ? undefined : json['default_assignment'],
        'group_oid': !exists(json, 'group_oid') ? undefined : json['group_oid'],
        'group_path': !exists(json, 'group_path') ? undefined : json['group_path'],
        'host': !exists(json, 'host') ? undefined : json['host'],
        'sort_order': !exists(json, 'sort_order') ? undefined : json['sort_order'],
        'url_part': !exists(json, 'url_part') ? undefined : json['url_part'],
    };
}

export function ItemContentAssignmentToJSON(value?: ItemContentAssignment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'default_assignment': value.default_assignment,
        'group_oid': value.group_oid,
        'group_path': value.group_path,
        'host': value.host,
        'sort_order': value.sort_order,
        'url_part': value.url_part,
    };
}

