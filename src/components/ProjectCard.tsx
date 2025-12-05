import { useRef, useState } from "react";
import gsap from "gsap";
import ProjectModal from "./ProjectModal";
import { ProjectDetail } from "../constants/data";

// 이미지 import
import bookBgImage from "../assets/book-bg.png";
import mixmixBgImage from "../assets/mixmix.png";
import dasomBgImage from "../assets/dasom-bg.png";
import reactKitCliBgImage from "../assets/react-kit-cli.png";
import minuBgImage from "../assets/minu.png";
import moonrabbitBgImage from "../assets/moonrabbit.png";
import muuviBgImage from "../assets/muuvi.png";

// Project 타입 정의
interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    role: string;
    stack: string[];
    color: string;
    period?: string;
    image?: string;
    link?: string;
    demo?: string;
    details?: ProjectDetail;
  };
}

const ProjectCard = ({ project }: ProjectProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 마우스 움직임 핸들러 (3D Tilt 효과 계산)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!contentRef.current || !cardRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    
    // 마우스 위치 (카드 중심 기준)
    const x = e.clientX - left;
    const y = e.clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;

    // 회전 각도 계산 (마우스 위치에 따라 -10도 ~ 10도 회전)
    const rotateX = ((y - centerY) / centerY) * -10; // 위아래 반전
    const rotateY = ((x - centerX) / centerX) * 10;

    // 카드 3D 회전 적용
    gsap.to(contentRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000, // 원근감
    });
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
  };

  // 카드 클릭 핸들러
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
        className="relative h-full w-[33.333vw] flex items-center justify-center flex-shrink-0 cursor-pointer"
      >
      {/* 실제 움직이는 3D 카드 내용물 */}
      <div 
        ref={contentRef}
        className="w-full max-w-xs md:max-w-sm lg:max-w-md h-[40vh] md:h-[45vh] bg-white rounded-lg md:rounded-xl flex flex-col shadow-lg md:shadow-xl relative overflow-hidden transform-style-3d transition-all duration-300"
        style={{ transformStyle: 'preserve-3d' }} // 3D 효과 필수
      >
        {/* 상단 이미지 영역 */}
        <div className="relative w-full h-[55%] flex-shrink-0 overflow-hidden">
          {project.id === 7 ? (
            // 책이랑 프로젝트 - 배경 이미지 사용
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bookBgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            </>
          ) : project.id === 5 ? (
            // MixMix 프로젝트 - 배경 이미지 사용
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${mixmixBgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            </>
          ) : project.id === 1 ? (
            // 다솜 프로젝트 - 배경 이미지 사용
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${dasomBgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            </>
          ) : project.id === 6 ? (
            // react-kit-cli 프로젝트 - 배경 이미지 사용
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${reactKitCliBgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            </>
          ) : project.id === 4 ? (
            // minu 프로젝트 - 배경 이미지 사용
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${minuBgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            </>
          ) : project.id === 2 ? (
            // 달토끼 프로젝트 - 배경 이미지 사용
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${moonrabbitBgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            </>
          ) : project.id === 3 ? (
            // Muuvi 프로젝트 - 배경 이미지 사용
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${muuviBgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            </>
          ) : (
            // 다른 프로젝트 - 색상 배경
            <div className={`w-full h-full ${project.color}`} />
          )}
        </div>
        
        {/* 하단 텍스트 영역 */}
        <div className="flex-1 flex flex-col justify-between p-3 md:p-4 bg-white">
          <div>
            {/* 제목과 카테고리 */}
            <div className="flex items-center justify-between mb-1.5">
              <h3 className="text-base md:text-lg font-bold text-black">
                {project.title}
              </h3>
              <span className="px-1.5 py-0.5 bg-zinc-100 text-zinc-600 text-xs font-medium rounded">
                {project.stack[0] || 'WEB'}
              </span>
            </div>
            
            {/* 설명 */}
            <p className="text-xs md:text-sm text-zinc-600 mb-2 line-clamp-2">
              {project.description}
            </p>
          </div>
          
          {/* 하단 정보 */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-100">
            <div className="flex flex-wrap gap-1">
              {project.stack.slice(0, 3).map(tech => (
                <span key={tech} className="px-1.5 py-0.5 bg-zinc-50 text-zinc-500 text-xs rounded border border-zinc-200">
                  {tech}
                </span>
              ))}
            </div>
            <span className="text-xs text-zinc-400 font-medium">
              {project.role.split('&')[0].trim()}
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* 모달 컴포넌트 렌더링 */}
    <ProjectModal 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
      project={project}
    />
    </>
  );
};

export default ProjectCard;

