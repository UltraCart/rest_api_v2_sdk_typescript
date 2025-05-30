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
    Customer,
    CustomerFromJSON,
    CustomerFromJSONTyped,
    CustomerToJSON,
} from './Customer';
import {
    OrderAffiliate,
    OrderAffiliateFromJSON,
    OrderAffiliateFromJSONTyped,
    OrderAffiliateToJSON,
} from './OrderAffiliate';
import {
    OrderAutoOrder,
    OrderAutoOrderFromJSON,
    OrderAutoOrderFromJSONTyped,
    OrderAutoOrderToJSON,
} from './OrderAutoOrder';
import {
    OrderBilling,
    OrderBillingFromJSON,
    OrderBillingFromJSONTyped,
    OrderBillingToJSON,
} from './OrderBilling';
import {
    OrderBuysafe,
    OrderBuysafeFromJSON,
    OrderBuysafeFromJSONTyped,
    OrderBuysafeToJSON,
} from './OrderBuysafe';
import {
    OrderChannelPartner,
    OrderChannelPartnerFromJSON,
    OrderChannelPartnerFromJSONTyped,
    OrderChannelPartnerToJSON,
} from './OrderChannelPartner';
import {
    OrderCheckout,
    OrderCheckoutFromJSON,
    OrderCheckoutFromJSONTyped,
    OrderCheckoutToJSON,
} from './OrderCheckout';
import {
    OrderCoupon,
    OrderCouponFromJSON,
    OrderCouponFromJSONTyped,
    OrderCouponToJSON,
} from './OrderCoupon';
import {
    OrderCurrentStageHistory,
    OrderCurrentStageHistoryFromJSON,
    OrderCurrentStageHistoryFromJSONTyped,
    OrderCurrentStageHistoryToJSON,
} from './OrderCurrentStageHistory';
import {
    OrderDigitalOrder,
    OrderDigitalOrderFromJSON,
    OrderDigitalOrderFromJSONTyped,
    OrderDigitalOrderToJSON,
} from './OrderDigitalOrder';
import {
    OrderEdi,
    OrderEdiFromJSON,
    OrderEdiFromJSONTyped,
    OrderEdiToJSON,
} from './OrderEdi';
import {
    OrderFraudScore,
    OrderFraudScoreFromJSON,
    OrderFraudScoreFromJSONTyped,
    OrderFraudScoreToJSON,
} from './OrderFraudScore';
import {
    OrderGift,
    OrderGiftFromJSON,
    OrderGiftFromJSONTyped,
    OrderGiftToJSON,
} from './OrderGift';
import {
    OrderGiftCertificate,
    OrderGiftCertificateFromJSON,
    OrderGiftCertificateFromJSONTyped,
    OrderGiftCertificateToJSON,
} from './OrderGiftCertificate';
import {
    OrderInternal,
    OrderInternalFromJSON,
    OrderInternalFromJSONTyped,
    OrderInternalToJSON,
} from './OrderInternal';
import {
    OrderItem,
    OrderItemFromJSON,
    OrderItemFromJSONTyped,
    OrderItemToJSON,
} from './OrderItem';
import {
    OrderLinkedShipment,
    OrderLinkedShipmentFromJSON,
    OrderLinkedShipmentFromJSONTyped,
    OrderLinkedShipmentToJSON,
} from './OrderLinkedShipment';
import {
    OrderMarketing,
    OrderMarketingFromJSON,
    OrderMarketingFromJSONTyped,
    OrderMarketingToJSON,
} from './OrderMarketing';
import {
    OrderPayment,
    OrderPaymentFromJSON,
    OrderPaymentFromJSONTyped,
    OrderPaymentToJSON,
} from './OrderPayment';
import {
    OrderPointOfSale,
    OrderPointOfSaleFromJSON,
    OrderPointOfSaleFromJSONTyped,
    OrderPointOfSaleToJSON,
} from './OrderPointOfSale';
import {
    OrderProperty,
    OrderPropertyFromJSON,
    OrderPropertyFromJSONTyped,
    OrderPropertyToJSON,
} from './OrderProperty';
import {
    OrderQuote,
    OrderQuoteFromJSON,
    OrderQuoteFromJSONTyped,
    OrderQuoteToJSON,
} from './OrderQuote';
import {
    OrderSalesforce,
    OrderSalesforceFromJSON,
    OrderSalesforceFromJSONTyped,
    OrderSalesforceToJSON,
} from './OrderSalesforce';
import {
    OrderShipping,
    OrderShippingFromJSON,
    OrderShippingFromJSONTyped,
    OrderShippingToJSON,
} from './OrderShipping';
import {
    OrderSummary,
    OrderSummaryFromJSON,
    OrderSummaryFromJSONTyped,
    OrderSummaryToJSON,
} from './OrderSummary';
import {
    OrderTag,
    OrderTagFromJSON,
    OrderTagFromJSONTyped,
    OrderTagToJSON,
} from './OrderTag';
import {
    OrderTaxes,
    OrderTaxesFromJSON,
    OrderTaxesFromJSONTyped,
    OrderTaxesToJSON,
} from './OrderTaxes';
import {
    OrderUtm,
    OrderUtmFromJSON,
    OrderUtmFromJSONTyped,
    OrderUtmToJSON,
} from './OrderUtm';

