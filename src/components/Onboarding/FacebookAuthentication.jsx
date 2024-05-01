import React from 'react'

// appID:
import { FacebookLoginButton } from "react-social-login-buttons";
import {LoginSocialFacebook} from "reactjs-social-login"
 function FacebookAuthentication() {
  return (
    <div className='pb-2 pt-4'>
        <LoginSocialFacebook 
        appId="448562667704489"
        onResolve={(response)=>{console.log(response)}}
        onReject={(error)=>{console.log(error)}}>
        <FacebookLoginButton />
        </LoginSocialFacebook>
    </div>
  )
}

export default FacebookAuthentication