import { createYoga } from 'graphql-yoga';
import { PrismaClient } from '../../prisma/generated/client';
// @ts-ignore - Generated files may have type issues
import { generateAllCrud } from '../../generated/autocrud';
import jwt from 'jsonwebtoken';
import { builder } from '@/builder';

// Initialize Prisma client
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

// Generate all CRUD operations before building schema
try {
  generateAllCrud({
    // You can customize which models to include/exclude
    // exclude: ['SensitiveModel'],
    // include: ['User', 'Post'],
    
    // Custom resolver wrapper for authentication/authorization
    handleResolver: ({ field, modelName, operationName, type }) => {
      // Add authentication for mutations
      if (type === 'Mutation' && !['count'].includes(operationName)) {
        return {
          ...field,
          authScopes: {
            authenticated: true,
          },
        };
      }
      
      // Add admin scope for delete operations
      if (operationName.includes('delete') || operationName.includes('Delete')) {
        return {
          ...field,
          authScopes: {
            admin: true,
          },
        };
      }
      
      return field;
    },
  });
} catch (error) {
  console.error('Error generating CRUD operations:', error);
}

// Build the GraphQL schema
const schema = builder.toSchema();

// Helper function to extract user from JWT token
function getUserFromToken(authorization?: string) {
  if (!authorization?.startsWith('Bearer ')) return null;
  
  try {
    const token = authorization.replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as any;
    return decoded;
  } catch {
    return null;
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default createYoga({
  schema,
  context: async ({ request }) => {
    const authorization = request.headers.get('authorization');
    const user = getUserFromToken(authorization || undefined);
    
    return {
      prisma,
      user,
    };
  },
  graphqlEndpoint: '/api/graphql',
  graphiql: {
    title: 'Auto-CRUD GraphQL API',
    defaultQuery: `
# Welcome to your Auto-CRUD GraphQL API!
# Here are some example queries to get you started:

query HealthCheck {
  health
}

query GetUsers {
  findManyUser(take: 10) {
    id
    name
    email
    role
    createdAt
  }
}

query GetPosts {
  findManyPost(take: 5, where: { published: { equals: true } }) {
    id
    title
    content
    author {
      name
      email
    }
    createdAt
  }
}

mutation CreateUser {
  createOneUser(data: {
    name: "John Doe"
    email: "john@example.com"
    bio: "A sample user"
  }) {
    id
    name
    email
    createdAt
  }
}
    `,
  },
  cors: {
    origin: process.env.NODE_ENV === 'production' 
      ? process.env.FRONTEND_URL?.split(',') || ['https://yourdomain.com']
      : '*',
    credentials: true,
  },
  landingPage: false,
});