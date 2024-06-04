export const filterSubjects = (data) => {
    const groupedSubjects = data.reduce((acc, subject) => {
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

    return groupedSubjects;
};
