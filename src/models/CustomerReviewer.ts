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
 * @interface CustomerReviewer
 */
export interface CustomerReviewer {
    /**
     * True if reviewes from this customer profile should automatically be approved
     * @type {boolean}
     * @memberof CustomerReviewer
     */
    auto_approve?: boolean;
    /**
     * Average overall rating of items reviewed
     * @type {number}
     * @memberof CustomerReviewer
     */
    average_overall_rating?: number;
    /**
     * True if the customer is an expert
     * @type {boolean}
     * @memberof CustomerReviewer
     */
    expert?: boolean;
    /**
     * First review
     * @type {string}
     * @memberof CustomerReviewer
     */
    first_review?: string;
    /**
     * Last review
     * @type {string}
     * @memberof CustomerReviewer
     */
    last_review?: string;
    /**
     * Location of the reviewer
     * @type {string}
     * @memberof CustomerReviewer
     */
    location?: string;
    /**
     * Nickname of the reviewer
     * @type {string}
     * @memberof CustomerReviewer
     */
    nickname?: string;
    /**
     * Number of helpful review votes
     * @type {number}
     * @memberof CustomerReviewer
     */
    number_helpful_review_votes?: number;
    /**
     * Rank of this reviewer
     * @type {number}
     * @memberof CustomerReviewer
     */
    rank?: number;
    /**
     * Number of reviews contributed
     * @type {number}
     * @memberof CustomerReviewer
     */
    reviews_contributed?: number;
}



/**
 * Check if a given object implements the CustomerReviewer interface.
 */
export function instanceOfCustomerReviewer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerReviewerFromJSON(json: any): CustomerReviewer {
    return CustomerReviewerFromJSONTyped(json, false);
}

export function CustomerReviewerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'auto_approve': !exists(json, 'auto_approve') ? undefined : json['auto_approve'],
        'average_overall_rating': !exists(json, 'average_overall_rating') ? undefined : json['average_overall_rating'],
        'expert': !exists(json, 'expert') ? undefined : json['expert'],
        'first_review': !exists(json, 'first_review') ? undefined : json['first_review'],
        'last_review': !exists(json, 'last_review') ? undefined : json['last_review'],
        'location': !exists(json, 'location') ? undefined : json['location'],
        'nickname': !exists(json, 'nickname') ? undefined : json['nickname'],
        'number_helpful_review_votes': !exists(json, 'number_helpful_review_votes') ? undefined : json['number_helpful_review_votes'],
        'rank': !exists(json, 'rank') ? undefined : json['rank'],
        'reviews_contributed': !exists(json, 'reviews_contributed') ? undefined : json['reviews_contributed'],
    };
}

export function CustomerReviewerToJSON(value?: CustomerReviewer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'auto_approve': value.auto_approve,
        'average_overall_rating': value.average_overall_rating,
        'expert': value.expert,
        'first_review': value.first_review,
        'last_review': value.last_review,
        'location': value.location,
        'nickname': value.nickname,
        'number_helpful_review_votes': value.number_helpful_review_votes,
        'rank': value.rank,
        'reviews_contributed': value.reviews_contributed,
    };
}

