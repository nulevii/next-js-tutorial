import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} font-effect-fire-animation`}>Main</h1>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam itaque deserunt optio!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aliquid?</p>
      <Link className={styles.btn} href='/burgers'>All burgers</Link>
    </div>
  )
}
