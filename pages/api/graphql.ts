import { createYoga } from "graphql-yoga";
import { PrismaClient } from "@prisma/client";
import { createSchema } from "graphql-yoga";

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

const schema = createSchema({
  typeDefs: `
      scalar DateTime
  
      type Query {
        products: [Product]
      }
  
      type Mutation {
        createProduct(name: String!): Product
      }
  
      type Product {
        id: Int!
        name: String!
        createdAt: DateTime!
      }
    `,
  resolvers: {
    Query: {
      products: async () => await prisma.user.findMany(),
    },
    Mutation: {
      createProduct: async (_parent, args) => {
        return await prisma.user.create({
          data: { name: args.name },
        });
      },
    },
  },
});

export default createYoga({
  schema,
  graphqlEndpoint: "/api/graphql", // Customize the endpoint if needed
  graphiql: true, // Enable GraphiQL interface
  cors: {
    origin: "*", // Replace with specific origins if needed
    credentials: true,
  },
});
