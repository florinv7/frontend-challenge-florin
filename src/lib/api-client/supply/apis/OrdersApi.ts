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
  ComputeOrderCompletionDetails,
  OrderDetails,
  OrderSummary,
  SendOrderCommand,
} from '../models/index';
import {
    ComputeOrderCompletionDetailsFromJSON,
    ComputeOrderCompletionDetailsToJSON,
    OrderDetailsFromJSON,
    OrderDetailsToJSON,
    OrderSummaryFromJSON,
    OrderSummaryToJSON,
    SendOrderCommandFromJSON,
    SendOrderCommandToJSON,
} from '../models/index';

export interface AcceptOrderRequest {
    orderId: string;
}

export interface ArchiveOrderRequest {
    orderId: string;
}

export interface ComputeOrderCompletionRequest {
    orderId: string;
}

export interface CreateOrderRequest {
    orderDetails?: OrderDetails;
}

export interface ListOrdersRequest {
    limit?: number;
    offset?: number;
    search?: string;
    status?: Array<string>;
}

export interface SendOrderRequest {
    orderId: string;
}

export interface ShowOrderRequest {
    orderId: string;
}

export interface UpdateOrderRequest {
    orderId: string;
    orderDetails?: OrderDetails;
}

/**
 * 
 */
export class OrdersApi extends runtime.BaseAPI {

    /**
     * Flags an order as accepted by the supplier. It also kicks off a workflow in which the items are marked as  \"inbound\", and an event is generated
     * flags an order as accepted by the supplier
     */
    async acceptOrderRaw(requestParameters: AcceptOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrderDetails>> {
        if (requestParameters['orderId'] == null) {
            throw new runtime.RequiredError(
                'orderId',
                'Required parameter "orderId" was null or undefined when calling acceptOrder().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/order/{orderId}/_accept`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters['orderId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderDetailsFromJSON(jsonValue));
    }

    /**
     * Flags an order as accepted by the supplier. It also kicks off a workflow in which the items are marked as  \"inbound\", and an event is generated
     * flags an order as accepted by the supplier
     */
    async acceptOrder(requestParameters: AcceptOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrderDetails> {
        const response = await this.acceptOrderRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async archiveOrderRaw(requestParameters: ArchiveOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['orderId'] == null) {
            throw new runtime.RequiredError(
                'orderId',
                'Required parameter "orderId" was null or undefined when calling archiveOrder().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/order/{orderId}`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters['orderId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async archiveOrder(requestParameters: ArchiveOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.archiveOrderRaw(requestParameters, initOverrides);
    }

    /**
     */
    async computeOrderCompletionRaw(requestParameters: ComputeOrderCompletionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComputeOrderCompletionDetails>> {
        if (requestParameters['orderId'] == null) {
            throw new runtime.RequiredError(
                'orderId',
                'Required parameter "orderId" was null or undefined when calling computeOrderCompletion().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/order/{orderId}/_compute-completion`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters['orderId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComputeOrderCompletionDetailsFromJSON(jsonValue));
    }

    /**
     */
    async computeOrderCompletion(requestParameters: ComputeOrderCompletionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComputeOrderCompletionDetails> {
        const response = await this.computeOrderCompletionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * creates an order
     */
    async createOrderRaw(requestParameters: CreateOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrderDetails>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/order`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: OrderDetailsToJSON(requestParameters['orderDetails']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderDetailsFromJSON(jsonValue));
    }

    /**
     * creates an order
     */
    async createOrder(requestParameters: CreateOrderRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrderDetails> {
        const response = await this.createOrderRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * lists the orders
     */
    async listOrdersRaw(requestParameters: ListOrdersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<OrderSummary>>> {
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

        if (requestParameters['status'] != null) {
            queryParameters['status'] = requestParameters['status'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/order`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OrderSummaryFromJSON));
    }

    /**
     * lists the orders
     */
    async listOrders(requestParameters: ListOrdersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<OrderSummary>> {
        const response = await this.listOrdersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * sends an order
     * sends an order
     */
    async sendOrderRaw(requestParameters: SendOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SendOrderCommand>> {
        if (requestParameters['orderId'] == null) {
            throw new runtime.RequiredError(
                'orderId',
                'Required parameter "orderId" was null or undefined when calling sendOrder().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/order/{orderId}/_send`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters['orderId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SendOrderCommandFromJSON(jsonValue));
    }

    /**
     * sends an order
     * sends an order
     */
    async sendOrder(requestParameters: SendOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SendOrderCommand> {
        const response = await this.sendOrderRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * shows an order
     */
    async showOrderRaw(requestParameters: ShowOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrderDetails>> {
        if (requestParameters['orderId'] == null) {
            throw new runtime.RequiredError(
                'orderId',
                'Required parameter "orderId" was null or undefined when calling showOrder().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/order/{orderId}`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters['orderId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderDetailsFromJSON(jsonValue));
    }

    /**
     * shows an order
     */
    async showOrder(requestParameters: ShowOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrderDetails> {
        const response = await this.showOrderRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * updates an order
     */
    async updateOrderRaw(requestParameters: UpdateOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrderDetails>> {
        if (requestParameters['orderId'] == null) {
            throw new runtime.RequiredError(
                'orderId',
                'Required parameter "orderId" was null or undefined when calling updateOrder().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/order/{orderId}`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters['orderId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: OrderDetailsToJSON(requestParameters['orderDetails']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderDetailsFromJSON(jsonValue));
    }

    /**
     * updates an order
     */
    async updateOrder(requestParameters: UpdateOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrderDetails> {
        const response = await this.updateOrderRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
