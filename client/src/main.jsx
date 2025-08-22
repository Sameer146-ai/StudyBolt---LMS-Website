import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AppContextProvider } from './context/AppContextProvider.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

// const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-4c5uc7l6bywds61n.us.auth0.com"
      clientId="YFGJ8ri1dqzYwHhUo5WZiAhcITssKH9G"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Auth0Provider>
  </BrowserRouter>
);
