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
    ItemEbayCategorySpecific,
    ItemEbayCategorySpecificFromJSON,
    ItemEbayCategorySpecificFromJSONTyped,
    ItemEbayCategorySpecificToJSON,
} from './ItemEbayCategorySpecific';
import {
    ItemEbayMarketPlaceAnalysis,
    ItemEbayMarketPlaceAnalysisFromJSON,
    ItemEbayMarketPlaceAnalysisFromJSONTyped,
    ItemEbayMarketPlaceAnalysisToJSON,
} from './ItemEbayMarketPlaceAnalysis';

/**
 * 
 * @export
 * @interface ItemEbay
 */
export interface ItemEbay {
    /**
     * True if the item is active for listing
     * @type {boolean}
     * @memberof ItemEbay
     */
    active?: boolean;
    /**
     * e-Bay category ID
     * @type {number}
     * @memberof ItemEbay
     */
    category_id?: number;
    /**
     * Answers to category specific questions
     * @type {Array<ItemEbayCategorySpecific>}
     * @memberof ItemEbay
     */
    category_specifics?: Array<ItemEbayCategorySpecific>;
    /**
     * Description of the condition (e-Bay constant)
     * @type {string}
     * @memberof ItemEbay
     */
    condition_description?: string;
    /**
     * Numerical ID of the condition (e-Bay constant)
     * @type {number}
     * @memberof ItemEbay
     */
    condition_id?: number;
    /**
     * Number of consecutive failures trying to list this item
     * @type {number}
     * @memberof ItemEbay
     */
    consecutive_failures?: number;
    /**
     * e-Bay Store category 1
     * @type {number}
     * @memberof ItemEbay
     */
    custom_category1?: number;
    /**
     * e-Bay Store category 2
     * @type {number}
     * @memberof ItemEbay
     */
    custom_category2?: number;
    /**
     * Maximum number of days it will take to ship the item
     * @type {number}
     * @memberof ItemEbay
     */
    dispatch_time_max?: number;
    /**
     * Domestic 1 method additional item cost
     * @type {number}
     * @memberof ItemEbay
     */
    domestic_1_additional_cost?: number;
    /**
     * Domestic 1 method first item cost
     * @type {number}
     * @memberof ItemEbay
     */
    domestic_1_first_cost?: number;
    /**
     * Domestic 2 method additional item cost
     * @type {number}
     * @memberof ItemEbay
     */
    domestic_2_additional_cost?: number;
    /**
     * Domestic 2 method first item cost
     * @type {number}
     * @memberof ItemEbay
     */
    domestic_2_first_cost?: number;
    /**
     * Domestic 3 method additional item cost
     * @type {number}
     * @memberof ItemEbay
     */
    domestic_3_additional_cost?: number;
    /**
     * Domestic 3 method first item cost
     * @type {number}
     * @memberof ItemEbay
     */
    domestic_3_first_cost?: number;
    /**
     * Domestic 4 method additional item cost
     * @type {number}
     * @memberof ItemEbay
     */
    domestic_4_additional_cost?: number;
    /**
     * Domestic 4 method first item cost
     * @type {number}
     * @memberof ItemEbay
     */
    domestic_4_first_cost?: number;
    /**
     * If listed, this is the e-Bay auction id
     * @type {string}
     * @memberof ItemEbay
     */
    ebay_auction_id?: string;
    /**
     * e-Bay specific inventory
     * @type {number}
     * @memberof ItemEbay
     */
    ebay_specific_inventory?: number;
    /**
     * The template name to use hwen rendering the e-Bay listing
     * @type {string}
     * @memberof ItemEbay
     */
    ebay_template_name?: string;
    /**
     * The template object identifier to use when rendering the e-Bay listing
     * @type {number}
     * @memberof ItemEbay
     */
    ebay_template_oid?: number;
    /**
     * Date/time of the auction end
     * @type {string}
     * @memberof ItemEbay
     */
    end_time?: string;
    /**
     * True if item receives free shipping
     * @type {boolean}
     * @memberof ItemEbay
     */
    free_shipping?: boolean;
    /**
     * The method that is free for free shipping
     * @type {string}
     * @memberof ItemEbay
     */
    free_shipping_method?: string;
    /**
     * International 1 method additional item cost
     * @type {number}
     * @memberof ItemEbay
     */
    international_1_additional_cost?: number;
    /**
     * International 1 method first item cost
     * @type {number}
     * @memberof ItemEbay
     */
    international_1_first_cost?: number;
    /**
     * International 2 method additional item cost
     * @type {number}
     * @memberof ItemEbay
     */
    international_2_additional_cost?: number;
    /**
     * International 2 method first item cost
     * @type {number}
     * @memberof ItemEbay
     */
    international_2_first_cost?: number;
    /**
     * International 3 method additional item cost
     * @type {number}
     * @memberof ItemEbay
     */
    international_3_additional_cost?: number;
    /**
     * International 3 method first item cost
     * @type {number}
     * @memberof ItemEbay
     */
    international_3_first_cost?: number;
    /**
     * International 4 method additional item cost
     * @type {number}
     * @memberof ItemEbay
     */
    international_4_additional_cost?: number;
    /**
     * International 4 method first item cost
     * @type {number}
     * @memberof ItemEbay
     */
    international_4_first_cost?: number;
    /**
     * Date/time of the last status check
     * @type {string}
     * @memberof ItemEbay
     */
    last_status_dts?: string;
    /**
     * Current listing dispatch time maximum
     * @type {number}
     * @memberof ItemEbay
     */
    listed_dispatch_time_max?: number;
    /**
     * The template object identifier used for the listing
     * @type {number}
     * @memberof ItemEbay
     */
    listed_ebay_template_oid?: number;
    /**
     * Date/time of the listing
     * @type {string}
     * @memberof ItemEbay
     */
    listing_dts?: string;
    /**
     * The duration of the listing
     * @type {string}
     * @memberof ItemEbay
     */
    listing_duration?: string;
    /**
     * Price to list the item at
     * @type {number}
     * @memberof ItemEbay
     */
    listing_price?: number;
    /**
     * The price to list the item at if different than the regular UltraCart item price
     * @type {number}
     * @memberof ItemEbay
     */
    listing_price_override?: number;
    /**
     * The type of e-Bay listing
     * @type {string}
     * @memberof ItemEbay
     */
    listing_type?: string;
    /**
     * 
     * @type {ItemEbayMarketPlaceAnalysis}
     * @memberof ItemEbay
     */
    marketplace_analysis?: ItemEbayMarketPlaceAnalysis;
    /**
     * True if marketplace analysis should be performed
     * @type {boolean}
     * @memberof ItemEbay
     */
    marketplace_analysis_perform?: boolean;
    /**
     * Marketplace FVF percentage
     * @type {number}
     * @memberof ItemEbay
     */
    marketplace_final_value_fee_percentage?: number;
    /**
     * Date/time of the marketplace analysis last check
     * @type {string}
     * @memberof ItemEbay
     */
    marketplace_last_check_dts?: string;
    /**
     * True if we are the lowest offer in the marketplace
     * @type {boolean}
     * @memberof ItemEbay
     */
    marketplace_lowest?: boolean;
    /**
     * True if another seller is violating MAP
     * @type {boolean}
     * @memberof ItemEbay
     */
    marketplace_map_violation?: boolean;
    /**
     * Marketplace multiplier
     * @type {number}
     * @memberof ItemEbay
     */
    marketplace_multiplier?: number;
    /**
     * Marketplace other price
     * @type {number}
     * @memberof ItemEbay
     */
    marketplace_other_price?: number;
    /**
     * Marketplace other seller
     * @type {string}
     * @memberof ItemEbay
     */
    marketplace_other_seller?: string;
    /**
     * Marketplace other shipping
     * @type {number}
     * @memberof ItemEbay
     */
    marketplace_other_shipping?: number;
    /**
     * Marketplace other total
     * @type {number}
     * @memberof ItemEbay
     */
    marketplace_other_total?: number;
    /**
     * Marketplace our additional profit potential
     * @type {number}
     * @memberof ItemEbay
     */
    marketplace_our_additional_profit_potential?: number;
    /**
     * Marketplace our price
     * @type {number}
     * @memberof ItemEbay
     */
    marketplace_our_price?: number;
    /**
     * Marketplace our profit
     * @type {number}
     * @memberof ItemEbay
     */
    marketplace_our_profit?: number;
    /**
     * Marketplace our shipping
     * @type {number}
     * @memberof ItemEbay
     */
    marketplace_our_shipping?: number;
    /**
     * Marketplace our total
     * @type {number}
     * @memberof ItemEbay
     */
    marketplace_our_total?: number;
    /**
     * Marketplace overhead
     * @type {number}
     * @memberof ItemEbay
     */
    marketplace_overhead?: number;
    /**
     * True if our listing is profitable to sell
     * @type {boolean}
     * @memberof ItemEbay
     */
    marketplace_profitable?: boolean;
    /**
     * Date/time for the next attempt to list
     * @type {string}
     * @memberof ItemEbay
     */
    next_attempt_dts?: string;
    /**
     * The next listing duration to use when the current listing ends.
     * @type {string}
     * @memberof ItemEbay
     */
    next_listing_duration?: string;
    /**
     * True if the item should not qualify for promotional shipping
     * @type {boolean}
     * @memberof ItemEbay
     */
    no_promotional_shipping?: boolean;
    /**
     * Packaging and handling costs
     * @type {number}
     * @memberof ItemEbay
     */
    packaging_handling_costs?: number;
    /**
     * Previous e-Bay auction id
     * @type {string}
     * @memberof ItemEbay
     */
    previous_ebay_auction_id?: string;
    /**
     * Quantity available of the item
     * @type {number}
     * @memberof ItemEbay
     */
    quantity?: number;
    /**
     * Reserve price
     * @type {number}
     * @memberof ItemEbay
     */
    reserve_price?: number;
    /**
     * How to send the item dimensions and weights to e-Bay
     * @type {string}
     * @memberof ItemEbay
     */
    send_dimensions_and_weight?: string;
    /**
     * Date/time of the auction start
     * @type {string}
     * @memberof ItemEbay
     */
    start_time?: string;
    /**
     * Status of the item's listing
     * @type {string}
     * @memberof ItemEbay
     */
    status?: string;
    /**
     * Typical number of days it will take to ship the item
     * @type {number}
     * @memberof ItemEbay
     */
    target_dispatch_time_max?: number;
}

