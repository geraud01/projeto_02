import React, { useEffect, useState } from 'react';

const FoodLoverBanner = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    // Simular uma chamada à API usando json-server
    fetch('http://localhost:3000/foodLoverBanner')
      .then(response => response.json())
      .then(data => setBannerData(data))
      .catch(error => console.error('Error fetching banner data:', error));
  }, []);

  return (
    <section className="food-lover-banner">
      {bannerData && (
        <>
          <h2 className="food-lover-banner__title">{bannerData.title}</h2>
          <img
            alt={bannerData.imageAlt}
            src={bannerData.imageUrl}
            className="marmita-image--responsive food-lover-banner__image"
          />
          <div className="food-lover-banner__content">
            <p className="food-lover-banner__content-text">{bannerData.contentText}</p>
            <a
              className="food-lover-banner__content-action"
              href={bannerData.actionLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {bannerData.actionText}
            </a>
          </div>
        </>
      )}
    </section>
  );
};

export default FoodLoverBanner;
