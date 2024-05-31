import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_PROJECT_BY_ID } from "../graphql/queries";
import { Helmet } from "react-helmet";

export default function ProjectDetail() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT_BY_ID, { variables: { id } });
    const project = data?.project;
    console.log(project);

    if (loading) return <>...loading</>;
    if (error) return <h1>error...</h1>;

    if (data) console.log(data);

    return (
        <div>
            <Helmet>
                <title> PGM | {project.title}</title>
                <meta name="description" content="Project detail ..." />
            </Helmet>
            <div className="max-w-custom-1440 p-16 mx-auto mt-12 bg-custom-lightblue shadow-lg rounded-lg flex">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                    <h2 className="text-2xl font-semibold mb-2">{project.subtitle}</h2>
                    <p className="mb-4">{project.description}</p>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Features</h3>
                        <ul className="list-disc list-inside">
                            {project.features.split(",").map((feature, index) => (
                                <li key={index}>{feature.trim()}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Team</h3>
                        <p>{project.team}</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Duration</h3>
                        <p>{project.duration}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Project Status</h3>
                        <p>{project.projectStatus}</p>
                    </div>
                </div>
                <div className="flex-none w-1/2 pr-8 mt-16">
                    <img src={`../img/${project.title}.jpg`} alt={project.title} className="w-full h-96 object-cover rounded-lg mb-4" />
                </div>
            </div>
        </div>
    );
}
