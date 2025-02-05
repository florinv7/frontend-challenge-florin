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
import type { QuantifiedItem } from './QuantifiedItem';
import {
    QuantifiedItemFromJSON,
    QuantifiedItemFromJSONTyped,
    QuantifiedItemToJSON,
} from './QuantifiedItem';
import type { OrderDetails } from './OrderDetails';
import {
    OrderDetailsFromJSON,
    OrderDetailsFromJSONTyped,
    OrderDetailsToJSON,
} from './OrderDetails';

/**
 * 
 * @export
 * @interface TransportDocumentDetails
 */
export interface TransportDocumentDetails {
    /**
     * 
     * @type {DateAttr}
     * @memberof TransportDocumentDetails
     */
    created?: DateAttr;
    /**
     * 
     * @type {DateAttr}
     * @memberof TransportDocumentDetails
     */
    updated?: DateAttr;
    /**
     * 
     * @type {number}
     * @memberof TransportDocumentDetails
     */
    version: number;
    /**
     * 
     * @type {boolean}
     * @memberof TransportDocumentDetails
     */
    archived?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TransportDocumentDetails
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof TransportDocumentDetails
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TransportDocumentDetails
     */
    externalId: string;
    /**
     * 
     * @type {string}
     * @memberof TransportDocumentDetails
     */
    status: TransportDocumentDetailsStatusEnum;
    /**
     * 
     * @type {Date}
     * @memberof TransportDocumentDetails
     */
    time?: Date;
    /**
     * 
     * @type {string}
     * @memberof TransportDocumentDetails
     */
    supplierId?: string;
    /**
     * 
     * @type {string}
     * @memberof TransportDocumentDetails
     */
    orderInternalId?: string;
    /**
     * 
     * @type {string}
     * @memberof TransportDocumentDetails
     */
    orderId?: string;
    /**
     * 
     * @type {number}
     * @memberof TransportDocumentDetails
     */
    weight?: number;
    /**
     * 
     * @type {Array<QuantifiedItem>}
     * @memberof TransportDocumentDetails
     */
    rawMaterials: Array<QuantifiedItem>;
    /**
     * 
     * @type {OrderDetails}
     * @memberof TransportDocumentDetails
     */
    order?: OrderDetails;
}


/**
 * @export
 */
export const TransportDocumentDetailsStatusEnum = {
    Inbound: 'inbound',
    Accepted: 'accepted'
} as const;
export type TransportDocumentDetailsStatusEnum = typeof TransportDocumentDetailsStatusEnum[keyof typeof TransportDocumentDetailsStatusEnum];


/**
 * Check if a given object implements the TransportDocumentDetails interface.
 */
export function instanceOfTransportDocumentDetails(value: object): value is TransportDocumentDetails {
    if (!('version' in value) || value['version'] === undefined) return false;
    if (!('externalId' in value) || value['externalId'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('rawMaterials' in value) || value['rawMaterials'] === undefined) return false;
    return true;
}

export function TransportDocumentDetailsFromJSON(json: any): TransportDocumentDetails {
    return TransportDocumentDetailsFromJSONTyped(json, false);
}

export function TransportDocumentDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransportDocumentDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'created': json['created'] == null ? undefined : DateAttrFromJSON(json['created']),
        'updated': json['updated'] == null ? undefined : DateAttrFromJSON(json['updated']),
        'version': json['version'],
        'archived': json['archived'] == null ? undefined : json['archived'],
        'notes': json['notes'] == null ? undefined : json['notes'],
        'id': json['id'] == null ? undefined : json['id'],
        'externalId': json['external_id'],
        'status': json['status'],
        'time': json['time'] == null ? undefined : (new Date(json['time'])),
        'supplierId': json['supplier_id'] == null ? undefined : json['supplier_id'],
        'orderInternalId': json['order_internal_id'] == null ? undefined : json['order_internal_id'],
        'orderId': json['order_id'] == null ? undefined : json['order_id'],
        'weight': json['weight'] == null ? undefined : json['weight'],
        'rawMaterials': ((json['raw_materials'] as Array<any>).map(QuantifiedItemFromJSON)),
        'order': json['order'] == null ? undefined : OrderDetailsFromJSON(json['order']),
    };
}

export function TransportDocumentDetailsToJSON(value?: TransportDocumentDetails | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created': DateAttrToJSON(value['created']),
        'updated': DateAttrToJSON(value['updated']),
        'version': value['version'],
        'archived': value['archived'],
        'notes': value['notes'],
        'id': value['id'],
        'external_id': value['externalId'],
        'status': value['status'],
        'time': value['time'] == null ? undefined : ((value['time']).toISOString()),
        'supplier_id': value['supplierId'],
        'order_internal_id': value['orderInternalId'],
        'order_id': value['orderId'],
        'weight': value['weight'],
        'raw_materials': ((value['rawMaterials'] as Array<any>).map(QuantifiedItemToJSON)),
        'order': OrderDetailsToJSON(value['order']),
    };
}

