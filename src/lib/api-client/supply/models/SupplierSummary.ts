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

import type { EmailAttr } from './EmailAttr'
import { EmailAttrFromJSON, EmailAttrToJSON } from './EmailAttr'

/**
 *
 * @export
 * @interface SupplierSummary
 */
export interface SupplierSummary {
  /**
   *
   * @type {string}
   * @memberof SupplierSummary
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof SupplierSummary
   */
  name: string
  /**
   *
   * @type {Array<string>}
   * @memberof SupplierSummary
   */
  categories: Array<string>
  /**
   *
   * @type {string}
   * @memberof SupplierSummary
   */
  vatNo: string
  /**
   *
   * @type {string}
   * @memberof SupplierSummary
   */
  phone: string
  /**
   *
   * @type {string}
   * @memberof SupplierSummary
   */
  defaultCurrency: string
  /**
   *
   * @type {Array<EmailAttr>}
   * @memberof SupplierSummary
   */
  emails: Array<EmailAttr>
}

/**
 * Check if a given object implements the SupplierSummary interface.
 */
export function instanceOfSupplierSummary(value: object): value is SupplierSummary {
  if (!('name' in value) || value['name'] === undefined) return false
  if (!('categories' in value) || value['categories'] === undefined) return false
  if (!('vatNo' in value) || value['vatNo'] === undefined) return false
  if (!('phone' in value) || value['phone'] === undefined) return false
  if (!('defaultCurrency' in value) || value['defaultCurrency'] === undefined) return false
  if (!('emails' in value) || value['emails'] === undefined) return false
  return true
}

export function SupplierSummaryFromJSON(json: any): SupplierSummary {
  return SupplierSummaryFromJSONTyped(json, false)
}

export function SupplierSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): SupplierSummary {
  if (json == null) {
    return json
  }
  return {
    id: json['id'] == null ? undefined : json['id'],
    name: json['name'],
    categories: json['categories'],
    vatNo: json['vat_no'],
    phone: json['phone'],
    defaultCurrency: json['default_currency'],
    emails: (json['emails'] as Array<any>).map(EmailAttrFromJSON),
  }
}

export function SupplierSummaryToJSON(value?: SupplierSummary | null): any {
  if (value == null) {
    return value
  }
  return {
    id: value['id'],
    name: value['name'],
    categories: value['categories'],
    vat_no: value['vatNo'],
    phone: value['phone'],
    default_currency: value['defaultCurrency'],
    emails: (value['emails'] as Array<any>).map(EmailAttrToJSON),
  }
}
