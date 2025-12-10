import { Helmet } from 'react-helmet-async';
import { useRef, useMemo, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SKILLS } from "../constants/data";
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

// 타입 정의
type SkillCategory = string;

interface Skill {
  name: string;
  level: number;
  isMain?: boolean;
  category?: SkillCategory;
}

interface SkillCardProps {
  skill: Skill;
  variant: "main" | "other";
  onRefAdd: (el: HTMLDivElement | null) => void;
}

interface SkillCategorySectionProps {
  category: string;
  skills: Skill[];
  onRefAdd: (el: HTMLDivElement | null) => void;
}

// 유틸리티 함수
const getLevelNumber = (level: number): number => {
  return level;
};

const getLevelColorClasses = (levelNumber: number) => {
  // 레벨 숫자에 따라 색상 결정
  if (levelNumber >= 4) {
    return {
      text: "text-green-400",
      bg: "bg-green-400/15",
      border: "border-green-400/30",
      hoverBorder: "hover:border-green-400/50",
      hoverBg: "hover:bg-green-400/20",
      hoverShadow: "hover:shadow-green-400/20",
      glow: "shadow-green-400/10",
      gradient: "from-green-400/10 via-green-400/5 to-transparent",
    };
  } else if (levelNumber === 3) {
    return {
      text: "text-blue-400",
      bg: "bg-blue-400/15",
      border: "border-blue-400/30",
      hoverBorder: "hover:border-blue-400/50",
      hoverBg: "hover:bg-blue-400/20",
      hoverShadow: "hover:shadow-blue-400/20",
      glow: "shadow-blue-400/10",
      gradient: "from-blue-400/10 via-blue-400/5 to-transparent",
    };
  } else {
    return {
      text: "text-gray-400",
      bg: "bg-gray-400/15",
      border: "border-gray-400/30",
      hoverBorder: "hover:border-gray-400/50",
      hoverBg: "hover:bg-gray-400/20",
      hoverShadow: "",
      glow: "",
      gradient: "from-gray-400/10 via-gray-400/5 to-transparent",
    };
  }
};

// 스킬 카드 컴포넌트
const SkillCard = ({ skill, variant, onRefAdd }: SkillCardProps) => {
  const levelNumber = getLevelNumber(skill.level);
  const isMain = variant === "main";
  
  const otherColorConfig = getLevelColorClasses(levelNumber);
  
  const cardClasses = isMain
    ? "border-violet-400/30 bg-gradient-to-br from-violet-400/10 via-violet-400/5 to-transparent hover:border-violet-400/50 hover:from-violet-400/15 hover:via-violet-400/10 hover:to-transparent hover:shadow-violet-400/20 shadow-violet-400/10"
    : `${otherColorConfig.border} bg-gradient-to-br ${otherColorConfig.gradient} ${otherColorConfig.hoverBorder} ${otherColorConfig.hoverBg} ${otherColorConfig.hoverShadow} ${otherColorConfig.glow}`;

  const levelBadgeClasses = isMain
    ? "text-violet-300 bg-violet-400/20 border border-violet-400/30"
    : `${otherColorConfig.text} ${otherColorConfig.bg} border ${otherColorConfig.border}`;

  const widthClasses = isMain 
    ? "w-[140px] md:w-[150px] lg:w-[160px]"
    : "w-[120px] md:w-[130px]";

  return (
    <div
      ref={onRefAdd}
      className={`group relative p-3 md:p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 ease-out
        hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-xl
        focus-within:ring-2 focus-within:ring-violet-400/50 focus-within:outline-none
        min-h-[100px] md:min-h-[110px] lg:h-[110px] ${widthClasses} flex flex-col justify-center
        opacity-100
        ${cardClasses}`}
      role="button"
      tabIndex={0}
      aria-label={`${skill.name} - Level ${levelNumber}`}
    >
      {/* 글로우 효과 (메인 스택만) */}
      {isMain && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-400/0 via-violet-400/0 to-violet-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm" />
      )}
      
      {/* 카드 내용 */}
      <div className="relative flex flex-col items-center justify-center text-center gap-2 w-full">
        {/* 스킬 이름 */}
        <span
          className={`font-galmuri ${
            isMain ? "font-bold" : "font-semibold"
          } text-sm md:text-base text-white group-hover:text-white transition-colors duration-300
          line-clamp-2 leading-tight px-1 break-words`}
        >
          {skill.name}
        </span>
        
        {/* 레벨 배지 */}
        <span
          className={`text-[10px] md:text-xs font-mono px-2.5 py-1 rounded-md ${levelBadgeClasses} transition-all duration-300 group-hover:scale-110 whitespace-nowrap flex-shrink-0`}
        >
          Lv.{levelNumber}
        </span>
      </div>
      
      {/* 호버 시 상단 강조선 */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />
    </div>
  );
};

