import React from 'react'
import { motion } from "framer-motion";
import './Experience.scss'
import { useThemeStore } from '../../storez';
export default function Experience() {
    const { theme } = useThemeStore()
    const handleScroll = (event) => {
        // Adjust the scrollLeft property by a specific distance
        const container = event.target;
        const scrollDistance = 200; // Specify the distance to scroll
        container.scroll += scrollDistance;
      };
    const textVariants = {
        scrollButton: {
          opacity: 0.4,
          y: 10,
          transition: {
            duration: 2,
            repeat: Infinity,
          },
        },
      };
    const projects =  [
        {
            company: 'PUBLICIS SAPIENT',
            title: 'Experience Engineering level 2',
            duration: '15/9/2021 – PRESENT',
            location: 'Bangalore',
            project: 'VERIZON',
            projectDuration: '01/01/2023 - present',
            description: 'Just started Working on this project as a React Developer'         
        },
        {
          company: 'PUBLICIS SAPIENT',
          title: 'Experience Engineering level 2',
          duration: '15/9/2021 – PRESENT',
          location: 'Bangalore',
          project: 'USBANK',
          projectDuration: '01/01/2022 - 30/12/2023',
          description: 'Developed an external offers consent microapp in React JS, enhancing website performance through module Federation and shared code implementation.Implemented features for adding and managing external accounts, while migrating microapps from JavaScript to TypeScript within a monorepo structure using turborepo. Additionally, enhanced logging, error handling, and A/B testing methodologies, leveraging Splunk for logs monitoring. Employed webpack, Context API, GraphQL, React Testing Library, and adhered to SOLID design principles and USBank-specific design components in an Atomic Design Pattern approach.',
        },
        {
          company: 'INFOSYS',
          title: 'System Engineer',
          duration: '06/01/2020 – 15/09/2021',
          location: 'Bhubaneswar',
          project: 'Finacle payment app',
          projectDuration: '01/08/2020 - 30/12/2020',
          description: 'Worked in this Project as a Node js developer, here i have created a user registration and login flow using Node red'
        },
        {
            company: 'INFOSYS',
            title: 'System Engineer',
            duration: '06/01/2020 – 15/09/2021',
            location: 'Bhubaneswar',
            project: 'E-Hospital app',
            projectDuration: '01/01/2021 - 10/09/2021',
            description: 'Worked as ReactJS developer, My key responsibility was to create components like user register, login, Course creation, prescription, Notification ,Zoom Integration'
        }
      ]
  return (
    <div className='experience-wrapper' id={theme}>
        <h2>SKILLS</h2>
        <ul className='skills-container' role='list' tabIndex={0}>
            <li className="skills" role='listitem'>
                <img src="/logos/react.png" alt=""  />
                <span className="skillname">REACT</span>
            </li>
            <li className="skills" role='listitem'>
                <img src="/logos/html.png" alt=""  />
                <span className="skillname">HTML</span>
            </li>
            <li className="skills" role='listitem'>
                <img src="/logos/css3.png" alt=""  />
                <span className="skillname">CSS</span>
            </li>
            <li className="skills" role='listitem'>
                <img src="/logos/javascript.png" alt=""  />
                <span className="skillname">JAVASCRIPT</span>
            </li>
            <li className="skills" role='listitem'>
                <img src="/logos/typescript.png" alt=""  />
                <span className="skillname">TYPESCRIPT</span>
            </li>
            <li className="skills" role='listitem'>
                <img src="/logos/nextjs.png" alt=""  />
                <span className="skillname">NEXT JS</span>
            </li>
            <li className="skills" role='listitem'>
                <img src="/logos/python.png" alt=""  />
                <span className="skillname">PYTHON</span>
            </li>
            <li className="skills" role='listitem'>
                <img src="/logos/node-js.png" alt=""  />
                <span className="skillname">NODE JS</span>
            </li>
            <li className="skills" role='listitem'>
                <img src="/logos/express-js.png" alt=""  />
                <span className="skillname">EXPRESS JS</span>
            </li>
            <li className="skills" role='listitem'>
                <img src="/logos/mongodb.png" alt=""  />
                <span className="skillname">MONGODB</span>
            </li>
            <li className="skills" role='listitem'>
                <img src="/logos/git.png" alt=""  />
                <span className="skillname">GIT</span>
            </li>
            <li className="skills" role='listitem'>
                <img src="/logos/webpack.png" alt=""  />
                <span className="skillname">WEBPACK</span>
            </li>
            <li className="skills" role='listitem'>
                <img src="/logos/gql.png" alt=""  />
                <span className="skillname">GraphQL</span>
            </li>
            
        </ul>

        {/* <div className="working"><img src="/working.gif" alt="Your GIF" /></div> */}
       
        <h2>WORKING EXPERIENCES</h2>
        <span style={{fontSize:'10px'}}>-- scroll right to see more---</span>
        <div className="horizontal-scrollable-cards-container" onScroll={handleScroll} tabIndex={0}>
        <div className="working" ><img src="/working.gif" alt="Your GIF" /></div>
            <div className="cards-wrapper" role='list'>
            {projects.map((project, index) => (
                <div className="card" key={index} role='listitem'>
                    
                <h3>{project.company}</h3>
                <h4>{project.title}</h4>
                <h5>{project.duration}</h5>
                <h5>{project.location}</h5>
                <p>{project.project}</p>
                <p>{project.projectDuration}</p>
                <div className="card-content">
                    {Number(project.description.length)>=181 && <div className="downArrow">
                        <motion.img
                            variants={textVariants}
                            animate="scrollButton"
                            src="/scroll.png"
                            alt=""
                        />
                    </div>}
                    <p>{project.description}</p>
                </div>
                </div>
            ))}
            </div>
            
        </div>
        
    </div>
  )
}
