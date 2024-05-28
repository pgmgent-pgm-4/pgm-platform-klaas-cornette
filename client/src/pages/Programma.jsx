import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Card from "../components/Card";
import Header from "../components/header";
import { useQuery } from "@apollo/client";
import { GET_ALL_SUBJECTS } from "../graphql/queries";

export default function ProgrammaPage() {
    const [filter, setFilter] = useState("all");
    const cardColors = ["bg-custom-red", "bg-custom-green", "bg-custom-purple"];
    const periodsOrder = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"];

    const { loading, error, data } = useQuery(GET_ALL_SUBJECTS);
    if (loading) return <div>...Loading</div>;
    if (error) return <div>...error</div>;

    const filteredData = data.subjects.filter(subject => subject.major !== filter || filter === "all")

    const groupedSubjects = filteredData.reduce((acc, subject) => {
        const period = subject.periode;
        const year = period.startsWith("p1") || period.startsWith("p2") || period.startsWith("p3") || period.startsWith("p4") ? "year1" : "year2";

        if (!acc[year]) {
            acc[year] = {};
        }
        if (!acc[year][period]) {
            acc[year][period] = [];
        }
        acc[year][period].push(subject);

        return acc;
    }, {});

    return (
        <div>
            <Helmet>
                <title>PGM | Programma</title>
                <meta name="description" content="PGM programma" />
            </Helmet>
            <Header title="Graduaat Programmeren" />

            <div className="flex flex-row justify-center gap-8">
                <button
                    className={`px-6 py-3  border-4 text-blue-900 bg-custom-red rounded-md shadow-sm text-lg 
                        ${filter === "backend" ? "border-blue-900" : "border-none"}`}
                    onClick={() => setFilter("backend")}
                >
                    Interactive Front-end Development
                </button>
                <button
                    className={`px-6 py-3 border-4 bg-custom-green text-blue-900 rounded-md shadow-sm text-lg 
                        ${filter === "frontend" ? "border-blue-900" : "border-none"}`}
                    onClick={() => setFilter("frontend")}
                >
                    Cloud Application Development
                </button>
                <button
                    className={`px-6 py-3 border-4 bg-custom-purple text-blue-900 rounded-md shadow-sm text-lg 
                        ${filter === "all" ? "border-blue-900" : "border-none"}`}
                    onClick={() => setFilter("all")}
                >
                    Alle vakken
                </button>
            </div>


            <div className="w-custom-1440 mx-auto">
                {Object.entries(groupedSubjects).map(([year, periods]) => (
                    <div key={year} className="w-full my-8">
                        <h2 className="w-full text-4xl font-extrabold my-8 text-blue-900 border-b-4 border-blue-900 pb-2">
                            {year === "year1" ? "Eerste Jaar" : "Tweede Jaar"}
                        </h2>
                        {periodsOrder.map((period) =>
                            periods[period] ? (
                                <div key={period} className="w-full my-6">
                                    <h3 className="w-full text-2xl font-semibold my-4 text-blue-900 border-l-4 border-blue-900 pl-4">
                                        Periode {period.toUpperCase().slice(1)}
                                    </h3>
                                    <div className="flex flex-wrap">
                                        {periods[period].map((subject, index) => (
                                            <Card
                                                key={index}
                                                title={subject.course}
                                                imgUrl="/img/subject.svg"
                                                imgAlt={index + subject.course}
                                                studyPoints={subject.sp}
                                                hours={subject.hours}
                                                color={cardColors[index % cardColors.length]}
                                                className="w-1/3 p-2"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ) : null
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
