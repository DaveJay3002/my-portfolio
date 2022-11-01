import React from "react";
import { SocialIcon } from "react-social-icons";
import {motion} from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div 
      initial={{
        x:-250,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5,
      }}
      className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://www.linkedin.com/in/jay-dave-206a62230/"
        ></SocialIcon>
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://twitter.com/davejay2003?t=VUXxIp2SLlLXhMpma75hEA&s=35"
        ></SocialIcon>
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://github.com/DaveJay3002"
        ></SocialIcon>
      </motion.div>

      <motion.div 
      initial={{
        x:250,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1,
      }}
      transition={{
        duration:1.5
      }}
      className="flex flex-row items-center text-gray-400 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          url="mailto:davejay3002@gmail.com"
        />
        <p className="hidden md:inline-flex text-sm text-gray-400">Let's Connect</p>
      </motion.div>
    </header>
  );
}
