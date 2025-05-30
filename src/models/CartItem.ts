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
    CartItemAttribute,
    CartItemAttributeFromJSON,
    CartItemAttributeFromJSONTyped,
    CartItemAttributeToJSON,
} from './CartItemAttribute';
import {
    CartItemMultimedia,
    CartItemMultimediaFromJSON,
    CartItemMultimediaFromJSONTyped,
    CartItemMultimediaToJSON,
} from './CartItemMultimedia';
import {
    CartItemOption,
    CartItemOptionFromJSON,
    CartItemOptionFromJSONTyped,
    CartItemOptionToJSON,
} from './CartItemOption';
import {
    CartItemPhysical,
    CartItemPhysicalFromJSON,
    CartItemPhysicalFromJSONTyped,
    CartItemPhysicalToJSON,
} from './CartItemPhysical';
import {
    CartItemProperty,
    CartItemPropertyFromJSON,
    CartItemPropertyFromJSONTyped,
    CartItemPropertyToJSON,
} from './CartItemProperty';
import {
    CartItemVariationSelection,
    CartItemVariationSelectionFromJSON,
    CartItemVariationSelectionFromJSONTyped,
    CartItemVariationSelectionToJSON,
} from './CartItemVariationSelection';
import {
    CartKitComponentOption,
    CartKitComponentOptionFromJSON,
    CartKitComponentOptionFromJSONTyped,
    CartKitComponentOptionToJSON,
} from './CartKitComponentOption';
import {
    Currency,
    CurrencyFromJSON,
    CurrencyFromJSONTyped,
    CurrencyToJSON,
} from './Currency';

/**
 * 
 * @export
 * @interface CartItem
 */
export interface CartItem {
    /**
     * 
     * @type {Currency}
     * @memberof CartItem
     */
    arbitrary_unit_cost?: Currency;
    /**
     * Attributes
     * @type {Array<CartItemAttribute>}
     * @memberof CartItem
     */
    attributes?: Array<CartItemAttribute>;
    /**
     * Auto order schedule the customer selected
     * @type {string}
     * @memberof CartItem
     */
    auto_order_schedule?: string;
    /**
     * URL to the default multimedia image
     * @type {string}
     * @memberof CartItem
     */
    default_image_url?: string;
    /**
     * URL to the default multimedia thumbnail
     * @type {string}
     * @memberof CartItem
     */
    default_thumbnail_url?: string;
    /**
     * Description of the item
     * @type {string}
     * @memberof CartItem
     */
    description?: string;
    /**
     * 
     * @type {Currency}
     * @memberof CartItem
     */
    discount?: Currency;
    /**
     * Extended description of the item
     * @type {string}
     * @memberof CartItem
     */
    extended_description?: string;
    /**
     * Item ID
     * @type {string}
     * @memberof CartItem
     */
    item_id?: string;
    /**
     * Item object identifier
     * @type {number}
     * @memberof CartItem
     */
    item_oid?: number;
    /**
     * True if this item is a kit
     * @type {boolean}
     * @memberof CartItem
     */
    kit?: boolean;
    /**
     * Options associated with the kit components
     * @type {Array<CartKitComponentOption>}
     * @memberof CartItem
     */
    kit_component_options?: Array<CartKitComponentOption>;
    /**
     * 
     * @type {Currency}
     * @memberof CartItem
     */
    manufacturer_suggested_retail_price?: Currency;
    /**
     * Maximum quantity the customer can purchase
     * @type {number}
     * @memberof CartItem
     */
    maximum_quantity?: number;
    /**
     * Minimum quantity the customer can purchase
     * @type {number}
     * @memberof CartItem
     */
    minimum_quantity?: number;
    /**
     * Multimedia
     * @type {Array<CartItemMultimedia>}
     * @memberof CartItem
     */
    multimedia?: Array<CartItemMultimedia>;
    /**
     * Options
     * @type {Array<CartItemOption>}
     * @memberof CartItem
     */
    options?: Array<CartItemOption>;
    /**
     * 
     * @type {CartItemPhysical}
     * @memberof CartItem
     */
    phsyical?: CartItemPhysical;
    /**
     * Position of the item in the cart
     * @type {number}
     * @memberof CartItem
     */
    position?: number;
    /**
     * True if this item is on pre-order
     * @type {boolean}
     * @memberof CartItem
     */
    preorder?: boolean;
    /**
     * Properties associated with the item
     * @type {Array<CartItemProperty>}
     * @memberof CartItem
     */
    properties?: Array<CartItemProperty>;
    /**
     * quantity
     * @type {number}
     * @memberof CartItem
     */
    quantity?: number;
    /**
     * Customer selectable auto order schedules
     * @type {Array<string>}
     * @memberof CartItem
     */
    schedules?: Array<string>;
    /**
     * 
     * @type {Currency}
     * @memberof CartItem
     */
    total_cost?: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof CartItem
     */
    total_cost_with_discount?: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof CartItem
     */
    unit_cost?: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof CartItem
     */
    unit_cost_with_discount?: Currency;
    /**
     * True if this item was added to the cart as part of an upsell
     * @type {boolean}
     * @memberof CartItem
     */
    upsell?: boolean;
    /**
     * Variations
     * @type {Array<CartItemVariationSelection>}
     * @memberof CartItem
     */
    variations?: Array<CartItemVariationSelection>;
    /**
     * URL to view the product on the site
     * @type {string}
     * @memberof CartItem
     */
    view_url?: string;
}



/**
 * Check if a given object implements the CartItem interface.
 */
