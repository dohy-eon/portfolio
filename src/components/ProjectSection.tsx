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
    
    if (!sectionRef.current || !triggerRef.current) return;
    
    const viewportWidth = window.innerWidth;
    // 마지막 패널이 중앙에 완전히 표시되면 스크롤 종료
    // 각 패널이 100vw 너비를 가지므로, 마지막 패널이 중앙에 오려면
    // 정확히 (totalPanels - 1) * viewportWidth만큼 스크롤해야 함
    const scrollDistance = viewportWidth * (totalPanels - 1);
    
    gsap.to(sectionRef.current, {
      xPercent: -100 * (totalPanels - 1), 
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 2.5, // 스크롤 속도 느리게 (값이 클수록 느림)
        start: "top top",
        end: `+=${scrollDistance}`, // 정확한 스크롤 거리 지정
        // 마지막 패널이 완전히 표시되면 바로 다음 섹션으로 이동
        anticipatePin: 1,
        invalidateOnRefresh: true, // 리사이즈 시 재계산
      },
    });
  }, { scope: triggerRef });

  return (
    <section className="overflow-hidden bg-zinc-900">
      <div ref={triggerRef} className="relative h-screen w-full">
        
        {/* 섹션 고정 타이틀 */}
        <div className="absolute top-12 left-12 z-10 mix-blend-difference">
          <h2 className="text-5xl font-pretendard font-bold text-white">
            PROJECTS
          </h2>
        </div>

        {/* 가로 스크롤 컨테이너 */}
        <div 
          ref={sectionRef} 
          className="flex h-full flex-row"
          style={{ width: `${PROJECTS.length * 100}vw` }}
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

