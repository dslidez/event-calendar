import * as React from 'react';
import { useSelector } from 'react-redux';
import { Switch , Route, Redirect  } from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteNames } from '../router';
import { useTypedSelector } from './../hooks/useTypedSelector';


const AppRouter = () => {
    //custom hook = useSelector
    const {isAuth} = useTypedSelector(state => state.authReducer)
 return ( 
    isAuth  ?
        <Switch>
            {privateRoutes.map(route =>
                <Route path={route.path}
                       exact={route.exact}
                       component={route.component}
                       key={route.path}
                    />
             )}
             <Redirect to={RouteNames.EVENT}/>
        </Switch>
        :
        <Switch>
            {publicRoutes.map(route =>
                <Route path={route.path}
                       exact={route.exact}
                       component={route.component}
                       key={route.path}
                    />
             )}
             <Redirect to={RouteNames.LOGIN}/>
        </Switch>
     );
};

export default AppRouter;