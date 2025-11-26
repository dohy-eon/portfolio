import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectCard from "./ProjectCard"; // 컴포넌트 임포트

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "Codiagit", category: "Web Application", color: "bg-indigo-600" },
  { id: 2, title: "FDM Box", category: "Mobile App", color: "bg-orange-500" },
  { id: 3, title: "The Maze", category: "Interactive Game", color: "bg-emerald-600" },
  { id: 4, title: "Playground", category: "Toy Project", color: "bg-rose-500" },
];

const ProjectSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const totalPanels = projects.length;
    
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
          className="flex h-full w-[400%] flex-row"
        >
          {projects.map((project) => (
            // 분리한 컴포넌트 사용
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

