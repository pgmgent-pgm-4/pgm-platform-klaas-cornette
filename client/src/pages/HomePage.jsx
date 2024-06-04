import { useQuery } from "@apollo/client";
import React from "react";
import { Helmet } from "react-helmet";
import Jumbotron from "../components/Jubotron";
import Card from "../components/Card";
import { GET_ALL_PROJECTS } from "../graphql/queries";
import { GET_ALL_SERVICES } from "../graphql/queries";
import { GET_ALL_BLOGS } from "../graphql/queries";

export default function HomePage() {

	const { loading: loadingProjects, error: errorProjects, data: dataProjects } = useQuery(GET_ALL_PROJECTS);
	const { loading: loadingServices, error: errorServices, data: dataServices } = useQuery(GET_ALL_SERVICES);
	const { loading: loadingBlogs, error: errorBlogs, data: dataBlogs } = useQuery(GET_ALL_BLOGS);
	

	if (loadingProjects || loadingServices || loadingBlogs) return <>...loading</>;
	if (errorProjects || errorServices || errorBlogs) return <>...error</>;
    



	const cardColors = ["bg-custom-red", "bg-custom-green", "bg-custom-purple"];
	const projects = dataProjects.projects.slice(0, 3);
	const services = dataServices.services.slice(0, 3);
	const blogs = dataBlogs.blogs.slice(0, 3);


	return (
		<div>
			<Helmet>
				<title> AwesomeBlog | Start </title>
				<meta name="description" content="Blog Post ..." />
			</Helmet>
			<Jumbotron />
			<h2 className="max-w-custom-1440 mx-auto mb-4 mt-16 text-4xl font-extrabold tracking-tight leading-none text-custom-darkblue md:text-5xl lg:text-6xl">Projecten</h2>
			<div className="flex flex-wrap justify-around max-w-custom-1440 gap-2 mt-12 mb-8 mx-auto">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        index={index}
                        page={`/project/${project.id}`}
                        title={project.title}
                        subtitle={project.subtitle}
                        imgUrl={`../img/${project.title}.jpg`}
                        imgAlt={index + project.title}
                        color={cardColors[index % cardColors.length]}
                        className="p-2"
                    />
                ))}
            </div>
			<div className="bg-custom-darkblue py-8 mt-32">
			<h1 className="max-w-custom-1440 mx-auto mb-4 mt-16 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Services</h1>
			<div className="flex flex-wrap justify-around max-w-custom-1440 gap-2 mt-12 mb-16 mx-auto">
                {services.map((service, index) => (
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
			<h2 className="max-w-custom-1440 mx-auto mb-4 mt-32 text-4xl font-extrabold tracking-tight leading-none text-custom-darkblue md:text-5xl lg:text-6xl">Blogs</h2>
			<div className="flex flex-wrap justify-around max-w-custom-1440 gap-2 mt-12 mb-32 mx-auto">
                {blogs.map((blog, index) => (
                    <Card
                        key={index}
                        index={index}
                        title={blog.title}
                        subtitle={blog.content}
                        imgUrl={"img/" + blog.foto}
                        page={`/blog/${blog.id}`}
                        imgAlt={index + blog.title}
                        color={cardColors[index % cardColors.length]}
                        className="p-2"
                    />
                ))}
            </div>
		</div>
	);
}
