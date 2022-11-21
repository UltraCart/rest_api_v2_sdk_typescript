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
    Distance,
    DistanceFromJSON,
    DistanceFromJSONTyped,
    DistanceToJSON,
} from './Distance';
import {
    ItemOptionValueAdditionalItem,
    ItemOptionValueAdditionalItemFromJSON,
    ItemOptionValueAdditionalItemFromJSONTyped,
    ItemOptionValueAdditionalItemToJSON,
} from './ItemOptionValueAdditionalItem';
import {
    ItemOptionValueDigitalItem,
    ItemOptionValueDigitalItemFromJSON,
    ItemOptionValueDigitalItemFromJSONTyped,
    ItemOptionValueDigitalItemToJSON,
} from './ItemOptionValueDigitalItem';
import {
    Weight,
    WeightFromJSON,
    WeightFromJSONTyped,
    WeightToJSON,
} from './Weight';

/**
 * 
 * @export
 * @interface ItemOptionValue
 */
export interface ItemOptionValue {
    /**
     * Additional dimensions application
     * @type {string}
     * @memberof ItemOptionValue
     */
    additional_dimension_application?: ItemOptionValueAdditionalDimensionApplicationEnum;
    /**
     * Additional items to add to the order if this value is selected
     * @type {Array<ItemOptionValueAdditionalItem>}
     * @memberof ItemOptionValue
     */
    additional_items?: Array<ItemOptionValueAdditionalItem>;
    /**
     * Cost change
     * @type {number}
     * @memberof ItemOptionValue
     */
    cost_change?: number;
    /**
     * True if default value
     * @type {boolean}
     * @memberof ItemOptionValue
     */
    default_value?: boolean;
    /**
     * Digital items to allow the customer to download if this option value is selected
     * @type {Array<ItemOptionValueDigitalItem>}
     * @memberof ItemOptionValue
     */
    digital_items?: Array<ItemOptionValueDigitalItem>;
    /**
     * 
     * @type {Distance}
     * @memberof ItemOptionValue
     */
    height?: Distance;
    /**
     * 
     * @type {Distance}
     * @memberof ItemOptionValue
     */
    length?: Distance;
    /**
     * Multimedia object identifier associated with this option value
     * @type {number}
     * @memberof ItemOptionValue
     */
    merchant_item_multimedia_oid?: number;
    /**
     * Option value object identifier
     * @type {number}
     * @memberof ItemOptionValue
     */
    option_value_oid?: number;
    /**
     * Percentage cost change
     * @type {number}
     * @memberof ItemOptionValue
     */
    percent_cost_change?: number;
    /**
     * Translated text instance id
     * @type {number}
     * @memberof ItemOptionValue
     */
    translated_text_instance_oid?: number;
    /**
     * Value
     * @type {string}
     * @memberof ItemOptionValue
     */
    value?: string;
    /**
     * 
     * @type {Weight}
     * @memberof ItemOptionValue
     */
    weight_change?: Weight;
    /**
     * Percentage weight change
     * @type {number}
     * @memberof ItemOptionValue
     */
    weight_change_percent?: number;
    /**
     * 
     * @type {Distance}
     * @memberof ItemOptionValue
     */
    width?: Distance;
}


/**
 * @export
 */
export const ItemOptionValueAdditionalDimensionApplicationEnum = {
    None: 'none',
    SetItemTo: 'set item to',
    AddItem: 'add item'
} as const;
export type ItemOptionValueAdditionalDimensionApplicationEnum = typeof ItemOptionValueAdditionalDimensionApplicationEnum[keyof typeof ItemOptionValueAdditionalDimensionApplicationEnum];


export function ItemOptionValueFromJSON(json: any): ItemOptionValue {
    return ItemOptionValueFromJSONTyped(json, false);
}

export function ItemOptionValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemOptionValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additional_dimension_application': !exists(json, 'additional_dimension_application') ? undefined : json['additional_dimension_application'],
        'additional_items': !exists(json, 'additional_items') ? undefined : ((json['additional_items'] as Array<any>).map(ItemOptionValueAdditionalItemFromJSON)),
        'cost_change': !exists(json, 'cost_change') ? undefined : json['cost_change'],
        'default_value': !exists(json, 'default_value') ? undefined : json['default_value'],
        'digital_items': !exists(json, 'digital_items') ? undefined : ((json['digital_items'] as Array<any>).map(ItemOptionValueDigitalItemFromJSON)),
        'height': !exists(json, 'height') ? undefined : DistanceFromJSON(json['height']),
        'length': !exists(json, 'length') ? undefined : DistanceFromJSON(json['length']),
        'merchant_item_multimedia_oid': !exists(json, 'merchant_item_multimedia_oid') ? undefined : json['merchant_item_multimedia_oid'],
        'option_value_oid': !exists(json, 'option_value_oid') ? undefined : json['option_value_oid'],
        'percent_cost_change': !exists(json, 'percent_cost_change') ? undefined : json['percent_cost_change'],
        'translated_text_instance_oid': !exists(json, 'translated_text_instance_oid') ? undefined : json['translated_text_instance_oid'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'weight_change': !exists(json, 'weight_change') ? undefined : WeightFromJSON(json['weight_change']),
        'weight_change_percent': !exists(json, 'weight_change_percent') ? undefined : json['weight_change_percent'],
        'width': !exists(json, 'width') ? undefined : DistanceFromJSON(json['width']),
    };
}

export function ItemOptionValueToJSON(value?: ItemOptionValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additional_dimension_application': value.additional_dimension_application,
        'additional_items': value.additional_items === undefined ? undefined : ((value.additional_items as Array<any>).map(ItemOptionValueAdditionalItemToJSON)),
        'cost_change': value.cost_change,
        'default_value': value.default_value,
        'digital_items': value.digital_items === undefined ? undefined : ((value.digital_items as Array<any>).map(ItemOptionValueDigitalItemToJSON)),
        'height': DistanceToJSON(value.height),
        'length': DistanceToJSON(value.length),
        'merchant_item_multimedia_oid': value.merchant_item_multimedia_oid,
        'option_value_oid': value.option_value_oid,
        'percent_cost_change': value.percent_cost_change,
        'translated_text_instance_oid': value.translated_text_instance_oid,
        'value': value.value,
        'weight_change': WeightToJSON(value.weight_change),
        'weight_change_percent': value.weight_change_percent,
        'width': DistanceToJSON(value.width),
    };
}
