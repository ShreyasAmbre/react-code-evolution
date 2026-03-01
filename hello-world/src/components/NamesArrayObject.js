import React from 'react'

export default function NamesArrayObject() {
  const personDetails = [
    { name: 'Billy', age: '21' },
    { name: 'Jhon', age: '21' },
    { name: 'Temba', age: '21' },
  ]
  const personList = personDetails.map((person,index) => 
    <h3 key={index}>My name is {person.name} & my age is {person.age}</h3>
  )
  return (
    <div>
      {personList}
    </div>
  )
}
