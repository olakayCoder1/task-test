import React from 'react'
import { motion } from 'framer-motion'


export default function Box2() {
  return (
    <div className='py-4'>
      <motion.div 
       whileHover={{
           scale:1.2
       }}
       whileTap={{
           scale:0.9
       }}
       drag
       dragConstraints={{
           left:-20,
           right:20,
           top:10,
           bottom:10
           

       }}
        className=' w-32 h-32 bg-gray-400 flex flex-col items-center'
        >

      </motion.div>
    </div>
  )
}
