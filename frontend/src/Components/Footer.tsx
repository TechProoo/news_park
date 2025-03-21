import React from "react";
import Image from "../assets/techPro.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-5">
          <div>
            <h1 className="text-2xl fnt">Built By:</h1>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
