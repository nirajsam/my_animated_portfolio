import React from 'react';
import {motion, AnimatePresence} from 'framer-motion'
// import styled from 'styled-components'
import './PortfolioDemo.scss'

const PortfolioDemo = ({ isToggled, setToggled, data, children }) => {
  return (
    <AnimatePresence>
      {isToggled &&
      <>
        <motion.div className='BackDrop'></motion.div>
        <motion.div
          className='ModalComp'
          initial={{y: 10, x: "-50%", opacity: 0}}
          animate={{y: 50, opacity: 1}}
          exit={{y: 100, opacity: 0}}
        >
          {/* <h1>{data.title}</h1>
          <p>{data.message}</p>
          {children} */}
          <iframe
          width="100%"
          height="400px"
          src= {data}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <br />
          <button className='close-button' onClick={setToggled}>Close</button>
        </motion.div>
      </>
      }
    </AnimatePresence>
  )
}

export default PortfolioDemo
