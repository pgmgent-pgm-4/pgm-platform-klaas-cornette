import { gql } from "@apollo/client";

export const GET_ALL_PROJECTS = gql`
    query GetProjects($first: Int = 1000, $skip: Int = 0) {
        projects(first: $first, skip: $skip) {
            filter
            id
            subtitle
            title
        }
    }
`;

export const GET_ALL_SUBJECTS = gql`
    query GetSubjects($first: Int = 1000, $skip: Int = 0) {
        subjects(first: $first, skip: $skip) {
            id
            course
            sp
            hours
            periode
            major
        }
    }
`;

export const GET_ALL_BLOGS = gql`
    query GetBlogs($first: Int = 1000, $skip: Int = 0) {
        blogs(first: $first, skip: $skip) {
            id
            title
            foto
            content
            categorie
        }
    }
`;

export const GET_BLOG_BY_ID = gql`
    query GetBlogById($id: ID!) {
        blog(where: { id: $id }) {
            id
            title
            foto
            content
            categorie
            waar
            wanneer
            kost
        }
    }
`;

export const GET_PROJECT_BY_ID = gql`
    query GetProjectById($id: ID!) {
        project(where: { id: $id }) {
            filter
            id
            subtitle
            title
            description
            features
            team
            duration
            projectStatus
        }
    }
`;

export const GET_ALL_SERVICES = gql`
    query GetServices($first: Int = 1000, $skip: Int = 0) {
        services(first: $first, skip: $skip) {
            id
            title
            description
            location
            time
            online
            price
        }
    }
`;

export const GET_SERVICE_BY_ID = gql`
    query GetServiceById($id: ID!) {
        service(where: { id: $id }) {
            id
            title
            description
            location
            time
            online
            price
        }
    }
`;

