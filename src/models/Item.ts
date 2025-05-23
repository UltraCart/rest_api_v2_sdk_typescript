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
    ItemAccounting,
    ItemAccountingFromJSON,
    ItemAccountingFromJSONTyped,
    ItemAccountingToJSON,
} from './ItemAccounting';
import {
    ItemAmember,
    ItemAmemberFromJSON,
    ItemAmemberFromJSONTyped,
    ItemAmemberToJSON,
} from './ItemAmember';
import {
    ItemAutoOrder,
    ItemAutoOrderFromJSON,
    ItemAutoOrderFromJSONTyped,
    ItemAutoOrderToJSON,
} from './ItemAutoOrder';
import {
    ItemCCBill,
    ItemCCBillFromJSON,
    ItemCCBillFromJSONTyped,
    ItemCCBillToJSON,
} from './ItemCCBill';
import {
    ItemChannelPartnerMapping,
    ItemChannelPartnerMappingFromJSON,
    ItemChannelPartnerMappingFromJSONTyped,
    ItemChannelPartnerMappingToJSON,
} from './ItemChannelPartnerMapping';
import {
    ItemChargeback,
    ItemChargebackFromJSON,
    ItemChargebackFromJSONTyped,
    ItemChargebackToJSON,
} from './ItemChargeback';
import {
    ItemCheckout,
    ItemCheckoutFromJSON,
    ItemCheckoutFromJSONTyped,
    ItemCheckoutToJSON,
} from './ItemCheckout';
import {
    ItemContent,
    ItemContentFromJSON,
    ItemContentFromJSONTyped,
    ItemContentToJSON,
} from './ItemContent';
import {
    ItemDigitalDelivery,
    ItemDigitalDeliveryFromJSON,
    ItemDigitalDeliveryFromJSONTyped,
    ItemDigitalDeliveryToJSON,
} from './ItemDigitalDelivery';
import {
    ItemEbay,
    ItemEbayFromJSON,
    ItemEbayFromJSONTyped,
    ItemEbayToJSON,
} from './ItemEbay';
import {
    ItemEmailNotifications,
    ItemEmailNotificationsFromJSON,
    ItemEmailNotificationsFromJSONTyped,
    ItemEmailNotificationsToJSON,
} from './ItemEmailNotifications';
import {
    ItemEnrollment123,
    ItemEnrollment123FromJSON,
    ItemEnrollment123FromJSONTyped,
    ItemEnrollment123ToJSON,
} from './ItemEnrollment123';
import {
    ItemFulfillmentAddon,
    ItemFulfillmentAddonFromJSON,
    ItemFulfillmentAddonFromJSONTyped,
    ItemFulfillmentAddonToJSON,
} from './ItemFulfillmentAddon';
import {
    ItemGiftCertificate,
    ItemGiftCertificateFromJSON,
    ItemGiftCertificateFromJSONTyped,
    ItemGiftCertificateToJSON,
} from './ItemGiftCertificate';
import {
    ItemGoogleProductSearch,
    ItemGoogleProductSearchFromJSON,
    ItemGoogleProductSearchFromJSONTyped,
    ItemGoogleProductSearchToJSON,
} from './ItemGoogleProductSearch';
import {
    ItemIdentifiers,
    ItemIdentifiersFromJSON,
    ItemIdentifiersFromJSONTyped,
    ItemIdentifiersToJSON,
} from './ItemIdentifiers';
import {
    ItemInstantPaymentNotifications,
    ItemInstantPaymentNotificationsFromJSON,
    ItemInstantPaymentNotificationsFromJSONTyped,
    ItemInstantPaymentNotificationsToJSON,
} from './ItemInstantPaymentNotifications';
import {
    ItemInternal,
    ItemInternalFromJSON,
    ItemInternalFromJSONTyped,
    ItemInternalToJSON,
} from './ItemInternal';
import {
    ItemKitDefinition,
    ItemKitDefinitionFromJSON,
    ItemKitDefinitionFromJSONTyped,
    ItemKitDefinitionToJSON,
} from './ItemKitDefinition';
import {
    ItemOption,
    ItemOptionFromJSON,
    ItemOptionFromJSONTyped,
    ItemOptionToJSON,
} from './ItemOption';
import {
    ItemPaymentProcessing,
    ItemPaymentProcessingFromJSON,
    ItemPaymentProcessingFromJSONTyped,
    ItemPaymentProcessingToJSON,
} from './ItemPaymentProcessing';
import {
    ItemPhysical,
    ItemPhysicalFromJSON,
    ItemPhysicalFromJSONTyped,
    ItemPhysicalToJSON,
} from './ItemPhysical';
import {
    ItemPricing,
    ItemPricingFromJSON,
    ItemPricingFromJSONTyped,
    ItemPricingToJSON,
} from './ItemPricing';
import {
    ItemProperty,
    ItemPropertyFromJSON,
    ItemPropertyFromJSONTyped,
    ItemPropertyToJSON,
} from './ItemProperty';
import {
    ItemRealtimePricing,
    ItemRealtimePricingFromJSON,
    ItemRealtimePricingFromJSONTyped,
    ItemRealtimePricingToJSON,
} from './ItemRealtimePricing';
import {
    ItemRelated,
    ItemRelatedFromJSON,
    ItemRelatedFromJSONTyped,
    ItemRelatedToJSON,
} from './ItemRelated';
import {
    ItemReporting,
    ItemReportingFromJSON,
    ItemReportingFromJSONTyped,
    ItemReportingToJSON,
} from './ItemReporting';
import {
    ItemRestriction,
    ItemRestrictionFromJSON,
    ItemRestrictionFromJSONTyped,
    ItemRestrictionToJSON,
} from './ItemRestriction';
import {
    ItemRevguard,
    ItemRevguardFromJSON,
    ItemRevguardFromJSONTyped,
    ItemRevguardToJSON,
} from './ItemRevguard';
import {
    ItemReviews,
    ItemReviewsFromJSON,
    ItemReviewsFromJSONTyped,
    ItemReviewsToJSON,
} from './ItemReviews';
import {
    ItemSalesforce,
    ItemSalesforceFromJSON,
    ItemSalesforceFromJSONTyped,
    ItemSalesforceToJSON,
} from './ItemSalesforce';
import {
    ItemShipping,
    ItemShippingFromJSON,
    ItemShippingFromJSONTyped,
    ItemShippingToJSON,
} from './ItemShipping';
import {
    ItemTags,
    ItemTagsFromJSON,
    ItemTagsFromJSONTyped,
    ItemTagsToJSON,
} from './ItemTags';
import {
    ItemTax,
    ItemTaxFromJSON,
    ItemTaxFromJSONTyped,
    ItemTaxToJSON,
} from './ItemTax';
import {
    ItemThirdPartyEmailMarketing,
    ItemThirdPartyEmailMarketingFromJSON,
    ItemThirdPartyEmailMarketingFromJSONTyped,
    ItemThirdPartyEmailMarketingToJSON,
} from './ItemThirdPartyEmailMarketing';
import {
    ItemVariantItem,
    ItemVariantItemFromJSON,
    ItemVariantItemFromJSONTyped,
    ItemVariantItemToJSON,
} from './ItemVariantItem';
import {
    ItemVariation,
    ItemVariationFromJSON,
    ItemVariationFromJSONTyped,
    ItemVariationToJSON,
} from './ItemVariation';
import {
    ItemWishlistMember,
    ItemWishlistMemberFromJSON,
    ItemWishlistMemberFromJSONTyped,
    ItemWishlistMemberToJSON,
} from './ItemWishlistMember';

