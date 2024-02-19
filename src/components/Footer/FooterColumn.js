// FooterColumn.js
import React from 'react';

const FooterColumn = ({ title, children }) => {
  return (
    <div className="footer__column">
      <h3 className="footer__subtitle">{title}</h3>
      <ul className="footer__links-list">{children}</ul>
    </div>
  );
};

export default FooterColumn;
