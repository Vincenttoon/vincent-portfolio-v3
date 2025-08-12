"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-7 place-self-center text-center md:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl md:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-300 to-blue-400">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Vincent",
                1000,
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

          <p className="text-[#ADB7BE] text-base md:text-lg mb-6 lg:text-xl">
            Data Operations Manager and backend developer with expertise in
            MySQL, Python, AWS, and data modeling. Skilled at building
            predictive database procedures, automating workflows, and
            transforming complex datasets into actionable insights. Passionate
            about leveraging data to solve real-world business challenges and
            deliver measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 rounded-full bg-white bg-gradient-to-br from-red-500 via-yellow-300 to-blue-400 hover:bg-gradient-to-r hover:from-yellow-300 hover:via-blue-400 hover:to-red-500 text-white"
            >
              Contact Me
            </Link>
            <Link
              href="https://docs.google.com/document/d/172Xm8ZzKbhgXofwVtKbvTxRcHxaVAbbyHBTg91L6biE/edit?tab=t.0"
              className="px-1 inline-block py-1 rounded-full bg-gradient-to-br from-red-500 to-blue-400 hover:bg-slate-800 text-white"
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
          className="md:col-span-5 place-self-center mt-6 md:mt-0"
        >
          <div className="relative rounded-full bg-[#181818] w-48 h-52 sm:w-56 sm:h-60 md:w-72 md:h-80">
            <Image
              src="/images/me-pic.png"
              alt="hero image"
              width={225}
              height={300}
              className="rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
