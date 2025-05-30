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
    Group,
    GroupFromJSON,
    GroupToJSON,
    GroupResponse,
    GroupResponseFromJSON,
    GroupResponseToJSON,
    GroupsResponse,
    GroupsResponseFromJSON,
    GroupsResponseToJSON,
    User,
    UserFromJSON,
    UserToJSON,
    UserLoginsResponse,
    UserLoginsResponseFromJSON,
    UserLoginsResponseToJSON,
    UserResponse,
    UserResponseFromJSON,
    UserResponseToJSON,
    UsersResponse,
    UsersResponseFromJSON,
    UsersResponseToJSON,
} from '../models';

export interface DeleteGroupRequest {
    groupOid: number;
}

export interface DeleteUserRequest {
    userId: number;
}

export interface GetGroupRequest {
    groupOid: number;
}

export interface GetUserRequest {
    userId: number;
}

export interface GetUserLoginsRequest {
    userId: number;
}

export interface InsertGroupRequest {
    group: Group;
}

export interface InsertUserRequest {
    user: User;
}

export interface UpdateGroupRequest {
    groupOid: number;
    group: Group;
}

export interface UpdateUserRequest {
    userId: number;
    user: User;
}

/**
 * UserApi - interface
 * 
 * @export
 * @interface UserApiInterface
 */
