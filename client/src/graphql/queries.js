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
      createdAt
      id
      updatedAt
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
      createdAt
      updatedAt
      categorie
    }
  }
`;




