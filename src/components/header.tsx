import React from 'react'
import Link from 'next/link'
import {SiBurgerking} from 'react-icons/si'

function Header() {
  return (
    <header>
      <div><SiBurgerking /></div>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About us</Link>
        <Link href='/review'>Reviews</Link>
        <Link href='/burgers'>Burgers</Link>
      </nav>
    </header>
  )
}

export default Header