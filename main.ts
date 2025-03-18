import express from "express";
import cors from "cors";
import resolvers from "./graphql/resolvers";
import apiMiddleware from "./middlewares/api-middleware";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { readFileSync } from "fs";
import { gql } from "apollo-server-express";

const app = express();

const typeDefs = gql(readFileSync("./graphql/schema.graphql", "utf-8"));

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await apolloServer.start();
  app.use("/graphql", expressMiddleware(apolloServer));
};

const startServer = async () => {
  const PORT = process.env.PORT || 3000;
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.use("/api", apiMiddleware);

  app.listen(PORT, () => {
    console.log("Server is running on port 3000");
  });
};

const main = async () => {
  await startServer();
  await startApolloServer();
};

main();
