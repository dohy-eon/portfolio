import { PROFILE } from '../constants/data';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* 왼쪽: 소개 */}
          <div>
            <h3 className="text-2xl md:text-3xl font-galmuri font-bold mb-4">{PROFILE.koreanName}</h3>
            <p className="text-zinc-400 mb-2">{PROFILE.role}</p>
            <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
              {PROFILE.bio[0]}
            </p>
          </div>

          {/* 오른쪽: 연락처 및 링크 */}
          <div>
            <h4 className="text-lg font-galmuri font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`mailto:${PROFILE.email}`}
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  {PROFILE.email}
                </a>
              </li>
              <li>
                <a 
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href={PROFILE.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
