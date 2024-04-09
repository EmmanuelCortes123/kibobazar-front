import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ControlledCarousel.css'; // Asegúrate de que la ruta es correcta

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, event) => {
    setIndex(selectedIndex);
  };

  // Aquí tienes un array que contiene arrays de URLs de imágenes para cada slide
  const slides = [
    ["https://picsum.photos/800/400?random=1", "https://picsum.photos/800/400?random=2", "https://picsum.photos/800/400?random=3", "https://picsum.photos/800/400?random=4", "https://picsum.photos/800/400?random=5"],
    ["https://picsum.photos/800/400?random=6", "https://picsum.photos/800/400?random=7", "https://picsum.photos/800/400?random=8", "https://picsum.photos/800/400?random=9", "https://picsum.photos/800/400?random=10"],
    // ... y así sucesivamente para los demás slides
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <div className="slide-content">
            {slide.map((image, index) => (
              <img
                key={index}
                className="d-block img-fluid"
                src={image}
                alt={`Slide image ${index}`}
              />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
