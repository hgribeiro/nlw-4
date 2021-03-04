import { Children, createContext, useState, ReactNode, useContext, useEffect } from 'react'
import { challengesContext } from './ChallengesContext';


interface CountDownProviderProps {
  children: ReactNode; 
}



interface countDownContextData{
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  resetCountdown: () => void;
  startCountdown: () => void;

  
}


export const countDownContext  = createContext({} as countDownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountDownProvider({ children}:CountDownProviderProps ) {
  const { startNewChallenge,challengesCompleted } = useContext(challengesContext)

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);



  const minutes = Math.floor(time / 60);
  const seconds = time % 60;


  function startCountdown() {
    setIsActive(true)
  }

  useEffect(() => {
    if(isActive && time > 0){
    countdownTimeout = setTimeout(() =>{
        setTime(time - 1);
      },1000 )
    }else if(isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge()
    }
  },[time, isActive])

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(0.05*60);
  }

return (
  <countDownContext.Provider 
    value={{
      minutes,
      seconds,
      isActive,
      hasFinished,
      resetCountdown,
      startCountdown,

      }} 
  >
    {children}
  </countDownContext.Provider>
)
}
