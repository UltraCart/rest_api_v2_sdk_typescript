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


import * as runtime from '../runtime';
import {
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    WorkflowAgentAuthResponse,
    WorkflowAgentAuthResponseFromJSON,
    WorkflowAgentAuthResponseToJSON,
    WorkflowAttachmentUploadUrlResponse,
    WorkflowAttachmentUploadUrlResponseFromJSON,
    WorkflowAttachmentUploadUrlResponseToJSON,
    WorkflowGroupsResponse,
    WorkflowGroupsResponseFromJSON,
    WorkflowGroupsResponseToJSON,
    WorkflowTask,
    WorkflowTaskFromJSON,
    WorkflowTaskToJSON,
    WorkflowTaskResponse,
    WorkflowTaskResponseFromJSON,
    WorkflowTaskResponseToJSON,
    WorkflowTaskTagsResponse,
    WorkflowTaskTagsResponseFromJSON,
    WorkflowTaskTagsResponseToJSON,
    WorkflowTasksRequest,
    WorkflowTasksRequestFromJSON,
    WorkflowTasksRequestToJSON,
    WorkflowTasksResponse,
    WorkflowTasksResponseFromJSON,
    WorkflowTasksResponseToJSON,
    WorkflowUserResponse,
    WorkflowUserResponseFromJSON,
    WorkflowUserResponseToJSON,
    WorkflowUsersResponse,
    WorkflowUsersResponseFromJSON,
    WorkflowUsersResponseToJSON,
} from '../models';

export interface GetWorkflowAssignmentGroupsRequest {
    limit?: number;
    offset?: number;
}

export interface GetWorkflowAssignmentUsersRequest {
    limit?: number;
    offset?: number;
}

export interface GetWorkflowTaskRequest {
    taskUuid: string;
}

export interface GetWorkflowTaskAttachmentUploadUrlRequest {
    extension: string;
}

export interface GetWorkflowTaskByObjectTypeRequest {
    objectType: string;
    objectId: string;
}

export interface GetWorkflowTasksRequest {
    workflowTasksQuery: WorkflowTasksRequest;
    limit?: number;
    offset?: number;
    sort?: string;
}

export interface InsertWorkflowTaskRequest {
    workflowTask: WorkflowTask;
}

export interface UpdateWorkflowTaskRequest {
    taskUuid: string;
    workflowTask: WorkflowTask;
}

/**
 * WorkflowApi - interface
 * 
 * @export
 * @interface WorkflowApiInterface
 */
export interface WorkflowApiInterface {
    /**
     * Retrieve a JWT to authorize an agent to make a websocket connection. 
     * @summary Get agent websocket authorization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkflowApiInterface
     */
    getWorkflowAgentWebsocketAuthorizationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowAgentAuthResponse>>;

