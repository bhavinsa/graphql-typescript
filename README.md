# graphql-typescript

Getting started with GraphQL and TypeScript using TypeGraphQL - [https://pusher.com/tutorials/graphql-typescript](https://pusher.com/tutorials/graphql-typescript)

## Getting Started

Clone the project repository by running the command below if you use SSH

If you use https, use this instead

```bash
$ git clone https://github.com/bhavinsa/graphql-typescript.git
```

After cloning, run:

```bash
$ npm install
```

Then compile the TypeScript files to JavaScript:

```bash
$ npm run build
```

And finally, start the application:

```bash
$ npm run start
```

To run test case:

```bash
$ npm run test
```

The server will be running on [http://localhost:4000](http://localhost:4000).

```
# Graphql query:
{
  getEmployeeById(id: 2) {
    id
    name
    company{
      id
      name
      address
    }
    tasks{
      id
      title
      completed
      project{
        id
        name
      }
    }
    status
    designation{
      id
      name
    }
  }
}


mutation addProfilePicture($picture: Upload!) {
  addProfilePicture(picture: $picture)
}

picture - Upload file from machine

```

## Built With

* [TypeGraphQL](https://19majkel94.github.io/type-graphql) - Modern framework for GraphQL API in Node.js
* [graphql-yoga](https://github.com/prisma/graphql-yoga) - Fully-featured GraphQL Server with focus on easy setup, performance & great developer experience
* [TypeScript](https://www.typescriptlang.org) - A typed superset of JavaScript that compiles to clean JavaScript

## Acknowledgments

* The creator of TypeGraphQL ([Michał Lytek](https://github.com/19majkel94)) for helping out on the [project chat](https://gitter.im/type-graphql/Lobby)
