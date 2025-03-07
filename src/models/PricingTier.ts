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
    PricingTierNotification,
    PricingTierNotificationFromJSON,
    PricingTierNotificationFromJSONTyped,
    PricingTierNotificationToJSON,
} from './PricingTierNotification';

/**
 * 
 * @export
 * @interface PricingTier
 */
export interface PricingTier {
    /**
     * Allow 3rd party billing
     * @type {boolean}
     * @memberof PricingTier
     */
    allow_3rd_party_billing?: boolean;
    /**
     * Allow COD
     * @type {boolean}
     * @memberof PricingTier
     */
    allow_cod?: boolean;
    /**
     * Allow purchase order
     * @type {boolean}
     * @memberof PricingTier
     */
    allow_purchase_order?: boolean;
    /**
     * Allow quote request
     * @type {boolean}
     * @memberof PricingTier
     */
    allow_quote_request?: boolean;
    /**
     * 
     * @type {PricingTierNotification}
     * @memberof PricingTier
     */
    approval_notification?: PricingTierNotification;
    /**
     * Auto approve COD
     * @type {boolean}
     * @memberof PricingTier
     */
    auto_approve_cod?: boolean;
    /**
     * Auto approve purchase order
     * @type {boolean}
     * @memberof PricingTier
     */
    auto_approve_purchase_order?: boolean;
    /**
     * Any currency code specified on this pricing tier will force a shopping cart into that currency
     * @type {string}
     * @memberof PricingTier
     */
    currency_code?: string;
    /**
     * Default on wholesale signup
     * @type {boolean}
     * @memberof PricingTier
     */
    default_on_wholesale_signup?: boolean;
    /**
     * Default percentage discount
     * @type {number}
     * @memberof PricingTier
     */
    default_percentage_discount?: number;
    /**
     * Default shipping method oid
     * @type {number}
     * @memberof PricingTier
     */
    default_shipping_method_oid?: number;
    /**
     * Default tier
     * @type {boolean}
     * @memberof PricingTier
     */
    default_tier?: boolean;
    /**
     * Display on wholesale signup
     * @type {boolean}
     * @memberof PricingTier
     */
    display_on_wholesale_signup?: boolean;
    /**
     * Exclude from free promotion
     * @type {boolean}
     * @memberof PricingTier
     */
    exclude_from_free_promotion?: boolean;
    /**
     * Exempt from Loyalty Rewards
     * @type {boolean}
     * @memberof PricingTier
     */
    exempt_loyalty_rewards?: boolean;
    /**
     * Exempt shipping handling charge
     * @type {boolean}
     * @memberof PricingTier
     */
    exempt_shipping_handling_charge?: boolean;
    /**
     * Free shipping
     * @type {boolean}
     * @memberof PricingTier
     */
    free_shipping?: boolean;
    /**
     * Free shipping minimum
     * @type {number}
     * @memberof PricingTier
     */
    free_shipping_minimum?: number;
    /**
     * Maximum item count
     * @type {number}
     * @memberof PricingTier
     */
    maximum_item_count?: number;
    /**
     * Minimum item count
     * @type {number}
     * @memberof PricingTier
     */
    minimum_item_count?: number;
    /**
     * Minimum subtotal
     * @type {number}
     * @memberof PricingTier
     */
    minimum_subtotal?: number;
    /**
     * Name
     * @type {string}
     * @memberof PricingTier
     */
    name?: string;
    /**
     * No coupons
     * @type {boolean}
     * @memberof PricingTier
     */
    no_coupons?: boolean;
    /**
     * No free shipping
     * @type {boolean}
     * @memberof PricingTier
     */
    no_free_shipping?: boolean;
    /**
     * No realtime charge
     * @type {boolean}
     * @memberof PricingTier
     */
    no_realtime_charge?: boolean;
    /**
     * Not valid when coupon present
     * @type {boolean}
     * @memberof PricingTier
     */
    not_valid_when_coupon_present?: boolean;
    /**
     * Pricing Tier Oid
     * @type {number}
     * @memberof PricingTier
     */
    pricing_tier_oid?: number;
    /**
     * Realtime percentage discount
     * @type {number}
     * @memberof PricingTier
     */
    realtime_percentage_discount?: number;
    /**
     * Restrict inventory to this distribution center oid
     * @type {number}
     * @memberof PricingTier
     */
    restrict_to_distribution_center_oid?: number;
    /**
     * 
     * @type {PricingTierNotification}
     * @memberof PricingTier
     */
    signup_notification?: PricingTierNotification;
    /**
     * Suppress buySAFE (deprecated)
     * @type {boolean}
     * @memberof PricingTier
     */
    suppress_buysafe?: boolean;
    /**
     * Suppress mailing list
     * @type {boolean}
     * @memberof PricingTier
     */
    suppress_mailing_list?: boolean;
    /**
     * Tax Exempt
     * @type {boolean}
     * @memberof PricingTier
     */
    tax_exempt?: boolean;
    /**
     * Track separately
     * @type {boolean}
     * @memberof PricingTier
     */
    track_separately?: boolean;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof PricingTier)[] = ["allow_3rd_party_billing", "allow_cod", "allow_purchase_order", "allow_quote_request", "approval_notification", "auto_approve_cod", "auto_approve_purchase_order", "currency_code", "default_on_wholesale_signup", "default_percentage_discount", "default_shipping_method_oid", "default_tier", "display_on_wholesale_signup", "exclude_from_free_promotion", "exempt_loyalty_rewards", "exempt_shipping_handling_charge", "free_shipping", "free_shipping_minimum", "maximum_item_count", "minimum_item_count", "minimum_subtotal", "name", "no_coupons", "no_free_shipping", "no_realtime_charge", "not_valid_when_coupon_present", "pricing_tier_oid", "realtime_percentage_discount", "restrict_to_distribution_center_oid", "signup_notification", "suppress_buysafe", "suppress_mailing_list", "tax_exempt", "track_separately"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the PricingTier interface.
 */
export function instanceOfPricingTier(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PricingTierFromJSON(json: any): PricingTier {
    return PricingTierFromJSONTyped(json, false);
}

export function PricingTierFromJSONTyped(json: any, ignoreDiscriminator: boolean): PricingTier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allow_3rd_party_billing': !exists(json, 'allow_3rd_party_billing') ? undefined : json['allow_3rd_party_billing'],
        'allow_cod': !exists(json, 'allow_cod') ? undefined : json['allow_cod'],
        'allow_purchase_order': !exists(json, 'allow_purchase_order') ? undefined : json['allow_purchase_order'],
        'allow_quote_request': !exists(json, 'allow_quote_request') ? undefined : json['allow_quote_request'],
        'approval_notification': !exists(json, 'approval_notification') ? undefined : PricingTierNotificationFromJSON(json['approval_notification']),
        'auto_approve_cod': !exists(json, 'auto_approve_cod') ? undefined : json['auto_approve_cod'],
        'auto_approve_purchase_order': !exists(json, 'auto_approve_purchase_order') ? undefined : json['auto_approve_purchase_order'],
        'currency_code': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'default_on_wholesale_signup': !exists(json, 'default_on_wholesale_signup') ? undefined : json['default_on_wholesale_signup'],
        'default_percentage_discount': !exists(json, 'default_percentage_discount') ? undefined : json['default_percentage_discount'],
        'default_shipping_method_oid': !exists(json, 'default_shipping_method_oid') ? undefined : json['default_shipping_method_oid'],
        'default_tier': !exists(json, 'default_tier') ? undefined : json['default_tier'],
        'display_on_wholesale_signup': !exists(json, 'display_on_wholesale_signup') ? undefined : json['display_on_wholesale_signup'],
        'exclude_from_free_promotion': !exists(json, 'exclude_from_free_promotion') ? undefined : json['exclude_from_free_promotion'],
        'exempt_loyalty_rewards': !exists(json, 'exempt_loyalty_rewards') ? undefined : json['exempt_loyalty_rewards'],
        'exempt_shipping_handling_charge': !exists(json, 'exempt_shipping_handling_charge') ? undefined : json['exempt_shipping_handling_charge'],
        'free_shipping': !exists(json, 'free_shipping') ? undefined : json['free_shipping'],
        'free_shipping_minimum': !exists(json, 'free_shipping_minimum') ? undefined : json['free_shipping_minimum'],
        'maximum_item_count': !exists(json, 'maximum_item_count') ? undefined : json['maximum_item_count'],
        'minimum_item_count': !exists(json, 'minimum_item_count') ? undefined : json['minimum_item_count'],
        'minimum_subtotal': !exists(json, 'minimum_subtotal') ? undefined : json['minimum_subtotal'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'no_coupons': !exists(json, 'no_coupons') ? undefined : json['no_coupons'],
        'no_free_shipping': !exists(json, 'no_free_shipping') ? undefined : json['no_free_shipping'],
        'no_realtime_charge': !exists(json, 'no_realtime_charge') ? undefined : json['no_realtime_charge'],
        'not_valid_when_coupon_present': !exists(json, 'not_valid_when_coupon_present') ? undefined : json['not_valid_when_coupon_present'],
        'pricing_tier_oid': !exists(json, 'pricing_tier_oid') ? undefined : json['pricing_tier_oid'],
        'realtime_percentage_discount': !exists(json, 'realtime_percentage_discount') ? undefined : json['realtime_percentage_discount'],
        'restrict_to_distribution_center_oid': !exists(json, 'restrict_to_distribution_center_oid') ? undefined : json['restrict_to_distribution_center_oid'],
        'signup_notification': !exists(json, 'signup_notification') ? undefined : PricingTierNotificationFromJSON(json['signup_notification']),
        'suppress_buysafe': !exists(json, 'suppress_buysafe') ? undefined : json['suppress_buysafe'],
        'suppress_mailing_list': !exists(json, 'suppress_mailing_list') ? undefined : json['suppress_mailing_list'],
        'tax_exempt': !exists(json, 'tax_exempt') ? undefined : json['tax_exempt'],
        'track_separately': !exists(json, 'track_separately') ? undefined : json['track_separately'],
    };
}

export function PricingTierToJSON(value?: PricingTier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allow_3rd_party_billing': value.allow_3rd_party_billing,
        'allow_cod': value.allow_cod,
        'allow_purchase_order': value.allow_purchase_order,
        'allow_quote_request': value.allow_quote_request,
        'approval_notification': PricingTierNotificationToJSON(value.approval_notification),
        'auto_approve_cod': value.auto_approve_cod,
        'auto_approve_purchase_order': value.auto_approve_purchase_order,
        'currency_code': value.currency_code,
        'default_on_wholesale_signup': value.default_on_wholesale_signup,
        'default_percentage_discount': value.default_percentage_discount,
        'default_shipping_method_oid': value.default_shipping_method_oid,
        'default_tier': value.default_tier,
        'display_on_wholesale_signup': value.display_on_wholesale_signup,
        'exclude_from_free_promotion': value.exclude_from_free_promotion,
        'exempt_loyalty_rewards': value.exempt_loyalty_rewards,
        'exempt_shipping_handling_charge': value.exempt_shipping_handling_charge,
        'free_shipping': value.free_shipping,
        'free_shipping_minimum': value.free_shipping_minimum,
        'maximum_item_count': value.maximum_item_count,
        'minimum_item_count': value.minimum_item_count,
        'minimum_subtotal': value.minimum_subtotal,
        'name': value.name,
        'no_coupons': value.no_coupons,
        'no_free_shipping': value.no_free_shipping,
        'no_realtime_charge': value.no_realtime_charge,
        'not_valid_when_coupon_present': value.not_valid_when_coupon_present,
        'pricing_tier_oid': value.pricing_tier_oid,
        'realtime_percentage_discount': value.realtime_percentage_discount,
        'restrict_to_distribution_center_oid': value.restrict_to_distribution_center_oid,
        'signup_notification': PricingTierNotificationToJSON(value.signup_notification),
        'suppress_buysafe': value.suppress_buysafe,
        'suppress_mailing_list': value.suppress_mailing_list,
        'tax_exempt': value.tax_exempt,
        'track_separately': value.track_separately,
    };
}

