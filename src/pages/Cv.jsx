import React from 'react'
import "./css/Cv.css"
import foto from '../assets/cv/perfil_cv.png'
function Cv() {
  return (
    <div className='contenedor'>
      <div className='franja'>
        <p className='nombre'>Martín Aragón Sánchez <br /> ING. EN COMPUTACIÓN </p>
      </div>
      <div className='columnas'>
        <div className='container'>
          <img src={foto} alt="Foto de perfil" className='foto' />
          <h1>Contacto</h1>
          <p className='contacto'>951 396 3434 <br /> martinaragonsanchez@gmail.com <br /> https://maartin.github.io/MiPaginaPersonal/</p>
          <hr />
          <br></br>
          <h1>Habilidades</h1>
          <ul>
            <li>Responsabilidad</li>
            <li>Resolución de problemas</li>
            <li>Trabajo en equipo</li>
            <li>Pensamiento crítico</li>
            <li>Proactividad</li>
          </ul>
          <hr />
          <br></br>
          <h1>Cursos y certificados</h1>
          <ul>
            <li>Google Cybersecurity Certificate V2</li>
            <li>Constancia English for the Semiconductor Industry</li>
            <li>Intro to Machine Learning</li>
            <li>Programación básica en python</li>
            <li>Conceptos básicos de redes</li>
            <li>Introduction to Cybersecurity</li>
            <li>Maching Learning Introduction</li>
            <li>Jira Fundamentals Badge</li>
            <li>Scrum Foundation Professional Certificate - SFPC™</li>
          </ul>
          <hr />
          <br></br>
          <h1>Educación</h1>
          <p>Universidad Tecnológica de la Mixteca <br /> Ingeniería en Computación <br /> 2020 - 2025</p>
          <hr />
          <br></br>
          <h1>Idiomas</h1>
          <p>Español (Nativo) <br /> Inglés (Intermedio)</p>
        </div>
        <div className='texto-der'>
          <h2>A cerca de mí</h2>
          <p>La tecnología, la programación y las computadoras son cosas que 
            realmente me apasionan y me interesan. En este momento estoy 
            interesado en el desarrollo web, tanto en el frontend como en el 
            backend. Soy una persona responsable, autodidacta y acostumbrada a 
            trabajar en equipo. Estoy comprometido con mi formación continua 
            y siempre estoy buscando aprender nuevas tecnologías y mejorar mis 
            habilidades en el campo de la informática.
          </p>
          <br></br>
          <h2>Conocimientos técnicos</h2>
          <ul>
            <li>Lenguajes y tecnologías: Python, Java, C, Javascript, TypeScript</li>
            <li>Herramientas: Github, Git, Docker, Vs Code, Postman, Jira</li>
            <li>Frameworks: React, Vue, Angular, Laravel</li>
            <li>Sistemas operativos: Windows, Linux</li>
            <li>Redes: Fundamentos de redes (TCP/IP, DNS, DHCP, direccionamiento IP)</li>

          </ul>
           <br></br>
          <h2>Experiencia</h2>
         
          <h3>Prácticas profesionales</h3>
          <p>KadaSoftware, julio de 2023 a agosto de 2023.
            Desarrollé y ejecuté pruebas automatizadas para una
            plataforma web universitaria utilizando Python y
            Selenium, con el fin de garantizar la funcionalidad y
            estabilidad del sistema.
            Automatizé flujos de usuario clave (inicio de sesión,
            navegación, formularios) para detectar errores y
            validar comportamientos esperados en distintas
            secciones del sitio</p>
            <br></br>
            <h3>Prácticas profesionales</h3>
            <p>Universidad Nacional Autónoma de México, juilo de 2024  a septiembre
            de 2024. Laboratorio Avanzado de Procesamiento de Imágenes (LAPI).
            Colaboré en el desarrollo de la página web de una aplicación basada en 
            inteligencia artificial para la detección temprana de enfermedades cardíacas.
            Me enfoqué en el diseño e implementación del frontend con HTML, JavaScript,
            Tailwind CSS, priorizando la experiencia y accesibilidad; hice ajustes en 
            un modelo con Python.</p>
            <br></br>
            <h3>Servicio social</h3>
             <p>Universidad Tecnológica de la Mixteca, noviembre de 2024 a julio de 2025.
              Participé en el desarrollo de un sistema de seguimiento de egresados, 
              contribuyendo en el diseño y la implementación de interfaces utilizando 
              Blade (Laravel). Desarrollé funcionalidades y vistas dinámicas en PHP 
              empleando el framework Laravel. Apoye en el diseño de un prototipo de
              página web para la universidad usando HTML, CSS y Javascript.
             </p>
        </div>
      </div>

      

    </div>

  )
}

export default Cv