/**
 * 
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * Affiliates if any were associated with the order.  The first one in the array sent the order and each subsequent affiliate is the recruiter that earns a downline commission.
     * @type {Array<OrderAffiliate>}
     * @memberof Order
     */
    affiliates?: Array<OrderAffiliate>;
    /**
     * 
     * @type {OrderAutoOrder}
     * @memberof Order
     */
    auto_order?: OrderAutoOrder;
    /**
     * 
     * @type {OrderBilling}
     * @memberof Order
     */
    billing?: OrderBilling;
    /**
     * 
     * @type {OrderBuysafe}
     * @memberof Order
     */
    buysafe?: OrderBuysafe;
    /**
     * 
     * @type {OrderChannelPartner}
     * @memberof Order
     */
    channel_partner?: OrderChannelPartner;
    /**
     * 
     * @type {OrderCheckout}
     * @memberof Order
     */
    checkout?: OrderCheckout;
    /**
     * Coupons
     * @type {Array<OrderCoupon>}
     * @memberof Order
     */
    coupons?: Array<OrderCoupon>;
    /**
     * Date/time that the order was created
     * @type {string}
     * @memberof Order
     */
    creation_dts?: string;
    /**
     * Currency code that the customer used if different than the merchant's base currency code
     * @type {string}
     * @memberof Order
     */
    currency_code?: string;
    /**
     * Current stage that the order is in.
     * @type {string}
     * @memberof Order
     */
    current_stage?: OrderCurrentStageEnum;
    /**
     * History of the changes to the current_stage field
     * @type {Array<OrderCurrentStageHistory>}
     * @memberof Order
     */
    current_stage_histories?: Array<OrderCurrentStageHistory>;
    /**
     * 
     * @type {Customer}
     * @memberof Order
     */
    customer_profile?: Customer;
    /**
     * 
     * @type {OrderDigitalOrder}
     * @memberof Order
     */
    digital_order?: OrderDigitalOrder;
    /**
     * 
     * @type {OrderEdi}
     * @memberof Order
     */
    edi?: OrderEdi;
    /**
     * Exchange rate at the time the order was placed if currency code is different than the base currency
     * @type {number}
     * @memberof Order
     */
    exchange_rate?: number;
    /**
     * 
     * @type {OrderFraudScore}
     * @memberof Order
     */
    fraud_score?: OrderFraudScore;
    /**
     * 
     * @type {OrderGift}
     * @memberof Order
     */
    gift?: OrderGift;
    /**
     * 
     * @type {OrderGiftCertificate}
     * @memberof Order
     */
    gift_certificate?: OrderGiftCertificate;
    /**
     * 
     * @type {OrderInternal}
     * @memberof Order
     */
    internal?: OrderInternal;
    /**
     * Items
     * @type {Array<OrderItem>}
     * @memberof Order
     */
    items?: Array<OrderItem>;
    /**
     * Three letter ISO-639 language code used by the customer during the checkout if different than the default language
     * @type {string}
     * @memberof Order
     */
    language_iso_code?: string;
    /**
     * 
     * @type {OrderLinkedShipment}
     * @memberof Order
     */
    linked_shipment?: OrderLinkedShipment;
    /**
     * 
     * @type {OrderMarketing}
     * @memberof Order
     */
    marketing?: OrderMarketing;
    /**
     * UltraCart merchant ID owning this order
     * @type {string}
     * @memberof Order
     */
    merchant_id?: string;
    /**
     * Order ID
     * @type {string}
     * @memberof Order
     */
    order_id?: string;
    /**
     * 
     * @type {OrderPayment}
     * @memberof Order
     */
    payment?: OrderPayment;
    /**
     * 
     * @type {OrderPointOfSale}
     * @memberof Order
     */
    point_of_sale?: OrderPointOfSale;
    /**
     * Properties, available only through update, not through insert due to the nature of how properties are handled internally
     * @type {Array<OrderProperty>}
     * @memberof Order
     */
    properties?: Array<OrderProperty>;
    /**
     * 
     * @type {OrderQuote}
     * @memberof Order
     */
    quote?: OrderQuote;
    /**
     * If the order was refunded, the date/time that the last refund occurred
     * @type {string}
     * @memberof Order
     */
    refund_dts?: string;
    /**
     * Refund reason code.  This can only be written during a refund operation otherwise this field is read only.
     * @type {string}
     * @memberof Order
     */
    refund_reason?: string;
    /**
     * If the order was rejected, the date/time that the rejection occurred
     * @type {string}
     * @memberof Order
     */
    reject_dts?: string;
    /**
     * Reject reason code.  This can only be written during a reject operation otherwise this field is read only.
     * @type {string}
     * @memberof Order
     */
    reject_reason?: string;
    /**
     * 
     * @type {OrderSalesforce}
     * @memberof Order
     */
    salesforce?: OrderSalesforce;
    /**
     * 
     * @type {OrderShipping}
     * @memberof Order
     */
    shipping?: OrderShipping;
    /**
     * 
     * @type {OrderSummary}
     * @memberof Order
     */
    summary?: OrderSummary;
    /**
     * tags, available only through update, not through insert due to the nature of how tags are handled internally
     * @type {Array<OrderTag>}
     * @memberof Order
     */
    Tags?: Array<OrderTag>;
    /**
     * 
     * @type {OrderTaxes}
     * @memberof Order
     */
    taxes?: OrderTaxes;
    /**
     * UTM clicks.  The zero index is the most recent (last) UTM click
     * @type {Array<OrderUtm>}
     * @memberof Order
     */
    utms?: Array<OrderUtm>;
}



