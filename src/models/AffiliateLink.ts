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
 * @interface AffiliateLink
 */
export interface AffiliateLink {
    /**
     * Unique object identifier associated with this link
     * @type {number}
     * @memberof AffiliateLink
     */
    affiliate_link_oid?: number;
    /**
     * Managed link OID that this link object was generated from
     * @type {number}
     * @memberof AffiliateLink
     */
    affiliate_managed_link_oid?: number;
    /**
     * Affiliate object ID associated with this link
     * @type {number}
     * @memberof AffiliateLink
     */
    affiliate_oid?: number;
    /**
     * The affiliate program item this managed link is associated with
     * @type {number}
     * @memberof AffiliateLink
     */
    affiliate_program_item_oid?: number;
    /**
     * Code associated with the link
     * @type {string}
     * @memberof AffiliateLink
     */
    code?: string;
    /**
     * Creative (image or text) associated with this link
     * @type {number}
     * @memberof AffiliateLink
     */
    creative_oid?: number;
    /**
     * Custom HTML associated with this link
     * @type {string}
     * @memberof AffiliateLink
     */
    custom_html?: string;
    /**
     * Approved status of the custom html
     * @type {string}
     * @memberof AffiliateLink
     */
    custom_html_approval_status?: AffiliateLinkCustomHtmlApprovalStatusEnum;
    /**
     * Custom landing page URL if configured
     * @type {string}
     * @memberof AffiliateLink
     */
    custom_landing_url?: string;
    /**
     * True if the link has been deleted
     * @type {boolean}
     * @memberof AffiliateLink
     */
    deleted?: boolean;
    /**
     * Invisible link approval status
     * @type {string}
     * @memberof AffiliateLink
     */
    invisible_link_approval_status?: AffiliateLinkInvisibleLinkApprovalStatusEnum;
    /**
     * Invisible link URL prefix
     * @type {string}
     * @memberof AffiliateLink
     */
    invisible_link_url_prefix?: string;
    /**
     * Name of the link
     * @type {string}
     * @memberof AffiliateLink
     */
    name?: string;
    /**
     * Type of link
     * @type {string}
     * @memberof AffiliateLink
     */
    type?: AffiliateLinkTypeEnum;
}



/**
 * @export
 */
export const AffiliateLinkCustomHtmlApprovalStatusEnum = {
    Pending: 'Pending',
    Approved: 'Approved',
    Rejected: 'Rejected'
} as const;
export type AffiliateLinkCustomHtmlApprovalStatusEnum = typeof AffiliateLinkCustomHtmlApprovalStatusEnum[keyof typeof AffiliateLinkCustomHtmlApprovalStatusEnum];

/**
 * @export
 */
export const AffiliateLinkInvisibleLinkApprovalStatusEnum = {
    Pending: 'Pending',
    Approved: 'Approved',
    Rejected: 'Rejected'
} as const;
export type AffiliateLinkInvisibleLinkApprovalStatusEnum = typeof AffiliateLinkInvisibleLinkApprovalStatusEnum[keyof typeof AffiliateLinkInvisibleLinkApprovalStatusEnum];

/**
 * @export
 */
export const AffiliateLinkTypeEnum = {
    Image: 'image',
    Text: 'text',
    Invisible: 'invisible',
    Direct: 'direct'
} as const;
export type AffiliateLinkTypeEnum = typeof AffiliateLinkTypeEnum[keyof typeof AffiliateLinkTypeEnum];


/**
 * Check if a given object implements the AffiliateLink interface.
 */
export function instanceOfAffiliateLink(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AffiliateLinkFromJSON(json: any): AffiliateLink {
    return AffiliateLinkFromJSONTyped(json, false);
}

export function AffiliateLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): AffiliateLink {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'affiliate_link_oid': !exists(json, 'affiliate_link_oid') ? undefined : json['affiliate_link_oid'],
        'affiliate_managed_link_oid': !exists(json, 'affiliate_managed_link_oid') ? undefined : json['affiliate_managed_link_oid'],
        'affiliate_oid': !exists(json, 'affiliate_oid') ? undefined : json['affiliate_oid'],
        'affiliate_program_item_oid': !exists(json, 'affiliate_program_item_oid') ? undefined : json['affiliate_program_item_oid'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'creative_oid': !exists(json, 'creative_oid') ? undefined : json['creative_oid'],
        'custom_html': !exists(json, 'custom_html') ? undefined : json['custom_html'],
        'custom_html_approval_status': !exists(json, 'custom_html_approval_status') ? undefined : json['custom_html_approval_status'],
        'custom_landing_url': !exists(json, 'custom_landing_url') ? undefined : json['custom_landing_url'],
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
        'invisible_link_approval_status': !exists(json, 'invisible_link_approval_status') ? undefined : json['invisible_link_approval_status'],
        'invisible_link_url_prefix': !exists(json, 'invisible_link_url_prefix') ? undefined : json['invisible_link_url_prefix'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function AffiliateLinkToJSON(value?: AffiliateLink | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'affiliate_link_oid': value.affiliate_link_oid,
        'affiliate_managed_link_oid': value.affiliate_managed_link_oid,
        'affiliate_oid': value.affiliate_oid,
        'affiliate_program_item_oid': value.affiliate_program_item_oid,
        'code': value.code,
        'creative_oid': value.creative_oid,
        'custom_html': value.custom_html,
        'custom_html_approval_status': value.custom_html_approval_status,
        'custom_landing_url': value.custom_landing_url,
        'deleted': value.deleted,
        'invisible_link_approval_status': value.invisible_link_approval_status,
        'invisible_link_url_prefix': value.invisible_link_url_prefix,
        'name': value.name,
        'type': value.type,
    };
}

