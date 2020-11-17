import React from 'react';
import personService from '../services/persons';

const Persons = ({persons, filterValue, setPersons, updateNotification}) => {
    const deletePerson = (id, name) => {
        if (window.confirm(`Delete ${name}?`)) {
            personService.delete(id).then(() => {
                const copyPersons = persons.filter( person => person.id !== id);
                setPersons(copyPersons)
                updateNotification(`Deleted ${name}`, 'red')
            })
        }
    }
    const personFilter = (person) => {
      return (person.name + ' ' + person.number).toLowerCase().includes(filterValue.toLowerCase());
    }
    return (
      <>
        {persons.filter(personFilter).map(person => 
          <p key={person.name}>{person.name} {person.number} <input type="button" onClick={() => deletePerson(person.id, person.name)} value="delete"></input></p>
        )}
      </>
    );
  }

export default Persons;