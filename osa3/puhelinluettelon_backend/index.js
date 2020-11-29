const express = require('express');
const app = express();

app.use(express.json());
let persons = [
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": 1
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": 2
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": 3
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": 4
    }
];

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.post('/api/persons', (req, res) => {
  persons.push({
    name: req.body.name, 
    number: req.body.number, 
    id: Math.floor(Math.random() * 1000000)
  })

  res.status(201).end();
});

app.get('/api/persons/:id', (req, res) => {
  const id = req.params.id;
  const person = persons.find(p => p.id == id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete('/api/persons/:id', (req, res) => {
  const id = req.params.id;
  persons = persons.filter(p => p.id != id);
  res.status(204).end();
});

app.get('/info', (req, res) => {
  res.send(`Phonebook has info for ${persons.length} people
  <br><br>
  ${new Date()}`);
})

app.listen(3001);