export function ItemEbayFromJSON(json: any): ItemEbay {
    return ItemEbayFromJSONTyped(json, false);
}

export function ItemEbayFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemEbay {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'category_id': !exists(json, 'category_id') ? undefined : json['category_id'],
        'category_specifics': !exists(json, 'category_specifics') ? undefined : ((json['category_specifics'] as Array<any>).map(ItemEbayCategorySpecificFromJSON)),
        'condition_description': !exists(json, 'condition_description') ? undefined : json['condition_description'],
        'condition_id': !exists(json, 'condition_id') ? undefined : json['condition_id'],
        'consecutive_failures': !exists(json, 'consecutive_failures') ? undefined : json['consecutive_failures'],
        'custom_category1': !exists(json, 'custom_category1') ? undefined : json['custom_category1'],
        'custom_category2': !exists(json, 'custom_category2') ? undefined : json['custom_category2'],
        'dispatch_time_max': !exists(json, 'dispatch_time_max') ? undefined : json['dispatch_time_max'],
        'domestic_1_additional_cost': !exists(json, 'domestic_1_additional_cost') ? undefined : json['domestic_1_additional_cost'],
        'domestic_1_first_cost': !exists(json, 'domestic_1_first_cost') ? undefined : json['domestic_1_first_cost'],
        'domestic_2_additional_cost': !exists(json, 'domestic_2_additional_cost') ? undefined : json['domestic_2_additional_cost'],
        'domestic_2_first_cost': !exists(json, 'domestic_2_first_cost') ? undefined : json['domestic_2_first_cost'],
        'domestic_3_additional_cost': !exists(json, 'domestic_3_additional_cost') ? undefined : json['domestic_3_additional_cost'],
        'domestic_3_first_cost': !exists(json, 'domestic_3_first_cost') ? undefined : json['domestic_3_first_cost'],
        'domestic_4_additional_cost': !exists(json, 'domestic_4_additional_cost') ? undefined : json['domestic_4_additional_cost'],
        'domestic_4_first_cost': !exists(json, 'domestic_4_first_cost') ? undefined : json['domestic_4_first_cost'],
        'ebay_auction_id': !exists(json, 'ebay_auction_id') ? undefined : json['ebay_auction_id'],
        'ebay_specific_inventory': !exists(json, 'ebay_specific_inventory') ? undefined : json['ebay_specific_inventory'],
        'ebay_template_name': !exists(json, 'ebay_template_name') ? undefined : json['ebay_template_name'],
        'ebay_template_oid': !exists(json, 'ebay_template_oid') ? undefined : json['ebay_template_oid'],
        'end_time': !exists(json, 'end_time') ? undefined : json['end_time'],
        'free_shipping': !exists(json, 'free_shipping') ? undefined : json['free_shipping'],
        'free_shipping_method': !exists(json, 'free_shipping_method') ? undefined : json['free_shipping_method'],
        'international_1_additional_cost': !exists(json, 'international_1_additional_cost') ? undefined : json['international_1_additional_cost'],
        'international_1_first_cost': !exists(json, 'international_1_first_cost') ? undefined : json['international_1_first_cost'],
        'international_2_additional_cost': !exists(json, 'international_2_additional_cost') ? undefined : json['international_2_additional_cost'],
        'international_2_first_cost': !exists(json, 'international_2_first_cost') ? undefined : json['international_2_first_cost'],
        'international_3_additional_cost': !exists(json, 'international_3_additional_cost') ? undefined : json['international_3_additional_cost'],
        'international_3_first_cost': !exists(json, 'international_3_first_cost') ? undefined : json['international_3_first_cost'],
        'international_4_additional_cost': !exists(json, 'international_4_additional_cost') ? undefined : json['international_4_additional_cost'],
        'international_4_first_cost': !exists(json, 'international_4_first_cost') ? undefined : json['international_4_first_cost'],
        'last_status_dts': !exists(json, 'last_status_dts') ? undefined : json['last_status_dts'],
        'listed_dispatch_time_max': !exists(json, 'listed_dispatch_time_max') ? undefined : json['listed_dispatch_time_max'],
        'listed_ebay_template_oid': !exists(json, 'listed_ebay_template_oid') ? undefined : json['listed_ebay_template_oid'],
        'listing_dts': !exists(json, 'listing_dts') ? undefined : json['listing_dts'],
        'listing_duration': !exists(json, 'listing_duration') ? undefined : json['listing_duration'],
        'listing_price': !exists(json, 'listing_price') ? undefined : json['listing_price'],
        'listing_price_override': !exists(json, 'listing_price_override') ? undefined : json['listing_price_override'],
        'listing_type': !exists(json, 'listing_type') ? undefined : json['listing_type'],
        'marketplace_analysis': !exists(json, 'marketplace_analysis') ? undefined : ItemEbayMarketPlaceAnalysisFromJSON(json['marketplace_analysis']),
        'marketplace_analysis_perform': !exists(json, 'marketplace_analysis_perform') ? undefined : json['marketplace_analysis_perform'],
        'marketplace_final_value_fee_percentage': !exists(json, 'marketplace_final_value_fee_percentage') ? undefined : json['marketplace_final_value_fee_percentage'],
        'marketplace_last_check_dts': !exists(json, 'marketplace_last_check_dts') ? undefined : json['marketplace_last_check_dts'],
        'marketplace_lowest': !exists(json, 'marketplace_lowest') ? undefined : json['marketplace_lowest'],
        'marketplace_map_violation': !exists(json, 'marketplace_map_violation') ? undefined : json['marketplace_map_violation'],
        'marketplace_multiplier': !exists(json, 'marketplace_multiplier') ? undefined : json['marketplace_multiplier'],
        'marketplace_other_price': !exists(json, 'marketplace_other_price') ? undefined : json['marketplace_other_price'],
        'marketplace_other_seller': !exists(json, 'marketplace_other_seller') ? undefined : json['marketplace_other_seller'],
        'marketplace_other_shipping': !exists(json, 'marketplace_other_shipping') ? undefined : json['marketplace_other_shipping'],
        'marketplace_other_total': !exists(json, 'marketplace_other_total') ? undefined : json['marketplace_other_total'],
        'marketplace_our_additional_profit_potential': !exists(json, 'marketplace_our_additional_profit_potential') ? undefined : json['marketplace_our_additional_profit_potential'],
        'marketplace_our_price': !exists(json, 'marketplace_our_price') ? undefined : json['marketplace_our_price'],
        'marketplace_our_profit': !exists(json, 'marketplace_our_profit') ? undefined : json['marketplace_our_profit'],
        'marketplace_our_shipping': !exists(json, 'marketplace_our_shipping') ? undefined : json['marketplace_our_shipping'],
        'marketplace_our_total': !exists(json, 'marketplace_our_total') ? undefined : json['marketplace_our_total'],
        'marketplace_overhead': !exists(json, 'marketplace_overhead') ? undefined : json['marketplace_overhead'],
        'marketplace_profitable': !exists(json, 'marketplace_profitable') ? undefined : json['marketplace_profitable'],
        'next_attempt_dts': !exists(json, 'next_attempt_dts') ? undefined : json['next_attempt_dts'],
        'next_listing_duration': !exists(json, 'next_listing_duration') ? undefined : json['next_listing_duration'],
        'no_promotional_shipping': !exists(json, 'no_promotional_shipping') ? undefined : json['no_promotional_shipping'],
        'packaging_handling_costs': !exists(json, 'packaging_handling_costs') ? undefined : json['packaging_handling_costs'],
        'previous_ebay_auction_id': !exists(json, 'previous_ebay_auction_id') ? undefined : json['previous_ebay_auction_id'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'reserve_price': !exists(json, 'reserve_price') ? undefined : json['reserve_price'],
        'send_dimensions_and_weight': !exists(json, 'send_dimensions_and_weight') ? undefined : json['send_dimensions_and_weight'],
        'start_time': !exists(json, 'start_time') ? undefined : json['start_time'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'target_dispatch_time_max': !exists(json, 'target_dispatch_time_max') ? undefined : json['target_dispatch_time_max'],
    };
}

export function ItemEbayToJSON(value?: ItemEbay | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'category_id': value.category_id,
        'category_specifics': value.category_specifics === undefined ? undefined : ((value.category_specifics as Array<any>).map(ItemEbayCategorySpecificToJSON)),
        'condition_description': value.condition_description,
        'condition_id': value.condition_id,
        'consecutive_failures': value.consecutive_failures,
        'custom_category1': value.custom_category1,
        'custom_category2': value.custom_category2,
        'dispatch_time_max': value.dispatch_time_max,
        'domestic_1_additional_cost': value.domestic_1_additional_cost,
        'domestic_1_first_cost': value.domestic_1_first_cost,
        'domestic_2_additional_cost': value.domestic_2_additional_cost,
        'domestic_2_first_cost': value.domestic_2_first_cost,
        'domestic_3_additional_cost': value.domestic_3_additional_cost,
        'domestic_3_first_cost': value.domestic_3_first_cost,
        'domestic_4_additional_cost': value.domestic_4_additional_cost,
        'domestic_4_first_cost': value.domestic_4_first_cost,
        'ebay_auction_id': value.ebay_auction_id,
        'ebay_specific_inventory': value.ebay_specific_inventory,
        'ebay_template_name': value.ebay_template_name,
        'ebay_template_oid': value.ebay_template_oid,
        'end_time': value.end_time,
        'free_shipping': value.free_shipping,
        'free_shipping_method': value.free_shipping_method,
        'international_1_additional_cost': value.international_1_additional_cost,
        'international_1_first_cost': value.international_1_first_cost,
        'international_2_additional_cost': value.international_2_additional_cost,
        'international_2_first_cost': value.international_2_first_cost,
        'international_3_additional_cost': value.international_3_additional_cost,
        'international_3_first_cost': value.international_3_first_cost,
        'international_4_additional_cost': value.international_4_additional_cost,
        'international_4_first_cost': value.international_4_first_cost,
        'last_status_dts': value.last_status_dts,
        'listed_dispatch_time_max': value.listed_dispatch_time_max,
        'listed_ebay_template_oid': value.listed_ebay_template_oid,
        'listing_dts': value.listing_dts,
        'listing_duration': value.listing_duration,
        'listing_price': value.listing_price,
        'listing_price_override': value.listing_price_override,
        'listing_type': value.listing_type,
        'marketplace_analysis': ItemEbayMarketPlaceAnalysisToJSON(value.marketplace_analysis),
        'marketplace_analysis_perform': value.marketplace_analysis_perform,
        'marketplace_final_value_fee_percentage': value.marketplace_final_value_fee_percentage,
        'marketplace_last_check_dts': value.marketplace_last_check_dts,
        'marketplace_lowest': value.marketplace_lowest,
        'marketplace_map_violation': value.marketplace_map_violation,
        'marketplace_multiplier': value.marketplace_multiplier,
        'marketplace_other_price': value.marketplace_other_price,
        'marketplace_other_seller': value.marketplace_other_seller,
        'marketplace_other_shipping': value.marketplace_other_shipping,
        'marketplace_other_total': value.marketplace_other_total,
        'marketplace_our_additional_profit_potential': value.marketplace_our_additional_profit_potential,
        'marketplace_our_price': value.marketplace_our_price,
        'marketplace_our_profit': value.marketplace_our_profit,
        'marketplace_our_shipping': value.marketplace_our_shipping,
        'marketplace_our_total': value.marketplace_our_total,
        'marketplace_overhead': value.marketplace_overhead,
        'marketplace_profitable': value.marketplace_profitable,
        'next_attempt_dts': value.next_attempt_dts,
        'next_listing_duration': value.next_listing_duration,
        'no_promotional_shipping': value.no_promotional_shipping,
        'packaging_handling_costs': value.packaging_handling_costs,
        'previous_ebay_auction_id': value.previous_ebay_auction_id,
        'quantity': value.quantity,
        'reserve_price': value.reserve_price,
        'send_dimensions_and_weight': value.send_dimensions_and_weight,
        'start_time': value.start_time,
        'status': value.status,
        'target_dispatch_time_max': value.target_dispatch_time_max,
    };
}
