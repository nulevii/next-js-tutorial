import React, { useEffect, useState, SetStateAction } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
function NotGoundPage() {
  const [redirectTime, setRedirectTime] = useState(8)
  const router = useRouter()
  useEffect(() => {
    const timer = setInterval(() => {
        setRedirectTime((prevState) => prevState - 1)
      }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  if (redirectTime <= 0){
    router.push('/')
  }
  return (
    <div className='not-found'>
      <h1>Oops...</h1>
      <h2>Such page does not exist!</h2>
      <p>You will be rederected to Homepage in {redirectTime} seconds</p>
      <p>Go back to <Link href='/'>Home</Link></p>
    </div>
  )
}

export default NotGoundPage