import React from 'react'

export default function NameList() {
  const names = ['Billy', 'Bozzo', 'Clark'];
  
  const nameList = names.map(name => 
    <h3 key={name}>{name}</h3>
  )
  
  return (
    <div>
      {/* Approach 1: Static Approach - Not Recommended */}
      {/* <h3>{names[0]}</h3>
      <h3>{names[1]}</h3>
      <h3>{names[2]}</h3> */}

      {/* Approach 2: Dynamic Approach using map() method  */}
      {/* {
        names.map((name) => {
          <h3>{name}</h3>
        })
      } */}

      {/* Approach 3: Moving map out side and just rendering variable */}
      {nameList}
    </div>
  )
}
