import React, { useState } from 'react'
import {motion} from 'framer-motion'


function Box1() {
    const [animating, setAnimating] = useState(false)
  return (
    <div className=' py-4'>
      <motion.div  
      animate ={{ 
          x: animating ? 350 : 0 ,
          opacity: animating ? 1 : 0.5 ,
          rotate: animating ? 360 : 0
      }}
      initial={{
          opacity:0.1
      }}
      transition={{
          type:'spring',
          stiffness:100,
          damping:100
      }}
      className=' w-32 h-32 bg-gray-400 flex flex-col items-center'
      onClick={()=>{ setAnimating(!animating)}}
      >

      </motion.div>
    </div>
  )
}

export default Box1
