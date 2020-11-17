import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons';


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setFilterValue ] = useState('')
  
  useEffect(() => {
    personService.getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={filterValue} set={setFilterValue}/>
     
      <h2>add a new</h2>
      <PersonForm newNumber={newNumber} setNewNumber={setNewNumber} newName={newName} setNewName={setNewName} persons={persons} setPersons={setPersons} />

      <h2>Numbers</h2>
      <Persons persons={persons} filterValue={filterValue} setPersons={setPersons} />
    </div>
  )

}


ReactDOM.render(<App />, document.getElementById('root'))