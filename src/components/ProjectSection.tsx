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
      xPercent: -100 * (totalPanels - 1), 
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + triggerRef.current?.offsetWidth, 
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