export interface UserApiInterface {
    /**
     * Delete a group on the UltraCart account. 
     * @summary Delete a group
     * @param {number} groupOid The group_oid to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    deleteGroupRaw(requestParameters: DeleteGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete a group on the UltraCart account. 
     * Delete a group
     */
    deleteGroup(requestParameters: DeleteGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Delete a user on the UltraCart account. 
     * @summary Delete a user
     * @param {number} userId The user_id to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete a user on the UltraCart account. 
     * Delete a user
     */
    deleteUser(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Retrieves a single group using the specified group id. 
     * @summary Retrieve a group
     * @param {number} groupOid The group id to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getGroupRaw(requestParameters: GetGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Retrieves a single group using the specified group id. 
     * Retrieve a group
     */
    getGroup(requestParameters: GetGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Get groups
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getGroupsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupsResponse>>;

    /**
     * Get groups
     */
    getGroups(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupsResponse>;

    /**
     * Retrieves a single user using the specified user id. 
     * @summary Retrieve a user
     * @param {number} userId The user id to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getUserRaw(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserResponse>>;

    /**
     * Retrieves a single user using the specified user id. 
     * Retrieve a user
     */
    getUser(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserResponse>;

    /**
     * Retrieves logins for a single user using the specified user id. 
     * @summary Retrieve a user\'s login history
     * @param {number} userId The user id to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getUserLoginsRaw(requestParameters: GetUserLoginsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserLoginsResponse>>;

    /**
     * Retrieves logins for a single user using the specified user id. 
     * Retrieve a user\'s login history
     */
    getUserLogins(requestParameters: GetUserLoginsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserLoginsResponse>;

    /**
     * 
     * @summary Get users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getUsersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersResponse>>;

    /**
     * Get users
     */
    getUsers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersResponse>;

    /**
     * Insert a group on the UltraCart account. 
     * @summary Insert a group
     * @param {Group} group Group to insert
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    insertGroupRaw(requestParameters: InsertGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupResponse>>;

    /**
     * Insert a group on the UltraCart account. 
     * Insert a group
     */
    insertGroup(requestParameters: InsertGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupResponse>;

    /**
     * Insert a user on the UltraCart account. 
     * @summary Insert a user
     * @param {User} user User to insert
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    insertUserRaw(requestParameters: InsertUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserResponse>>;

    /**
     * Insert a user on the UltraCart account. 
     * Insert a user
     */
    insertUser(requestParameters: InsertUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserResponse>;

    /**
     * Update a group on the UltraCart account. 
     * @summary Update a group
     * @param {number} groupOid The group_oid to update.
     * @param {Group} group Group to update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    updateGroupRaw(requestParameters: UpdateGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupResponse>>;

    /**
     * Update a group on the UltraCart account. 
     * Update a group
     */
    updateGroup(requestParameters: UpdateGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupResponse>;

    /**
     * Update a user on the UltraCart account. 
     * @summary Update a user
     * @param {number} userId The user_id to update.
     * @param {User} user User to update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    updateUserRaw(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserResponse>>;

    /**
     * Update a user on the UltraCart account. 
     * Update a user
     */
    updateUser(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserResponse>;

}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI implements UserApiInterface {

    /**
     * Delete a group on the UltraCart account. 
     * Delete a group
     */
    async deleteGroupRaw(requestParameters: DeleteGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.groupOid === null || requestParameters.groupOid === undefined) {
            throw new runtime.RequiredError('groupOid','Required parameter requestParameters.groupOid was null or undefined when calling deleteGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["user_write"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/user/groups/{group_oid}`.replace(`{${"group_oid"}}`, encodeURIComponent(String(requestParameters.groupOid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a group on the UltraCart account. 
     * Delete a group
     */
    async deleteGroup(requestParameters: DeleteGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteGroupRaw(requestParameters, initOverrides);
    }

    /**
     * Delete a user on the UltraCart account. 
     * Delete a user
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling deleteUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["user_write"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/user/users/{user_id}`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a user on the UltraCart account. 
     * Delete a user
     */
    async deleteUser(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteUserRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves a single group using the specified group id. 
     * Retrieve a group
     */
    async getGroupRaw(requestParameters: GetGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.groupOid === null || requestParameters.groupOid === undefined) {
            throw new runtime.RequiredError('groupOid','Required parameter requestParameters.groupOid was null or undefined when calling getGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["user_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/user/groups/{group_oid}`.replace(`{${"group_oid"}}`, encodeURIComponent(String(requestParameters.groupOid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Retrieves a single group using the specified group id. 
     * Retrieve a group
     */
    async getGroup(requestParameters: GetGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getGroupRaw(requestParameters, initOverrides);
    }

    /**
     * Get groups
     */
    async getGroupsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["user_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/user/groups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupsResponseFromJSON(jsonValue));
    }

    /**
     * Get groups
     */
    async getGroups(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupsResponse> {
        const response = await this.getGroupsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a single user using the specified user id. 
     * Retrieve a user
     */
    async getUserRaw(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["user_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/user/users/{user_id}`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves a single user using the specified user id. 
     * Retrieve a user
     */
    async getUser(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserResponse> {
        const response = await this.getUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves logins for a single user using the specified user id. 
     * Retrieve a user\'s login history
     */
    async getUserLoginsRaw(requestParameters: GetUserLoginsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserLoginsResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getUserLogins.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["user_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/user/users/{user_id}/logins`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserLoginsResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves logins for a single user using the specified user id. 
     * Retrieve a user\'s login history
     */
    async getUserLogins(requestParameters: GetUserLoginsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserLoginsResponse> {
        const response = await this.getUserLoginsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get users
     */
    async getUsersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["user_read"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/user/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersResponseFromJSON(jsonValue));
    }

    /**
     * Get users
     */
    async getUsers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersResponse> {
        const response = await this.getUsersRaw(initOverrides);
        return await response.value();
    }

    /**
     * Insert a group on the UltraCart account. 
     * Insert a group
     */
    async insertGroupRaw(requestParameters: InsertGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupResponse>> {
        if (requestParameters.group === null || requestParameters.group === undefined) {
            throw new runtime.RequiredError('group','Required parameter requestParameters.group was null or undefined when calling insertGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json; charset=UTF-8';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["user_write"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/user/groups`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GroupToJSON(requestParameters.group),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupResponseFromJSON(jsonValue));
    }

    /**
     * Insert a group on the UltraCart account. 
     * Insert a group
     */
    async insertGroup(requestParameters: InsertGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupResponse> {
        const response = await this.insertGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Insert a user on the UltraCart account. 
     * Insert a user
     */
    async insertUserRaw(requestParameters: InsertUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserResponse>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling insertUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json; charset=UTF-8';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["user_write"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/user/users`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserToJSON(requestParameters.user),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserResponseFromJSON(jsonValue));
    }

    /**
     * Insert a user on the UltraCart account. 
     * Insert a user
     */
    async insertUser(requestParameters: InsertUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserResponse> {
        const response = await this.insertUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a group on the UltraCart account. 
     * Update a group
     */
    async updateGroupRaw(requestParameters: UpdateGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupResponse>> {
        if (requestParameters.groupOid === null || requestParameters.groupOid === undefined) {
            throw new runtime.RequiredError('groupOid','Required parameter requestParameters.groupOid was null or undefined when calling updateGroup.');
        }

        if (requestParameters.group === null || requestParameters.group === undefined) {
            throw new runtime.RequiredError('group','Required parameter requestParameters.group was null or undefined when calling updateGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json; charset=UTF-8';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["user_write"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/user/groups/{group_oid}`.replace(`{${"group_oid"}}`, encodeURIComponent(String(requestParameters.groupOid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: GroupToJSON(requestParameters.group),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupResponseFromJSON(jsonValue));
    }

    /**
     * Update a group on the UltraCart account. 
     * Update a group
     */
    async updateGroup(requestParameters: UpdateGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupResponse> {
        const response = await this.updateGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a user on the UltraCart account. 
     * Update a user
     */
    async updateUserRaw(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserResponse>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling updateUser.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling updateUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json; charset=UTF-8';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("ultraCartOauth", ["user_write"]);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-ultracart-simple-key"] = this.configuration.apiKey("x-ultracart-simple-key"); // ultraCartSimpleApiKey authentication
        }

        const response = await this.request({
            path: `/user/users/{user_id}`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserToJSON(requestParameters.user),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserResponseFromJSON(jsonValue));
    }

    /**
     * Update a user on the UltraCart account. 
     * Update a user
     */
    async updateUser(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserResponse> {
        const response = await this.updateUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
