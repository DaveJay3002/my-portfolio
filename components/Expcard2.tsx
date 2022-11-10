import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function ({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-0 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[1200px] h-auto snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          opacity: 0,
          y: -100,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="h-32 w-32 rounded-full xl:w-[100px] xl:h-[100px] "
        src="/hcs.png"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Hack SVIT</h4>
        <p className="text-2xl font-bold mt-1">Traffic Management AI</p>
        <div className="flex space-x-2 my-2">
          <img src="/py.png" className="h-10 w-10 rounded-full bg-white" />
          <img src="/numpy.png" className="h-10 w-10 rounded-full bg-white" />
          <img src="/matplot.png" className="h-10 w-10 rounded-full bg-white" />
          <img src="/github2.png" className="h-10 w-10 rounded-full bg-white" />
          <img src="/md.png" className="h-10 w-10 bg-white rounded-full " />
        </div>
        <p className="uppercase text-gray-300">April 2022</p>
        <ul className="list-disc space-y-1  ml-5  text-m">
          <li>Made an AI that uses Image detection </li>
          <li>
            To predict how much time is to be given to each lane
          </li>
          <li>We won the prize for best use of Github</li>
        </ul>
      </div>
    </article>
  );
}
