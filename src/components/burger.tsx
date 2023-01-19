import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from '@/styles/Burgers.module.css'
import { IBurger } from '@/pages/burgers'
function Burger({burger}: {burger: IBurger}) {
  return (
    <Link href={`/burgers/${burger.id}`} className={styles.burgerCard}>
      <div className={styles.imageContainer}>
        <Image src={`${burger.image}`} alt={`${burger.name}`} width='140' height='140'></Image>
      </div>
      <div>
        <h3>{burger.name}</h3>
        <p>{burger.desc}</p>
      </div>
    </Link>
  )
}

export default Burger