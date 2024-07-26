import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import CustomTextBox from "../components/CustomTextBox";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please fill all the fields");
    } else {
      alert(`${email} : ${password}`)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 pl-[40%] ">Login</h2>
        <form action={handleLogin}>
          <CustomTextBox name="email" hintText="Enter your email" onChange={(e)=> setEmail(e.target.value)}/>
          <CustomTextBox name="password" hintText="Enter your password"  onChange={(e)=> setPassword(e.target.value)}/>
          <div className="flex items-center justify-evenly">
            <CustomButton name="Signup" onClick={() => navigate("/signup")} />
            <CustomButton name="Login" onClick={handleLogin} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
