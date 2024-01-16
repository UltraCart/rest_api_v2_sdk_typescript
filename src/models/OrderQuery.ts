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
 * @interface OrderQuery
 */
export interface OrderQuery {
    /**
     * CC Email
     * @type {string}
     * @memberof OrderQuery
     */
    cc_email?: string;
    /**
     * The code of the channel partner
     * @type {string}
     * @memberof OrderQuery
     */
    channel_partner_code?: string;
    /**
     * The order ID assigned by the channel partner for this order
     * @type {string}
     * @memberof OrderQuery
     */
    channel_partner_order_id?: string;
    /**
     * City
     * @type {string}
     * @memberof OrderQuery
     */
    city?: string;
    /**
     * Company
     * @type {string}
     * @memberof OrderQuery
     */
    company?: string;
    /**
     * ISO-3166 two letter country code
     * @type {string}
     * @memberof OrderQuery
     */
    country_code?: string;
    /**
     * Date/time that the order was created
     * @type {string}
     * @memberof OrderQuery
     */
    creation_date_begin?: string;
    /**
     * Date/time that the order was created
     * @type {string}
     * @memberof OrderQuery
     */
    creation_date_end?: string;
    /**
     * Current stage that the order is in.
     * @type {string}
     * @memberof OrderQuery
     */
    current_stage?: OrderQueryCurrentStageEnum;
    /**
     * Custom field 1
     * @type {string}
     * @memberof OrderQuery
     */
    custom_field_1?: string;
    /**
     * Custom field 10
     * @type {string}
     * @memberof OrderQuery
     */
    custom_field_10?: string;
    /**
     * Custom field 2
     * @type {string}
     * @memberof OrderQuery
     */
    custom_field_2?: string;
    /**
     * Custom field 3
     * @type {string}
     * @memberof OrderQuery
     */
    custom_field_3?: string;
    /**
     * Custom field 4
     * @type {string}
     * @memberof OrderQuery
     */
    custom_field_4?: string;
    /**
     * Custom field 5
     * @type {string}
     * @memberof OrderQuery
     */
    custom_field_5?: string;
    /**
     * Custom field 6
     * @type {string}
     * @memberof OrderQuery
     */
    custom_field_6?: string;
    /**
     * Custom field 7
     * @type {string}
     * @memberof OrderQuery
     */
    custom_field_7?: string;
    /**
     * Custom field 8
     * @type {string}
     * @memberof OrderQuery
     */
    custom_field_8?: string;
    /**
     * Custom field 9
     * @type {string}
     * @memberof OrderQuery
     */
    custom_field_9?: string;
    /**
     * The customer profile to find associated orders for
     * @type {number}
     * @memberof OrderQuery
     */
    customer_profile_oid?: number;
    /**
     * Email
     * @type {string}
     * @memberof OrderQuery
     */
    email?: string;
    /**
     * First name
     * @type {string}
     * @memberof OrderQuery
     */
    first_name?: string;
    /**
     * Item ID
     * @type {string}
     * @memberof OrderQuery
     */
    item_id?: string;
    /**
     * Last name
     * @type {string}
     * @memberof OrderQuery
     */
    last_name?: string;
    /**
     * Order ID
     * @type {string}
     * @memberof OrderQuery
     */
    order_id?: string;
    /**
     * Date/time that the order was successfully processed
     * @type {string}
     * @memberof OrderQuery
     */
    payment_date_begin?: string;
    /**
     * Date/time that the order was successfully processed
     * @type {string}
     * @memberof OrderQuery
     */
    payment_date_end?: string;
    /**
     * Payment method
     * @type {string}
     * @memberof OrderQuery
     */
    payment_method?: OrderQueryPaymentMethodEnum;
    /**
     * Phone
     * @type {string}
     * @memberof OrderQuery
     */
    phone?: string;
    /**
     * Postal code
     * @type {string}
     * @memberof OrderQuery
     */
    postal_code?: string;
    /**
     * Purchase order number
     * @type {string}
     * @memberof OrderQuery
     */
    purchase_order_number?: string;
    /**
     * Date/time that the order was refunded
     * @type {string}
     * @memberof OrderQuery
     */
    refund_date_begin?: string;
    /**
     * Date/time that the order was refunded
     * @type {string}
     * @memberof OrderQuery
     */
    refund_date_end?: string;
    /**
     * RMA number
     * @type {string}
     * @memberof OrderQuery
     */
    rma?: string;
    /**
     * Screen branding theme code associated with the order (legacy checkout)
     * @type {string}
     * @memberof OrderQuery
     */
    screen_branding_theme_code?: string;
    /**
     * Date/time that the order was shipped
     * @type {string}
     * @memberof OrderQuery
     */
    shipment_date_begin?: string;
    /**
     * Date/time that the order was shipped
     * @type {string}
     * @memberof OrderQuery
     */
    shipment_date_end?: string;
    /**
     * Date/time that the order should ship on
     * @type {string}
     * @memberof OrderQuery
     */
    shipped_on_date_begin?: string;
    /**
     * Date/time that the order should ship on
     * @type {string}
     * @memberof OrderQuery
     */
    shipped_on_date_end?: string;
    /**
     * State for United States otherwise region or province for other countries
     * @type {string}
     * @memberof OrderQuery
     */
    state_region?: string;
    /**
     * StoreFront host name associated with the order
     * @type {string}
     * @memberof OrderQuery
     */
    storefront_host_name?: string;
    /**
     * Total
     * @type {number}
     * @memberof OrderQuery
     */
    total?: number;
}


