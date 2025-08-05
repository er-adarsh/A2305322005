import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import UrlShortener from './pages/urlShortener';
import UrlStats from './pages/UrlStats';
import NotFound from './pages/NotFound';
import RedirectHandler from './components/RedirectHandler';
import { logger } from './services/logging';
import { UrlProvider } from './context/UrlContext'; // Add this import

const theme = createTheme();

function App() {
  logger.info('App initialized');
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UrlProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UrlShortener />} />
          <Route path="/stats" element={<UrlStats />} />
          <Route path="/:shortCode" element={<RedirectHandler />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </UrlProvider>
    </ThemeProvider>
  );
}

export default App;