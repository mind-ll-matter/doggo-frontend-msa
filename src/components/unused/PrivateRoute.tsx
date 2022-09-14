import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../Loading";

// type PrivateRouteProps = {
//     path: RouteProps['path'];
//     Component: React.FC<object>;
// };

// const PrivateRoute = ({Component, ...args}: PrivateRouteProps) => {
//     <Route
//         element = {withAuthenticationRequired(Component, {onRedirecting:() => <Loading/>,
//     })}
//     {...args}
//     />
// };

// export default PrivateRoute;