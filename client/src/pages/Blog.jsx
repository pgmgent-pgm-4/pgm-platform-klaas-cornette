import { useQuery } from "@apollo/client";
import { useState } from "react";
import React from "react";
import { GET_ALL_BLOGS } from "../graphql/queries";
import { Helmet } from "react-helmet";
import Card from "../components/Card";
import Header from "../components/header";

export default function Blog() {
    const [filter, setFilter] = useState("all");

    const { loading, error, data } = useQuery(GET_ALL_BLOGS);
    console.log(data);
    if (loading) return <>...loading</>;
    if (error) return <>...error</>;
    const cardColors = ["bg-custom-red", "bg-custom-green", "bg-custom-purple"];

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

	console.log(data.blogs);

    const filteredBlogs = filter === "all" ? data.blogs : data.blogs.filter((blog) => blog.categorie === filter);

    return (
        <div>
            <Helmet>
                <title> PGM | Overzicht Blog</title>
                <meta name="description" content="Overzicht Blog Post ..." />
            </Helmet>

            <Header title="Blog" />
            <div className="flex justify-center mb-8 space-x-4">
                <button
                    className={`bg-custom-darkblue py-2 px-4 rounded text-white hover:opacity-75 focus:outline-none`}
                    onClick={() => handleFilterChange("all")}
                >
                    All
                </button>
                <button
                    className={`${cardColors[0]} py-2 px-4 rounded hover:opacity-75 focus:outline-none text-black`}
                    onClick={() => handleFilterChange("techno")}
                >
                    Techno
                </button>

                <button
                    className={`${cardColors[1]} py-2 px-4 rounded hover:opacity-75 focus:outline-none text-black`}
                    onClick={() => handleFilterChange("hard techno")}
                >
                    Hard techno
                </button>
                <button
                    className={`${cardColors[2]} py-2 px-4 rounded hover:opacity-75 focus:outline-none text-black`}
                    onClick={() => handleFilterChange("melodic techno")}
                >
                    Melodic techno
                </button>
				<button
                    className={`${cardColors[0]} py-2 px-4 rounded hover:opacity-75 focus:outline-none text-black`}
                    onClick={() => handleFilterChange("dnb")}
                >
                    DNB
                </button>
				<button
                    className={`${cardColors[1]} py-2 px-4 rounded hover:opacity-75 focus:outline-none text-black`}
                    onClick={() => handleFilterChange("neuro")}
                >
                    Neuro
                </button>
            </div>

            <div className="grid grid-cols-3 max-w-custom-1440 gap-2 mb-8 mx-auto">
                {filteredBlogs.map((blog, index) => (
                    <Card
                        key={index}
                        index={index}
                        title={blog.title}
                        subtitle={blog.content}
                        imgUrl={"img/" + blog.foto}
                        imgAlt={index + blog.title}
                        color={cardColors[index % cardColors.length]}
                        className="p-2"
                    />
                ))}
            </div>
        </div>
    );
}
