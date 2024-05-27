import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_POSTS } from "../graphql/queries";
import { Grid } from "@mui/material";
import BlogCard from "../components/BlogCard";
import { Helmet } from "react-helmet";

export default function Blog() {
	const { loading, error, data } = useQuery(GET_ALL_POSTS);
	if (loading) return <>...loading</>;
	if (error) return <>...error</>;
	return (
		data && (
			<Grid container spacing={2}>
				<Helmet>
					<title> AwesomeBlog | Overzicht Blog</title>
					<meta name="description" content="Overzicht Blog Post ..." />
				</Helmet>
				{data.posts?.map((post) => (
					<Grid item xs={12} md={4} key={post.id}>
						<BlogCard
							title={post.title}
							imgUrl={post.coverImage.url}
							imgAlt={post.coverImage.alt}
							excerpt={post.excerpt}
							slug={post.slug}
						/>
					</Grid>
				))}
			</Grid>
		)
	);
}
