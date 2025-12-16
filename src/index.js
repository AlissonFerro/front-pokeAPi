import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeColorProvider, ThemeContextProvider } from './Context/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeColorProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ThemeColorProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();