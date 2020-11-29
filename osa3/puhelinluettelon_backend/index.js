const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

morgan.token('post', function getId (req) {
  if (req.method == 'POST') {
    return JSON.stringify(req.body);
  } else {
    return;
  }
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post'));

app.use(express.static('build'));

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
  if (req.body.name && req.body.number) {
      if (persons.filter(p => p.name == req.body.name).length == 0) {
        const person = {
          name: req.body.name, 
          number: req.body.number, 
          id: Math.floor(Math.random() * 1000000)
        };
        persons.push(person)
        res.status(201).json(person);
      } else {
        res.status(400).json({ error: 'name must be unique' });
      }
  } else {
    res.status(400).json({error: 'required parameters not present'});
  }
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

app.listen((process.env.PORT || 3001));