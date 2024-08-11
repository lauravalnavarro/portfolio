import React from 'react';
import Card from '../Card/Card';
import './Mosaic.css'; // Asegúrate de tener un archivo CSS para los estilos

const Mosaic = () => {
    const projects = [
        {
          id: 1,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlTwSBWeY4uulfTxxvfenU_9hkhoBGXdF0dw&s',
          title: 'Página web Studio de Yoga',
          description: 'Desarrollé un sitio web interactivo para un estudio de yoga que incluye una agenda de clases, perfil de instructores, y un formulario de inscripción en línea.',
          link: 'https://example.com/proyecto1'
        },
        {
          id: 2,
          image: 'https://images.klipfolio.com/website/public/5a275fee-d42b-4f31-91f6-8148d4d729af/executive%20dashboard.png',
          title: 'Dashboard para visualizar tableros',
          description: 'Creé un dashboard dinámico para visualizar métricas en tiempo real, con gráficos interactivos y filtros personalizables para analizar datos de negocio.',
          link: 'https://example.com/proyecto2'
        },
        {
          id: 3,
          image: 'https://guidable.co/wp-content/uploads/2018/06/online-res-18-1024x588.png',
          title: 'Aplicación de Reserva restaurante',
          description: 'Desarrollé una aplicación web para manejar las reservas de un restaurante.',
          link: 'https://example.com/proyecto3'
        },
        {
          id: 4,
          image: 'https://media.licdn.com/dms/image/D4E12AQGOrcvDXyJZpg/article-cover_image-shrink_600_2000/0/1686702761381?e=2147483647&v=beta&t=GALsu8jEP95cKLNoi_aLFugylsPjfSGLBkMp_y4CxXM',
          title: 'Sistema de Gestión de Inventarios',
          description: 'Construí un sistema web para la gestión de inventarios que permite el seguimiento de productos, generación de reportes y alertas de stock bajo.',
          link: 'https://example.com/proyecto4'
        },
      ];
      

      return (
        <section id="projects" className="projects-section">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Card
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
                className={index % 2 === 0 ? 'large' : 'wide'} 
              />
            ))}
          </div>
        </section>
      );
}

export default Mosaic;
