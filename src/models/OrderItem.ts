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
    Currency,
    CurrencyFromJSON,
    CurrencyFromJSONTyped,
    CurrencyToJSON,
} from './Currency';
import {
    Distance,
    DistanceFromJSON,
    DistanceFromJSONTyped,
    DistanceToJSON,
} from './Distance';
import {
    OrderItemEdi,
    OrderItemEdiFromJSON,
    OrderItemEdiFromJSONTyped,
    OrderItemEdiToJSON,
} from './OrderItemEdi';
import {
    OrderItemOption,
    OrderItemOptionFromJSON,
    OrderItemOptionFromJSONTyped,
    OrderItemOptionToJSON,
} from './OrderItemOption';
import {
    OrderItemProperty,
    OrderItemPropertyFromJSON,
    OrderItemPropertyFromJSONTyped,
    OrderItemPropertyToJSON,
} from './OrderItemProperty';
import {
    OrderItemTag,
    OrderItemTagFromJSON,
    OrderItemTagFromJSONTyped,
    OrderItemTagToJSON,
} from './OrderItemTag';
import {
    Weight,
    WeightFromJSON,
    WeightFromJSONTyped,
    WeightToJSON,
} from './Weight';

/**
 * 
 * @export
 * @interface OrderItem
 */
export interface OrderItem {
    /**
     * QuickBooks code
     * @type {string}
     * @memberof OrderItem
     */
    accounting_code?: string;
    /**
     * Activation codes assigned to this item
     * @type {Array<string>}
     * @memberof OrderItem
     */
    activation_codes?: Array<string>;
    /**
     * 
     * @type {Currency}
     * @memberof OrderItem
     */
    actual_cogs?: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof OrderItem
     */
    arbitrary_unit_cost?: Currency;
    /**
     * Date/time of the last rebill, used only during order insert to help project future rebills
     * @type {string}
     * @memberof OrderItem
     */
    auto_order_last_rebill_dts?: string;
    /**
     * Auto order schedule, used only during inserts supplying the recurring schedule
     * @type {string}
     * @memberof OrderItem
     */
    auto_order_schedule?: string;
    /**
     * Barcode
     * @type {string}
     * @memberof OrderItem
     */
    barcode?: string;
    /**
     * Barcode - GTIN 12
     * @type {string}
     * @memberof OrderItem
     */
    barcode_gtin12?: string;
    /**
     * Barcode - GTIN 14
     * @type {string}
     * @memberof OrderItem
     */
    barcode_gtin14?: string;
    /**
     * Barcode - UPC 11
     * @type {string}
     * @memberof OrderItem
     */
    barcode_upc11?: string;
    /**
     * Barcode - UPC 12
     * @type {string}
     * @memberof OrderItem
     */
    barcode_upc12?: string;
    /**
     * Channel partner item id if this order came through a channel partner and the channel partner item id was mapped to an internal item id
     * @type {string}
     * @memberof OrderItem
     */
    channel_partner_item_id?: string;
    /**
     * Cost of goods sold
     * @type {number}
     * @memberof OrderItem
     */
    cogs?: number;
    /**
     * Value of the kit component item
     * @type {number}
     * @memberof OrderItem
     */
    component_unit_value?: number;
    /**
     * 
     * @type {Currency}
     * @memberof OrderItem
     */
    cost?: Currency;
    /**
     * Country of origin (ISO-3166 two letter code)
     * @type {string}
     * @memberof OrderItem
     */
    country_code_of_origin?: string;
    /**
     * Customs description
     * @type {string}
     * @memberof OrderItem
     */
    customs_description?: string;
    /**
     * Description
     * @type {string}
     * @memberof OrderItem
     */
    description?: string;
    /**
     * 
     * @type {Currency}
     * @memberof OrderItem
     */
    discount?: Currency;
    /**
     * Discount quantity
     * @type {number}
     * @memberof OrderItem
     */
    discount_quantity?: number;
    /**
     * 
     * @type {Weight}
     * @memberof OrderItem
     */
    discount_shipping_weight?: Weight;
    /**
     * Distribution center code responsible for shipping this item
     * @type {string}
     * @memberof OrderItem
     */
    distribution_center_code?: string;
    /**
     * 
     * @type {OrderItemEdi}
     * @memberof OrderItem
     */
    edi?: OrderItemEdi;
    /**
     * True if this item is excluded from coupons
     * @type {boolean}
     * @memberof OrderItem
     */
    exclude_coupon?: boolean;
    /**
     * True if the item receives free shipping
     * @type {boolean}
     * @memberof OrderItem
     */
    free_shipping?: boolean;
    /**
     * Hazardous materials indicator
     * @type {boolean}
     * @memberof OrderItem
     */
    hazmat?: boolean;
    /**
     * 
     * @type {Distance}
     * @memberof OrderItem
     */
    height?: Distance;
    /**
     * Index of the item on the order (one based index)
     * @type {number}
     * @memberof OrderItem
     */
    item_index?: number;
    /**
     * Item reference object identifier used to linked to auto order item record
     * @type {number}
     * @memberof OrderItem
     */
    item_reference_oid?: number;
    /**
     * True if this item is a kit
     * @type {boolean}
     * @memberof OrderItem
     */
    kit?: boolean;
    /**
     * True if this item is a kit component
     * @type {boolean}
     * @memberof OrderItem
     */
    kit_component?: boolean;
    /**
     * 
     * @type {Distance}
     * @memberof OrderItem
     */
    length?: Distance;
    /**
     * Manufacturer SKU
     * @type {string}
     * @memberof OrderItem
     */
    manufacturer_sku?: string;
    /**
     * Maximum days that the item can be in transit before spoilage (perishable products)
     * @type {number}
     * @memberof OrderItem
     */
    max_days_time_in_transit?: number;
    /**
     * Item ID
     * @type {string}
     * @memberof OrderItem
     */
    merchant_item_id?: string;
    /**
     * Mix and match group name
     * @type {string}
     * @memberof OrderItem
     */
    mix_and_match_group_name?: string;
    /**
     * Mix and match group object identifier
     * @type {number}
     * @memberof OrderItem
     */
    mix_and_match_group_oid?: number;
    /**
     * True if this item is excluded from shipping discounts
     * @type {boolean}
     * @memberof OrderItem
     */
    no_shipping_discount?: boolean;
    /**
     * Options
     * @type {Array<OrderItemOption>}
     * @memberof OrderItem
     */
    options?: Array<OrderItemOption>;
    /**
     * Packed by user
     * @type {string}
     * @memberof OrderItem
     */
    packed_by_user?: string;
    /**
     * If this item is a kit component, this is the item index of the parent item (kit)
     * @type {number}
     * @memberof OrderItem
     */
    parent_item_index?: number;
    /**
     * If this item is a kit component, this is the item id of the parent item (kit)
     * @type {string}
     * @memberof OrderItem
     */
    parent_merchant_item_id?: string;
    /**
     * Perishable class of the item
     * @type {string}
     * @memberof OrderItem
     */
    perishable_class?: string;
    /**
     * Pricing tier that granted the particular price for this item if the customer profile had pricing tiers assigned
     * @type {string}
     * @memberof OrderItem
     */
    pricing_tier_name?: string;
    /**
     * Properties
     * @type {Array<OrderItemProperty>}
     * @memberof OrderItem
     */
    properties?: Array<OrderItemProperty>;
    /**
     * Quantity
     * @type {number}
     * @memberof OrderItem
     */
    quantity?: number;
    /**
     * Quantity refunded on this item (read only except refund operation)
     * @type {number}
     * @memberof OrderItem
     */
    quantity_refunded?: number;
    /**
     * QuickBooks class
     * @type {string}
     * @memberof OrderItem
     */
    quickbooks_class?: string;
    /**
     * Refund reason code.  This can only be written during a refund operation otherwise this field is read only.
     * @type {string}
     * @memberof OrderItem
     */
    refund_reason?: string;
    /**
     * Return reason code.  This can only be written during a refund operation otherwise this field is read only.
     * @type {string}
     * @memberof OrderItem
     */
    return_reason?: string;
    /**
     * True if this item ships in a separate box
     * @type {boolean}
     * @memberof OrderItem
     */
    ship_separately?: boolean;
    /**
     * Shipped by user
     * @type {string}
     * @memberof OrderItem
     */
    shipped_by_user?: string;
    /**
     * Date/time that this item was marked shipped
     * @type {string}
     * @memberof OrderItem
     */
    shipped_dts?: string;
    /**
     * Shipping status for this item.  This is the replacement for the old order level shipping status.
     * @type {string}
     * @memberof OrderItem
     */
    shipping_status?: string;
    /**
     * Special product type (USPS Media Mail)
     * @type {string}
     * @memberof OrderItem
     */
    special_product_type?: string;
    /**
     * Tags
     * @type {Array<OrderItemTag>}
     * @memberof OrderItem
     */
    tags?: Array<OrderItemTag>;
    /**
     * True if the item is tax free
     * @type {boolean}
     * @memberof OrderItem
     */
    tax_free?: boolean;
    /**
     * Type of product for tax purposes (self or UltraCart Managed taxes)
     * @type {string}
     * @memberof OrderItem
     */
    tax_product_type?: OrderItemTaxProductTypeEnum;
    /**
     * 
     * @type {Currency}
     * @memberof OrderItem
     */
    taxable_cost?: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof OrderItem
     */
    total_cost_with_discount?: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof OrderItem
     */
    total_refunded?: Currency;
    /**
     * Date/time that this item was transmitted to the distribution center
     * @type {string}
     * @memberof OrderItem
     */
    transmitted_to_distribution_center_dts?: string;
    /**
     * 
     * @type {Currency}
     * @memberof OrderItem
     */
    unit_cost_with_discount?: Currency;
    /**
     * True if this item was added to the order as part of an upsell
     * @type {boolean}
     * @memberof OrderItem
     */
    upsell?: boolean;
    /**
     * 
     * @type {Weight}
     * @memberof OrderItem
     */
    weight?: Weight;
    /**
     * 
     * @type {Distance}
     * @memberof OrderItem
     */
    width?: Distance;
}


