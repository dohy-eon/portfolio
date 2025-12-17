import { createPortal } from "react-dom";
import { useEffect } from "react";
import { ProjectDetail } from "../constants/data";
import mixmixBgImage from "../assets/mixmix.png";
import dasomBgImage from "../assets/dasom-bg.png";
import reactKitCliBgImage from "../assets/react-kit-cli.png";
import minuBgImage from "../assets/minu.png";
import moonrabbitBgImage from "../assets/moonrabbit.png";
import muuviBgImage from "../assets/muuvi.png";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id?: number;
    title: string;
    description: string;
    role?: string;
    stack: string[];
    color?: string;
    link?: string;
    demo?: string;
    details?: ProjectDetail;
  };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  // 모달이 열리면 뒷배경 스크롤 막기 및 커스텀 커서 숨기기
  useEffect(() => {
    let scrollY = 0;
    
    if (isOpen) {
      // 현재 스크롤 위치 저장
      scrollY = window.scrollY;
      
      // body 스타일 설정으로 스크롤 완전히 차단
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.classList.add("modal-open");
      
      // Lenis 스크롤 일시 중지
      const lenisInstance = (window as any).lenis;
      if (lenisInstance && typeof lenisInstance.stop === 'function') {
        lenisInstance.stop();
      }
    } else {
      // 스크롤 위치 복원
      const savedScrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.classList.remove("modal-open");
      
      // 저장된 스크롤 위치로 복원
      if (savedScrollY) {
        const scrollValue = parseInt(savedScrollY.replace('px', '').replace('-', ''), 10);
        window.scrollTo(0, scrollValue);
      }
      
      // Lenis 스크롤 재개
      const lenisInstance = (window as any).lenis;
      if (lenisInstance && typeof lenisInstance.start === 'function') {
        lenisInstance.start();
      }
    }
    
    return () => {
      // cleanup
      if (isOpen) {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.classList.remove("modal-open");
        
        // 스크롤 위치 복원
        window.scrollTo(0, scrollY);
        
        const lenisInstance = (window as any).lenis;
        if (lenisInstance && typeof lenisInstance.start === 'function') {
          lenisInstance.start();
        }
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // React Portal을 사용해 root div 바깥에 렌더링 (z-index 문제 해결)
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" style={{ cursor: 'auto' }}>
      {/* 배경 (클릭 시 닫힘) */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        style={{ cursor: 'pointer' }}
      />

      {/* 모달 컨텐츠 */}
      <div 
        className="relative w-full max-w-4xl h-[90vh] bg-zinc-900 border border-zinc-800 shadow-2xl flex flex-col" 
        style={{ cursor: 'auto', maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* 배경 그리드 패턴 */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }} 
        />
        
        {/* 상단 헤더 - 배경 이미지 영역 */}
        <div className="relative z-10 border-b border-zinc-800 flex-shrink-0 overflow-hidden">
          {/* 배경 이미지 */}
          {project.id === 5 ? (
            // MixMix 프로젝트
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                style={{ backgroundImage: `url(${mixmixBgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/95 to-zinc-900" />
            </>
          ) : project.id === 3 ? (
            // Muuvi 프로젝트
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                style={{ backgroundImage: `url(${muuviBgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/95 to-zinc-900" />
            </>
          ) : (
            <div className="absolute inset-0 bg-zinc-900/95 backdrop-blur-sm" />
          )}
          
          {/* 헤더 내용 */}
          <div className="relative z-10 p-6 md:p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-galmuri font-bold text-white">{project.title}</h2>
              <button 
                onClick={onClose}
                className="text-zinc-400 hover:text-white transition-colors text-3xl font-light leading-none"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>
          </div>
        </div>

        {/* 본문 - 스크롤 가능 영역 */}
        <div 
          className="relative z-10 overflow-y-auto flex-1 min-h-0"
          onWheel={(e) => {
            // 모달 내부 스크롤 이벤트가 외부로 전파되지 않도록
            e.stopPropagation();
          }}
          onTouchMove={(e) => {
            // 터치 스크롤도 외부로 전파 방지
            e.stopPropagation();
          }}
        >
          {/* 배경 이미지/색상 영역 */}
          <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
            {project.id === 5 ? (
              // MixMix 프로젝트 - 배경 이미지
              <>
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${mixmixBgImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900" />
              </>
            ) : project.id === 1 ? (
              // 다솜 프로젝트 - 배경 이미지
              <>
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${dasomBgImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900" />
              </>
            ) : project.id === 6 ? (
              // react-kit-cli 프로젝트 - 배경 이미지
              <>
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${reactKitCliBgImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900" />
              </>
            ) : project.id === 4 ? (
              // minu 프로젝트 - 배경 이미지
              <>
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${minuBgImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900" />
              </>
            ) : project.id === 2 ? (
              // 달토끼 프로젝트 - 배경 이미지
              <>
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${moonrabbitBgImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900" />
              </>
            ) : project.id === 3 ? (
              // Muuvi 프로젝트 - 배경 이미지
              <>
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${muuviBgImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900" />
              </>
            ) : (
              // 다른 프로젝트 - 색상 배경
              <>
                <div className={`absolute inset-0 ${project.color || 'bg-zinc-800'}`} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900" />
              </>
            )}
          </div>
          
          <div className="p-6 md:p-8 lg:p-10">
          {/* 1. 개요 및 스택 */}
          <div className="mb-8">
            <p className="text-base md:text-lg text-gray-300 mb-4 leading-relaxed">{project.description}</p>
            {project.role && (
              <div className="mb-6">
                <span className="text-xs md:text-sm text-zinc-400 font-medium mb-2 block">역할</span>
                <p className="text-sm md:text-base text-zinc-200 font-medium">{project.role}</p>
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-zinc-800/50 rounded-full text-xs md:text-sm text-zinc-300 border border-zinc-700 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 2. 상세 내용 (데이터가 있을 때만 표시) */}
          {project.details && (
            <div className="space-y-8">
              
              {/* Problem & Solution - 그리드 2열 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-2 border-violet-400 pl-4 py-2">
                  <h3 className="text-violet-400 font-galmuri font-bold mb-3 text-sm md:text-base">PROBLEM</h3>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{project.details.problem}</p>
                </div>
                <div className="border-l-2 border-green-400 pl-4 py-2">
                  <h3 className="text-green-400 font-galmuri font-bold mb-3 text-sm md:text-base">SOLUTION</h3>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{project.details.solution}</p>
                </div>
              </div>

              {/* Features - 그리드 3열 */}
              <div>
                <h3 className="text-white font-galmuri font-bold mb-4 text-lg md:text-xl border-b border-zinc-700 pb-2">FEATURES</h3>
                <ul className="grid md:grid-cols-3 gap-4">
                  {project.details.features.map((feature, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-gray-300 border border-zinc-800 p-3 bg-zinc-800/30">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Topics - 2열 그리드 */}
              <div>
                <h3 className="text-white font-galmuri font-bold mb-4 text-lg md:text-xl border-b border-zinc-700 pb-2">TECHNICAL DEEP DIVE</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.details.techTopics.map((topic, idx) => (
                    <div key={idx} className="border-l-2 border-indigo-500 pl-4 py-4 bg-zinc-800/20">
                      <h4 className="font-bold text-white mb-3 text-sm md:text-base">{topic.title}</h4>
                      <div className="text-xs md:text-sm text-gray-300 leading-relaxed space-y-3">
                        {topic.desc.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0).map((sentence, i) => (
                          <p key={i} className="text-gray-300/90">
                            {sentence.trim()}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Retrospective */}
              <div className="border-t border-zinc-800 pt-6">
                <h3 className="text-white font-galmuri font-bold mb-3 text-lg md:text-xl">RETROSPECTIVE</h3>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed bg-zinc-800/30 p-4 border border-zinc-800">
                  {project.details.retrospective}
                </p>
              </div>

            </div>
          )}
          </div>
        </div>

        {/* 하단 버튼 영역 */}
        <div className="relative z-10 bg-zinc-900/95 backdrop-blur-sm border-t border-zinc-800 p-6 md:p-8 flex-shrink-0">
          <div className="flex flex-col sm:flex-row gap-4">
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-white text-black font-galmuri font-bold py-3 px-6 rounded text-center hover:bg-zinc-200 transition-colors text-sm md:text-base"
              >
                GitHub Repository
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-zinc-800 text-white font-galmuri font-bold py-3 px-6 rounded text-center hover:bg-zinc-700 transition-colors border border-zinc-700 text-sm md:text-base"
              >
                Live Demo
              </a>
            )}
            {!project.link && !project.demo && (
              <div className="text-center text-gray-400 text-sm">No links available</div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;

