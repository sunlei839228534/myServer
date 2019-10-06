import React from 'react'
import Header from '../../components/Header'

const Home = () => {
  return (
    <div>
      <Header />
      This is Peko
      <button onClick={()=>{alert('peko')}}>click</button>
    </div>
  )
}

export default Home