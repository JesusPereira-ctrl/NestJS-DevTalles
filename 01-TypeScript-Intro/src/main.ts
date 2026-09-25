import './style.css';

// import { age, name } from './bases/01-types';
// import { pokemons } from './bases/02-objects';
import { charmander } from './bases/03-classes';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello ${charmander.name} ${charmander.id}!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
