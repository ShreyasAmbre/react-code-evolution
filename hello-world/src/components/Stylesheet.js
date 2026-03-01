import React from 'react';
import './myStyle.css';

export default function Stylesheet(props) {
  const isHeadingPrimary = props.isPrimary ? 'primary': ''
  const headingStyle = {
    color: 'red',
    fontSize: '90px'
  }
  return (
    <div>
      {/* Approach 1: Using stylesheet  */}
      <h1 className={`${isHeadingPrimary} font-xl`}>Style Sheet</h1>

      {/* Approach 2: Inline styling  */}
      <h1 style={headingStyle}>Inline Style</h1>
    </div>
  )
}
