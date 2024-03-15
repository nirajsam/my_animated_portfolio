import { useThemeStore } from "../../storez";
import Sidebar from "../sidebar/Sidebar";
import SwitchTheme from "../switch/Switch";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, changeTheme } = useThemeStore()
  console.log("sam",changeTheme)
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Niraj's Portfolio
        </motion.span>
        <div className="social">
          <a href="https://www.instagram.com/niraj.sam/" target="_blank" aria-label="instagram link"> 
            <img className="logo" src="/insta.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/niraj-kumar-7625281b8/" target="_blank" aria-label="linkedIn link">
            <img className="logo" src="/linkedIn.png" alt="" />
          </a>
          <a href="https://github.com/nirajsam" target="_blank" aria-label="github link">
            <img className="logo" src="/icons8-github.gif" alt="" style={{borderRadius:'50%'}} />
          </a>
          <SwitchTheme/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
