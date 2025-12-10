import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Pages
import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';
import Skills from './pages/Skills';

// Components
import Cursor from './components/Cursor';
import Header from './components/Header';
import PageTransition from './components/PageTransition';
import ScrollToTopBottom from './components/ScrollToTopBottom';

// 라우트 변경을 감지하고 애니메이션을 적용하는 래퍼 컴포넌트
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // mode="sync": 이전 페이지와 다음 페이지가 동시에 애니메이션되어 더 빠른 전환
    <AnimatePresence mode="sync">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          } 
        />
        <Route 
          path="/projects" 
          element={
            <PageTransition>
              <Works />
            </PageTransition>
          } 
        />
        <Route 
          path="/about" 
          element={
            <PageTransition>
              <About />
            </PageTransition>
          } 
        />
        <Route 
          path="/skills" 
          element={
            <PageTransition>
              <Skills />
            </PageTransition>
          } 
        />
        <Route 
          path="/projects/:id" 
          element={
            <PageTransition>
              <ProjectDetail />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
    // Lenis 스크롤 설정 (페이지 이동 시 스크롤 최상단 이동 처리는 라우터가 하거나 Lenis가 처리)
    const lenis = new Lenis();
    
    // 전역에서 접근 가능하도록 window 객체에 저장
    (window as any).lenis = lenis;
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
          {/* 커서는 가장 위에 배치 */}
          <Cursor />
          
          {/* 헤더를 라우터 내부에, Routes 외부에 배치 */}
          <Header />
          
          <AnimatedRoutes />
          
          {/* 플로팅 스크롤 버튼 */}
          <ScrollToTopBottom />
      </Router>
    </HelmetProvider>
  );
}

export default App;
