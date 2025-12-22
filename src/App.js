import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ui/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookConsultationPage from './pages/BookConsultationPage';
import NotFoundPage from './pages/NotFoundPage';

// UI Components
import BackToTop from './components/ui/BackToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-consultation" element={<BookConsultationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <BackToTop />
      </Layout>
    </Router>
  );
}

export default App;
