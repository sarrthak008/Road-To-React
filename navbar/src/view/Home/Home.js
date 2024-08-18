import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
       <Navbar/>
        <h1 style={{
             position:"absolute",
             top:'50%',
             left:'50%',
             transform:'translate(-50%,-50%)',
             fontSize:'4vw'
        }}>Im Home page</h1>
    </div>
  )
}

export default Home
