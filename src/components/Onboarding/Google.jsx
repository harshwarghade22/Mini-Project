import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function GoogleAuthentication() {
  return (
    <div className='text-center pt-5 '>
        <GoogleLogin
  onSuccess={credentialResponse => {
    var credentialResponseDecoded = jwtDecode(credentialResponse.credential);
    console.log(credentialResponseDecoded);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
    </div>
  )
}

export default GoogleAuthentication