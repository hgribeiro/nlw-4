import { useContext } from 'react';
import { challengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css'


export default function Profile() {

  const {challengesCompleted} = useContext(challengesContext)
  return (
    <div className={styles.completedChallangesContainer} >
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>

  );

}

