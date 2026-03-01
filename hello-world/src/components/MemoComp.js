import React from 'react'

function MemoComp(props) {
  console.log("Memo Component")
  return (
    <div>
      <h4>Functional Memo Component {props.name}</h4>
    </div>
  )
}

export default React.memo(MemoComp)
