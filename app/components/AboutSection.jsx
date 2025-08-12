"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 grid sm:grid-cols-2 gap-x-8 gap-y-2">
        <li>MySQL</li>
        <li>Python</li>
        <li>Javascript</li>
        <li>AWS Services</li>
        <li>Linux</li>
        <li>React</li>
        <li>PIP</li>
        <li>Node.js</li>
        <li>Power BI</li>
        <li>Excel</li>
        <li>ScSS</li>
        <li>R</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Washington University St Louis</li>
        <li>Southern Illinois University Edwardsville</li>
        <li>AWS Skill Builder</li>
        <li>CodeAcademy</li>
        <li>Udemy</li>
        <br></br>
      </ul>
    ),
  },
  {
    title: "Certificates",
    id: "certificates",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelors of Political Science</li>
        <li>AWS Cloud Practitioner Essentials - Fundamental</li>
        <li>Certificate of Completion - Full Stack Web Development</li>
        <li>Certificate of Completion - Data Analysis with Python</li>
      </ul>
    ),
  },
  {
    title: "Work",
    id: "work",
    content: (
      <ul className="list-disc pl-2">
        <h3>Technical:</h3>
        <li>Data Manager - Source Path Digital - 2024 - Present</li>
        <br></br>
        <h3>Service:</h3>
        <li>Manager - Global Brew Taphouse - 2021-2024</li>
        <li>Brewery Assistant- Old Herald - 2020-2021</li>
        <li>Bar Program Manager - Wang Gang Asian - 2013-2020</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-centered py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/guitar-me.png"
          height={300}
          width={300}
          className="pl-142"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 border-b border-yellow-300">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            Former aspiring Data Analyst, turned service industry professional,
            turned craft beer industry professional, turned web developer,
            turned Data Analyst. I love technology, music, sports, friends, and
            my dog.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certificates")}
              active={tab === "certificates"}
            >
              Certificates
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("work")}
              active={tab === "work"}
            >
              Work
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// Update