/**
 * 
 * @export
 * @interface Item
 */
export interface Item {
    /**
     * 
     * @type {ItemAccounting}
     * @memberof Item
     */
    accounting?: ItemAccounting;
    /**
     * 
     * @type {ItemAmember}
     * @memberof Item
     */
    amember?: ItemAmember;
    /**
     * 
     * @type {ItemAutoOrder}
     * @memberof Item
     */
    auto_order?: ItemAutoOrder;
    /**
     * 
     * @type {ItemCCBill}
     * @memberof Item
     */
    ccbill?: ItemCCBill;
    /**
     * Channel Partner Item Mapping
     * @type {Array<ItemChannelPartnerMapping>}
     * @memberof Item
     */
    channel_partner_item_mappings?: Array<ItemChannelPartnerMapping>;
    /**
     * 
     * @type {ItemChargeback}
     * @memberof Item
     */
    chargeback?: ItemChargeback;
    /**
     * 
     * @type {ItemCheckout}
     * @memberof Item
     */
    checkout?: ItemCheckout;
    /**
     * 
     * @type {ItemContent}
     * @memberof Item
     */
    content?: ItemContent;
    /**
     * Date/time of creation
     * @type {string}
     * @memberof Item
     */
    creation_dts?: string;
    /**
     * Description of the item up to 500 characters.
     * @type {string}
     * @memberof Item
     */
    description?: string;
    /**
     * Description translated text instance id
     * @type {number}
     * @memberof Item
     */
    description_translated_text_instance_oid?: number;
    /**
     * 
     * @type {ItemDigitalDelivery}
     * @memberof Item
     */
    digital_delivery?: ItemDigitalDelivery;
    /**
     * 
     * @type {ItemEbay}
     * @memberof Item
     */
    ebay?: ItemEbay;
    /**
     * 
     * @type {ItemEmailNotifications}
     * @memberof Item
     */
    email_notifications?: ItemEmailNotifications;
    /**
     * 
     * @type {ItemEnrollment123}
     * @memberof Item
     */
    enrollment123?: ItemEnrollment123;
    /**
     * Fulfillment Add-ons
     * @type {Array<ItemFulfillmentAddon>}
     * @memberof Item
     */
    fulfillment_addons?: Array<ItemFulfillmentAddon>;
    /**
     * 
     * @type {ItemGiftCertificate}
     * @memberof Item
     */
    gift_certificate?: ItemGiftCertificate;
    /**
     * 
     * @type {ItemGoogleProductSearch}
     * @memberof Item
     */
    google_product_search?: ItemGoogleProductSearch;
    /**
     * 
     * @type {ItemIdentifiers}
     * @memberof Item
     */
    identifiers?: ItemIdentifiers;
    /**
     * True if this item is inactive and can not be purchased
     * @type {boolean}
     * @memberof Item
     */
    inactive?: boolean;
    /**
     * 
     * @type {ItemInstantPaymentNotifications}
     * @memberof Item
     */
    instant_payment_notifications?: ItemInstantPaymentNotifications;
    /**
     * 
     * @type {ItemInternal}
     * @memberof Item
     */
    internal?: ItemInternal;
    /**
     * True if this item is a kit
     * @type {boolean}
     * @memberof Item
     */
    kit?: boolean;
    /**
     * True if this item can only be usd as a kit component
     * @type {boolean}
     * @memberof Item
     */
    kit_component_only?: boolean;
    /**
     * 
     * @type {ItemKitDefinition}
     * @memberof Item
     */
    kit_definition?: ItemKitDefinition;
    /**
     * Date/time of last modification
     * @type {string}
     * @memberof Item
     */
    last_modified_dts?: string;
    /**
     * UltraCart merchant ID owning item
     * @type {string}
     * @memberof Item
     */
    merchant_id?: string;
    /**
     * Unique item id assigned to this item
     * @type {string}
     * @memberof Item
     */
    merchant_item_id?: string;
    /**
     * Unique object identifier for this item
     * @type {number}
     * @memberof Item
     */
    merchant_item_oid?: number;
    /**
     * Options
     * @type {Array<ItemOption>}
     * @memberof Item
     */
    options?: Array<ItemOption>;
    /**
     * Parent category of the item.  Zero indicates the root folder.
     * @type {number}
     * @memberof Item
     */
    parent_category_id?: number;
    /**
     * Parent category path.  / indicates the root folder.
     * @type {string}
     * @memberof Item
     */
    parent_category_path?: string;
    /**
     * 
     * @type {ItemPaymentProcessing}
     * @memberof Item
     */
    payment_processing?: ItemPaymentProcessing;
    /**
     * 
     * @type {ItemPhysical}
     * @memberof Item
     */
    physical?: ItemPhysical;
    /**
     * 
     * @type {ItemPricing}
     * @memberof Item
     */
    pricing?: ItemPricing;
    /**
     * Properties
     * @type {Array<ItemProperty>}
     * @memberof Item
     */
    properties?: Array<ItemProperty>;
    /**
     * 
     * @type {ItemRealtimePricing}
     * @memberof Item
     */
    realtime_pricing?: ItemRealtimePricing;
    /**
     * Number of days to recommend replenishment after.  Null is not configured.  Set to zero to disable.
     * @type {number}
     * @memberof Item
     */
    recommend_replenishment_days?: number;
    /**
     * 
     * @type {ItemRelated}
     * @memberof Item
     */
    related?: ItemRelated;
    /**
     * 
     * @type {ItemReporting}
     * @memberof Item
     */
    reporting?: ItemReporting;
    /**
     * 
     * @type {ItemRestriction}
     * @memberof Item
     */
    restriction?: ItemRestriction;
    /**
     * 
     * @type {ItemRevguard}
     * @memberof Item
     */
    revguard?: ItemRevguard;
    /**
     * 
     * @type {ItemReviews}
     * @memberof Item
     */
    reviews?: ItemReviews;
    /**
     * 
     * @type {ItemSalesforce}
     * @memberof Item
     */
    salesforce?: ItemSalesforce;
    /**
     * 
     * @type {ItemShipping}
     * @memberof Item
     */
    shipping?: ItemShipping;
    /**
     * 
     * @type {ItemTags}
     * @memberof Item
     */
    tags?: ItemTags;
    /**
     * 
     * @type {ItemTax}
     * @memberof Item
     */
    tax?: ItemTax;
    /**
     * 3rd Party Email Marketing
     * @type {Array<ItemThirdPartyEmailMarketing>}
     * @memberof Item
     */
    third_party_email_marketing?: Array<ItemThirdPartyEmailMarketing>;
    /**
     * Variant Items
     * @type {Array<ItemVariantItem>}
     * @memberof Item
     */
    variant_items?: Array<ItemVariantItem>;
    /**
     * Variations
     * @type {Array<ItemVariation>}
     * @memberof Item
     */
    variations?: Array<ItemVariation>;
    /**
     * 
     * @type {ItemWishlistMember}
     * @memberof Item
     */
    wishlist_member?: ItemWishlistMember;
}



