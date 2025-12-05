import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROFILE, HISTORY } from "../constants/data";
import profileImage from "../assets/profile.png";

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const profileImageRef = useRef<HTMLImageElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. 프로필 이미지 애니메이션
    if (profileImageRef.current) {
      tl.fromTo(profileImageRef.current,
        { opacity: 0, scale: 0.8, y: -20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }

    // 2. 타이틀 애니메이션
    tl.fromTo(titleRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );

    // 3. 콘텐츠들이 순차적으로 나타남
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
    <section ref={containerRef} className="relative min-h-[85vh] w-full overflow-hidden bg-zinc-900 text-white">
      
      {/* 배경: 은은한 모눈종이 패턴 */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      {/* 메인 레이아웃 */}
      <div className="relative z-10 h-full w-full px-6 md:px-12 lg:px-20 py-4 md:py-8 lg:py-10">
        
        {/* 좌측 상단: 프로필 사진과 타이틀 */}
        <div className="mt-4 md:mt-6 lg:mt-8 mb-4 md:mb-6 flex items-center gap-4 md:gap-6">
          {/* 프로필 사진 */}
          <img
            ref={profileImageRef}
            src={profileImage}
            alt="Profile"
            className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover border-2 border-violet-400/50 shadow-lg hover:border-violet-400 transition-colors flex-shrink-0"
          />
          
          {/* 타이틀 */}
          <h1 
            ref={titleRef} 
            className="font-galmuri font-black text-3xl md:text-5xl lg:text-6xl"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500">
              FRONTEND DEV
            </span>
          </h1>
        </div>

        {/* 그리드 레이아웃: About me와 이력 정보 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          
          {/* 왼쪽: About Me & Education */}
          <div ref={addToRefs} className="space-y-6 md:space-y-8">
            {/* About Me */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-galmuri font-bold text-violet-400 border-b border-gray-700 pb-1.5">
                ABOUT ME
              </h2>
              <div className="space-y-2.5 text-sm md:text-base text-gray-300 leading-relaxed">
                {PROFILE.bio.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </div>

            {/* Education */}
            {HISTORY.find(group => group.category === "Education") && (
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-galmuri font-bold border-b border-gray-700 pb-1.5">
                  Education
                </h3>
                <ul className="space-y-2">
                  {HISTORY.find(group => group.category === "Education")?.items.map((item, idx) => (
                    <li key={idx} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-3 group">
                      <span className="text-gray-400 font-mono text-xs md:text-sm whitespace-nowrap">
                        {item.year}
                      </span>
                      <span className="text-sm md:text-base font-medium group-hover:text-violet-400 transition-colors flex-1">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* 오른쪽: Awards & Activities */}
          <div ref={addToRefs} className="space-y-5 md:space-y-6">
            {HISTORY.filter(group => group.category !== "Education").map((group) => (
              <div key={group.category} className="space-y-3">
                <h3 className="text-lg md:text-xl font-galmuri font-bold border-b border-gray-700 pb-1.5">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-3 group">
                      <span className="text-gray-400 font-mono text-xs md:text-sm whitespace-nowrap">
                        {item.year}
                      </span>
                      <span className="text-sm md:text-base font-medium group-hover:text-violet-400 transition-colors flex-1">
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
        <div ref={addToRefs} className="mt-8 md:mt-10 text-center">
          <p className="text-gray-400 font-galmuri text-xs md:text-sm animate-bounce">
            ↓ SCROLL TO EXPLORE
          </p>
        </div>

      </div>
      
    </section>
  );
};

export default IntroSection;

