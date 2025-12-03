// 상세 데이터 타입 정의
export interface ProjectDetail {
  problem: string;
  solution: string;
  features: string[];
  techTopics: { title: string; desc: string }[];
  retrospective: string;
}

export const PROFILE = {
  name: "CHOI DOHYEON",
  koreanName: "최도현",
  role: "Frontend Developer",
  email: "do.hy824@gmail.com",
  github: "https://github.com/dohy-eon",
  blog: "https://dohy.tistory.com/",
  bio: [
    "사용자 경험을 최우선으로 고려하며, 직관적이고 완성도 높은 인터페이스 구현을 목표로 합니다.",
    "팀 프로젝트에서는 PM 또는 TL 역할을 맡아 주도적으로 업무를 진행한 경험이 있습니다.",
    "과거엔 풀스택과 모바일 개발을 지향했으나, 현재는 React, TypeScript, Next.js를 중심으로 프론트엔드 개발에 집중하고 있습니다."
  ]
};

export const HISTORY = [
  {
    category: "Education",
    items: [
      { year: "2023.03 ~", title: "동양미래대학교 컴퓨터소프트웨어공학과 재학" },
      { year: "2022.05", title: "고등학교 졸업학력 검정고시" },
      { year: "2021.06", title: "DPS International Ghana (IGCSE 과정 이수)" },
    ]
  },
  {
    category: "Awards",
    items: [
      { year: "2025.11", title: "동양미래대학교 스마트 SW 개발 경진대회 우수상"},
      { year: "2025.02", title: "동양미래대학교 생성형 AI 해커톤 장려상" },
      { year: "2024.05", title: "동양미래대학교 솜커톤 대상" },
      { year: "2023.12", title: "동양미래대학교 AI PD Lab 부트캠프 우수상" },
      { year: "2022.05", title: "TOEIC 910점" },
    ]
  },
  {
    category: "Activities",
    items: [
      { year: "2025.08 ~", title: "전국 IT 연합 동아리 University MakeUs Challenge 9th | 동양미래대 회장" },
      { year: "2025.07 - 2025.08", title: "DND 13th | Web Frontend" },
      { year: "2024.12 ~", title: "동양미래대학교 컴퓨터공학부 전공동아리 다솜 | 학술팀장" },
      { year: "2024.09 - 2024.12", title: "동양미래대학교 컴퓨터공학부 전공동아리 다솜 | 기획부장" },
      { year: "2024.07 - 2024.11", title: "전국 IT 연합 동아리 9oormthon univ 3rd | Web Frontend" },
      { year: "2023.03 - 2024.09", title: "동양미래대학교 컴퓨터공학부 전공동아리 MIT" },
    ]
  }
];

