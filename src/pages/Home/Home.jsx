import Mosaic from '../../components/Mosaic/Mosaic';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="hero-title">
          <span className="typed-text">Bienvenid@ a Mi Portafolio</span>
        </h1>
        <p className="hero-description">
          Soy Laura Valeria Navarro, una desarrolladora apasionada por la programación y el aprendizaje. 
          Explora mis proyectos y conoce más sobre mi experiencia.
        </p>
      </div>
    </div>
    <section id="projects" className="projects-section">
      <h2>Proyectos Destacados</h2>
      <Mosaic/>
    </section>
    <section id="contact" className="contact-section">
      <h2>¡Conectemos!</h2>
      <p>¿Interesado en trabajar conmigo? No dudes en <a href="mailto:tuemail@example.com">enviarme un correo electrónico</a>.</p>
    </section>
</div>

  );
}

export default Home;