import { useQuery } from "@apollo/client";
import React from "react";
import { Helmet } from "react-helmet";
import {  GET_TEAM } from "../graphql/queries";

export default function TeamPage() {
	return (
		<div>
			<Helmet>
				<title> PGM | Team </title>
				<meta name="description" content="team" />
			</Helmet>
			<div>Team</div>
		</div>
	);
}
