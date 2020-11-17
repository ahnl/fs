import React from 'react'

const PersonForm = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons}) => {
    const addNumber = (event) => {
      event.preventDefault();
      if (persons.filter(person => person.name === newName).length > 0) {
        alert(`${newName} is already added to phonebook`);
      } else {
        setPersons(persons.concat({
          name: newName,
          number: newNumber
        }))
        setNewName('');
        setNewNumber('');
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