import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../constants/data";

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const totalPanels = PROJECTS.length;
    const panelsPerView = 3; // 한 화면에 보이는 카드 개수
    
    gsap.to(sectionRef.current, {
      // 각 카드가 화면의 1/3을 차지하므로, 전체 이동 거리는 (전체 카드 수 - 보이는 카드 수) * (100/3)%
      xPercent: -100 * (totalPanels - panelsPerView) / panelsPerView, 
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        // 스크롤 길이 조정: (전체 카드 수 - 보이는 카드 수)만큼 스크롤해야 끝나도록 설정
        end: () => "+=" + (triggerRef.current?.offsetWidth || 0) * (totalPanels - panelsPerView) / panelsPerView, 
        anticipatePin: 1,
        invalidateOnRefresh: true, // 리사이즈 시 재계산
      },
    });
  }, { scope: triggerRef });

  return (
    <section className="overflow-hidden bg-zinc-900">
      <div ref={triggerRef} className="relative h-screen w-full">
        
        {/* 섹션 고정 타이틀 */}
        <div className="absolute top-8 md:top-12 left-6 md:left-12 z-10 mix-blend-difference">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-pretendard font-bold text-white">
            PROJECTS
          </h2>
        </div>

        {/* 가로 스크롤 컨테이너 */}
        <div 
          ref={sectionRef} 
          className="flex h-full flex-row"
          style={{ width: `${PROJECTS.length * (100 / 3)}%` }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

