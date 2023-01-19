import Burger from '@/components/burger';
import React from 'react'

export interface IBurger {
  name: string;
  image: string;
  desc: string;
  price: number;
  id: string;
}
export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/items')
  const data = await res.json()


  return{
    props: {burgers: data}
  }
}
function Burgers({burgers}: {burgers: IBurger[]}) {
  return (
    <div>
      <h1>Our Burgers</h1>
      {burgers.map(burger => <Burger key={burger.id} burger={burger} />)}
    </div>
  )
}

export default Burgers