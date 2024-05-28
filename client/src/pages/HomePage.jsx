import { useQuery } from "@apollo/client";
import React from "react";
import { Helmet } from "react-helmet";
import {  GET_ALL_PROJECTS } from "../graphql/queries";

export default function HomePage() {
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
