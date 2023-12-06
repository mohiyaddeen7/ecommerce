import React from "react";

export default function PhoneVerification() {
  return (
    <div className="flex items-center justify-center flex-col p-12">
      <img src="./login_phone_verification.png" alt="" className="w-72 h-52" />
      <form
        action=""
        className="flex items-center flex-wrap font-normal flex-col justify-center w-96"
      >
        <div className="text-2xl self-start mb-2 font-semibold">
          Enter your phone number to continue
        </div>
        <div className="userNameContainer flex flex-col items-center self-start w-full mb-2">
          <label htmlFor="userName" className="self-start mb-2">
            Phone number
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            className="w-full rounded  p-2 border border-solid border-black shadow-sm hover:shadow-lg focus:border-amber-500  focus:ring-amber-500 appearance-none focus:outline-none focus:ring-2 focus:bg-blue-50 mb-2 transition-all"
            placeholder="Enter your phone number"
          />
        </div>

        <button className="loginButtonContainer bg-amber-200 py-2 px-3  hover:bg-green-200 hover:shadow-lg rounded text-base font-semibold w-full flex items-center justify-center transition-all">
          <span class="material-symbols-outlined mr-2">check_circle</span>
          <span className="">Verify</span>
        </button>
      </form>
    </div>
  );
}
