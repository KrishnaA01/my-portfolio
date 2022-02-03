import React from 'react';
import "./home.css"
import { useNavigate, Link } from "react-router-dom";
import {  AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { DiMysql,DiMongodb,DiCss3, DiReact, DiNodejs } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { FaSass,FaGitAlt } from 'react-icons/fa'



export default function Home() {
  
  let navigate = useNavigate();
  const routeChange = ()=> {
    let path ="./projects";
    navigate(path);
  }


  return (
     <div className="home-container">
        <div className="home-text">
          <h3> Hello there, <br/>Welcome to my portfolio!</h3>
          <h4>I'm Krishna Mahato, a Frontend Developer based in Berlin.</h4>
          <h4>Currently I am working with these technologies:</h4>
        </div>
        <div className='skills'>
               <AiFillHtml5 size={56} className='icon html'/>
               <DiCss3 size={56} className='icon css'/>
               <IoLogoJavascript size={56} className='icon js'/>
               <DiNodejs size={56} className='icon node'/>
               <AiFillGithub size={56} className='icon'/>
               <FaGitAlt size={56} className='icon git'/>
               <FaSass size={56} className='icon sass'/>
               <DiReact size={56} className='icon react'/>
               <DiMongodb size={56} className='icon mongo'/>
               <DiMysql size={56} className='icon mysql'/>
          </div>
          <Link to="/projects" className="arrow"><img onClick={routeChange} src="assets/downArrow.png" alt="" /></Link>
       
      </div>
  )
}
