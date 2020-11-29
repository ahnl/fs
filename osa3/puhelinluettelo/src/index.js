import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'
import './index.css'


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setFilterValue ] = useState('')
  const [ notificationMessage, setNotificationMessage ] = useState(null)
  
  const updateNotification = (text, extraClasses) => {
    setNotificationMessage({text, extraClasses});
    setTimeout(() => {
        setNotificationMessage(null);
    }, 2000)
  }

  useEffect(() => {
    personService.getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])
 
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notificationMessage} />
      
      <Filter value={filterValue} set={setFilterValue}/>
     
      <h2>add a new</h2>
      <PersonForm newNumber={newNumber} setNewNumber={setNewNumber} newName={newName} setNewName={setNewName} persons={persons} setPersons={setPersons} updateNotification={updateNotification} />

      <h2>Numbers</h2>
      <Persons persons={persons} filterValue={filterValue} setPersons={setPersons} updateNotification={updateNotification}  />
    </div>
  )

}


ReactDOM.render(<App />, document.getElementById('root'))