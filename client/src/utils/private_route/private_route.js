import {Route, Redirect} from 'react-router-dom'
import React             from "react";
import Landing           from "../../components/layout/Landing";

const PrivateRoute = ({component: Component, ...rest}) => {
    const authenticated = localStorage.getItem('jwtToken');
    console.log("auth value");
    console.log(authenticated, 6)
    return (
        <div>
            <Route {...rest} render={(props) => (
                authenticated
                ? <Component {...props} />
                : <Redirect to='/'/>
            )}/>
        </div>
    )
}

export default PrivateRoute