import React from "react";
import OAuth2Login from "react-simple-oauth2-login";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate()

  const onSuccess = async (res) => {
    const accessToken = res.access_token;
    const result = await fetch(
      `https://graph.facebook.com/me?fields=id,name,email&access_token=${accessToken}`
    );
    const profile = await result.json();
    console.log(profile);
    const { id, name, email } = profile;
    const callAPI = await axios.post(
      "http://localhost:5000/api/v1/auth/login",
      {
        email,
      }
    );
    console.log(callAPI);
    if(callAPI.data){
      navigate("/home")
    }
  };

  const onFailure = (res) => {
    console.log(res);
  };
  return (
    <div>
      <OAuth2Login
        buttonText="Login"
        authorizationUrl="https://www.facebook.com/dialog/oauth"
        responseType="token"
        clientId="125029363804803"
        redirectUri="http://localhost:3000"
        scope="public_profile"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
};

export default Login;
