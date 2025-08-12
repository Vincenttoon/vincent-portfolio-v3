"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="md:col-span-7 place-self-center text-center md:text-left"
        >
          <h1 className="text-white mb-4 text-4xl md:text-5xl lg:text-7xl leading-tight font-extrabold">
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

          <p className="text-[#ADB7BE] text-base md:text-lg lg:text-xl mb-6">
            Data Operations Manager and backend developer with expertise in
            MySQL, Python, AWS, and data modeling. Skilled at building
            predictive database procedures, automating workflows, and
            transforming complex datasets into actionable insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-br from-red-500 via-yellow-300 to-blue-400 text-white"
            >
              Contact Me
            </Link>
            <Link
              href="https://docs.google.com/document/d/172Xm8ZzKbhgXofwVtKbvTxRcHxaVAbbyHBTg91L6biE/edit?tab=t.0"
              className="inline-block rounded-full bg-gradient-to-br from-red-500 to-blue-400 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="md:col-span-5 flex justify-center md:justify-end"
        >
          {/* Responsive, centered avatar */}
          <div className="relative rounded-full bg-[#181818] overflow-hidden w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
            <Image
              src="/images/me-pic.png"
              alt="Portrait of Vincent"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

// Update
