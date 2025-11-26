import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  // TypeScript: Ref에 HTMLDivElement 타입을 명시하고 초기값 null 설정
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // containerRef.current가 존재할 때만 실행되므로 안전함
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=2000", // 스크롤 길이
        scrub: 1,      // 되감기 효과
        pin: true,     // 섹션 고정
        // markers: true, // 개발 중 가이드라인 보기 (배포 시 제거)
      },
    });

    tl.fromTo(titleRef.current, 
      { scale: 0.5, opacity: 0, y: 100 },
      { scale: 1.5, opacity: 1, y: 0, duration: 2 }
    );
    
  }, { scope: containerRef }); // scope를 지정하면 이 컴포넌트 내부에서만 선택자가 작동하여 안전함

  return (
    // 전체를 감싸는 트리거 영역
    <section ref={triggerRef} className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* 애니메이션이 일어날 내부 컨테이너 */}
      <div ref={containerRef} className="relative h-full w-full flex items-center justify-center">
        
        {/* 타이틀 텍스트 */}
        <h1 
          ref={titleRef} 
          className="text-6xl md:text-9xl font-galmuri font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center leading-tight"
        >
          WEB FRONTEND<br />
          DEVELOPER
        </h1>

        {/* 배경에 깔릴 장식 요소들 (예시) */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>
    </section>
  );
};

export default IntroSection;

