import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{
        fontFamily: '"Nunito", sans-serif',
      }}>
      <Home />
    </MantineProvider>
  </React.StrictMode>,
);
