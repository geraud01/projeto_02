import './App.css';
import NoScriptBlock from './components/NoScriptBlock';
import FbRootDiv from './components/FbRootDiv';
import NextDiv from './components/NextDiv';
import HeaderSection from './components/HeaderSection';
import LandingGroceriesHeader from './components/LandingGroceriesHeader '; 
import LandingMultiCategories from './components/LandingMultiCategories';
import RestaurantList from './components/RestaurantList';
import HighlightsCarousel from './components/HighlightsCarousel';
import MerchantCarousel from './components/MerchantCarousel';
import IfoodLinksContainer from './components/IfoodLinks/IfoodLinksContainer';

const App = () => {
  return (
    <div>
      <NoScriptBlock />
      <FbRootDiv />
      <NextDiv />
      <HeaderSection />
      <LandingGroceriesHeader />
      <LandingMultiCategories />
      <RestaurantList />
      <HighlightsCarousel />
      <MerchantCarousel />
      <IfoodLinksContainer />
    </div>
  );
};

export default App;
