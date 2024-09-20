import React from "react";
import "./Main.css";

const MainContent = () => {
  return (
    <main className="Main">
      <section className="textoSection">
        <p>
          A culinária europeia é extremamente diversificada, refletindo a vasta
          gama de culturas, tradições e ingredientes encontrados no continente.
          Dos pratos de massas italianos aos sofisticados queijos franceses,
          passando pelos pescados frescos da Noruega, a gastronomia da Europa é
          rica em sabores e histórias regionais.
        </p>
        <p>
          Cada país europeu tem suas especialidades: a França é famosa pelos
          croissants e vinhos, a Itália pelas massas e pizzas, a Espanha pelas
          tapas e paellas, e a Alemanha pelas salsichas e cervejas. Esses pratos
          tradicionais são símbolos culturais e atraem milhões de turistas a
          cada ano, tornando a Europa um destino culinário imperdível.
        </p>
      </section>
      <section className="imagemSection">
        <img
          src="src/assets/culinaria1.webp"
          alt="Imagem de homem cozinhando"
        />
        <img src="src/assets/culinaria2.webp" alt="Imagem de pizza" />
      </section>
    </main>
  );
};

export default MainContent;
