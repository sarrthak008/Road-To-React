import React, { useEffect, useState } from 'react'
import "./counter.css"
import add from './add.png'
import minus from './minus.png'

const Counter = ({teamLogo, teamInfo, teamName , teamScore}) => {
  
 const [score ,setScore] =useState(0)
  
 const updateScrore=(opration)=>{
    setScore(opration==='add' ? score +1 : score-1)
 }

 useEffect(()=>{
  teamScore(score)
 },[score])


    return (
      <div className='card-container'>
         <span className='card-score'>{score}</span>
         <div className='card-info-container'>
            <span className='card-team-name'>{  teamName}</span>
            <spam className='card-team-img'><img src={teamLogo}></img></spam> 
         </div>
         <p className='card-info'>{ teamInfo}</p>
         <div className='card-btns'>
            <img src={minus}  className='btn-img' onClick={()=>{updateScrore('minus')}}></img>
            <img src={add} className='btn-img' onClick={()=>{updateScrore('add')}}></img>
         </div>
      </div>
    )
  }

export default Counter
