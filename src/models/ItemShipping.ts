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
    ItemShippingCase,
    ItemShippingCaseFromJSON,
    ItemShippingCaseFromJSONTyped,
    ItemShippingCaseToJSON,
} from './ItemShippingCase';
import {
    ItemShippingDestinationMarkup,
    ItemShippingDestinationMarkupFromJSON,
    ItemShippingDestinationMarkupFromJSONTyped,
    ItemShippingDestinationMarkupToJSON,
} from './ItemShippingDestinationMarkup';
import {
    ItemShippingDestinationRestriction,
    ItemShippingDestinationRestrictionFromJSON,
    ItemShippingDestinationRestrictionFromJSONTyped,
    ItemShippingDestinationRestrictionToJSON,
} from './ItemShippingDestinationRestriction';
import {
    ItemShippingDistributionCenter,
    ItemShippingDistributionCenterFromJSON,
    ItemShippingDistributionCenterFromJSONTyped,
    ItemShippingDistributionCenterToJSON,
} from './ItemShippingDistributionCenter';
import {
    ItemShippingMethod,
    ItemShippingMethodFromJSON,
    ItemShippingMethodFromJSONTyped,
    ItemShippingMethodToJSON,
} from './ItemShippingMethod';
import {
    ItemShippingPackageRequirement,
    ItemShippingPackageRequirementFromJSON,
    ItemShippingPackageRequirementFromJSONTyped,
    ItemShippingPackageRequirementToJSON,
} from './ItemShippingPackageRequirement';
import {
    Weight,
    WeightFromJSON,
    WeightFromJSONTyped,
    WeightToJSON,
} from './Weight';

/**
 * 
 * @export
 * @interface ItemShipping
 */