/**
 * @export
 */
export const OrderQueryCurrentStageEnum = {
    AccountsReceivable: 'Accounts Receivable',
    PendingClearance: 'Pending Clearance',
    FraudReview: 'Fraud Review',
    Rejected: 'Rejected',
    ShippingDepartment: 'Shipping Department',
    CompletedOrder: 'Completed Order',
    QuoteRequest: 'Quote Request',
    QuoteSent: 'Quote Sent',
    LeastCostRouting: 'Least Cost Routing',
    Unknown: 'Unknown'
} as const;
export type OrderQueryCurrentStageEnum = typeof OrderQueryCurrentStageEnum[keyof typeof OrderQueryCurrentStageEnum];

/**
 * @export
 */
export const OrderQueryPaymentMethodEnum = {
    Affirm: 'Affirm',
    Amazon: 'Amazon',
    AmazonSc: 'Amazon SC',
    Cash: 'Cash',
    Check: 'Check',
    Cod: 'COD',
    CreditCard: 'Credit Card',
    ECheck: 'eCheck',
    LoanHero: 'LoanHero',
    MoneyOrder: 'Money Order',
    PayPal: 'PayPal',
    PurchaseOrder: 'Purchase Order',
    QuoteRequest: 'Quote Request',
    Unknown: 'Unknown',
    WireTransfer: 'Wire Transfer',
    Venmo: 'Venmo',
    ApplePay: 'Apple Pay',
    GooglePay: ' Google Pay'
} as const;
export type OrderQueryPaymentMethodEnum = typeof OrderQueryPaymentMethodEnum[keyof typeof OrderQueryPaymentMethodEnum];


export function OrderQueryFromJSON(json: any): OrderQuery {
    return OrderQueryFromJSONTyped(json, false);
}

