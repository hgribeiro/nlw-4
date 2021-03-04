import { useContext } from 'react';
import { challengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';


// import { Container } from './styles';

function ExperienceBar() {

  const {currentExperience, experienceToNextLevel} = useContext(challengesContext)


  const percentToNexLevel = Math.round(currentExperience * 100) / experienceToNextLevel


  return (
    <header className={styles.experienceBar} >
      <span>{currentExperience} xp</span>
      <div>
      <div  style={{width: `${percentToNexLevel}%`}} />
      <span className={styles.currentExperience} style={{left: `${percentToNexLevel}%`}} >{currentExperience} xp</span>
      </div>
      <span>{experienceToNextLevel} xp</span> 
    </header>
  );
}

export default ExperienceBar;