import React from 'react';
import 'animate.css/animate.min.css';
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.css";

// Hero Section Animation
const heroVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

// Services Animation
const serviceVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const Home = () => {
  return (
    <div className="home-container home-container animate__animated animate__fadeIn">
      {/* Hero Section */}
      <motion.section className="hero" variants={heroVariants} initial="hidden" animate="visible">
        <h1>Impulsa tu negocio con <span>Devops Solutions</span></h1>
        <p>Desarrollamos sitios web y aplicaciones para llevar tu negocio al siguiente nivel.</p>
        <Link to="/contact" className="btn-cta">Solicita una consulta gratuita</Link>
      </motion.section>

      {/* Servicios */}
      <section className="services">
        <h2>Nuestros Servicios</h2>
        <div className="service-list">
          <motion.div className="service-card" variants={serviceVariants} initial="hidden" whileInView="visible">
            <FaLaptopCode className="service-icon" />
            <h3>Desarrollo Web</h3>
            <p>Diseño y desarrollo de sitios web modernos y eficientes.</p>
          </motion.div>

          <motion.div className="service-card" variants={serviceVariants} initial="hidden" whileInView="visible">
            <FaMobileAlt className="service-icon" />
            <h3>Apps Móviles</h3>
            <p>Creación de aplicaciones para iOS y Android con tecnología avanzada.</p>
          </motion.div>

          <motion.div className="service-card" variants={serviceVariants} initial="hidden" whileInView="visible">
            <FaGlobe className="service-icon" />
            <h3>SEO y Optimización</h3>
            <p>Mejora el posicionamiento de tu sitio web en Google.</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="testimonials">
        <h2>Lo que dicen nuestros clientes</h2>
        <motion.div className="testimonial" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
          <p>"Devops Solutions transformó nuestro negocio con una web increíble. ¡Totalmente recomendado!"</p>
          <h4>- Juan Pérez, CEO de TechCorp</h4>
        </motion.div>
      </section>

      {/* CTA Final */}
      <section className="cta">
        <h2>¡Hablemos de tu proyecto!</h2>
        <p>Te ayudamos a construir una solución digital a la medida de tu negocio.</p>
        <Link to="/contact" className="btn-cta">Contactar</Link>
      </section>
    </div>
  );
};

export default Home;