// 카테고리 섹션 컴포넌트
const SkillCategorySection = ({ category, skills, onRefAdd }: SkillCategorySectionProps) => {
  if (skills.length === 0) return null;

  return (
    <div className="space-y-3">
      {/* 카테고리 제목 */}
      <div className="flex items-center gap-2 mb-1">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
        <h3 className="text-xs md:text-sm font-galmuri font-bold text-gray-300 uppercase tracking-widest px-2">
          {category}
        </h3>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
      </div>
      
      {/* 스킬 그리드 */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            variant="other"
            onRefAdd={onRefAdd}
          />
        ))}
      </div>
    </div>
  );
};

// 메인 스택 섹션 컴포넌트
const MainStackSection = ({ skills, onRefAdd }: { skills: Skill[]; onRefAdd: (el: HTMLDivElement | null) => void }) => {
  if (skills.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* 메인 스택 제목 */}
      <div className="text-center mb-6">
        <h3 className="text-sm md:text-base font-galmuri font-bold text-violet-400 uppercase tracking-widest mb-2">
          Main Stack
        </h3>
        <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
      </div>
      
      {/* 메인 스택 그리드 */}
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            variant="main"
            onRefAdd={onRefAdd}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 스킬 데이터 분리 및 그룹화 (useMemo로 최적화)
  const { mainSkills, skillsByCategory } = useMemo(() => {
    const main = SKILLS.filter((skill) => skill.isMain) as Skill[];
    const other = SKILLS.filter((skill) => !skill.isMain) as Skill[];

    const grouped = other.reduce((acc, skill) => {
      const category = skill.category || "Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    }, {} as Record<string, Skill[]>);

    return { mainSkills: main, skillsByCategory: grouped };
  }, []);

  // Ref 추가 함수 (useCallback으로 최적화)
  const addToRefs = useCallback((el: HTMLDivElement | null) => {
    if (el && !skillRefs.current.includes(el)) {
      skillRefs.current.push(el);
    }
  }, []);

  // 데이터 로드 후 refs 초기화 및 초기 상태 설정
  useEffect(() => {
    // 모든 카드가 렌더링된 후 초기 상태 설정
    const timer = setTimeout(() => {
      // 초기 상태를 보이도록 설정 (애니메이션 실패 시에도 보이도록)
      if (skillRefs.current.length > 0) {
        gsap.set(skillRefs.current, { opacity: 1, y: 0, scale: 1 });
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [mainSkills, skillsByCategory]);

  // GSAP 애니메이션 설정
  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    // 스킬 카드 애니메이션
    if (skillRefs.current.length > 0) {
      tl.fromTo(
        skillRefs.current,
        { opacity: 0, scale: 0.9, y: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "back.out(1.4)",
        }
      );
    }
  }, { scope: containerRef });

  const siteUrl = window.location.origin;

  return (
    <>
      <Helmet>
        <title>Skills | 최도현 포트폴리오</title>
        <meta name="description" content="프론트엔드 개발자 최도현의 기술 스택과 스킬을 확인하세요." />
        <meta name="keywords" content="프론트엔드 개발자, React, TypeScript, 기술 스택, Skills" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/skills`} />
        <meta property="og:title" content="Skills | 최도현 포트폴리오" />
        <meta property="og:description" content="프론트엔드 개발자 최도현의 기술 스택과 스킬을 확인하세요." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${siteUrl}/skills`} />
        <meta name="twitter:title" content="Skills | 최도현 포트폴리오" />
        <meta name="twitter:description" content="프론트엔드 개발자 최도현의 기술 스택과 스킬을 확인하세요." />
      </Helmet>
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
                SKILLS
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
            >
              기술 스택과 스킬을 카테고리별로 정리했습니다.
            </motion.p>
          </div>
        </section>

        {/* 스킬 섹션 */}
        <section
          ref={containerRef}
          className="relative w-full overflow-hidden text-white pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20"
        >
          {/* 배경: 은은한 모눈종이 패턴 */}
          <div
            className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* 메인 레이아웃 */}
          <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">

            <div className="space-y-10 md:space-y-12">
              {/* 메인 스택 섹션 */}
              <MainStackSection skills={mainSkills} onRefAdd={addToRefs} />

              {/* 카테고리별 스킬 섹션 */}
              <div className="flex flex-wrap justify-center gap-8 md:gap-10">
                {Object.entries(skillsByCategory).map(([category, skills]) => (
                  <SkillCategorySection
                    key={category}
                    category={category}
                    skills={skills}
                    onRefAdd={addToRefs}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Skills;

