import React, { useState, useRef } from 'react';
import classes from './Stopwatch.module.css';

const Stopwatch = () => {
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const increment = useRef(null)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(increment.current)
    setIsPaused(false)
  }

  const handleResume = () => {
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return (
    <div className={classes.Container}>
      <h3 className={classes.Title}>React Stopwatch</h3>
      <div className='stopwatch-card'>
        <p data-testid="time" className={classes.Time} >{formatTime()}</p>
        <div className='buttons'>
          {
            !isActive && !isPaused ?
              <button data-testid="start" className={classes.Btn} onClick={handleStart}>Start</button>
              : (
                isPaused ? <button data-testid="pause" className={classes.Btn} onClick={handlePause}>Pause</button> :
                  <button data-testid="resume" className={classes.Btn} onClick={handleResume}>Resume</button>
              )
          }
          <button data-testid="reset" className={classes.Btn} onClick={handleReset} disabled={!isActive}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;