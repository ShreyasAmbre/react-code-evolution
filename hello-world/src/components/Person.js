import React from 'react'

export default function Person({ person }) {
  return (
    <div>
      Im {person.name} and my profession is {person.profession}
    </div>
  )
}