export interface ItemShipping {
    /**
     * Allow back order
     * @type {boolean}
     * @memberof ItemShipping
     */
    allow_back_order?: boolean;
    /**
     * Fulfillment by Amazon.com
     * @type {boolean}
     * @memberof ItemShipping
     */
    amazon_fba?: boolean;
    /**
     * Case inner packs
     * @type {number}
     * @memberof ItemShipping
     */
    case_inner_packs?: number;
    /**
     * Case units
     * @type {number}
     * @memberof ItemShipping
     */
    case_units?: number;
    /**
     * Cases
     * @type {Array<ItemShippingCase>}
     * @memberof ItemShipping
     */
    cases?: Array<ItemShippingCase>;
    /**
     * This item is on pre-order
     * @type {boolean}
     * @memberof ItemShipping
     */
    collect_serial_numbers?: boolean;
    /**
     * Country code of origin for customs forms.  (ISO-3166 two letter code)
     * @type {string}
     * @memberof ItemShipping
     */
    country_code_of_origin?: string;
    /**
     * Customs description
     * @type {string}
     * @memberof ItemShipping
     */
    customs_description?: string;
    /**
     * Customs value
     * @type {number}
     * @memberof ItemShipping
     */
    customs_value?: number;
    /**
     * Delivery on Friday
     * @type {boolean}
     * @memberof ItemShipping
     */
    delivery_on_friday?: boolean;
    /**
     * Delivery on Monday
     * @type {boolean}
     * @memberof ItemShipping
     */
    delivery_on_monday?: boolean;
    /**
     * Delivery on Saturday
     * @type {boolean}
     * @memberof ItemShipping
     */
    delivery_on_saturday?: boolean;
    /**
     * Delivery on Sunday
     * @type {boolean}
     * @memberof ItemShipping
     */
    delivery_on_sunday?: boolean;
    /**
     * Delivery on Thursday
     * @type {boolean}
     * @memberof ItemShipping
     */
    delivery_on_thursday?: boolean;
    /**
     * Delivery on Tuesday
     * @type {boolean}
     * @memberof ItemShipping
     */
    delivery_on_tuesday?: boolean;
    /**
     * Delivery on Wednesday
     * @type {boolean}
     * @memberof ItemShipping
     */
    delivery_on_wednesday?: boolean;
    /**
     * Destination markups
     * @type {Array<ItemShippingDestinationMarkup>}
     * @memberof ItemShipping
     */
    destination_markups?: Array<ItemShippingDestinationMarkup>;
    /**
     * Destination restrictions
     * @type {Array<ItemShippingDestinationRestriction>}
     * @memberof ItemShipping
     */
    destination_restrictions?: Array<ItemShippingDestinationRestriction>;
    /**
     * Distribution centers
     * @type {Array<ItemShippingDistributionCenter>}
     * @memberof ItemShipping
     */
    distribution_centers?: Array<ItemShippingDistributionCenter>;
    /**
     * Estimated time of arrival
     * @type {string}
     * @memberof ItemShipping
     */
    eta?: string;
    /**
     * Qualifies for free shipping
     * @type {boolean}
     * @memberof ItemShipping
     */
    free_shipping?: boolean;
    /**
     * Freight class
     * @type {string}
     * @memberof ItemShipping
     */
    freight_class?: string;
    /**
     * Hazardous material
     * @type {boolean}
     * @memberof ItemShipping
     */
    hazmat?: boolean;
    /**
     * True if this item is made to order
     * @type {boolean}
     * @memberof ItemShipping
     */
    made_to_order?: boolean;
    /**
     * Number of days lead time it takes to make the item before ite can ship
     * @type {number}
     * @memberof ItemShipping
     */
    made_to_order_lead_time?: number;
    /**
     * Maximum days allowed in transit
     * @type {number}
     * @memberof ItemShipping
     */
    max_days_time_in_transit?: number;
    /**
     * Methods
     * @type {Array<ItemShippingMethod>}
     * @memberof ItemShipping
     */
    methods?: Array<ItemShippingMethod>;
    /**
     * No shipping discounts
     * @type {boolean}
     * @memberof ItemShipping
     */
    no_shipping_discount?: boolean;
    /**
     * Package requirements
     * @type {Array<ItemShippingPackageRequirement>}
     * @memberof ItemShipping
     */
    package_requirements?: Array<ItemShippingPackageRequirement>;
    /**
     * Perishable class name
     * @type {string}
     * @memberof ItemShipping
     */
    perishable_class_name?: string;
    /**
     * Perishable class object identifier
     * @type {number}
     * @memberof ItemShipping
     */
    perishable_class_oid?: number;
    /**
     * This item is on pre-order
     * @type {boolean}
     * @memberof ItemShipping
     */
    preorder?: boolean;
    /**
     * True to require customer to select a delivery date
     * @type {boolean}
     * @memberof ItemShipping
     */
    require_delivery_date?: boolean;
    /**
     * Restrict shipment on Friday
     * @type {boolean}
     * @memberof ItemShipping
     */
    restrict_shipment_on_friday?: boolean;
    /**
     * Restrict shipment on Monday
     * @type {boolean}
     * @memberof ItemShipping
     */
    restrict_shipment_on_monday?: boolean;
    /**
     * Restrict shipment on Saturday
     * @type {boolean}
     * @memberof ItemShipping
     */
    restrict_shipment_on_saturday?: boolean;
    /**
     * Restrict shipment on Sunday
     * @type {boolean}
     * @memberof ItemShipping
     */
    restrict_shipment_on_sunday?: boolean;
    /**
     * Restrict shipment on Thursday
     * @type {boolean}
     * @memberof ItemShipping
     */
    restrict_shipment_on_thursday?: boolean;
    /**
     * Restrict shipment on Tuesday
     * @type {boolean}
     * @memberof ItemShipping
     */
    restrict_shipment_on_tuesday?: boolean;
    /**
     * Restrict shipment on Wednesday
     * @type {boolean}
     * @memberof ItemShipping
     */
    restrict_shipment_on_wednesday?: boolean;
    /**
     * Ship this item in a separate box
     * @type {boolean}
     * @memberof ItemShipping
     */
    ship_separately?: boolean;
    /**
     * 
     * @type {Weight}
     * @memberof ItemShipping
     */
    ship_separately_additional_weight?: Weight;
    /**
     * 
     * @type {Distance}
     * @memberof ItemShipping
     */
    ship_separately_height?: Distance;
    /**
     * 
     * @type {Distance}
     * @memberof ItemShipping
     */
    ship_separately_length?: Distance;
    /**
     * Ship separately package special type
     * @type {string}
     * @memberof ItemShipping
     */
    ship_separately_package_special_type?: string;
    /**
     * 
     * @type {Distance}
     * @memberof ItemShipping
     */
    ship_separately_width?: Distance;
    /**
     * Special product type (USPS Media Mail)
     * @type {string}
     * @memberof ItemShipping
     */
    special_product_type?: string;
    /**
     * Track inventory
     * @type {boolean}
     * @memberof ItemShipping
     */
    track_inventory?: boolean;
}

export function ItemShippingFromJSON(json: any): ItemShipping {
    return ItemShippingFromJSONTyped(json, false);
}

