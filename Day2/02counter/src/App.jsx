// import React from "react"
import { useState } from "react";
function App() {

  let [counter, setCounter] = useState(10);

  // let counter = 15;

  const addValue =()=>{
    counter += 1;
    console.log("Value added: ",counter);
    setCounter(counter)
    // It shows repeat task so only 1+
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
  
    // Now it will update by adding 5 at once
    // setCounter((prevCounter => prevCounter + 1));
    // setCounter((prevCounter => prevCounter + 1));
    // setCounter((prevCounter => prevCounter + 1));
    // setCounter((prevCounter => prevCounter + 1));
    // setCounter((prevCounter => prevCounter + 1));


    // setCounter((prevCounter => prevCounter + 1)); // setCounter is a function which also has callback fn.
    // setCounter(counter => counter + 1); // name can be random
  }

  const remValue =()=>{
    if(counter<=0){
      setCounter(counter)
    }
    else{
      counter -= 1;
      console.log("Value remove: ", counter);
      setCounter(counter)
    }
    
  }

  return (
    <>
      <h1>Wasif aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add Value {counter} </button>
      <br />
      <button onClick={remValue} >Decrease Value {counter}</button>
      <div>footer {counter}</div>
    </>
  )
}

export default App
