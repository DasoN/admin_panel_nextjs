//components imports 
import Main from '../components/Main'
import Login from '../components/Login'

//next.js imports
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Login />
      </Main>
    </>
  )
}
