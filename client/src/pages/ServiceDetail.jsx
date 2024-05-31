import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_SERVICE_BY_ID } from "../graphql/queries";
import { Helmet } from "react-helmet";

export default function ServiceDetail() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_SERVICE_BY_ID, { variables: { id } });
    const service = data?.service;
    console.log(service);

    if (loading) return <>...loading</>;
    if (error) return <h1>error...</h1>;

    if (data) console.log(data);

    return (
        <div>
            <Helmet>
                <title> PGM | {service.title}</title>
                <meta name="description" content="service detail ..." />
            </Helmet>
            <div className="max-w-custom-1440 p-16 pb-0 mx-auto mt-12 bg-custom-lightblue shadow-lg rounded-lg flex">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 text-custom-blue">{service.title}</h2>
                    <div className="mb-4 mt-4 ml-4 text-xl max-w-lg text-gray-700">{service.description}</div>
                    <div>
                        <p className="mb-2 ml-4 text-base text-gray-500">
                            <strong>Locatie:</strong> {service.location}
                        </p>
                        <p className="mb-2 ml-4 text-base text-gray-500">
                            <strong>Prijs:</strong> {service.price}
                        </p>
                        <p className="mb-2 ml-4 text-base text-gray-500">
                            <strong>Tijd:</strong> {service.time}
                        </p>
                        {service.online ? (
                            <p className="mb-4 ml-4 text-base text-green-500">
                                <strong>Online:</strong> Online volgen mogelijk
                            </p>
                        ) : (
                            <p className="mb-4 ml-4 text-base text-red-500">
                                <strong>Online:</strong> Niet beschikbaar voor online volgen
                            </p>
                        )}
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 ml-4 px-10 rounded-lg text-lg">Boek nu</button>
                    </div>
                </div>

                <div className="flex-none h-96 pr-8">
                    <img src={`../img/${service.title}.jpg`} alt={service.title} className="w-full h-80 object-cover rounded-lg mb-4" />
                </div>
            </div>
        </div>
    );
}
