import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Card from "../components/Card";
import Header from "../components/header";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROJECTS } from "../graphql/queries";
import SearchBar from "../components/SearchBar";
import FilterButtons from "../components/FilterButtons";

export default function PortfolioPage() {
    const [filter, setFilter] = useState("all");
    const [filteredProjects, setFilteredProjects] = useState(["start"]);
    const [searchTerm, setSearchTerm] = useState("");
    const cardColors = ["bg-custom-red", "bg-custom-green", "bg-custom-purple"];
    const filters = [
        { name: "Alles", value: "all" },
        { name: "Backend", value: "backend" },
        { name: "Computer Programming", value: "computer programming" },
        { name: "@Work", value: "@work" },
    ];

    const { loading, error, data } = useQuery(GET_ALL_PROJECTS);
    if (loading) return <div>...Loading</div>;
    if (error) return <div>...error</div>;

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        const filteredData = newFilter === "all" ? data.projects : data.projects.filter((project) => project.filter === newFilter);
        setFilteredProjects(filteredData);
    };

    const handleSearch = () => {
        const filteredData = data.projects.filter((blog) => {
            return blog.title.toLowerCase().includes(searchTerm) || blog.subtitle.toLowerCase().includes(searchTerm);
        });
        setFilteredProjects(filteredData);
    };

    return (
        <div>
            <Helmet>
                <title>PGM | portfolio</title>
                <meta name="description" content="PGM portfolio" />
            </Helmet>
            <Header title="Portfolio" subtitle={"Dit zijn de verschillende projecten dat al verwezenlijkt zijn."}/>

            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />

            <FilterButtons filters={filters} handleFilterChange={handleFilterChange} cardColors={cardColors} />

            <div className="flex flex-wrap justify-around max-w-custom-1440 gap-2 mb-8 mx-auto">
                {(filteredProjects[0] === "start" ? data.projects : filteredProjects).map((project, index) => (
                    <Card
                        key={index}
                        index={index}
                        page={`/project/${project.id}`}
                        title={project.title}
                        subtitle={project.subtitle}
                        imgUrl={`../img/${project.title}.jpg`}
                        imgAlt={index + project.title}
                        color={cardColors[index % cardColors.length]}
                        className="p-2"
                    />
                ))}
            </div>
        </div>
    );
}
