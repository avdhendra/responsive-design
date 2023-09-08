
import './App.scss';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import LatestArticles from './components/LatestArticles/LatestArticles';
import TopPage from './components/TopPage/TopPage';

function App() {
  return (
    <div className='main'>
      <TopPage />
      <AboutUs />
      <LatestArticles />
      <ContactUs/>
    </div>
  );
}

export default App;
