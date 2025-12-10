import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../constants/data";

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollTriggerInstance = useRef<ScrollTrigger | null>(null);
  const animationInstance = useRef<gsap.core.Tween | null>(null);
  const location = useLocation();

  useGSAP(() => {
    const totalPanels = PROJECTS.length;
    const panelsPerView = 3; // 한 화면에 보이는 카드 개수
    
    if (!sectionRef.current || !triggerRef.current) return;
    
    // 기존 ScrollTrigger 인스턴스가 있으면 제거
    if (scrollTriggerInstance.current) {
      scrollTriggerInstance.current.kill();
      scrollTriggerInstance.current = null;
    }
    
    // 기존 애니메이션 인스턴스가 있으면 제거
    if (animationInstance.current) {
      animationInstance.current.kill();
      animationInstance.current = null;
    }
    
    // 초기 위치 리셋
    gsap.set(sectionRef.current, { x: 0 });
    
    // Lenis와 ScrollTrigger 연결 (한 번만 설정)
    const lenis = (window as any).lenis;
    if (lenis) {
      // ScrollTrigger에 Lenis를 스크롤러로 설정
      ScrollTrigger.scrollerProxy(triggerRef.current, {
        scrollTop(value) {
          if (arguments.length) {
            lenis.scrollTo(value, { immediate: true });
          }
          return lenis.scroll;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });
      
      // Lenis 스크롤 이벤트에서 ScrollTrigger 업데이트 (이미 App.tsx에서 설정되어 있을 수 있음)
      // 중복 방지를 위해 체크
      if (!lenis._scrollTriggerConnected) {
        lenis.on('scroll', ScrollTrigger.update);
        lenis._scrollTriggerConnected = true;
      }
    }
    
    // 각 카드의 너비 (뷰포트의 1/3)
    const cardWidth = triggerRef.current.offsetWidth / panelsPerView;
    // 전체 컨테이너의 실제 너비
    const containerWidth = cardWidth * totalPanels;
    // 이동해야 할 거리 (전체 너비 - 뷰포트 너비)
    const moveDistance = containerWidth - triggerRef.current.offsetWidth;
    
    const animation = gsap.to(sectionRef.current, {
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
        // onRefresh 제거 - 무한 루프 방지
      },
    });
    
    // 인스턴스 저장
    scrollTriggerInstance.current = animation.scrollTrigger || null;
    animationInstance.current = animation;
    
    // cleanup 함수
    return () => {
      if (scrollTriggerInstance.current) {
        scrollTriggerInstance.current.kill();
        scrollTriggerInstance.current = null;
      }
      if (animationInstance.current) {
        animationInstance.current.kill();
        animationInstance.current = null;
      }
    };
  }, { scope: triggerRef, dependencies: [location.pathname] });

  // 컴포넌트가 마운트되거나 페이지 전환 시 ScrollTrigger 새로고침 (한 번만)
  useEffect(() => {
    // 페이지 전환 후 DOM이 렌더링된 후 한 번만 새로고침
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]);

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

