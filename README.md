# Ideal Food

Application to help decide what to eat.

## Introduction

Every day we wake up, eat something, wash dishes, work, exercise, and rest for another day. It is not so easy to be an adult, but one of the important parts is to cook something based on what we have in the refrigerator. Pasta or rice? Bread or soup? Maybe we can create some app to give us options to become healthy and avoid anxiety.

This application should help us decide what we could cook. To do this, we should tell the application what we have in the fridge, and then it will look for some options. The three best options should consider nutrition, price and easiness.

## Pages

### Page to insert what we have to cook

- Form to inform what kind of ingredient and how much

### Page that show the best options

- Must contain cards with each ilustration
- Must inform each nutricions values, easiness and price

### Page that show how to make the selected food

- Step by step to cook

## Technologies

### Backend

- Node
- Apollo Server
- GraphQL
- Elasticsearch
- Knex
- Docker

### Database

- SQLite3

https://dbdiagram.io/d/63290f0f0911f91ba5ea927f

### Frontend

- React
- Bootstrap

### Infrasctructure

- GitHub Actions

# How to run Backend

```
cd BACKEND

npm run start
npm run test
npm run lint
npm run dev
```

# How to run elasticsearch
```
sudo docker-compose up
```

# References
- [SQLite3 and Knex](https://medium.com/@MajikMan/starting-a-node-project-from-scratch-with-sqlite3-knex-and-express-fb4b765aca)
- [Graphql](https://www.udemy.com/)