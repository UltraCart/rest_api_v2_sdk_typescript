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
 * @interface ItemReview
 */
export interface ItemReview {
    /**
     * Customer profile object identifier
     * @type {number}
     * @memberof ItemReview
     */
    customer_profile_oid?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ItemReview
     */
    featured?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ItemReview
     */
    helperful_no_votes?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemReview
     */
    helpful_yes_votes?: number;
    /**
     * Merchant Reply (set to an empty string to remove)
     * @type {string}
     * @memberof ItemReview
     */
    merchant_reply?: string;
    /**
     * 
     * @type {string}
     * @memberof ItemReview
     */
    order_id?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemReview
     */
    overall?: number;
    /**
     * Rating Name 1
     * @type {string}
     * @memberof ItemReview
     */
    rating_name1?: string;
    /**
     * Rating Name 10
     * @type {string}
     * @memberof ItemReview
     */
    rating_name10?: string;
    /**
     * Rating Name 2
     * @type {string}
     * @memberof ItemReview
     */
    rating_name2?: string;
    /**
     * Rating Name 3
     * @type {string}
     * @memberof ItemReview
     */
    rating_name3?: string;
    /**
     * Rating Name 4
     * @type {string}
     * @memberof ItemReview
     */
    rating_name4?: string;
    /**
     * Rating Name 5
     * @type {string}
     * @memberof ItemReview
     */
    rating_name5?: string;
    /**
     * Rating Name 6
     * @type {string}
     * @memberof ItemReview
     */
    rating_name6?: string;
    /**
     * Rating Name 7
     * @type {string}
     * @memberof ItemReview
     */
    rating_name7?: string;
    /**
     * Rating Name 8
     * @type {string}
     * @memberof ItemReview
     */
    rating_name8?: string;
    /**
     * Rating Name 9
     * @type {string}
     * @memberof ItemReview
     */
    rating_name9?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemReview
     */
    rating_score1?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemReview
     */
    rating_score10?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemReview
     */
    rating_score2?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemReview
     */
    rating_score3?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemReview
     */
    rating_score4?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemReview
     */
    rating_score5?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemReview
     */
    rating_score6?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemReview
     */
    rating_score7?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemReview
     */
    rating_score8?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemReview
     */
    rating_score9?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemReview
     */
    recommend_store_to_friend?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ItemReview
     */
    recommend_to_friend?: boolean;
    /**
     * Review
     * @type {string}
     * @memberof ItemReview
     */
    review?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemReview
     */
    review_oid?: number;
    /**
     * Nickname
     * @type {string}
     * @memberof ItemReview
     */
    reviewed_nickname?: string;
    /**
     * Reviewer Email
     * @type {string}
     * @memberof ItemReview
     */
    reviewer_email?: string;
    /**
     * Location
     * @type {string}
     * @memberof ItemReview
     */
    reviewer_location?: string;
    /**
     * Status of the review
     * @type {string}
     * @memberof ItemReview
     */
    status?: ItemReviewStatusEnum;
    /**
     * Store Feedback
     * @type {string}
     * @memberof ItemReview
     */
    store_feedback?: string;
    /**
     * Date/time of review submission
     * @type {string}
     * @memberof ItemReview
     */
    submitted_dts?: string;
    /**
     * Title
     * @type {string}
     * @memberof ItemReview
     */
    title?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ItemReview)[] = ["customer_profile_oid", "featured", "helperful_no_votes", "helpful_yes_votes", "merchant_reply", "order_id", "overall", "rating_name1", "rating_name10", "rating_name2", "rating_name3", "rating_name4", "rating_name5", "rating_name6", "rating_name7", "rating_name8", "rating_name9", "rating_score1", "rating_score10", "rating_score2", "rating_score3", "rating_score4", "rating_score5", "rating_score6", "rating_score7", "rating_score8", "rating_score9", "recommend_store_to_friend", "recommend_to_friend", "review", "review_oid", "reviewed_nickname", "reviewer_email", "reviewer_location", "status", "store_feedback", "submitted_dts", "title"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * @export
 */
export const ItemReviewStatusEnum = {
    Approved: 'approved',
    Unapproved: 'unapproved',
    Rejected: 'rejected',
    MultimediaProcessing: 'multimedia processing'
} as const;
export type ItemReviewStatusEnum = typeof ItemReviewStatusEnum[keyof typeof ItemReviewStatusEnum];


/**
 * Check if a given object implements the ItemReview interface.
 */
export function instanceOfItemReview(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemReviewFromJSON(json: any): ItemReview {
    return ItemReviewFromJSONTyped(json, false);
}

export function ItemReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemReview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customer_profile_oid': !exists(json, 'customer_profile_oid') ? undefined : json['customer_profile_oid'],
        'featured': !exists(json, 'featured') ? undefined : json['featured'],
        'helperful_no_votes': !exists(json, 'helperful_no_votes') ? undefined : json['helperful_no_votes'],
        'helpful_yes_votes': !exists(json, 'helpful_yes_votes') ? undefined : json['helpful_yes_votes'],
        'merchant_reply': !exists(json, 'merchant_reply') ? undefined : json['merchant_reply'],
        'order_id': !exists(json, 'order_id') ? undefined : json['order_id'],
        'overall': !exists(json, 'overall') ? undefined : json['overall'],
        'rating_name1': !exists(json, 'rating_name1') ? undefined : json['rating_name1'],
        'rating_name10': !exists(json, 'rating_name10') ? undefined : json['rating_name10'],
        'rating_name2': !exists(json, 'rating_name2') ? undefined : json['rating_name2'],
        'rating_name3': !exists(json, 'rating_name3') ? undefined : json['rating_name3'],
        'rating_name4': !exists(json, 'rating_name4') ? undefined : json['rating_name4'],
        'rating_name5': !exists(json, 'rating_name5') ? undefined : json['rating_name5'],
        'rating_name6': !exists(json, 'rating_name6') ? undefined : json['rating_name6'],
        'rating_name7': !exists(json, 'rating_name7') ? undefined : json['rating_name7'],
        'rating_name8': !exists(json, 'rating_name8') ? undefined : json['rating_name8'],
        'rating_name9': !exists(json, 'rating_name9') ? undefined : json['rating_name9'],
        'rating_score1': !exists(json, 'rating_score1') ? undefined : json['rating_score1'],
        'rating_score10': !exists(json, 'rating_score10') ? undefined : json['rating_score10'],
        'rating_score2': !exists(json, 'rating_score2') ? undefined : json['rating_score2'],
        'rating_score3': !exists(json, 'rating_score3') ? undefined : json['rating_score3'],
        'rating_score4': !exists(json, 'rating_score4') ? undefined : json['rating_score4'],
        'rating_score5': !exists(json, 'rating_score5') ? undefined : json['rating_score5'],
        'rating_score6': !exists(json, 'rating_score6') ? undefined : json['rating_score6'],
        'rating_score7': !exists(json, 'rating_score7') ? undefined : json['rating_score7'],
        'rating_score8': !exists(json, 'rating_score8') ? undefined : json['rating_score8'],
        'rating_score9': !exists(json, 'rating_score9') ? undefined : json['rating_score9'],
        'recommend_store_to_friend': !exists(json, 'recommend_store_to_friend') ? undefined : json['recommend_store_to_friend'],
        'recommend_to_friend': !exists(json, 'recommend_to_friend') ? undefined : json['recommend_to_friend'],
        'review': !exists(json, 'review') ? undefined : json['review'],
        'review_oid': !exists(json, 'review_oid') ? undefined : json['review_oid'],
        'reviewed_nickname': !exists(json, 'reviewed_nickname') ? undefined : json['reviewed_nickname'],
        'reviewer_email': !exists(json, 'reviewer_email') ? undefined : json['reviewer_email'],
        'reviewer_location': !exists(json, 'reviewer_location') ? undefined : json['reviewer_location'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'store_feedback': !exists(json, 'store_feedback') ? undefined : json['store_feedback'],
        'submitted_dts': !exists(json, 'submitted_dts') ? undefined : json['submitted_dts'],
        'title': !exists(json, 'title') ? undefined : json['title'],
    };
}

export function ItemReviewToJSON(value?: ItemReview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customer_profile_oid': value.customer_profile_oid,
        'featured': value.featured,
        'helperful_no_votes': value.helperful_no_votes,
        'helpful_yes_votes': value.helpful_yes_votes,
        'merchant_reply': value.merchant_reply,
        'order_id': value.order_id,
        'overall': value.overall,
        'rating_name1': value.rating_name1,
        'rating_name10': value.rating_name10,
        'rating_name2': value.rating_name2,
        'rating_name3': value.rating_name3,
        'rating_name4': value.rating_name4,
        'rating_name5': value.rating_name5,
        'rating_name6': value.rating_name6,
        'rating_name7': value.rating_name7,
        'rating_name8': value.rating_name8,
        'rating_name9': value.rating_name9,
        'rating_score1': value.rating_score1,
        'rating_score10': value.rating_score10,
        'rating_score2': value.rating_score2,
        'rating_score3': value.rating_score3,
        'rating_score4': value.rating_score4,
        'rating_score5': value.rating_score5,
        'rating_score6': value.rating_score6,
        'rating_score7': value.rating_score7,
        'rating_score8': value.rating_score8,
        'rating_score9': value.rating_score9,
        'recommend_store_to_friend': value.recommend_store_to_friend,
        'recommend_to_friend': value.recommend_to_friend,
        'review': value.review,
        'review_oid': value.review_oid,
        'reviewed_nickname': value.reviewed_nickname,
        'reviewer_email': value.reviewer_email,
        'reviewer_location': value.reviewer_location,
        'status': value.status,
        'store_feedback': value.store_feedback,
        'submitted_dts': value.submitted_dts,
        'title': value.title,
    };
}

