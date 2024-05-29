import { useQuery } from "@apollo/client";
import { useState } from "react";
import React from "react";
import { GET_ALL_BLOGS } from "../graphql/queries";
import { Helmet } from "react-helmet";
import Card from "../components/Card";
import Header from "../components/header";

export default function Blog() {
    const [filter, setFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    const { loading, error, data } = useQuery(GET_ALL_BLOGS);
    console.log(data);
    if (loading) return <>...loading</>;
    if (error) return <>...error</>;

    const cardColors = ["bg-custom-red", "bg-custom-green", "bg-custom-purple"];

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        const filteredBlogs = filter === "all" ? data.blogs : data.blogs.filter((blog) => blog.categorie === filter);
        setFilteredBlogs(filteredBlogs);
    };

    const handelSearch = () => {
        const filteredBlogs = data.blogs.filter((blog) => {
          console.log(blog.title)
          return blog.title.toLowerCase().includes(searchTerm) || blog.content.toLowerCase().includes(searchTerm) || blog.categorie.toLowerCase().includes(searchTerm);
      });
        setFilteredBlogs(filteredBlogs);
    };

    return (
        <div>
            <Helmet>
                <title> PGM | Overzicht Blog</title>
                <meta name="description" content="Overzicht Blog Post ..." />
            </Helmet>

            <Header title="Blog" />

            <div className="max-w-md mx-auto mb-8">
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Zoek door de volledige blog post.."
                        required
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        onClick={handelSearch}
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </div>

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

            <div className="flex flex-wrap justify-around max-w-custom-1440 gap-2 mb-8 mx-auto">
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
