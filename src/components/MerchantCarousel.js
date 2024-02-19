import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const MerchantCarousel = () => {
  const [swiper, setSwiper] = useState(null);

  const slides = [
    {
      name: 'Dia Supermercado',
      logo: 'https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/0dbcb1e9-b354-4306-b0f7-d485ac655131/202004061634_lP8b_.jpeg?imwidth=128',
      link: '/mercados/dia-supermercado',
    },
    {
      name: 'Big',
      logo: 'https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/202010121938_31dbd467-bb46-4884-8879-e545789acc39.png?imwidth=128',
      link: '/mercados/big',
    },
    {
      name: 'Eataly',
      logo: 'https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/595f29c3-3264-4e74-8089-cec0421420fb/202002101723_dmdz_i.jpg?imwidth=128',
      link: '/mercados/eataly',
    },
  ];

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <section className="landing-v2-merchants">
      <h2 className="landing-v2-merchants__title">Os melhores mercados</h2>
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        slidesPerView={1}
        spaceBetween={12}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <a className="landing-v2-merchant" href={slide.link}>
              <span>
                <img
                  alt=""
                  src={slide.logo}
                  className="landing-v2-merchant__logo"
                />
                <div>
                  <h3 className="landing-v2-merchant__name">{slide.name}</h3>
                </div>
              </span>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev swiper-button-disabled" onClick={handlePrev}></div>
      <div className="swiper-button-next" onClick={handleNext}></div>
    </section>
  );
};

export default MerchantCarousel;

