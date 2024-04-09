import React from 'react';
import ControlledCarousel from '../components/ControlledCarousel'; // Asegúrate de que la ruta sea correcta

function Home() {
    return (
        <>
            <h1>Holis soy el Home</h1>
            <ControlledCarousel /> {/* Esto insertará tu carrusel en la página Home */}
        </>
    );
}

export default Home;