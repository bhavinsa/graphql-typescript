import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema, Query } from "type-graphql";
import ProjectResolver from "./resolvers/ProjectResolver";
import TaskResolver from "./resolvers/TaskResolver";
import EmployeeResolver from "./resolvers/EmployeeResolver";
import CompanyResolver from "./resolvers/CompanyResolver";
async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      ProjectResolver,
      TaskResolver,
      EmployeeResolver,
      CompanyResolver
    ],
    emitSchemaFile: true
  });
  const server = new GraphQLServer({
    schema
  });

  const options = {
    port: 4000,
    // endpoint: "/graphql",
    // subscriptions: "/subscriptions",
    playground: "/"
  };

  server.start(options, ({ port }) =>
    console.log(
      `Server started, listening on port ${port} for incoming requests.`
    )
  );
}

bootstrap();
