import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import HomeBody from './components/home';
import Hero from './components/hero/hero';
import {RecipeAdd} from './components/forms/recipe/recipe';
import NavDark from './components/nav/nav';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
      <NavDark />
      <Hero />
      <HomeBody />
      <RecipeAdd />
  </StrictMode>
);
