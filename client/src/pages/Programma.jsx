import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Card from "../components/Card";
import Header from "../components/header";
import FilterButtons from "../components/FilterButtons";
import { fetchSubjects, fetchFiteredSubjects } from "../graphql/fetch";
import { filterSubjects } from "../helper/helper";

export default function ProgrammaPage() {
    const [filteredSubjects, setFilteredSubjects] = useState([])
    const [data, setData] = useState([{}])
    const cardColors = ["bg-custom-red", "bg-custom-green", "bg-custom-purple"];
    const periodsOrder = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"];
    const filters = [
        { name: "Cloud Application Development", value: "backend" },
        { name: "Interactive Front-end Development", value: "frontend" },
        { name: "Alles", value: "all subjects" }
    ]
    useEffect(() => {
        const fetchData = async () => {
            const filterdeData = await fetchFiteredSubjects()
            const data = await fetchSubjects()
            setData(data)
            setFilteredSubjects(filterdeData)
        }
            fetchData()
        
        }, [])

    
    //if (loading) return <div>...Loading</div>;
    //if (error) return <div>...error</div>;

    const handleFilterChange = (newFilter) => {
        console.log(data)
        const filteredData = data.filter(subject => subject.major === newFilter || subject.major === "Fullstack" || newFilter === "all subjects")
        const groupedData = filterSubjects(filteredData)
        setFilteredSubjects(groupedData)
    }
    
    



    return (
        <div>
            <Helmet>
                <title>PGM | Programma</title>
                <meta name="description" content="PGM programma" />
            </Helmet>
            <Header title="Graduaat Programmeren" subtitle={"Dit zijn alle vakken dat u zult tegen komen in de 2 jarige opleiding."} />

            <FilterButtons filters={filters} handleFilterChange={handleFilterChange} cardColors={cardColors} />


            <div className="max-w-custom-1440 gap-2 mx-auto flex flex-wrap"> 
                {Object.entries(filteredSubjects).map(([year, periods]) => (
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
