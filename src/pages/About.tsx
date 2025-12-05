import { Helmet } from 'react-helmet-async';
import IntroSection from '../components/IntroSection';
import Footer from '../components/Footer';
import { PROFILE } from '../constants/data';

const About = () => {
  const siteUrl = window.location.origin;
  const ogImage = `${siteUrl}/src/assets/profile.png`;
  const description = PROFILE.bio.join(' ');

  return (
    <>
      <Helmet>
        <title>About | 최도현 포트폴리오</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="프론트엔드 개발자, React, TypeScript, 소개, About" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/about`} />
        <meta property="og:title" content="About | 최도현 포트폴리오" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${siteUrl}/about`} />
        <meta name="twitter:title" content="About | 최도현 포트폴리오" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      <main>
        <IntroSection />
        <Footer />
      </main>
    </>
  );
};

export default About;
