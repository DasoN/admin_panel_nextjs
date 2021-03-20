//components imports 
import Main from '../components/Main'
import Login from '../components/Login'

//next.js imports
import Head from 'next/head'
import Router from 'next/router'
import React from 'react'


export default function Home() {
  React.useEffect(()=>{
    const {pathname} = Router
    if(pathname == '/' ){
      Router.push('/login')
  }
  }, [])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}