export function ItemShippingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemShipping {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allow_back_order': !exists(json, 'allow_back_order') ? undefined : json['allow_back_order'],
        'amazon_fba': !exists(json, 'amazon_fba') ? undefined : json['amazon_fba'],
        'case_inner_packs': !exists(json, 'case_inner_packs') ? undefined : json['case_inner_packs'],
        'case_units': !exists(json, 'case_units') ? undefined : json['case_units'],
        'cases': !exists(json, 'cases') ? undefined : ((json['cases'] as Array<any>).map(ItemShippingCaseFromJSON)),
        'collect_serial_numbers': !exists(json, 'collect_serial_numbers') ? undefined : json['collect_serial_numbers'],
        'country_code_of_origin': !exists(json, 'country_code_of_origin') ? undefined : json['country_code_of_origin'],
        'customs_description': !exists(json, 'customs_description') ? undefined : json['customs_description'],
        'customs_value': !exists(json, 'customs_value') ? undefined : json['customs_value'],
        'delivery_on_friday': !exists(json, 'delivery_on_friday') ? undefined : json['delivery_on_friday'],
        'delivery_on_monday': !exists(json, 'delivery_on_monday') ? undefined : json['delivery_on_monday'],
        'delivery_on_saturday': !exists(json, 'delivery_on_saturday') ? undefined : json['delivery_on_saturday'],
        'delivery_on_sunday': !exists(json, 'delivery_on_sunday') ? undefined : json['delivery_on_sunday'],
        'delivery_on_thursday': !exists(json, 'delivery_on_thursday') ? undefined : json['delivery_on_thursday'],
        'delivery_on_tuesday': !exists(json, 'delivery_on_tuesday') ? undefined : json['delivery_on_tuesday'],
        'delivery_on_wednesday': !exists(json, 'delivery_on_wednesday') ? undefined : json['delivery_on_wednesday'],
        'destination_markups': !exists(json, 'destination_markups') ? undefined : ((json['destination_markups'] as Array<any>).map(ItemShippingDestinationMarkupFromJSON)),
        'destination_restrictions': !exists(json, 'destination_restrictions') ? undefined : ((json['destination_restrictions'] as Array<any>).map(ItemShippingDestinationRestrictionFromJSON)),
        'distribution_centers': !exists(json, 'distribution_centers') ? undefined : ((json['distribution_centers'] as Array<any>).map(ItemShippingDistributionCenterFromJSON)),
        'eta': !exists(json, 'eta') ? undefined : json['eta'],
        'free_shipping': !exists(json, 'free_shipping') ? undefined : json['free_shipping'],
        'freight_class': !exists(json, 'freight_class') ? undefined : json['freight_class'],
        'hazmat': !exists(json, 'hazmat') ? undefined : json['hazmat'],
        'made_to_order': !exists(json, 'made_to_order') ? undefined : json['made_to_order'],
        'made_to_order_lead_time': !exists(json, 'made_to_order_lead_time') ? undefined : json['made_to_order_lead_time'],
        'max_days_time_in_transit': !exists(json, 'max_days_time_in_transit') ? undefined : json['max_days_time_in_transit'],
        'methods': !exists(json, 'methods') ? undefined : ((json['methods'] as Array<any>).map(ItemShippingMethodFromJSON)),
        'no_shipping_discount': !exists(json, 'no_shipping_discount') ? undefined : json['no_shipping_discount'],
        'package_requirements': !exists(json, 'package_requirements') ? undefined : ((json['package_requirements'] as Array<any>).map(ItemShippingPackageRequirementFromJSON)),
        'perishable_class_name': !exists(json, 'perishable_class_name') ? undefined : json['perishable_class_name'],
        'perishable_class_oid': !exists(json, 'perishable_class_oid') ? undefined : json['perishable_class_oid'],
        'preorder': !exists(json, 'preorder') ? undefined : json['preorder'],
        'require_delivery_date': !exists(json, 'require_delivery_date') ? undefined : json['require_delivery_date'],
        'restrict_shipment_on_friday': !exists(json, 'restrict_shipment_on_friday') ? undefined : json['restrict_shipment_on_friday'],
        'restrict_shipment_on_monday': !exists(json, 'restrict_shipment_on_monday') ? undefined : json['restrict_shipment_on_monday'],
        'restrict_shipment_on_saturday': !exists(json, 'restrict_shipment_on_saturday') ? undefined : json['restrict_shipment_on_saturday'],
        'restrict_shipment_on_sunday': !exists(json, 'restrict_shipment_on_sunday') ? undefined : json['restrict_shipment_on_sunday'],
        'restrict_shipment_on_thursday': !exists(json, 'restrict_shipment_on_thursday') ? undefined : json['restrict_shipment_on_thursday'],
        'restrict_shipment_on_tuesday': !exists(json, 'restrict_shipment_on_tuesday') ? undefined : json['restrict_shipment_on_tuesday'],
        'restrict_shipment_on_wednesday': !exists(json, 'restrict_shipment_on_wednesday') ? undefined : json['restrict_shipment_on_wednesday'],
        'ship_separately': !exists(json, 'ship_separately') ? undefined : json['ship_separately'],
        'ship_separately_additional_weight': !exists(json, 'ship_separately_additional_weight') ? undefined : WeightFromJSON(json['ship_separately_additional_weight']),
        'ship_separately_height': !exists(json, 'ship_separately_height') ? undefined : DistanceFromJSON(json['ship_separately_height']),
        'ship_separately_length': !exists(json, 'ship_separately_length') ? undefined : DistanceFromJSON(json['ship_separately_length']),
        'ship_separately_package_special_type': !exists(json, 'ship_separately_package_special_type') ? undefined : json['ship_separately_package_special_type'],
        'ship_separately_width': !exists(json, 'ship_separately_width') ? undefined : DistanceFromJSON(json['ship_separately_width']),
        'special_product_type': !exists(json, 'special_product_type') ? undefined : json['special_product_type'],
        'track_inventory': !exists(json, 'track_inventory') ? undefined : json['track_inventory'],
    };
}

