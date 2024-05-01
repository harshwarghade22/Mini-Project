import React, { useState } from 'react';
import OTPInput from './OTPInput';

const VerifyUser = () => {
  const [OTP, setOTP] = useState('');

  const handleOTPComplete = (pin) => {
    setOTP(pin);
    // handle API request here
    console.log('OTP:', pin);
  };

  return (
    <div className="h-fit w-[100px] flex flex-col justify-center items-center">
      <h2 className="text-sm font-bold mb-4">Verify OTP</h2>
      <p className="text-sm">An OTP has been sent to your email address, kindly enter them here</p>
      <OTPInput length={5} onComplete={handleOTPComplete} />
    </div>
  );
};

export default VerifyUser;
