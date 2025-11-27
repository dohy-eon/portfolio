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
    
    gsap.to(sectionRef.current, {
      // xPercent 계산식 변경: 전체 패널 중 (N-1)개 만큼만 왼쪽으로 밀어야 마지막 패널이 화면에 딱 걸립니다.
      // 예: 7개면 6/7 (85.71%) 만큼 이동
      xPercent: -100 * (totalPanels - 1) / totalPanels, 
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        // 스크롤 길이 조정: 패널 개수만큼 스크롤해야 끝나도록 설정
        end: () => "+=" + (triggerRef.current?.offsetWidth || 0) * (totalPanels - 1), 
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
            SELECTED<br />WORKS
          </h2>
        </div>

        {/* 가로 스크롤 컨테이너 */}
        <div 
          ref={sectionRef} 
          className="flex h-full flex-row"
          style={{ width: `${PROJECTS.length * 100}%` }}
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

