import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROFILE, HISTORY } from "../constants/data";

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. 타이틀 애니메이션
    tl.fromTo(titleRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
    );

    // 2. 콘텐츠들이 순차적으로 나타남
    tl.fromTo(contentRefs.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      "-=0.4"
    );

    // 3. 스크롤 트리거
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=800",
        scrub: 1,
      },
      opacity: 0.3,
    });
  }, { scope: containerRef });

  // 유틸리티: Refs 배열에 추가하는 함수
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-zinc-900 text-white">
      
      {/* 배경: 은은한 모눈종이 패턴 */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      {/* 메인 레이아웃 */}
      <div className="relative z-10 h-full w-full p-6 md:p-12 lg:p-16">
        
        {/* 좌측 상단: 타이틀 */}
        <div className="mt-8 md:mt-12 lg:mt-16 mb-8 md:mb-12">
          <h1 
            ref={titleRef} 
            className="font-galmuri font-black text-4xl md:text-6xl lg:text-7xl"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              FRONTEND DEV
            </span>
          </h1>
        </div>

        {/* 그리드 레이아웃: About me와 이력 정보 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          
          {/* 왼쪽: About Me */}
          <div ref={addToRefs} className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-galmuri font-bold text-yellow-400 border-b border-gray-700 pb-2">
              ABOUT ME
            </h2>
            <div className="space-y-4 text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
              {PROFILE.bio.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          {/* 오른쪽: Education, Awards, Activities */}
          <div ref={addToRefs} className="space-y-8 md:space-y-10">
            {HISTORY.map((group) => (
              <div key={group.category} className="space-y-4">
                <h3 className="text-xl md:text-2xl font-galmuri font-bold border-b border-gray-700 pb-2">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 group">
                      <span className="text-gray-400 font-mono text-xs md:text-sm whitespace-nowrap">
                        {item.year}
                      </span>
                      <span className="text-sm md:text-base font-medium group-hover:text-yellow-400 transition-colors flex-1">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* 하단: 스크롤 안내 */}
        <div ref={addToRefs} className="mt-12 md:mt-16 text-center">
          <p className="text-gray-400 font-galmuri text-sm md:text-base animate-bounce">
            ↓ SCROLL TO EXPLORE
          </p>
        </div>

      </div>
      
    </section>
  );
};

export default IntroSection;

