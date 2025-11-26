import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';

// Components
import Cursor from './components/Cursor';
import Header from './components/Header';
import PageTransition from './components/PageTransition';

// 라우트 변경을 감지하고 애니메이션을 적용하는 래퍼 컴포넌트
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // mode="wait": 이전 페이지 애니메이션이 끝나야 다음 페이지가 나옴
    <AnimatePresence mode="wait">
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
          path="/contact" 
          element={
            <PageTransition>
              <Contact />
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
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
        {/* 커서는 가장 위에 배치 */}
        <Cursor />
        
        {/* 헤더를 라우터 내부에, Routes 외부에 배치 */}
        <Header />
        
        <AnimatedRoutes />
    </Router>
  );
}

export default App;
