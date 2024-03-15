import { useThemeStore } from "../../storez";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 200,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const { theme } = useThemeStore()
  const changePage = (loc) => {
    window.location.href = `#${loc}`
  }
  return (
    <div className={`hero ${theme === 'light'? "hero-light": ''}`}>
      <motion.div animate={{ x: 'calc(100vw)'}}
                initial={{ x: 'calc(-5vw)' }}
                transition={{ duration: 20, repeat: Infinity }}
                className="walkingman"><img style={{ transform: 'scaleX(-1)' }} width={100} src="/walking.gif" alt="Your GIF" /><hr /></motion.div>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>NIRAJ KUMAR</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} onClick={()=>changePage("Portfolio")}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants} onClick={()=>changePage("Contact")}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        FRONTEND DEVELOPER
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt=""  />
      </div>
      {/* <div className="walkBoy"><motion.img style={{ position: '' }}
          initial={{ x: 1250, y: 690 }}
          animate={{ x: -180, y: 690 }} 
          transition={{ duration: 10, repeat: Infinity }} src="/walking.gif" alt="Your GIF" />
      </div> */}
    </div>
  );
};

export default Hero;
