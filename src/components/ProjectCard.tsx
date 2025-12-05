import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
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
  variant?: 'horizontal' | 'grid'; // 레이아웃 변형
}

const ProjectCard = ({ project, variant = 'horizontal' }: ProjectProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const isGridLayout = variant === 'grid';

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

  // 카드 클릭 핸들러 - 상세 페이지로 이동
  const handleCardClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <>
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
        className={`relative h-full flex items-center justify-center cursor-pointer ${
          isGridLayout ? 'w-full' : 'w-[33.333vw] flex-shrink-0'
        }`}
      >
      {/* 실제 움직이는 3D 카드 내용물 */}
      <div 
        ref={contentRef}
        className={`w-full flex flex-col shadow-lg md:shadow-xl relative overflow-hidden transform-style-3d transition-all duration-300 ${
          isGridLayout 
            ? 'h-[500px] md:h-[550px] bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl hover:border-violet-500/50 hover:shadow-violet-500/20' 
            : 'max-w-xs md:max-w-sm lg:max-w-md h-[40vh] md:h-[45vh] bg-white rounded-lg md:rounded-xl'
        }`}
        style={{ transformStyle: 'preserve-3d' }} // 3D 효과 필수
      >
        {/* 상단 이미지 영역 */}
        <div className={`relative w-full flex-shrink-0 overflow-hidden ${
          isGridLayout ? 'h-[50%] rounded-t-2xl' : 'h-[55%]'
        }`}>
          {project.id === 7 ? (
            // 책이랑 프로젝트 - 배경 이미지 사용
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bookBgImage})` }}
              />
              <div className={`absolute inset-0 ${
                isGridLayout 
                  ? 'bg-gradient-to-b from-transparent via-zinc-900/60 to-zinc-900/90' 
                  : 'bg-gradient-to-b from-white/20 to-transparent'
              }`} />
            </>
          ) : project.id === 5 ? (
            // MixMix 프로젝트 - 배경 이미지 사용
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${mixmixBgImage})` }}
              />
              <div className={`absolute inset-0 ${
                isGridLayout 
                  ? 'bg-gradient-to-b from-transparent via-zinc-900/60 to-zinc-900/90' 
                  : 'bg-gradient-to-b from-white/20 to-transparent'
              }`} />
            </>
          ) : project.id === 1 ? (
            // 다솜 프로젝트 - 배경 이미지 사용
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${dasomBgImage})` }}
              />
              <div className={`absolute inset-0 ${
                isGridLayout 
                  ? 'bg-gradient-to-b from-transparent via-zinc-900/60 to-zinc-900/90' 
                  : 'bg-gradient-to-b from-white/20 to-transparent'
              }`} />
            </>
          ) : project.id === 6 ? (
            // react-kit-cli 프로젝트 - 배경 이미지 사용
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${reactKitCliBgImage})` }}
              />
              <div className={`absolute inset-0 ${
                isGridLayout 
                  ? 'bg-gradient-to-b from-transparent via-zinc-900/60 to-zinc-900/90' 
                  : 'bg-gradient-to-b from-white/20 to-transparent'
              }`} />
            </>
          ) : project.id === 4 ? (
            // minu 프로젝트 - 배경 이미지 사용
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${minuBgImage})` }}
              />
              <div className={`absolute inset-0 ${
                isGridLayout 
                  ? 'bg-gradient-to-b from-transparent via-zinc-900/60 to-zinc-900/90' 
                  : 'bg-gradient-to-b from-white/20 to-transparent'
              }`} />
            </>
          ) : project.id === 2 ? (
            // 달토끼 프로젝트 - 배경 이미지 사용
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${moonrabbitBgImage})` }}
              />
              <div className={`absolute inset-0 ${
                isGridLayout 
                  ? 'bg-gradient-to-b from-transparent via-zinc-900/60 to-zinc-900/90' 
                  : 'bg-gradient-to-b from-white/20 to-transparent'
              }`} />
            </>
          ) : project.id === 3 ? (
            // Muuvi 프로젝트 - 배경 이미지 사용
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${muuviBgImage})` }}
              />
              <div className={`absolute inset-0 ${
                isGridLayout 
                  ? 'bg-gradient-to-b from-transparent via-zinc-900/60 to-zinc-900/90' 
                  : 'bg-gradient-to-b from-white/20 to-transparent'
              }`} />
            </>
          ) : (
            // 다른 프로젝트 - 색상 배경
            <>
              <div className={`w-full h-full ${project.color}`} />
              {isGridLayout && (
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/60 to-zinc-900/90" />
              )}
            </>
          )}
        </div>
        
        {/* 하단 텍스트 영역 */}
        <div className={`flex-1 flex flex-col justify-between ${
          isGridLayout 
            ? 'p-5 md:p-6' 
            : 'p-3 md:p-4 bg-white'
        }`}>
          <div className="flex-1">
            {/* 제목과 카테고리 */}
            <div className={`flex items-start justify-between mb-3 ${
              isGridLayout ? 'mb-4' : 'mb-1.5'
            }`}>
              <h3 className={`font-bold ${
                isGridLayout 
                  ? 'text-lg md:text-xl text-white font-galmuri' 
                  : 'text-base md:text-lg text-black'
              }`}>
                {project.title}
              </h3>
              {!isGridLayout && (
                <span className="px-1.5 py-0.5 bg-zinc-100 text-zinc-600 text-xs font-medium rounded ml-2 flex-shrink-0">
                  {project.stack[0] || 'WEB'}
                </span>
              )}
            </div>
            
            {/* 설명 */}
            <p className={`mb-4 line-clamp-2 ${
              isGridLayout 
                ? 'text-sm md:text-base text-gray-300 leading-relaxed' 
                : 'text-xs md:text-sm text-zinc-600 mb-2'
            }`}>
              {project.description}
            </p>

            {/* 그리드 레이아웃일 때 역할 표시 */}
            {isGridLayout && project.role && (
              <div className="mb-4">
                <span className="text-xs text-violet-400/70 font-medium">
                  {project.role.split('&')[0].trim()}
                </span>
              </div>
            )}
          </div>
          
          {/* 하단 정보 */}
          <div className={`flex items-center justify-between ${
            isGridLayout 
              ? 'pt-4 border-t border-zinc-700/50' 
              : 'pt-2 border-t border-zinc-100'
          }`}>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.slice(0, isGridLayout ? 4 : 3).map(tech => (
                <span key={tech} className={`px-2 py-1 text-xs rounded-md font-mono ${
                  isGridLayout 
                    ? 'bg-zinc-700/50 text-violet-300/80 border border-zinc-600/30' 
                    : 'bg-zinc-50 text-zinc-500 border border-zinc-200'
                }`}>
                  {tech}
                </span>
              ))}
            </div>
            {!isGridLayout && (
              <span className="text-xs text-zinc-400 font-medium">
                {project.role.split('&')[0].trim()}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectCard;

