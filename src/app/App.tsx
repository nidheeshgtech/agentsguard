import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingOrbs } from './components/FloatingOrbs';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const id = location.hash.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [location.pathname, location.hash]);

  return null;
}

function AppShell() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <FloatingOrbs />
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
