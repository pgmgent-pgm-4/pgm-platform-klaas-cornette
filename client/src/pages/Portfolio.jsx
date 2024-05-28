import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Card from "../components/Card";
import Header from "../components/header";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROJECTS } from "../graphql/queries";


export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");
  const cardColors = ["bg-custom-red", "bg-custom-green", "bg-custom-purple"];

  const { loading, error, data } = useQuery(GET_ALL_PROJECTS);
  if (loading) return <div>...Loading</div>;
  if (error) return <div>...error</div>;

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredProjects = filter === "all" ? data.projects : data.projects.filter((project) => project.filter === filter);
  console.log(filteredProjects);

  return (
    <div>
      <Helmet>
        <title>PGM | portfolio</title>
        <meta name="description" content="PGM portfolio" />
      </Helmet>
      <Header title="Portfolio" />

      <div className="flex justify-center mb-8 space-x-4">
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

      <div className="grid grid-cols-3 max-w-custom-1440 gap-2 mb-8 mx-auto">
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
