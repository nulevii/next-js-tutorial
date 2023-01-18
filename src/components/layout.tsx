import React from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
function Layout({children}: {children: JSX.Element}) {
  return (
    <>
    <Head>
    <title>Healthy Burgers</title>
    <meta name='title' content='Healthy Burgers'/>
    </Head>
    <div className='content'>
      <Header/>
      {children}
      <Footer/>
    </div>
    </>
  )
}

export default Layout