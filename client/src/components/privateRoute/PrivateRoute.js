import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {getToken} from '../../utils/common';

export default function PrivateRoute({component:Component, ...rest}){
    return (
        <Route
          {...rest}
          render={(props) => getToken() ? <Component {...props}/> : <Redirect to={{ pathname: '/customer/login', state: { from: props.location, message:"You have to log in" } }} />}
        />
      )
}