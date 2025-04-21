import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WishlistProvider } from './pages/WishlistContext';
import { LanguageProvider } from './components/LanguageContext.jsx'; // ✅ Import this

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WishlistProvider>
      <LanguageProvider> {/* ✅ Wrap App here */}
        <App />
      </LanguageProvider>
    </WishlistProvider>
  </React.StrictMode>
);
