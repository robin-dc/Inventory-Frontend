import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  return (
    <div className="flex item-start max-w-full justify-center h-screen bg-gray-100 m-0">

      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 flex item-start justify-start font-poppins">
        <img
          src='/urs.png'
          className="w-full h-full "
        />
      </div>

      {/* Right Side */}

      <div className="flex flex-col justify-center w-full h=fu lg:w-1/2 p-14 font-poppins  px-[115px]">
        <h2 className="text-left text-4xl font-semibold leading-[48px] mb-2">
          Login
        </h2>


        <p className="text-left text-base text-[16px] mb-6">
          Welcome to the Inventory Management System!
        </p>

        <form>
          <div className="mb-4">
            <Label className="block text-gray-700 text-[20px] mb-2">Username</Label>
            <Input
              type="text"
              className="block w-full p-4 border border-gray-500 rounded-md text-[16px]"
              placeholder="Type Username"
              style={{ backgroundColor: 'transparent' }}
            />
          </div>

          <div className="mb-4">
            <Label className="block text-gray-700 text-[20px] mb-2">Password</Label>
            <Input
              type="password"
              className="block w-full p-4 border border-gray-500 rounded-md text-[16px]"
              placeholder="Type Password"
              style={{ backgroundColor: 'transparent' }}
            />
            <div className="text-right mb-2">
              <a href="#" className="text-[12px] text-gray-900 hover:underline">Forgot Password</a>
            </div>
          </div>

          <Button
            type="submit"
            className="mt-2 text-lg text-white w-full h-[56px] rounded-md"
            style={{ backgroundColor: 'rgb(1, 92, 146)' }}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
