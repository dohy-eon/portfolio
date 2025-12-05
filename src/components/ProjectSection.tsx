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
    
    if (!sectionRef.current || !triggerRef.current) return;
    
    // 각 카드의 너비 (뷰포트의 1/3)
    const cardWidth = triggerRef.current.offsetWidth / panelsPerView;
    // 전체 컨테이너의 실제 너비
    const containerWidth = cardWidth * totalPanels;
    // 이동해야 할 거리 (전체 너비 - 뷰포트 너비)
    const moveDistance = containerWidth - triggerRef.current.offsetWidth;
    
    gsap.to(sectionRef.current, {
      x: -moveDistance,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${moveDistance}`,
        anticipatePin: 1,
        invalidateOnRefresh: true, // 리사이즈 시 재계산
      },
    });
  }, { scope: triggerRef });

  return (
    <section className="overflow-hidden bg-zinc-900 mb-0">
      <div ref={triggerRef} className="relative h-screen w-full">
        
        {/* 섹션 고정 타이틀 */}
        <div className="absolute top-6 md:top-8 left-6 md:left-12 lg:left-20 z-10 mix-blend-difference">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-pretendard font-bold text-white">
            PROJECTS
          </h2>
        </div>

        {/* 가로 스크롤 컨테이너 */}
        <div 
          ref={sectionRef} 
          className="flex h-full flex-row"
          style={{ width: `${(PROJECTS.length / 3) * 100}%` }}
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

