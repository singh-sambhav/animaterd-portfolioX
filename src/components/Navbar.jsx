import React from 'react'
import "./Navbar.scss"
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {motion} from "framer-motion"
import { Sidebar } from './sidebar/Sidebar'


export const Navbar = () => {
  return (
    <div className='Navbar'>
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span 
            initial={{opacity:0,scale:0.5}} 
            animate={{opacity:1,scale:1}} 
            transition={{duration:0.5}}>
              Sambhav Singh
              </motion.span>
            <div className="social">
                <a href="https://github.com/singh-sambhav?tab=repositories" target='_blank'><BsGithub className='git'/></a>
                <a href="https://www.linkedin.com/in/sambhav-singh-aa2080220/" target='_blank'><BsLinkedin className='linkedin'/></a>
                <a href="https://leetcode.com/Sambhav_S/" target='_blank' ><SiLeetcode className='Leetcode'/></a>
            </div>
        </div>
    </div>
  )
}