/**
 * @export
 */
export const OrderItemTaxProductTypeEnum = {
    Empty: '',
    Digital: 'digital',
    Physical: 'physical',
    Service: 'service'
} as const;
export type OrderItemTaxProductTypeEnum = typeof OrderItemTaxProductTypeEnum[keyof typeof OrderItemTaxProductTypeEnum];


export function OrderItemFromJSON(json: any): OrderItem {
    return OrderItemFromJSONTyped(json, false);
}

export function OrderItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accounting_code': !exists(json, 'accounting_code') ? undefined : json['accounting_code'],
        'activation_codes': !exists(json, 'activation_codes') ? undefined : json['activation_codes'],
        'actual_cogs': !exists(json, 'actual_cogs') ? undefined : CurrencyFromJSON(json['actual_cogs']),
        'arbitrary_unit_cost': !exists(json, 'arbitrary_unit_cost') ? undefined : CurrencyFromJSON(json['arbitrary_unit_cost']),
        'auto_order_last_rebill_dts': !exists(json, 'auto_order_last_rebill_dts') ? undefined : json['auto_order_last_rebill_dts'],
        'auto_order_schedule': !exists(json, 'auto_order_schedule') ? undefined : json['auto_order_schedule'],
        'barcode': !exists(json, 'barcode') ? undefined : json['barcode'],
        'barcode_gtin12': !exists(json, 'barcode_gtin12') ? undefined : json['barcode_gtin12'],
        'barcode_gtin14': !exists(json, 'barcode_gtin14') ? undefined : json['barcode_gtin14'],
        'barcode_upc11': !exists(json, 'barcode_upc11') ? undefined : json['barcode_upc11'],
        'barcode_upc12': !exists(json, 'barcode_upc12') ? undefined : json['barcode_upc12'],
        'channel_partner_item_id': !exists(json, 'channel_partner_item_id') ? undefined : json['channel_partner_item_id'],
        'cogs': !exists(json, 'cogs') ? undefined : json['cogs'],
        'component_unit_value': !exists(json, 'component_unit_value') ? undefined : json['component_unit_value'],
        'cost': !exists(json, 'cost') ? undefined : CurrencyFromJSON(json['cost']),
        'country_code_of_origin': !exists(json, 'country_code_of_origin') ? undefined : json['country_code_of_origin'],
        'customs_description': !exists(json, 'customs_description') ? undefined : json['customs_description'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'discount': !exists(json, 'discount') ? undefined : CurrencyFromJSON(json['discount']),
        'discount_quantity': !exists(json, 'discount_quantity') ? undefined : json['discount_quantity'],
        'discount_shipping_weight': !exists(json, 'discount_shipping_weight') ? undefined : WeightFromJSON(json['discount_shipping_weight']),
        'distribution_center_code': !exists(json, 'distribution_center_code') ? undefined : json['distribution_center_code'],
        'edi': !exists(json, 'edi') ? undefined : OrderItemEdiFromJSON(json['edi']),
        'exclude_coupon': !exists(json, 'exclude_coupon') ? undefined : json['exclude_coupon'],
        'free_shipping': !exists(json, 'free_shipping') ? undefined : json['free_shipping'],
        'hazmat': !exists(json, 'hazmat') ? undefined : json['hazmat'],
        'height': !exists(json, 'height') ? undefined : DistanceFromJSON(json['height']),
        'item_index': !exists(json, 'item_index') ? undefined : json['item_index'],
        'item_reference_oid': !exists(json, 'item_reference_oid') ? undefined : json['item_reference_oid'],
        'kit': !exists(json, 'kit') ? undefined : json['kit'],
        'kit_component': !exists(json, 'kit_component') ? undefined : json['kit_component'],
        'length': !exists(json, 'length') ? undefined : DistanceFromJSON(json['length']),
        'manufacturer_sku': !exists(json, 'manufacturer_sku') ? undefined : json['manufacturer_sku'],
        'max_days_time_in_transit': !exists(json, 'max_days_time_in_transit') ? undefined : json['max_days_time_in_transit'],
        'merchant_item_id': !exists(json, 'merchant_item_id') ? undefined : json['merchant_item_id'],
        'mix_and_match_group_name': !exists(json, 'mix_and_match_group_name') ? undefined : json['mix_and_match_group_name'],
        'mix_and_match_group_oid': !exists(json, 'mix_and_match_group_oid') ? undefined : json['mix_and_match_group_oid'],
        'no_shipping_discount': !exists(json, 'no_shipping_discount') ? undefined : json['no_shipping_discount'],
        'options': !exists(json, 'options') ? undefined : ((json['options'] as Array<any>).map(OrderItemOptionFromJSON)),
        'packed_by_user': !exists(json, 'packed_by_user') ? undefined : json['packed_by_user'],
        'parent_item_index': !exists(json, 'parent_item_index') ? undefined : json['parent_item_index'],
        'parent_merchant_item_id': !exists(json, 'parent_merchant_item_id') ? undefined : json['parent_merchant_item_id'],
        'perishable_class': !exists(json, 'perishable_class') ? undefined : json['perishable_class'],
        'pricing_tier_name': !exists(json, 'pricing_tier_name') ? undefined : json['pricing_tier_name'],
        'properties': !exists(json, 'properties') ? undefined : ((json['properties'] as Array<any>).map(OrderItemPropertyFromJSON)),
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'quantity_refunded': !exists(json, 'quantity_refunded') ? undefined : json['quantity_refunded'],
        'quickbooks_class': !exists(json, 'quickbooks_class') ? undefined : json['quickbooks_class'],
        'refund_reason': !exists(json, 'refund_reason') ? undefined : json['refund_reason'],
        'return_reason': !exists(json, 'return_reason') ? undefined : json['return_reason'],
        'ship_separately': !exists(json, 'ship_separately') ? undefined : json['ship_separately'],
        'shipped_by_user': !exists(json, 'shipped_by_user') ? undefined : json['shipped_by_user'],
        'shipped_dts': !exists(json, 'shipped_dts') ? undefined : json['shipped_dts'],
        'shipping_status': !exists(json, 'shipping_status') ? undefined : json['shipping_status'],
        'special_product_type': !exists(json, 'special_product_type') ? undefined : json['special_product_type'],
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(OrderItemTagFromJSON)),
        'tax_free': !exists(json, 'tax_free') ? undefined : json['tax_free'],
        'tax_product_type': !exists(json, 'tax_product_type') ? undefined : json['tax_product_type'],
        'taxable_cost': !exists(json, 'taxable_cost') ? undefined : CurrencyFromJSON(json['taxable_cost']),
        'total_cost_with_discount': !exists(json, 'total_cost_with_discount') ? undefined : CurrencyFromJSON(json['total_cost_with_discount']),
        'total_refunded': !exists(json, 'total_refunded') ? undefined : CurrencyFromJSON(json['total_refunded']),
        'transmitted_to_distribution_center_dts': !exists(json, 'transmitted_to_distribution_center_dts') ? undefined : json['transmitted_to_distribution_center_dts'],
        'unit_cost_with_discount': !exists(json, 'unit_cost_with_discount') ? undefined : CurrencyFromJSON(json['unit_cost_with_discount']),
        'upsell': !exists(json, 'upsell') ? undefined : json['upsell'],
        'weight': !exists(json, 'weight') ? undefined : WeightFromJSON(json['weight']),
        'width': !exists(json, 'width') ? undefined : DistanceFromJSON(json['width']),
    };
}

