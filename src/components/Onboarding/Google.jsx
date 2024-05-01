import React from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function GoogleAuthentication() {
  return (
    <div className='text-center pt-5 '>
      <GoogleOAuthProvider >
      <GoogleLogin
        onSuccess={credentialResponse => {
          var credentialResponseDecoded = jwtDecode(credentialResponse.credential);
          console.log(credentialResponseDecoded);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      </GoogleOAuthProvider>
      
    </div>
  )
}

export default GoogleAuthentication