import { useQuery } from "@apollo/client";
import React from "react";
import { Helmet } from "react-helmet";
import { GET_ALL_PORTFOLIOS } from "../graphql/queries";

export default function HomePage() {
	const { loading, error, data } = useQuery(GET_ALL_PORTFOLIOS);
	if (loading) return <div>...Loading</div>;
	if (error) return <div>...error</div>;
	console.log(data);
	return (
		<div>
			<Helmet>
				<title> AwesomeBlog | Start </title>
				<meta name="description" content="Blog Post ..." />
			</Helmet>
			<div>HomePage</div>
		</div>
	);
}