    /**
     * Retrieve a JWT to authorize an agent to make a websocket connection. 
     * Get agent websocket authorization
     */
    getWorkflowAgentWebsocketAuthorization(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowAgentAuthResponse>;

    /**
     * Retrieve a list of groups that workflow tasks can be assigned to 
     * @summary Retrieve a list of groups that workflow tasks can be assigned to
     * @param {number} [limit] The maximum number of records to return on this one API call. (Max 200)
     * @param {number} [offset] Pagination of the record set.  Offset is a zero based index.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkflowApiInterface
     */
    getWorkflowAssignmentGroupsRaw(requestParameters: GetWorkflowAssignmentGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowGroupsResponse>>;

    /**
     * Retrieve a list of groups that workflow tasks can be assigned to 
     * Retrieve a list of groups that workflow tasks can be assigned to
     */
    getWorkflowAssignmentGroups(requestParameters: GetWorkflowAssignmentGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowGroupsResponse>;

    /**
     * Retrieve a list of users that workflow tasks can be assigned to 
     * @summary Retrieve a list of users that workflow tasks can be assigned to
     * @param {number} [limit] The maximum number of records to return on this one API call. (Max 200)
     * @param {number} [offset] Pagination of the record set.  Offset is a zero based index.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkflowApiInterface
     */
    getWorkflowAssignmentUsersRaw(requestParameters: GetWorkflowAssignmentUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowUsersResponse>>;

    /**
     * Retrieve a list of users that workflow tasks can be assigned to 
     * Retrieve a list of users that workflow tasks can be assigned to
     */
    getWorkflowAssignmentUsers(requestParameters: GetWorkflowAssignmentUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowUsersResponse>;

    /**
     * Retrieve a user object for myself 
     * @summary Retrieve a user object for myself
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkflowApiInterface
     */
    getWorkflowMeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowUserResponse>>;

    /**
     * Retrieve a user object for myself 
     * Retrieve a user object for myself
     */
    getWorkflowMe(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowUserResponse>;

    /**
     * Retrieve a workflow task 
     * @summary Retrieve a workflow task
     * @param {string} taskUuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkflowApiInterface
     */
    getWorkflowTaskRaw(requestParameters: GetWorkflowTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowTaskResponse>>;

    /**
     * Retrieve a workflow task 
     * Retrieve a workflow task
     */
    getWorkflowTask(requestParameters: GetWorkflowTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowTaskResponse>;

    /**
     * Get a presigned workflow task attachment upload URL 
     * @summary Get a presigned workflow task attachment upload URL
     * @param {string} extension 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkflowApiInterface
     */
    getWorkflowTaskAttachmentUploadUrlRaw(requestParameters: GetWorkflowTaskAttachmentUploadUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowAttachmentUploadUrlResponse>>;

    /**
     * Get a presigned workflow task attachment upload URL 
     * Get a presigned workflow task attachment upload URL
     */
    getWorkflowTaskAttachmentUploadUrl(requestParameters: GetWorkflowTaskAttachmentUploadUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowAttachmentUploadUrlResponse>;

    /**
     * Retrieve a workflow task by object type and id 
     * @summary Retrieve a workflow task by object type and id
     * @param {string} objectType 
     * @param {string} objectId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkflowApiInterface
     */
    getWorkflowTaskByObjectTypeRaw(requestParameters: GetWorkflowTaskByObjectTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowTasksResponse>>;

    /**
     * Retrieve a workflow task by object type and id 
     * Retrieve a workflow task by object type and id
     */
    getWorkflowTaskByObjectType(requestParameters: GetWorkflowTaskByObjectTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowTasksResponse>;

    /**
     * Retrieves a unique list of all the existing workflow task tags. 
     * @summary Get a list of existing workflow task tags
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkflowApiInterface
     */
    getWorkflowTaskTagsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowTaskTagsResponse>>;

    /**
     * Retrieves a unique list of all the existing workflow task tags. 
     * Get a list of existing workflow task tags
     */
    getWorkflowTaskTags(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowTaskTagsResponse>;

    /**
     * Retrieves a set of workflow tasks from the account based on a query object. 
     * @summary Search workflow tasks
     * @param {WorkflowTasksRequest} workflowTasksQuery Workflow tasks query
     * @param {number} [limit] The maximum number of records to return on this one API call. (Default 100, Max 500)
     * @param {number} [offset] Pagination of the record set.  Offset is a zero based index.
     * @param {string} [sort] The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkflowApiInterface
     */
    getWorkflowTasksRaw(requestParameters: GetWorkflowTasksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowTasksResponse>>;

    /**
     * Retrieves a set of workflow tasks from the account based on a query object. 
     * Search workflow tasks
     */
    getWorkflowTasks(requestParameters: GetWorkflowTasksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowTasksResponse>;

    /**
     * Insert a workflow task 
     * @summary Insert a workflow task
     * @param {WorkflowTask} workflowTask workflow task
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkflowApiInterface
     */
    insertWorkflowTaskRaw(requestParameters: InsertWorkflowTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowTaskResponse>>;

    /**
     * Insert a workflow task 
     * Insert a workflow task
     */
    insertWorkflowTask(requestParameters: InsertWorkflowTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowTaskResponse>;

    /**
     * Update a workflow task 
     * @summary Update a workflow task
     * @param {string} taskUuid 
     * @param {WorkflowTask} workflowTask Workflow task
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkflowApiInterface
     */
    updateWorkflowTaskRaw(requestParameters: UpdateWorkflowTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowTaskResponse>>;

    /**
     * Update a workflow task 
     * Update a workflow task
     */
    updateWorkflowTask(requestParameters: UpdateWorkflowTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowTaskResponse>;

}

/**
 * 
 */
export class WorkflowApi extends runtime.BaseAPI implements WorkflowApiInterface {

    /**
     * Retrieve a JWT to authorize an agent to make a websocket connection. 
     * Get agent websocket authorization
     */
    async getWorkflowAgentWebsocketAuthorizationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowAgentAuthResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["workflow_write"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/workflow/agent/auth`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkflowAgentAuthResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a JWT to authorize an agent to make a websocket connection. 
     * Get agent websocket authorization
     */
    async getWorkflowAgentWebsocketAuthorization(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowAgentAuthResponse> {
        const response = await this.getWorkflowAgentWebsocketAuthorizationRaw(initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of groups that workflow tasks can be assigned to 
     * Retrieve a list of groups that workflow tasks can be assigned to
     */
    async getWorkflowAssignmentGroupsRaw(requestParameters: GetWorkflowAssignmentGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowGroupsResponse>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['_limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['_offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["workflow_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/workflow/assignment_groups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkflowGroupsResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of groups that workflow tasks can be assigned to 
     * Retrieve a list of groups that workflow tasks can be assigned to
     */
    async getWorkflowAssignmentGroups(requestParameters: GetWorkflowAssignmentGroupsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowGroupsResponse> {
        const response = await this.getWorkflowAssignmentGroupsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of users that workflow tasks can be assigned to 
     * Retrieve a list of users that workflow tasks can be assigned to
     */
    async getWorkflowAssignmentUsersRaw(requestParameters: GetWorkflowAssignmentUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowUsersResponse>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['_limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['_offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["workflow_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/workflow/assignment_users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkflowUsersResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of users that workflow tasks can be assigned to 
     * Retrieve a list of users that workflow tasks can be assigned to
     */
    async getWorkflowAssignmentUsers(requestParameters: GetWorkflowAssignmentUsersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowUsersResponse> {
        const response = await this.getWorkflowAssignmentUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a user object for myself 
     * Retrieve a user object for myself
     */
    async getWorkflowMeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowUserResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["workflow_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/workflow/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkflowUserResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a user object for myself 
     * Retrieve a user object for myself
     */
    async getWorkflowMe(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowUserResponse> {
        const response = await this.getWorkflowMeRaw(initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a workflow task 
     * Retrieve a workflow task
     */
    async getWorkflowTaskRaw(requestParameters: GetWorkflowTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowTaskResponse>> {
        if (requestParameters.taskUuid === null || requestParameters.taskUuid === undefined) {
            throw new runtime.RequiredError('taskUuid','Required parameter requestParameters.taskUuid was null or undefined when calling getWorkflowTask.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["workflow_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/workflow/tasks/{task_uuid}`.replace(`{${"task_uuid"}}`, encodeURIComponent(String(requestParameters.taskUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkflowTaskResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a workflow task 
     * Retrieve a workflow task
     */
    async getWorkflowTask(requestParameters: GetWorkflowTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowTaskResponse> {
        const response = await this.getWorkflowTaskRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a presigned workflow task attachment upload URL 
     * Get a presigned workflow task attachment upload URL
     */
    async getWorkflowTaskAttachmentUploadUrlRaw(requestParameters: GetWorkflowTaskAttachmentUploadUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowAttachmentUploadUrlResponse>> {
        if (requestParameters.extension === null || requestParameters.extension === undefined) {
            throw new runtime.RequiredError('extension','Required parameter requestParameters.extension was null or undefined when calling getWorkflowTaskAttachmentUploadUrl.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["workflow_write"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/workflow/tasks/attachments/{extension}`.replace(`{${"extension"}}`, encodeURIComponent(String(requestParameters.extension))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkflowAttachmentUploadUrlResponseFromJSON(jsonValue));
    }

    /**
     * Get a presigned workflow task attachment upload URL 
     * Get a presigned workflow task attachment upload URL
     */
    async getWorkflowTaskAttachmentUploadUrl(requestParameters: GetWorkflowTaskAttachmentUploadUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowAttachmentUploadUrlResponse> {
        const response = await this.getWorkflowTaskAttachmentUploadUrlRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a workflow task by object type and id 
     * Retrieve a workflow task by object type and id
     */
    async getWorkflowTaskByObjectTypeRaw(requestParameters: GetWorkflowTaskByObjectTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowTasksResponse>> {
        if (requestParameters.objectType === null || requestParameters.objectType === undefined) {
            throw new runtime.RequiredError('objectType','Required parameter requestParameters.objectType was null or undefined when calling getWorkflowTaskByObjectType.');
        }

        if (requestParameters.objectId === null || requestParameters.objectId === undefined) {
            throw new runtime.RequiredError('objectId','Required parameter requestParameters.objectId was null or undefined when calling getWorkflowTaskByObjectType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["workflow_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/workflow/tasks/by/{object_type}/{object_id}`.replace(`{${"object_type"}}`, encodeURIComponent(String(requestParameters.objectType))).replace(`{${"object_id"}}`, encodeURIComponent(String(requestParameters.objectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkflowTasksResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a workflow task by object type and id 
     * Retrieve a workflow task by object type and id
     */
    async getWorkflowTaskByObjectType(requestParameters: GetWorkflowTaskByObjectTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowTasksResponse> {
        const response = await this.getWorkflowTaskByObjectTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a unique list of all the existing workflow task tags. 
     * Get a list of existing workflow task tags
     */
    async getWorkflowTaskTagsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowTaskTagsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["workflow_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/workflow/tasks/tags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkflowTaskTagsResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves a unique list of all the existing workflow task tags. 
     * Get a list of existing workflow task tags
     */
    async getWorkflowTaskTags(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowTaskTagsResponse> {
        const response = await this.getWorkflowTaskTagsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a set of workflow tasks from the account based on a query object. 
     * Search workflow tasks
     */
    async getWorkflowTasksRaw(requestParameters: GetWorkflowTasksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowTasksResponse>> {
        if (requestParameters.workflowTasksQuery === null || requestParameters.workflowTasksQuery === undefined) {
            throw new runtime.RequiredError('workflowTasksQuery','Required parameter requestParameters.workflowTasksQuery was null or undefined when calling getWorkflowTasks.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['_limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['_offset'] = requestParameters.offset;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['_sort'] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["workflow_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/workflow/tasks/search`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WorkflowTasksRequestToJSON(requestParameters.workflowTasksQuery),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkflowTasksResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves a set of workflow tasks from the account based on a query object. 
     * Search workflow tasks
     */
    async getWorkflowTasks(requestParameters: GetWorkflowTasksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowTasksResponse> {
        const response = await this.getWorkflowTasksRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Insert a workflow task 
     * Insert a workflow task
     */
    async insertWorkflowTaskRaw(requestParameters: InsertWorkflowTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowTaskResponse>> {
        if (requestParameters.workflowTask === null || requestParameters.workflowTask === undefined) {
            throw new runtime.RequiredError('workflowTask','Required parameter requestParameters.workflowTask was null or undefined when calling insertWorkflowTask.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["workflow_write"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/workflow/tasks`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WorkflowTaskToJSON(requestParameters.workflowTask),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkflowTaskResponseFromJSON(jsonValue));
    }

    /**
     * Insert a workflow task 
     * Insert a workflow task
     */
    async insertWorkflowTask(requestParameters: InsertWorkflowTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowTaskResponse> {
        const response = await this.insertWorkflowTaskRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a workflow task 
     * Update a workflow task
     */
    async updateWorkflowTaskRaw(requestParameters: UpdateWorkflowTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowTaskResponse>> {
        if (requestParameters.taskUuid === null || requestParameters.taskUuid === undefined) {
            throw new runtime.RequiredError('taskUuid','Required parameter requestParameters.taskUuid was null or undefined when calling updateWorkflowTask.');
        }

        if (requestParameters.workflowTask === null || requestParameters.workflowTask === undefined) {
            throw new runtime.RequiredError('workflowTask','Required parameter requestParameters.workflowTask was null or undefined when calling updateWorkflowTask.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["workflow_write"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/workflow/tasks/{task_uuid}`.replace(`{${"task_uuid"}}`, encodeURIComponent(String(requestParameters.taskUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: WorkflowTaskToJSON(requestParameters.workflowTask),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkflowTaskResponseFromJSON(jsonValue));
    }

    /**
     * Update a workflow task 
     * Update a workflow task
     */
    async updateWorkflowTask(requestParameters: UpdateWorkflowTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowTaskResponse> {
        const response = await this.updateWorkflowTaskRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
