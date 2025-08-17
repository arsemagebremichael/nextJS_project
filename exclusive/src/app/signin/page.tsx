"use client";

import React, { useState } from "react";
import Image from "next/image";
import Input from "../shared-components/Input";
import Button from "../shared-components/Button";
import Link from "next/link";
import Title from "../home/components/Title";
import Footer from "../shared-components/Footer";
import NavAdvert from "../shared-components/NavAdvert";
import TopNav from "../shared-components/TopNav";


const SignUp = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    alert(`Registering: ${name}, ${contact}`);
  };

  return (
    <>
      <div>
        
        <NavAdvert />

        <div  className='w-4/5 mx-auto'>
        <TopNav />
          </div>
        
        <div className="flex flex-col md:flex-row md:items-center gap-40 ">



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
            <Title title="Log in to Exclusive" variant="" />
            <p className="mb-6 text-black text-xl font-poppins">Enter your details below</p>

          

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
            <div className="flex items-center justify-between md:flex-row md:items-center">
            <Button
              variant="ter"
              onClickHandler={handleSignUp}
              buttonText="Log in"

            />
            <p className="text-red-400">Forget Password?</p>
            </div>
            
            

            <p className="text-lg text-gray-800 text-center mt-6">
              Do not have an account?{" "}
              <Link href="/signUp" className="underline font-medium">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;

