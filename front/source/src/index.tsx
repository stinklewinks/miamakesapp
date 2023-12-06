
import ReactDOM from 'react-dom/client';
import HomeBody from './components/home';
import Hero from './components/hero';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <Hero />
  <HomeBody />
  
  </>
);
