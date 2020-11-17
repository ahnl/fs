import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


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
  
  

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={filterValue} set={setFilterValue}/>
     
      <h2>add a new</h2>
      <PersonForm newNumber={newNumber} setNewNumber={setNewNumber} newName={newName} setNewName={setNewName} persons={persons} setPersons={setPersons} />

      <h2>Numbers</h2>
      <Persons persons={persons} filterValue={filterValue} />
    </div>
  )

}


ReactDOM.render(<App />, document.getElementById('root'))