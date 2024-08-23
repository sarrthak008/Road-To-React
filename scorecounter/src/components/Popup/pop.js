import React from 'react'
import './pop.css'
import closeImg from './close.svg'

const PopUp = ({ team1score, team2score,popupstate}) => {
    let winner =""
    if(team1score==team2score){
        winner="it is tie"
    }else if(team1score<team2score){
        winner="team 2 win"
    }else if(team1score>team2score){
        winner="team 1 win"
    }
  return (
      <div className='overlay'>
         <div className='result'>
             {winner}
          <img src={closeImg} className='closepopup' onClick={()=>{
             //popupstate(false)
          }}></img>
         </div>
      </div>

  )
   
}

export default PopUp
