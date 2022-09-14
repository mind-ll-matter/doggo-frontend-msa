import React from "react";
import { Auth0Provider } from "@auth0/auth0-react"
import { useNavigate } from "react-router-dom";

//imported from json file because of error importing from .env file... https://community.auth0.com/t/cant-load-environment-variables-from-env-file/64059
import data from "./auth_config.json";

const Auth0ProviderWithHistory = ({children}:any) => {

    const domain:string = data.domain;
    const clientId:string = data.clientId;

    //get client history object
    const navigate = useNavigate();
    
    //redirect to the page that user was on when they logged in
    const onRedirectCallback = (appState:any) =>{
        navigate(appState?.returnTo || window.location.pathname);
    }

    return(
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;