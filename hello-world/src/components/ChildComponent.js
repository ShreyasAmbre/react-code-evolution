import React from 'react'

export default function ChildComponent(props) {
  const { greetHandler } = props
  return (
    <div>
      {/* <button onClick={greetHandler}>Greet Parent</button> */}
      <button onClick={() => greetHandler('Child')}>Greet Parent from Child with Child Name passing from Child to Parent</button>
    </div>
  )
}
