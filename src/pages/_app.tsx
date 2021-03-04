import '../styles/global.css'

import { ChallengesProvider } from "../context/ChallengesContext";
import { CountDownProvider } from '../context/CountDownContext';


function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
    <CountDownProvider>
      <Component {...pageProps} />
    </CountDownProvider>
    </ChallengesProvider>
  )
}

export default MyApp
 