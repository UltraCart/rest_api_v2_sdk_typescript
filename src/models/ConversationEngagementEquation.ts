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
    ConversationEngagementEquationGroup,
    ConversationEngagementEquationGroupFromJSON,
    ConversationEngagementEquationGroupFromJSONTyped,
    ConversationEngagementEquationGroupToJSON,
} from './ConversationEngagementEquationGroup';

/**
 * 
 * @export
 * @interface ConversationEngagementEquation
 */
export interface ConversationEngagementEquation {
    /**
     * 
     * @type {Array<ConversationEngagementEquationGroup>}
     * @memberof ConversationEngagementEquation
     */
    groups?: Array<ConversationEngagementEquationGroup>;
}



/**
 * Check if a given object implements the ConversationEngagementEquation interface.
 */
export function instanceOfConversationEngagementEquation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationEngagementEquationFromJSON(json: any): ConversationEngagementEquation {
    return ConversationEngagementEquationFromJSONTyped(json, false);
}

export function ConversationEngagementEquationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationEngagementEquation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'groups': !exists(json, 'groups') ? undefined : ((json['groups'] as Array<any>).map(ConversationEngagementEquationGroupFromJSON)),
    };
}

export function ConversationEngagementEquationToJSON(value?: ConversationEngagementEquation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'groups': value.groups === undefined ? undefined : ((value.groups as Array<any>).map(ConversationEngagementEquationGroupToJSON)),
    };
}

