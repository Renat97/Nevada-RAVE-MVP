// server with GraphQL
//<meta
//name="viewport"
//content="minimum-scale=1, initial-scale=1, width=device-width"
///>
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {connection} = require('./database/index.js');
const PORT = process.env.PORT || 3000;
const path = require("path");
const axios = require("axios");
const faker = require("faker");
const bodyParser = require('body-parser')
const {addVolunteer, getUserRole, signIn, getFirstAccount} = require('./database/models.js');
const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql');

const app = express();
app.use(express.static(path.join(__dirname, './client/dist')));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
const authRoute = require('./routes/auth.js');
app.use('/api/user',authRoute);

const typeDefs = gql`
type Account {
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  emergencyContactName: String,
  position: String
}
type RegisterInput {
  username: String!
  password: String!
}
type Query {
  sayHi: String!,
  getAccount: [Account]
}

`

const resolvers = {
  Query: {
    getAccount() {
      return new Promise((resolve, reject) => {
      getFirstAccount('b', (err, data) => {
        if(err) {
          reject(err);
        } else {
          resolve(data);
        }
      })
    })
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen({port: 5000}).then(res => {
  console.log(`Server running at ${res.url}`);
})

// const authors = [
// 	{ id: 1, name: 'J. K. Rowling' },
// 	{ id: 2, name: 'J. R. R. Tolkien' },
// 	{ id: 3, name: 'Brent Weeks' }
// ]

// const books = [
// 	{ id: 1, name: 'Harry Potter and the Chamber of Secrets', authorId: 1 },
// 	{ id: 2, name: 'Harry Potter and the Prisoner of Azkaban', authorId: 1 },
// 	{ id: 3, name: 'Harry Potter and the Goblet of Fire', authorId: 1 },
// 	{ id: 4, name: 'The Fellowship of the Ring', authorId: 2 },
// 	{ id: 5, name: 'The Two Towers', authorId: 2 },
// 	{ id: 6, name: 'The Return of the King', authorId: 2 },
// 	{ id: 7, name: 'The Way of Shadows', authorId: 3 },
// 	{ id: 8, name: 'Beyond the Shadows', authorId: 3 }
// ]

// const BookType = new GraphQLObjectType({
//   name: "Book",
//   description: "This represents a book written by an author",
//   fields: () => ({
//     id: { type: GraphQLNonNull(GraphQLInt) },
//     name: { type: GraphQLNonNull(GraphQLString) },
//     authorId: { type: GraphQLNonNull(GraphQLInt) },
//     author: {
//       type: AuthorType,
//       resolve: (book) => {
//         return authors.find(author => author.id === book.authorId)
//       }
//     }
//   })
// })

// const AuthorType = new GraphQLObjectType({
//   name: "Author",
//   description: "This represents a author of a book",
//   fields: () => ({
//     id: { type: GraphQLNonNull(GraphQLInt) },
//     name: { type: GraphQLNonNull(GraphQLString) },
//     books: { type: new GraphQLList(BookType),
//       resolve: (author) => {
//         return books.filter(book => book.authorId === author.id)
//       }
//     }
//   })
// })

// const users = [
//   { id: 1, firstName: 'John', lastName: 'Smith', email: 'js@j.com', username: 'John', pass: 'John', emergencyContactName: 'jeff', emergencyContact: '4089123201', role: 'volunteer' },
//   { id: 2, firstName: 'James', lastName: 'Smith', email: 'js@j.com', username: 'John', pass: 'John', emergencyContactName: 'jeffrey', emergencyContact: '4089123201', role: 'staff' }
// ]

// const UserType = new GraphQLObjectType({
//   name: "User",
//   description: "This is a user from the MySQL database",
//   fields: () => ({
//     id: { type: GraphQLNonNull(GraphQLInt)},
//     firstName: {type: GraphQLNonNull(GraphQLString)},
//     lastName: {type: GraphQLNonNull(GraphQLString)},
//     email: {type: GraphQLNonNull(GraphQLString)},
//     username: {type: GraphQLNonNull(GraphQLString)},
//     pass: {type: GraphQLNonNull(GraphQLString)},
//     emergencyContactName: {type: GraphQLNonNull(GraphQLString)},
//     emergencyContact: {type: GraphQLNonNull(GraphQLString)},
//     role: {type: GraphQLNonNull(GraphQLString)},
//   })
// });

// const RootQueryType = new GraphQLObjectType({
//   name: 'Query',
//   description: 'Root Query',
//   fields: () => ({
//     book: {
//       type: BookType,
//       description: 'A Single Book',
//       args: {
//         id: { type: GraphQLInt}
//       },
//       resolve: (parent, args) => books.find(book => book.id === args.id)
//     },
//     registeredUsers: {
//       type: UserType,
//       description: 'A registered user',
//       args: {
//         username: { type: GraphQLString}
//       },
//       resolve: (parent, args) => getFirstAccount(args.username, (err,data) => {
//         if(err) {
//           console.log(err);
//         } else {
//           console.log('data recieved', data);
//         }
//       })
//     },
//     books: {
//       type: new GraphQLList(BookType),
//       description: 'List of All Books',
//       resolve: () => books
//     },
//     authors: {
//       type: new GraphQLList(AuthorType),
//       description: 'List of All Authors',
//       resolve: () => authors
//     },
//     author: {
//       type: AuthorType,
//       description: 'A single author',
//       args: {
//         id: { type: GraphQLInt }
//       },
//       resolve: (parent, args) => authors.find(author => author.id === args.id)
//     }
//   })
// });
// // graphql's way of doing post and put on a server
// const RootMutationType = new GraphQLObjectType({
//   name: 'Mutation',
//   description: 'Root Mutation',
//   fields: () => ({
//     addBook: {
//       type: BookType,
//       description: 'Add a book',
//       args: {
//         name: { type: GraphQLNonNull(GraphQLString) },
//         authorId: {type: GraphQLNonNull(GraphQLInt) }
//       },
//       resolve: (parent, args) => {
//         const book = { id: books.length + 1, name: args.name, authorId: args.authorId }
//         books.push(book)
//         return book
//       }
//     },
//     addAuthor: {
//       type: AuthorType,
//       description: 'Add a author',
//       args: {
//         name: { type: GraphQLNonNull(GraphQLString) }
//       },
//       resolve: (parent, args) => {
//         const author = { id: authors.length + 1, name: args.name }
//         authors.push(author)
//         return author
//       }
//       }
//     })
//   })

// const schema = new GraphQLSchema({
//   query: RootQueryType,
//   mutation: RootMutationType
// })

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   graphiql: true
// }))


// ADD AUTHORIZATION ROUTES!!!

app.get('/authentication/:userName', (req, res, next) => {
  console.log('DATA SENT', req.params.userName);
  getUserRole(req,(err,data) => {
    if(err) {
      console.log('error getting the users role')
      console.log(err);
    } else {
      res.send(data);
    }
  })
})

app.post('/authenticate', (req, res) => {
  console.log('DATA AUTHENTICATE', req.body.userName);
  signIn(req,(err, data) => {
    if(err) {
      console.log('THE ERROR',err);
      console.log('error getting user, bad pass');
      res.sendStatus(401);
    } else {
      res.sendStatus(200);
    }
  })
})

app.get('/registration', (req, res, next) => {
  res.sendFile(path.join(__dirname, './client/dist', 'index.html'));
})
// handle authentication on login
app.post('/login', (req, res, next) => {
  console.log('DATA SENT',req.body);
  addVolunteer(req,(err,data) => {
    if(err) {
      console.log('error submitting the data to database in model, ERROR FROM SERVER');
    } else {
      res.send('Successfully sent data');
    }
  })
});

app.get('/login', (req, res, next) => {
  res.sendFile(path.join(__dirname, './client/dist', 'index.html'));
})
app.get('/volunteerLogin', (req, res, next) => {
  res.sendFile(path.join(__dirname, './client/dist', 'index.html'));
})
app.get('/familyCheckIn', (req, res, next) => {
  res.sendFile(path.join(__dirname, './client/dist', 'index.html'));
})

app.listen(PORT, () =>
  console.log('server running')
);