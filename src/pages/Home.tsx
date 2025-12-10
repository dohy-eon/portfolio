import { Helmet } from 'react-helmet-async';
import IntroSection from '../components/IntroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectSection from '../components/ProjectSection';
import Footer from '../components/Footer';
import { PROFILE } from '../constants/data';

const Home = () => {
  const siteUrl = window.location.origin;
  const ogImage = `${siteUrl}/src/assets/profile.png`;
  const description = PROFILE.bio[0] || '프론트엔드 개발자 최도현의 포트폴리오입니다.';

  return (
    <>
      <Helmet>
        <title>최도현 | 프론트엔드 개발자 포트폴리오</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="프론트엔드 개발자, React, TypeScript, 포트폴리오, Frontend Developer" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="최도현 | 프론트엔드 개발자 포트폴리오" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content="최도현 | 프론트엔드 개발자 포트폴리오" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      <main>
        <IntroSection />
        <SkillsSection />
        <ProjectSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;

