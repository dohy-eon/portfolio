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

  // 섹션 제목 컴포넌트
  const SectionTitle = ({ number, title }: { number: string; title: string }) => (
    <div className="border-t-2 border-zinc-600 pt-6 mt-12 mb-8">
      <div className="flex items-baseline gap-4">
        <span className="text-zinc-400 font-mono text-sm md:text-base font-bold tracking-wider">
          {number}
        </span>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-galmuri font-bold text-white">
          {title}
        </h3>
      </div>
    </div>
  );

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
        
        <div className="px-4 md:px-8 lg:px-12 xl:px-20 py-8 md:py-12 lg:py-16 max-w-7xl mx-auto">
          {/* Impact 섹션 - 성과 대시보드 */}
          {(project as any).stats && (
            <div className="mb-10 md:mb-12 p-6 md:p-8 rounded-xl bg-zinc-800/40 border-2 border-zinc-600 backdrop-blur-sm">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-galmuri font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-8 rounded-full bg-zinc-600"></span>
                성과 지표
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {(project as any).stats.dau !== undefined && (
                  <div className="bg-zinc-900/60 p-6 rounded-lg border border-zinc-700/50">
                    <div className="text-xs md:text-sm text-zinc-400 font-medium mb-2">일간 활성 사용자</div>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                      {(project as any).stats.dau.toLocaleString()}
                    </div>
                    <div className="text-xs text-zinc-500">최고 일간 활성 사용자</div>
                  </div>
                )}
                {(project as any).stats.mau !== undefined && (
                  <div className="bg-zinc-900/60 p-6 rounded-lg border border-zinc-700/50">
                    <div className="text-xs md:text-sm text-zinc-400 font-medium mb-2">월간 활성 사용자</div>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                      {(project as any).stats.mau.toLocaleString()}
                    </div>
                    <div className="text-xs text-zinc-500">월간 활성 사용자</div>
                  </div>
                )}
                {(project as any).stats.downloads !== undefined && (
                  <div className="bg-zinc-900/60 p-6 rounded-lg border border-zinc-700/50">
                    <div className="text-xs md:text-sm text-zinc-400 font-medium mb-2">누적 다운로드</div>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                      {(project as any).stats.downloads.toLocaleString()}
                    </div>
                    <div className="text-xs text-zinc-500">누적 다운로드</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 1. 개요 및 스택 */}
          <div className="mb-12">
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">{project.description}</p>
            {project.period && (
              <div className="mb-5">
                <span className="text-sm md:text-base text-zinc-400 font-medium mb-2 block">기간</span>
                <p className="text-base md:text-lg text-zinc-200 font-medium">{project.period}</p>
              </div>
            )}
            {project.role && (
              <div className="mb-6">
                <span className="text-sm md:text-base text-zinc-400 font-medium mb-2 block">역할</span>
                <p className="text-base md:text-lg text-zinc-200 font-medium">{project.role}</p>
              </div>
            )}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.stack.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-zinc-800/50 rounded-full text-sm md:text-base text-zinc-300 border border-zinc-700 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 2. 상세 내용 (데이터가 있을 때만 표시) */}
          {project.details && (
            <div className="space-y-12">
              
              {/* Problem & Solution - 그리드 2열 */}
              <SectionTitle number="01" title="문제 정의와 해결방안" />
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                <div className="border-l-4 border-zinc-600 pl-6 pr-4 py-6 bg-zinc-900/50 rounded-r-lg">
                  <h3 className="text-zinc-400 font-galmuri font-bold mb-4 text-base md:text-lg">문제</h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">{project.details.problem}</p>
                </div>
                <div className="border-l-4 border-zinc-600 pl-6 pr-4 py-6 bg-zinc-800/20 rounded-r-lg">
                  <h3 className="text-zinc-400 font-galmuri font-bold mb-4 text-base md:text-lg">해결방안</h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">{project.details.solution}</p>
                </div>
              </div>

              {/* Features - 그리드 3열 */}
              <div>
                <SectionTitle number="02" title="주요 기능" />
                <ul className="grid md:grid-cols-3 gap-4 lg:gap-6">
                  {project.details.features.map((feature, idx) => {
                    // 피처 문자열을 파싱: "핵심 키워드: 설명" 형식으로 분리
                    const colonIndex = feature.indexOf(':');
                    const hasKeyword = colonIndex > 0 && colonIndex < 50; // 콜론이 앞부분에 있을 때만 키워드로 인식
                    const keyword = hasKeyword ? feature.substring(0, colonIndex).trim() : '';
                    const description = hasKeyword ? feature.substring(colonIndex + 1).trim() : feature;
                    
                    return (
                      <li key={idx} className="text-sm md:text-base border border-zinc-600 p-5 lg:p-6 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/50 transition-colors">
                        {hasKeyword ? (
                          <>
                            <span className="font-bold text-white block mb-2">{keyword}:</span>
                            <span className="text-gray-400 leading-relaxed">{description}</span>
                          </>
                        ) : (
                          <span className="text-gray-300 leading-relaxed">{feature}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Tech Topics - 2열 그리드 */}
              <div>
                <SectionTitle number="03" title="Technical Deep Dive" />
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                  {project.details.techTopics.map((topic, idx) => (
                    <div key={idx} className="border-l-4 border-zinc-600 pl-6 pr-4 py-6 bg-zinc-800/20 rounded-r-lg">
                      <h4 className="font-bold text-zinc-400 mb-4 text-base md:text-lg">{topic.title}</h4>
                      <div className="text-sm md:text-base text-gray-300 leading-loose space-y-4">
                        {topic.desc.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0).map((sentence, i) => (
                          <p key={i} className="text-gray-400">
                            {sentence.trim()}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Retrospective */}
              <div>
                <SectionTitle number="04" title="회고" />
                <p className="text-sm md:text-base text-gray-300 leading-loose bg-zinc-800/30 p-6 lg:p-8 border border-zinc-600 rounded-lg">
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

      <Footer bgColor="bg-zinc-800" />
    </main>
    </>
  );
};

export default ProjectDetailPage;
