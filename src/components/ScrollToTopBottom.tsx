import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTopBottom = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isVisible, setIsVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const lenis = (window as any).lenis;
      
      let scrollY: number;
      if (lenis) {
        scrollY = lenis.scroll;
      } else {
        scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      }

      // 상단 근처인지 확인 (100px 이내)
      const nearTop = scrollY < 100;

      setIsAtTop(nearTop);
      setIsVisible(nearTop || scrollY > 300);
    };

    // requestAnimationFrame을 사용하여 주기적으로 체크
    let rafId: number;
    const checkScroll = () => {
      handleScroll();
      rafId = requestAnimationFrame(checkScroll);
    };
    
    rafId = requestAnimationFrame(checkScroll);

    // 초기 상태 확인
    handleScroll();

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const handleClick = () => {
    const lenis = (window as any).lenis;
    
    if (isAtTop) {
      // 상단에 있으면 하단으로
      if (lenis) {
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const maxScroll = documentHeight - windowHeight;
        lenis.scrollTo(maxScroll, { duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
      }
    } else {
      // 하단이 아니면 상단으로
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // 메인 화면이 아니거나 스크롤이 충분하지 않으면 표시하지 않음
  if (!isHomePage || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed bottom-8 right-8 z-40"
      >
        {/* Liquid Glass 효과의 단일 버튼 */}
        <motion.button
          onClick={handleClick}
          className="relative w-14 h-14 rounded-full overflow-hidden group"
          aria-label={isAtTop ? "맨 아래로 이동" : "맨 위로 이동"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Liquid Glass 배경 */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl" />
          
          {/* 반사 효과 (상단 하이라이트) */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full" />
          
          {/* 그라데이션 보더 효과 */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-400/50 via-purple-400/30 to-pink-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* 아이콘 컨테이너 */}
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              key={isAtTop ? 'down' : 'up'}
              initial={{ opacity: 0, rotate: isAtTop ? -180 : 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: isAtTop ? 180 : -180 }}
              transition={{ duration: 0.3 }}
              className="text-white"
            >
              {isAtTop ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6 drop-shadow-lg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6 drop-shadow-lg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
              )}
            </motion.div>
          </div>
          
          {/* 호버 시 빛나는 효과 */}
          <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-500" />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollToTopBottom;
