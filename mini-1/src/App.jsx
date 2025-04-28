import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  

  useEffect(() => {
    let interval
    if(running == true){
      interval = setInterval(() =>{
        setTime((prevTime) => prevTime + 1)
      }, 10)
    }else if(!running){
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running])
  
  return (
    <>
      <h1>Stopwatch</h1>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {running ? (<button onClick={() => setRunning(false)}>Stop</button>) : (<button onClick={() => setRunning(true)}>Start</button>)}
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </>
  )
}

export default App
