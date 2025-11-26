import { HISTORY, PROFILE } from "../constants/data";

const AboutSection = () => {
  return (
    <section className="bg-zinc-900 text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* 왼쪽: 자기소개 */}
        <div>
          <h2 className="text-4xl font-galmuri font-bold mb-8 text-yellow-400">ABOUT ME</h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            {PROFILE.bio.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>

        {/* 오른쪽: 이력 (History) */}
        <div className="space-y-12">
          {HISTORY.map((group) => (
            <div key={group.category}>
              <h3 className="text-2xl font-galmuri mb-6 border-b border-gray-700 pb-2">
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item, idx) => (
                  <li key={idx} className="flex flex-col md:flex-row md:items-center justify-between group">
                    <span className="text-gray-400 font-mono text-sm md:text-base mb-1 md:mb-0">
                      {item.year}
                    </span>
                    <span className="text-lg font-bold group-hover:text-yellow-400 transition-colors text-right">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;

