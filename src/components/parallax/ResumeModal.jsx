import React from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import styled from 'styled-components'
import './ResumeModal.scss'

const ModalDiv = styled(motion.div)`
  position: absolute;
  top: 100;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 580px; 
  height: auto;
  padding: 1rem;
  border: 1px solid #aaa;
  background: #fff;
`
const BackDrop = styled(motion.div)`
  background: #aaaaaa2e;
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
`
const ResumeModal = ({ isToggled, setToggled }) => {
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
          <h2>Resume</h2>
          <img src="/resume.png" alt="resume" srcset="" width={450} height={500}/>
          <a href="/Niraj_kumar_cv.pdf" download="resume"  style={{color:'white', padding:'2px', backgroundColor:'orange', }}>download </a><br />
          <button onClick={setToggled} autoFocus={true}>Close</button>
        </motion.div>
      </>
      }
    </AnimatePresence>
  )
}

export default ResumeModal
