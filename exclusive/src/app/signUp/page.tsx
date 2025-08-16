"use client";

import React, { useState } from "react";
import Image from "next/image";
import Input from "../shared-components/Input";
import Button from "../shared-components/Button";
import Link from "next/link";
import Title from "../home/components/Title";
import { FcGoogle } from "react-icons/fc";
import Footer from "../shared-components/Footer";


const SignUp = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    alert(`Registering: ${name}, ${contact}`);
  };
  const handleGoogleSignUp = () => {
    alert('Continue with google')
  }

  return (
    <div>
   
    <div className="flex flex-col md:flex-row md:items-center gap-40 py-12">
      <div>
        <Image
          src="/images/mobile.png"
          alt="Cart and smartphone"
          width={900}
          height={1000}
          className="max-w-full h-auto"
        />
      </div>

      <div className="flex flex-col justify-center max-w-md w-full">
        <Title title="Create an account" variant="large" />
        <p className="mb-6 text-black text-xl font-poppins">Enter your details below</p>

        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          variant="default"
        />

        <Input
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Email or Phone Number"
          variant="default"
        />

        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          variant="default"
        />

        <Button
          variant="ter"
          onClickHandler={handleSignUp}
          buttonText="Create Account"

        />
        <Button
          buttonText="Sign up with Google"
          variant="qua"
          icon={<FcGoogle className="w-5 h-5" />}
          onClickHandler={handleGoogleSignUp}
        />

        <p className="text-lg text-gray-800 text-center mt-6">
          Already have an account?{" "}
          <Link href="/signin" className="underline font-medium">
            Log In
          </Link>
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default SignUp;

