const { ApolloServer } = require("apollo-server");
const mongoose= require("mongoose");

const MONGODB = "mongodb+srv://Petr:Admin1234@mernapp.4i78vns.mongodb.net/?retryWrites=true&w=majority"

/* Apollo Server
** typeDefs: GrapgQL Type Definition
** resolvers: How do we resolve queries / mutation
*/

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
    typeDefs,
    resolvers
})



// const database = process.env.PORT;
// console.log(database)

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log("📭 MongoDB Connection seccessful");
        return server.listen({port: 4000})
    })
    .then((res) => {
        console.log(`🚀 Server running at ${res.url}`)
    })