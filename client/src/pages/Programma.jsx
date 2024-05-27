import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SubjectCard from "../components/SubjectCard";
import Header from "../components/header";

export default function ProgrammaPage() {
  const [subjectsByPeriod, setSubjectsByPeriod] = useState({});
  const [filterType, setFilterType] = useState("");
  const [subjectsByMajor, setFilterSubjectsByMajor] = useState([]);

  async function loadSubjects() {
    try {
      const response = await fetch("/data/subjects.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const subjects = await response.json();

      const groupedSubjects = subjects.reduce((acc, subject) => {
        const period = subject.periode;
        const year =
          period.startsWith("p1") ||
          period.startsWith("p2") ||
          period.startsWith("p3") ||
          period.startsWith("p4")
            ? "year1"
            : "year2";

        if (!acc[year]) {
          acc[year] = {};
        }
        if (!acc[year][period]) {
          acc[year][period] = [];
        }
        acc[year][period].push(subject);

        return acc;
      }, {});

      setSubjectsByPeriod(groupedSubjects);
    } catch (error) {
      console.error("Error fetching the JSON file:", error);
    }
  }

  function filterSubjectsByMajor(majorToFilter) {
	if(majorToFilter === "all"){
		return subjectsByPeriod
	}
    for (const year in subjectsByPeriod) {
      if (Object.hasOwnProperty.call(subjectsByPeriod, year)) {
        const periods = subjectsByPeriod[year];
        for (const period in periods) {
          if (Object.hasOwnProperty.call(periods, period)) {
            const subjects = periods[period];
            if (Array.isArray(subjects)) {
              periods[period] = subjects.filter(
                (subject) => subject.major !== majorToFilter
              );
            }
          }
        }
      }
    }
    return subjectsByPeriod;
  }

  useEffect(() => {
    loadSubjects();
    setFilterSubjectsByMajor(filterSubjectsByMajor(filterType));
  }, [filterType]);

  const cardColors = ["bg-custom-red", "bg-custom-green", "bg-custom-purple"];
  const periodsOrder = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"];

  return (
    <div>
      <Helmet>
        <title>PGM | Programma</title>
        <meta name="description" content="PGM programma" />
      </Helmet>
	  <Header
	  title="Graduaat Programmeren"
	  />

      <div className="flex flex-row justify-center gap-8">
        <button
          className="px-6 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 text-lg bg-custom-red text-blue-900"
          onClick={() => setFilterType("backend")}
        >
          Interactive Front-end Development
        </button>
        <button
          className="px-6 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 text-lg bg-custom-green text-blue-900"
          onClick={() => setFilterType("frontend")}
        >
          Cloud Application Development
        </button>
		<button
          className="px-6 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 text-lg bg-custom-purple text-blue-900"
          onClick={() => setFilterType("all")}
        >
          Alle vakken 
        </button>

      </div>

      <div className="w-custom-1440 mx-auto">
        {Object.entries(subjectsByMajor).map(([year, periods]) => (
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
                      <SubjectCard
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
