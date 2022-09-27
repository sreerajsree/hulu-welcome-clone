import './App.css';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import Main from './components/Main';
import Plans from './components/Plans';
import Pricing from './components/Pricing';
import Tabs from './components/Tabs';
import WaterMark from './components/WaterMark';

function App() {
  return (
    <>
    <WaterMark/>
    <Main />
    <Plans />
    <Tabs />
    <Pricing />
    <Accordion/>
    <Footer/>
    </>
  );
}

export default App;
