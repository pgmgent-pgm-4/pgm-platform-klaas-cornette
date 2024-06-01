import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { GET_ALL_TEAM, GET_ALL_SUBJECTS } from "../graphql/queries";
import TeamCard from "../components/TeamCard";
import Header from "../components/header";

export default function TeamPage() {
    const { loading: loadingTeam, error: errorTeam, data: dataTeam } = useQuery(GET_ALL_TEAM);
    const { loading: loadingSubjects, error: errorSubjects, data: dataSubjects } = useQuery(GET_ALL_SUBJECTS);

    const [selectedSubject, setSelectedSubject] = useState("");
    const [filteredTeams, setFilteredTeams] = useState(["start"]);

    if (loadingTeam || loadingSubjects) return <>...loading</>;
    if (errorTeam || errorSubjects) return <>...error</>;

    const handleSubjectChange = (subject) => {
        setSelectedSubject(subject);
        console.log(dataTeam.teams[0].subjects[0].course);
        const filteredTeams = dataTeam.teams.filter((team) => team.subjects.some((sub) => sub.course === subject) || subject === "All");
        setFilteredTeams(filteredTeams);
    };

    return (
        <div>
            <Helmet>
                <title>PGM | Team</title>
                <meta name="description" content="team" />
            </Helmet>
            <Header title="Team" subtitle={"Dit het artevelde graduaat programmeer team!"} />

            <div className="flex justify-center mt-8">
                <select
                    className="block w-1/3 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={selectedSubject}
                    onChange={(e) => handleSubjectChange(e.target.value)}
                >
                    <option value="">Select vak</option>
                    <option value="All">Alle vakken</option>
                    {dataSubjects.subjects.map((subject) => (
                        <option key={subject.id} value={subject.course}>
                            {subject.course}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-wrap justify-around gap-16 max-w-custom-1440 mx-auto mt-16 mb-32">
                {(filteredTeams[0] === "start" ? dataTeam.teams : filteredTeams).map((team) => (
                    <TeamCard key={team.id} id={team.id} url={team.foto.url} firstName={team.firstName} lastName={team.lastName} githubName={team.githubName} />
                ))}
            </div>
        </div>
    );
}
