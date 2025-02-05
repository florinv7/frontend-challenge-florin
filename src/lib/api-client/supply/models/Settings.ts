/* tslint:disable */
/* eslint-disable */
/**
 * Arke Supply API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { DateAttr } from './DateAttr';
import {
    DateAttrFromJSON,
    DateAttrFromJSONTyped,
    DateAttrToJSON,
} from './DateAttr';
import type { TemplatesAttr } from './TemplatesAttr';
import {
    TemplatesAttrFromJSON,
    TemplatesAttrFromJSONTyped,
    TemplatesAttrToJSON,
} from './TemplatesAttr';

/**
 * 
 * @export
 * @interface Settings
 */
export interface Settings {
    /**
     * 
     * @type {DateAttr}
     * @memberof Settings
     */
    created?: DateAttr;
    /**
     * 
     * @type {DateAttr}
     * @memberof Settings
     */
    updated?: DateAttr;
    /**
     * 
     * @type {number}
     * @memberof Settings
     */
    version: number;
    /**
     * 
     * @type {boolean}
     * @memberof Settings
     */
    archived?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Settings
     */
    notes?: string;
    /**
     * 
     * @type {TemplatesAttr}
     * @memberof Settings
     */
    templates: TemplatesAttr;
}

/**
 * Check if a given object implements the Settings interface.
 */
export function instanceOfSettings(value: object): value is Settings {
    if (!('version' in value) || value['version'] === undefined) return false;
    if (!('templates' in value) || value['templates'] === undefined) return false;
    return true;
}

export function SettingsFromJSON(json: any): Settings {
    return SettingsFromJSONTyped(json, false);
}

export function SettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Settings {
    if (json == null) {
        return json;
    }
    return {
        
        'created': json['created'] == null ? undefined : DateAttrFromJSON(json['created']),
        'updated': json['updated'] == null ? undefined : DateAttrFromJSON(json['updated']),
        'version': json['version'],
        'archived': json['archived'] == null ? undefined : json['archived'],
        'notes': json['notes'] == null ? undefined : json['notes'],
        'templates': TemplatesAttrFromJSON(json['templates']),
    };
}

export function SettingsToJSON(value?: Settings | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created': DateAttrToJSON(value['created']),
        'updated': DateAttrToJSON(value['updated']),
        'version': value['version'],
        'archived': value['archived'],
        'notes': value['notes'],
        'templates': TemplatesAttrToJSON(value['templates']),
    };
}