/**
 * @export
 */
export const OrderCurrentStageEnum = {
    AccountsReceivable: 'Accounts Receivable',
    PendingClearance: 'Pending Clearance',
    FraudReview: 'Fraud Review',
    Rejected: 'Rejected',
    ShippingDepartment: 'Shipping Department',
    CompletedOrder: 'Completed Order',
    QuoteRequest: 'Quote Request',
    QuoteSent: 'Quote Sent',
    LeastCostRouting: 'Least Cost Routing',
    Unknown: 'Unknown',
    PreOrdered: 'Pre-ordered',
    AdvancedOrderRouting: 'Advanced Order Routing',
    Hold: 'Hold'
} as const;
export type OrderCurrentStageEnum = typeof OrderCurrentStageEnum[keyof typeof OrderCurrentStageEnum];


/**
 * Check if a given object implements the Order interface.
 */
export function instanceOfOrder(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderFromJSON(json: any): Order {
    return OrderFromJSONTyped(json, false);
}

export function OrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Order {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'affiliates': !exists(json, 'affiliates') ? undefined : ((json['affiliates'] as Array<any>).map(OrderAffiliateFromJSON)),
        'auto_order': !exists(json, 'auto_order') ? undefined : OrderAutoOrderFromJSON(json['auto_order']),
        'billing': !exists(json, 'billing') ? undefined : OrderBillingFromJSON(json['billing']),
        'buysafe': !exists(json, 'buysafe') ? undefined : OrderBuysafeFromJSON(json['buysafe']),
        'channel_partner': !exists(json, 'channel_partner') ? undefined : OrderChannelPartnerFromJSON(json['channel_partner']),
        'checkout': !exists(json, 'checkout') ? undefined : OrderCheckoutFromJSON(json['checkout']),
        'coupons': !exists(json, 'coupons') ? undefined : ((json['coupons'] as Array<any>).map(OrderCouponFromJSON)),
        'creation_dts': !exists(json, 'creation_dts') ? undefined : json['creation_dts'],
        'currency_code': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'current_stage': !exists(json, 'current_stage') ? undefined : json['current_stage'],
        'current_stage_histories': !exists(json, 'current_stage_histories') ? undefined : ((json['current_stage_histories'] as Array<any>).map(OrderCurrentStageHistoryFromJSON)),
        'customer_profile': !exists(json, 'customer_profile') ? undefined : CustomerFromJSON(json['customer_profile']),
        'digital_order': !exists(json, 'digital_order') ? undefined : OrderDigitalOrderFromJSON(json['digital_order']),
        'edi': !exists(json, 'edi') ? undefined : OrderEdiFromJSON(json['edi']),
        'exchange_rate': !exists(json, 'exchange_rate') ? undefined : json['exchange_rate'],
        'fraud_score': !exists(json, 'fraud_score') ? undefined : OrderFraudScoreFromJSON(json['fraud_score']),
        'gift': !exists(json, 'gift') ? undefined : OrderGiftFromJSON(json['gift']),
        'gift_certificate': !exists(json, 'gift_certificate') ? undefined : OrderGiftCertificateFromJSON(json['gift_certificate']),
        'internal': !exists(json, 'internal') ? undefined : OrderInternalFromJSON(json['internal']),
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(OrderItemFromJSON)),
        'language_iso_code': !exists(json, 'language_iso_code') ? undefined : json['language_iso_code'],
        'linked_shipment': !exists(json, 'linked_shipment') ? undefined : OrderLinkedShipmentFromJSON(json['linked_shipment']),
        'marketing': !exists(json, 'marketing') ? undefined : OrderMarketingFromJSON(json['marketing']),
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'order_id': !exists(json, 'order_id') ? undefined : json['order_id'],
        'payment': !exists(json, 'payment') ? undefined : OrderPaymentFromJSON(json['payment']),
        'point_of_sale': !exists(json, 'point_of_sale') ? undefined : OrderPointOfSaleFromJSON(json['point_of_sale']),
        'properties': !exists(json, 'properties') ? undefined : ((json['properties'] as Array<any>).map(OrderPropertyFromJSON)),
        'quote': !exists(json, 'quote') ? undefined : OrderQuoteFromJSON(json['quote']),
        'refund_dts': !exists(json, 'refund_dts') ? undefined : json['refund_dts'],
        'refund_reason': !exists(json, 'refund_reason') ? undefined : json['refund_reason'],
        'reject_dts': !exists(json, 'reject_dts') ? undefined : json['reject_dts'],
        'reject_reason': !exists(json, 'reject_reason') ? undefined : json['reject_reason'],
        'salesforce': !exists(json, 'salesforce') ? undefined : OrderSalesforceFromJSON(json['salesforce']),
        'shipping': !exists(json, 'shipping') ? undefined : OrderShippingFromJSON(json['shipping']),
        'summary': !exists(json, 'summary') ? undefined : OrderSummaryFromJSON(json['summary']),
        'Tags': !exists(json, 'Tags') ? undefined : ((json['Tags'] as Array<any>).map(OrderTagFromJSON)),
        'taxes': !exists(json, 'taxes') ? undefined : OrderTaxesFromJSON(json['taxes']),
        'utms': !exists(json, 'utms') ? undefined : ((json['utms'] as Array<any>).map(OrderUtmFromJSON)),
    };
}

