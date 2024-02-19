import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HighlightsCarousel = () => {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulando uma chamada à API com json-server
        const response = await axios.get('http://localhost:3000/highlights');
        setHighlights(response.data);
      } catch (error) {
        console.error('Erro ao obter os destaques:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="highlights-carousel" data-test-id="highlights-carousel">
      <div className="highlights-carousel__wrapper">
        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events carousel carousel__fullscreen swiper-backface-hidden">
          <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
            {highlights.map((highlight, index) => (
              <div key={index} className={`swiper-slide ${index === 0 ? 'swiper-slide-active' : ''}`} style={{ marginRight: '12px' }}>
                <div className="highlights-carousel__container">
                  <a href={highlight.link}>
                    <figure className="highlights-carousel__figure">
                      <img
                        src={highlight.image}
                        alt={highlight.alt}
                        className="highlights-carousel__image"
                      />
                    </figure>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-button-prev swiper-button-disabled"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </div>
  );
};

export default HighlightsCarousel;
