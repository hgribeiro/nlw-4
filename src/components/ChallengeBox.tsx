import { useContext, useState } from 'react';
import { challengesContext } from '../context/ChallengesContext';
import { countDownContext } from '../context/CountDownContext';
import styles from '../styles/components/ChallengeBox.module.css'



export default function ChallengeBox( ) {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(challengesContext)
  const { resetCountdown } = useContext(countDownContext)

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFaild() {
    resetChallenge();
    resetCountdown();
  }

  return(
    <div className={styles.challengeBoxContainer} >
      { activeChallenge ? (
        <div className={styles.challengeActive} >
            <header>Ganhe {activeChallenge.amount} xp</header>
            <main>
              <img src={`icons/${activeChallenge.type}.svg` }alt=""/>
              <strong>Exercite-se</strong>
              <p>
              {activeChallenge.description}
              </p>
            </main>
            <footer>
              <button 
                type='button'
                className={styles.challengeFailedButton} 
                onClick={handleChallengeFaild} >Falhei</button>
              <button 
                type='button' 
                className={styles.challengeSucceededButton} 
                onClick={handleChallengeSucceeded} >Completei
                </button>
            </footer>
        </div>
      ) : 
        <div className={`${styles.challengeBoxContainer} ${styles.challengeNotActive} `} >
          <strong>
            Finalize um ciclo para receber desafios
         </strong>
        <img src='icons/level-up.svg' />
        <span>Avance de level completando desafios</span>
        </div>
    }
    </div>
  );
}

