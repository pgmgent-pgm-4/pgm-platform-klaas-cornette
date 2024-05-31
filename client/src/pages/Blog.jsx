import { useQuery } from "@apollo/client";
import { useState } from "react";
import React from "react";
import { GET_ALL_BLOGS } from "../graphql/queries";
import { Helmet } from "react-helmet";
import Card from "../components/Card";
import Header from "../components/header";
import SearchBar from "../components/SearchBar";
import FilterButtons from "../components/FilterButtons";

export default function Blog() {
    const [filter, setFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBlogs, setFilteredBlogs] = useState(["start"]);

    const { loading, error, data } = useQuery(GET_ALL_BLOGS);
    console.log(data);
    if (loading) return <>...loading</>;
    if (error) return <>...error</>;

    const cardColors = ["bg-custom-red", "bg-custom-green", "bg-custom-purple"];
    const filters = [
        { name: "Alles", value: "all" },
        { name: "Techno", value: "techno" },
        { name: "Hard techno", value: "hard techno" },
        { name: "Melodic techno", value: "melodic techno" },
        { name: "Drum & Base", value: "dnb" },
        { name: "Neuro", value: "neuro" },
    ];

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        const filteredBlogs = filter === "all" ? data.blogs : data.blogs.filter((blog) => blog.categorie === newFilter);
        setFilteredBlogs(filteredBlogs);
    };

    const handleSearch = () => {
        const filteredBlogs = data.blogs.filter((blog) => {
            return (
                blog.title.toLowerCase().includes(searchTerm) ||
                blog.content.toLowerCase().includes(searchTerm) ||
                blog.categorie.toLowerCase().includes(searchTerm)
            );
        });
        setFilteredBlogs(filteredBlogs);
    };

    return (
        <div>
            <Helmet>
                <title> PGM | Overzicht Blog</title>
                <meta name="description" content="Overzicht Blog Post ..." />
            </Helmet>

            <Header title="Blog" subtitle={"Ondek de beste feestjes van de weereld hier!!!"} />

            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />

            <FilterButtons filters={filters} handleFilterChange={handleFilterChange} cardColors={cardColors} />

            <div className="flex flex-wrap justify-around max-w-custom-1440 gap-2 mb-8 mx-auto">
                {(filteredBlogs[0] !== "start" ? filteredBlogs : data.blogs).map((blog, index) => (
                    <Card
                        key={index}
                        index={index}
                        title={blog.title}
                        subtitle={blog.content}
                        imgUrl={"img/" + blog.foto}
                        page={`/blog/${blog.id}`}
                        imgAlt={index + blog.title}
                        color={cardColors[index % cardColors.length]}
                        className="p-2"
                    />
                ))}
            </div>
        </div>
    );
}
