import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';

// Lazy load non-critical below-the-fold and interactive components
const Footer = lazy(() => import('./components/Footer'));
const FloatingContact = lazy(() => import('./components/FloatingContact'));
const BackToTop = lazy(() => import('./components/BackToTop'));

// Lazy load route components for ultra-fast mobile loading
const Home = lazy(() => import('./pages/Home'));
const Programs = lazy(() => import('./pages/Programs'));
const Support = lazy(() => import('./pages/Support'));
const About = lazy(() => import('./pages/About'));
const DevelopedBy = lazy(() => import('./pages/DevelopedBy'));

function PageLoader() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3">
      <div className="w-9 h-9 rounded-full border-2 border-emerald-500/20 border-t-emerald-500 animate-spin" />
      <span className="font-label-mono text-xs uppercase tracking-widest text-slate-400">Loading</span>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <div key={location.pathname} className="w-full animate-fade-in">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/developed-by" element={<DevelopedBy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Global Background Shader */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-100"></div>
      </div>
      <Navbar />
      <AnimatedRoutes />
      <Suspense fallback={null}>
        <FloatingContact />
        <BackToTop />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}
