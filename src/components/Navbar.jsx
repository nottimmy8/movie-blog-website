import React from "react";
import logo from "../../public/Log.png";
import { IoSearchOutline } from "react-icons/io5";
import { HiMenuAlt4 } from "react-icons/hi";

function Navbar() {
  return (
    <div className=" bg-transparent flex max-w-[1250px] mx-auto p-3 justify-between items-center ">
      {/* Logo */}
      <div className=" hidden md:flex ">
        <img src={logo} alt="logo" />
      </div>
      {/* search */}
      <div className=" bg-transparent  border-2 border-white rounded-10 flex items-center px-2  sm:w-[350px]  lg:w-[500px]    ">
        <input
          className="bg-transparent p-2 w-full focus:outline-none text-white"
          type="text"
          placeholder="What do you want to watch"
        />
        <IoSearchOutline size={30} className=" text-white" />
      </div>

      {/* sign in */}
      <div className=" space-x-3 flex items-center  ">
        <h1 className=" text-white hidden md:flex ">Sign in</h1>
        <div className=" w-7 h-7 p-1 flex items-center justify-cent rounded-full bg-red-600">
          <HiMenuAlt4 size={23} className=" text-white" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