export function ItemShippingToJSON(value?: ItemShipping | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allow_back_order': value.allow_back_order,
        'amazon_fba': value.amazon_fba,
        'case_inner_packs': value.case_inner_packs,
        'case_units': value.case_units,
        'cases': value.cases === undefined ? undefined : ((value.cases as Array<any>).map(ItemShippingCaseToJSON)),
        'collect_serial_numbers': value.collect_serial_numbers,
        'country_code_of_origin': value.country_code_of_origin,
        'customs_description': value.customs_description,
        'customs_value': value.customs_value,
        'delivery_on_friday': value.delivery_on_friday,
        'delivery_on_monday': value.delivery_on_monday,
        'delivery_on_saturday': value.delivery_on_saturday,
        'delivery_on_sunday': value.delivery_on_sunday,
        'delivery_on_thursday': value.delivery_on_thursday,
        'delivery_on_tuesday': value.delivery_on_tuesday,
        'delivery_on_wednesday': value.delivery_on_wednesday,
        'destination_markups': value.destination_markups === undefined ? undefined : ((value.destination_markups as Array<any>).map(ItemShippingDestinationMarkupToJSON)),
        'destination_restrictions': value.destination_restrictions === undefined ? undefined : ((value.destination_restrictions as Array<any>).map(ItemShippingDestinationRestrictionToJSON)),
        'distribution_centers': value.distribution_centers === undefined ? undefined : ((value.distribution_centers as Array<any>).map(ItemShippingDistributionCenterToJSON)),
        'eta': value.eta,
        'free_shipping': value.free_shipping,
        'freight_class': value.freight_class,
        'hazmat': value.hazmat,
        'made_to_order': value.made_to_order,
        'made_to_order_lead_time': value.made_to_order_lead_time,
        'max_days_time_in_transit': value.max_days_time_in_transit,
        'methods': value.methods === undefined ? undefined : ((value.methods as Array<any>).map(ItemShippingMethodToJSON)),
        'no_shipping_discount': value.no_shipping_discount,
        'package_requirements': value.package_requirements === undefined ? undefined : ((value.package_requirements as Array<any>).map(ItemShippingPackageRequirementToJSON)),
        'perishable_class_name': value.perishable_class_name,
        'perishable_class_oid': value.perishable_class_oid,
        'preorder': value.preorder,
        'require_delivery_date': value.require_delivery_date,
        'restrict_shipment_on_friday': value.restrict_shipment_on_friday,
        'restrict_shipment_on_monday': value.restrict_shipment_on_monday,
        'restrict_shipment_on_saturday': value.restrict_shipment_on_saturday,
        'restrict_shipment_on_sunday': value.restrict_shipment_on_sunday,
        'restrict_shipment_on_thursday': value.restrict_shipment_on_thursday,
        'restrict_shipment_on_tuesday': value.restrict_shipment_on_tuesday,
        'restrict_shipment_on_wednesday': value.restrict_shipment_on_wednesday,
        'ship_separately': value.ship_separately,
        'ship_separately_additional_weight': WeightToJSON(value.ship_separately_additional_weight),
        'ship_separately_height': DistanceToJSON(value.ship_separately_height),
        'ship_separately_length': DistanceToJSON(value.ship_separately_length),
        'ship_separately_package_special_type': value.ship_separately_package_special_type,
        'ship_separately_width': DistanceToJSON(value.ship_separately_width),
        'special_product_type': value.special_product_type,
        'track_inventory': value.track_inventory,
    };
}
