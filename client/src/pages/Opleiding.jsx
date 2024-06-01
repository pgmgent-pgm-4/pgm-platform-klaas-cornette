import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";

const Opleiding = () => {
    return (
        <div>
            <Helmet>
                <title> PGM | Opleiding</title>
                <meta name="description" content="Opleiding Graduaat Programmeren ..." />
            </Helmet>

            <Header
                title="Opleiding"
                subtitle={
                    "Tijdens het Graduaat Programmeren leer je het zichtbare (front-end) en onzichtbare (backend) deel van web- en mobiele toepassingen ontwikkelen. Je wordt specialist in JavaScript, HTML, CSS en vult jouw skills aan met o.a. PHP, Python, UI/UX. Naast deze technische kant, vergaar je ook algemene ICT-skills. Je leert ook hoe digital agencies werken en wat jouw rol hierbinnen zal zijn. Na deze opleiding kan je aan de slag als front-end developer, full-stack JavaScript developer, PHP developer, Web Designer + Coder of CMS Themer."
                }
            />

            <div className="max-w-custom-1440 mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="rounded-2xl shadow-2xl p-8 bg-gradient-to-r from-white to-blue-100">
                    <div className="flex justify-center my-6">
                        <img src="/img/chronometer.png" alt="time icon" className="w-16 h-16" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-extrabold text-gray-800">Duur</h2>
                        <p className="mt-4 text-lg text-gray-700">De studie zal 2 jaar duren.</p>
                    </div>
                </div>

                <div className="rounded-2xl shadow-2xl p-8 bg-gradient-to-r from-white to-blue-100">
                    <div className="text-center">
                        <h2 className="text-2xl font-extrabold text-gray-800">Mogelijkheden</h2>
                        <ul className="text-lg text-gray-700 list-disc list-inside text-left ml-6 mt-5">
                            <li>Dagonderwijs</li>
                            <li>Deeltijds</li>
                            <li>VDAB tussenkomst</li>
                            <li>Voltijds</li>
                        </ul>
                    </div>
                </div>

                <div className="rounded-2xl shadow-2xl p-8 bg-gradient-to-r from-white to-blue-100">
                    <div className="flex justify-center my-6">
                        <img src="/img/translate.png" alt="time icon" className="w-16 h-16" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-extrabold text-gray-800">Talen</h2>
                        <p className="mt-4 text-lg text-gray-700">Nederlands</p>
                    </div>
                </div>

                <div className="rounded-2xl shadow-2xl p-8 bg-gradient-to-r from-white to-blue-100">
                    <div className="flex justify-center my-6">
                        <img src="/img/school-building.png" alt="time icon" className="w-16 h-16" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-extrabold text-gray-800">Campus</h2>
                        <p className="mt-4 text-lg text-gray-700">Leeuwstraat</p>
                    </div>
                </div>
            </div>

            <div className="bg-custom-darkblue">
                <div className="max-w-custom-1440 mx-auto mt-24 flex flex-col sm:flex-row items-center justify-between">
                    <div className="text-center sm:text-left max-w-xl">
                        <h2 className="text-4xl font-extrabold mt-20 mb-4 text-white">Infodag 29 juni</h2>
                        <p className="text-lg text-gray-300">
                            Vragen stellen aan docenten en studenten? Een rondleiding volgen of een cursus inkijken? Kom naar de infodag op zaterdag
                            29 juni en ontdek of de opleiding écht bij jou past.
                        </p>
                    </div>
                    <img className="max-w-96 mt-10 sm:mt-0" src="/img/opendeurdag.png" alt="opendag foto" />
                </div>
            </div>

            <div className="max-w-custom-1440 mx-auto mt-16">
                <h2 className="text-4xl font-bold mt-6 mb-6 text-custom-darkblue">Ontdek of dit iets voor jou is</h2>
                <ul className="list-disc list-inside ml-8 mb-6  leading-loose">
                    <li className="text-xl text-gray-700">Laat je passie voor IT samensmelten met een creatieve geest.</li>
                    <li className="text-xl text-gray-700">Heb je net je middelbare school afgerond of al wat werkervaring opgebouwd?</li>
                    <li className="text-xl text-gray-700">
                        Leer vanaf de basis flitsende en gebruiksvriendelijke websites en mobiele apps te bouwen.
                    </li>
                    <li className="text-xl text-gray-700">Vind je het belangrijk om theorie direct in de praktijk toe te passen?</li>
                    <li className="text-xl text-gray-700">Geen specifieke voorkennis nodig, maar een enorme dosis enthousiasme is welkom!</li>
                </ul>

                <blockquote className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500">
                    <p className="text-lg text-gray-800">
                        "Mijn tip aan toekomstige studenten luidt: laat je niet overdonderen, maar ga mee in de flow. En aanvaard dat het wat tijd
                        kost om alles onder de knie te krijgen."
                    </p>
                    <footer className="mt-2 text-sm text-gray-600">- Elien Maes, Tweedejaarsstudent Graduaat Programmeren</footer>
                </blockquote>
            </div>

            <div className="flex flex-row flex-wrap justify-evenly max-w-custom-1440 mx-auto mt-16">
                <div className="rounded-lg  shadow-2xl h-fit">
                    <div className="bg-blue-700 p-4">
                        <h2 className="text-2xl font-bold text-white">Erkend knelpuntberoep</h2>
                    </div>
                    <p className="p-4 text-lg text-gray -700">
                        Het tekort aan programmeurs in Vlaanderen is zo groot dat de VDAB ons Graduaat Programmeren actief promoot onder
                        werkzoekenden.Kandidaten die aan alle voorwaarden voldoen, krijgen hun inschrijvingsgeld terugbetaald en ontvangen een
                        forfaitaire tussenkomst voor leer kosten zoals de aankoop van een laptop.Verder is er nog een vergoeding voor hun
                        verplaatsingen, en worden eventuele kosten voor kinderopvang terugbetaald.
                    </p>
                </div>

                <div className="rounded-lg  shadow-2xl md:mt-16">
                    <div className="bg-green-700 p-4">
                        <h2 className="text-2xl font-bold text-white">Al doende leren</h2>
                    </div>
                    <p className="p-4 text-lg text-gray-700 ">
                        De focus in de opleiding ligt op de praktijk.Van bij de start leer je theorie omzetten in praktijk aan de hand van concrete
                        opdrachten.Zo werk je in het vak @Work real life cases van digital agencies uit onder begeleiding van de docenten.Je gaat op
                        kijkstage en doet mee aan hackathons.In het tweede jaar draai je mee in een echt bedrijf en word je gecoacht door de
                        docenten.Daarnaast weerspiegelt deze opleiding de verscheidenheid van de maatschappij vandaag de dag.Jongeren en ouderen,
                        Vlamingen en niet-Vlamingen, jullie gaan samen aan de slag binnen deze opleiding en plukken de vruchten van elkaar werk- en
                        levenservaring.
                    </p>
                </div>

                <div className="rounded-lg shadow-2xl md:mt-16">
                    <div className="bg-gray-700 p-4">
                        <h2 className="text-2xl font-bold text-white">Ervaring op je cv</h2>
                    </div>
                    <p className="p-4 text-lg text-gray-700">
                        Werkplekleren en bootcamps maken een groot en belangrijk deel uit van een graduaat.Hierbij ga je concrete opdrachten en vragen
                        van bedrijven aanpakken en tot een goed einde brengen.Zo doe je werkervaring op tijdens je opleiding en kan je hiermee
                        uitpakken tijdens een sollicitatiegesprek of in je portfolio.
                    </p>
                </div>
                <div className="rounded-lg shadow-2xl md:ml-4 lg:ml-0 md:mt-16">
                    <div className="bg-purple-700 p-4">
                        <h2 className="text-2xl font-bold text-white">Uitstekende begeleiding</h2>
                    </div>
                    <p className="p-4 text-lg text-gray-700">
                        Je krijgt les in relatief kleine groepen.Verschillende coaches staan steeds para at om je vragen te
                        beantwoorden.Trajectcoaches volgen je nauwgezet op en sturen bij waar nodig.Je kan gebruik maken van de leerbegeleiding die
                        wordt aangeboden voor onderwerpen zoals faalangst, uitstelgedrag, planning, timemanagement, ...We werken ook in verschillende
                        niveaus, dus je kan perfect starten zonder enige voorkennis.Pik je kennis sneller op? Dan voorzien we extra uitdagende
                        opdrachten.
                    </p>
                </div>
                <div className="rounded-lg shadow-2xl md:ml-4 lg:ml-0 md:mt-16">
                    <div className="bg-yellow-700 p-4">
                        <h2 className="text-2xl font-bold text-white">Trajecten op maat</h2>
                    </div>
                    <p className="p-4 text-lg text-gray-700">
                        Heb je een functiebeperking? Of ben je student-ondernemer of je de opleiding liever over drie jaar? Dat kan! Dan duurt je
                        opleiding drie jaar en heb je gemiddeld 16 uur per week les.Schrijf je dan eerst in voor het voltijds contacttraject en neem
                        hierna contact op om je aangepast programma vast te leggen.
                    </p>
                </div>
                <div className="rounded-lg shadow-2xl md:mt-16 mb-32">
                    <div className="bg-red-700 p-4">
                        <h2 className="text-2xl font-bold text-white">Bachelordiploma</h2>
                    </div>
                    <p className="p-4 text-lg text-gray-700">
                        Dat kan na je graduaatsopleiding via een verkort traject (minstens 90 studiepunten of 1,5 jaar).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Opleiding;
