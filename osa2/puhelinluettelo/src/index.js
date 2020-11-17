import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setFilterValue ] = useState('')
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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