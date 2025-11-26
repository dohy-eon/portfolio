import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROFILE } from "../constants/data";

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. 배경 그리드와 코너 텍스트들이 서서히 나타남
    tl.fromTo(subTextRefs.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
    );

    // 2. 중앙 메인 텍스트가 웅장하게 올라옴
    tl.fromTo(textRef.current,
      { y: 100, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power4.out" },
      "-=0.5"
    );

    // 3. 스크롤 트리거 (기존 확대 효과 유지)
    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1000",
        scrub: 1,
      },
      scale: 1.5, // 스크롤 시 글자가 더 커지면서 다가오는 느낌
      y: -50,
      opacity: 0.5, // 점점 흐려지며 다음 섹션으로 자연스럽게 연결
    });
  }, { scope: containerRef });

  // 유틸리티: Refs 배열에 추가하는 함수
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !subTextRefs.current.includes(el)) {
      subTextRefs.current.push(el);
    }
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-zinc-900 text-white">
      
      {/* 배경: 은은한 모눈종이 패턴 (CSS로 구현) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      {/* 레이아웃: flex-col로 상/중/하 분리 */}
      <div className="relative z-10 h-full w-full flex flex-col justify-between p-6 md:p-12">
        
        {/* [중앙] 메인 타이틀 */}
        <div className="flex-1 flex items-center justify-center">
          <h1 
            ref={textRef} 
            className="font-galmuri font-black text-[10vw] leading-[0.9] text-center mix-blend-difference whitespace-nowrap"
          >
            CREATIVE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              FRONTEND DEV
            </span>
          </h1>
        </div>

        {/* [하단] 푸터 정보 */}
        <div className="flex justify-between items-end font-galmuri text-sm md:text-base text-zinc-400">
          <div ref={addToRefs}>
            <p className="text-white font-bold mb-1">{PROFILE.name}</p>
            <p>{PROFILE.role}</p>
          </div>
          <div ref={addToRefs} className="text-right">
            <p className="animate-bounce">↓ SCROLL TO EXPLORE</p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default IntroSection;

