/// <reference types="request" />
/// <reference types="bluebird" />
import localVarRequest = require('request');
import http = require('http');
import Promise = require('bluebird');
export declare class AccountsReceivableRetryConfig {
    'active'?: boolean;
    'allowProcessLinkedAccounts'?: boolean;
    'currentServicePlan'?: string;
    'dailyActivityList'?: Array<AccountsReceivableRetryDayActivity>;
    'managedByLinkedAccountMerchantId'?: boolean;
    'merchantId'?: string;
    'notifyEmails'?: Array<string>;
    'notifyRejections'?: boolean;
    'notifySuccesses'?: boolean;
    'processLinkedAccounts'?: boolean;
    'processingPercentage'?: string;
    'rejectAtEnd'?: boolean;
    'trialMode'?: boolean;
    'trialModeExpirationDts'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AccountsReceivableRetryConfigResponse {
    'config'?: AccountsReceivableRetryConfig;
    'couponCodes'?: Array<string>;
    'emails'?: Array<string>;
    'error'?: Error;
    'hasLinkedAccounts'?: boolean;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AccountsReceivableRetryDayActivity {
    'charge'?: boolean;
    'couponCode'?: string;
    'day'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AccountsReceivableRetryStatAccount {
    'days'?: Array<AccountsReceivableRetryStatMetrics>;
    'merchantId'?: string;
    'overall'?: AccountsReceivableRetryStatMetrics;
    'revenueForPeriod'?: Array<AccountsReceivableRetryStatRevenue>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AccountsReceivableRetryStatMetrics {
    'attempts'?: number;
    'attemptsFormatted'?: string;
    'conversionRate'?: number;
    'conversionRateFormatted'?: string;
    'day'?: number;
    'discounts'?: number;
    'discountsFormatted'?: string;
    'revenue'?: number;
    'revenueFormatted'?: string;
    'successes'?: number;
    'successesFormatted'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AccountsReceivableRetryStatRevenue {
    'label'?: string;
    'revenue'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AccountsReceivableRetryStatsResponse {
    'error'?: Error;
    'linkedAccounts'?: Array<AccountsReceivableRetryStatAccount>;
    'metadata'?: ResponseMetadata;
    'overall'?: AccountsReceivableRetryStatAccount;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Activity {
    'action'?: string;
    'metric'?: string;
    'subject'?: string;
    'ts'?: number;
    'type'?: string;
    'uuid'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AddLibraryItemRequest {
    'cjson'?: string;
    'contentType'?: string;
    'description'?: string;
    'emailName'?: string;
    'emailPath'?: string;
    'screenshots'?: Array<LibraryItemScreenshot>;
    'storefrontOid'?: number;
    'title'?: string;
    'upsellOfferOid'?: number;
    'uuid'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AffiliateClick {
    'affiliateClickOid'?: number;
    'affiliateLinkOid'?: number;
    'affiliateOid'?: number;
    'clickDts'?: string;
    'ipAddress'?: string;
    'landingPage'?: string;
    'landingPageQueryString'?: string;
    'link'?: AffiliateLink;
    'referrer'?: string;
    'referrerQueryString'?: string;
    'subId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AffiliateClickQuery {
    'affiliateLinkOid'?: number;
    'affiliateOid'?: number;
    'clickDtsBegin'?: string;
    'clickDtsEnd'?: string;
    'ipAddress'?: string;
    'subId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AffiliateClicksResponse {
    'clicks'?: Array<AffiliateClick>;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AffiliateLedger {
    'affiliateClickOid'?: number;
    'affiliateLinkOid'?: number;
    'affiliateOid'?: number;
    'assignedByUser'?: string;
    'click'?: AffiliateClick;
    'itemId'?: string;
    'link'?: AffiliateLink;
    'order'?: Order;
    'orderId'?: string;
    'originalTransactionDts'?: string;
    'subId'?: string;
    'tierNumber'?: string;
    'transactionAmount'?: number;
    'transactionAmountPaid'?: number;
    'transactionDts'?: string;
    'transactionMemo'?: string;
    'transactionPercentage'?: string;
    'transactionState'?: AffiliateLedger.TransactionStateEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace AffiliateLedger {
    enum TransactionStateEnum {
        Pending,
        Posted,
        Approved,
        Paid,
        Rejected,
        PartiallyPaid,
    }
}
export declare class AffiliateLedgerQuery {
    'affiliateOid'?: number;
    'itemId'?: string;
    'orderId'?: string;
    'subId'?: string;
    'transactionDtsBegin'?: string;
    'transactionDtsEnd'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AffiliateLedgersResponse {
    'error'?: Error;
    'ledgers'?: Array<AffiliateLedger>;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AffiliateLink {
    'affiliateLinkOid'?: number;
    'affiliateManagedLinkOid'?: number;
    'affiliateOid'?: number;
    'affiliateProgramItemOid'?: number;
    'code'?: string;
    'creativeOid'?: number;
    'customHtml'?: string;
    'customHtmlApprovalStatus'?: AffiliateLink.CustomHtmlApprovalStatusEnum;
    'customLandingUrl'?: string;
    'deleted'?: boolean;
    'invisibleLinkApprovalStatus'?: AffiliateLink.InvisibleLinkApprovalStatusEnum;
    'invisibleLinkUrlPrefix'?: string;
    'name'?: string;
    'type'?: AffiliateLink.TypeEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace AffiliateLink {
    enum CustomHtmlApprovalStatusEnum {
        Pending,
        Approved,
        Rejected,
    }
    enum InvisibleLinkApprovalStatusEnum {
        Pending,
        Approved,
        Rejected,
    }
    enum TypeEnum {
        Image,
        Text,
        Invisible,
        Direct,
    }
}
export declare class ApiUserApplicationProfile {
    'apiApplicationLogoUrl'?: string;
    'applicationDescription'?: string;
    'applicationName'?: string;
    'developerName'?: string;
    'developerWebsite'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ApplyLibraryItemRequest {
    'emailUuid'?: string;
    'libraryItemOid'?: number;
    'storefrontOid'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ApplyLibraryItemResponse {
    'cjson'?: string;
    'contentType'?: string;
    'emailTemplateVmPath'?: string;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'storefrontOid'?: number;
    'success'?: boolean;
    'title'?: string;
    'uuid'?: string;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AutoOrder {
    'autoOrderCode'?: string;
    'autoOrderOid'?: number;
    'cancelAfterNextXOrders'?: number;
    'cancelDowngrade'?: boolean;
    'cancelUpgrade'?: boolean;
    'canceledByUser'?: string;
    'canceledDts'?: string;
    'completed'?: boolean;
    'creditCardAttempt'?: number;
    'disabledDts'?: string;
    'enabled'?: boolean;
    'failureReason'?: string;
    'items'?: Array<AutoOrderItem>;
    'nextAttempt'?: string;
    'originalOrder'?: Order;
    'originalOrderId'?: string;
    'overrideAffiliateId'?: number;
    'rebillOrders'?: Array<Order>;
    'rotatingTransactionGatewayCode'?: string;
    'status'?: AutoOrder.StatusEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace AutoOrder {
    enum StatusEnum {
        Active,
        Canceled,
        Disabled,
    }
}
export declare class AutoOrderItem {
    'arbitraryItemId'?: string;
    'arbitraryPercentageDiscount'?: number;
    'arbitraryQuantity'?: number;
    'arbitraryScheduleDays'?: number;
    'arbitraryUnitCost'?: number;
    'arbitraryUnitCostRemainingOrders'?: number;
    'autoOrderItemOid'?: number;
    'frequency'?: AutoOrderItem.FrequencyEnum;
    'futureSchedules'?: Array<AutoOrderItemFutureSchedule>;
    'lastOrderDts'?: string;
    'lifeTimeValue'?: number;
    'nextPreshipmentNoticeDts'?: string;
    'nextShipmentDts'?: string;
    'noOrderAfterDts'?: string;
    'numberOfRebills'?: number;
    'options'?: Array<AutoOrderItemOption>;
    'originalItemId'?: string;
    'originalQuantity'?: number;
    'paypalPayerId'?: string;
    'paypalRecurringPaymentProfileId'?: string;
    'preshipmentNoticeSent'?: boolean;
    'rebillValue'?: number;
    'remainingRepeatCount'?: number;
    'simpleSchedule'?: AutoOrderItemSimpleSchedule;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace AutoOrderItem {
    enum FrequencyEnum {
        Weekly,
        Biweekly,
        Every_,
        Every10Days,
        Every24Days,
        Every28Days,
        Monthly,
        Every45Days,
        Every2Months,
        Every3Months,
        Every4Months,
        Every6Months,
        Yearly,
    }
}
export declare class AutoOrderItemFutureSchedule {
    'itemId'?: string;
    'rebillCount'?: number;
    'shipmentDts'?: string;
    'unitCost'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AutoOrderItemOption {
    'label'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AutoOrderItemSimpleSchedule {
    'frequency'?: AutoOrderItemSimpleSchedule.FrequencyEnum;
    'itemId'?: string;
    'repeatCount'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace AutoOrderItemSimpleSchedule {
    enum FrequencyEnum {
        Weekly,
        Biweekly,
        Every_,
        Every10Days,
        Every24Days,
        Every28Days,
        Monthly,
        Every45Days,
        Every2Months,
        Every3Months,
        Every4Months,
        Every6Months,
        Yearly,
    }
}
export declare class AutoOrderQuery {
    'autoOrderCode'?: string;
    'cardType'?: string;
    'city'?: string;
    'company'?: string;
    'countryCode'?: string;
    'customerProfileOid'?: number;
    'email'?: string;
    'firstName'?: string;
    'itemId'?: string;
    'lastName'?: string;
    'nextShipmentDateBegin'?: string;
    'nextShipmentDateEnd'?: string;
    'originalOrderDateBegin'?: string;
    'originalOrderDateEnd'?: string;
    'originalOrderId'?: string;
    'phone'?: string;
    'postalCode'?: string;
    'state'?: string;
    'status'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AutoOrderQueryBatch {
    'autoOrderOids'?: Array<number>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AutoOrderResponse {
    'autoOrder'?: AutoOrder;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AutoOrdersRequest {
    'autoOrders'?: Array<AutoOrder>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AutoOrdersResponse {
    'autoOrders'?: Array<AutoOrder>;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AvalaraConfig {
    'accountId'?: string;
    'active'?: boolean;
    'avalaraOid'?: number;
    'companyId'?: string;
    'enableUpc'?: boolean;
    'estimateOnly'?: boolean;
    'guestCustomerCode'?: string;
    'lastTestDts'?: string;
    'licenseKey'?: string;
    'sandbox'?: boolean;
    'sendTestOrders'?: boolean;
    'serviceUrl'?: string;
    'testResults'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class BaseResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Cart {
    'affiliate'?: CartAffiliate;
    'baseCurrencyCode'?: string;
    'billing'?: CartBilling;
    'buysafe'?: CartBuysafe;
    'cartId'?: string;
    'checkout'?: CartCheckout;
    'coupons'?: Array<CartCoupon>;
    'currencyCode'?: string;
    'currencyConversion'?: CartCurrencyConversion;
    'customerProfile'?: CartCustomerProfile;
    'exchangeRate'?: number;
    'gift'?: CartGift;
    'giftCertificate'?: CartGiftCertificate;
    'items'?: Array<CartItem>;
    'languageIsoCode'?: string;
    'loggedIn'?: boolean;
    'marketing'?: CartMarketing;
    'merchantId'?: string;
    'payment'?: CartPayment;
    'properties'?: Array<CartProperty>;
    'settings'?: CartSettings;
    'shipping'?: CartShipping;
    'summary'?: CartSummary;
    'taxes'?: CartTaxes;
    'upsellAfter'?: CartUpsellAfter;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartAffiliate {
    'affiliateId'?: number;
    'affiliateSubId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartAffirmCheckoutResponse {
    'checkoutJson'?: string;
    'errors'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartBilling {
    'address1'?: string;
    'address2'?: string;
    'ccEmails'?: Array<string>;
    'city'?: string;
    'company'?: string;
    'countryCode'?: string;
    'dayPhone'?: string;
    'email'?: string;
    'emailConfirm'?: string;
    'eveningPhone'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'postalCode'?: string;
    'stateRegion'?: string;
    'title'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartBuysafe {
    'bondAvailable'?: boolean;
    'bondCost'?: Currency;
    'bondFree'?: boolean;
    'bondWanted'?: boolean;
    'cartDisplayText'?: string;
    'cartDisplayUrl'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartCheckout {
    'comments'?: string;
    'customField1'?: string;
    'customField2'?: string;
    'customField3'?: string;
    'customField4'?: string;
    'customField5'?: string;
    'customField6'?: string;
    'customField7'?: string;
    'ipAddress'?: string;
    'returnCode'?: string;
    'screenBrandingThemeCode'?: string;
    'storefrontHostName'?: string;
    'userAgent'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartCoupon {
    'couponCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartCurrencyConversion {
    'baseCurrencyCode'?: string;
    'currencies'?: Array<Currency>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartCustomerProfile {
    'allow3rdPartyBilling'?: boolean;
    'allowCod'?: boolean;
    'allowPurchaseOrder'?: boolean;
    'billingAddresses'?: Array<CartCustomerProfileAddress>;
    'creditCards'?: Array<CartCustomerProfileCreditCard>;
    'customerProfileOid'?: number;
    'dhlAccountNumber'?: string;
    'dhlDutyAccountNumber'?: string;
    'email'?: string;
    'fedexAccountNumber'?: string;
    'freeShipping'?: boolean;
    'freeShippingMinimum'?: number;
    'maximumItemCount'?: number;
    'minimumItemCount'?: number;
    'minimumSubtotal'?: number;
    'noCoupons'?: boolean;
    'noFreeShipping'?: boolean;
    'noRealtimeCharge'?: boolean;
    'pricingTiers'?: Array<string>;
    'shippingAddresses'?: Array<CartCustomerProfileAddress>;
    'taxExempt'?: boolean;
    'upsAccountNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartCustomerProfileAddress {
    'address1'?: string;
    'address2'?: string;
    'city'?: string;
    'company'?: string;
    'countryCode'?: string;
    'dayPhone'?: string;
    'eveningPhone'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'oid'?: number;
    'postalCode'?: string;
    'stateRegion'?: string;
    'taxCounty'?: string;
    'title'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartCustomerProfileCreditCard {
    'cardExpirationMonth'?: number;
    'cardExpirationYear'?: number;
    'cardNumber'?: string;
    'cardType'?: CartCustomerProfileCreditCard.CardTypeEnum;
    'customerProfileCreditCardId'?: number;
    'lastUsedDate'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace CartCustomerProfileCreditCard {
    enum CardTypeEnum {
        AMEX,
        DinersClub,
        Discover,
        MasterCard,
        JCB,
        VISA,
    }
}
export declare class CartFinalizeOrderRequest {
    'cart'?: Cart;
    'options'?: CartFinalizeOrderRequestOptions;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartFinalizeOrderRequestOptions {
    'autoApprovePurchaseOrder'?: boolean;
    'channelPartnerCode'?: string;
    'channelPartnerOid'?: number;
    'channelPartnerOrderId'?: string;
    'considerRecurring'?: boolean;
    'creditCardAuthorizationAmount'?: number;
    'creditCardAuthorizationDate'?: string;
    'creditCardAuthorizationReferenceNumber'?: string;
    'noRealtimePaymentProcessing'?: boolean;
    'setupNextCart'?: boolean;
    'skipPaymentProcessing'?: boolean;
    'storeCompleted'?: boolean;
    'storeIfPaymentDeclines'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartFinalizeOrderResponse {
    'errors'?: Array<string>;
    'nextCart'?: Cart;
    'order'?: Order;
    'orderId'?: string;
    'successful'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartGift {
    'gift'?: boolean;
    'giftCharge'?: Currency;
    'giftEmail'?: string;
    'giftMessage'?: string;
    'giftWrapCost'?: Currency;
    'giftWrapTitle'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartGiftCertificate {
    'giftCertificateAmount'?: Currency;
    'giftCertificateCode'?: string;
    'giftCertificateRemainingBalanceAfterOrder'?: Currency;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartItem {
    'arbitraryUnitCost'?: Currency;
    'attributes'?: Array<CartItemAttribute>;
    'autoOrderSchedule'?: string;
    'defaultImageUrl'?: string;
    'defaultThumbnailUrl'?: string;
    'description'?: string;
    'discount'?: Currency;
    'extendedDescription'?: string;
    'itemId'?: string;
    'itemOid'?: number;
    'kit'?: boolean;
    'kitComponentOptions'?: Array<CartKitComponentOption>;
    'manufacturerSuggestedRetailPrice'?: Currency;
    'maximumQuantity'?: number;
    'minimumQuantity'?: number;
    'multimedia'?: Array<CartItemMultimedia>;
    'options'?: Array<CartItemOption>;
    'phsyical'?: CartItemPhysical;
    'position'?: number;
    'preorder'?: boolean;
    'quantity'?: number;
    'schedules'?: Array<string>;
    'totalCost'?: Currency;
    'totalCostWithDiscount'?: Currency;
    'unitCost'?: Currency;
    'unitCostWithDiscount'?: Currency;
    'upsell'?: boolean;
    'variations'?: Array<CartItemVariationSelection>;
    'viewUrl'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartItemAttribute {
    'name'?: string;
    'type'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartItemMultimedia {
    'code'?: string;
    'description'?: string;
    'excludeFromGallery'?: boolean;
    'imageHeight'?: number;
    'imageWidth'?: number;
    'isDefault'?: boolean;
    'thumbnails'?: Array<CartItemMultimediaThumbnail>;
    'type'?: CartItemMultimedia.TypeEnum;
    'url'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace CartItemMultimedia {
    enum TypeEnum {
        Image,
        PDF,
        Text,
        Unknown,
        Video,
    }
}
export declare class CartItemMultimediaThumbnail {
    'height'?: number;
    'png'?: boolean;
    'square'?: boolean;
    'url'?: string;
    'width'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartItemOption {
    'costIfSpecified'?: Currency;
    'costPerLetter'?: Currency;
    'costPerLine'?: Currency;
    'ignoreIfDefault'?: boolean;
    'label'?: string;
    'name'?: string;
    'oneTimeFee'?: boolean;
    'optionOid'?: number;
    'required'?: boolean;
    'selectedValue'?: string;
    'type'?: CartItemOption.TypeEnum;
    'values'?: Array<CartItemOptionValue>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace CartItemOption {
    enum TypeEnum {
        Single,
        Multiline,
        Dropdown,
        Hidden,
        Radio,
        Fixed,
    }
}
export declare class CartItemOptionValue {
    'additionalCost'?: Currency;
    'additionalWeight'?: Weight;
    'defaultValue'?: boolean;
    'displayOrder'?: number;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartItemPhysical {
    'height'?: Distance;
    'length'?: Distance;
    'weight'?: Weight;
    'width'?: Distance;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartItemVariationSelection {
    'variationName'?: string;
    'variationValue'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartKitComponentOption {
    'costIfSpecified'?: Currency;
    'costPerLetter'?: Currency;
    'costPerLine'?: Currency;
    'ignoreIfDefault'?: boolean;
    'itemId'?: string;
    'itemOid'?: number;
    'label'?: string;
    'name'?: string;
    'oneTimeFee'?: boolean;
    'optionOid'?: number;
    'required'?: boolean;
    'selectedValue'?: string;
    'type'?: CartKitComponentOption.TypeEnum;
    'values'?: Array<CartItemOptionValue>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace CartKitComponentOption {
    enum TypeEnum {
        Single,
        Multiline,
        Dropdown,
        Hidden,
        Radio,
        Fixed,
    }
}
export declare class CartMarketing {
    'advertisingSource'?: string;
    'mailingListOptIn'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartPayment {
    'affirm'?: CartPaymentAffirm;
    'amazon'?: CartPaymentAmazon;
    'check'?: CartPaymentCheck;
    'creditCard'?: CartPaymentCreditCard;
    'paymentMethod'?: string;
    'purchaseOrder'?: CartPaymentPurchaseOrder;
    'rtgCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartPaymentAffirm {
    'affirmCheckoutToken'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartPaymentAmazon {
    'amazonOrderReferenceId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartPaymentCheck {
    'checkNumber'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartPaymentCreditCard {
    'cardExpirationMonth'?: number;
    'cardExpirationYear'?: number;
    'cardNumber'?: string;
    'cardNumberToken'?: string;
    'cardType'?: string;
    'cardVerificationNumber'?: string;
    'cardVerificationNumberToken'?: string;
    'customerProfileCreditCardId'?: number;
    'storeCreditCard'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartPaymentPurchaseOrder {
    'purchaseOrderNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartProfileLoginRequest {
    'cart'?: Cart;
    'customerProfileOid'?: number;
    'password'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartProfileLoginResponse {
    'cart'?: Cart;
    'errors'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartProfileRegisterRequest {
    'cart'?: Cart;
    'password'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartProfileRegisterResponse {
    'cart'?: Cart;
    'errors'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartProperty {
    'display'?: boolean;
    'expirationDts'?: string;
    'name'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartResponse {
    'cart'?: Cart;
    'errors'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartSettings {
    'billing'?: CartSettingsBilling;
    'gift'?: CartSettingsGift;
    'payment'?: CartSettingsPayment;
    'shipping'?: CartSettingsShipping;
    'taxes'?: CartSettingsTaxes;
    'terms'?: CartSettingsTerms;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartSettingsBilling {
    'provinces'?: Array<CartSettingsProvince>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartSettingsGift {
    'allowGifts'?: boolean;
    'giftCharge'?: Currency;
    'giftWraps'?: Array<CartSettingsGiftWrap>;
    'maxMessageLength'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartSettingsGiftWrap {
    'cost'?: Currency;
    'title'?: string;
    'url'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartSettingsPayment {
    'amazon'?: CartSettingsPaymentAmazon;
    'creditCard'?: CartSettingsPaymentCreditCard;
    'needPayment'?: boolean;
    'paypal'?: CartSettingsPaymentPayPal;
    'supportsAmazon'?: boolean;
    'supportsCheck'?: boolean;
    'supportsCod'?: boolean;
    'supportsCreditCard'?: boolean;
    'supportsMoneyOrder'?: boolean;
    'supportsPaypal'?: boolean;
    'supportsPurchaseOrder'?: boolean;
    'supportsQuoteRequest'?: boolean;
    'supportsWireTransfer'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartSettingsPaymentAmazon {
    'amazonButtonUrl'?: string;
    'amazonMerchantId'?: string;
    'amazonWidgetUrl'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartSettingsPaymentCreditCard {
    'collectCreditCardVerificationNumber'?: boolean;
    'creditCardTypes'?: Array<string>;
    'hostedFieldsShoppingCartToken'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartSettingsPaymentPayPal {
    'paypalButtonAltText'?: string;
    'paypalButtonUrl'?: string;
    'paypalCreditButtonUrl'?: string;
    'paypalCreditLegalImageUrl'?: string;
    'paypalCreditLegalUrl'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartSettingsProvince {
    'code'?: string;
    'province'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartSettingsShipping {
    'deliverOnDate'?: CartSettingsShippingCalendar;
    'estimates'?: Array<CartSettingsShippingEstimate>;
    'needShipping'?: boolean;
    'provinces'?: Array<CartSettingsProvince>;
    'shipOnDate'?: CartSettingsShippingCalendar;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartSettingsShippingCalendar {
    'blackouts'?: Array<string>;
    'daysOfWeek'?: Array<boolean>;
    'earliest'?: string;
    'require'?: boolean;
    'show'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartSettingsShippingEstimate {
    'allow3rdPartyBilling'?: boolean;
    'comment'?: string;
    'cost'?: Currency;
    'costBeforeDiscount'?: Currency;
    'defaultMethod'?: boolean;
    'discount'?: Currency;
    'discounted'?: boolean;
    'displayName'?: string;
    'estimatedDelivery'?: string;
    'liftGateOption'?: boolean;
    'name'?: string;
    'tax'?: Currency;
    'totalTax'?: Currency;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartSettingsTaxes {
    'counties'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartSettingsTerms {
    'html'?: string;
    'text'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartShipping {
    'address1'?: string;
    'address2'?: string;
    'city'?: string;
    'company'?: string;
    'countryCode'?: string;
    'dayPhone'?: string;
    'deliveryDate'?: string;
    'eveningPhone'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'liftGate'?: boolean;
    'postalCode'?: string;
    'shipOnDate'?: string;
    'shipToResidential'?: boolean;
    'shipping3rdPartyAccountNumber'?: string;
    'shippingMethod'?: string;
    'specialInstructions'?: string;
    'stateRegion'?: string;
    'title'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartSummary {
    'arbitraryShippingHandlingTotal'?: Currency;
    'arbitraryTax'?: Currency;
    'arbitraryTaxRate'?: Currency;
    'arbitraryTaxableSubtotal'?: Currency;
    'shippingHandling'?: Currency;
    'shippingHandlingDiscount'?: Currency;
    'shippingHandlingWithDiscount'?: Currency;
    'subtotal'?: Currency;
    'subtotalDiscount'?: Currency;
    'subtotalWithDiscount'?: Currency;
    'surcharge'?: Currency;
    'tax'?: Currency;
    'taxableSubtotal'?: Currency;
    'taxableSubtotalDiscount'?: Currency;
    'taxableSubtotalWithDiscount'?: Currency;
    'total'?: Currency;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartTaxes {
    'county'?: string;
    'exempt'?: boolean;
    'rate'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartUpsellAfter {
    'finalizeAfterDts'?: string;
    'finalizeAfterMinutes'?: number;
    'upsellPathCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartValidationRequest {
    'cart'?: Cart;
    'checks'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CartValidationResponse {
    'cart'?: Cart;
    'errors'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ChargebackDispute {
    'accountNumber'?: string;
    'adjustmentRequestText'?: string;
    'amount'?: number;
    'authCode'?: string;
    'caseNumber'?: string;
    'chargebackDisputeOid'?: number;
    'chargebackDts'?: string;
    'currency'?: string;
    'customerCareNotes'?: string;
    'encryptionKey'?: string;
    'expirationDts'?: string;
    'faxFailureReason'?: string;
    'faxNumber'?: string;
    'faxTransactionId'?: number;
    'icsid'?: string;
    'merchantAccountProfileOid'?: number;
    'order'?: Order;
    'orderId'?: string;
    'partialCardNumber'?: string;
    'pdfFileOid'?: string;
    'reasonCode'?: string;
    'status'?: string;
    'websiteUrl'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ChargebackDisputeResponse {
    'chargeback'?: ChargebackDispute;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ChargebackDisputesResponse {
    'chargebacks'?: Array<ChargebackDispute>;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CheckoutAllowedCountriesResponse {
    'countries'?: Array<Country>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CheckoutHandoffRequest {
    'cart'?: Cart;
    'errorParameterName'?: string;
    'errorReturnUrl'?: string;
    'operation'?: CheckoutHandoffRequest.OperationEnum;
    'paypalMaximumUpsellRevenue'?: number;
    'paypalReturnUrl'?: string;
    'secureHostName'?: string;
    'ucacid'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace CheckoutHandoffRequest {
    enum OperationEnum {
        Checkout,
        PayPal,
        PayPalCredit,
        View,
        Affirm,
    }
}
export declare class CheckoutHandoffResponse {
    'cart'?: Cart;
    'errors'?: Array<string>;
    'redirectToUrl'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CheckoutSetupBrowserKeyRequest {
    'allowedReferrers'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CheckoutSetupBrowserKeyResponse {
    'browserKey'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CheckoutStateProvinceResponse {
    'stateProvinces'?: Array<StateProvince>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CityStateZip {
    'city'?: string;
    'error'?: string;
    'state'?: string;
    'validZip'?: boolean;
    'zip'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CountriesResponse {
    'countries'?: Array<Country>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Country {
    'iso2Code'?: string;
    'name'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Coupon {
    'affiliateOid'?: number;
    'allowMultipleOneTimeCodes'?: boolean;
    'amountOffItems'?: CouponAmountOffItems;
    'amountOffShipping'?: CouponAmountOffShipping;
    'amountOffShippingWithItemsPurchase'?: CouponAmountOffShippingWithItemsPurchase;
    'amountOffSubtotal'?: CouponAmountOffSubtotal;
    'amountOffSubtotalAndFreeShipping'?: CouponAmountOffSubtotalFreeShippingWithPurchase;
    'amountOffSubtotalAndShipping'?: CouponAmountOffSubtotalAndShipping;
    'amountOffSubtotalWithBlockPurchase'?: CouponAmountOffSubtotalWithBlockPurchase;
    'amountOffSubtotalWithItemsPurchase'?: CouponAmountOffSubtotalWithItemsPurchase;
    'automaticallyApplyCouponCodes'?: CouponAutomaticallyApplyCouponCodes;
    'calculatedDescription'?: string;
    'canBeUsedWithOtherCoupons'?: boolean;
    'couponOid'?: number;
    'couponType'?: string;
    'description'?: string;
    'discountItemWithItemPurchase'?: CouponDiscountItemWithItemPurchase;
    'discountItems'?: CouponDiscountItems;
    'expirationDts'?: string;
    'freeItemAndShippingWithSubtotal'?: CouponFreeItemAndShippingWithSubtotal;
    'freeItemWithItemPurchase'?: CouponFreeItemWithItemPurchase;
    'freeItemWithSubtotal'?: CouponFreeItemWithSubtotal;
    'freeItemsWithItemPurchase'?: CouponFreeItemsWithItemPurchase;
    'freeItemsWithMixmatchPurchase'?: CouponFreeItemsWithMixMatchPurchase;
    'freeShipping'?: CouponFreeShipping;
    'freeShippingSpecificItems'?: CouponFreeShippingSpecificItems;
    'freeShippingWithItemsPurchase'?: CouponFreeShippingWithItemsPurchase;
    'freeShippingWithSubtotal'?: CouponFreeShippingWithSubtotal;
    'merchantCode'?: string;
    'merchantNotes'?: string;
    'multipleAmountsOffItems'?: CouponMultipleAmountsOffItems;
    'noDiscount'?: CouponNoDiscount;
    'percentOffItemWithItemsQuantityPurchase'?: CouponPercentOffItemWithItemsQuantityPurchase;
    'percentOffItems'?: CouponPercentOffItems;
    'percentOffItemsAndFreeShipping'?: CouponPercentOffItemsAndFreeShipping;
    'percentOffItemsWithItemsPurchase'?: CouponPercentOffItemsWithItemsPurchase;
    'percentOffRetailPriceItems'?: CouponPercentOffRetailPriceItems;
    'percentOffShipping'?: CouponPercentOffShipping;
    'percentOffSubtotal'?: CouponPercentOffSubtotal;
    'percentOffSubtotalAndFreeShipping'?: CouponPercentOffSubtotalAndFreeShipping;
    'percentOffSubtotalLimit'?: CouponPercentOffSubtotalLimit;
    'percentOffSubtotalWithItemsPurchase'?: CouponPercentOffSubtotalWithItemsPurchase;
    'percentOffSubtotalWithSubtotal'?: CouponPercentOffSubtotalWithSubtotal;
    'quickbooksCode'?: string;
    'restrictByPostalCodes'?: Array<string>;
    'restrictByScreenBrandingThemeCodes'?: Array<CouponRestriction>;
    'restrictByStorefronts'?: Array<CouponRestriction>;
    'startDts'?: string;
    'tieredAmountOffItem'?: CouponTieredAmountOffItem;
    'tieredAmountOffSubtotal'?: CouponTieredAmountOffSubtotal;
    'tieredPercentOffItems'?: CouponTieredPercentOffItems;
    'tieredPercentOffShipping'?: CouponTieredPercentOffShipping;
    'tieredPercentOffSubtotal'?: CouponTieredPercentOffSubtotal;
    'usableBy'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponAmountOffItems {
    'currencyCode'?: string;
    'discountAmount'?: number;
    'items'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponAmountOffShipping {
    'currencyCode'?: string;
    'discountAmount'?: number;
    'shippingMethods'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponAmountOffShippingWithItemsPurchase {
    'currencyCode'?: string;
    'discountAmount'?: number;
    'items'?: Array<string>;
    'shippingMethods'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponAmountOffSubtotal {
    'currencyCode'?: string;
    'discountAmount'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponAmountOffSubtotalAndShipping {
    'currencyCode'?: string;
    'discountAmount'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponAmountOffSubtotalFreeShippingWithPurchase {
    'currencyCode'?: string;
    'discountAmount'?: number;
    'purchaseAmount'?: number;
    'shippingMethods'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponAmountOffSubtotalWithBlockPurchase {
    'currencyCode'?: string;
    'discountAmount'?: number;
    'requiredPurchaseItem'?: string;
    'requiredPurchaseQuantity'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponAmountOffSubtotalWithItemsPurchase {
    'currencyCode'?: string;
    'discountAmount'?: number;
    'items'?: Array<string>;
    'requiredPurchaseQuantity'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponAutomaticallyApplyCouponCodes {
    'couponCodes'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponCodesRequest {
    'error'?: Error;
    'expirationDts'?: string;
    'expirationSeconds'?: number;
    'metadata'?: ResponseMetadata;
    'quantity'?: number;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponCodesResponse {
    'couponCodes'?: Array<string>;
    'error'?: Error;
    'expirationDts'?: string;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponDiscountItemWithItemPurchase {
    'currencyCode'?: string;
    'discountItem'?: string;
    'discountPrice'?: number;
    'limit'?: number;
    'requiredPurchaseItem'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponDiscountItems {
    'currencyCode'?: string;
    'discountPrice'?: number;
    'items'?: Array<string>;
    'limit'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponEditorValues {
    'couponTypes'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponFreeItemAndShippingWithSubtotal {
    'currencyCode'?: string;
    'items'?: Array<string>;
    'limit'?: number;
    'shippingMethods'?: Array<string>;
    'subtotalAmount'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponFreeItemWithItemPurchase {
    'items'?: Array<string>;
    'limit'?: number;
    'matchRequiredPurchaseItemToFreeItem'?: boolean;
    'requiredPurchaseItems'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponFreeItemWithSubtotal {
    'currencyCode'?: string;
    'items'?: Array<string>;
    'limit'?: number;
    'subtotalAmount'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponFreeItemsWithItemPurchase {
    'freeItem'?: string;
    'freeQuantity'?: number;
    'limit'?: number;
    'requiredPurchaseItem'?: string;
    'requiredPurchaseQuantity'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponFreeItemsWithMixMatchPurchase {
    'freeItem'?: string;
    'freeQuantity'?: number;
    'limit'?: number;
    'requiredPurchaseMixAndMatchGroup'?: string;
    'requiredPurchaseQuantity'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponFreeShipping {
    'shippingMethods'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponFreeShippingSpecificItems {
    'items'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponFreeShippingWithItemsPurchase {
    'items'?: Array<string>;
    'shippingMethods'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponFreeShippingWithSubtotal {
    'currencyCode'?: string;
    'purchaseAmount'?: number;
    'shippingMethods'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponMultipleAmountsOffItems {
    'discounts'?: Array<CouponTierItemDiscount>;
    'limit'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponNoDiscount {
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponPercentOffItemWithItemsQuantityPurchase {
    'discountPercent'?: number;
    'items'?: Array<string>;
    'limit'?: number;
    'requiredPurchaseItems'?: Array<string>;
    'requiredPurchaseQuantity'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponPercentOffItems {
    'discountPercent'?: number;
    'excludedItems'?: Array<string>;
    'items'?: Array<string>;
    'limit'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponPercentOffItemsAndFreeShipping {
    'discountPercent'?: number;
    'excludedItems'?: Array<string>;
    'items'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponPercentOffItemsWithItemsPurchase {
    'discountPercent'?: number;
    'items'?: Array<string>;
    'limit'?: number;
    'requiredPurchaseItems'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponPercentOffRetailPriceItems {
    'discountPercent'?: number;
    'excludedItems'?: Array<string>;
    'items'?: Array<string>;
    'limit'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponPercentOffShipping {
    'discountPercent'?: number;
    'shippingMethods'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponPercentOffSubtotal {
    'discountPercent'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponPercentOffSubtotalAndFreeShipping {
    'discountPercent'?: number;
    'shippingMethods'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponPercentOffSubtotalLimit {
    'currencyCode'?: string;
    'discountPercent'?: number;
    'limit'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponPercentOffSubtotalWithItemsPurchase {
    'discountPercent'?: number;
    'items'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponPercentOffSubtotalWithSubtotal {
    'currencyCode'?: string;
    'discountPercent'?: number;
    'subtotalAmount'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponQuery {
    'affiliateOid'?: number;
    'couponType'?: string;
    'description'?: string;
    'excludeExpired'?: boolean;
    'expirationDtsBegin'?: string;
    'expirationDtsEnd'?: string;
    'merchantCode'?: string;
    'startDtsBegin'?: string;
    'startDtsEnd'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponResponse {
    'coupon'?: Coupon;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponRestriction {
    'invalidForThis'?: boolean;
    'name'?: string;
    'validForThis'?: boolean;
    'validOnlyForThis'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponTierAmount {
    'discountAmount'?: number;
    'subtotalAmount'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponTierItemDiscount {
    'discountAmount'?: number;
    'items'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponTierPercent {
    'discountPercent'?: number;
    'subtotalAmount'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponTierQuantityAmount {
    'discountAmount'?: number;
    'itemQuantity'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponTierQuantityPercent {
    'discountPercent'?: number;
    'itemQuantity'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponTieredAmountOffItem {
    'item'?: string;
    'limit'?: number;
    'tiers'?: Array<CouponTierQuantityAmount>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponTieredAmountOffSubtotal {
    'items'?: Array<string>;
    'tiers'?: Array<CouponTierAmount>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponTieredPercentOffItems {
    'items'?: Array<string>;
    'limit'?: number;
    'tiers'?: Array<CouponTierQuantityPercent>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponTieredPercentOffShipping {
    'shippingMethods'?: Array<string>;
    'tiers'?: Array<CouponTierPercent>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponTieredPercentOffSubtotal {
    'items'?: Array<string>;
    'tiers'?: Array<CouponTierPercent>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CouponsResponse {
    'coupons'?: Array<Coupon>;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Currency {
    'currencyCode'?: string;
    'exchangeRate'?: number;
    'localized'?: number;
    'localizedFormatted'?: string;
    'value'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Customer {
    'activity'?: CustomerActivity;
    'affiliateOid'?: number;
    'allow3rdPartyBilling'?: boolean;
    'allowCod'?: boolean;
    'allowPurchaseOrder'?: boolean;
    'allowQuoteRequest'?: boolean;
    'allowSelectionOfAddressType'?: boolean;
    'attachments'?: Array<CustomerAttachment>;
    'autoApproveCod'?: boolean;
    'autoApprovePurchaseOrder'?: boolean;
    'automaticMerchantNotes'?: string;
    'billing'?: Array<CustomerBilling>;
    'businessNotes'?: string;
    'cards'?: Array<CustomerCard>;
    'ccEmails'?: Array<CustomerEmail>;
    'customerProfileOid'?: number;
    'dhlAccountNumber'?: string;
    'dhlDutyAccountNumber'?: string;
    'email'?: string;
    'exemptShippingHandlingCharge'?: boolean;
    'fedexAccountNumber'?: string;
    'freeShipping'?: boolean;
    'freeShippingMinimum'?: number;
    'lastModifiedBy'?: string;
    'lastModifiedDts'?: string;
    'loyalty'?: CustomerLoyalty;
    'maximumItemCount'?: number;
    'minimumItemCount'?: number;
    'minimumSubtotal'?: number;
    'noCoupons'?: boolean;
    'noFreeShipping'?: boolean;
    'noRealtimeCharge'?: boolean;
    'orders'?: Array<Order>;
    'ordersSummary'?: CustomerOrdersSummary;
    'password'?: string;
    'pricingTiers'?: Array<CustomerPricingTier>;
    'privacy'?: CustomerPrivacy;
    'qbClass'?: string;
    'qbCode'?: string;
    'quotes'?: Array<Order>;
    'quotesSummary'?: CustomerQuotesSummary;
    'referralSource'?: string;
    'reviewer'?: CustomerReviewer;
    'salesRepCode'?: string;
    'sendSignupNotification'?: boolean;
    'shipping'?: Array<CustomerShipping>;
    'signupDts'?: string;
    'softwareEntitlements'?: Array<CustomerSoftwareEntitlement>;
    'suppressBuysafe'?: boolean;
    'tags'?: Array<CustomerTag>;
    'taxCodes'?: CustomerTaxCodes;
    'taxExempt'?: boolean;
    'taxId'?: string;
    'terms'?: string;
    'trackSeparately'?: boolean;
    'unapproved'?: boolean;
    'upsAccountNumber'?: string;
    'websiteUrl'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerActivity {
    'activities'?: Array<Activity>;
    'memberships'?: Array<ListSegmentMembership>;
    'metrics'?: Array<Metric>;
    'propertiesList'?: Array<Property>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerAffiliate {
    'affiliateOid'?: number;
    'email'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerAttachment {
    'customerProfileAttachmentOid'?: number;
    'description'?: string;
    'fileName'?: string;
    'mimeType'?: string;
    'uploadDts'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerBilling {
    'address1'?: string;
    'address2'?: string;
    'city'?: string;
    'company'?: string;
    'countryCode'?: string;
    'customerBillingOid'?: number;
    'customerProfileOid'?: number;
    'dayPhone'?: string;
    'defaultBilling'?: boolean;
    'eveningPhone'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'lastUsedDts'?: string;
    'postalCode'?: string;
    'stateRegion'?: string;
    'taxCounty'?: string;
    'title'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerCard {
    'cardExpirationMonth'?: number;
    'cardExpirationYear'?: number;
    'cardNumber'?: string;
    'cardNumberToken'?: string;
    'cardType'?: string;
    'customerProfileCreditCardId'?: number;
    'customerProfileOid'?: number;
    'lastUsedDts'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerEditorValues {
    'affiliates'?: Array<CustomerAffiliate>;
    'cardExpMonths'?: Array<string>;
    'cardExpYears'?: Array<string>;
    'cardTypes'?: Array<string>;
    'countries'?: Array<Country>;
    'qbClasses'?: Array<string>;
    'salesRepCodes'?: Array<string>;
    'terms'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerEmail {
    'customerProfileEmailOid'?: number;
    'email'?: string;
    'label'?: string;
    'receiptNotification'?: boolean;
    'refundNotification'?: boolean;
    'shipmentNotification'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerEmailListChanges {
    'addToLists'?: Array<string>;
    'removeFromLists'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerLoyalty {
    'currentPoints'?: number;
    'ledgerEntries'?: Array<CustomerLoyaltyLedger>;
    'redemptions'?: Array<CustomerLoyaltyRedemption>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerLoyaltyLedger {
    'createdBy'?: string;
    'createdDts'?: string;
    'description'?: string;
    'email'?: string;
    'itemId'?: string;
    'itemIndex'?: number;
    'ledgerDts'?: string;
    'loyaltyCampaignOid'?: number;
    'loyaltyLedgerOid'?: number;
    'loyaltyPoints'?: number;
    'modifiedBy'?: string;
    'modifiedDts'?: string;
    'orderId'?: string;
    'quantity'?: number;
    'vestingDts'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerLoyaltyRedemption {
    'couponCode'?: string;
    'couponCodeOid'?: number;
    'couponUsed'?: boolean;
    'descriptionForCustomer'?: string;
    'expirationDts'?: string;
    'giftCertificateCode'?: string;
    'giftCertificateOid'?: number;
    'loyaltyLedgerOid'?: number;
    'loyaltyPoints'?: number;
    'loyaltyRedemptionOid'?: number;
    'orderId'?: string;
    'redemptionDts'?: string;
    'remainingBalance'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerOrdersSummary {
    'firstOrderDts'?: string;
    'lastOrderDts'?: string;
    'orderCount'?: number;
    'total'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerPricingTier {
    'name'?: string;
    'pricingTierOid'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerPrivacy {
    'lastUpdateDts'?: string;
    'marketing'?: boolean;
    'preference'?: boolean;
    'statistics'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerQuery {
    'allTags'?: Array<string>;
    'anyTags'?: Array<string>;
    'billingCity'?: string;
    'billingCompany'?: string;
    'billingCountryCode'?: string;
    'billingDayPhone'?: string;
    'billingEveningPhone'?: string;
    'billingFirstName'?: string;
    'billingLastName'?: string;
    'billingPostalCode'?: string;
    'billingState'?: string;
    'email'?: string;
    'lastModifiedDtsEnd'?: string;
    'lastModifiedDtsStart'?: string;
    'pricingTierName'?: string;
    'pricingTierOid'?: number;
    'qbClass'?: string;
    'quickbooksCode'?: string;
    'shippingCity'?: string;
    'shippingCompany'?: string;
    'shippingCountryCode'?: string;
    'shippingDayPhone'?: string;
    'shippingEveningPhone'?: string;
    'shippingFirstName'?: string;
    'shippingLastName'?: string;
    'shippingPostalCode'?: string;
    'shippingState'?: string;
    'signupDtsEnd'?: string;
    'signupDtsStart'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerQuotesSummary {
    'firstQuoteDts'?: string;
    'lastQuoteDts'?: string;
    'quoteCount'?: number;
    'total'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerResponse {
    'customer'?: Customer;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerReviewer {
    'autoApprove'?: boolean;
    'averageOverallRating'?: number;
    'expert'?: boolean;
    'firstReview'?: string;
    'lastReview'?: string;
    'location'?: string;
    'nickname'?: string;
    'numberHelpfulReviewVotes'?: number;
    'rank'?: number;
    'reviewsContributed'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerShipping {
    'address1'?: string;
    'address2'?: string;
    'city'?: string;
    'company'?: string;
    'countryCode'?: string;
    'customerProfileOid'?: number;
    'customerShippingOid'?: number;
    'dayPhone'?: string;
    'defaultShipping'?: boolean;
    'eveningPhone'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'lastUsedDts'?: string;
    'postalCode'?: string;
    'stateRegion'?: string;
    'taxCounty'?: string;
    'title'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerSoftwareEntitlement {
    'activationCode'?: string;
    'activationDts'?: string;
    'customerSoftwareEntitlementOid'?: number;
    'expirationDts'?: string;
    'purchasedViaItemDescription'?: string;
    'purchasedViaItemId'?: string;
    'purchasedViaOrderId'?: string;
    'softwareSku'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerTag {
    'tagValue'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomerTaxCodes {
    'avalaraCustomerCode'?: string;
    'avalaraEntityUseCode'?: string;
    'sovosCustomerCode'?: string;
    'taxjarCustomerId'?: string;
    'taxjarExemptionType'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CustomersResponse {
    'customers'?: Array<Customer>;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class DataTablesServerSideResponse {
    'data'?: Array<Customer>;
    'draw'?: number;
    'recordsFiltered'?: number;
    'recordsTotal'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Distance {
    'uom'?: Distance.UomEnum;
    'value'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace Distance {
    enum UomEnum {
        IN,
        CM,
    }
}
export declare class DistributionCenter {
    'address1'?: string;
    'address2'?: string;
    'city'?: string;
    'code'?: string;
    'countryCode'?: string;
    'defaultCenter'?: boolean;
    'defaultHandlesAllItems'?: boolean;
    'distributionCenterOid'?: number;
    'duns'?: string;
    'estimateFromDistributionCenterOid'?: number;
    'ftpPassword'?: string;
    'holdBeforeShipmentMinutes'?: number;
    'holdBeforeTransmission'?: boolean;
    'holdAutoOrderBeforeShipmentMinutes'?: number;
    'latitude'?: number;
    'longitude'?: number;
    'name'?: string;
    'noCustomerDirectShipments'?: boolean;
    'noSplitShipment'?: boolean;
    'postalCode'?: string;
    'processDays'?: number;
    'processInventoryStartTime'?: string;
    'processInventoryStopTime'?: string;
    'requireAsn'?: boolean;
    'sendKitInsteadOfComponents'?: boolean;
    'shipmentCutoffTimeFriday'?: string;
    'shipmentCutoffTimeMonday'?: string;
    'shipmentCutoffTimeSaturday'?: string;
    'shipmentCutoffTimeSunday'?: string;
    'shipmentCutoffTimeThursday'?: string;
    'shipmentCutoffTimeTuesday'?: string;
    'shipmentCutoffTimeWednesday'?: string;
    'state'?: string;
    'transport'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class DistributionCentersResponse {
    'distributionCenters'?: Array<DistributionCenter>;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailBaseTemplateListResponse {
    'templatePaths'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCampaign {
    'clickRateFormatted'?: string;
    'createdDts'?: string;
    'deleted'?: boolean;
    'emailCampaignUuid'?: string;
    'emailCommunicationSequenceUuid'?: string;
    'endOnceCustomerPurchases'?: boolean;
    'espDomainUser'?: string;
    'espDomainUuid'?: string;
    'espFriendlyName'?: string;
    'libraryItemOid'?: number;
    'memberships'?: Array<EmailListSegmentMembership>;
    'merchantId'?: string;
    'name'?: string;
    'openRateFormatted'?: string;
    'preventSendingDueToSpam'?: boolean;
    'revenueFormatted'?: string;
    'scheduledDts'?: string;
    'screenshotLargeFullUrl'?: string;
    'status'?: string;
    'statusDts'?: string;
    'storefrontOid'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCampaignResponse {
    'campaign'?: EmailCampaign;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCampaignsResponse {
    'campaigns'?: Array<EmailCampaign>;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailClick {
    'clickCount'?: number;
    'url'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailClicksResponse {
    'clicks'?: Array<EmailClick>;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCommseq {
    'emailCommunicationSequenceSteps'?: Array<EmailCommseqStep>;
    'emailCommunicationSequenceUuid'?: string;
    'merchantId'?: string;
    'storefrontOid'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCommseqEmail {
    'deleted'?: boolean;
    'editedByUser'?: string;
    'emailCommunicationSequenceEmailUuid'?: string;
    'emailCommunicationSequenceUuid'?: string;
    'emailContainerCjson'?: string;
    'emailContainerCjsonLastModifiedDts'?: string;
    'emailTemplateVmPath'?: string;
    'filterProfileEquationJson'?: string;
    'individuallyRender'?: boolean;
    'libraryItemOid'?: number;
    'merchantId'?: string;
    'pendingReview'?: boolean;
    'previewText'?: string;
    'rejected'?: boolean;
    'requiresReview'?: boolean;
    'screenshotLargeFullUrl'?: string;
    'screenshotLargeViewportUrl'?: string;
    'screenshotSmallFullUrl'?: string;
    'screenshotSmallViewportUrl'?: string;
    'smartSending'?: boolean;
    'storefrontOid'?: number;
    'subject'?: string;
    'transactionalEmail'?: boolean;
    'version'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCommseqEmailResponse {
    'email'?: EmailCommseqEmail;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCommseqEmailSendTestRequest {
    'cartId'?: string;
    'cartItemIds'?: Array<string>;
    'espCommseqEmailUuid'?: string;
    'espCommseqStepUuid'?: string;
    'espCommseqUuid'?: string;
    'name'?: string;
    'orderId'?: string;
    'pleaseReview'?: boolean;
    'sendToAdditionalEmails'?: Array<string>;
    'sendToLoggedInUser'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCommseqEmailSendTestResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCommseqEmailsRequest {
    'error'?: Error;
    'espCommseqEmailUuids'?: Array<string>;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCommseqEmailsResponse {
    'emails'?: Array<EmailCommseqEmail>;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCommseqPostcard {
    'deleted'?: boolean;
    'editedByUser'?: string;
    'emailCommunicationSequencePostcardUuid'?: string;
    'filterProfileEquationJson'?: string;
    'merchantId'?: string;
    'postcardBackContainerCjson'?: string;
    'postcardBackContainerUuid'?: string;
    'postcardContainerCjsonLastModifiedDts'?: string;
    'postcardFrontContainerCjson'?: string;
    'postcardFrontContainerUuid'?: string;
    'storefrontOid'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCommseqPostcardResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'postcard'?: EmailCommseqPostcard;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCommseqPostcardSendTestRequest {
    'address1'?: string;
    'address2'?: string;
    'cartId'?: string;
    'cartItemIds'?: Array<string>;
    'city'?: string;
    'espCommseqPostcardUuid'?: string;
    'espCommseqStepUuid'?: string;
    'espCommseqUuid'?: string;
    'name'?: string;
    'orderId'?: string;
    'postalCode'?: string;
    'state'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCommseqPostcardSendTestResponse {
    'backThumbnail'?: string;
    'error'?: Error;
    'frontThumbnail'?: string;
    'metadata'?: ResponseMetadata;
    'renderedPdf'?: string;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCommseqPostcardsRequest {
    'espCommseqPostcardUuids'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCommseqPostcardsResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'postcards'?: Array<EmailCommseqPostcard>;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCommseqResponse {
    'communicationSequence'?: EmailCommseq;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCommseqStat {
    'clickCount'?: number;
    'clickCountFormatted'?: string;
    'conversionCount'?: number;
    'conversionCountFormatted'?: string;
    'deliveredCount'?: number;
    'deliveredCountFormatted'?: string;
    'emailCommunicationSequenceUuid'?: string;
    'finishedCount'?: number;
    'finishedCountFormatted'?: string;
    'inProgressCount'?: number;
    'inProgressCountFormatted'?: string;
    'kickboxCount'?: number;
    'kickboxCountFormatted'?: string;
    'merchantId'?: string;
    'openCount'?: number;
    'openCountFormatted'?: string;
    'orderCount'?: number;
    'orderCountFormatted'?: string;
    'permanentBounceCount'?: number;
    'permanentBounceCountFormatted'?: string;
    'profit'?: number;
    'profitFormatted'?: string;
    'revenue'?: number;
    'revenueFormatted'?: string;
    'sendCount'?: number;
    'sendCountFormatted'?: string;
    'skippedCount'?: number;
    'skippedCountFormatted'?: string;
    'spamCount'?: number;
    'spamCountFormatted'?: string;
    'startedCount'?: number;
    'startedCountFormatted'?: string;
    'storefrontOid'?: number;
    'unsubscribeCount'?: number;
    'unsubscribeCountFormatted'?: string;
    'viewCount'?: number;
    'viewCountFormatted'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCommseqStatResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'stats'?: EmailCommseqStat;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCommseqStep {
    'altChildEmailCommunicationSequenceSteps'?: Array<EmailCommseqStep>;
    'childEmailCommunicationSequenceSteps'?: Array<EmailCommseqStep>;
    'emailCommunicationSequenceStepUuid'?: string;
    'emailPendingReview'?: boolean;
    'emailRejected'?: boolean;
    'emailRequiresReview'?: boolean;
    'filterProfileEquationJson'?: string;
    'merchantNotes'?: string;
    'stepConfigJson'?: string;
    'type'?: EmailCommseqStep.TypeEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace EmailCommseqStep {
    enum TypeEnum {
        Begin,
        Wait,
        Email,
        Merge,
        Condition,
        End,
    }
}
export declare class EmailCommseqsResponse {
    'communicationSequences'?: Array<EmailCommseq>;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCustomer {
    'active'?: boolean;
    'email'?: string;
    'emailCustomerUuid'?: string;
    'firstName'?: string;
    'globalUnsubscribe'?: boolean;
    'lastInteractionDts'?: string;
    'lastName'?: string;
    'listUuids'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCustomerEditorUrlResponse {
    'editorUrl'?: string;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailCustomersResponse {
    'customers'?: Array<EmailCustomer>;
    'pageNumber'?: number;
    'pageSize'?: number;
    'totalCustomers'?: number;
    'totalPages'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailDashboardActivity {
    'action'?: string;
    'activityDts'?: string;
    'destinationName'?: string;
    'destinationUuid'?: string;
    'email'?: string;
    'isList'?: boolean;
    'isSegment'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailDashboardActivityResponse {
    'activity'?: Array<EmailDashboardActivity>;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailDashboardStatsResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'stats'?: Array<EmailStat>;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailDomain {
    'comment'?: string;
    'dkim'?: Array<VerificationRecord>;
    'dkimStatus'?: string;
    'domain'?: string;
    'espDomainUuid'?: string;
    'identityStatus'?: string;
    'merchantId'?: string;
    'provider'?: string;
    'startDkimDts'?: string;
    'startIdentityDts'?: string;
    'verification'?: VerificationRecord;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailEditorTokenResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'token'?: string;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailFlow {
    'allowMultipleConcurrentEnrollments'?: boolean;
    'backPopulating'?: boolean;
    'clickRateFormatted'?: string;
    'createdDts'?: string;
    'deleted'?: boolean;
    'emailCommunicationSequenceUuid'?: string;
    'emailFlowUuid'?: string;
    'endOnceCustomerPurchases'?: boolean;
    'enrolledCustomers'?: number;
    'espDomainUser'?: string;
    'espDomainUuid'?: string;
    'espFriendlyName'?: string;
    'filterProfileEquationJson'?: string;
    'libraryItemOid'?: number;
    'merchantId'?: string;
    'name'?: string;
    'openRateFormatted'?: string;
    'revenueFormatted'?: string;
    'screenshotLargeFullUrl'?: string;
    'status'?: string;
    'statusDts'?: string;
    'storefrontOid'?: number;
    'triggerParameter'?: string;
    'triggerParameterName'?: string;
    'triggerType'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailFlowBackPopulateRequest {
    'orderDaysOld'?: number;
    'relativeToEvent'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailFlowBackPopulateResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailFlowResponse {
    'error'?: Error;
    'flow'?: EmailFlow;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailFlowsResponse {
    'error'?: Error;
    'flows'?: Array<EmailFlow>;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailGlobalSettings {
    'dedicatedIp'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailGlobalSettingsResponse {
    'error'?: Error;
    'globalSettings'?: EmailGlobalSettings;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailGlobalUnsubscribeRequest {
    'email'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailGlobalUnsubscribeResponse {
    'listsUnsubscribed'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailHistogramPropertyNamesResponse {
    'propertyNames'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailHistogramPropertyValuesResponse {
    'propertyValues'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailList {
    'allowCsvDownload'?: boolean;
    'createdDts'?: string;
    'deleted'?: boolean;
    'emailListUuid'?: string;
    'memberCount'?: number;
    'merchantId'?: string;
    'name'?: string;
    'publicDescription'?: string;
    'publicList'?: boolean;
    'storefrontOid'?: number;
    'usedBy'?: Array<EmailListSegmentUsedBy>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailListArchiveResponse {
    'error'?: Error;
    'listInUse'?: boolean;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailListCustomer {
    'addDts'?: string;
    'email'?: string;
    'emailCustomerUuid'?: string;
    'emailListMemberUuid'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailListCustomersResponse {
    'customers'?: Array<EmailListCustomer>;
    'pageNumber'?: number;
    'pageSize'?: number;
    'totalCustomers'?: number;
    'totalPages'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailListResponse {
    'error'?: Error;
    'list'?: EmailList;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailListSegmentMembership {
    'emailListUuid'?: string;
    'emailSegmentUuid'?: string;
    'exclude'?: boolean;
    'name'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailListSegmentUsedBy {
    'emailCampaignUuid'?: string;
    'emailFlowUuid'?: string;
    'name'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailListSubscribeResponse {
    'added'?: number;
    'memberCount'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailListsResponse {
    'error'?: Error;
    'lists'?: Array<EmailList>;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailOrder {
    'email'?: string;
    'orderDts'?: string;
    'orderId'?: string;
    'total'?: Currency;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailOrdersResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'orders'?: Array<EmailOrder>;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailPerformance {
    'activeCustomers'?: number;
    'actualCustomers'?: number;
    'bounceCount'?: number;
    'bouncePercentage'?: number;
    'bouncePercentageFormatted'?: string;
    'customerHistogram'?: EmailPerformanceCustomerHistogram;
    'dailyStats'?: Array<EmailPerformanceDaily>;
    'deliveredCount'?: number;
    'maxActiveCustomers'?: number;
    'maxEmailsPerDay'?: number;
    'maxEmailsPerHour'?: number;
    'maxEmailsPerMonth'?: number;
    'pausedForSpam'?: boolean;
    'revenue'?: number;
    'sentEmailsPerDay'?: number;
    'sentEmailsPerHour'?: number;
    'sentEmailsPerMonth'?: number;
    'sequenceSendCount'?: number;
    'spamCount'?: number;
    'spamPercentage'?: number;
    'spamPercentageFormatted'?: string;
    'transactionalSendCount'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailPerformanceCustomerHistogram {
    'periods'?: Array<EmailPerformanceCustomerHistogramPeriod>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailPerformanceCustomerHistogramPeriod {
    'active'?: number;
    'inactive'?: number;
    'month'?: number;
    'total'?: number;
    'year'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailPerformanceDaily {
    'bounceCount'?: number;
    'deliveredCount'?: number;
    'revenue'?: number;
    'sequenceSendCount'?: number;
    'spamCount'?: number;
    'statDts'?: string;
    'transactionalSendCount'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailPerformanceResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'performance'?: EmailPerformance;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailPlan {
    'additionalCustomers'?: number;
    'additionalEmails'?: number;
    'allowListImport'?: boolean;
    'allowTrackingEmails'?: boolean;
    'customerTiers'?: Array<EmailPlanAdditional>;
    'initialSendingLimits'?: number;
    'planCustomers'?: number;
    'planEmails'?: number;
    'planName'?: string;
    'planNameFormatted'?: string;
    'requireOrderWithinLastDays'?: number;
    'revenuePercent'?: number;
    'spamPercentLimit'?: number;
    'totalCustomers'?: number;
    'totalEmails'?: number;
    'upgradeTo'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailPlanAdditional {
    'canDowngrade'?: boolean;
    'canUpgrade'?: boolean;
    'cost'?: number;
    'costFormatted'?: string;
    'customers'?: number;
    'emails'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailPlanResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'plan'?: EmailPlan;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailPostcardStat {
    'clickCount'?: number;
    'clickCountFormatted'?: string;
    'conversionCount'?: number;
    'conversionCountFormatted'?: string;
    'deliveredCount'?: number;
    'deliveredCountFormatted'?: string;
    'merchantId'?: string;
    'name'?: string;
    'orderCount'?: number;
    'orderCountFormatted'?: string;
    'profit'?: number;
    'profitFormatted'?: string;
    'returnToSenderCount'?: number;
    'returnToSenderCountFormatted'?: string;
    'revenue'?: number;
    'revenueFormatted'?: string;
    'sendCount'?: number;
    'sendCountFormatted'?: string;
    'skippedCount'?: number;
    'skippedCountFormatted'?: string;
    'spamCount'?: number;
    'spamCountFormatted'?: string;
    'statType'?: string;
    'status'?: string;
    'statusDts'?: string;
    'steps'?: Array<EmailPostcardStat>;
    'storefrontOid'?: number;
    'unsubscribeCount'?: number;
    'unsubscribeCountFormatted'?: string;
    'uuid'?: string;
    'viewCount'?: number;
    'viewCountFormatted'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailSegment {
    'allowCsvDownload'?: boolean;
    'allowFacebookAudiences'?: boolean;
    'createdDts'?: string;
    'deleted'?: boolean;
    'emailSegmentUuid'?: string;
    'facebookCustomAudience'?: boolean;
    'filterProfileEquationJson'?: string;
    'memberCount'?: number;
    'merchantId'?: string;
    'name'?: string;
    'rankJson'?: string;
    'rebuildRequired'?: boolean;
    'storefrontOid'?: number;
    'usedBy'?: Array<EmailListSegmentUsedBy>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailSegmentArchiveResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'segmentInUse'?: boolean;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailSegmentCustomer {
    'addDts'?: string;
    'email'?: string;
    'emailCustomerUuid'?: string;
    'emailSegmentMemberUuid'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailSegmentCustomersResponse {
    'customers'?: Array<EmailSegmentCustomer>;
    'pageNumber'?: number;
    'pageSize'?: number;
    'totalCustomers'?: number;
    'totalPages'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailSegmentDownloadPrepareResponse {
    'emailSegmentRebuildUuid'?: string;
    'emailSegmentUuid'?: string;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'percentageComplete'?: number;
    'proceed'?: boolean;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailSegmentResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'segment'?: EmailSegment;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailSegmentsResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'segments'?: Array<EmailSegment>;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailSendingDomainResponse {
    'domain'?: EmailDomain;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailSendingDomainsResponse {
    'domains'?: Array<EmailDomain>;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailSettings {
    'marketingEspDomainUser'?: string;
    'marketingEspDomainUuid'?: string;
    'marketingEspFriendlyName'?: string;
    'postcardFromAddress1'?: string;
    'postcardFromAddress2'?: string;
    'postcardFromCity'?: string;
    'postcardFromName'?: string;
    'postcardFromPostalCode'?: string;
    'postcardFromState'?: string;
    'transactionalEspDomainUser'?: string;
    'transactionalEspDomainUuid'?: string;
    'transactionalEspFriendlyName'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailSettingsResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'settings'?: EmailSettings;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailStat {
    'clickCount'?: number;
    'clickCountFormatted'?: string;
    'conversionCount'?: number;
    'conversionCountFormatted'?: string;
    'deleted'?: boolean;
    'deliveredCount'?: number;
    'deliveredCountFormatted'?: string;
    'kickboxCount'?: number;
    'kickboxCountFormatted'?: string;
    'merchantId'?: string;
    'name'?: string;
    'openCount'?: number;
    'openCountFormatted'?: string;
    'orderCount'?: number;
    'orderCountFormatted'?: string;
    'permanentBounceCount'?: number;
    'permanentBounceCountFormatted'?: string;
    'profit'?: number;
    'profitFormatted'?: string;
    'revenue'?: number;
    'revenueFormatted'?: string;
    'sendCount'?: number;
    'sendCountFormatted'?: string;
    'skippedCount'?: number;
    'skippedCountFormatted'?: string;
    'spamCount'?: number;
    'spamCountFormatted'?: string;
    'statType'?: string;
    'status'?: string;
    'statusDts'?: string;
    'stepUuid'?: string;
    'steps'?: Array<EmailStat>;
    'storefrontOid'?: number;
    'unsubscribeCount'?: number;
    'unsubscribeCountFormatted'?: string;
    'uuid'?: string;
    'viewCount'?: number;
    'viewCountFormatted'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailStatPostcardSummaryRequest {
    'commseqPostcardUuids'?: Array<string>;
    'days'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailStatPostcardSummaryResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'stats'?: Array<EmailPostcardStat>;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailStatSummaryRequest {
    'commseqEmailUuids'?: Array<string>;
    'commseqStepUuids'?: Array<string>;
    'days'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailStatSummaryResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'stats'?: Array<EmailStat>;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailStepStat {
    'leftConversionCount'?: number;
    'leftConversionCountFormatted'?: string;
    'leftCustomerCount'?: number;
    'leftCustomerCountFormatted'?: string;
    'leftOrderCount'?: number;
    'leftOrderCountFormatted'?: string;
    'leftProfit'?: number;
    'leftProfitFormatted'?: string;
    'leftRevenue'?: number;
    'leftRevenueFormatted'?: string;
    'rightConversionCount'?: number;
    'rightConversionCountFormatted'?: string;
    'rightCustomerCount'?: number;
    'rightCustomerCountFormatted'?: string;
    'rightOrderCount'?: number;
    'rightOrderCountFormatted'?: string;
    'rightProfit'?: number;
    'rightProfitFormatted'?: string;
    'rightRevenue'?: number;
    'rightRevenueFormatted'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailStepStatRequest {
    'commseqStepUuids'?: Array<string>;
    'days'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailStepStatResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'stats'?: Array<EmailStepStat>;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailStepWaitingRequest {
    'commseqStepUuids'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailStepWaitingResponse {
    'stepWaitings'?: Array<StepWaiting>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailTemplate {
    'containerCjson'?: string;
    'description'?: string;
    'emailTemplateOid'?: number;
    'emailTemplateVmPath'?: string;
    'merchantId'?: string;
    'name'?: string;
    'previewAmazonListingKey'?: string;
    'sortOrder'?: number;
    'storefrontOid'?: number;
    'system'?: boolean;
    'triggerType'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailTemplatesResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'templates'?: Array<EmailTemplate>;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailThirdPartyList {
    'id'?: string;
    'name'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailThirdPartyListImportRequest {
    'providers'?: Array<EmailThirdPartyProvider>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailThirdPartyProvider {
    'connectUrl'?: string;
    'listCount'?: number;
    'lists'?: Array<EmailThirdPartyList>;
    'logoUrl'?: string;
    'name'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class EmailThirdPartyProvidersResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'providers'?: Array<EmailThirdPartyProvider>;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ErrorResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Experiment {
    'containerId'?: string;
    'durationDays'?: number;
    'endDts'?: string;
    'equalWeighting'?: boolean;
    'experimentType'?: string;
    'id'?: string;
    'name'?: string;
    'notes'?: string;
    'objective'?: string;
    'objectiveParameter'?: string;
    'optimizationType'?: string;
    'sessionCount'?: number;
    'startDts'?: string;
    'status'?: Experiment.StatusEnum;
    'storefrontExperimentOid'?: number;
    'storefrontOid'?: number;
    'uri'?: string;
    'variations'?: Array<ExperimentVariation>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace Experiment {
    enum StatusEnum {
        Running,
        Ended,
        Deleted,
    }
}
export declare class ExperimentResponse {
    'error'?: Error;
    'experiment'?: Experiment;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ExperimentVariation {
    'addToCartCount'?: number;
    'averageDurationSeconds'?: number;
    'averageObjectivePerSession'?: number;
    'averageOrderValue'?: number;
    'bounceCount'?: number;
    'conversionRate'?: number;
    'durationSecondsSum'?: number;
    'eventCount'?: number;
    'initiateCheckoutCount'?: number;
    'orderCount'?: number;
    'originalTrafficPercentage'?: number;
    'pageViewCount'?: number;
    'revenue'?: number;
    'sessionCount'?: number;
    'trafficPercentage'?: number;
    'url'?: string;
    'variationName'?: string;
    'variationNumber'?: number;
    'winner'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ExperimentsResponse {
    'error'?: Error;
    'experiments'?: Array<Experiment>;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class FulfillmentInventory {
    'itemId'?: string;
    'quantity'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class FulfillmentShipment {
    'fulfillmentFee'?: number;
    'orderId'?: string;
    'packageCost'?: number;
    'shippingCost'?: number;
    'trackingNumbers'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GeocodeRequest {
    'address'?: string;
    'city'?: string;
    'countryCode'?: string;
    'postalCode'?: string;
    'state'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GeocodeResponse {
    'error'?: Error;
    'latitude'?: number;
    'longitude'?: number;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Group {
    'groupOid'?: number;
    'name'?: string;
    'notifications'?: Array<Notification>;
    'permissions'?: Array<Permission>;
    'users'?: Array<GroupUserMembership>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GroupResponse {
    'error'?: Error;
    'group'?: Group;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GroupUserMembership {
    'email'?: string;
    'fullName'?: string;
    'login'?: string;
    'member'?: boolean;
    'userId'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class GroupsResponse {
    'error'?: Error;
    'groups'?: Array<Group>;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class HTTPHeader {
    'name'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Item {
    'accounting'?: ItemAccounting;
    'amember'?: ItemAmember;
    'autoOrder'?: ItemAutoOrder;
    'ccbill'?: ItemCCBill;
    'channelPartnerMappings'?: Array<ItemChannelPartnerMapping>;
    'chargeback'?: ItemChargeback;
    'checkout'?: ItemCheckout;
    'content'?: ItemContent;
    'creationDts'?: string;
    'description'?: string;
    'descriptionTranslatedTextInstanceOid'?: number;
    'digitalDelivery'?: ItemDigitalDelivery;
    'ebay'?: ItemEbay;
    'emailNotifications'?: ItemEmailNotifications;
    'enrollment123'?: ItemEnrollment123;
    'giftCertificate'?: ItemGiftCertificate;
    'googleProductSearch'?: ItemGoogleProductSearch;
    'identifiers'?: ItemIdentifiers;
    'inactive'?: boolean;
    'instantPaymentNotifications'?: ItemInstantPaymentNotifications;
    'internal'?: ItemInternal;
    'kit'?: boolean;
    'kitComponentOnly'?: boolean;
    'kitDefinition'?: ItemKitDefinition;
    'lastModifiedDts'?: string;
    'merchantId'?: string;
    'merchantItemId'?: string;
    'merchantItemOid'?: number;
    'options'?: Array<ItemOption>;
    'parentCategoryId'?: number;
    'parentCategoryPath'?: string;
    'paymentProcessing'?: ItemPaymentProcessing;
    'physical'?: ItemPhysical;
    'pricing'?: ItemPricing;
    'properties'?: Array<ItemProperty>;
    'realtimePricing'?: ItemRealtimePricing;
    'recommendReplenishmentDays'?: number;
    'related'?: ItemRelated;
    'reporting'?: ItemReporting;
    'restriction'?: ItemRestriction;
    'revguard'?: ItemRevguard;
    'reviews'?: ItemReviews;
    'salesforce'?: ItemSalesforce;
    'shipping'?: ItemShipping;
    'tags'?: ItemTags;
    'tax'?: ItemTax;
    'thirdPartyEmailMarketing'?: Array<ItemThirdPartyEmailMarketing>;
    'variantItems'?: Array<ItemVariantItem>;
    'variations'?: Array<ItemVariation>;
    'wishlistMember'?: ItemWishlistMember;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemAccounting {
    'accountingCode'?: string;
    'qbClass'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemAmember {
    'amemberPaymentDurationDays'?: number;
    'amemberProductId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemAutoOrder {
    'authFutureAmount'?: number;
    'authTestAmount'?: number;
    'autoOrderCancelItemId'?: string;
    'autoOrderCancelItemOid'?: number;
    'autoOrderDowngradeItems'?: Array<string>;
    'autoOrderPaused'?: boolean;
    'autoOrderSchedules'?: Array<string>;
    'autoOrderUpgradeItems'?: Array<string>;
    'autoOrderUpsell'?: boolean;
    'autoOrderUpsellNoEasyCancel'?: boolean;
    'autoOrderUpsellOnePerCustomer'?: boolean;
    'autoOrderable'?: boolean;
    'cancelOtherAutoOrders'?: boolean;
    'freeShippingAutoOrder'?: boolean;
    'refundOtherAutoOrders'?: boolean;
    'steps'?: Array<ItemAutoOrderStep>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemAutoOrderStep {
    'arbitraryScheduleDays'?: number;
    'arbitraryUnitCost'?: number;
    'arbitraryUnitCostSchedules'?: Array<ItemAutoOrderStepArbitraryUnitCostSchedule>;
    'grandfatherPricing'?: Array<ItemAutoOrderStepGrandfatherPricing>;
    'managedBy'?: string;
    'pauseDays'?: number;
    'pauseUntilDate'?: string;
    'preshipmentNoticeDays'?: number;
    'recurringMerchantItemId'?: string;
    'recurringMerchantItemOid'?: number;
    'repeatCount'?: number;
    'schedule'?: string;
    'subscribeEmailListName'?: string;
    'subscribeEmailListOid'?: number;
    'type'?: ItemAutoOrderStep.TypeEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace ItemAutoOrderStep {
    enum TypeEnum {
        Item,
        Pause,
    }
}
export declare class ItemAutoOrderStepArbitraryUnitCostSchedule {
    'arbitraryUnitCost'?: number;
    'retryDays'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemAutoOrderStepGrandfatherPricing {
    'onOrBeforeDate'?: string;
    'unitCost'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemCCBill {
    'ccbillAllowedCurrencies'?: string;
    'ccbillAllowedTypes'?: string;
    'ccbillCurrencyCode'?: string;
    'ccbillFormName'?: string;
    'ccbillSubaccountId'?: string;
    'ccbillSubscriptionTypeId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemChannelPartnerMapping {
    'barcodeUa'?: string;
    'barcodeUc'?: string;
    'barcodeUi'?: string;
    'barcodeUk'?: string;
    'buyerCatalogNumber'?: string;
    'buyerDpci'?: string;
    'buyerItemNumber'?: string;
    'channelPartnerCode'?: string;
    'channelPartnerOid'?: number;
    'fromItemId'?: string;
    'fromSku'?: string;
    'mutuallyDefinedNumber'?: string;
    'quantityRatioCp'?: number;
    'quantityRatioUc'?: number;
    'sku'?: string;
    'unitOfMeasure'?: string;
    'vendorNumber'?: string;
    'vendorStyleNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemChargeback {
    'addendums'?: Array<ItemChargebackAddendum>;
    'adjustmentRequests'?: Array<ItemChargebackAdjustmentRequest>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemChargebackAddendum {
    'chargebackAddendumOid'?: number;
    'description'?: string;
    'fileSize'?: number;
    'pages'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemChargebackAdjustmentRequest {
    'chargebackAdjustmentRequestOid'?: number;
    'description'?: string;
    'reasonCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemCheckout {
    'suppressBuysafe'?: boolean;
    'terms'?: string;
    'termsTranslatedTextInstanceOid'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemContent {
    'assignments'?: Array<ItemContentAssignment>;
    'attributes'?: Array<ItemContentAttribute>;
    'customThankYouUrl'?: string;
    'excludeFromSearch'?: boolean;
    'excludeFromTopSellers'?: boolean;
    'extendedDescription'?: string;
    'extendedDescriptionTranslatedTextInstanceOid'?: number;
    'multimedia'?: Array<ItemContentMultimedia>;
    'newItem'?: boolean;
    'newItemEnd'?: string;
    'newItemStart'?: string;
    'viewUrl'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemContentAssignment {
    'groupOid'?: number;
    'groupPath'?: string;
    'host'?: string;
    'sortOrder'?: number;
    'urlPart'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemContentAttribute {
    'name'?: string;
    'translatedTextInstanceOid'?: number;
    'type'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemContentMultimedia {
    'cloudUrl'?: string;
    'cloudUrlExpiration'?: string;
    'code'?: string;
    'description'?: string;
    'excludeFromGallery'?: boolean;
    'fileName'?: string;
    'height'?: number;
    'merchantItemMultimediaOid'?: number;
    'orphan'?: boolean;
    'placeholder'?: boolean;
    'tempMultimediaOid'?: number;
    'thumbnails'?: Array<ItemContentMultimediaThumbnail>;
    'type'?: ItemContentMultimedia.TypeEnum;
    'url'?: string;
    'width'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace ItemContentMultimedia {
    enum TypeEnum {
        Image,
        PDF,
        Text,
        Unknown,
        Video,
    }
}
export declare class ItemContentMultimediaThumbnail {
    'height'?: number;
    'httpUrl'?: string;
    'httpsUrl'?: string;
    'pngFormat'?: boolean;
    'square'?: boolean;
    'width'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemDigitalDelivery {
    'activationCodeDescription'?: string;
    'activationCodeLowWarning'?: number;
    'activationCodeRealtimeUrl'?: string;
    'activationCodeSharedSecret'?: string;
    'activationCodeType'?: string;
    'digitalItems'?: Array<ItemDigitalItem>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemDigitalItem {
    'creationDts'?: string;
    'description'?: string;
    'fileSize'?: number;
    'mimeType'?: string;
    'originalFilename'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemEbay {
    'active'?: boolean;
    'categoryId'?: number;
    'categorySpecifics'?: Array<ItemEbayCategorySpecific>;
    'conditionDescription'?: string;
    'conditionId'?: number;
    'consecutiveFailures'?: number;
    'customCategory1'?: number;
    'customCategory2'?: number;
    'dispatchTimeMax'?: number;
    'domestic1AdditionalCost'?: number;
    'domestic1FirstCost'?: number;
    'domestic2AdditionalCost'?: number;
    'domestic2FirstCost'?: number;
    'domestic3AdditionalCost'?: number;
    'domestic3FirstCost'?: number;
    'domestic4AdditionalCost'?: number;
    'domestic4FirstCost'?: number;
    'ebayAuctionId'?: string;
    'ebaySpecificInventory'?: number;
    'ebayTemplateName'?: string;
    'ebayTemplateOid'?: number;
    'endTime'?: string;
    'freeShipping'?: boolean;
    'freeShippingMethod'?: string;
    'international1AdditionalCost'?: number;
    'international1FirstCost'?: number;
    'international2AdditionalCost'?: number;
    'international2FirstCost'?: number;
    'international3AdditionalCost'?: number;
    'international3FirstCost'?: number;
    'international4AdditionalCost'?: number;
    'international4FirstCost'?: number;
    'lastStatusDts'?: string;
    'listedDispatchTimeMax'?: number;
    'listedEbayTemplateOid'?: number;
    'listingDts'?: string;
    'listingDuration'?: string;
    'listingPrice'?: number;
    'listingPriceOverride'?: number;
    'listingType'?: string;
    'marketplaceAnalysis'?: ItemEbayMarketPlaceAnalysis;
    'marketplaceAnalysisPerform'?: boolean;
    'marketplaceFinalValueFeePercentage'?: number;
    'marketplaceLastCheckDts'?: string;
    'marketplaceLowest'?: boolean;
    'marketplaceMapViolation'?: boolean;
    'marketplaceMultiplier'?: number;
    'marketplaceOtherPrice'?: number;
    'marketplaceOtherSeller'?: string;
    'marketplaceOtherShipping'?: number;
    'marketplaceOtherTotal'?: number;
    'marketplaceOurAdditionalProfitPotential'?: number;
    'marketplaceOurPrice'?: number;
    'marketplaceOurProfit'?: number;
    'marketplaceOurShipping'?: number;
    'marketplaceOurTotal'?: number;
    'marketplaceOverhead'?: number;
    'marketplaceProfitable'?: boolean;
    'nextAttemptDts'?: string;
    'nextListingDuration'?: string;
    'noPromotionalShipping'?: boolean;
    'packagingHandlingCosts'?: number;
    'previousEbayAuctionId'?: string;
    'quantity'?: number;
    'reservePrice'?: number;
    'sendDimensionsAndWeight'?: string;
    'startTime'?: string;
    'status'?: string;
    'targetDispatchTimeMax'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemEbayCategorySpecific {
    'name'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemEbayMarketListing {
    'auctionId'?: string;
    'price'?: number;
    'seller'?: string;
    'shipping'?: number;
    'total'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemEbayMarketPlaceAnalysis {
    'adjustedPrice'?: number;
    'adjustedShipping'?: number;
    'adjustedTotal'?: number;
    'cogs'?: number;
    'finalValueFee'?: number;
    'minimumAdvertisedPrice'?: number;
    'otherListings'?: Array<ItemEbayMarketListing>;
    'ourListing'?: ItemEbayMarketListing;
    'overhead'?: number;
    'profitPotential'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemEmailNotifications {
    'skipReceipt'?: boolean;
    'skipShipmentNotification'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemEnrollment123 {
    'enrollment123ProductCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemGiftCertificate {
    'giftCertificate'?: boolean;
    'giftCertificateExpirationDays'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemGoogleProductSearch {
    'adwordsGrouping'?: string;
    'adwordsLabel1'?: string;
    'adwordsLabel2'?: string;
    'adwordsLabel3'?: string;
    'adwordsLabel4'?: string;
    'adwordsLabel5'?: string;
    'ageGroup'?: string;
    'availableAtPhysicalStore'?: boolean;
    'bookAuthor'?: string;
    'bookFormat'?: string;
    'bookIsbn'?: string;
    'bookPublisher'?: string;
    'categoryDescription'?: string;
    'color'?: string;
    'condition'?: string;
    'customLabel0'?: string;
    'customLabel1'?: string;
    'customLabel2'?: string;
    'customLabel3'?: string;
    'customLabel4'?: string;
    'gender'?: string;
    'googleProductCategory'?: string;
    'musicArtist'?: string;
    'musicFormat'?: string;
    'musicReleaseDate'?: string;
    'omitFromFeed'?: boolean;
    'productType'?: string;
    'promotionId1'?: string;
    'promotionId10'?: string;
    'promotionId2'?: string;
    'promotionId3'?: string;
    'promotionId4'?: string;
    'promotionId5'?: string;
    'promotionId6'?: string;
    'promotionId7'?: string;
    'promotionId8'?: string;
    'promotionId9'?: string;
    'searchDts'?: string;
    'searchLowestPrice'?: number;
    'searchLowestUrl'?: string;
    'searchPosition'?: number;
    'shippingLabel'?: string;
    'size'?: string;
    'videoDirector'?: string;
    'videoFormat'?: string;
    'videoRating'?: string;
    'videoReleaseDate'?: string;
    'videoStarring'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemIdentifiers {
    'barcode'?: string;
    'manufacturerName'?: string;
    'manufacturerSku'?: string;
    'unspsc'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemInstantPaymentNotification {
    'postOperation'?: boolean;
    'successfulResponseText'?: string;
    'url'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemInstantPaymentNotifications {
    'notifications'?: Array<ItemInstantPaymentNotification>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemInternal {
    'memo'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemKitComponent {
    'componentCost'?: number;
    'componentDescription'?: string;
    'componentMerchantItemId'?: string;
    'componentMerchantItemOid'?: number;
    'quantity'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemKitDefinition {
    'components'?: Array<ItemKitComponent>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemOption {
    'costIfSpecified'?: number;
    'costPerLetter'?: number;
    'costPerLine'?: number;
    'ignoreIfDefault'?: boolean;
    'label'?: string;
    'labelTranslatedTextInstanceOid'?: number;
    'name'?: string;
    'nameTranslatedTextInstanceOid'?: number;
    'oneTimeFee'?: boolean;
    'optionOid'?: number;
    'required'?: boolean;
    'systemOption'?: boolean;
    'type'?: ItemOption.TypeEnum;
    'values'?: Array<ItemOptionValue>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace ItemOption {
    enum TypeEnum {
        Dropdown,
        FileAttachment,
        Fixed,
        Hidden,
        Multiline,
        Radio,
        Single,
    }
}
export declare class ItemOptionValue {
    'additionalDimensionApplication'?: ItemOptionValue.AdditionalDimensionApplicationEnum;
    'additionalItems'?: Array<ItemOptionValueAdditionalItem>;
    'costChange'?: number;
    'defaultValue'?: boolean;
    'digitalItems'?: Array<ItemOptionValueDigitalItem>;
    'height'?: Distance;
    'length'?: Distance;
    'merchantItemMultimediaOid'?: number;
    'optionValueOid'?: number;
    'percentCostChange'?: number;
    'translatedTextInstanceOid'?: number;
    'value'?: string;
    'weightChange'?: Weight;
    'weightChangePercent'?: number;
    'width'?: Distance;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace ItemOptionValue {
    enum AdditionalDimensionApplicationEnum {
        None,
        SetItemTo,
        AddItem,
    }
}
export declare class ItemOptionValueAdditionalItem {
    'additionalMerchantItemId'?: string;
    'additionalMerchantItemOid'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemOptionValueDigitalItem {
    'digitalItemOid'?: number;
    'originalFilename'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemPaymentProcessing {
    'blockPrepaid'?: boolean;
    'creditCardTransactionType'?: string;
    'noRealtimeCharge'?: boolean;
    'paymentMethodValidity'?: Array<string>;
    'rotatingTransactionGatewayCodes'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemPhysical {
    'height'?: Distance;
    'length'?: Distance;
    'weight'?: Weight;
    'width'?: Distance;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemPricing {
    'allowArbitraryCost'?: boolean;
    'arbitraryCostVelocityCode'?: string;
    'autoOrderCost'?: number;
    'automaticPricingTierName'?: string;
    'automaticPricingTierOid'?: number;
    'cogs'?: number;
    'cost'?: number;
    'currencyCode'?: string;
    'manufacturerSuggestedRetailPrice'?: number;
    'maximumArbitraryCost'?: number;
    'minimumAdvertisedPrice'?: number;
    'minimumArbitraryCost'?: number;
    'mixAndMatchGroup'?: string;
    'mixAndMatchGroupOid'?: number;
    'saleCost'?: number;
    'saleEnd'?: string;
    'saleStart'?: string;
    'tiers'?: Array<ItemPricingTier>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemPricingTier {
    'defaultTier'?: boolean;
    'discounts'?: Array<ItemPricingTierDiscount>;
    'limit'?: ItemPricingTierLimit;
    'name'?: string;
    'pricingTierOid'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemPricingTierDiscount {
    'cost'?: number;
    'quantity'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemPricingTierLimit {
    'cumulativeOrderLimit'?: number;
    'individualOrderLimit'?: number;
    'multipleQuantity'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemProperty {
    'expirationDts'?: string;
    'name'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemRealtimePricing {
    'realtimePricingParameter'?: string;
    'realtimePricingProvider'?: string;
    'realtimePricingProviderOid'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemRelated {
    'noSystemCalculatedRelatedItems'?: boolean;
    'notRelatable'?: boolean;
    'relatedItems'?: Array<ItemRelatedItem>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemRelatedItem {
    'relatedMerchantItemId'?: string;
    'relatedMerchantItemOid'?: number;
    'type'?: ItemRelatedItem.TypeEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace ItemRelatedItem {
    enum TypeEnum {
        System,
        UserDefined,
    }
}
export declare class ItemReporting {
    'reportAsUpsell'?: boolean;
    'reportPickableQuantities'?: Array<number>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemResponse {
    'error'?: Error;
    'item'?: Item;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemRestriction {
    'excludeCoupon'?: boolean;
    'excludeFromFreePromotion'?: boolean;
    'items'?: Array<ItemRestrictionItem>;
    'maximumQuantity'?: number;
    'minimumQuantity'?: number;
    'multipleQuantity'?: number;
    'onePerCustomer'?: boolean;
    'purchaseSeparately'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemRestrictionItem {
    'restrictMerchantItemId'?: string;
    'restrictMerchantItemOid'?: number;
    'type'?: ItemRestrictionItem.TypeEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace ItemRestrictionItem {
    enum TypeEnum {
        CanNotBePurchasedWith,
        CanOnlyBePurchasedWith,
        MustBePurchasedWith,
    }
}
export declare class ItemRevguard {
    'revguardCanceledCsrPromptGroup'?: number;
    'revguardCanceledIvrPromptGroup'?: number;
    'revguardCanceledWebPromptGroup'?: number;
    'revguardClientBrand'?: number;
    'revguardCsrPromptGroup'?: number;
    'revguardIvrPromptGroup'?: number;
    'revguardWebPromptGroup'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemReviews {
    'hasApprovedReview'?: boolean;
    'hasReview'?: boolean;
    'reviewCount'?: number;
    'reviewOverall'?: number;
    'reviewTemplateName'?: string;
    'reviewTemplateOid'?: number;
    'reviewable'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemSalesforce {
    'sfdcPricebookId'?: string;
    'sfdcProductId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemShipping {
    'allowBackOrder'?: boolean;
    'amazonFba'?: boolean;
    'caseInnerPacks'?: number;
    'caseUnits'?: number;
    'cases'?: Array<ItemShippingCase>;
    'collectSerialNumbers'?: boolean;
    'countryCodeOfOrigin'?: string;
    'customsDescription'?: string;
    'customsValue'?: number;
    'deliveryOnFriday'?: boolean;
    'deliveryOnMonday'?: boolean;
    'deliveryOnSaturday'?: boolean;
    'deliveryOnSunday'?: boolean;
    'deliveryOnThursday'?: boolean;
    'deliveryOnTuesday'?: boolean;
    'deliveryOnWednesday'?: boolean;
    'destinationMarkups'?: Array<ItemShippingDestinationMarkup>;
    'destinationRestrictions'?: Array<ItemShippingDestinationRestriction>;
    'distributionCenters'?: Array<ItemShippingDistributionCenter>;
    'eta'?: string;
    'freeShipping'?: boolean;
    'freightClass'?: string;
    'hazmat'?: boolean;
    'madeToOrder'?: boolean;
    'madeToOrderLeadTime'?: number;
    'maxDaysTimeInTransit'?: number;
    'methods'?: Array<ItemShippingMethod>;
    'noShippingDiscount'?: boolean;
    'packageRequirements'?: Array<ItemShippingPackageRequirement>;
    'perishableClassName'?: string;
    'perishableClassOid'?: number;
    'preorder'?: boolean;
    'requireDeliveryDate'?: boolean;
    'restrictShipmentOnFriday'?: boolean;
    'restrictShipmentOnMonday'?: boolean;
    'restrictShipmentOnSaturday'?: boolean;
    'restrictShipmentOnSunday'?: boolean;
    'restrictShipmentOnThursday'?: boolean;
    'restrictShipmentOnTuesday'?: boolean;
    'restrictShipmentOnWednesday'?: boolean;
    'shipSeparately'?: boolean;
    'shipSeparatelyAdditionalWeight'?: Weight;
    'shipSeparatelyHeight'?: Distance;
    'shipSeparatelyLength'?: Distance;
    'shipSeparatelyPackageSpecialType'?: string;
    'shipSeparatelyWidth'?: Distance;
    'specialProductType'?: string;
    'trackInventory'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemShippingCase {
    'caseLabel'?: string;
    'caseMerchantItemId'?: string;
    'caseMerchantItemOid'?: number;
    'quantity'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemShippingDestinationMarkup {
    'countryCode'?: string;
    'flatFee'?: number;
    'perItem'?: number;
    'postalCode'?: string;
    'shippingMethod'?: string;
    'state'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemShippingDestinationRestriction {
    'countryCode'?: string;
    'state'?: string;
    'validity'?: ItemShippingDestinationRestriction.ValidityEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace ItemShippingDestinationRestriction {
    enum ValidityEnum {
        ValidOnlyFor,
        InvalidFor,
    }
}
export declare class ItemShippingDistributionCenter {
    'allocatedToPlacedOrders'?: number;
    'allocatedToShoppingCarts'?: number;
    'availableToAllocate'?: number;
    'desiredInventoryLevel'?: number;
    'distributionCenterCode'?: string;
    'distributionCenterOid'?: number;
    'eta'?: string;
    'handles'?: boolean;
    'inventoryLevel'?: number;
    'maximumBackorder'?: number;
    'reorderInventoryLevel'?: number;
    'sku'?: string;
    'stockPickingLocation'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemShippingMethod {
    'cost'?: number;
    'eachAdditionalItemMarkup'?: number;
    'filterToIfAvailable'?: boolean;
    'firstItemMarkup'?: number;
    'fixedShippingCost'?: number;
    'flatFeeMarkup'?: number;
    'freeShipping'?: boolean;
    'perItemFeeMarkup'?: number;
    'percentageMarkup'?: number;
    'percentageOfItemMarkup'?: number;
    'relaxRestrictionsOnUpsell'?: boolean;
    'shippingMethod'?: string;
    'shippingMethodOid'?: number;
    'shippingMethodValidity'?: ItemShippingMethod.ShippingMethodValidityEnum;
    'signatureRequired'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace ItemShippingMethod {
    enum ShippingMethodValidityEnum {
        InvalidFor,
        ValidFor,
        ValidOnlyFor,
    }
}
export declare class ItemShippingPackageRequirement {
    'packageName'?: string;
    'packageOid'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemTag {
    'tagType'?: ItemTag.TagTypeEnum;
    'tagValue'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace ItemTag {
    enum TagTypeEnum {
        Item,
        Order,
        Customer,
    }
}
export declare class ItemTags {
    'tags'?: Array<ItemTag>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemTax {
    'exemptions'?: Array<ItemTaxExemption>;
    'taxFree'?: boolean;
    'taxableCost'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemTaxExemption {
    'city'?: string;
    'countryCode'?: string;
    'county'?: string;
    'postalCode'?: string;
    'stateCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemThirdPartyEmailMarketing {
    'addTags'?: Array<string>;
    'providerName'?: ItemThirdPartyEmailMarketing.ProviderNameEnum;
    'removeTags'?: Array<string>;
    'subscribeLists'?: Array<string>;
    'unsubscribeLists'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace ItemThirdPartyEmailMarketing {
    enum ProviderNameEnum {
        ActiveCampaign,
        AWeber,
        CampaignMonitor,
        ConstantContact,
        Emma,
        GetResponse,
        IContact,
        Klaviyo,
        Lyris,
        LyrisHQ,
        MailChimp,
        SilverPop,
    }
}
export declare class ItemVariantItem {
    'description'?: string;
    'merchantItemMultimediaOid'?: number;
    'variantMerchantItemId'?: string;
    'variantMerchantItemOid'?: number;
    'variationOptions'?: Array<string>;
    'variations'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemVariation {
    'defaultText'?: string;
    'defaultTextTranslatedTextInstanceOid'?: number;
    'name'?: string;
    'nameTranslatedTextInstanceOid'?: number;
    'options'?: Array<ItemVariationOption>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemVariationOption {
    'defaultOption'?: boolean;
    'merchantItemMultimediaOid'?: number;
    'translatedTextInstanceOid'?: number;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemWishlistMember {
    'wishlistMemberInstanceDescription'?: string;
    'wishlistMemberInstanceOid'?: number;
    'wishlistMemberSku'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemsRequest {
    'items'?: Array<Item>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ItemsResponse {
    'error'?: Error;
    'items'?: Array<Item>;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class KeyValue {
    'description'?: string;
    'key'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class LibraryFilterValues {
    'categories'?: Array<string>;
    'industries'?: Array<string>;
    'styles'?: Array<string>;
    'types'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class LibraryFilterValuesResponse {
    'error'?: Error;
    'filterValues'?: LibraryFilterValues;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class LibraryItem {
    'assets'?: Array<LibraryItemAsset>;
    'categories'?: Array<string>;
    'content'?: string;
    'contentType'?: string;
    'description'?: string;
    'industries'?: Array<string>;
    'libraryItemOid'?: number;
    'merchantId'?: string;
    'myPurchasedVersion'?: number;
    'originalObjectId'?: string;
    'price'?: number;
    'priceFormatted'?: string;
    'published'?: boolean;
    'publishedDts'?: any;
    'publishedFromLibraryItemOid'?: number;
    'publishedVersion'?: number;
    'purchased'?: boolean;
    'purchasedFromLibraryItemOid'?: number;
    'purchasedVersion'?: number;
    'rejected'?: boolean;
    'rejectedReason'?: string;
    'reviewed'?: boolean;
    'reviewedDts'?: any;
    'screenshots'?: Array<LibraryItemScreenshot>;
    'shareWithAccounts'?: Array<LibraryItemAccount>;
    'shareWithOtherEmails'?: Array<LibraryItemEmail>;
    'shared'?: boolean;
    'source'?: boolean;
    'sourceToLibraryItemOid'?: number;
    'sourceVersion'?: number;
    'style'?: string;
    'timesPurchased'?: number;
    'title'?: string;
    'type'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class LibraryItemAccount {
    'libraryItemAccountOid'?: number;
    'libraryItemOid'?: number;
    'otherMerchantId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class LibraryItemAsset {
    'mimeType'?: string;
    'url'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class LibraryItemEmail {
    'email'?: string;
    'libraryItemEmailOid'?: number;
    'libraryItemOid'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class LibraryItemQuery {
    'category'?: string;
    'contentType'?: string;
    'description'?: string;
    'industry'?: string;
    'priceHigh'?: number;
    'priceLow'?: number;
    'publishedDtsBegin'?: string;
    'publishedDtsEnd'?: string;
    'sourceOfPublished'?: boolean;
    'style'?: string;
    'title'?: string;
    'type'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class LibraryItemResponse {
    'error'?: Error;
    'libraryItem'?: LibraryItem;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class LibraryItemScreenshot {
    'defaultUrl'?: boolean;
    'screenshotUrl'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class LibraryItemsResponse {
    'error'?: Error;
    'items'?: Array<LibraryItem>;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class LinkedAccount {
    'company'?: string;
    'merchantId'?: string;
    'selected'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ListSegmentMembership {
    'name'?: string;
    'type'?: string;
    'uuid'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class LookupRequest {
    'category'?: string;
    'matches'?: string;
    'maxHits'?: number;
    'storefrontOid'?: number;
    'subcategory'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class LookupResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'values'?: Array<KeyValue>;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Metric {
    'allTime'?: number;
    'allTimeFormatted'?: string;
    'last30'?: number;
    'last30Formatted'?: string;
    'name'?: string;
    'prior30'?: number;
    'prior30Formatted'?: string;
    'type'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ModelError {
    'developerMessage'?: string;
    'errorCode'?: string;
    'moreInfo'?: string;
    'userMessage'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Notification {
    'canFilterByDistributionCenters'?: boolean;
    'canIncludeAffiliate'?: boolean;
    'canIncludeOrder'?: boolean;
    'canIncludeOrderPlainText'?: boolean;
    'distributionCenterFilters'?: Array<string>;
    'includeAffiliate'?: boolean;
    'includeOrder'?: boolean;
    'includeOrderPlainText'?: boolean;
    'name'?: string;
    'notificationGroup'?: string;
    'selected'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OauthRevokeSuccessResponse {
    'message'?: string;
    'successful'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OauthTokenResponse {
    'accessToken'?: string;
    'error'?: string;
    'errorDescription'?: string;
    'errorUri'?: string;
    'expiresIn'?: string;
    'refreshToken'?: string;
    'scope'?: string;
    'tokenType'?: OauthTokenResponse.TokenTypeEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace OauthTokenResponse {
    enum TokenTypeEnum {
        Bearer,
    }
}
export declare class Order {
    'affiliates'?: Array<OrderAffiliate>;
    'autoOrder'?: OrderAutoOrder;
    'billing'?: OrderBilling;
    'buysafe'?: OrderBuysafe;
    'channelPartner'?: OrderChannelPartner;
    'checkout'?: OrderCheckout;
    'coupons'?: Array<OrderCoupon>;
    'creationDts'?: string;
    'currencyCode'?: string;
    'currentStage'?: Order.CurrentStageEnum;
    'customerProfile'?: Customer;
    'digitalOrder'?: OrderDigitalOrder;
    'edi'?: OrderEdi;
    'exchangeRate'?: number;
    'fraudScore'?: OrderFraudScore;
    'gift'?: OrderGift;
    'giftCertificate'?: OrderGiftCertificate;
    'internal'?: OrderInternal;
    'items'?: Array<OrderItem>;
    'languageIsoCode'?: string;
    'linkedShipment'?: OrderLinkedShipment;
    'marketing'?: OrderMarketing;
    'merchantId'?: string;
    'orderId'?: string;
    'payment'?: OrderPayment;
    'properties'?: Array<OrderProperty>;
    'quote'?: OrderQuote;
    'refundDts'?: string;
    'rejectDts'?: string;
    'salesforce'?: OrderSalesforce;
    'shipping'?: OrderShipping;
    'summary'?: OrderSummary;
    'tags'?: Array<OrderTag>;
    'taxes'?: OrderTaxes;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace Order {
    enum CurrentStageEnum {
        AccountsReceivable,
        PendingClearance,
        FraudReview,
        Rejected,
        ShippingDepartment,
        CompletedOrder,
        QuoteRequest,
        QuoteSent,
        LeastCostRouting,
        Unknown,
        PreOrdered,
    }
}
export declare class OrderAffiliate {
    'affiliateOid'?: number;
    'ledgerEntries'?: Array<OrderAffiliateLedger>;
    'subId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderAffiliateLedger {
    'assignedByUser'?: string;
    'itemId'?: string;
    'tierNumber'?: number;
    'transactionAmount'?: number;
    'transactionAmountPaid'?: number;
    'transactionDts'?: string;
    'transactionMemo'?: string;
    'transactionPercentage'?: number;
    'transactionState'?: OrderAffiliateLedger.TransactionStateEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace OrderAffiliateLedger {
    enum TransactionStateEnum {
        Pending,
        Posted,
        Approved,
        Paid,
        Rejected,
        PartiallyPaid,
    }
}
export declare class OrderAutoOrder {
    'autoOrderCode'?: string;
    'autoOrderOid'?: number;
    'cancelAfterNextXOrders'?: number;
    'cancelDowngrade'?: boolean;
    'cancelUpgrade'?: boolean;
    'canceledByUser'?: string;
    'canceledDts'?: string;
    'completed'?: boolean;
    'creditCardAttempt'?: number;
    'disabledDts'?: string;
    'enabled'?: boolean;
    'failureReason'?: string;
    'items'?: Array<AutoOrderItem>;
    'nextAttempt'?: string;
    'originalOrderId'?: string;
    'overrideAffiliateId'?: number;
    'rebillOrders'?: Array<Order>;
    'rotatingTransactionGatewayCode'?: string;
    'status'?: OrderAutoOrder.StatusEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace OrderAutoOrder {
    enum StatusEnum {
        Active,
        Canceled,
        Disabled,
    }
}
export declare class OrderBilling {
    'address1'?: string;
    'address2'?: string;
    'ccEmails'?: Array<string>;
    'city'?: string;
    'company'?: string;
    'countryCode'?: string;
    'dayPhone'?: string;
    'dayPhoneE164'?: string;
    'email'?: string;
    'eveningPhone'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'postalCode'?: string;
    'stateRegion'?: string;
    'title'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderBuysafe {
    'buysafeBondAvailable'?: boolean;
    'buysafeBondCost'?: Currency;
    'buysafeBondFree'?: boolean;
    'buysafeBondRefunded'?: Currency;
    'buysafeBondWanted'?: boolean;
    'buysafeShoppingCartId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderByTokenQuery {
    'orderToken'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderChannelPartner {
    'autoApprovePurchaseOrder'?: boolean;
    'channelPartnerCode'?: string;
    'channelPartnerData'?: string;
    'channelPartnerOid'?: number;
    'channelPartnerOrderId'?: string;
    'noRealtimePaymentProcessing'?: boolean;
    'skipPaymentProcessing'?: boolean;
    'storeCompleted'?: boolean;
    'storeIfPaymentDeclines'?: boolean;
    'treatWarningsAsErrors'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderCheckout {
    'comments'?: string;
    'customField1'?: string;
    'customField2'?: string;
    'customField3'?: string;
    'customField4'?: string;
    'customField5'?: string;
    'customField6'?: string;
    'customField7'?: string;
    'customerIpAddress'?: string;
    'screenBrandingThemeCode'?: string;
    'storefrontHostName'?: string;
    'upsellPathCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderCoupon {
    'accountingCode'?: string;
    'automaticallyApplied'?: boolean;
    'baseCouponCode'?: string;
    'couponCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderDigitalItem {
    'fileSize'?: number;
    'lastDownload'?: string;
    'lastDownloadIpAddress'?: string;
    'originalFilename'?: string;
    'productCode'?: string;
    'productDescription'?: string;
    'remainingDownloads'?: number;
    'url'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderDigitalOrder {
    'creationDts'?: string;
    'expirationDts'?: string;
    'items'?: Array<OrderDigitalItem>;
    'url'?: string;
    'urlId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderEdi {
    'billToEdiCode'?: string;
    'ediDepartment'?: string;
    'ediInternalVendorNumber'?: string;
    'shipToEdiCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderFormat {
    'context'?: string;
    'dontLinkEmailToSearch'?: boolean;
    'emailAsLink'?: boolean;
    'filterDistributionCenterOid'?: number;
    'filterToItemsInContactOid'?: number;
    'format'?: OrderFormat.FormatEnum;
    'hideBillToAddress'?: boolean;
    'hidePriceInformation'?: boolean;
    'linkFileAttachments'?: boolean;
    'showContactInfo'?: boolean;
    'showInMerchantCurrency'?: boolean;
    'showInternalInformation'?: boolean;
    'showMerchantNotes'?: boolean;
    'showNonSensitivePaymentInfo'?: boolean;
    'showPaymentInfo'?: boolean;
    'translate'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace OrderFormat {
    enum FormatEnum {
        Text,
        Div,
        Table,
        Email,
    }
}
export declare class OrderFormatResponse {
    'cssLinks'?: Array<string>;
    'formattedResult'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderFraudScore {
    'anonymousProxy'?: boolean;
    'binMatch'?: OrderFraudScore.BinMatchEnum;
    'carderEmail'?: boolean;
    'countryCode'?: string;
    'countryMatch'?: boolean;
    'customerPhoneInBillingLocation'?: string;
    'distanceKm'?: number;
    'freeEmail'?: boolean;
    'highRiskCountry'?: boolean;
    'ipCity'?: string;
    'ipIsp'?: string;
    'ipLatitude'?: string;
    'ipLongitude'?: string;
    'ipOrg'?: string;
    'ipRegion'?: string;
    'proxyScore'?: number;
    'score'?: number;
    'shipForwarder'?: boolean;
    'spamScore'?: number;
    'transparentProxy'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace OrderFraudScore {
    enum BinMatchEnum {
        NA,
        No,
        NotFound,
        Yes,
    }
}
export declare class OrderGift {
    'gift'?: boolean;
    'giftCharge'?: Currency;
    'giftChargeAccountingCode'?: string;
    'giftChargeRefunded'?: Currency;
    'giftEmail'?: string;
    'giftMessage'?: string;
    'giftWrapAccountingCode'?: string;
    'giftWrapCost'?: Currency;
    'giftWrapRefunded'?: Currency;
    'giftWrapTitle'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderGiftCertificate {
    'giftCertificateAmount'?: Currency;
    'giftCertificateCode'?: string;
    'giftCertificateOid'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderInternal {
    'exportedToAccounting'?: boolean;
    'merchantNotes'?: string;
    'placedByUser'?: string;
    'refundByUser'?: string;
    'salesRepCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderItem {
    'accountingCode'?: string;
    'activationCodes'?: Array<string>;
    'arbitraryUnitCost'?: Currency;
    'autoOrderLastRebillDts'?: string;
    'autoOrderSchedule'?: string;
    'barcode'?: string;
    'channelPartnerItemId'?: string;
    'cogs'?: number;
    'componentUnitValue'?: number;
    'cost'?: Currency;
    'countryCodeOfOrigin'?: string;
    'customsDescription'?: string;
    'description'?: string;
    'discount'?: Currency;
    'discountQuantity'?: number;
    'discountShippingWeight'?: Weight;
    'distributionCenterCode'?: string;
    'edi'?: OrderItemEdi;
    'excludeCoupon'?: boolean;
    'freeShipping'?: boolean;
    'hazmat'?: boolean;
    'height'?: Distance;
    'itemReferenceOid'?: number;
    'kit'?: boolean;
    'kitComponent'?: boolean;
    'length'?: Distance;
    'manufacturerSku'?: string;
    'maxDaysTimeInTransit'?: number;
    'merchantItemId'?: string;
    'mixAndMatchGroupName'?: string;
    'mixAndMatchGroupOid'?: number;
    'noShippingDiscount'?: boolean;
    'options'?: Array<OrderItemOption>;
    'packedByUser'?: string;
    'perishableClass'?: string;
    'pricingTierName'?: string;
    'properties'?: Array<OrderItemProperty>;
    'quantity'?: number;
    'quantityRefunded'?: number;
    'quickbooksClass'?: string;
    'shipSeparately'?: boolean;
    'shippedByUser'?: string;
    'shippedDts'?: string;
    'specialProductType'?: string;
    'tags'?: Array<OrderItemTag>;
    'taxFree'?: boolean;
    'taxableCost'?: Currency;
    'totalCostWithDiscount'?: Currency;
    'totalRefunded'?: Currency;
    'transmittedToDistributionCenterDts'?: string;
    'unitCostWithDiscount'?: Currency;
    'upsell'?: boolean;
    'weight'?: Weight;
    'width'?: Distance;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderItemEdi {
    'identifications'?: Array<OrderItemEdiIdentification>;
    'lots'?: Array<OrderItemEdiLot>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderItemEdiIdentification {
    'identification'?: string;
    'quantity'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderItemEdiLot {
    'lotExpiration'?: string;
    'lotNumber'?: string;
    'lotQuantity'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderItemOption {
    'additionalDimensionApplication'?: OrderItemOption.AdditionalDimensionApplicationEnum;
    'costChange'?: Currency;
    'fileAttachment'?: OrderItemOptionFileAttachment;
    'height'?: Distance;
    'hidden'?: boolean;
    'label'?: string;
    'length'?: Distance;
    'oneTimeFee'?: boolean;
    'value'?: string;
    'weightChange'?: Weight;
    'width'?: Distance;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace OrderItemOption {
    enum AdditionalDimensionApplicationEnum {
        None,
        SetItemTo,
        AddItem,
    }
}
export declare class OrderItemOptionFileAttachment {
    'expirationDts'?: string;
    'fileName'?: string;
    'mimeType'?: string;
    'size'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderItemProperty {
    'display'?: boolean;
    'expirationDts'?: string;
    'name'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderItemTag {
    'tagValue'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderLinkedShipment {
    'hasLinkedShipment'?: boolean;
    'linkedShipment'?: boolean;
    'linkedShipmentChannelPartnerOrderIds'?: Array<string>;
    'linkedShipmentOrderIds'?: Array<string>;
    'linkedShipmentToOrderId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderMarketing {
    'advertisingSource'?: string;
    'mailingList'?: boolean;
    'referralCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderPayment {
    'check'?: OrderPaymentCheck;
    'creditCard'?: OrderPaymentCreditCard;
    'echeck'?: OrderPaymentECheck;
    'holdForFraudReview'?: boolean;
    'paymentDts'?: string;
    'paymentMethod'?: OrderPayment.PaymentMethodEnum;
    'paymentMethodAccountingCode'?: string;
    'paymentMethodDepositToAccount'?: string;
    'paymentStatus'?: OrderPayment.PaymentStatusEnum;
    'purchaseOrder'?: OrderPaymentPurchaseOrder;
    'rotatingTransactionGatewayCode'?: string;
    'surcharge'?: Currency;
    'surchargeAccountingCode'?: string;
    'surchargeTransactionFee'?: number;
    'surchargeTransactionPercentage'?: number;
    'testOrder'?: boolean;
    'transactions'?: Array<OrderPaymentTransaction>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace OrderPayment {
    enum PaymentMethodEnum {
        Affirm,
        Amazon,
        AmazonSC,
        Cash,
        Check,
        COD,
        CreditCard,
        EBay,
        ECheck,
        LoanHero,
        MoneyOrder,
        PayPal,
        PurchaseOrder,
        QuoteRequest,
        Unknown,
        WireTransfer,
        Walmart,
    }
    enum PaymentStatusEnum {
        Unprocessed,
        Authorized,
        CaptureFailed,
        Processed,
        Declined,
        Voided,
        Refunded,
        Skipped,
    }
}
export declare class OrderPaymentCheck {
    'checkNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderPaymentCreditCard {
    'cardAuthTicket'?: string;
    'cardAuthorizationAmount'?: number;
    'cardAuthorizationDts'?: string;
    'cardAuthorizationReferenceNumber'?: string;
    'cardExpirationMonth'?: number;
    'cardExpirationYear'?: number;
    'cardNumber'?: string;
    'cardNumberToken'?: string;
    'cardNumberTruncated'?: boolean;
    'cardType'?: OrderPaymentCreditCard.CardTypeEnum;
    'cardVerificationNumberToken'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace OrderPaymentCreditCard {
    enum CardTypeEnum {
        AMEX,
        DinersClub,
        Discover,
        JCB,
        MasterCard,
        VISA,
    }
}
export declare class OrderPaymentECheck {
    'bankAbaCode'?: string;
    'bankAccountName'?: string;
    'bankAccountNumber'?: string;
    'bankAccountType'?: OrderPaymentECheck.BankAccountTypeEnum;
    'bankName'?: string;
    'bankOwnerType'?: OrderPaymentECheck.BankOwnerTypeEnum;
    'customerTaxId'?: string;
    'driversLicenseDob'?: string;
    'driversLicenseNumber'?: string;
    'driversLicenseState'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace OrderPaymentECheck {
    enum BankAccountTypeEnum {
        Checking,
        Savings,
    }
    enum BankOwnerTypeEnum {
        Personal,
        Business,
    }
}
export declare class OrderPaymentPurchaseOrder {
    'purchaseOrderNumber'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderPaymentTransaction {
    'details'?: Array<OrderPaymentTransactionDetail>;
    'successful'?: boolean;
    'transactionGateway'?: string;
    'transactionTimestamp'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderPaymentTransactionDetail {
    'name'?: string;
    'type'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderProcessPaymentRequest {
    'cardVerificationNumberToken'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderProcessPaymentResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'paymentTransaction'?: OrderPaymentTransaction;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderProperty {
    'display'?: boolean;
    'expirationDts'?: string;
    'name'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderQuery {
    'ccEmail'?: string;
    'channelPartnerCode'?: string;
    'channelPartnerOrderId'?: string;
    'city'?: string;
    'company'?: string;
    'countryCode'?: string;
    'creationDateBegin'?: string;
    'creationDateEnd'?: string;
    'currentStage'?: OrderQuery.CurrentStageEnum;
    'customerProfileOid'?: number;
    'email'?: string;
    'firstName'?: string;
    'itemId'?: string;
    'lastName'?: string;
    'orderId'?: string;
    'paymentDateBegin'?: string;
    'paymentDateEnd'?: string;
    'paymentMethod'?: OrderQuery.PaymentMethodEnum;
    'phone'?: string;
    'postalCode'?: string;
    'purchaseOrderNumber'?: string;
    'refundDateBegin'?: string;
    'refundDateEnd'?: string;
    'rma'?: string;
    'screenBrandingThemeCode'?: string;
    'shipmentDateBegin'?: string;
    'shipmentDateEnd'?: string;
    'stateRegion'?: string;
    'storefrontHostName'?: string;
    'total'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace OrderQuery {
    enum CurrentStageEnum {
        AccountsReceivable,
        PendingClearance,
        FraudReview,
        Rejected,
        ShippingDepartment,
        CompletedOrder,
        QuoteRequest,
        QuoteSent,
        LeastCostRouting,
        Unknown,
    }
    enum PaymentMethodEnum {
        Affirm,
        Amazon,
        AmazonSC,
        Cash,
        Check,
        COD,
        CreditCard,
        ECheck,
        LoanHero,
        MoneyOrder,
        PayPal,
        PurchaseOrder,
        QuoteRequest,
        Unknown,
        WireTransfer,
    }
}
export declare class OrderQueryBatch {
    'orderIds'?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderQuote {
    'quoteExpirationDts'?: string;
    'quotedBy'?: string;
    'quotedDts'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderReplacement {
    'additionalMerchantNotesNewOrder'?: string;
    'additionalMerchantNotesOriginalOrder'?: string;
    'customField1'?: string;
    'customField2'?: string;
    'customField3'?: string;
    'customField4'?: string;
    'customField5'?: string;
    'customField6'?: string;
    'customField7'?: string;
    'free'?: boolean;
    'immediateCharge'?: boolean;
    'items'?: Array<OrderReplacementItem>;
    'originalOrderId'?: string;
    'shippingMethod'?: string;
    'skipPayment'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderReplacementItem {
    'arbitraryUnitCost'?: number;
    'merchantItemId'?: string;
    'quantity'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderReplacementResponse {
    'chargeSuccessful'?: boolean;
    'errorMessage'?: string;
    'feedback'?: string;
    'free'?: boolean;
    'orderId'?: string;
    'successful'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'order'?: Order;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderSalesforce {
    'salesforceOpportunityId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderShipping {
    'address1'?: string;
    'address2'?: string;
    'city'?: string;
    'company'?: string;
    'countryCode'?: string;
    'dayPhone'?: string;
    'dayPhoneE164'?: string;
    'deliveryDate'?: string;
    'eveningPhone'?: string;
    'firstName'?: string;
    'lastName'?: string;
    'leastCostRoute'?: boolean;
    'leastCostRouteShippingMethods'?: Array<string>;
    'liftGate'?: boolean;
    'postalCode'?: string;
    'rma'?: string;
    'shipOnDate'?: string;
    'shipToResidential'?: boolean;
    'shipping3rdPartyAccountNumber'?: string;
    'shippingDate'?: string;
    'shippingDepartmentStatus'?: string;
    'shippingMethod'?: string;
    'shippingMethodAccountingCode'?: string;
    'specialInstructions'?: string;
    'stateRegion'?: string;
    'title'?: string;
    'trackingNumberDetails'?: Array<OrderTrackingNumberDetails>;
    'trackingNumbers'?: Array<string>;
    'weight'?: Weight;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderSummary {
    'actualFulfillment'?: Currency;
    'actualShipping'?: Currency;
    'arbitraryShippingHandlingTotal'?: Currency;
    'otherRefunded'?: Currency;
    'shippingHandlingRefunded'?: Currency;
    'shippingHandlingTotal'?: Currency;
    'shippingHandlingTotalDiscount'?: Currency;
    'subtotal'?: Currency;
    'subtotalDiscount'?: Currency;
    'subtotalDiscountRefunded'?: Currency;
    'subtotalRefunded'?: Currency;
    'tax'?: Currency;
    'taxRefunded'?: Currency;
    'taxableSubtotal'?: Currency;
    'taxableSubtotalDiscount'?: Currency;
    'total'?: Currency;
    'totalRefunded'?: Currency;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderTag {
    'tagValue'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderTaxes {
    'arbitraryTax'?: number;
    'arbitraryTaxRate'?: number;
    'arbitraryTaxableSubtotal'?: number;
    'taxCityAccountingCode'?: string;
    'taxCountryAccountingCode'?: string;
    'taxCounty'?: string;
    'taxCountyAccountingCode'?: string;
    'taxGiftCharge'?: boolean;
    'taxPostalCodeAccountingCode'?: string;
    'taxRate'?: number;
    'taxRateCity'?: number;
    'taxRateCountry'?: number;
    'taxRateCounty'?: number;
    'taxRatePostalCode'?: number;
    'taxRateState'?: number;
    'taxShipping'?: boolean;
    'taxStateAccountingCode'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderTokenResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'orderToken'?: string;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderTrackingNumberDetail {
    'city'?: string;
    'eventLocalDate'?: string;
    'eventLocalTime'?: string;
    'state'?: string;
    'subtag'?: string;
    'subtagMessage'?: string;
    'tag'?: string;
    'tagDescription'?: string;
    'tagIcon'?: string;
    'zip'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrderTrackingNumberDetails {
    'actualDeliveryDate'?: string;
    'actualDeliveryDateFormatted'?: string;
    'details'?: Array<OrderTrackingNumberDetail>;
    'expectedDeliveryDate'?: string;
    'expectedDeliveryDateFormatted'?: string;
    'mapUrl'?: string;
    'orderPlacedDate'?: string;
    'orderPlacedDateFormatted'?: string;
    'paymentProcessedDate'?: string;
    'paymentProcessedDateFormatted'?: string;
    'shippedDate'?: string;
    'shippedDateFormatted'?: string;
    'shippingMethod'?: string;
    'status'?: string;
    'statusDescription'?: string;
    'trackingNumber'?: string;
    'trackingUrl'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class OrdersResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'orders'?: Array<Order>;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Permission {
    'permissionGroup'?: string;
    'permissionName'?: string;
    'selected'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PricingTier {
    'allow3rdPartyBilling'?: boolean;
    'allowCod'?: boolean;
    'allowPurchaseOrder'?: boolean;
    'allowQuoteRequest'?: boolean;
    'approvalNotification'?: PricingTierNotification;
    'autoApproveCod'?: boolean;
    'autoApprovePurchaseOrder'?: boolean;
    'defaultOnWholesaleSignup'?: boolean;
    'defaultPercentageDiscount'?: number;
    'defaultShippingMethodOid'?: number;
    'defaultTier'?: boolean;
    'displayOnWholesaleSignup'?: boolean;
    'excludeFromFreePromotion'?: boolean;
    'exemptShippingHandlingCharge'?: boolean;
    'freeShipping'?: boolean;
    'freeShippingMinimum'?: number;
    'maximumItemCount'?: number;
    'minimumItemCount'?: number;
    'minimumSubtotal'?: number;
    'name'?: string;
    'noCoupons'?: boolean;
    'noFreeShipping'?: boolean;
    'noRealtimeCharge'?: boolean;
    'notValidWhenCouponPresent'?: boolean;
    'pricingTierOid'?: number;
    'realtimePercentageDiscount'?: number;
    'signupNotification'?: PricingTierNotification;
    'suppressBuysafe'?: boolean;
    'suppressMailingList'?: boolean;
    'taxExempt'?: boolean;
    'trackSeparately'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PricingTierNotification {
    'format'?: string;
    'subject'?: string;
    'text'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class PricingTiersResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'pricingTiers'?: Array<PricingTier>;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Property {
    'name'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RegisterAffiliateClickRequest {
    'affid'?: number;
    'ipAddress'?: string;
    'landingPageUrl'?: string;
    'referrerUrl'?: string;
    'subid'?: string;
    'userAgent'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class RegisterAffiliateClickResponse {
    'cookieMaxAge'?: number;
    'cookieNames'?: Array<string>;
    'cookieValues'?: Array<string>;
    'registered'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ResponseMetadata {
    'payloadName'?: string;
    'resultSet'?: ResultSet;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ResultSet {
    'count'?: number;
    'limit'?: number;
    'more'?: boolean;
    'nextOffset'?: number;
    'offset'?: number;
    'totalRecords'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ScreenshotsResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'screenshots'?: Array<string>;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class SelfConfig {
    'taxBilling'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class SovosConfig {
    'accessKey'?: string;
    'estimateOnly'?: boolean;
    'lastTestDts'?: string;
    'secretKey'?: string;
    'sendTestOrders'?: boolean;
    'testResults'?: string;
    'uat'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class StateProvince {
    'abbreviation'?: string;
    'name'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class StepWaiting {
    'commseqStepUuid'?: string;
    'numberWaiting'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxCity {
    'accountingCode'?: string;
    'city'?: string;
    'cityOid'?: number;
    'countyOid'?: number;
    'dontCollectCity'?: boolean;
    'dontCollectPostalCode'?: boolean;
    'postalCodes'?: Array<TaxPostalCode>;
    'taxRate'?: number;
    'taxRateFormatted'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxCountry {
    'accountingCode'?: string;
    'countryCode'?: string;
    'countryOid'?: number;
    'states'?: Array<TaxState>;
    'taxGiftCharge'?: boolean;
    'taxGiftWrap'?: boolean;
    'taxRate'?: number;
    'taxRateFormatted'?: string;
    'taxShipping'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxCountryCode {
    'accountingCode'?: string;
    'countryCode'?: string;
    'countryName'?: string;
    'taxRate'?: number;
    'taxRateFormatted'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxCounty {
    'accountingCode'?: string;
    'cities'?: Array<TaxCity>;
    'county'?: string;
    'countyOid'?: number;
    'dontCollectCity'?: boolean;
    'dontCollectCounty'?: boolean;
    'dontCollectPostalCode'?: boolean;
    'stateOid'?: number;
    'taxRate'?: number;
    'taxRateFormatted'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxJarConfig {
    'active'?: boolean;
    'apiKey'?: string;
    'estimateOnly'?: boolean;
    'sendOutsideNexus'?: boolean;
    'sendTestOrders'?: boolean;
    'useDistributionCenterFrom'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxPostalCode {
    'accountingCode'?: string;
    'cityOid'?: number;
    'dontCollectPostalCode'?: boolean;
    'postalCode'?: string;
    'postalCodeOid'?: number;
    'taxRate'?: number;
    'taxRateFormatted'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxProviderActivateResult {
    'details'?: string;
    'success'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxProviderAvalara {
    'configuration'?: AvalaraConfig;
    'description'?: string;
    'selected'?: boolean;
    'title'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxProviderAvalaraCompaniesResult {
    'companies'?: Array<TaxProviderAvalaraCompany>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxProviderAvalaraCompany {
    'companyCode'?: string;
    'companyName'?: string;
    'description'?: string;
    'selected'?: boolean;
    'title'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxProviderSelf {
    'configuration'?: SelfConfig;
    'countries'?: Array<TaxCountry>;
    'description'?: string;
    'selected'?: boolean;
    'title'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxProviderSelfCountriesResponse {
    'countries'?: Array<TaxCountryCode>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxProviderSelfRegionsResponse {
    'regions'?: Array<TaxStateCode>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxProviderSovos {
    'configuration'?: SovosConfig;
    'description'?: string;
    'selected'?: boolean;
    'title'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxProviderTaxJar {
    'configuration'?: TaxJarConfig;
    'description'?: string;
    'selected'?: boolean;
    'title'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxProviderTestResult {
    'details'?: string;
    'success'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxProviderUltraCart {
    'configuration'?: UltraCartConfig;
    'description'?: string;
    'selected'?: boolean;
    'states'?: Array<TaxProviderUltraCartState>;
    'title'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxProviderUltraCartState {
    'enabled'?: boolean;
    'stateCode'?: string;
    'stateName'?: string;
    'taxGiftCharge'?: boolean;
    'taxGiftWrap'?: boolean;
    'taxRateFormatted'?: string;
    'taxShipping'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxProvidersResponse {
    'avalara'?: TaxProviderAvalara;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'self'?: TaxProviderSelf;
    'sovos'?: TaxProviderSovos;
    'success'?: boolean;
    'taxjar'?: TaxProviderTaxJar;
    'ultracart'?: TaxProviderUltraCart;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxState {
    'accountingCode'?: string;
    'counties'?: Array<TaxCounty>;
    'countryOid'?: number;
    'dontCollectCity'?: boolean;
    'dontCollectCounty'?: boolean;
    'dontCollectPostalCode'?: boolean;
    'dontCollectState'?: boolean;
    'stateCode'?: string;
    'stateOid'?: number;
    'taxGiftCharge'?: boolean;
    'taxGiftWrap'?: boolean;
    'taxRate'?: number;
    'taxRateFormatted'?: string;
    'taxShipping'?: boolean;
    'useUltracartManagedRates'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TaxStateCode {
    'accountingCode'?: string;
    'stateCode'?: string;
    'stateName'?: string;
    'taxRate'?: number;
    'taxRateFormatted'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TempMultimedia {
    'filename'?: string;
    'height'?: number;
    'multimediaType'?: TempMultimedia.MultimediaTypeEnum;
    'size'?: number;
    'tempMultimediaOid'?: number;
    'url'?: string;
    'width'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace TempMultimedia {
    enum MultimediaTypeEnum {
        Image,
        PDF,
        Text,
        Video,
    }
}
export declare class TempMultimediaResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'tempMultimedia'?: TempMultimedia;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ThumbnailParametersRequest {
    'height'?: number;
    'pngFormat'?: boolean;
    'squareThumbnail'?: boolean;
    'webp'?: boolean;
    'width'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ThumbnailParametersResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'thumbnailUrlSuffix'?: string;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TransactionEmail {
    'content'?: string;
    'espDomainUuid'?: string;
    'espFriendlyName'?: string;
    'espUser'?: string;
    'fileExists'?: boolean;
    'fileName'?: string;
    'group'?: string;
    'handlebarVariables'?: Array<string>;
    'invalid'?: boolean;
    'lastModified'?: string;
    'libraryItemOid'?: number;
    'options'?: Array<TransactionEmailOption>;
    'path'?: string;
    'size'?: string;
    'storeFrontFsDirectoryOid'?: number;
    'storeFrontFsFileOid'?: number;
    'subject'?: string;
    'syntaxErrors'?: string;
    'templatePathRelativePath'?: string;
    'themeRelativePath'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TransactionEmailListResponse {
    'emailNames'?: Array<string>;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TransactionEmailOption {
    'description'?: string;
    'merchantEmailDeliveryOptionOid'?: number;
    'merchantId'?: string;
    'name'?: string;
    'selected'?: boolean;
    'storeFrontOid'?: number;
    'templateDisplay'?: string;
    'templateType'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TransactionEmailResponse {
    'email'?: TransactionEmail;
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UltraCartConfig {
    'taxBilling'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class User {
    'apiIpAddressMasks'?: Array<string>;
    'changeFtpPasswordTo'?: string;
    'changePasswordTo'?: string;
    'email'?: string;
    'fullName'?: string;
    'groups'?: Array<UserGroupMembership>;
    'linkedAccounts'?: Array<LinkedAccount>;
    'login'?: string;
    'loginHistories'?: Array<UserLogin>;
    'notifications'?: Array<Notification>;
    'otpSerialNumber'?: string;
    'permissions'?: Array<Permission>;
    'phone'?: string;
    'userId'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UserGroupMembership {
    'groupOid'?: number;
    'member'?: boolean;
    'name'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UserLogin {
    'ipAddress'?: string;
    'login'?: string;
    'loginDts'?: string;
    'userAgent'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UserLoginsResponse {
    'error'?: Error;
    'logins'?: Array<UserLogin>;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UserResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'user'?: User;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UsersResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'users'?: Array<User>;
    'warning'?: Warning;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class VerificationRecord {
    'name'?: string;
    'type'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Warning {
    'moreInfo'?: string;
    'warningMessage'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Webhook {
    'apiUserOid'?: number;
    'apiVersion'?: Webhook.ApiVersionEnum;
    'applicationProfile'?: ApiUserApplicationProfile;
    'authenticationType'?: Webhook.AuthenticationTypeEnum;
    'basicPassword'?: string;
    'basicUsername'?: string;
    'consecutiveFailures'?: number;
    'disabled'?: boolean;
    'eventCategories'?: Array<WebhookEventCategory>;
    'iamAccessKey'?: string;
    'iamSecretKey'?: string;
    'maximumEvents'?: number;
    'maximumSize'?: number;
    'merchantId'?: string;
    'nextRetryAfter'?: string;
    'pending'?: number;
    'webhookOid'?: number;
    'webhookUrl'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace Webhook {
    enum ApiVersionEnum {
        _20170301,
    }
    enum AuthenticationTypeEnum {
        None,
        Basic,
    }
}
export declare class WebhookEventCategory {
    'anySubscribed'?: boolean;
    'availableExpansions'?: Array<string>;
    'eventCategory'?: string;
    'events'?: Array<WebhookEventSubscription>;
    'subscribed'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class WebhookEventSubscription {
    'comments'?: string;
    'deprecatedFlag'?: boolean;
    'discontinuedFlag'?: boolean;
    'eventDescription'?: string;
    'eventName'?: string;
    'expansion'?: string;
    'subscribed'?: boolean;
    'supportsReflow'?: boolean;
    'webhookEventOid'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class WebhookLog {
    'deliveryDts'?: string;
    'duration'?: number;
    'request'?: string;
    'requestHeaders'?: Array<HTTPHeader>;
    'requestId'?: string;
    'response'?: string;
    'responseHeaders'?: Array<HTTPHeader>;
    'statusCode'?: number;
    'success'?: boolean;
    'uri'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class WebhookLogResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    'webhookLog'?: WebhookLog;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class WebhookLogSummariesResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    'webhookLogSummaries'?: Array<WebhookLogSummary>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class WebhookLogSummary {
    'deliveryDts'?: string;
    'requestId'?: string;
    'success'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class WebhookResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    'webhook'?: Webhook;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class WebhookSampleRequest {
    'request'?: string;
    'requestHeaders'?: Array<HTTPHeader>;
    'requestId'?: string;
    'uri'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class WebhookSampleRequestResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    'webhookSampleRequest'?: WebhookSampleRequest;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class WebhooksResponse {
    'error'?: Error;
    'metadata'?: ResponseMetadata;
    'success'?: boolean;
    'warning'?: Warning;
    'webhooks'?: Array<Webhook>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Weight {
    'uom'?: Weight.UomEnum;
    'value'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace Weight {
    enum UomEnum {
        KG,
        LB,
        OZ,
    }
}
export interface Headers {
    'X-UltraCart-Api-Version': string;
    [key: string]: any;
}
export interface Authentication {
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
export declare enum AffiliateApiApiKeys {
    ultraCartBrowserApiKey = 0,
    ultraCartSimpleApiKey = 1,
}
export declare class AffiliateApi {
    protected _basePath: string;
    protected _defaultHeaders: Headers;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'ultraCartBrowserApiKey': ApiKeyAuth;
        'ultraCartOauth': OAuth;
        'ultraCartSimpleApiKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: AffiliateApiApiKeys, value: string): void;
    setApiVersion(value: string): void;
    defaultHeaders: Headers;
    accessToken: string;
    getClicksByQuery(clickQuery: AffiliateClickQuery, limit?: number, offset?: number, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: AffiliateClicksResponse;
    }>;
    getLedgersByQuery(ledgerQuery: AffiliateLedgerQuery, limit?: number, offset?: number, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: AffiliateLedgersResponse;
    }>;
}
export declare enum AutoOrderApiApiKeys {
    ultraCartBrowserApiKey = 0,
    ultraCartSimpleApiKey = 1,
}
export declare class AutoOrderApi {
    protected _basePath: string;
    protected _defaultHeaders: Headers;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'ultraCartBrowserApiKey': ApiKeyAuth;
        'ultraCartOauth': OAuth;
        'ultraCartSimpleApiKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: AutoOrderApiApiKeys, value: string): void;
    setApiVersion(value: string): void;
    defaultHeaders: Headers;
    accessToken: string;
    getAutoOrder(autoOrderOid: number, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: AutoOrderResponse;
    }>;
    getAutoOrderByCode(autoOrderCode: string, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: AutoOrderResponse;
    }>;
    getAutoOrderByReferenceOrderId(referenceOrderId: string, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: AutoOrderResponse;
    }>;
    getAutoOrders(autoOrderCode?: string, originalOrderId?: string, firstName?: string, lastName?: string, company?: string, city?: string, state?: string, postalCode?: string, countryCode?: string, phone?: string, email?: string, originalOrderDateBegin?: string, originalOrderDateEnd?: string, nextShipmentDateBegin?: string, nextShipmentDateEnd?: string, cardType?: string, itemId?: string, status?: string, limit?: number, offset?: number, since?: string, sort?: string, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: AutoOrdersResponse;
    }>;
    getAutoOrdersBatch(autoOrderBatch: AutoOrderQueryBatch, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: AutoOrdersResponse;
    }>;
    getAutoOrdersByQuery(autoOrderQuery: AutoOrderQuery, limit?: number, offset?: number, sort?: string, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: AutoOrdersResponse;
    }>;
    updateAutoOrder(autoOrder: AutoOrder, autoOrderOid: number, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: AutoOrderResponse;
    }>;
    updateAutoOrdersBatch(autoOrdersRequest: AutoOrdersRequest, expand?: string, placeholders?: boolean, async?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body: AutoOrdersResponse;
    }>;
}
export declare enum ChargebackApiApiKeys {
    ultraCartBrowserApiKey = 0,
    ultraCartSimpleApiKey = 1,
}
export declare class ChargebackApi {
    protected _basePath: string;
    protected _defaultHeaders: Headers;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'ultraCartBrowserApiKey': ApiKeyAuth;
        'ultraCartOauth': OAuth;
        'ultraCartSimpleApiKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ChargebackApiApiKeys, value: string): void;
    setApiVersion(value: string): void;
    defaultHeaders: Headers;
    accessToken: string;
    deleteChargeback(chargebackDisputeOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: ChargebackDisputeResponse;
    }>;
    getChargebackDispute(chargebackDisputeOid: number, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: ChargebackDisputeResponse;
    }>;
    getChargebackDisputes(orderId?: string, caseNumber?: string, status?: string, expirationDtsStart?: string, expirationDtsEnd?: string, chargebackDtsStart?: string, chargebackDtsEnd?: string, limit?: number, offset?: number, since?: string, sort?: string, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: ChargebackDisputesResponse;
    }>;
    insertChargeback(chargeback: ChargebackDispute, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: ChargebackDisputeResponse;
    }>;
    updateChargeback(chargeback: ChargebackDispute, chargebackDisputeOid: number, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: ChargebackDisputeResponse;
    }>;
}
export declare enum CheckoutApiApiKeys {
    ultraCartBrowserApiKey = 0,
    ultraCartSimpleApiKey = 1,
}
export declare class CheckoutApi {
    protected _basePath: string;
    protected _defaultHeaders: Headers;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'ultraCartBrowserApiKey': ApiKeyAuth;
        'ultraCartOauth': OAuth;
        'ultraCartSimpleApiKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: CheckoutApiApiKeys, value: string): void;
    setApiVersion(value: string): void;
    defaultHeaders: Headers;
    accessToken: string;
    cityState(cart: Cart, options?: any): Promise<{
        response: http.ClientResponse;
        body: CityStateZip;
    }>;
    finalizeOrder(finalizeRequest: CartFinalizeOrderRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: CartFinalizeOrderResponse;
    }>;
    getAffirmCheckout(cartId: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CartAffirmCheckoutResponse;
    }>;
    getAllowedCountries(options?: any): Promise<{
        response: http.ClientResponse;
        body: CheckoutAllowedCountriesResponse;
    }>;
    getCart(expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CartResponse;
    }>;
    getCartByCartId(cartId: string, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CartResponse;
    }>;
    getCartByReturnCode(returnCode: string, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CartResponse;
    }>;
    getStateProvincesForCountry(countryCode: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CheckoutStateProvinceResponse;
    }>;
    handoffCart(handoffRequest: CheckoutHandoffRequest, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CheckoutHandoffResponse;
    }>;
    login(loginRequest: CartProfileLoginRequest, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CartProfileLoginResponse;
    }>;
    logout(cart: Cart, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CartResponse;
    }>;
    register(registerRequest: CartProfileRegisterRequest, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CartProfileRegisterResponse;
    }>;
    registerAffiliateClick(registerAffiliateClickRequest: RegisterAffiliateClickRequest, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: RegisterAffiliateClickResponse;
    }>;
    relatedItemsForCart(cart: Cart, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: ItemsResponse;
    }>;
    relatedItemsForItem(itemId: string, cart: Cart, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: ItemsResponse;
    }>;
    setupBrowserKey(browserKeyRequest: CheckoutSetupBrowserKeyRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: CheckoutSetupBrowserKeyResponse;
    }>;
    updateCart(cart: Cart, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CartResponse;
    }>;
    validateCart(validationRequest: CartValidationRequest, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CartValidationResponse;
    }>;
}
export declare enum CouponApiApiKeys {
    ultraCartBrowserApiKey = 0,
    ultraCartSimpleApiKey = 1,
}
export declare class CouponApi {
    protected _basePath: string;
    protected _defaultHeaders: Headers;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'ultraCartBrowserApiKey': ApiKeyAuth;
        'ultraCartOauth': OAuth;
        'ultraCartSimpleApiKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: CouponApiApiKeys, value: string): void;
    setApiVersion(value: string): void;
    defaultHeaders: Headers;
    accessToken: string;
    deleteCoupon(couponOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: CouponResponse;
    }>;
    generateCouponCodes(couponOid: number, couponCodesRequest: CouponCodesRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: CouponCodesResponse;
    }>;
    generateOneTimeCodesByMerchantCode(merchantCode: string, couponCodesRequest: CouponCodesRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: CouponCodesResponse;
    }>;
    getCoupon(couponOid: number, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CouponResponse;
    }>;
    getCouponByMerchantCode(merchantCode: string, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CouponResponse;
    }>;
    getCoupons(merchantCode?: string, description?: string, couponType?: string, startDateBegin?: string, startDateEnd?: string, expirationDateBegin?: string, expirationDateEnd?: string, affiliateOid?: number, excludeExpired?: boolean, limit?: number, offset?: number, sort?: string, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CouponsResponse;
    }>;
    getCouponsByQuery(couponQuery: CouponQuery, limit?: number, offset?: number, sort?: string, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CouponsResponse;
    }>;
    getEditorValues(options?: any): Promise<{
        response: http.ClientResponse;
        body: CouponEditorValues;
    }>;
    insertCoupon(coupon: Coupon, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CouponResponse;
    }>;
    updateCoupon(coupon: Coupon, couponOid: number, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CouponResponse;
    }>;
}
export declare enum CustomerApiApiKeys {
    ultraCartBrowserApiKey = 0,
    ultraCartSimpleApiKey = 1,
}
export declare class CustomerApi {
    protected _basePath: string;
    protected _defaultHeaders: Headers;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'ultraCartBrowserApiKey': ApiKeyAuth;
        'ultraCartOauth': OAuth;
        'ultraCartSimpleApiKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: CustomerApiApiKeys, value: string): void;
    setApiVersion(value: string): void;
    defaultHeaders: Headers;
    accessToken: string;
    deleteCustomer(customerProfileOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: CustomerResponse;
    }>;
    getCustomer(customerProfileOid: number, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CustomerResponse;
    }>;
    getCustomers(email?: string, qbClass?: string, quickbooksCode?: string, lastModifiedDtsStart?: string, lastModifiedDtsEnd?: string, signupDtsStart?: string, signupDtsEnd?: string, billingFirstName?: string, billingLastName?: string, billingCompany?: string, billingCity?: string, billingState?: string, billingPostalCode?: string, billingCountryCode?: string, billingDayPhone?: string, billingEveningPhone?: string, shippingFirstName?: string, shippingLastName?: string, shippingCompany?: string, shippingCity?: string, shippingState?: string, shippingPostalCode?: string, shippingCountryCode?: string, shippingDayPhone?: string, shippingEveningPhone?: string, pricingTierOid?: number, pricingTierName?: string, limit?: number, offset?: number, since?: string, sort?: string, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CustomersResponse;
    }>;
    getCustomersByQuery(customerQuery: CustomerQuery, limit?: number, offset?: number, since?: string, sort?: string, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CustomersResponse;
    }>;
    getCustomersForDataTables(expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: DataTablesServerSideResponse;
    }>;
    getEditorValues(options?: any): Promise<{
        response: http.ClientResponse;
        body: CustomerEditorValues;
    }>;
    getEmailLists(options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailListsResponse;
    }>;
    insertCustomer(customer: Customer, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CustomerResponse;
    }>;
    updateCustomer(customer: Customer, customerProfileOid: number, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: CustomerResponse;
    }>;
    updateCustomerEmailLists(customerProfileOid: number, listChanges: CustomerEmailListChanges, options?: any): Promise<{
        response: http.ClientResponse;
        body: CustomerEmailListChanges;
    }>;
}
export declare enum FulfillmentApiApiKeys {
    ultraCartBrowserApiKey = 0,
    ultraCartSimpleApiKey = 1,
}
export declare class FulfillmentApi {
    protected _basePath: string;
    protected _defaultHeaders: Headers;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'ultraCartBrowserApiKey': ApiKeyAuth;
        'ultraCartOauth': OAuth;
        'ultraCartSimpleApiKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: FulfillmentApiApiKeys, value: string): void;
    setApiVersion(value: string): void;
    defaultHeaders: Headers;
    accessToken: string;
    acknowledgeOrders(distributionCenterCode: string, orderIds: Array<string>, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    getDistributionCenterOrders(distributionCenterCode: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: OrdersResponse;
    }>;
    getDistributionCenters(options?: any): Promise<{
        response: http.ClientResponse;
        body: DistributionCentersResponse;
    }>;
    shipOrders(distributionCenterCode: string, shipments: Array<FulfillmentShipment>, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    updateInventory(distributionCenterCode: string, inventories: Array<FulfillmentInventory>, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
}
export declare enum ItemApiApiKeys {
    ultraCartBrowserApiKey = 0,
    ultraCartSimpleApiKey = 1,
}
export declare class ItemApi {
    protected _basePath: string;
    protected _defaultHeaders: Headers;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'ultraCartBrowserApiKey': ApiKeyAuth;
        'ultraCartOauth': OAuth;
        'ultraCartSimpleApiKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ItemApiApiKeys, value: string): void;
    setApiVersion(value: string): void;
    defaultHeaders: Headers;
    accessToken: string;
    deleteItem(merchantItemOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    getItem(merchantItemOid: number, expand?: string, placeholders?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body: ItemResponse;
    }>;
    getItemByMerchantItemId(merchantItemId: string, expand?: string, placeholders?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body: ItemResponse;
    }>;
    getItems(parentCategoryId?: number, parentCategoryPath?: string, limit?: number, offset?: number, since?: string, sort?: string, expand?: string, placeholders?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body: ItemsResponse;
    }>;
    getPricingTiers(expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: PricingTiersResponse;
    }>;
    insertItem(item: Item, expand?: string, placeholders?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body: ItemResponse;
    }>;
    updateItem(item: Item, merchantItemOid: number, expand?: string, placeholders?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body: ItemResponse;
    }>;
    updateItems(itemsRequest: ItemsRequest, expand?: string, placeholders?: boolean, async?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body: ItemsResponse;
    }>;
    uploadTemporaryMultimedia(file: Buffer, options?: any): Promise<{
        response: http.ClientResponse;
        body: TempMultimediaResponse;
    }>;
}
export declare enum OauthApiApiKeys {
    ultraCartBrowserApiKey = 0,
    ultraCartSimpleApiKey = 1,
}
export declare class OauthApi {
    protected _basePath: string;
    protected _defaultHeaders: Headers;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'ultraCartBrowserApiKey': ApiKeyAuth;
        'ultraCartOauth': OAuth;
        'ultraCartSimpleApiKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: OauthApiApiKeys, value: string): void;
    setApiVersion(value: string): void;
    defaultHeaders: Headers;
    accessToken: string;
    oauthAccessToken(clientId: string, grantType: string, code?: string, redirectUri?: string, refreshToken?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: OauthTokenResponse;
    }>;
    oauthRevoke(clientId: string, token: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: OauthRevokeSuccessResponse;
    }>;
}
export declare enum OrderApiApiKeys {
    ultraCartBrowserApiKey = 0,
    ultraCartSimpleApiKey = 1,
}
export declare class OrderApi {
    protected _basePath: string;
    protected _defaultHeaders: Headers;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'ultraCartBrowserApiKey': ApiKeyAuth;
        'ultraCartOauth': OAuth;
        'ultraCartSimpleApiKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: OrderApiApiKeys, value: string): void;
    setApiVersion(value: string): void;
    defaultHeaders: Headers;
    accessToken: string;
    adjustOrderTotal(orderId: string, desiredTotal: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: BaseResponse;
    }>;
    cancelOrder(orderId: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: BaseResponse;
    }>;
    deleteOrder(orderId: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    format(orderId: string, formatOptions: OrderFormat, options?: any): Promise<{
        response: http.ClientResponse;
        body: OrderFormatResponse;
    }>;
    generateOrderToken(orderId: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: OrderTokenResponse;
    }>;
    getAccountsReceivableRetryConfig(options?: any): Promise<{
        response: http.ClientResponse;
        body: AccountsReceivableRetryConfigResponse;
    }>;
    getAccountsReceivableRetryStats(from?: string, to?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: AccountsReceivableRetryStatsResponse;
    }>;
    getOrder(orderId: string, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: OrderResponse;
    }>;
    getOrderByToken(orderByTokenQuery: OrderByTokenQuery, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: OrderResponse;
    }>;
    getOrders(orderId?: string, paymentMethod?: string, company?: string, firstName?: string, lastName?: string, city?: string, stateRegion?: string, postalCode?: string, countryCode?: string, phone?: string, email?: string, ccEmail?: string, total?: number, screenBrandingThemeCode?: string, storefrontHostName?: string, creationDateBegin?: string, creationDateEnd?: string, paymentDateBegin?: string, paymentDateEnd?: string, shipmentDateBegin?: string, shipmentDateEnd?: string, rma?: string, purchaseOrderNumber?: string, itemId?: string, currentStage?: string, channelPartnerCode?: string, channelPartnerOrderId?: string, customerProfileOid?: number, refundDateBegin?: string, refundDateEnd?: string, limit?: number, offset?: number, sort?: string, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: OrdersResponse;
    }>;
    getOrdersBatch(orderBatch: OrderQueryBatch, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: OrdersResponse;
    }>;
    getOrdersByQuery(orderQuery: OrderQuery, limit?: number, offset?: number, sort?: string, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: OrdersResponse;
    }>;
    insertOrder(order: Order, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: OrderResponse;
    }>;
    processPayment(orderId: string, processPaymentRequest: OrderProcessPaymentRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: OrderProcessPaymentResponse;
    }>;
    refundOrder(order: Order, orderId: string, rejectAfterRefund?: boolean, skipCustomerNotification?: boolean, autoOrderCancel?: boolean, manualRefund?: boolean, reverseAffiliateTransactions?: boolean, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: OrderResponse;
    }>;
    replacement(orderId: string, replacement: OrderReplacement, options?: any): Promise<{
        response: http.ClientResponse;
        body: OrderReplacementResponse;
    }>;
    resendReceipt(orderId: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: BaseResponse;
    }>;
    resendShipmentConfirmation(orderId: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: BaseResponse;
    }>;
    updateAccountsReceivableRetryConfig(retryConfig: AccountsReceivableRetryConfig, options?: any): Promise<{
        response: http.ClientResponse;
        body: BaseResponse;
    }>;
    updateOrder(order: Order, orderId: string, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: OrderResponse;
    }>;
}
export declare enum StorefrontApiApiKeys {
    ultraCartBrowserApiKey = 0,
    ultraCartSimpleApiKey = 1,
}
export declare class StorefrontApi {
    protected _basePath: string;
    protected _defaultHeaders: Headers;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'ultraCartBrowserApiKey': ApiKeyAuth;
        'ultraCartOauth': OAuth;
        'ultraCartSimpleApiKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: StorefrontApiApiKeys, value: string): void;
    setApiVersion(value: string): void;
    defaultHeaders: Headers;
    accessToken: string;
    addToLibrary(addLibraryRequest: AddLibraryItemRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: LibraryItemResponse;
    }>;
    applyToStoreFront(applyLibraryRequest: ApplyLibraryItemRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: ApplyLibraryItemResponse;
    }>;
    archiveEmailList(storefrontOid: number, emailListUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailListArchiveResponse;
    }>;
    archiveEmailSegment(storefrontOid: number, emailSegmentUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailSegmentArchiveResponse;
    }>;
    backPopulateEmailFlow(storefrontOid: number, emailFlowUuid: string, backPopulateRequest: EmailFlowBackPopulateRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailFlowBackPopulateResponse;
    }>;
    checkDownloadEmailSegment(storefrontOid: number, emailSegmentUuid: string, emailSegmentRebuildUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailSegmentDownloadPrepareResponse;
    }>;
    cloneEmailCampaign(storefrontOid: number, emailCampaignUuid: string, targetStorefrontOid?: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCampaignResponse;
    }>;
    cloneEmailFlow(storefrontOid: number, emailFlowUuid: string, targetStorefrontOid?: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailFlowResponse;
    }>;
    createEmailSendingDomain(domain: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailSendingDomainResponse;
    }>;
    deleteEmailCommseqStat(storefrontOid: number, commseqUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    deleteEmailEmail(storefrontOid: number, commseqEmailUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: BaseResponse;
    }>;
    deleteEmailListCustomer(storefrontOid: number, emailListUuid: string, emailCustomerUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: BaseResponse;
    }>;
    deleteEmailPostcard(storefrontOid: number, commseqPostcardUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: BaseResponse;
    }>;
    deleteEmailSendingDomain(domain: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: BaseResponse;
    }>;
    deleteExperiment(storefrontOid: number, storefrontExperimentOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    deleteLibraryItem(libraryItemOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    duplicateLibraryItem(libraryItemOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: LibraryItemResponse;
    }>;
    geocodeAddress(storefrontOid: number, geocodeRequest: GeocodeRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: GeocodeResponse;
    }>;
    getCountries(storefrontOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: CountriesResponse;
    }>;
    getEditorToken(storefrontOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailEditorTokenResponse;
    }>;
    getEmailBaseTemplates(storefrontOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailBaseTemplateListResponse;
    }>;
    getEmailCampaign(storefrontOid: number, emailCampaignUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCampaignResponse;
    }>;
    getEmailCampaignScreenshots(storefrontOid: number, emailCampaignUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: ScreenshotsResponse;
    }>;
    getEmailCampaigns(storefrontOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCampaignsResponse;
    }>;
    getEmailCampaignsWithStats(storefrontOid: number, statDays: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCampaignsResponse;
    }>;
    getEmailCommseq(storefrontOid: number, commseqUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCommseqResponse;
    }>;
    getEmailCommseqEmailStats(storefrontOid: number, commseqUuid: string, statsRequest: EmailStatSummaryRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailStatSummaryResponse;
    }>;
    getEmailCommseqPostcardStats(storefrontOid: number, commseqUuid: string, statsRequest: EmailStatPostcardSummaryRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailStatPostcardSummaryResponse;
    }>;
    getEmailCommseqStatOverall(storefrontOid: number, commseqUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCommseqStatResponse;
    }>;
    getEmailCommseqStepStats(storefrontOid: number, commseqUuid: string, statsRequest: EmailStepStatRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailStepStatResponse;
    }>;
    getEmailCommseqStepWaiting(storefrontOid: number, commseqUuid: string, waitingRequest: EmailStepWaitingRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailStepWaitingResponse;
    }>;
    getEmailCommseqs(storefrontOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCommseqsResponse;
    }>;
    getEmailCustomerEditorUrl(storefrontOid: number, emailCustomerUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCustomerEditorUrlResponse;
    }>;
    getEmailCustomers(storefrontOid: number, pageNumber?: number, pageSize?: number, searchEmailPrefix?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCustomersResponse;
    }>;
    getEmailDashboardActivity(storefrontOid: number, lastRecords?: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailDashboardActivityResponse;
    }>;
    getEmailDashboardStats(storefrontOid: number, days?: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailDashboardStatsResponse;
    }>;
    getEmailEmail(storefrontOid: number, commseqEmailUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCommseqEmailResponse;
    }>;
    getEmailEmailClicks(storefrontOid: number, commseqUuid: string, commseqStepUuid: string, commseqEmailUuid: string, days?: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailClicksResponse;
    }>;
    getEmailEmailCustomerEditorUrl(storefrontOid: number, commseqEmailUuid: string, orderId: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCustomerEditorUrlResponse;
    }>;
    getEmailEmailOrders(storefrontOid: number, commseqUuid: string, commseqStepUuid: string, commseqEmailUuid: string, days?: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailOrdersResponse;
    }>;
    getEmailEmails(storefrontOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCommseqEmailsResponse;
    }>;
    getEmailEmailsMultiple(storefrontOid: number, emailCommseqEmailsRequest: EmailCommseqEmailsRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCommseqEmailsResponse;
    }>;
    getEmailFlow(storefrontOid: number, emailFlowUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailFlowResponse;
    }>;
    getEmailFlowScreenshots(storefrontOid: number, emailFlowUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: ScreenshotsResponse;
    }>;
    getEmailFlows(storefrontOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailFlowsResponse;
    }>;
    getEmailGlobalSettings(options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailGlobalSettingsResponse;
    }>;
    getEmailList(storefrontOid: number, emailListUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailListResponse;
    }>;
    getEmailListCustomerEditorUrl(storefrontOid: number, emailListUuid: string, emailCustomerUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCustomerEditorUrlResponse;
    }>;
    getEmailListCustomers(storefrontOid: number, emailListUuid: string, pageNumber?: number, pageSize?: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailListCustomersResponse;
    }>;
    getEmailLists(storefrontOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailListsResponse;
    }>;
    getEmailPerformance(storefrontOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailPerformanceResponse;
    }>;
    getEmailPlan(storefrontOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailPlanResponse;
    }>;
    getEmailPostcard(storefrontOid: number, commseqPostcardUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCommseqPostcardResponse;
    }>;
    getEmailPostcards(storefrontOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCommseqPostcardsResponse;
    }>;
    getEmailPostcardsMultiple(storefrontOid: number, emailCommseqPostcardsRequest: EmailCommseqPostcardsRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCommseqPostcardsResponse;
    }>;
    getEmailSegment(storefrontOid: number, emailSegmentUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailSegmentResponse;
    }>;
    getEmailSegmentCustomerEditorUrl(storefrontOid: number, emailSegmentUuid: string, emailCustomerUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCustomerEditorUrlResponse;
    }>;
    getEmailSegmentCustomers(storefrontOid: number, emailSegmentUuid: string, pageNumber?: number, pageSize?: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailSegmentCustomersResponse;
    }>;
    getEmailSegments(storefrontOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailSegmentsResponse;
    }>;
    getEmailSendingDomain(domain: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailSendingDomainResponse;
    }>;
    getEmailSendingDomainStatus(domain: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailSendingDomainResponse;
    }>;
    getEmailSendingDomains(options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailSendingDomainsResponse;
    }>;
    getEmailSettings(storefrontOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailSettingsResponse;
    }>;
    getEmailTemplate(storefrontOid: number, emailTemplateOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailTemplate;
    }>;
    getEmailTemplates(storefrontOid: number, triggerType?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailTemplatesResponse;
    }>;
    getEmailThirdPartyProviders(storefrontOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailThirdPartyProvidersResponse;
    }>;
    getExperiments(storefrontOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: ExperimentsResponse;
    }>;
    getHistogramPropertyNames(storefrontOid: number, propertyType?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailHistogramPropertyNamesResponse;
    }>;
    getHistogramPropertyValues(storefrontOid: number, propertyName?: string, propertyType?: string, limit?: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailHistogramPropertyValuesResponse;
    }>;
    getLibraryFilterValues(options?: any): Promise<{
        response: http.ClientResponse;
        body: LibraryFilterValuesResponse;
    }>;
    getLibraryItem(libraryItemOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: LibraryItemResponse;
    }>;
    getThumbnailParameters(thumbnailParameters: ThumbnailParametersRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: ThumbnailParametersResponse;
    }>;
    getTransactionEmail(storefrontOid: number, emailId: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: TransactionEmailResponse;
    }>;
    getTransactionEmailList(storefrontOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: TransactionEmailListResponse;
    }>;
    getTransactionEmailScreenshots(storefrontOid: number, emailId: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: ScreenshotsResponse;
    }>;
    globalUnsubscribe(storefrontOid: number, unsubscribe: EmailGlobalUnsubscribeRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailGlobalUnsubscribeResponse;
    }>;
    importEmailThirdPartyProviderList(storefrontOid: number, importRequest: EmailThirdPartyListImportRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    insertEmailCampaign(storefrontOid: number, emailCampaign: EmailCampaign, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCampaignResponse;
    }>;
    insertEmailCommseq(storefrontOid: number, emailCommseq: EmailCommseq, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCommseqResponse;
    }>;
    insertEmailEmail(storefrontOid: number, emailCommseqEmail: EmailCommseqEmail, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCommseqEmailResponse;
    }>;
    insertEmailFlow(storefrontOid: number, emailFlow: EmailFlow, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailFlowResponse;
    }>;
    insertEmailList(storefrontOid: number, emailList: EmailList, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailListResponse;
    }>;
    insertEmailPostcard(storefrontOid: number, emailCommseqPostcard: EmailCommseqPostcard, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCommseqPostcardResponse;
    }>;
    insertEmailSegment(storefrontOid: number, emailSegment: EmailSegment, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailSegmentResponse;
    }>;
    prepareDownloadEmailSegment(storefrontOid: number, emailSegmentUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailSegmentDownloadPrepareResponse;
    }>;
    publishLibraryItem(libraryItemOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: LibraryItemResponse;
    }>;
    purchaseLibraryItem(libraryItemOid: number, storefrontOid?: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: LibraryItemResponse;
    }>;
    releaseEmailCommseqStepWaiting(storefrontOid: number, commseqUuid: string, commseqStepUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    review(storefrontOid: number, commseqEmailUuid: string, emailCommseqEmailReviewRequest: EmailCommseqEmailSendTestRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCommseqEmailSendTestResponse;
    }>;
    search(category?: string, matches?: string, storefrontOid?: string, maxHits?: number, subcategory?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: LookupResponse;
    }>;
    search2(lookupRequest: LookupRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: LookupResponse;
    }>;
    searchEmailListCustomers(storefrontOid: number, emailListUuid: string, startsWith?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailListCustomersResponse;
    }>;
    searchEmailSegmentCustomers(storefrontOid: number, emailSegmentUuid: string, startsWith?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailSegmentCustomersResponse;
    }>;
    searchLibraryItems(itemQuery: LibraryItemQuery, limit?: number, offset?: number, sort?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: LibraryItemsResponse;
    }>;
    searchPublishedItems(itemQuery: LibraryItemQuery, limit?: number, offset?: number, sort?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: LibraryItemsResponse;
    }>;
    searchReviewItems(itemQuery: LibraryItemQuery, limit?: number, offset?: number, sort?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: LibraryItemsResponse;
    }>;
    searchSharedItems(itemQuery: LibraryItemQuery, limit?: number, offset?: number, sort?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: LibraryItemsResponse;
    }>;
    sendEmailTest(storefrontOid: number, commseqEmailUuid: string, emailCommseqEmailTestRequest: EmailCommseqEmailSendTestRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCommseqEmailSendTestResponse;
    }>;
    sendPostcardTest(storefrontOid: number, commseqPostcardUuid: string, emailCommseqPostcardTestRequest: EmailCommseqPostcardSendTestRequest, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCommseqPostcardSendTestResponse;
    }>;
    startEmailCampaign(storefrontOid: number, emailCampaignUuid: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: BaseResponse;
    }>;
    subscribeToEmailList(storefrontOid: number, emailListUuid: string, customers: Array<EmailCustomer>, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailListSubscribeResponse;
    }>;
    updateEmailCampaign(storefrontOid: number, emailCampaignUuid: string, emailCampaign: EmailCampaign, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCampaignResponse;
    }>;
    updateEmailCommseq(storefrontOid: number, commseqUuid: string, emailCommseq: EmailCommseq, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCommseqResponse;
    }>;
    updateEmailCustomer(storefrontOid: number, emailCustomerUuid: string, emailCustomer: EmailCustomer, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    updateEmailEmail(storefrontOid: number, commseqEmailUuid: string, emailCommseqEmail: EmailCommseqEmail, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCommseqEmailResponse;
    }>;
    updateEmailFlow(storefrontOid: number, emailFlowUuid: string, emailFlow: EmailFlow, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailFlowResponse;
    }>;
    updateEmailGlobalSettings(globalSettings: EmailGlobalSettings, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailGlobalSettingsResponse;
    }>;
    updateEmailList(storefrontOid: number, emailListUuid: string, emailList: EmailList, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailListResponse;
    }>;
    updateEmailPlan(storefrontOid: number, settings: EmailPlan, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailPlanResponse;
    }>;
    updateEmailPostcard(storefrontOid: number, commseqPostcardUuid: string, emailCommseqPostcard: EmailCommseqPostcard, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailCommseqPostcardResponse;
    }>;
    updateEmailSegment(storefrontOid: number, emailSegmentUuid: string, emailSegment: EmailSegment, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailSegmentResponse;
    }>;
    updateEmailSettings(storefrontOid: number, settings: EmailSettings, options?: any): Promise<{
        response: http.ClientResponse;
        body: EmailSettingsResponse;
    }>;
    updateExperiment(storefrontOid: number, storefrontExperimentOid: number, experiment: Experiment, options?: any): Promise<{
        response: http.ClientResponse;
        body: ExperimentResponse;
    }>;
    updateLibraryItem(libraryItemOid: number, libraryItem: LibraryItem, options?: any): Promise<{
        response: http.ClientResponse;
        body: LibraryItemResponse;
    }>;
    updateTransactionEmail(storefrontOid: number, emailId: string, transactionEmail: TransactionEmail, options?: any): Promise<{
        response: http.ClientResponse;
        body: TransactionEmailResponse;
    }>;
}
export declare enum TaxApiApiKeys {
    ultraCartBrowserApiKey = 0,
    ultraCartSimpleApiKey = 1,
}
export declare class TaxApi {
    protected _basePath: string;
    protected _defaultHeaders: Headers;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'ultraCartBrowserApiKey': ApiKeyAuth;
        'ultraCartOauth': OAuth;
        'ultraCartSimpleApiKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: TaxApiApiKeys, value: string): void;
    setApiVersion(value: string): void;
    defaultHeaders: Headers;
    accessToken: string;
    deleteTaxProviderSelfCity(city: string, taxCity: TaxCity, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    deleteTaxProviderSelfCountry(countryCode: string, taxCountry: TaxCountry, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    deleteTaxProviderSelfCounty(county: string, taxCounty: TaxCounty, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    deleteTaxProviderSelfPostalCode(postalCode: string, taxPostalCode: TaxPostalCode, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    deleteTaxProviderSelfState(stateCode: string, taxState: TaxState, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    getTaxProviderAvalara(options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxProviderAvalara;
    }>;
    getTaxProviderAvalaraCompanies(taxProviderAvalara: TaxProviderAvalara, options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxProviderAvalaraCompaniesResult;
    }>;
    getTaxProviderAvalaraTest(options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxProviderTestResult;
    }>;
    getTaxProviderSelf(options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxProviderSelf;
    }>;
    getTaxProviderSelfCountries(options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxProviderSelfCountriesResponse;
    }>;
    getTaxProviderSelfRegionsByCountryCode(countryCode: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxProviderSelfRegionsResponse;
    }>;
    getTaxProviderSovos(options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxProviderSovos;
    }>;
    getTaxProviderSovosTest(options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxProviderTestResult;
    }>;
    getTaxProviderTaxJar(options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxProviderTaxJar;
    }>;
    getTaxProviderTaxJarTest(options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxProviderTestResult;
    }>;
    getTaxProviderUltraCart(options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxProviderUltraCart;
    }>;
    getTaxProviders(limit?: number, offset?: number, expand?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxProvidersResponse;
    }>;
    setActiveTaxProvider(providerName: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxProviderActivateResult;
    }>;
    updateTaxProviderAvalara(taxProviderAvalara: TaxProviderAvalara, options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxProviderAvalara;
    }>;
    updateTaxProviderSelf(taxProviderSelf: TaxProviderSelf, options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxProviderSelf;
    }>;
    updateTaxProviderSelfCity(city: string, taxCity: TaxCity, options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxCity;
    }>;
    updateTaxProviderSelfCountry(countryCode: string, taxCountry: TaxCountry, options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxCountry;
    }>;
    updateTaxProviderSelfCounty(county: string, taxCounty: TaxCounty, options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxCounty;
    }>;
    updateTaxProviderSelfPostalCode(postalCode: string, taxPostalCode: TaxPostalCode, options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxPostalCode;
    }>;
    updateTaxProviderSelfState(stateCode: string, taxState: TaxState, options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxState;
    }>;
    updateTaxProviderSovos(taxProviderSovos: TaxProviderSovos, options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxProviderSovos;
    }>;
    updateTaxProviderTaxJar(taxProviderTaxJar: TaxProviderTaxJar, options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxProviderTaxJar;
    }>;
    updateTaxProviderUltraCart(taxProviderUltracart: TaxProviderUltraCart, options?: any): Promise<{
        response: http.ClientResponse;
        body: TaxProviderUltraCart;
    }>;
}
export declare enum UserApiApiKeys {
    ultraCartBrowserApiKey = 0,
    ultraCartSimpleApiKey = 1,
}
export declare class UserApi {
    protected _basePath: string;
    protected _defaultHeaders: Headers;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'ultraCartBrowserApiKey': ApiKeyAuth;
        'ultraCartOauth': OAuth;
        'ultraCartSimpleApiKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: UserApiApiKeys, value: string): void;
    setApiVersion(value: string): void;
    defaultHeaders: Headers;
    accessToken: string;
    deleteGroup(groupOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    deleteUser(userId: number, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    getGroup(groupOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    getGroups(options?: any): Promise<{
        response: http.ClientResponse;
        body: GroupsResponse;
    }>;
    getUser(userId: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: UserResponse;
    }>;
    getUserLogins(userId: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: UserLoginsResponse;
    }>;
    getUsers(options?: any): Promise<{
        response: http.ClientResponse;
        body: UsersResponse;
    }>;
    insertGroup(group: Group, options?: any): Promise<{
        response: http.ClientResponse;
        body: GroupResponse;
    }>;
    insertUser(user: User, options?: any): Promise<{
        response: http.ClientResponse;
        body: UserResponse;
    }>;
    updateGroup(group: Group, groupOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: GroupResponse;
    }>;
    updateUser(user: User, userId: number, options?: any): Promise<{
        response: http.ClientResponse;
        body: UserResponse;
    }>;
}
export declare enum WebhookApiApiKeys {
    ultraCartBrowserApiKey = 0,
    ultraCartSimpleApiKey = 1,
}
export declare class WebhookApi {
    protected _basePath: string;
    protected _defaultHeaders: Headers;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'ultraCartBrowserApiKey': ApiKeyAuth;
        'ultraCartOauth': OAuth;
        'ultraCartSimpleApiKey': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: WebhookApiApiKeys, value: string): void;
    setApiVersion(value: string): void;
    defaultHeaders: Headers;
    accessToken: string;
    deleteWebhook(webhookOid: number, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    deleteWebhookByUrl(webhook: Webhook, options?: any): Promise<{
        response: http.ClientResponse;
        body: WebhookResponse;
    }>;
    getWebhookLog(webhookOid: number, requestId: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: WebhookLogResponse;
    }>;
    getWebhookLogSummaries(webhookOid: number, limit?: number, offset?: number, since?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: WebhookLogSummariesResponse;
    }>;
    getWebhooks(limit?: number, offset?: number, sort?: string, placeholders?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body: WebhooksResponse;
    }>;
    insertWebhook(webhook: Webhook, placeholders?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body: WebhookResponse;
    }>;
    resendEvent(webhookOid: number, eventName: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: WebhookSampleRequestResponse;
    }>;
    updateWebhook(webhook: Webhook, webhookOid: number, placeholders?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body: WebhookResponse;
    }>;
}
