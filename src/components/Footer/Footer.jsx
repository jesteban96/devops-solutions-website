import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Información de la Empresa */}
          <div className="col-md-6 text-center text-md-start">
            <h2 className="h5">Devops Solutions</h2>
            <p className="text-secondary">Empresa de software · Telecomunicaciones</p>
            <p className="d-flex align-items-center gap-2 text-light">
              <FaMapMarkerAlt /> Riohacha, La Guajira, Colombia, 44001
            </p>
            <p className="d-flex align-items-center gap-2 text-light">
              <FaEnvelope /> <a href="mailto:info@devopssolutions.com" className="text-light text-decoration-none">info@devopssolutions.com</a>
            </p>
            <p className="d-flex align-items-center gap-2 text-light">
              <FaGlobe /> <a href="http://devopssolutions.com/" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">devopssolutions.com</a>
            </p>
          </div>

          {/* Redes Sociales */}
          <div className="col-md-6 text-center text-md-end">
            <h3 className="h6">Síguenos en:</h3>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://www.facebook.com/share/1BMQWbDVku/" target="_blank" rel="noopener noreferrer" className="text-light fs-3">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/devops_solutions_oficial?igsh=MXNycTh6ZnJzOHl5dQ==" target="_blank" rel="noopener noreferrer" className="text-light fs-3">
                <FaInstagram />
              </a>
              <a href="https://wa.me/573015357272?text=Hola,%20quiero%20más%20información%20sobre%20Devops%20Solutions." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light fs-3">
                <FaWhatsapp />
            </a>
            </div>
            <p className="text-secondary mt-2">WhatsApp: <a href="https://wa.me/573015357272" className="text-light text-decoration-none">+57 301 535 7272</a></p>
          </div>
        </div>

        {/* Derechos Reservados */}
        <div className="text-center text-secondary mt-3 border-top pt-3">
          © {new Date().getFullYear()} Devops Solutions. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
