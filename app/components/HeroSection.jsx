"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-300 to-blue-400">
              Hello, I&apos;m{" "}
            </span>
            <br></br>

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Vincent",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Data Manager",
                1000,
                "Data Analyst",
                1000,
                "Human Being",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Data Operations Manager and backend developer with expertise in
            MySQL, Python, AWS, and data modeling. Skilled at building
            predictive database procedures, automating workflows, and
            transforming complex datasets into actionable insights. Passionate
            about leveraging data to solve real-world business challenges and
            deliver measurable results.
          </p>
          <div>
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white bg-gradient-to-br from-red-500 via-yellow-300 to-blue-400 hover:bg-gradient-to-r hover:from-yellow-300 hover:via-blue-400 hover:to-red-500 text-white"
            >
              Contact Me
            </Link>
            <Link
              href="https://docs.google.com/document/d/172Xm8ZzKbhgXofwVtKbvTxRcHxaVAbbyHBTg91L6biE/edit?tab=t.0"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 to-blue-400 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[375px] h-[400px] lg:w-[375px] lg:h-[400px] relative">
            <Image
              src="/images/me-pic.png"
              alt="hero image"
              className="rounded-full absolute transform -translate -x-1/2 -translate-y-1/2 top-1/2 left-20"
              width={225}
              height={300}
            />
          </div>
          ;
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

// Update
