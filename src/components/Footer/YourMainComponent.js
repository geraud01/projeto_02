// YourMainComponent.js
import React from 'react';
import Footer from './Footer';
import FooterAboutSection from './FooterAboutSection';
import FooterColumn from './FooterColumn';
import FooterLink from './FooterLink';
import FooterSocial from './FooterSocial';

const YourMainComponent = () => {
  return (
    <div>
      {/* ... Other components ... */}
      <Footer>
        <FooterAboutSection />
        <FooterColumn title="iFood">
          <FooterLink href="https://institucional.ifood.com.br?utm_source=site_ifood" title="Site Institucional" />
          {/* ... Other links ... */}
        </FooterColumn>
        <FooterColumn title="Descubra">
          <FooterLink href="https://parceiros.ifood.com.br/" title="Cadastre seu Restaurante ou Mercado" />
          {/* ... Other links ... */}
        </FooterColumn>
        <FooterColumn title="Social">
          <ul className="footer__social">
            <FooterSocial title="Facebook" icon="icon-marmita--social-facebook" link="https://www.facebook.com/iFood/" />
            {/* ... Other social links ... */}
          </ul>
        </FooterColumn>
      </Footer>
    </div>
  );
};

export default YourMainComponent;
