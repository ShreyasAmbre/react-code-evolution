import React from 'react'
import Person from './Person';

export default function PersonsArrayObject() {
  const persons = [
    { name: "Billy", profession: "DevOps Engineer" },
    { name: "Bozzo", profession: "Software Engineer" },
    { name: "Clark", profession: "Manager" }
  ];
  const personList = persons.map((item, index) => {
    return  <Person key={index} person={item} />
  })
  return (
    <div>
      {/* Approach 4: Rendering Array Of object using Child Component and passing props */}
      <h4>{ personList }</h4>
    </div>
  )
}