export function OrderQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cc_email': !exists(json, 'cc_email') ? undefined : json['cc_email'],
        'channel_partner_code': !exists(json, 'channel_partner_code') ? undefined : json['channel_partner_code'],
        'channel_partner_order_id': !exists(json, 'channel_partner_order_id') ? undefined : json['channel_partner_order_id'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'country_code': !exists(json, 'country_code') ? undefined : json['country_code'],
        'creation_date_begin': !exists(json, 'creation_date_begin') ? undefined : json['creation_date_begin'],
        'creation_date_end': !exists(json, 'creation_date_end') ? undefined : json['creation_date_end'],
        'current_stage': !exists(json, 'current_stage') ? undefined : json['current_stage'],
        'custom_field_1': !exists(json, 'custom_field_1') ? undefined : json['custom_field_1'],
        'custom_field_10': !exists(json, 'custom_field_10') ? undefined : json['custom_field_10'],
        'custom_field_2': !exists(json, 'custom_field_2') ? undefined : json['custom_field_2'],
        'custom_field_3': !exists(json, 'custom_field_3') ? undefined : json['custom_field_3'],
        'custom_field_4': !exists(json, 'custom_field_4') ? undefined : json['custom_field_4'],
        'custom_field_5': !exists(json, 'custom_field_5') ? undefined : json['custom_field_5'],
        'custom_field_6': !exists(json, 'custom_field_6') ? undefined : json['custom_field_6'],
        'custom_field_7': !exists(json, 'custom_field_7') ? undefined : json['custom_field_7'],
        'custom_field_8': !exists(json, 'custom_field_8') ? undefined : json['custom_field_8'],
        'custom_field_9': !exists(json, 'custom_field_9') ? undefined : json['custom_field_9'],
        'customer_profile_oid': !exists(json, 'customer_profile_oid') ? undefined : json['customer_profile_oid'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'first_name': !exists(json, 'first_name') ? undefined : json['first_name'],
        'item_id': !exists(json, 'item_id') ? undefined : json['item_id'],
        'last_name': !exists(json, 'last_name') ? undefined : json['last_name'],
        'order_id': !exists(json, 'order_id') ? undefined : json['order_id'],
        'payment_date_begin': !exists(json, 'payment_date_begin') ? undefined : json['payment_date_begin'],
        'payment_date_end': !exists(json, 'payment_date_end') ? undefined : json['payment_date_end'],
        'payment_method': !exists(json, 'payment_method') ? undefined : json['payment_method'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'postal_code': !exists(json, 'postal_code') ? undefined : json['postal_code'],
        'purchase_order_number': !exists(json, 'purchase_order_number') ? undefined : json['purchase_order_number'],
        'refund_date_begin': !exists(json, 'refund_date_begin') ? undefined : json['refund_date_begin'],
        'refund_date_end': !exists(json, 'refund_date_end') ? undefined : json['refund_date_end'],
        'rma': !exists(json, 'rma') ? undefined : json['rma'],
        'screen_branding_theme_code': !exists(json, 'screen_branding_theme_code') ? undefined : json['screen_branding_theme_code'],
        'shipment_date_begin': !exists(json, 'shipment_date_begin') ? undefined : json['shipment_date_begin'],
        'shipment_date_end': !exists(json, 'shipment_date_end') ? undefined : json['shipment_date_end'],
        'shipped_on_date_begin': !exists(json, 'shipped_on_date_begin') ? undefined : json['shipped_on_date_begin'],
        'shipped_on_date_end': !exists(json, 'shipped_on_date_end') ? undefined : json['shipped_on_date_end'],
        'state_region': !exists(json, 'state_region') ? undefined : json['state_region'],
        'storefront_host_name': !exists(json, 'storefront_host_name') ? undefined : json['storefront_host_name'],
        'total': !exists(json, 'total') ? undefined : json['total'],
    };
}

export function OrderQueryToJSON(value?: OrderQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cc_email': value.cc_email,
        'channel_partner_code': value.channel_partner_code,
        'channel_partner_order_id': value.channel_partner_order_id,
        'city': value.city,
        'company': value.company,
        'country_code': value.country_code,
        'creation_date_begin': value.creation_date_begin,
        'creation_date_end': value.creation_date_end,
        'current_stage': value.current_stage,
        'custom_field_1': value.custom_field_1,
        'custom_field_10': value.custom_field_10,
        'custom_field_2': value.custom_field_2,
        'custom_field_3': value.custom_field_3,
        'custom_field_4': value.custom_field_4,
        'custom_field_5': value.custom_field_5,
        'custom_field_6': value.custom_field_6,
        'custom_field_7': value.custom_field_7,
        'custom_field_8': value.custom_field_8,
        'custom_field_9': value.custom_field_9,
        'customer_profile_oid': value.customer_profile_oid,
        'email': value.email,
        'first_name': value.first_name,
        'item_id': value.item_id,
        'last_name': value.last_name,
        'order_id': value.order_id,
        'payment_date_begin': value.payment_date_begin,
        'payment_date_end': value.payment_date_end,
        'payment_method': value.payment_method,
        'phone': value.phone,
        'postal_code': value.postal_code,
        'purchase_order_number': value.purchase_order_number,
        'refund_date_begin': value.refund_date_begin,
        'refund_date_end': value.refund_date_end,
        'rma': value.rma,
        'screen_branding_theme_code': value.screen_branding_theme_code,
        'shipment_date_begin': value.shipment_date_begin,
        'shipment_date_end': value.shipment_date_end,
        'shipped_on_date_begin': value.shipped_on_date_begin,
        'shipped_on_date_end': value.shipped_on_date_end,
        'state_region': value.state_region,
        'storefront_host_name': value.storefront_host_name,
        'total': value.total,
    };
}

