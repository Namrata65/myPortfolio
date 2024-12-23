import React from 'react'
import html from '../resources/techLogo/html.png'
import css from '../resources/techLogo/icons8-css3-480.png'
import sass from '../resources/techLogo/icons8-sass-480.png'
import javascript from '../resources/techLogo/icons8-javascript-480.png'
import typescript from '../resources/techLogo/icons8-typescript-480.png'
import angular from '../resources/techLogo/icons8-angular-480.png'
import reactjs from '../resources/techLogo/icons8-react-native-480.png'
import node from '../resources/techLogo/icons8-nodejs-480.png'
import express from '../resources/techLogo/icons8-express-js-480.png'
import firebase from '../resources/techLogo/icons8-firebase-480.png'
import mongodb from '../resources/techLogo/MongoDB_Logomark_ForestGreen.png'
import java from '../resources/techLogo/icons8-java-480.png'
import wordpress from '../resources/techLogo/icons8-wordpress-480.png'
import python from '../resources/techLogo/icons8-python-480.png'
import bootstrap from '../resources/techLogo/icons8-bootstrap-logo-480.png'
import github from '../resources/techLogo/icons8-github-480.png'


const Skills = () => {
  return (
    <section id='skills' className='skills'>
        <div className='skills-container'>
            <div className='skills-container-left'>
                <ul>
                    <li>
                        <img src={html} alt="Skill image" />
                        <p>HTML</p>
                    </li>
                    <li>
                        <img src={css} alt="Skill image" />
                        <p>CSS</p>
                    </li>
                    <li>
                        <img src={javascript} alt="Skill image" />
                        <p>JavaScript</p>
                    </li>
                    <li>
                        <img src={typescript} alt="Skill image" />
                        <p>TypeScript</p>
                    </li>
                    <li>
                        <img src={reactjs} alt="Skill image" />
                        <p>React JS</p>
                    </li>
                    <li>
                        <img src={angular} alt="Skill image" />
                        <p>Angular</p>
                    </li>
                    <li>
                        <img src={node} alt="Skill image" />
                        <p>Node JS</p>
                    </li>
                    <li>
                        <img src={firebase} alt="Skill image" />
                        <p>Firebase</p>
                    </li>
                    <li>
                        <img src={express} alt="Skill image" />
                        <p>Express JS</p>
                    </li>
                    <li>
                        <img src={mongodb} alt="Skill image" />
                        <p>Mongodb</p>
                    </li>
                    <li>
                        <img src={java} alt="Skill image" />
                        <p>Java</p>
                    </li>
                    <li>
                        <img src={wordpress} alt="Skill image" />
                        <p>Wordpress</p>
                    </li>
                    <li>
                        <img src={python} alt="Skill image" />
                        <p>Python</p>
                    </li>
                    <li>
                        <img src={github} alt="Skill image" />
                        <p>Github</p>
                    </li>
                    <li>
                        <img src={bootstrap} alt="Skill image" />
                        <p>Bootstrap</p>
                    </li>
                </ul>
            </div>
            <div className='skills-container-right'>
                <h1>3 years experience working</h1>
            </div>
        </div>
    </section>
  )
}

export default Skills