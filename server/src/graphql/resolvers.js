const Recipe = require("../models/Recipe");
const MainPage = require("../models/MainPage");
const MainData = require("../models/MainData");

module.exports = {
    Query: {
        //Pokud existují data s daným ID vrátí data s tímto ID
        async recipe(_, {ID}) { //musí mít stejný název jako Query v typeDefs
            return await Recipe.findById(ID)
        },
        async getRecipes(_, {amount}) { //amout počet recipes, který dostaneme
            return await Recipe.find().sort({createdAt: -1}).limit(amount) //-1 --> nejnovější data; 1 --> nejstarší data
        },

// *****************************************************
        async getMainPage(_, {ID}){
            return await MainPage.findById(ID)
        },

        async getMainData(){
            return await MainData.findOne()
        }
    },
    Mutation: {
        async createRecipe(_, {recipeInput: {name, description}}){
            const createdRecipe = new Recipe({
                name: name,
                description: description,
                createdAt: new Date().toISOString(),
                thumbsUp: 0,
                thumbsDown: 0
            });
            
            const res = await createdRecipe.save(); //MongoDB saving

            return {
                id: res.id,
                ...res._doc //vsechny dalsi promenne z res(recipe)
            }
        },
        async deleteRecipe(_, {ID}){
            const wasDeleted = (await Recipe.deleteOne({_id: ID})).deletedCount;
            //wasDeleted = 1 --> kdyz bylo neco smazano
            //           = 0 --> kdyz nebylo nic smazano
            return wasDeleted;
        },
        async editRecipe(_, {ID, recipeInput: {name, description}}){
            const wasEdited = (await Recipe.updateOne({ _id: ID}, {name: name, description: description})).modifiedCount;
            //wasEdited = 1 --> kdyz bylo neco zmeneno
            //          = 0 --> kdyz nebylo nic zmeneno
            return wasEdited;
        },


// *******************************************************

        async createMainPage(_, {mainPageInput: {title, subtitle}}){
            const createdMainPage = new MainPage({
                title: title,
                subtitle: subtitle,
                lastChange: new Date().toISOString()
            });
            
            const res = await createdMainPage.save(); //MongoDB saving

            return {
                id: res.id,
                ...res._doc //vsechny dalsi promenne z res(recipe)
            }
        },
        async editMainPage(_, { mainPageInput: {title, subtitle, lastChange}}){
            const ID = "62fbc939955cc9357fb57fa1"
            const wasEdited = (await MainPage.updateOne({ _id: ID}, {title: title, subtitle: subtitle, lastChange: new Date().toISOString()})).modifiedCount;
            //wasEdited = 1 --> kdyz bylo neco zmeneno
            //          = 0 --> kdyz nebylo nic zmeneno
            return wasEdited;
        },

// ************************MAIN DATA*************************
        async createMainData(_, {mainDataInput: {title, subtitle}}){
            const createdMainData = new MainData({
                title: title,
                subtitle: subtitle,
                lastChange: new Date().toISOString()
            });
            
            const res = await createdMainData.save(); //MongoDB saving

            return {
                id: res.id,
                ...res._doc //vsechny dalsi promenne z res(recipe)
            }
        },
        async editMainData(_, { mainDataInput: {title, subtitle}}){
            const wasEdited = (await MainData.updateOne({title: title, subtitle: subtitle, lastChange: new Date().toISOString()})).modifiedCount;
            //wasEdited = 1 --> kdyz bylo neco zmeneno
            //          = 0 --> kdyz nebylo nic zmeneno
            return wasEdited;
        },
    }
}