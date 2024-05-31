import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_BLOG_BY_ID } from "../graphql/queries";
import { Helmet } from "react-helmet";

export default function BlogPost() {
    const slug = useParams();
    const id = slug.slug;

    const { loading, error, data } = useQuery(GET_BLOG_BY_ID, { variables: { id } });

    if (loading) return <>...loading</>;
    if (error) return<h1>error...</h1>;
         
    
    if (data) console.log(data);

    return (
        <div>
            <Helmet>
                <title> PGM | {data.blog.title}</title>
                <meta name="description" content="Blog Post ..." />
            </Helmet>

            <div className="mx-auto max-w-4xl p-8 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">{data.blog.title}</h1>
                <img src={`../img/${data.blog.foto}`} alt="Detail foto" className="w-96 h-96 my-4 rounded-lg " />

                <div className="text-start">
                    <div className="flex items-center mt-4">
                        <h2 className="text-xl font-semibold">Type feestje:</h2>
                        <p className="ml-2">{data.blog.categorie}</p>
                    </div>

                    <div className="flex items-center mt-4">
                        <h2 className="text-xl font-semibold">Wanneer:</h2>
                        <p className="ml-2">{data.blog.wanneer}</p>
                    </div>

                    <div className="flex items-center mt-4">
                        <h2 className="text-xl font-semibold">Waar:</h2>
                        <p className="ml-2">{data.blog.waar}</p>
                    </div>

                    <div className="flex items-center mt-4">
                        <h2 className="text-xl font-semibold">Kosten:</h2>
                        <p className="ml-2">{data.blog.kost}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


