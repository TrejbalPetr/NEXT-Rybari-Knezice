// graphQL koncept, který využívá Apollo Server
// gql = graph query language
// do gql `...` se píšou gql typy, neni to JS

const { gql } = require("apollo-server");

module.exports = gql`
    type Recipe {
        name: String
        description: String
        createdAt: String
        thumbsUp: Int
        thumbsDown: Int
    }

    input RecipeInput {
        name: String
        description: String
    }
# *****************************************
    type MainPage {
        title: String
        subtitle: String
        lastChange: String
    }

    input MainPageInput {
        title: String
        subtitle: String
    }

    type MainData {
        title: String
        subtitle: String
        lastChange: String
    }

    input MainDataInput {
        title: String
        subtitle: String
    }

# *****************************************
    type Query {
        recipe(ID: ID!): Recipe!
        getRecipes(amount: Int): [Recipe]

        getMainPage(ID: ID!): MainPage

        getMainData: MainData
    }

    type Mutation {
        createRecipe(recipeInput: RecipeInput): Recipe!
        deleteRecipe(ID: ID!): Boolean
        editRecipe(ID: ID!, recipeInput: RecipeInput): Boolean

        createMainPage(mainPageInput: MainPageInput): MainPage!
        editMainPage(mainPageInput: MainPageInput): Boolean

        createMainData(mainDataInput: MainDataInput): MainData!
        editMainData(mainDataInput: MainDataInput): Boolean
    }
`