const express = require('express');
const { v4: uuid } = require('uuid');

const app = express();

app.use(express.json());

const costumers = [];

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const costumerAlreadyExists = costumers.some(
    (customer) => customer.cpf === cpf
  );

  if (costumerAlreadyExists) {
    return response.status(400).json({
      error: "Customer already exists!"
    });
  }

  costumers.push({
    id: uuid(),
    cpf,
    name,
    statement: [],
  });

  return response.status(201).send();
});

app.listen(3333);