export function instanceOfCartItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CartItemFromJSON(json: any): CartItem {
    return CartItemFromJSONTyped(json, false);
}

export function CartItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arbitrary_unit_cost': !exists(json, 'arbitrary_unit_cost') ? undefined : CurrencyFromJSON(json['arbitrary_unit_cost']),
        'attributes': !exists(json, 'attributes') ? undefined : ((json['attributes'] as Array<any>).map(CartItemAttributeFromJSON)),
        'auto_order_schedule': !exists(json, 'auto_order_schedule') ? undefined : json['auto_order_schedule'],
        'default_image_url': !exists(json, 'default_image_url') ? undefined : json['default_image_url'],
        'default_thumbnail_url': !exists(json, 'default_thumbnail_url') ? undefined : json['default_thumbnail_url'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'discount': !exists(json, 'discount') ? undefined : CurrencyFromJSON(json['discount']),
        'extended_description': !exists(json, 'extended_description') ? undefined : json['extended_description'],
        'item_id': !exists(json, 'item_id') ? undefined : json['item_id'],
        'item_oid': !exists(json, 'item_oid') ? undefined : json['item_oid'],
        'kit': !exists(json, 'kit') ? undefined : json['kit'],
        'kit_component_options': !exists(json, 'kit_component_options') ? undefined : ((json['kit_component_options'] as Array<any>).map(CartKitComponentOptionFromJSON)),
        'manufacturer_suggested_retail_price': !exists(json, 'manufacturer_suggested_retail_price') ? undefined : CurrencyFromJSON(json['manufacturer_suggested_retail_price']),
        'maximum_quantity': !exists(json, 'maximum_quantity') ? undefined : json['maximum_quantity'],
        'minimum_quantity': !exists(json, 'minimum_quantity') ? undefined : json['minimum_quantity'],
        'multimedia': !exists(json, 'multimedia') ? undefined : ((json['multimedia'] as Array<any>).map(CartItemMultimediaFromJSON)),
        'options': !exists(json, 'options') ? undefined : ((json['options'] as Array<any>).map(CartItemOptionFromJSON)),
        'phsyical': !exists(json, 'phsyical') ? undefined : CartItemPhysicalFromJSON(json['phsyical']),
        'position': !exists(json, 'position') ? undefined : json['position'],
        'preorder': !exists(json, 'preorder') ? undefined : json['preorder'],
        'properties': !exists(json, 'properties') ? undefined : ((json['properties'] as Array<any>).map(CartItemPropertyFromJSON)),
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'schedules': !exists(json, 'schedules') ? undefined : json['schedules'],
        'total_cost': !exists(json, 'total_cost') ? undefined : CurrencyFromJSON(json['total_cost']),
        'total_cost_with_discount': !exists(json, 'total_cost_with_discount') ? undefined : CurrencyFromJSON(json['total_cost_with_discount']),
        'unit_cost': !exists(json, 'unit_cost') ? undefined : CurrencyFromJSON(json['unit_cost']),
        'unit_cost_with_discount': !exists(json, 'unit_cost_with_discount') ? undefined : CurrencyFromJSON(json['unit_cost_with_discount']),
        'upsell': !exists(json, 'upsell') ? undefined : json['upsell'],
        'variations': !exists(json, 'variations') ? undefined : ((json['variations'] as Array<any>).map(CartItemVariationSelectionFromJSON)),
        'view_url': !exists(json, 'view_url') ? undefined : json['view_url'],
    };
}

export function CartItemToJSON(value?: CartItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arbitrary_unit_cost': CurrencyToJSON(value.arbitrary_unit_cost),
        'attributes': value.attributes === undefined ? undefined : ((value.attributes as Array<any>).map(CartItemAttributeToJSON)),
        'auto_order_schedule': value.auto_order_schedule,
        'default_image_url': value.default_image_url,
        'default_thumbnail_url': value.default_thumbnail_url,
        'description': value.description,
        'discount': CurrencyToJSON(value.discount),
        'extended_description': value.extended_description,
        'item_id': value.item_id,
        'item_oid': value.item_oid,
        'kit': value.kit,
        'kit_component_options': value.kit_component_options === undefined ? undefined : ((value.kit_component_options as Array<any>).map(CartKitComponentOptionToJSON)),
        'manufacturer_suggested_retail_price': CurrencyToJSON(value.manufacturer_suggested_retail_price),
        'maximum_quantity': value.maximum_quantity,
        'minimum_quantity': value.minimum_quantity,
        'multimedia': value.multimedia === undefined ? undefined : ((value.multimedia as Array<any>).map(CartItemMultimediaToJSON)),
        'options': value.options === undefined ? undefined : ((value.options as Array<any>).map(CartItemOptionToJSON)),
        'phsyical': CartItemPhysicalToJSON(value.phsyical),
        'position': value.position,
        'preorder': value.preorder,
        'properties': value.properties === undefined ? undefined : ((value.properties as Array<any>).map(CartItemPropertyToJSON)),
        'quantity': value.quantity,
        'schedules': value.schedules,
        'total_cost': CurrencyToJSON(value.total_cost),
        'total_cost_with_discount': CurrencyToJSON(value.total_cost_with_discount),
        'unit_cost': CurrencyToJSON(value.unit_cost),
        'unit_cost_with_discount': CurrencyToJSON(value.unit_cost_with_discount),
        'upsell': value.upsell,
        'variations': value.variations === undefined ? undefined : ((value.variations as Array<any>).map(CartItemVariationSelectionToJSON)),
        'view_url': value.view_url,
    };
}