export const SKILLS = [
  { name: "React", level: "Advanced", isMain: true },
  { name: "TypeScript", level: "Advanced", isMain: true },
  { name: "Tailwind CSS", level: "Advanced", isMain: true },
  { name: "Next.js", level: "Intermediate" },
  { name: "Framer Motion", level: "Intermediate" },
  { name: "GSAP", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Git", level: "Advanced" },
];

export const PROJECTS = [
  {
    id: 3,
    title: "Muuvi",
    period: "2025.11 - Present",
    description: "무드기반 콘텐츠 추천 서비스",
    role: "1인 개발",
    stack: ["React", "TypeScript"],
    color: "bg-pink-600",
    link: "https://github.com/dohy-eon/muuvi_Web",
    demo: "https://muuvi.site/"
  },
  {
    id: 2,
    title: "달토끼",
    period: "2025.04 - 2025.10",
    description: "AI기반 고민 상담 서비스",
    role: "Project Manager & Designer & Frontend/Backend Developer",
    stack: ["React", "TypeScript"],
    color: "bg-purple-600",
    link: "https://github.com/DMU-MoonRabbit",
    demo: "https://moonrabbit-web.kro.kr/"
  },
  {
    id: 4,
    title: "minu",
    period: "2025.07 - 2025.08",
    description: "디지털 디톡스 서비스 (DND 13th)",
    role: "Team Leader & Web Frontend",
    stack: ["React", "TypeScript"],
    color: "bg-emerald-600",
    link: "https://github.com/dnd-side-project/dnd-13th-3-frontend"
  },
  {
    id: 6,
    title: "react-kit-cli",
    period: "2025.05 - Present",
    description: "CLI 기반 리액트 세팅 툴 킷",
    role: "1인 개발",
    stack: ["TypeScript", "Node.js"],
    color: "bg-blue-600",
    link: "https://github.com/dohy-eon/react-kit-cli"
  },
  {
    id: 1,
    title: "다솜 홈페이지",
    period: "2024.12 - Present",
    description: "전공동아리 다솜 공식 홈페이지",
    role: "Project Manager & Designer & Frontend/Backend Developer",
    stack: ["React", "TypeScript", "TailwindCSS"],
    color: "bg-indigo-600",
    link: "https://github.com/DASOM-GitHub",
    demo: "https://dmu-dasom.or.kr"
  },
  {
    id: 5,
    title: "MixMix",
    period: "2024.10",
    description: "유학생들의 언어 장벽 및 사회적 고립 해소를 위한 커뮤니티 플랫폼",
    role: "App Frontend Developer",
    stack: ["React Native", "JavaScript", "React Query"],
    color: "bg-orange-500",
    link: "https://github.com/9oormthon-univ/2024_DANPOONG_TEAM_20_FE",
    demo: "",
    details: {
      problem: "국내 외국인 유학생은 10년간 꾸준히 증가했으나, 언어/문화적 차이로 인한 부적응 및 고립감 심화.",
      solution: "소셜/교육 게시판, 실시간 쪽지 번역, Streak 시스템을 통한 소통 중심의 네트워킹 환경 제공.",
      features: [
        "정보 비대칭 해소를 위한 소셜/교육 카테고리 게시판",
        "Google Translation API 기반 실시간 쪽지 번역",
        "유저 리텐션 확보를 위한 Streak 및 퀴즈 시스템"
      ],
      techTopics: [
        {
          title: "React Native CLI 환경 구축",
          desc: "Expo의 한계를 넘어 Native Module 활용 범위를 넓히기 위해 CLI 환경 도입 및 빌드 파이프라인 구축."
        },
        {
          title: "대용량 리스트 렌더링 최적화",
          desc: "초기 ScrollView의 메모리 누수 해결을 위해 FlatList로 마이그레이션 및 getItemLayout 최적화로 60fps 유지."
        }
      ],
      retrospective: "와이어프레임을 직접 제작하여 개발 가능성을 사전 검증했고, 디자이너/기획자와의 소통 비용을 30% 절감했습니다."
    }
  },
  {
    id: 7,
    title: "책이랑",
    period: "2024.12 - 2025.01",
    description: "독서의 가치를 나누는 독서 커뮤니티 플랫폼",
    role: "Project Manager & Designer & Frontend/Backend Developer",
    stack: ["JSP", "JAVA", "MySQL"],
    color: "bg-amber-600",
    link: "https://github.com/titeotty/ChaekIRang",
    demo: "https://www.youtube.com/watch?v=_1pr1QRG7AQ",
    details: {
      problem: "현대사회에서 독서의 가치가 떨어지고, 정보 습득이 책을 통하지 않고 다양한 뉴 미디어, 게임, 영화 등에서 이루어지고 있음.",
      solution: "책에서만 느낄 수 있는 가치를 많은 사람들이 편하게 접근하고 서로 나눌 수 있는 독서 커뮤니티 플랫폼 제공.",
      features: [
        "실시간 토론 & 채팅 기능을 통한 독서 경험 공유",
        "Google Books API를 활용한 책 검색 기능",
        "실시간 알람 기능으로 커뮤니티 활동 알림",
        "AWS EC2를 이용한 DB 클라우드화"
      ],
      techTopics: [
        {
          title: "팀장으로서 프로젝트 리딩 & 기획",
          desc: "기획부터 디자인, 개발까지 전 과정을 주도하며 서비스의 방향성과 핵심 기능을 결정. 애자일, 워터폴 방법을 학습하고 체계적으로 프로젝트를 진행하며 각 팀원의 강점을 살린 역할 분배와 일정 관리."
        },
        {
          title: "실시간 기능 & 데이터 연동 구현",
          desc: "토론 & 채팅 기능 개발 시 실시간 데이터 동기화 및 DB 설계의 어려움을 경험. AWS EC2를 이용한 DB 클라우드화를 통해 여러 사용자가 동시에 이용하는 환경에서 데이터 일관성을 유지하며 성능 최적화와 트랜잭션 관리의 중요성을 학습."
        }
      ],
      retrospective: "팀장으로서 프로젝트를 리딩하며 기획 능력과 리더십을 기를 수 있었고, 실시간 기능 구현을 통해 데이터 동기화와 클라우드 인프라 구축 경험을 쌓았습니다. Google Books API 활용을 통해 외부 API 연동 경험도 얻었습니다."
    }
  },
];

