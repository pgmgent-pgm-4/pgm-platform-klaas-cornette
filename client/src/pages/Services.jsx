import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_SERVICES } from "../graphql/queries";
import { Helmet } from "react-helmet";
import Card from "../components/Card";
import Header from "../components/header";

export default function Services() {
    const { loading, error, data } = useQuery(GET_ALL_SERVICES);
    if (loading) return <>...loading</>;
    if (error) return <>...error</>;

    const cardColors = ["bg-custom-red", "bg-custom-green", "bg-custom-purple"];
  

    return (
        <div>
            <Helmet>
                <title> PGM | Overzicht services</title>
                <meta name="description" content="Overzicht Services ..." />
            </Helmet>

            <Header title="Services" subtitle={"Ondek onze verschillende services die wij aan u aanbieden."} />

            <div className="flex flex-wrap justify-around max-w-custom-1440 gap-2 mb-8 mx-auto">
                {data.services.map((service, index) => (
                    <Card
                        key={index}
                        index={index}
                        title={service.title}
                        subtitle={service.price}
                        imgUrl={"img/service.svg"}
                        page={`/service/${service.id}`}
                        imgAlt={index + service.title}
                        color={cardColors[index % cardColors.length]}
                        className="p-2"
                    />
                ))}
            </div>
        </div>
    );
}
