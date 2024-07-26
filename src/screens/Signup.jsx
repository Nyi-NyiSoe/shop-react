import React from "react";
import CustomButton from "../components/CustomButton";
import CustomTextBox from "../components/CustomTextBox";
const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 pl-[40%] ">Signup</h2>
        <form action="">
          <CustomTextBox name="email" hintText="Enter your email" />
          <CustomTextBox name="password" hintText="Enter your password" />
          <CustomTextBox name="password" hintText="Enter your password again" />
          <div className="flex items-center justify-evenly">
            <CustomButton name="Signup" onClick={() => alert()} />
          </div>
          <div className="flex items-center justify-center p-5">
            <p>
              Already have an account?{" "}
              <a href="/login" className=" underline">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
