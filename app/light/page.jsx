"use client"

import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => {
      setDarkMode(!darkMode);
      document.body.classList.toggle('dark');
    };
  
  return (
    <div className={`container ${darkMode ? 'dark' : ''} w-full h-screen relative`} style={{ maxWidth: '1200px' }}>
        
        <div className={`hoja inset-0 bg-white shadow-lg rounded-lg w-[1200px] flex mt-10`}>
            
            <div className={`left_Side ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#003147] text-white'} p-10 relative z-10 w-[400px]`}>
            
            <div className="profileText">
                <div className="imgBx">
                    <img src="sun.png" id="imgAct" className="imgAct" alt="photo" />
                </div>
                <h2 className="text-white text-center text-2xl font-semibold mt-8">
                    Leandro Magallanes<br />
                    <span className="text-sm font-light">Developer Front-End</span>
                </h2>
                <button
                    type="button"
                    className={`dark-mode-toggle w-12 h-6 rounded-full p-1 flex items-center transition-transform duration-300 ${
                        darkMode ? 'bg-gray-600' : 'bg-[#03a9f4]' 
                    }`}
                    onClick={handleClick}
                >
                  <span
                      className={`w-5 h-5 rounded-full shadow-md flex items-center justify-center bg-white ${
                      darkMode ? 'transform translate-x-6' : ''
                      }`}
                  >
                      {darkMode ? <FaMoon className="text-gray-900" /> : <FaSun className="text-gray-600" />}
                  </span>
                </button>
            </div>

            <div className="contactInfo mt-8">
          <h3 className="title text-white">Contact Info</h3>
          <ul>
            <li className="flex items-center mt-4">
              <span className="icon text-blue-400">
                <i className="fas fa-phone"></i>
              </span>
              <span className="text text-white ml-2">+54 9 11 2776-4823</span>
            </li>
            <li className="flex items-center mt-4">
              <span className="icon text-blue-400">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="text text-white ml-2">
                <a
                  href="mailto:leandro.magallanes@outlook.com?subject=Visualización CV&body=Hola Leandro Magallanes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  leandro.magallanes@outlook.com
                </a>
              </span>
            </li>
            <li className="flex items-center mt-4">
              <span className="icon text-blue-400">
                <i className="fas fa-globe"></i>
              </span>
              <span className="text text-white ml-2">
                <a href="https://www.leandro-magallanes.com.ar" target="_blank" rel="noopener noreferrer">
                  www.leandro-magallanes.com.ar
                </a>
              </span>
            </li>
            <li className="flex items-center mt-4">
              <span className="icon text-blue-400">
                <i className="fab fa-linkedin"></i>
              </span>
              <span className="text text-white ml-2">
                <a href="https://www.linkedin.com/in/leandromagallanes/" target="_blank" rel="noopener noreferrer">
                  www.linkedin.com/in/leandromagallanes/
                </a>
              </span>
            </li>
            <li className="flex items-center mt-4">
              <span className="icon text-blue-400">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span className="text text-white ml-2">Buenos Aires, Argentina</span>
            </li>
          </ul>
            </div>

            <div className="contactInfo education mt-8">
                <h3 className="title text-white">Education</h3>
                <ul className="mt-4">
                    <li className="mb-4">
                    <h5 className="font-bold">2006 - 2008</h5>
                    <h4 className="text-white">Institute Barrio Marina</h4>
                    <h4 className="text-white">Secondary, promedy: 8.47</h4>
                    </li>
                    <li className="mb-4">
                    <h5 className="font-bold">Crehana</h5>
                    <h4 className="text-white">Certificado en Introducción al Desarrollo Web Front-End.</h4>
                    <h4 className="text-white">Html y Css desde cero.</h4>
                    </li>
                    <li className="mb-4">
                    <h5 className="font-bold">Crehana</h5>
                    <h4 className="text-white">Certificado en Git y GitHub.</h4>
                    <h4 className="text-white">Control de versiones en Proyectos Web.</h4>
                    </li>
                    <li className="mb-4">
                    <h5 className="font-bold">Crehana</h5>
                    <h4 className="text-white">Certificado en Bootstrap desde cero.</h4>
                    <h4 className="text-white">Construcción de sitios web responsivos.</h4>
                    </li>
                </ul>
            </div>

            <div className="contactInfo language mt-8">
                <h3 className="title text-white">Language</h3>
                <ul className="mt-4">
                    <li className="flex justify-between items-center mb-4">
                    <span className="text-white pr-2">English</span>
                    <div className="h-2 bg-blue-300 w-full relative">
                        <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: '40%' }}></div>
                    </div>
                    </li>
                    <li className="flex justify-between items-center mb-4">
                    <span className="text-white pr-2">Spanish</span>
                    <div className="h-2 bg-blue-300 w-full relative">
                        <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: '100%' }}></div>
                    </div>
                    </li>
                </ul>
            </div>







            </div>

            <div className={`right_Side ${darkMode ? 'bg-[#003147] text-white' : 'bg-white text-black'} p-10 relative z-10 w-[800px]`}>
               
               <div className="about p-10">
                    <h2 className={`${darkMode ? ' text-white' : ' text-black'} text-gray-700  pb-5 uppercase`}>Profile</h2>
                    <p className={`${darkMode ? ' text-white' : ' text-black'} text-gray-700`}>Desarrollador front-end con experiencia en la creación de interfaces dinámicas y atractivas. Con React, especialmente Next.js, he llevado a cabo proyectos innovadores que optimizan la experiencia del usuario y la velocidad de carga. Especializado en HTML, CSS, JavaScript, y frameworks como Bootstrap y Tailwind CSS para lograr diseños modernos y responsivos. Además, he explorado el mundo tridimensional con Three.js, llevando la creatividad a nuevas alturas.</p>
                </div>

                <div className="about p-10">
                    
                    <h2 className={`${darkMode ? ' text-white' : ' text-black'} text-gray-700 pb-5 uppercase`}>Experience</h2>

                    <div className="box">
                      <div className="year_company m-2">
                          <h5 className='text-[#03a9f4] uppercase'>2020 - Present</h5>
                          <h5 >PatagoniaScript</h5>
                      </div>
                      <div className="text p-2">
                          <h4 className='text-[#03a9f4] uppercase'>CEO & Founder</h4>
                          <p className={`${darkMode ? ' text-white' : ' text-black'} text-gray-700`}> Diseño de Landing Pages. Portafolios Digitales Personalizados. Landing Pages Temáticas para Eventos. Presentación de Productos a la Venta. Diseño de Sitios Web para Empresas. Optimización de Sitios para SEO. Desarrollo con Tecnologías Avanzadas. Asesoramiento en Estrategias de Marketing Digital. Soporte Continuo y Mantenimiento.  </p>
                      </div>
                    </div>
                    
                    <div className="box">
                      <div className="year_company m-2">
                          <h5 className='text-[#03a9f4] uppercase'>2012 - 2023</h5>
                          <h5 >Brewda Construcciones</h5>
                      </div>
                      <div className="text p-2">
                          <h4 className='text-[#03a9f4] uppercase'>Operario</h4>
                          <p className={`${darkMode ? ' text-white' : ' text-black'} text-gray-700`}>Responsable de mantener un alto nivel de precisión en el manejo de efectivo y la administración de la caja. Coordinación y el manejo del estacionamie nto. Capacidad para manejar situaciones difíciles y tratar a los clientes con amabilidad y profesionalismo. Manejo de vehículos manuales, automáticos, híbridos y eléctricos.</p>
                      </div>
                    </div>

                    <div className="box">
                    <div className="year_company m-2">
                        <h5 className='text-[#03a9f4] uppercase'>2011 - 2012</h5>
                        <h5>Hotel Park Hyatt</h5>
                    </div>
                    <div className="text p-2">
                        <h4 className='text-[#03a9f4] uppercase'>Valet Parking</h4>
                        <p className={`${darkMode ? ' text-white' : ' text-black'} text-gray-700`}>He trabajado como especialista en servicio de valet parking en Park Hyatt durante un año. Mi trabajo consistía en recibir y saludar a los huéspedes de l hotel y asegurarme de que sus vehículos fueran estacionados de manera segura y eficiente en el estacionamiento del hotel. Además, gestionaba el cobro de las tarifas del estacionamiento y estaba disponible para brindar asistencia a los huéspedes que necesitaban ayuda con sus vehículos.</p>
                    </div>
                    </div>

                </div>

                <div className="about skills p-10">

                  <h2 className={`${darkMode ? ' text-white' : ' text-black'} text-gray-700 pb-5 uppercase` }>Professional Skills</h2>
                  
                  <div className="box">

                    <h4>HTML</h4>
                    <div className="h-2 bg-blue-300 w-full relative">
                        <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: '95%' }}></div>
                    </div>

                  </div>

                  <div className="box">

                    <h4>CSS3</h4>
                    <div className="h-2 bg-blue-300 w-full relative">
                        <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: '80%' }}></div>
                    </div>

                  </div>

                  <div className="box">

                    <h4>JavaScript</h4>
                    <div className="h-2 bg-blue-300 w-full relative">
                        <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: '60%' }}></div>
                    </div>

                  </div>

                  <div className="box">

                    <h4>Bootstrap</h4>
                    <div className="h-2 bg-blue-300 w-full relative">
                        <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: '90%' }}></div>
                    </div>

                  </div>

                  <div className="box">

                    <h4>Tailwind</h4>
                    <div className="h-2 bg-blue-300 w-full relative">
                        <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: '90%' }}></div>
                    </div>

                  </div>

                  <div className="box">

                    <h4>React JS</h4>
                    <div className="h-2 bg-blue-300 w-full relative">
                        <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: '60%' }}></div>
                    </div>

                  </div>

                </div>

                <div className="about interest p-10">

                    <h2 className={`${darkMode ? ' text-white' : ' text-black'} text-gray-700 pb-5 uppercase`}>Interest</h2>
                    <ul>
                      <li  className='text-[#03a9f4] uppercase'>
                        <i className="fas fa-gamepad"></i>
                        Gaming
                      </li>
                      <li  className='text-[#03a9f4] uppercase'>
                        <i className="fas fa-book"></i>
                        Reading
                      </li>
                    </ul>
                </div>

            </div> 

        </div>
        
    </div>

  );
};

export default Home;

