const express = require('express');
const { v4: uuid } = require('uuid');

const app = express();

app.use(express.json());

const costumers = [];

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const id = uuid();

  costumers.push({
    id,
    cpf,
    name,
    statement: [],
  });

  return response.status(201).send();
});

app.listen(3333);
