import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_TEAM_BY_ID } from "../graphql/queries";
import { Helmet } from "react-helmet";

export default function TeamDetail() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_TEAM_BY_ID, { variables: { id } });
    if (loading) return <>...loading</>;
    if (error) return <h1>error...</h1>;
    const team = data.team;

    return (
        <div>
            <Helmet>
                <title> PGM | {team.firstName}</title>
                <meta name="description" content="team detail ..." />
            </Helmet>
            <div className="max-w-custom-1440 p-16 mx-auto mt-12 bg-custom-lightblue shadow-lg rounded-lg flex flex-row flex-wrap justify-between">
                <div className="max-w-3/4 max-w-4xl">
                    <h1 className="text-4xl font-bold mb-4">
                        {team.firstName} {team.lastName}
                    </h1>
                    <h2 className="text-2xl font-semibold mb-2">{team.githubName}</h2>
                    <p className="mb-4">{team.description}</p>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Subjects</h3>
                        <ul>
                            {team.subjects.map((subject) => (
                                <li key={subject.course}>{subject.course}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="pr-8 mt-8">
                    <img src={team.foto.url} alt={team.id} className=" min-h-72 min-w-fit object-cover rounded-lg mb-4" />
                </div>
            </div>
        </div>
    );
}
