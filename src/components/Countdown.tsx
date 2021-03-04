import { useContext, useEffect, useState } from 'react';
import { challengesContext } from '../context/ChallengesContext';
import { countDownContext } from '../context/CountDownContext';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export default function Countdown() {
  const { startNewChallenge,challengesCompleted } = useContext(challengesContext)
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    resetCountdown,
    startCountdown,
    } = useContext(countDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('')
  



  return (
    <>
    <div className={styles.countdwonContainer} >
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>



    </div>

    {hasFinished ? (
      <button
       disabled 
       className={`${styles.countdownButton} ${styles.countdownButtonActive}`} > 
      Ciclo terminado
      <img src='icons/check_circlecheck.svg' alt="level" />
      <div/>
    </button> ): (
      <>
      {isActive ? (
      <button onClick={resetCountdown} type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} > 
        Abandonar ciclo 
        <img src='icons/close.svg' alt="level" />
      </button>
      ) : (
      <button onClick={startCountdown} type="button" className={styles.countdownButton} > 
        Iniciar ciclo
      </button>
      )
      }
      </>
    )
    }
    </>

  );

}