/**
 * Check if a given object implements the Item interface.
 */
export function instanceOfItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemFromJSON(json: any): Item {
    return ItemFromJSONTyped(json, false);
}

export function ItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): Item {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accounting': !exists(json, 'accounting') ? undefined : ItemAccountingFromJSON(json['accounting']),
        'amember': !exists(json, 'amember') ? undefined : ItemAmemberFromJSON(json['amember']),
        'auto_order': !exists(json, 'auto_order') ? undefined : ItemAutoOrderFromJSON(json['auto_order']),
        'ccbill': !exists(json, 'ccbill') ? undefined : ItemCCBillFromJSON(json['ccbill']),
        'channel_partner_item_mappings': !exists(json, 'channel_partner_item_mappings') ? undefined : ((json['channel_partner_item_mappings'] as Array<any>).map(ItemChannelPartnerMappingFromJSON)),
        'chargeback': !exists(json, 'chargeback') ? undefined : ItemChargebackFromJSON(json['chargeback']),
        'checkout': !exists(json, 'checkout') ? undefined : ItemCheckoutFromJSON(json['checkout']),
        'content': !exists(json, 'content') ? undefined : ItemContentFromJSON(json['content']),
        'creation_dts': !exists(json, 'creation_dts') ? undefined : json['creation_dts'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'description_translated_text_instance_oid': !exists(json, 'description_translated_text_instance_oid') ? undefined : json['description_translated_text_instance_oid'],
        'digital_delivery': !exists(json, 'digital_delivery') ? undefined : ItemDigitalDeliveryFromJSON(json['digital_delivery']),
        'ebay': !exists(json, 'ebay') ? undefined : ItemEbayFromJSON(json['ebay']),
        'email_notifications': !exists(json, 'email_notifications') ? undefined : ItemEmailNotificationsFromJSON(json['email_notifications']),
        'enrollment123': !exists(json, 'enrollment123') ? undefined : ItemEnrollment123FromJSON(json['enrollment123']),
        'fulfillment_addons': !exists(json, 'fulfillment_addons') ? undefined : ((json['fulfillment_addons'] as Array<any>).map(ItemFulfillmentAddonFromJSON)),
        'gift_certificate': !exists(json, 'gift_certificate') ? undefined : ItemGiftCertificateFromJSON(json['gift_certificate']),
        'google_product_search': !exists(json, 'google_product_search') ? undefined : ItemGoogleProductSearchFromJSON(json['google_product_search']),
        'identifiers': !exists(json, 'identifiers') ? undefined : ItemIdentifiersFromJSON(json['identifiers']),
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'instant_payment_notifications': !exists(json, 'instant_payment_notifications') ? undefined : ItemInstantPaymentNotificationsFromJSON(json['instant_payment_notifications']),
        'internal': !exists(json, 'internal') ? undefined : ItemInternalFromJSON(json['internal']),
        'kit': !exists(json, 'kit') ? undefined : json['kit'],
        'kit_component_only': !exists(json, 'kit_component_only') ? undefined : json['kit_component_only'],
        'kit_definition': !exists(json, 'kit_definition') ? undefined : ItemKitDefinitionFromJSON(json['kit_definition']),
        'last_modified_dts': !exists(json, 'last_modified_dts') ? undefined : json['last_modified_dts'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'merchant_item_id': !exists(json, 'merchant_item_id') ? undefined : json['merchant_item_id'],
        'merchant_item_oid': !exists(json, 'merchant_item_oid') ? undefined : json['merchant_item_oid'],
        'options': !exists(json, 'options') ? undefined : ((json['options'] as Array<any>).map(ItemOptionFromJSON)),
        'parent_category_id': !exists(json, 'parent_category_id') ? undefined : json['parent_category_id'],
        'parent_category_path': !exists(json, 'parent_category_path') ? undefined : json['parent_category_path'],
        'payment_processing': !exists(json, 'payment_processing') ? undefined : ItemPaymentProcessingFromJSON(json['payment_processing']),
        'physical': !exists(json, 'physical') ? undefined : ItemPhysicalFromJSON(json['physical']),
        'pricing': !exists(json, 'pricing') ? undefined : ItemPricingFromJSON(json['pricing']),
        'properties': !exists(json, 'properties') ? undefined : ((json['properties'] as Array<any>).map(ItemPropertyFromJSON)),
        'realtime_pricing': !exists(json, 'realtime_pricing') ? undefined : ItemRealtimePricingFromJSON(json['realtime_pricing']),
        'recommend_replenishment_days': !exists(json, 'recommend_replenishment_days') ? undefined : json['recommend_replenishment_days'],
        'related': !exists(json, 'related') ? undefined : ItemRelatedFromJSON(json['related']),
        'reporting': !exists(json, 'reporting') ? undefined : ItemReportingFromJSON(json['reporting']),
        'restriction': !exists(json, 'restriction') ? undefined : ItemRestrictionFromJSON(json['restriction']),
        'revguard': !exists(json, 'revguard') ? undefined : ItemRevguardFromJSON(json['revguard']),
        'reviews': !exists(json, 'reviews') ? undefined : ItemReviewsFromJSON(json['reviews']),
        'salesforce': !exists(json, 'salesforce') ? undefined : ItemSalesforceFromJSON(json['salesforce']),
        'shipping': !exists(json, 'shipping') ? undefined : ItemShippingFromJSON(json['shipping']),
        'tags': !exists(json, 'tags') ? undefined : ItemTagsFromJSON(json['tags']),
        'tax': !exists(json, 'tax') ? undefined : ItemTaxFromJSON(json['tax']),
        'third_party_email_marketing': !exists(json, 'third_party_email_marketing') ? undefined : ((json['third_party_email_marketing'] as Array<any>).map(ItemThirdPartyEmailMarketingFromJSON)),
        'variant_items': !exists(json, 'variant_items') ? undefined : ((json['variant_items'] as Array<any>).map(ItemVariantItemFromJSON)),
        'variations': !exists(json, 'variations') ? undefined : ((json['variations'] as Array<any>).map(ItemVariationFromJSON)),
        'wishlist_member': !exists(json, 'wishlist_member') ? undefined : ItemWishlistMemberFromJSON(json['wishlist_member']),
    };
}

export function ItemToJSON(value?: Item | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accounting': ItemAccountingToJSON(value.accounting),
        'amember': ItemAmemberToJSON(value.amember),
        'auto_order': ItemAutoOrderToJSON(value.auto_order),
        'ccbill': ItemCCBillToJSON(value.ccbill),
        'channel_partner_item_mappings': value.channel_partner_item_mappings === undefined ? undefined : ((value.channel_partner_item_mappings as Array<any>).map(ItemChannelPartnerMappingToJSON)),
        'chargeback': ItemChargebackToJSON(value.chargeback),
        'checkout': ItemCheckoutToJSON(value.checkout),
        'content': ItemContentToJSON(value.content),
        'creation_dts': value.creation_dts,
        'description': value.description,
        'description_translated_text_instance_oid': value.description_translated_text_instance_oid,
        'digital_delivery': ItemDigitalDeliveryToJSON(value.digital_delivery),
        'ebay': ItemEbayToJSON(value.ebay),
        'email_notifications': ItemEmailNotificationsToJSON(value.email_notifications),
        'enrollment123': ItemEnrollment123ToJSON(value.enrollment123),
        'fulfillment_addons': value.fulfillment_addons === undefined ? undefined : ((value.fulfillment_addons as Array<any>).map(ItemFulfillmentAddonToJSON)),
        'gift_certificate': ItemGiftCertificateToJSON(value.gift_certificate),
        'google_product_search': ItemGoogleProductSearchToJSON(value.google_product_search),
        'identifiers': ItemIdentifiersToJSON(value.identifiers),
        'inactive': value.inactive,
        'instant_payment_notifications': ItemInstantPaymentNotificationsToJSON(value.instant_payment_notifications),
        'internal': ItemInternalToJSON(value.internal),
        'kit': value.kit,
        'kit_component_only': value.kit_component_only,
        'kit_definition': ItemKitDefinitionToJSON(value.kit_definition),
        'last_modified_dts': value.last_modified_dts,
        'merchant_id': value.merchant_id,
        'merchant_item_id': value.merchant_item_id,
        'merchant_item_oid': value.merchant_item_oid,
        'options': value.options === undefined ? undefined : ((value.options as Array<any>).map(ItemOptionToJSON)),
        'parent_category_id': value.parent_category_id,
        'parent_category_path': value.parent_category_path,
        'payment_processing': ItemPaymentProcessingToJSON(value.payment_processing),
        'physical': ItemPhysicalToJSON(value.physical),
        'pricing': ItemPricingToJSON(value.pricing),
        'properties': value.properties === undefined ? undefined : ((value.properties as Array<any>).map(ItemPropertyToJSON)),
        'realtime_pricing': ItemRealtimePricingToJSON(value.realtime_pricing),
        'recommend_replenishment_days': value.recommend_replenishment_days,
        'related': ItemRelatedToJSON(value.related),
        'reporting': ItemReportingToJSON(value.reporting),
        'restriction': ItemRestrictionToJSON(value.restriction),
        'revguard': ItemRevguardToJSON(value.revguard),
        'reviews': ItemReviewsToJSON(value.reviews),
        'salesforce': ItemSalesforceToJSON(value.salesforce),
        'shipping': ItemShippingToJSON(value.shipping),
        'tags': ItemTagsToJSON(value.tags),
        'tax': ItemTaxToJSON(value.tax),
        'third_party_email_marketing': value.third_party_email_marketing === undefined ? undefined : ((value.third_party_email_marketing as Array<any>).map(ItemThirdPartyEmailMarketingToJSON)),
        'variant_items': value.variant_items === undefined ? undefined : ((value.variant_items as Array<any>).map(ItemVariantItemToJSON)),
        'variations': value.variations === undefined ? undefined : ((value.variations as Array<any>).map(ItemVariationToJSON)),
        'wishlist_member': ItemWishlistMemberToJSON(value.wishlist_member),
    };
}

