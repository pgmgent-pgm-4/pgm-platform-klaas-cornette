import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ imgUrl, imgAlt, excerpt, title, slug }) {
	return (
		<Card>
			<CardMedia sx={{ height: 140 }} image={imgUrl} title={imgAlt} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				{excerpt}
				<Button>
					<Link to={`/blog/${slug}`}>Read more</Link>
				</Button>
			</CardContent>
		</Card>
	);
}
