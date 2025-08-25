import React, { useEffect, useState } from 'react';
import "./App.css"

function App() {
  const [a,setA] =useState(10)

  const [count ,setCount] =  useState(0);

  const  [first, setFirst] = useState(0)

  useEffect(() =>{
    alert('Hey Welcome to vite')
  },[])

  useEffect(() => {
    alert("count is change");
  }, [count]);

  useEffect(() => {
    alert("I am omer");
  },[])
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