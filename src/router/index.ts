
import React from 'react';
import Event from '../pages/Event';
import Login from '../pages/Login';

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;

}

//all routes by NAMES
export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/'
}

export const publickRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, component: Login}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, exact: true, component: Event}
]