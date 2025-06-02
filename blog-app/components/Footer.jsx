import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image src={assets.logo_light} alt="logo-light" width={120} />
      <p className="text-sm text-white">
        BlogApp: one stop for reading and posting blogs
      </p>
      <div className="flex">
        <Image src={assets.facebook_icon} alt="icon" width={40} />
        <Image src={assets.twitter_icon} alt="icon" width={40} />
        <Image src={assets.googleplus_icon} alt="icon" width={40} />
      </div>
    </div>
  );
};

export default Footer;
