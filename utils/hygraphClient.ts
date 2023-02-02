import { GraphQLClient } from "graphql-request";

const { HYGRAPH_URI, HYGRAPH_TOKEN } = process.env;

export const hygraph = new GraphQLClient(HYGRAPH_URI!);
