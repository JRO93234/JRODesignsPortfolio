import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import TheTinyCloset from './pages/TheTinyCloset';
import Plannery from './pages/Plannery';
import AquaPure from './pages/AquaPure';

// Context providers
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/the-tiny-closet" element={<TheTinyCloset />} />
              <Route path="/plannery" element={<Plannery />} />
              <Route path="/aqua-pure" element={<AquaPure />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;