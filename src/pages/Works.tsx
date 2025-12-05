import { useRef } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../constants/data";
import Footer from "../components/Footer";

const Works = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 카드 애니메이션 variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black">
      {/* 헤더 섹션 */}
      <section className="relative flex items-start justify-center overflow-hidden mb-8">
        {/* 배경 그리드 패턴 */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
               backgroundSize: '80px 80px' 
             }} 
        />
        
        {/* 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 via-transparent to-transparent" style={{ height: '70%' }} />
        
        <div className="relative z-10 text-center px-6 md:px-12 lg:px-20 pt-20 pb-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-galmuri font-black mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
              PROJECTS
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            실제 문제를 기술과 UX로 풀어낸 작업들을 모았습니다.
          </motion.p>
        </div>
      </section>

      {/* 프로젝트 그리드 섹션 */}
      <section ref={containerRef} className="relative px-6 md:px-12 lg:px-20 pt-8 md:pt-12 lg:pt-16 pb-4 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* 그리드 레이아웃 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="h-full"
              >
                <div className="h-full transform transition-transform duration-300 hover:scale-[1.02]">
                  <ProjectCard project={project} variant="grid" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Works;
