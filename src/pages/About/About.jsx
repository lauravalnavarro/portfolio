import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaGithub, FaTools } from 'react-icons/fa'; 

import './About.css';  

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">Sobre Mí</h1>
      <p className="about-paragraph">
        ¡Hola! Soy Laura Valeria Navarro Avellaneda, una desarrolladora Front-End con más de 3 años de experiencia en la construcción de aplicaciones web utilizando tecnologías como ReactJS, TypeScript, Firebase y NodeJS. Me apasiona crear soluciones eficientes, escalables y de alta calidad.
      </p>
      
      <h2 className="about-subheading">Habilidades Técnicas</h2>
      <ul className="about-list">
        <li><FaReact /> Frontend: ReactJS, Redux, HTML5, CSS3, Sass, JavaScript (ES6+), TypeScript</li>
        <li><FaNodeJs /> Backend: NodeJS, Express</li>
        <li><FaDatabase /> Bases de datos: Firebase</li>
        <li><FaPython /> Automatización: Python </li>
        <li><FaTools /> Herramientas y metodologías: Git, GitHub, Visual Studio Code, Agile (Scrum)</li>
      </ul>

      <h2 className="about-subheading">Proyectos y GitHub</h2>
      <p className="about-paragraph">
        Puedes encontrar más detalles sobre mis proyectos y contribuciones en mi perfil de GitHub: 
        <a href="https://github.com/lauravalnavarro" target="_blank" rel="noopener noreferrer" className="about-link"><FaGithub /> lauravalnavarro</a>.
      </p>
    </div>
  );
}

export default About;

