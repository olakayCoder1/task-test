import React, { useState } from 'react'
import { motion } from 'framer-motion'


export default function Box3() {

    const boxVariant = {
        hidden:{
            x:"-100vh",
            transition:{
                delay:0.4
            }
        },
        visible:{
            x:0,
            transition:{
                delay:0.4,
                when: "beforeChildren",
                staggerChildren:2.0
            }
        }
    }

    const listVariant = {
        hidden:{
            x:-10,
            opacity:0,
            
        },
        visible:{
            x:0,
            opacity:0.3,
            // transition:{
            //     delay:1
            // }
        }
    }

    const [ boxex , setBoxes] = useState();

  return (
    <div className='py-4'>
      <motion.div 
        variants={boxVariant}
        animate='visible'
        initial='hidden'
        className=' w-44 h-44 bg-gray-400 flex flex-col items-center'
        >
            {[1,2,3,].map((val, index)=>{
                return (
                    <motion.li 
                        variants={listVariant}
                        className=' w-12 h-12 bg-white m-3 list-none'
                        >
                    </motion.li>
                )
            })}
      </motion.div>
    </div>
  )
}
