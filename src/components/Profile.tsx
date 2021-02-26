import { useContext } from 'react'

import { ChallengesContext } from '../context/ChallengesContext'

import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/p-perotti.png" alt="Patrick Perotti" />
      <div>
        <strong>Patrick Perotti</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Nível {level}
        </p>
      </div>
    </div>
  )
}