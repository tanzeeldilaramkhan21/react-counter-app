import { useState } from 'react'
import'./style.css'

function App() {
  const [counter, setCounter] = useState(0)
  const buttonsStyle = {
    padding:10,backgroundColor: 'lightgray',color:'black'
  }
  function incrementHandler(){
    setCounter(counter+1)
  }
  function decrementHandler(){
    setCounter(counter-1)
  }

  return (
   <div id='container'>
      <h1 style={{color: 'black'}}>{counter}</h1>
      
      <button onClick={decrementHandler}  style={buttonsStyle}>Decrement</button>
      <button onClick={ incrementHandler} style={buttonsStyle}>Increment</button>
      </div>
  )
}
  


export default App
