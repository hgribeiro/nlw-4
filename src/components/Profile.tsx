import { useContext } from 'react';
import { challengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/Profile.module.css'


export default function Profile() {

  const { level } = useContext(challengesContext);
  return (
    <div className={styles.profileContainer} >
      <img src='http://github.com/hgribeiro.png' />
      <div>
        <strong>
          Hg Ribeiro
        </strong>
        <p>
          <img src='icons/level.svg' alt="level" />
          Level {level}
          </p>
      </div>
    </div>

  );

}

