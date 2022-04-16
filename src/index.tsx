import ReactDOM from 'react-dom/client';
import App from './App';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

root.render(app);
