import { useState, useEffect } from "react";
import OtpInput from "./otp-input";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [CountryCode] = useState("+91"); // Set country code to +91 by default
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let interval;
    if (timer > 0 && showOtpInput) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
      // Resend OTP logic can go here
    }
    return () => clearInterval(interval);
  }, [timer, showOtpInput]);

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    // Phone validations
    const regex = /[^0-9]/g;
    if (
      phoneNumber.length !== 10 || // Ensure phone number is exactly 10 digits
      regex.test(phoneNumber)
    ) {
      alert("Invalid Phone Number");
      return;
    }

    // Call BE API
    // Show OTP Field
    setShowOtpInput(true);
    setTimer(30); // Reset timer on new phone submission
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
  };

  const handleResendOTP = () => {
    // Resend OTP logic can go here
    setTimer(30); // Reset timer on resend
  };

  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            value={CountryCode}
            readOnly // Disable user input for country code
            className="mr-5 font-semibold w-[40px] text-center text-sm border-b-[1px] border-zinc-900"
          />
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
            className="mr-5 font-semibold text-center text-sm border-b-[1px] border-zinc-900"
          />
          <button
            type="submit"
            className="px-4 py-1 my-2 bg-zinc-200 rounded text-sm font-semibold"
          >
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p>
            Enter OTP sent to {CountryCode} {phoneNumber}
          </p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
          <div className="mt-2">
            {timer > 0 ? (
              <p className="text-sm">Resend OTP in {timer} seconds</p>
            ) : (
              <button
                onClick={handleResendOTP}
                className="text-sm underline cursor-pointer"
              >
                Resend OTP
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
