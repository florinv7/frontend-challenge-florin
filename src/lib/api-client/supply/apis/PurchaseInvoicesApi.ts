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


import * as runtime from '../runtime';
import type {
  InvoiceDetails,
  InvoiceSummary,
} from '../models/index';
import {
    InvoiceDetailsFromJSON,
    InvoiceDetailsToJSON,
    InvoiceSummaryFromJSON,
    InvoiceSummaryToJSON,
} from '../models/index';

export interface CreateInvoiceRequest {
    invoiceDetails?: InvoiceDetails;
}

export interface ListInvoicesRequest {
    limit?: number;
    offset?: number;
    search?: string;
}

export interface ShowInvoiceRequest {
    invoiceId: string;
}

export interface UpdateInvoiceRequest {
    invoiceId: string;
    invoiceDetails?: InvoiceDetails;
}

/**
 * 
 */
export class PurchaseInvoicesApi extends runtime.BaseAPI {

    /**
     */
    async createInvoiceRaw(requestParameters: CreateInvoiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceDetails>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/purchase-invoice`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: InvoiceDetailsToJSON(requestParameters['invoiceDetails']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceDetailsFromJSON(jsonValue));
    }

    /**
     */
    async createInvoice(requestParameters: CreateInvoiceRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceDetails> {
        const response = await this.createInvoiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async listInvoicesRaw(requestParameters: ListInvoicesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<InvoiceSummary>>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/purchase-invoice`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InvoiceSummaryFromJSON));
    }

    /**
     */
    async listInvoices(requestParameters: ListInvoicesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<InvoiceSummary>> {
        const response = await this.listInvoicesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async showInvoiceRaw(requestParameters: ShowInvoiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceDetails>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling showInvoice().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/purchase-invoice/{invoiceId}`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceDetailsFromJSON(jsonValue));
    }

    /**
     */
    async showInvoice(requestParameters: ShowInvoiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceDetails> {
        const response = await this.showInvoiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateInvoiceRaw(requestParameters: UpdateInvoiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceDetails>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling updateInvoice().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/purchase-invoice/{invoiceId}`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: InvoiceDetailsToJSON(requestParameters['invoiceDetails']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceDetailsFromJSON(jsonValue));
    }

    /**
     */
    async updateInvoice(requestParameters: UpdateInvoiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceDetails> {
        const response = await this.updateInvoiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
