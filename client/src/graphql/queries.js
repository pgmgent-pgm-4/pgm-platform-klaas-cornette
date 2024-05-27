import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
	query getAllPosts {
		posts {
			excerpt
			id
			title
			slug
			coverImage {
				altText
				url
			}
			content {
				html
			}
		}
	}
`;

export const GET_POST_BY_SLUG = gql`
	query getPostBySlug($slug: String = "") {
		post(where: { slug: $slug }) {
			content {
				html
			}
			title
		}
	}
`;

export const GET_ALL_PORTFOLIOS = gql`
	query GetAllPortfolioItems {
		portfolioItems {
			portfolioDescription
			portfolioTitle
			portfolioImage {
				url
			}
		}
	}
`;
