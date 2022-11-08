import React from "react";
import { motion } from "framer-motion";
import Expcard from "../components/Expcard"
type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen flex relative overflow-hidden flex-col md:flex-row text-left max-w-full px-10 justify-evenly max-auto items-center"
    >
      <h3 className="absolute uppercase top-24 xl:top-12 tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 xl:p-0 snap-x snap-mandatory xl:mt-20 ">
        <Expcard/>
        <Expcard/>
        <Expcard/>
      </div>
    </motion.div>
  );
}
