import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const Login = () => {
  return (

    <div className="flex item-start h-screen bg-gray-100">
      {/* Left Side*/}
      <div className="hidden lg:flex w-1/2 justify-start font-poppins">
        <img
          src='/urs.png'
          className="w-full h-auto"
        />
      </div>

      {/* Right Side*/}

      <div className=" flex flex-col item-end justify-center w-full lg:w-1/2 p-14 font-poppins mx-10 ">
        <h2
          className="max-w-lg px-10  text-left text-4xl font-semibold leading-[72px]"
        >
          Login
        </h2>

        <h2
          className=" mb-6 max-w-lg px-10  text-left text-base leading-6 text-[16px]"
        >
          Welcome to the Inventory Management System!
        </h2>


        <form>
          <div className="mb-4 mx-auto max-w-lg px-10 ">
            <Label className="font-Poppins block text-gray-700  text-[20px]" >Username</Label>
            <Input type="text" className="block w-full p-4 border border-gray-500  w-[450px] h-[56px]  text-[16px]" placeholder="Type Username"
              style={{ backgroundColor: 'transparent' }}>
            </Input>
          </div>

          <div className="mb-4 mx-auto max-w-lg px-10 ">

            <Label
              className="font-Poppins block text-gray-700  text-[20px]" >
              Password
            </Label>

            <Input
              className="mt-1 block w-full p-4 border border-gray-500  w-[450px] h-[56px]  text-[16px] "
              type="text"
              placeholder="Type Password"
              style={{ backgroundColor: 'transparent' }}>
            </Input>

            <div className="text-right mb-8 m-auto max-w- px-auto block">
              <a href="#" className="text-[12px] text-gray-900 hover:underline">Forgot Password</a>
            </div>
          </div>

          <Button
            type="submit"
            className="mx-auto textlg text-white text-[20px] block w-[450px] h-[56px] rounded-md   rounded-[12px] px-[115px]" style={{ backgroundColor: 'rgb(1, 92, 146,1)' }}
          >
            Login
          </Button>

        </form>
      </div >
    </div >
  );
};



export default Login;
