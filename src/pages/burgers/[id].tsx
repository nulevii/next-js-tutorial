import Burger from '@/components/burger'
import React from 'react'
import Image from 'next/image'

import { IBurger } from '.'
import styles from '@/styles/Burgers.module.css'

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:5000/items')
  const data = await res.json()

  const paths = data.map((burger: IBurger) => {
    return { params: { id: burger.id } }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { id } }: { params: { id: number } }) => {
  const res = await fetch(`http://localhost:5000/items/${id}`)
  const data = await res.json()

  return {
    props: {
      burger: data
    }
  }
}
function Details({ burger }: { burger: IBurger }) {
  const { id, desc, image, name, price } = burger
  return (
    <div className={styles.singleBurger}>
      <h1>{name}</h1>
      <div className={styles.imageContainer}>
        <Image src={`${burger.image}`} alt={`${burger.name}`} width='140' height='140'></Image>
      </div>
      <div>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Details