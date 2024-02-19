import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Simula uma chamada à API usando json-server
    axios.get('http://localhost:3000/restaurants')
      .then(response => setRestaurants(response.data))
      .catch(error => console.error('Erro ao obter dados da API:', error));
  }, []); // O segundo argumento vazio faz com que o efeito só seja executado uma vez, semelhante ao componentDidMount

  return (
    <div>
      <div className="marmita-toastr-container marmita-toastr-container--error">
        <div className="marmita-toastr">
          <span className="icon-marmita marmita-toastr__icon">
            <svg width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.333 21.9987H18.6663V25.332H15.333V21.9987ZM15.333 8.66537H18.6663V18.6654H15.333V8.66537ZM16.983 0.332031C7.78301 0.332031 0.333008 7.7987 0.333008 16.9987C0.333008 26.1987 7.78301 33.6654 16.983 33.6654C26.1997 33.6654 33.6663 26.1987 33.6663 16.9987C33.6663 7.7987 26.1997 0.332031 16.983 0.332031ZM16.9997 30.332C9.63301 30.332 3.66634 24.3654 3.66634 16.9987C3.66634 9.63203 9.63301 3.66536 16.9997 3.66536C24.3663 3.66536 30.333 9.63203 30.333 16.9987C30.333 24.3654 24.3663 30.332 16.9997 30.332Z">
              </path>
            </svg>
          </span>
          <span className="marmita-toastr__message" aria-hidden="true"></span>
        </div>
      </div>
      <main className="main-layout">
        <div className="landing-v2">
          <div id="gpt-landing-topo" className="ads-banner landing-v2__ads-top"></div>
          <section className="landing-v2-merchants">
            <h2 className="landing-v2-merchants__title">Os melhores restaurantes</h2>
            <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events carousel carousel__fullscreen swiper-backface-hidden">
              <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                {restaurants.map((restaurant, index) => (
                  <div key={index} className="swiper-slide swiper-slide-active" style={{ marginRight: '12px' }}>
                    <a className="landing-v2-merchant" href="/restaurantes">
                      <span style={{ display: 'inline-block', overflow: 'hidden', position: 'relative', maxWidth: '100%' }}>
                        <span style={{ display: 'block', maxWidth: '100%' }}>
                          <img alt="" aria-hidden="true" src={restaurant.logo} style={{ display: 'block', maxWidth: '100%' }} />
                        </span>
                        <img
                          alt={restaurant.name}
                          crossOrigin="anonymous"
                          src={restaurant.logo}
                          decoding="async"
                          className="landing-v2-merchant__logo"
                          style={{
                            position: 'absolute',
                            inset: '0px',
                            boxSizing: 'border-box',
                            padding: '0px',
                            border: 'none',
                            margin: 'auto',
                            display: 'block',
                            width: '0px',
                            height: '0px',
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </span>
                      <div>
                        <h3 className="landing-v2-merchant__name">{restaurant.name}</h3>
                        <p className="landing-v2-merchant__description">{restaurant.description}</p>
                        <p className="landing-v2-merchant__delivery-time">
                          {restaurant.deliveryTime} min &middot; Frete R${restaurant.deliveryFee.toFixed(2)}
                        </p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
              <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
          </section>
        </div>
      </main>
      <div id="gpt-landing-rodape" className="ads-banner"></div>
    </div>
  );
};

export default App;
