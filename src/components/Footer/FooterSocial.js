// FooterSocial.js
import React from 'react';

const FooterSocial = ({ title, icon, link }) => {
  return (
    <li>
      <a href={link} className="btn btn--transparent btn--size-m btn--iconize footer__social-icon btn-icon btn-icon--transparent" target="_blank" rel="noopener">
        <span className={`icon-marmita ${icon} btn__icon`}></span>
        <span className="footer__social-title">{title}</span>
      </a>
    </li>
  );
};

export default FooterSocial;
