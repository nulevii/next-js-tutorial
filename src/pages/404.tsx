import React from 'react'
import Link from 'next/link'
function NotGoundPage() {
  return (
    <div className='not-found'>
      <h1>Oops...</h1>
      <h2>Such page does not exist!</h2>
      <p>Go back to <Link href='/'>Home</Link></p>
    </div>
  )
}

export default NotGoundPage