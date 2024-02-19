import React from 'react';

const IfoodLink = ({ imageSrc, title, description, buttonText, link }) => {
  return (
    <div className="landing-v2-ifood-link">
      <figure className="landing-v2-ifood-link__image">
        <img src={imageSrc} alt={title} />
      </figure>
      <div className="landing-v2-ifood-link__content">
        <p className="landing-v2-ifood-link__title">{title}</p>
        <p className="landing-v2-ifood-link__description">{description}</p>
        <a
          href={link}
          className="btn btn--default btn--size-m landing-v2-ifood-link__button"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default IfoodLink;

