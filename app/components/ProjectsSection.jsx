"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Vwortle",
    description: "React app mock up of Wordle",
    image: "/images/projects/vwortle.png",
    tag: ["All", "Games"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Live Wire",
    description: "MERN Stack music forward social media App",
    image: "/images/projects/livewire.png",
    tag: ["All", "Apps"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Beer To SQL",
    description: "SQL application where users rate the beers they drink",
    image: "/images/projects/sqlbeer.png",
    tag: ["All", "Apps"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Hangman Adam Page",
    description: "React Hangman App",
    image: "/images/projects/hangman.png",
    tag: ["All", "Games"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Brewery Finder",
    description: "Single page API driven Brewery Finder",
    image: "/images/projects/brewery.png",
    tag: ["All", "Apps"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Vincent's Portfolio 2.0",
    description: "Old Portfolio",
    image: "/images/projects/port2.png",
    tag: ["All", "Apps"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
