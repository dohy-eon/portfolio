import { useRef, useMemo, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SKILLS } from "../constants/data";

gsap.registerPlugin(ScrollTrigger);

// 타입 정의
interface Skill {
  name: string;
  level: number;
  isMain?: boolean;
  category?: string;
}

interface SkillCardProps {
  skill: Skill;
  onRefAdd: (el: HTMLDivElement | null) => void;
}

// 스킬 카드 컴포넌트
const SkillCard = ({ skill, onRefAdd }: SkillCardProps) => {
  const cardClasses = `border-violet-400/30 bg-gradient-to-br from-violet-400/10 via-violet-400/5 to-transparent hover:border-violet-400/50 hover:from-violet-400/15 hover:via-violet-400/10 hover:to-transparent hover:shadow-violet-400/20 shadow-violet-400/10`;

  const levelBadgeClasses = "text-violet-300 bg-violet-400/20 border border-violet-400/30";

  return (
    <div
      ref={onRefAdd}
      className={`group relative p-3 md:p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 ease-out
        hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-xl
        focus-within:ring-2 focus-within:ring-violet-400/50 focus-within:outline-none
        min-h-[100px] md:min-h-[110px] lg:h-[110px] w-[140px] md:w-[150px] lg:w-[160px] flex flex-col justify-center
        ${cardClasses}`}
      role="button"
      tabIndex={0}
      aria-label={`${skill.name} - Level ${skill.level}`}
    >
      {/* 글로우 효과 */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-400/0 via-violet-400/0 to-violet-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm" />
      
      {/* 카드 내용 */}
      <div className="relative flex flex-col items-center justify-center text-center gap-2 w-full">
        {/* 스킬 이름 */}
        <span
          className="font-galmuri font-bold text-sm md:text-base text-white group-hover:text-white transition-colors duration-300
          line-clamp-2 leading-tight px-1 break-words"
        >
          {skill.name}
        </span>
        
        {/* 레벨 배지 */}
        <span
          className={`text-[10px] md:text-xs font-mono px-2.5 py-1 rounded-md ${levelBadgeClasses} transition-all duration-300 group-hover:scale-110 whitespace-nowrap flex-shrink-0`}
        >
          Lv.{skill.level}
        </span>
      </div>
      
      {/* 호버 시 상단 강조선 */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />
    </div>
  );
};

const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 메인 스택만 필터링
  const mainSkills = useMemo(() => {
    return SKILLS.filter((skill) => skill.isMain) as Skill[];
  }, []);

  // Ref 추가 함수 (useCallback으로 최적화)
  const addToRefs = useCallback((el: HTMLDivElement | null) => {
    if (el && !skillRefs.current.includes(el)) {
      skillRefs.current.push(el);
    }
  }, []);

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

    // 초기 상태 설정 (애니메이션 실패 시에도 보이도록)
    gsap.set([titleRef.current, ...skillRefs.current], {
      opacity: 1,
      y: 0,
      scale: 1,
    });

    // 타이틀 애니메이션
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }

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
        },
        "-=0.4"
      );
    }
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-zinc-900 text-white py-12 md:py-16 lg:py-20"
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
        {/* 섹션 타이틀 */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            ref={titleRef}
            className="font-galmuri font-black text-3xl md:text-4xl lg:text-5xl mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-violet-500">
              MAIN STACK
            </span>
          </h2>
        </div>

        {/* 메인 스택만 표시 */}
        <div className="flex flex-wrap justify-center gap-3">
          {mainSkills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              onRefAdd={addToRefs}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
