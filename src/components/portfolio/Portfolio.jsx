import { useRef, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import PortfolioDemo from "../portfolioDemo/PortfolioDemo";

const items = [
  {
    id: 1,
    title: "Learning Management webapp",
    img: "/lmsApp.png",
    duration: "",
    desc: "This is subjective and objective online test website, made on Mern stack technology and deployed on atlas, heroku and netlify. In this website three login option given admin, teacher and student, student: student can give subjective and objective tests whichever is available, see their results on his profile",
    link: 'https://drive.google.com/file/d/1nVslMCjKB4VyyPwJjv42guN63iqyXAlP/preview'
  },
  {
    id: 2,
    title: "ECommerce webapp",
    img: "/shoppingApp.png",
    duration: "",
    desc: "This is basic Ecommerce website, made using MERN Stack and deployed on Netlify heroku and atlas.  ",
    link: 'https://drive.google.com/file/d/1o1gLBBpyujvfcBheMxESQgo3ZPcJKJRJ/preview'
  },
  
  {
    id: 3,
    title: "Multiplayer snake Game",
    img: "/snakegame.png",
    duration: "",
    desc: "In this game two different players can join one game and compete with each other, i used javascript html css for fontend and node express ,socket.io for backend to build this project.",
    link: 'https://drive.google.com/file/d/1TLYSSyXwn4EBaJQB-UXXkvyILPm9Qjyp/preview'
  },
  // {
  //   id: 4,
  //   title: "Car race game",
  //   img: "/carrace.png",
  //   duration: "",
  //   desc: "This is basic car race game made using python",
  //   link: 'https://drive.google.com/file/d/1IecO9_vjpg9gX2PQ1S35DGy7jMvH8Rnl/preview'
  // },
];

const Single = ({ item }) => {
  const [show, setShow]  = useState(false)
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const openModal = _ => {
    setShow(prevStatte => !prevStatte);
  };
  console.log("nk")
  return (
    <section id="Portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={(e)=> {return setShow(!show)}} >See Demo</button>
          </motion.div>
          <PortfolioDemo
          isToggled={show}
          setToggled={openModal}
          data={item.link}

        />
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
      
    </div>
  );
};

export default Portfolio;
