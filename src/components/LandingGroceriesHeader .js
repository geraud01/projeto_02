import React from 'react';

const LandingGroceriesHeader = () => {
  // Array de tags
  const tags = [
    'Frios',
    'Laticínios',
    'Feira',
    'Bebidas',
    'Doces',
    'Massas frescas',
    'Limpeza',
    'Padaria',
    'Higiene',
    'Congelados',
    'Carnes',
    'Cerveja',
  ];

  return (
    <div className="landing-groceries-header">
      <div className="landing-groceries-header__texts">
        <h1 className="landing-groceries-header__title landing-groceries-header__text">
          Faça mercado no iFood
        </h1>
        <p className="landing-groceries-header__description landing-groceries-header__text">
          Entregamos tudo o que precisa na porta da sua casa, de hortifruti a itens de limpeza
        </p>
      </div>
      <form className="landing-groceries-header__form">
        <div className="landing-groceries-header__input-wrapper landing-groceries-header__field">
          <span className="icon-marmita icon-marmita--search landing-groceries-header__search-icon">
            {/* Ícone de pesquisa */}
          </span>
          <input className="landing-groceries-header__input" placeholder="Em qual endereço você está?" />
        </div>
        <button type="submit" className="landing-groceries-header__button landing-groceries-header__field">
          Ver mercados próximos
        </button>
      </form>
      <div className="landing-groceries-header__tags">
        {tags.map((tag, index) => (
          <button key={index} className="landing-groceries-header__tag-wrapper">
            <h2 className="landing-groceries-header__tag">{tag}</h2>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LandingGroceriesHeader;

