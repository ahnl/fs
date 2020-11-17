import React from 'react';

const Persons = ({persons, filterValue}) => {
    const personFilter = (person) => {
      return (person.name + ' ' + person.number).toLowerCase().includes(filterValue.toLowerCase());
    }
    return (
      <>
        {persons.filter(personFilter).map(person => 
          <p key={person.name}>{person.name} {person.number}</p>
        )}
      </>
    );
  }

export default Persons;