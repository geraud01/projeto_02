// FooterLink.js
import React from 'react';

const FooterLink = ({ href, title }) => {
  return (
    <li className="footer__list-item">
      <a href={href} target="_blank" className="footer__text-link" rel="noopener noreferrer" title={title}>
        {title}
      </a>
    </li>
  );
};

export default FooterLink;
