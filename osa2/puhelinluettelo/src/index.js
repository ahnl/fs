import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [ persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '123'
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setFilterValue ] = useState('')
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
  const personFilter = (person) => {
    return (person.name + ' ' + person.number).toLowerCase().includes(filterValue.toLowerCase());
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with <input value={filterValue} onChange={e => setFilterValue(e.target.value)} />
      </div>
      <h2>add a new</h2>
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
      <h2>Numbers</h2>
      {persons.filter(personFilter).map(person => 
        <p key={person.name}>{person.name} {person.number}</p>
      )}
    </div>
  )

}


ReactDOM.render(<App />, document.getElementById('root'))