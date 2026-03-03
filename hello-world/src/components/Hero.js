import React from 'react'

export default function Hero({ heroName }) {
  if(heroName === 'Joker'){
    // This line breaks the entire application to avoid this we will be using Error Boundary static getDerivedStateFromError() to load fallback UI 
    throw new Error ('Not a hero');
  }
  return (
    <div>
      { heroName }
    </div>
  )
}
