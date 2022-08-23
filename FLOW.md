# Návod ze kterého jsem vycházel

- https://www.youtube.com/watch?v=uPxo9NQLVMI&t=279s

# SERVER

- npm start

## Database

- mongodb+srv://Petr:Admin1234@mernapp.4i78vns.mongodb.net/?retryWrites=true&w=majority
- Login: Petr
- Password: Admin1234

## Prikazy

- npm init --yes
  -> package.json --> scripts --> "start": "nodemon ./src/index.js"
- npm install apollo-server graphql mongoose nodemon
- npm install dotenv --save
  -> soubor .env

## program

- src/models --> modely pro mongoose
- src/graphql/typeDefs --> graphQL koncept, který využívá Apollo Server
  --> Query a Mutation jsou hlavní - komunikují s Apollo Serverem

## poznamky

- GraphQL + Node.js + MongoDB + React.js (Next)

- GraphQL je obdoba RestAPI, je více flexibilní

- query - dostat data (GET)
- mutation - manipulace s daty (POST, PUT, PATCH, DELETE)
- subscription - push server updates do clientu

# CLIENT

- npm run dev

- Pěkný tutorial na graphQL (qeury, mutation) --> https://www.youtube.com/watch?v=QhbM9r1wdxk
- https://www.youtube.com/watch?v=gAbIQx26wSI
- REACT --> npx create-react-app client --template typescript
  --> npm install @apollo/client

# NEXT

- Next.js + typescript
- npx create-next-app@latest --ts
- npm install @apollo/client graphql
