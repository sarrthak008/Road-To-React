import React, { useState } from 'react'
import teamlogo1 from './teamlogo1.png'
import teamlogo2 from './teamlogo2.png'
import vslogo from './vslogo.png'
import Counter from  '../../components/Counter/Counter'
import PopUp from '../../components/Popup/pop'
import './app.css'

const App = () => {

  const [team1score,setteam1score] =useState(0)
  const [team2score,setteam2score] =useState(0)
  const [showpopup,setshowpopup] =useState(false)

  return (
  
  


    <div className='container'>

       <Counter teamLogo={teamlogo1} 
       teamInfo={'we are the always best'}
       teamName={'team AFC'}
       teamScore={setteam1score}/>
       
      <img src={vslogo} className='vslogo'></img>

       <Counter teamLogo={teamlogo2} 
       teamInfo={'we are the winner'}
       teamName={'team thunder'}
       teamScore={setteam2score}/>


      {showpopup?<PopUp team1score={team1score} team2score={team2score} popupstate={setshowpopup}/>:null}

     <button className='resultBtn' onClick={()=>{
         setshowpopup(true)
     }}>who wins?</button>

   </div>

  )
}

export default App
