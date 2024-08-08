import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../stores'

const Customizer = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key='custom'
            className='absolute top-0 left-0 z-10'
          >
            <div className='flex items-center min-h-screen'>
              <div></div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer
