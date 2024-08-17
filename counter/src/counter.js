import React from 'react'
import { useEffect ,useState } from 'react'

const Counter = () => {

  let [count,setCounter] = useState(0)
   useEffect(()=>{
    console.log('all files load..')
   },[])

   useEffect(()=>{
     console.log(`update counter ${count}`)
   },[count])

  return (
    <div>
       <h1>{count}</h1>
        <button onClick={()=>{
           setCounter(count+1)
        }}>click me</button>
    </div>
  )
}

export default Counter
