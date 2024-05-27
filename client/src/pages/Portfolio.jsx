import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Card from "../components/Card";
import Header from "../components/header";

export default function PortfolioPage() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");

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

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.filter === filter);

  return (
    <div>
      <Helmet>
        <title>PGM | portfolio</title>
        <meta name="description" content="PGM portfolio" />
      </Helmet>
      <Header title="Portfolio" />

      <div className="flex justify-center mb-4 space-x-4">
        <button 
          className={`bg-custom-darkblue py-2 px-4 rounded text-white hover:opacity-75 focus:outline-none`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button 
          className={`${cardColors[0]} py-2 px-4 rounded hover:opacity-75 focus:outline-none text-black`}
          onClick={() => handleFilterChange("backend")}
        >
          Backend
        </button>
      
        <button 
          className={`${cardColors[1]} py-2 px-4 rounded hover:opacity-75 focus:outline-none text-black`}
          onClick={() => handleFilterChange("computer programming")}
        >
          Computer Programming
        </button>
        <button 
          className={`${cardColors[2]} py-2 px-4 rounded hover:opacity-75 focus:outline-none text-black`}
          onClick={() => handleFilterChange("@work")}
        >
          @Work
        </button>
      </div>
      
      <div className="grid grid-cols-3 max-w-custom-1440 gap-2 mx-auto">
        {filteredProjects.map((project, index) => (
          <Card
            key={index}
            index={index}
            title={project.title}
            subtitle={project.subtitle}
            imgUrl="/img/subject.svg"
            imgAlt={index + project.title}
            color={cardColors[index % cardColors.length]}
            className="p-2"
          />
        ))}
      </div>
    </div>
  );
}
