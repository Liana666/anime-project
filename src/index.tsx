import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';
import './index.css';
import './firebase';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

const app = (
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>

    </BrowserRouter>
  </StrictMode>
);

root.render(app);
