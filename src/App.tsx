import React from 'react';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { Routes, Route } from 'react-router-dom';
import {useAuth0} from "@auth0/auth0-react";
import Loading from "./components/Loading";
import './App.css';
import Auth0ProviderWithHistory from './auth0-provider-with-history';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

function App() {
  const{ isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(()=>{
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    };
    }, [isAuthenticated, isLoading]
  );

  // if  (isLoading) {
  //   return (
  //     <Loading/>
  //   )
  // };


  return (
    isAuthenticated ? (
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
      </div>
    ) : (
      <div className="d-flex m-5 justify-content-center">
        <Spinner animation="border" variant="secondary" />
      </div>
    )
  );
}

export default App;
