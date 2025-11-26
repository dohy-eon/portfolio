import { Link } from 'react-router-dom';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';

const Home = () => {
  return (
    <main>
      <IntroSection />
      <AboutSection />
      <ProjectSection />
      {/* 푸터 대신 다음 페이지로 가는 링크 예시 */}
      <div className="h-[50vh] flex items-center justify-center bg-black text-white">
        <Link to="/contact" className="text-4xl font-pretendard hover:text-yellow-400 transition-colors">
          CONTACT ME &rarr;
        </Link>
      </div>
    </main>
  );
};

export default Home;

