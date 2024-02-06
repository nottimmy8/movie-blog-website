import React from "react";
import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="max-w-6xl mx-auto px-4 flex flex-col items-center pt-16 ">
      <div className="  flex flex-col items-center text-center  ">
        {/* social icons */}
        <div className=" flex gap-3 pb-2">
          <div>
            <FaSquareFacebook size={20} />
          </div>
          <div>
            <FaInstagram size={20} />
          </div>

          <div>
            <FaSquareXTwitter size={20} />
          </div>
          <div>
            <FaYoutube size={20} />
          </div>
        </div>
        {/*  */}
        <div className=" flex pb-2">
          <h3>Condition of Use</h3>
          <h3>Privacy $ Policy</h3>
          <h3>Press Room</h3>
        </div>
        {/*  */}
        <div className=" ">
          <h1>@ 2023 MovieBox by Timilehin</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
