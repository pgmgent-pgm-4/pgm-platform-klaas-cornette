import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SubjectCard from "../components/SubjectCard";
import Header from "../components/header";

export default function PortfolioPage() {

    const [projects, setProjects] = useState([]);
    const cardColors = ["bg-custom-red", "bg-custom-green", "bg-custom-purple"];
    async function loadProjects() {
        try {
          const response = await fetch("/data/projects.json");
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const projectsData = await response.json();
    
          setProjects(projectsData);
        } catch (error) {
          console.error("Error fetching the JSON file:", error);
        }
      }

      useEffect(() => {
        loadProjects();
      }, []);

    return (
        <div>
          <Helmet>
            <title>PGM | portfolio</title>
            <meta name="description" content="PGM portfolio" />
          </Helmet>
          <Header
          title="Portfolio"
          />
        {projects.map((project, index) => (
        <SubjectCard
            index={index}
            title={project.title}
            subtitle={project.subtitle}
            imgUrl="/img/subject.svg"
            imgAlt={index + project.title}
            color={cardColors[index % cardColors.length]}
            className="w-1/3 p-2"
        />
        ))}
          
        </div>
      );
}