import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Monti-Resume.pdf'
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from 'framer-motion';
const Services = () => {
    const transition ={duration : 2, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id='Services'>
            {/* left side */}
            <div className="awesome">
                <span style={{color : darkMode? 'white': ''}}>My Awesome</span>
                <span>Services</span>
                <spane>Lorem ipsum dolor sit amet consectetur adipisicing elit. lost village <br /> Enim cupiditate dolorum obcaecati ipsum , </spane>
                <a href={Resume} download>
                    <div className="button s-button">Download CV</div>
                </a>
                <div className="blur s-blur1" style={{ background: "#c1f5ff" }}></div>
            </div>
            {/* Right side */}
            <div className="cards">
                <motion.div
                whileInView={{left:'15rem'}}
                initial={{left:'25rem'}}
                transition={transition}
                
                style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma , Sketch, Photoshop ,Adobe xd"}
                    />
                </motion.div>
            </div>
            <div className="cards">
                <motion.div
                whileInView={{left:'-4rem'}}
                initial={{left:'-14rem'}}
                transition={transition}
                style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"Html , Css, JavaScript ,React"}
                    />
                </motion.div>
            </div>
            <div className="cards">
                <motion.div
                whileInView={{left:'12rem'}}
                initial={{left:'25rem'}}
                transition={transition}
                style={{ top: "19rem", left: "12rem" }}>
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={"cupiditate dolorum obcaecati ipsum"}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    )
}

export default Services