export function OrderToJSON(value?: Order | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'affiliates': value.affiliates === undefined ? undefined : ((value.affiliates as Array<any>).map(OrderAffiliateToJSON)),
        'auto_order': OrderAutoOrderToJSON(value.auto_order),
        'billing': OrderBillingToJSON(value.billing),
        'buysafe': OrderBuysafeToJSON(value.buysafe),
        'channel_partner': OrderChannelPartnerToJSON(value.channel_partner),
        'checkout': OrderCheckoutToJSON(value.checkout),
        'coupons': value.coupons === undefined ? undefined : ((value.coupons as Array<any>).map(OrderCouponToJSON)),
        'creation_dts': value.creation_dts,
        'currency_code': value.currency_code,
        'current_stage': value.current_stage,
        'current_stage_histories': value.current_stage_histories === undefined ? undefined : ((value.current_stage_histories as Array<any>).map(OrderCurrentStageHistoryToJSON)),
        'customer_profile': CustomerToJSON(value.customer_profile),
        'digital_order': OrderDigitalOrderToJSON(value.digital_order),
        'edi': OrderEdiToJSON(value.edi),
        'exchange_rate': value.exchange_rate,
        'fraud_score': OrderFraudScoreToJSON(value.fraud_score),
        'gift': OrderGiftToJSON(value.gift),
        'gift_certificate': OrderGiftCertificateToJSON(value.gift_certificate),
        'internal': OrderInternalToJSON(value.internal),
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(OrderItemToJSON)),
        'language_iso_code': value.language_iso_code,
        'linked_shipment': OrderLinkedShipmentToJSON(value.linked_shipment),
        'marketing': OrderMarketingToJSON(value.marketing),
        'merchant_id': value.merchant_id,
        'order_id': value.order_id,
        'payment': OrderPaymentToJSON(value.payment),
        'point_of_sale': OrderPointOfSaleToJSON(value.point_of_sale),
        'properties': value.properties === undefined ? undefined : ((value.properties as Array<any>).map(OrderPropertyToJSON)),
        'quote': OrderQuoteToJSON(value.quote),
        'refund_dts': value.refund_dts,
        'refund_reason': value.refund_reason,
        'reject_dts': value.reject_dts,
        'reject_reason': value.reject_reason,
        'salesforce': OrderSalesforceToJSON(value.salesforce),
        'shipping': OrderShippingToJSON(value.shipping),
        'summary': OrderSummaryToJSON(value.summary),
        'Tags': value.Tags === undefined ? undefined : ((value.Tags as Array<any>).map(OrderTagToJSON)),
        'taxes': OrderTaxesToJSON(value.taxes),
        'utms': value.utms === undefined ? undefined : ((value.utms as Array<any>).map(OrderUtmToJSON)),
    };
}

