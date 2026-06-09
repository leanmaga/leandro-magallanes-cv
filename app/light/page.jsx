"use client";

import { useState } from "react";
import {
  FaSun,
  FaMoon,
  FaCar,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div
      className={`container ${darkMode ? "dark" : ""} w-full h-screen relative`}
      style={{ maxWidth: "1200px" }}
    >
      <div
        className={`hoja inset-0 bg-white shadow-lg rounded-lg w-[1200px] flex mt-10`}
      >
        <div
          className={`left_Side ${darkMode ? "bg-gray-900 text-white" : "bg-[#003147] text-white"} p-10 relative z-10 w-[400px]`}
        >
          <div className="profileText">
            <div className="imgBx">
              <img src="sun.png" id="imgAct" className="imgAct" alt="photo" />
            </div>
            <h2 className="text-white text-center text-2xl font-semibold mt-8">
              Leandro Adrián Magallanes
              <br />
              {/* <span className="text-sm font-light">Valet Parking</span> */}
            </h2>
            <button
              type="button"
              className={`dark-mode-toggle w-12 h-6 rounded-full p-1 flex items-center transition-transform duration-300 ${
                darkMode ? "bg-gray-600" : "bg-[#03a9f4]"
              }`}
              onClick={handleClick}
            >
              <span
                className={`w-5 h-5 rounded-full shadow-md flex items-center justify-center bg-white ${
                  darkMode ? "transform translate-x-6" : ""
                }`}
              >
                {darkMode ? (
                  <FaMoon className="text-gray-900" />
                ) : (
                  <FaSun className="text-gray-600" />
                )}
              </span>
            </button>
          </div>

          <div className="contactInfo mt-8">
            <h3 className="title text-white">Contact Info</h3>

            <ul>
              <li className="flex items-center mt-4">
                <span className="icon text-blue-400">
                  <FaPhoneAlt />
                </span>
                <span className="text text-white ml-2">+5491127764823</span>
              </li>
              <li className="flex items-center mt-4">
                <span className="icon text-blue-400">
                  <FaEnvelope />
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
              {/* <li className="flex items-center mt-4">
                <span className="icon text-blue-400">
                  <FaGlobe />
                </span>
                <span className="text text-white ml-2">
                  <a
                    href="https://leandro-magallanes.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    leandro-magallanes.vercel.app
                  </a>
                </span>
              </li> */}
              {/* <li className="flex items-center mt-4">
                <span className="icon text-blue-400">
                  <FaLinkedin />
                </span>
                <span className="text text-white ml-2">
                  <a
                    href="https://linkedin.com/in/leandromagallanes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/leandromagallanes
                  </a>
                </span>
              </li> */}
              {/* <li className="flex items-center mt-4">
                <span className="icon text-blue-400">
                  <FaGlobe />
                </span>
                <span className="text text-white ml-2">
                  <a
                    href="https://github.com/leanmaga"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/leanmaga
                  </a>
                </span>
              </li> */}
              <li className="flex items-center mt-4">
                <span className="icon text-blue-400">
                  <FaMapMarkerAlt />
                </span>
                <span className="text text-white ml-2">
                  Merlo, Buenos Aires, Argentina
                </span>
              </li>
            </ul>
          </div>

          <div className="contactInfo education mt-8">
            <h3 className="title text-white">Education</h3>
            <ul className="mt-4">
              <li className="mb-4">
                <h5 className="font-bold">Argentina Programa 2022</h5>
                <h4 className="text-white">
                  Ministerio de Economía de la Nación
                </h4>
              </li>
              <li className="mb-4">
                <h5 className="font-bold">Alura Latam, 2023</h5>
                <h4 className="text-white">
                  Git y GitHub: Control y Comparte tu Código
                </h4>
              </li>
              <li className="mb-4">
                <h5 className="font-bold">Alura Latam, 2023</h5>
                <h4 className="text-white">
                  HTML5 y CSS3 parte 4: Avanzando en CSS
                </h4>
              </li>
              <li className="mb-4">
                <h5 className="font-bold">Crehana, 2021</h5>
                <h4 className="text-white">
                  Diseño de Interfaces Web y Móviles
                </h4>
              </li>
              <li className="mb-4">
                <h5 className="font-bold">Crehana, 2021</h5>
                <h4 className="text-white">
                  Git y GitHub: Control de Versiones en Proyectos Web
                </h4>
              </li>
              <li className="mb-4">
                <h5 className="font-bold">Educación Secundaria Completa</h5>
                <h4 className="text-white">Analítico disponible</h4>
              </li>
            </ul>
          </div>

          <div className="contactInfo language mt-8 p-4">
            <h3 className="title text-white">Language</h3>
            <ul className="mt-4">
              <li className="flex justify-between items-center mb-4">
                <span className="text-white pr-2">English</span>
                <div className="h-2 bg-blue-300 w-full relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-500"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </li>
              <li className="flex justify-between items-center mb-4">
                <span className="text-white pr-2">Spanish</span>
                <div className="h-2 bg-blue-300 w-full relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-500"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`right_Side ${darkMode ? "bg-[#003147] text-white" : "bg-white text-black"} p-10 relative z-10 w-[800px]`}
        >
          <div className="about p-10">
            <h2
              className={`${darkMode ? " text-white" : " text-black"} text-gray-700  pb-5 uppercase`}
            >
              Profile
            </h2>
            <p
              className={`${darkMode ? " text-white" : " text-black"} text-gray-700`}
            >
              Valet parking y cajero con más de 10 años de experiencia en
              estacionamientos y hoteles, especializado en atención al cliente,
              manejo responsable de vehículos y administración de caja diaria.
              Experiencia trabajando con clientes exigentes y vehículos de alta
              gama, manteniendo siempre un servicio cordial, ágil y sin
              incidentes. Me caracterizo por la puntualidad, la responsabilidad
              y el cuidado del dinero y los vehículos a cargo
            </p>
          </div>

          <div className="about p-10">
            <h2
              className={`${darkMode ? " text-white" : " text-black"} text-gray-700 pb-5 uppercase`}
            >
              Experience
            </h2>

            <div className="box w-full">
              <div className="year_company mb-4 w-full flex flex-col items-start">
                <h5 className="text-[#03a9f4] uppercase font-bold">
                  Apart Car — Valet Parking y Cajero
                </h5>
                <p
                  className={`${darkMode ? " text-white" : " text-black"} text-gray-700`}
                >
                  Marzo 2012 – Diciembre 2023
                </p>
                <div className="text p-2 w-full">
                  <ul
                    className={`${darkMode ? " text-white" : " text-black"} text-gray-700 list-disc list-inside mt-3 space-y-2`}
                  >
                    <li>
                      Atención directa a clientes y recepción de vehículos
                    </li>
                    <li>
                      Estacionamiento y traslado seguro de vehículos manuales y
                      automáticos
                    </li>
                    <li>Manejo diario de caja y cobro de estadías</li>
                    <li>Control de tickets y registros de ingreso/egreso</li>
                    <li>Resolución de reclamos y situaciones con clientes</li>
                    <li>Coordinación operativa del estacionamiento</li>
                    <li>Control de inventario y reportes diarios</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="year_company mb-4 w-full flex flex-col items-start">
                <h5 className="text-[#03a9f4] uppercase font-bold">
                  Park Hyatt Buenos Aires - Valet Parking
                </h5>
                <p
                  className={`${darkMode ? " text-white" : " text-black"} text-gray-700`}
                >
                  Enero 2011 – Diciembre 2011
                </p>
                <div className="text p-2 w-full">
                  <ul
                    className={`${darkMode ? " text-white" : " text-black"} text-gray-700 list-disc list-inside mt-3 space-y-2`}
                  >
                    <li>Recepción de huéspedes y asistencia con vehículos</li>
                    <li>Manejo de vehículos de alta gama</li>
                    <li>
                      Coordinación con el equipo de recepción y conserjería
                    </li>
                    <li>Atención personalizada a clientes VIP</li>
                    <li>Resolución de situaciones con huéspedes</li>
                    <li>Control de tickets y registros de ingreso/egreso</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="about interest p-10">
            <h2
              className={`${darkMode ? " text-white" : " text-black"} text-gray-700 pb-5 uppercase`}
            >
              Additional Information
            </h2>
            <ul className="space-y-6 flex flex-col w-full">
              <li className="text-[#03a9f4] uppercase flex flex-col items-center w-full">
                <FaCar className="mb-2 text-blue-500 text-3xl" />
                <span className="text-center">
                  Registro de conducir categoría B2
                </span>
              </li>
              <li className="text-[#03a9f4] uppercase flex flex-col items-center w-full">
                <FaClock className="mb-2 text-blue-500 text-3xl" />
                <span className="text-center">Disponibilidad inmediata</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
