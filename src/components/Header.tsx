import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // 스크롤 감지 로직: 스크롤을 내리면 숨기고(true), 올리면 보임(false)
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // 150px 이상 스크롤했고, 아래로 내려가는 중이면 헤더 숨김
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // 페이지 이동 시 모바일 메뉴 자동으로 닫기
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // 메뉴 리스트
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'PROJECTS', path: '/projects' },
  ];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 lg:px-20 py-5 mix-blend-difference text-white"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* 로고 */}
          <Link to="/" className="text-2xl font-galmuri font-bold tracking-tighter hover:opacity-70 transition-opacity">
            DOHY-EON
          </Link>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:flex gap-10 text-sm font-bold font-galmuri tracking-widest">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="relative group overflow-hidden"
              >
                {/* 호버 시 밑줄 애니메이션 */}
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                  {link.name}
                </span>
                <span className="absolute top-0 left-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-violet-400">
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <button
            className="md:hidden z-50 flex flex-col justify-center items-end gap-1.5 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div 
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-8 h-0.5 bg-white origin-center" 
            />
            <motion.div 
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white group-hover:w-8 transition-all" 
            />
            <motion.div 
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-4 h-0.5 bg-white group-hover:w-8 transition-all origin-center" 
            />
          </button>
        </div>
      </motion.header>

      {/* 모바일 전체화면 메뉴 오버레이 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }} // 커스텀 베지어 곡선
            className="fixed inset-0 z-[90] bg-black flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link 
                    to={link.path} 
                    className="text-5xl font-galmuri font-bold text-white hover:text-violet-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

