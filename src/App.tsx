/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Support from './pages/Support';
import About from './pages/About';
import DevelopedBy from './pages/DevelopedBy';
import FloatingContact from './components/FloatingContact';
import BackToTop from './components/BackToTop';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error - key is required for AnimatePresence to detect route changes */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/programs" element={
          <PageTransition>
            <Programs />
          </PageTransition>
        } />
        <Route path="/support" element={
          <PageTransition>
            <Support />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <About />
          </PageTransition>
        } />
        <Route path="/developed-by" element={
          <PageTransition>
            <DevelopedBy />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Global Background Shader */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-100"></div>
      </div>
      <Navbar />
      <AnimatedRoutes />
      <FloatingContact />
      <BackToTop />
      <Footer />
    </BrowserRouter>
  );
}
