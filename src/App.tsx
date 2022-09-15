import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import FacebookLogin from "react-facebook-login";

const google_clientId =
  "1053416382660-qfu720eltrjeghqtp5c10ut4aaj3rb4o.apps.googleusercontent.com";

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
      </header>
    </div>
  );
}

export default App;
