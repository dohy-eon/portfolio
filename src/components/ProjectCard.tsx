import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Project 타입 정의 (필요에 따라 확장 가능)
interface ProjectProps {
  project: {
    id: number;
    title: string;
    category: string;
    color: string;
  };
}

const ProjectCard = ({ project }: ProjectProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 마우스가 카드 위에 있을 때만 나타나는 커서 버튼 (초기엔 숨김)
    gsap.set(cursorRef.current, { scale: 0, autoAlpha: 0 });
  }, { scope: cardRef });

  // 마우스 움직임 핸들러 (3D Tilt 효과 계산)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!contentRef.current || !cursorRef.current || !cardRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    
    // 마우스 위치 (카드 중심 기준)
    const x = e.clientX - left;
    const y = e.clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;

    // 회전 각도 계산 (마우스 위치에 따라 -10도 ~ 10도 회전)
    const rotateX = ((y - centerY) / centerY) * -10; // 위아래 반전
    const rotateY = ((x - centerX) / centerX) * 10;

    // 1. 카드 3D 회전 적용
    gsap.to(contentRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000, // 원근감
    });

    // 2. 커서 버튼이 마우스를 따라다니게 함
    gsap.to(cursorRef.current, {
      x: x,
      y: y,
      duration: 0.1, // 딜레이 없이 즉시 따라옴
      ease: "power2.out"
    });
  };

  // 마우스 진입 시
  const handleMouseEnter = () => {
    // 커서 버튼 커지면서 등장
    gsap.to(cursorRef.current, { scale: 1, autoAlpha: 1, duration: 0.3 });
  };

  // 마우스 이탈 시 (원상 복구)
  const handleMouseLeave = () => {
    // 카드 평평하게 복구
    gsap.to(contentRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    // 커서 버튼 숨기기
    gsap.to(cursorRef.current, { scale: 0, autoAlpha: 0, duration: 0.3 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative h-full w-screen flex items-center justify-center p-10 md:p-20 flex-shrink-0"
    >
      {/* 실제 움직이는 3D 카드 내용물 */}
      <div 
        ref={contentRef}
        className={`w-full max-w-4xl h-[60vh] rounded-3xl ${project.color} flex flex-col items-center justify-center shadow-2xl relative overflow-hidden transform-style-3d`}
        style={{ transformStyle: 'preserve-3d' }} // 3D 효과 필수
      >
        {/* 카드 내부 텍스트 (살짝 튀어나오게 보이도록 z축 이동) */}
        <div className="transform translate-z-20 flex flex-col items-center">
          <h3 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter">
            {project.title}
          </h3>
          <span className="text-xl text-white/90 border border-white/50 px-6 py-2 rounded-full backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* 마우스 따라다니는 "VIEW" 원형 버튼 (커서) */}
      <div 
        ref={cursorRef}
        className="pointer-events-none absolute top-0 left-0 z-50 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black font-bold mix-blend-difference"
      >
        VIEW
      </div>
    </div>
  );
};

export default ProjectCard;

