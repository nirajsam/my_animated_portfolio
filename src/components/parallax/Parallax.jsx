import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useThemeStore } from "../../storez";
import ResumeModal from "./ResumeModal";
import { useState } from "react";

const Parallax = () => {
  const ref = useRef();
  const { theme, changeTheme } = useThemeStore()
  const [show, setShow]  = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  const openResumeModal = () => {
    setShow(!show)
  }
  const openModal = _ => {
    setShow(prevState => !prevState);
  };
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          theme==="dark"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.div initial={{ x: 'calc(-65vw)'}}
                animate={{ x: 'calc(60vw)' }}
                transition={{ duration: 10, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    zIndex:'5'
                }} className="bird"><img width={100} src="/bird.gif" alt="Your GIF" /></motion.div>
      <motion.div className="about" style={{ y: yText }}>
        <h1>{"About Me"}</h1>
        <p>
        Hi there! I'm Niraj, a seasoned web developer with 4 years of 
        experience, currently working as a FrontEnd Developer at Publicis 
        Sapient. I specialize in crafting sleek and responsive user 
        interfaces that marry form and function seamlessly. 
        Passionate about staying ahead in the tech game, 
        I thrive on challenges and love collaborating with teams to 
        bring ideas to life. Let's build something great together!
      </p>
      <br />
      
      
      </motion.div>
      
      <motion.div className={`mountains ${theme === 'light'? "mountain-light": ''}`}><motion.button className="resume-button" onClick={openResumeModal}>
      View Resume
      </motion.button></motion.div>
      <ResumeModal
          isToggled={show}
          setToggled={openModal}
        />
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            theme=="dark" ? "/planets.png" : ""
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className={`stars ${theme === 'light'? "star-light": ''}`}></motion.div>
    </div>
  );
};

export default Parallax;
