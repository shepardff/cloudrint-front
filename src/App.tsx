import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import SettingsPage from './pages/SettingsPage';
import PhotoPage from './pages/PhotoPage';
import OrderPage from './pages/OrderPage';
import PhotoEditPage from './pages/PhotoEditPage';
import InfoPage from './pages/InfoPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminOrdersPage from './pages/AdminOrdersPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import EditorPage from './pages/EditorPage';
import { Container } from '@mui/material';

const theme = {
  colors: {
    carrotOrange: '#ed8e1e',
    christine: '#e36910',
    silver: '#CECDCD',
    charcoal: '#444',
  },
  fontFamily: 'Open-Sans, sans-serif',
  fontWeight: '300',
  color: '#444',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={'lg'}
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '25px',
          paddingRight: '25px',
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/order/:id" element={<SettingsPage />} />
            <Route path="/order/:id/photos" element={<PhotoPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/photo/edit" element={<PhotoEditPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/admin" element={<AdminLoginPage />} />
            <Route path="/admin/orders" element={<AdminOrdersPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/editor" element={<EditorPage />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
