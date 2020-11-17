import React from 'react'
import axios from 'axios'

const PersonForm = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons}) => {
    const addNumber = (event) => {
      event.preventDefault();
      if (persons.filter(person => person.name === newName).length > 0) {
        alert(`${newName} is already added to phonebook`);
      } else {
        const newPerson = {
            name: newName,
            number: newNumber
        };

        axios
        .post('http://localhost:3001/persons', newPerson)
        .then(response => {
            setPersons(persons.concat(newPerson))
            setNewName('');
            setNewNumber('');
        })
      }
    };
    return (
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)} />
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    );
  };

export default PersonForm;