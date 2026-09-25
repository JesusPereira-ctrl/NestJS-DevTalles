import './style.css';

// import { age, name } from './bases/01-types';
import { bulbasaur } from './bases/02-objects';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello ${bulbasaur.name}!!!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
