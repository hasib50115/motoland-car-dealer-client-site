import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { render } from '@testing-library/react';
import useAuth from '../hooks/useAuth';


const AdminRoute = ({children, ...rest}) => {
    // const {children, ...rest} = props;
    const {user, isloading, admin} = useAuth();
    if (isloading) {return <div class="spinner-border text-warning" role="status">
    <span class="sr-only">Loading...</span>
  </div>}
    return (
        <Route  
        {...rest}
        render ={({location}) => user.email && admin ? children : <Redirect
        to={{
            pathname: '/',
            state: {from: location}
        }}>
        </Redirect>} >
                      
        </Route>
    );
};

export default AdminRoute;




/* <Route  
{...rest}
render ={({location}) => user.displayName ? children : <Redirect
to={{
    pathname: '/login',
    state: {from: location}
}}>
</Redirect>} >
              
</Route> */