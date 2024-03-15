import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './switch.scss'
import { useThemeStore } from '../../storez';
const SwitchTheme = () => {
  const { theme, changeTheme } = useThemeStore()
  return (
    <div 
      className="switch-container" 
      id={theme}
      onClick={()=> {return changeTheme(theme==="light"? "dark": "light")}}
      style={{ justifyContent: theme==='dark' ? 'flex-end' : 'flex-start' }}
    >
      <motion.div layout className="dark">
        <AnimatePresence mode='wait' initial={false}>
          <motion.i
            className={`icon fa fa-${theme==='dark' ? 'moon' : 'sun'}`}
            key={theme==='dark' ? 'moon' : 'sun'}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }} 
            transition={{ duration: .2 }}
          >{theme==='dark' ? '🌚' : '🌞'}</motion.i>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default SwitchTheme