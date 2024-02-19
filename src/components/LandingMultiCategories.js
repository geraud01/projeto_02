import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LandingMultiCategories = () => {
  const [categories, setCategories] = useState([]);
  const [smallLinks, setSmallLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get('http://localhost:3000/categories');
        const smallLinksResponse = await axios.get('http://localhost:3000/smallLinks');

        setCategories(categoriesResponse.data);
        setSmallLinks(smallLinksResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="landing-v2-multi-categories">
      <div className="landing-v2-multi-categories__wrapper">
        <div className="landing-v2-multi-categories__main-categories">
          {categories.map(category => (
            <div key={category.id} className="landing-v2-multi-categories__big-category">
              <a className={`landing-v2-multi-categories-big-link landing-v2-multi-categories-big-link--${category.title.toLowerCase()}`} href={category.link}>
                <span className="landing-v2-multi-categories-big-link__foods landing-v2-multi-categories-big-link__foods--left"></span>
                <span className="landing-v2-multi-categories-big-link__foods landing-v2-multi-categories-big-link__foods--right"></span>
                <div className="landing-v2-multi-categories-big-link__container">
                  <p className="landing-v2-multi-categories-big-link__title">{category.title}</p>
                  <figure className="landing-v2-multi-categories-big-link__image-container">
                    <img className={`landing-v2-multi-categories-big-link__image landing-v2-multi-categories-big-link__image--${category.title.toLowerCase()}`} src={category.image} alt={`Ver opções de ${category.title}`} />
                  </figure>
                  <div className={`landing-v2-multi-categories-big-link__link landing-v2-multi-categories-big-link__link--${category.title.toLowerCase()}`}>
                    Ver opções
                    <span className="icon-marmita icon-marmita--arrow-right-thin landing-v2-multi-categories-big-link__icon">
                      {/* Ícone de seta para a direita */}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="landing-v2-multi-categories__carousel">
        {smallLinks.map(smallLink => (
          <a key={smallLink.id} className="landing-v2-multi-categories-small-link" href={smallLink.link}>
            <figure className={`landing-v2-multi-categories-small-link__image-wrapper landing-v2-multi-categories-small-link__image-wrapper--${smallLink.title.toLowerCase()}`}>
              <img className={`landing-v2-multi-categories-small-link__image landing-v2-multi-categories-small-link__image--${smallLink.title.toLowerCase()}`} src={smallLink.image} alt={smallLink.title} />
            </figure>
            <p className="landing-v2-multi-categories-small-link__title">
              {smallLink.title}
              <span className="icon-marmita icon-marmita--arrow-right-thin landing-v2-multi-categories-small-link__icon">
                {/* Ícone de seta para a direita */}
              </span>
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default LandingMultiCategories;
