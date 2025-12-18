import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { PROJECTS } from "../constants/data";
import mixmixBgImage from "../assets/mixmix.png";
import dasomBgImage from "../assets/dasom-bg.png";
import reactKitCliBgImage from "../assets/react-kit-cli.png";
import minuBgImage from "../assets/minu.png";
import moonrabbitBgImage from "../assets/moonrabbit.png";
import muuviBgImage from "../assets/muuvi.png";
import Footer from "../components/Footer";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // 프로젝트 ID로 프로젝트 찾기
  const project = PROJECTS.find(p => p.id === Number(id));

  // 페이지 진입 시 상단으로 스크롤
  useEffect(() => {
    // Lenis 인스턴스가 있으면 Lenis를 사용하여 스크롤
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    } else {
      // Lenis가 없으면 일반 스크롤 사용
      window.scrollTo(0, 0);
    }
  }, [id]); // id가 변경될 때마다 실행

  // 프로젝트를 찾지 못한 경우
  if (!project) {
    return (
      <>
        <Helmet>
          <title>프로젝트를 찾을 수 없습니다 | 최도현 포트폴리오</title>
        </Helmet>
        <main className="min-h-screen bg-zinc-900 text-white flex items-center justify-center pt-20 md:pt-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">프로젝트를 찾을 수 없습니다</h1>
            <button
              onClick={() => navigate('/projects')}
              className="px-6 py-2 bg-violet-400 text-black font-bold rounded hover:bg-violet-300 transition-colors"
            >
              프로젝트 목록으로 돌아가기
            </button>
          </div>
        </main>
      </>
    );
  }

  // 프로젝트별 이미지 매핑
  // Vite 빌드 시 import된 이미지는 경로가 변경되므로, 실제 배포 URL을 사용하거나
  // public 폴더에 이미지를 두고 절대 경로로 참조하는 것을 권장합니다.
  const getProjectImage = () => {
    const siteUrl = window.location.origin;
    // import된 이미지는 빌드 시 해시가 붙으므로, 실제 배포된 경로를 사용해야 합니다.
    // 현재는 상대 경로를 사용하지만, 배포 시에는 절대 URL로 변경하는 것을 권장합니다.
    const imageMap: Record<number, string> = {
      5: mixmixBgImage.startsWith('http') ? mixmixBgImage : `${siteUrl}${mixmixBgImage}`,
      1: dasomBgImage.startsWith('http') ? dasomBgImage : `${siteUrl}${dasomBgImage}`,
      6: reactKitCliBgImage.startsWith('http') ? reactKitCliBgImage : `${siteUrl}${reactKitCliBgImage}`,
      4: minuBgImage.startsWith('http') ? minuBgImage : `${siteUrl}${minuBgImage}`,
      2: moonrabbitBgImage.startsWith('http') ? moonrabbitBgImage : `${siteUrl}${moonrabbitBgImage}`,
      3: muuviBgImage.startsWith('http') ? muuviBgImage : `${siteUrl}${muuviBgImage}`,
    };
    return imageMap[project.id] || `${siteUrl}/src/assets/profile.png`;
  };

  const siteUrl = window.location.origin;
  const projectUrl = `${siteUrl}/projects/${project.id}`;
  const ogImage = getProjectImage();
  const title = `${project.title} | 최도현 포트폴리오`;
  const description = project.description || `${project.title} 프로젝트 상세 정보입니다.`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${project.title}, ${project.stack.join(', ')}, 포트폴리오, 프로젝트`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={projectUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={projectUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      <main className="min-h-screen bg-zinc-900 text-white pt-20 md:pt-24">
      {/* 배경 그리드 패턴 */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0" 
           style={{ 
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />
      
      {/* 상단 헤더 - 배경 이미지 영역 */}
      <div className="relative z-10 border-b border-zinc-800 overflow-hidden">
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
        <div className="relative z-10 p-2 md:p-4 lg:px-20">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-galmuri font-bold text-white">{project.title}</h1>
            <button 
              onClick={() => navigate('/projects')}
              className="text-zinc-400 hover:text-white transition-colors text-3xl font-light leading-none"
              aria-label="뒤로가기"
            >
              &times;
            </button>
          </div>
        </div>
      </div>

      {/* 본문 - 스크롤 가능 영역 */}
      <div className="relative z-10">
        {/* 배경 이미지/색상 영역 */}
        <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
          {project.id === 5 ? (
            // MixMix 프로젝트 - 배경 이미지
            <div 
              className="absolute inset-0 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${mixmixBgImage})` }}
            />
          ) : project.id === 1 ? (
            // 다솜 프로젝트 - 배경 이미지
            <div 
              className="absolute inset-0 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${dasomBgImage})` }}
            />
          ) : project.id === 6 ? (
            // react-kit-cli 프로젝트 - 배경 이미지
            <div 
              className="absolute inset-0 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${reactKitCliBgImage})` }}
            />
          ) : project.id === 4 ? (
            // minu 프로젝트 - 배경 이미지
            <div 
              className="absolute inset-0 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${minuBgImage})` }}
            />
          ) : project.id === 2 ? (
            // 달토끼 프로젝트 - 배경 이미지
            <div 
              className="absolute inset-0 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${moonrabbitBgImage})` }}
            />
          ) : project.id === 3 ? (
            // Muuvi 프로젝트 - 배경 이미지
            <div 
              className="absolute inset-0 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${muuviBgImage})` }}
            />
          ) : (
            // 다른 프로젝트 - 색상 배경
            <div className={`absolute inset-0 ${project.color || 'bg-zinc-800'}`} />
          )}
        </div>
        
        <div className="p-6 md:p-8 lg:p-10 lg:px-20 max-w-7xl mx-auto">
          {/* 1. 개요 및 스택 */}
          <div className="mb-8">
            <p className="text-base md:text-lg text-gray-300 mb-4 leading-relaxed">{project.description}</p>
            {project.period && (
              <div className="mb-4">
                <span className="text-xs md:text-sm text-zinc-400 font-medium mb-2 block">기간</span>
                <p className="text-sm md:text-base text-zinc-200 font-medium">{project.period}</p>
              </div>
            )}
            {project.role && (
              <div className="mb-6">
                <span className="text-xs md:text-sm text-zinc-400 font-medium mb-2 block">역할</span>
                <p className="text-sm md:text-base text-zinc-200 font-medium">{project.role}</p>
              </div>
            )}
            {(project as any).stats && (
              <div className="mb-6">
                <span className="text-xs md:text-sm text-zinc-400 font-medium mb-2 block">서비스 통계</span>
                <div className="flex flex-wrap gap-3">
                  {(project as any).stats.dau !== undefined && (
                    <span className="px-3 py-1.5 bg-zinc-800/50 rounded-full text-xs md:text-sm text-zinc-200 border border-zinc-700 font-medium">
                      최고 DAU: <span className="text-violet-400 font-bold">{(project as any).stats.dau.toLocaleString()}명</span>
                    </span>
                  )}
                  {(project as any).stats.mau !== undefined && (
                    <span className="px-3 py-1.5 bg-zinc-800/50 rounded-full text-xs md:text-sm text-zinc-200 border border-zinc-700 font-medium">
                      MAU: <span className="text-pink-400 font-bold">{(project as any).stats.mau.toLocaleString()}명</span>
                    </span>
                  )}
                  {(project as any).stats.downloads !== undefined && (
                    <span className="px-3 py-1.5 bg-zinc-800/50 rounded-full text-xs md:text-sm text-zinc-200 border border-zinc-700 font-medium">
                      Total Downloads: <span className="text-blue-400 font-bold">{(project as any).stats.downloads.toLocaleString()}</span>
                    </span>
                  )}
                </div>
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

        {/* 하단 버튼 영역 */}
        <div className="relative z-10 bg-zinc-900/95 backdrop-blur-sm border-t border-zinc-800 p-6 md:p-8 lg:px-20 flex-shrink-0">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4">
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

      <Footer />
    </main>
    </>
  );
};

export default ProjectDetailPage;
