"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Javascript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>Python</li>
        <li>ScSS</li>
        <li>R</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Washington University St Louis</li>
        <li>Southern Illinois University Edwardsville</li>
        <li>CodeCademy</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>Bachelors of Political Science</li>
        <li>Certificate of Completion - Full Stack Web Development</li>
        <li>Certificate of Completion - Data Analysis with Python</li>
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
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Enthusiastic software development candidate with a strong foundation
            in JavaScript, React, and web development principles. Eager to
            contribute innovative solutions and embark on a rewarding career in
            the software development industry.
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
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
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
