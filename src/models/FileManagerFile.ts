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
 * @interface FileManagerFile
 */
export interface FileManagerFile {
    /**
     * 
     * @type {boolean}
     * @memberof FileManagerFile
     */
    favorite?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FileManagerFile
     */
    hostname?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FileManagerFile
     */
    i18n_violation?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FileManagerFile
     */
    icon?: string;
    /**
     * 
     * @type {number}
     * @memberof FileManagerFile
     */
    internal_version?: number;
    /**
     * 
     * @type {string}
     * @memberof FileManagerFile
     */
    last_modified?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FileManagerFile
     */
    merge_conflict?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FileManagerFile
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof FileManagerFile
     */
    parent_storefront_fs_directory_oid?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FileManagerFile
     */
    part_of_active_theme?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FileManagerFile
     */
    path?: string;
    /**
     * 
     * @type {number}
     * @memberof FileManagerFile
     */
    raw_size?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FileManagerFile
     */
    selected?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FileManagerFile
     */
    size?: string;
    /**
     * 
     * @type {number}
     * @memberof FileManagerFile
     */
    storefront_fs_directory_oid?: number;
    /**
     * 
     * @type {number}
     * @memberof FileManagerFile
     */
    storefront_fs_file_oid?: number;
    /**
     * 
     * @type {number}
     * @memberof FileManagerFile
     */
    storefront_oid?: number;
    /**
     * CDN thumbnail 16x16 size
     * @type {string}
     * @memberof FileManagerFile
     */
    thumbnail_16_url?: string;
    /**
     * CDN thumbnail 32x32 size
     * @type {string}
     * @memberof FileManagerFile
     */
    thumbnail_32_url?: string;
    /**
     * CDN thumbnail 64x64 size
     * @type {string}
     * @memberof FileManagerFile
     */
    thumbnail_64_url?: string;
    /**
     * 
     * @type {string}
     * @memberof FileManagerFile
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof FileManagerFile
     */
    valid_velocity?: string;
}

export function FileManagerFileFromJSON(json: any): FileManagerFile {
    return FileManagerFileFromJSONTyped(json, false);
}

export function FileManagerFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileManagerFile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'favorite': !exists(json, 'favorite') ? undefined : json['favorite'],
        'hostname': !exists(json, 'hostname') ? undefined : json['hostname'],
        'i18n_violation': !exists(json, 'i18n_violation') ? undefined : json['i18n_violation'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
        'internal_version': !exists(json, 'internal_version') ? undefined : json['internal_version'],
        'last_modified': !exists(json, 'last_modified') ? undefined : json['last_modified'],
        'merge_conflict': !exists(json, 'merge_conflict') ? undefined : json['merge_conflict'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'parent_storefront_fs_directory_oid': !exists(json, 'parent_storefront_fs_directory_oid') ? undefined : json['parent_storefront_fs_directory_oid'],
        'part_of_active_theme': !exists(json, 'part_of_active_theme') ? undefined : json['part_of_active_theme'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'raw_size': !exists(json, 'raw_size') ? undefined : json['raw_size'],
        'selected': !exists(json, 'selected') ? undefined : json['selected'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'storefront_fs_directory_oid': !exists(json, 'storefront_fs_directory_oid') ? undefined : json['storefront_fs_directory_oid'],
        'storefront_fs_file_oid': !exists(json, 'storefront_fs_file_oid') ? undefined : json['storefront_fs_file_oid'],
        'storefront_oid': !exists(json, 'storefront_oid') ? undefined : json['storefront_oid'],
        'thumbnail_16_url': !exists(json, 'thumbnail_16_url') ? undefined : json['thumbnail_16_url'],
        'thumbnail_32_url': !exists(json, 'thumbnail_32_url') ? undefined : json['thumbnail_32_url'],
        'thumbnail_64_url': !exists(json, 'thumbnail_64_url') ? undefined : json['thumbnail_64_url'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'valid_velocity': !exists(json, 'valid_velocity') ? undefined : json['valid_velocity'],
    };
}

export function FileManagerFileToJSON(value?: FileManagerFile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'favorite': value.favorite,
        'hostname': value.hostname,
        'i18n_violation': value.i18n_violation,
        'icon': value.icon,
        'internal_version': value.internal_version,
        'last_modified': value.last_modified,
        'merge_conflict': value.merge_conflict,
        'name': value.name,
        'parent_storefront_fs_directory_oid': value.parent_storefront_fs_directory_oid,
        'part_of_active_theme': value.part_of_active_theme,
        'path': value.path,
        'raw_size': value.raw_size,
        'selected': value.selected,
        'size': value.size,
        'storefront_fs_directory_oid': value.storefront_fs_directory_oid,
        'storefront_fs_file_oid': value.storefront_fs_file_oid,
        'storefront_oid': value.storefront_oid,
        'thumbnail_16_url': value.thumbnail_16_url,
        'thumbnail_32_url': value.thumbnail_32_url,
        'thumbnail_64_url': value.thumbnail_64_url,
        'type': value.type,
        'valid_velocity': value.valid_velocity,
    };
}