export function OrderItemToJSON(value?: OrderItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accounting_code': value.accounting_code,
        'activation_codes': value.activation_codes,
        'actual_cogs': CurrencyToJSON(value.actual_cogs),
        'arbitrary_unit_cost': CurrencyToJSON(value.arbitrary_unit_cost),
        'auto_order_last_rebill_dts': value.auto_order_last_rebill_dts,
        'auto_order_schedule': value.auto_order_schedule,
        'barcode': value.barcode,
        'barcode_gtin12': value.barcode_gtin12,
        'barcode_gtin14': value.barcode_gtin14,
        'barcode_upc11': value.barcode_upc11,
        'barcode_upc12': value.barcode_upc12,
        'channel_partner_item_id': value.channel_partner_item_id,
        'cogs': value.cogs,
        'component_unit_value': value.component_unit_value,
        'cost': CurrencyToJSON(value.cost),
        'country_code_of_origin': value.country_code_of_origin,
        'customs_description': value.customs_description,
        'description': value.description,
        'discount': CurrencyToJSON(value.discount),
        'discount_quantity': value.discount_quantity,
        'discount_shipping_weight': WeightToJSON(value.discount_shipping_weight),
        'distribution_center_code': value.distribution_center_code,
        'edi': OrderItemEdiToJSON(value.edi),
        'exclude_coupon': value.exclude_coupon,
        'free_shipping': value.free_shipping,
        'hazmat': value.hazmat,
        'height': DistanceToJSON(value.height),
        'item_index': value.item_index,
        'item_reference_oid': value.item_reference_oid,
        'kit': value.kit,
        'kit_component': value.kit_component,
        'length': DistanceToJSON(value.length),
        'manufacturer_sku': value.manufacturer_sku,
        'max_days_time_in_transit': value.max_days_time_in_transit,
        'merchant_item_id': value.merchant_item_id,
        'mix_and_match_group_name': value.mix_and_match_group_name,
        'mix_and_match_group_oid': value.mix_and_match_group_oid,
        'no_shipping_discount': value.no_shipping_discount,
        'options': value.options === undefined ? undefined : ((value.options as Array<any>).map(OrderItemOptionToJSON)),
        'packed_by_user': value.packed_by_user,
        'parent_item_index': value.parent_item_index,
        'parent_merchant_item_id': value.parent_merchant_item_id,
        'perishable_class': value.perishable_class,
        'pricing_tier_name': value.pricing_tier_name,
        'properties': value.properties === undefined ? undefined : ((value.properties as Array<any>).map(OrderItemPropertyToJSON)),
        'quantity': value.quantity,
        'quantity_refunded': value.quantity_refunded,
        'quickbooks_class': value.quickbooks_class,
        'refund_reason': value.refund_reason,
        'return_reason': value.return_reason,
        'ship_separately': value.ship_separately,
        'shipped_by_user': value.shipped_by_user,
        'shipped_dts': value.shipped_dts,
        'shipping_status': value.shipping_status,
        'special_product_type': value.special_product_type,
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(OrderItemTagToJSON)),
        'tax_free': value.tax_free,
        'tax_product_type': value.tax_product_type,
        'taxable_cost': CurrencyToJSON(value.taxable_cost),
        'total_cost_with_discount': CurrencyToJSON(value.total_cost_with_discount),
        'total_refunded': CurrencyToJSON(value.total_refunded),
        'transmitted_to_distribution_center_dts': value.transmitted_to_distribution_center_dts,
        'unit_cost_with_discount': CurrencyToJSON(value.unit_cost_with_discount),
        'upsell': value.upsell,
        'weight': WeightToJSON(value.weight),
        'width': DistanceToJSON(value.width),
    };
}

