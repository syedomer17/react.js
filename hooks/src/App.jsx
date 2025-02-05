import React, { useState } from 'react'

function App() {
  const [a,setA] =useState(10)
  return (
    <>
    <div>
    <h1>The Value of a is {a}</h1>
    <button onClick={() => setA(a+1)}>Increment Me</button>
    <button onClick={() => setA(a-1)}>Decrement Me</button>
    </div>
    </>
  )
}

export default App