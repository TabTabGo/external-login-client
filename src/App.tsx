import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import FacebookLogin from "react-facebook-login";
import MicrosoftLogin from "react-microsoft-login";

const google_clientId =
  "249120057461-j5sqv2vgits01facmte4n0nojctjao4u.apps.googleusercontent.com";
const microsoft_clientId = "f64fdc1b-61b2-4f1f-9814-00556b41ff3b";

function App() {
  
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: google_clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });
  const onSuccess = (res: any) => {
    console.log("success:", res);
  };
  const onFailure = (err: any) => {
    console.log("failed:", err);
  };
  const authHandler = (err: any, data: any) => {
    console.log("MS",err, data);
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Social Login test client</p>
        <GoogleLogin
          clientId={google_clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
        <FacebookLogin
          appId="304879431046665"
          autoLoad={true}
          fields="name,email,picture"
          callback={onSuccess}
        />
        <MicrosoftLogin clientId={microsoft_clientId} authCallback={authHandler} redirectUri="https://localhost:4200/"/>
      </header>
    </div>
  );
}

export default App;
