import { motion } from "framer-motion";
import { ReactNode } from "react";

// 애니메이션 설정 (검은색 슬라이드가 위로 올라가는 효과)
const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1] as const, // easeInOutCustom
    },
  },
  exit: {
    height: "100vh",
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1] as const,
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    opacity: 0,
  },
};

interface Props {
  children: ReactNode;
}

const PageTransition = ({ children }: Props) => {
  return (
    <>
      {/* 검은색 배경 애니메이션 */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={blackBox}
        onAnimationStart={() => {
          if (document.body) {
            document.body.classList.add("overflow-hidden");
          }
        }}
        onAnimationComplete={() => {
          if (document.body) {
            document.body.classList.remove("overflow-hidden");
          }
        }}
      >
        {/* 로딩 중에 잠깐 보여줄 텍스트 (선택사항) */}
        <motion.div 
          variants={textContainer} 
          className="absolute z-50 flex items-center text-white text-4xl font-bold font-galmuri"
        >
          Loading...
        </motion.div>
      </motion.div>

      {/* 실제 페이지 내용 */}
      {children}
    </>
  );
};

export default PageTransition;

