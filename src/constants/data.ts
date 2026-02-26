// 상세 데이터 타입 정의
export interface MajorPR {
  title: string;
  number: number;
  url?: string;
}

export interface CodeSnippet {
  title: string;
  description: string;
  code: string;
}

export interface ProjectDetail {
  problem: string;
  solution: string;
  features: string[];
  techTopics: { title: string; desc: string }[];
  retrospective: string;
  // 리더십/협업 관련 서술 (있을 때만 섹션 노출)
  leadership?: string;
  // 핵심 PR 목록 (있을 때만 섹션 노출)
  majorPRs?: MajorPR[];
  // 포트폴리오에서 강조하고 싶은 코드 스니펫 (있을 때만 섹션 노출)
  codeSnippets?: CodeSnippet[];
}

// 프로젝트 통계 타입 정의
export interface ProjectStats {
  dau?: number; // Daily Active Users
  mau?: number; // Monthly Active Users
  downloads?: number; // Total Downloads (for NPM packages, etc.)
}

export const PROFILE = {
  name: 'CHOI DOHYEON',
  koreanName: '최도현',
  role: 'Frontend Developer',
  email: 'do.hy824@gmail.com',
  github: 'https://github.com/dohy-eon',
  blog: 'https://dohy.tistory.com/',
  bio: [
    '안녕하세요. 프론트엔드 개발자 최도현입니다.',
    '좋은 사용자 경험은 견고한 코드에서 나온다고 믿습니다. React와 TypeScript 기반의 구조적 설계를 통해 안정적인 서비스를 구현하고, 퍼포먼스를 개선하는데 집중합니다.',
    '개발을 넘어 프로덕트의 전체 여정을 함께합니다. 기능 정의부터 UX 설계, 배포까지 주도적으로 흐름을 만들며, 어떻게 해야 팀이 더 효율적으로 나아갈 수 있을지 고민합니다.',
  ],
};

export const HISTORY = [
  {
    category: 'Education',
    items: [
      { year: '2023.03', title: '동양미래대학교 컴퓨터소프트웨어공학과 전문학사' },
      { year: '2022.05', title: '고등학교 졸업학력 검정고시' },
      { year: '2021.06', title: 'DPS International Ghana (IGCSE 과정 이수)' },
    ],
  },
  {
    category: 'Awards',
    items: [
      { year: '2026.02', title: 'UMC 9기 데모데이 우수상' },
      { year: '2025.12', title: '생성형 AI 경진대회 장려상' },
      { year: '2025.11', title: '스마트 SW 개발 경진대회 우수상' },
      { year: '2025.02', title: '생성형 AI 문제해결 해커톤 장려상' },
      { year: '2024.05', title: '컴퓨터공학부 해커톤 대상' },
      { year: '2023.12', title: 'AI PD Lab 부트캠프 우수상' },
      { year: '2022.05', title: 'TOEIC 910점' },
    ],
  },
  {
    category: 'Activities',
    items: [
      { year: '2025.08 - 2026.02', title: '전국 IT 연합 동아리 UMC 9th | Cassiopeia 지부장, 동양미래대 회장' },
      { year: '2025.07 - 2025.08', title: 'DND 13th | Web Frontend' },
      { year: '2024.12 - 2025.12', title: '컴퓨터공학부 전공동아리 다솜 | 학술팀장' },
      { year: '2024.09 - 2024.12', title: '컴퓨터공학부 전공동아리 다솜 | 기획부장' },
      { year: '2024.07 - 2024.11', title: '전국 IT 연합 동아리 9oormthon univ 3rd | Web Frontend' },
      { year: '2023.03 - 2024.09', title: '컴퓨터공학부 전공동아리 MIT' },
    ],
  },
];

export const SKILLS = [
  // Main Stack
  { name: 'React', level: 4, isMain: true, category: 'Main Stack' },
  { name: 'TypeScript', level: 4, isMain: true, category: 'Main Stack' },
  { name: 'Tailwind CSS', level: 4, isMain: true, category: 'Main Stack' },

  // Frameworks
  { name: 'Next.js', level: 3, category: 'Frameworks' },

  // State Management
  { name: 'Zustand', level: 4, category: 'State Management' },
  { name: 'Recoil', level: 4, category: 'State Management' },
  { name: 'TanStack Query', level: 4, category: 'State Management' },

  // Animation
  { name: 'Framer Motion', level: 4, category: 'Animation' },
  { name: 'GSAP', level: 3, category: 'Animation' },

  // Languages
  { name: 'JavaScript', level: 3, category: 'Languages' },

  // Tools & Backend
  { name: 'Figma', level: 4, category: 'Tools' },
  { name: 'Notion', level: 4, category: 'Tools' },
  { name: 'Git', level: 3, category: 'Tools' },
  { name: 'Jira', level: 2, category: 'Tools' },
  { name: 'Slack', level: 4, category: 'Tools' },
];

export const PROJECTS = [
  {
    id: 7,
    title: 'VALUEDI',
    period: '2025.11 - 2026.02',
    description:
      '“똑똑하게 돈 모을 땐, 밸류디!” AI 시맨틱 추천으로 목표·소비·상품을 연결하는 목표 기반 자산 관리 서비스',
    role: 'Frontend Lead',
    stack: ['React', 'TypeScript', 'Vite', 'Zustand', 'TanStack Query', 'Tailwind CSS', 'Storybook'],
    color: 'bg-sky-700',
    link: 'https://github.com/dohy-eon/valuedi_Web',
    demo: 'https://valuedi-web.vercel.app/',
    details: {
      problem:
        '많은 MZ 세대와 사회초년생은 “돈을 모아야 한다”는 건 알지만, 지금처럼 쓰고 저축해서 목표를 정말 달성할 수 있는지 한눈에 보기 어렵습니다. 소비 데이터가 은행·카드·간편결제에 흩어져 있고, 기존 가계부 앱은 기록과 리포트에만 초점이 맞춰져 있어 “100일 뒤 선물을 사려면 이번 달에 어디서 얼마나 줄여야 하는지” 같은 아주 구체적인 질문에 답을 주지 못합니다.',
      solution:
        '그래서 VALUEDI를 “목표 → 분석 → 행동”으로 이어지는 목표 기반 자산 관리 서비스로 설계했습니다. 온보딩에서 목표 금액과 기간을 먼저 정의하고, 이후에 연동된 소비 데이터를 자동 분석해 목표 달성률과 위험 구간을 계산합니다. 프론트엔드 리드로서 이 여정이 화면마다 다르게 느껴지지 않도록 Storybook 기반 디자인 시스템과 `apiClient`, `queryKeyFactory` 레이어를 먼저 구축해, 모든 페이지가 같은 지표와 로직을 공유하도록 만들었습니다.',
      features: [
        '목표 기반 온보딩: 20–30대 사회초년생을 위한 단기 목표(생일 선물, 소액 여행 등)를 금액·기간 단위로 설정하고, 이후 전 플로우의 기준 데이터로 활용',
        '소비·자산 통합 분석: 은행/카드/간편결제 등 다원화된 데이터를 한 화면에서 통합해 카테고리별 소비, 목표 대비 진척도, 또래 대비 소비 수준을 시각화',
        '행동 추천 및 금융 상품 제안: “카페비를 월 3만원 줄이면 목표 달성 가능”과 같이 구체적인 행동 가이드와, 금융 MBTI·소비 패턴에 기반한 맞춤 금융 상품 추천',
        '안전한 여정 설계: 온보딩·목표 설정·분석·추천 과정에서의 이탈/에러를 방어하는 UX 패턴(이탈 방지, 전역 에러 처리, 세션 관리) 적용으로 안정적인 경험 제공',
      ],
      techTopics: [
        {
          title: '개발 생산성 향상을 위한 프론트엔드 아키텍처 설계',
          desc: '목표 설정, 소비 분석, 추천 등 도메인별 기능이 동시에 개발되는 환경에서 아키텍처 혼선을 막기 위해, PR #96에서 `apiClient` 레이어와 `queryKeyFactory` 패턴을 도입해 데이터 페칭 로직을 전역에서 일관되게 사용할 수 있도록 정리했습니다. 팀원이 새로운 API를 붙일 때는 공통 규칙에 맞는 Query/Mutation 훅만 추가하면 되도록 추상화를 제공했고, 이 규칙을 문서·PR 템플릿·리뷰 기준으로 표준화해, 기능이 늘어나도 유지보수 비용이 선형적으로 증가하지 않도록 설계했습니다.',
        },
        {
          title: '안정적인 UX를 위한 방어적 프로그래밍',
          desc: '사용자 여정 상 이탈률이 높은 구간(온보딩·목표 설정·계좌 연동 등)을 중심으로 방어적 프로그래밍을 적용했습니다. PR #102에서는 자산 목표 입력 플로우를 담당하는 `useGoalForm` 커스텀 훅에 실시간 유효성 검사와 브라우저 이탈 방지 로직을 결합해, 입력 중 새로고침/뒤로 가기에도 데이터 유실 없이 다시 이어서 작성할 수 있게 했습니다. PR #100에서는 전역 에러/로딩 처리 시스템을 구축해 일부 API 장애가 발생해도 핵심 지표(목표·소비 현황)를 먼저 보여주는 Graceful Degradation 패턴을 구현했습니다.',
        },
        {
          title: '복잡한 금융 비즈니스 로직의 수식화와 단위 기능 분리',
          desc: '목표 달성률, 남은 금액, 권장 저축액 등 핵심 KPI를 계산하는 로직이 여러 화면에서 중복되면서, 작은 변경에도 버그 리스크가 크게 늘어나는 문제가 있었습니다. PR #158에서 자산 목표 달성률과 남은 금액 계산 로직을 UI 컴포넌트에서 완전히 분리해 `calculateGoalProgress`, `getRemainingAmount`와 같은 순수 함수로 재구성하고, 금액/기간/수익률 등 변수를 공식으로 명시했습니다. 이를 통해 동일 로직을 온보딩·대시보드·리포트에서 재사용하면서도, 수식 변경 시 단일 지점에서 관리할 수 있는 구조를 만들었습니다.',
        },
      ],
      leadership:
        '프론트엔드 리드로서 단순히 화면을 배치하는 수준이 아니라, “어떤 가설을 어떤 플로우와 KPI로 검증할 것인가”를 팀과 함께 정의하는 데 집중했습니다. 공통 코드베이스와 API/쿼리/폴더 구조 컨벤션, PR 템플릿, 리뷰 체크리스트를 직접 정리해 신규 인원이 합류해도 같은 언어로 설계와 가설을 이야기할 수 있는 환경을 만들었습니다. 업무는 기능 단위가 아닌 도메인 단위(온보딩, 목표, 분석, 추천)로 분배해 각자가 맡은 여정을 끝까지 책임지도록 했고, 리뷰에서는 코드 스타일보다 설계 의도와 트레이드오프, 사용자 여정 상의 영향도를 중심으로 논의가 이뤄지도록 대화를 이끌었습니다.',
      majorPRs: [
        {
          number: 96,
          title: 'apiClient 및 queryKeyFactory 도입으로 데이터 페칭 아키텍처 정리',
        },
        {
          number: 100,
          title: '전역 에러/로딩 처리 시스템 구축 및 Graceful Degradation 적용',
        },
        {
          number: 102,
          title: 'useGoalForm 훅에 실시간 유효성 검사 및 이탈 방지 로직 결합',
        },
        {
          number: 126,
          title: '우선순위 높은 QA 버그 픽스 및 릴리즈 안정화 (1차 QA)',
        },
        {
          number: 154,
          title: '3차 QA 이슈 정리 및 자산 리포트 화면 버그 해결',
        },
        {
          number: 158,
          title: '자산 목표 달성률/남은 금액 계산 로직 유틸리티 함수로 분리',
        },
        {
          number: 86,
          title: 'GitHub Actions 기반 CI/CD 파이프라인 구성 및 자동 배포 설정',
        },
      ],
      codeSnippets: [
        {
          title: 'queryKeyFactory를 활용한 도메인 단위 캐싱 전략',
          description:
            '자산/목표/리포트 등 도메인별로 Query Key를 일관되게 생성하도록 `queryKeyFactory` 유틸을 설계했습니다. 이를 통해 캐시 무효화 시 실수로 다른 도메인의 데이터를 날리거나, 동일 데이터를 여러 키로 중복 보관하는 문제를 사전에 차단했습니다.',
          code: `// 예시: 자산/목표 도메인을 위한 queryKeyFactory
export const queryKeyFactory = {
  asset: {
    all: ["asset"] as const,
    summary: (userId: string) => [...queryKeyFactory.asset.all, "summary", userId] as const,
    goals: (userId: string) => [...queryKeyFactory.asset.all, "goals", userId] as const,
  },
  report: {
    all: ["report"] as const,
    monthly: (userId: string, year: number, month: number) =>
      [...queryKeyFactory.report.all, "monthly", userId, year, month] as const,
  },
};`,
        },
        {
          title: 'useGoalForm 훅의 이탈 방지 및 유효성 검사 결합',
          description:
            '목표 금액/기간/리스크 허용도 입력 중 이탈 시 데이터를 잃지 않도록, 폼 상태와 beforeunload 핸들러를 함께 관리하는 `useGoalForm` 훅을 설계했습니다. 필수 값이 채워지지 않았거나 서버 저장이 완료되지 않은 경우에만 경고를 띄워, UX와 안전성 사이의 균형을 맞췄습니다.',
          code: `export const useGoalForm = () => {
  const [values, setValues] = useState<GoalFormValues>(initialValues);
  const [isDirty, setIsDirty] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (next: GoalFormValues) => {
    // 금액/기간/리스크 등 필수 필드 검증 로직
    // ...
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!isDirty || isSubmitting) return;
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty, isSubmitting]);

  const handleChange = (next: Partial<GoalFormValues>) => {
    setIsDirty(true);
    const updated = { ...values, ...next };
    validate(updated);
    setValues(updated);
  };

  return { values, handleChange, isDirty, isSubmitting, setIsSubmitting };
};`,
        },
      ],
      retrospective:
        "단순히 '어떤 화면을 만들었는가'가 아니라, 팀이 장기간 유지보수할 수 있는 구조를 어떻게 정의할 것인가에 집중한 프로젝트였습니다. PR 단위로 아키텍처 개선의 맥락을 남기고, 리뷰를 통해 팀 전체가 같은 언어로 설계를 이야기할 수 있게 된 경험이 가장 큰 수확이었습니다.",
    },
  },
  {
    id: 3,
    title: 'Muuvi',
    period: '2025.11 - Present',
    description: '무드 기반 콘텐츠 추천 서비스',
    role: '1인 개발',
    stack: ['React', 'TypeScript', 'Recoil', 'Supabase', 'TMDB API', 'OpenAI API', 'Tailwind CSS'],
    color: 'bg-pink-600',
    link: 'https://github.com/dohy-eon/muuvi_Web',
    demo: 'https://muuvi.site/',
    stats: {
      dau: 90,
      mau: 321,
    },
    details: {
      problem:
        "수많은 콘텐츠 속에서 무엇을 볼지 고민하는 '넷플릭스 증후군'을 겪는 사용자들이 많습니다. 기존의 장르 기반 추천은 사용자의 현재 감정이나 상황을 충분히 반영하지 못한다는 점에 착안했습니다.",
      solution:
        "사용자가 선택한 '무드(Mood)' 키워드를 기반으로 콘텐츠를 추천하는 알고리즘을 개발했습니다. TMDB API의 방대한 데이터베이스와 OpenAI를 활용하여 단순 장르 매칭을 넘어선 맥락적 추천을 제공하며, 음성 인식 기능을 통해 사용자 경험을 강화했습니다.",
      features: [
        "무드 기반 추천: '로맨스', '공포', '힐링' 등 무드 태그를 TMDB 장르/키워드와 매핑하여 정교한 추천 제공",
        '음성 인식 검색: Web Audio API와 OpenAI Whisper를 연동하여 음성으로 간편하게 콘텐츠 검색 가능',
        '실시간 시각화: 마이크 입력 음파를 분석하여 Canvas API로 시각화하는 인터랙티브 UI 구현',
        '다국어 지원: Recoil을 활용한 전역 상태 관리로 한국어/영어 언어 변경 기능 구현',
      ],
      techTopics: [
        {
          title: 'Web Audio API와 Canvas를 활용한 오디오 시각화',
          desc: '음성 검색 시 사용자의 목소리에 반응하는 시각적 피드백을 제공하기 위해 노력했습니다. 주파수 데이터를 실시간으로 분석하고 `requestAnimationFrame`으로 캔버스에 파형을 그려내는 `VoiceVisualizer` 컴포넌트를 구현하여 인터랙티브한 경험을 제공했습니다.',
        },
        {
          title: 'TMDB API와 자체 매핑 로직을 통한 추천 고도화',
          desc: "단순히 API를 호출하는 것을 넘어, '01(로맨스)'과 같은 자체 무드 ID를 TMDB의 장르 ID 및 키워드 ID로 변환하는 함수를 설계했습니다. 이를 통해 사용자의 추상적인 감정 키워드를 구체적인 쿼리 파라미터로 변환하여 검색 정확도를 높였습니다.",
        },
      ],
      retrospective:
        '기획부터 디자인, 개발까지 1인으로 진행하며 서비스 전체 라이프사이클을 경험했습니다. 특히 음성 인식 및 시각화와 같은 웹 API 기술을 직접 다루며 프론트엔드 영역의 확장 가능성을 확인했고, 외부 API(TMDB, OpenAI)를 조합하여 새로운 가치를 창출하는 과정에서 백엔드 로직 없이도 풍부한 기능을 구현하는 서버리스 아키텍처의 장점을 체감했습니다.',
    },
  },
  {
    id: 2,
    title: '달토끼',
    period: '2025.04 - 2025.10',
    description: 'AI기반 고민 상담 및 힐링 커뮤니티 서비스',
    role: 'Project Manager & Product Designer & Full Stack Developer',
    stack: ['React', 'TypeScript', 'Zustand', 'Spring Boot', 'LangChain', 'Figma'],
    color: 'bg-purple-600',
    link: 'https://github.com/DMU-MoonRabbit',
    demo: 'https://moonrabbit-web.kro.kr/',
    stats: {
      dau: 19,
      mau: 88,
    },
    details: {
      problem:
        "초기 기획 단계에서 '힐링'과 '상담'이라는 추상적인 주제를 실제 사용자가 몰입할 수 있는 구체적인 서비스 기능으로 구체화하는 것이 가장 큰 과제였습니다. 또한, 타겟 사용자가 편안함을 느낄 수 있는 감성적인 UI와 이를 뒷받침하는 기술적 안정성이 동시에 요구되었습니다.",
      solution:
        "PM으로서 서비스의 핵심 가치를 '익명성 기반의 따뜻한 연결'로 정의하고, 이를 바탕으로 기능 명세를 세분화했습니다. Figma를 활용해 디자인 프로토타입을 제작하고 UT(사용성 테스트)를 진행하여 실제 사용자의 피드백을 기획과 디자인에 즉각 반영하는 애자일 프로세스를 주도했습니다.",
      features: [
        'AI 챗봇 상담: LangChain을 활용한 감성 대화 모델 구축 및 실시간 스트리밍 답변 구현',
        '게이미피케이션 상점: 활동 보상으로 마이페이지를 꾸미는 인터랙티브 UI 구현',
        '커뮤니티 & 데일리 질문: 공감/댓글 기능 및 매일 달라지는 질문을 통한 유저 리텐션 확보',
        '사용자 피드백 기반 UX 개선: UT 결과를 반영한 직관적인 네비게이션 및 마이크로 인터랙션 적용',
      ],
      techTopics: [
        {
          title: 'PM & Design: UT 기반의 기획 고도화 및 일정 관리',
          desc: "추상적인 기획을 '오늘의 질문', '밤하늘 꾸미기' 등 구체적인 기능 단위로 세분화하여 WBS를 수립했습니다. 배포 버전에 대한 UT를 통해 여러 사소한 버그들을 발견했고, 이를 해결하기 위해 노션 칸반보드로 Task 관리를 하며 코드 수정, 디자인 변경을 반복하며 점진적으로 서비스를 개선했습니다.",
        },
        {
          title: 'Frontend: Zustand를 활용한 상태 관리',
          desc: '복잡한 상점 아이템 데이터와 사용자 인증 상태를 효율적으로 관리하기 위해 Zustand를 도입했습니다. 보일러플레이트가 적은 Zustand의 장점을 활용해 스토어를 도메인별로 분리하고, 불필요한 리렌더링을 방지하도록 코드를 구성하여 쾌적한 프론트엔드 성능을 확보했습니다.',
        },
        {
          title: 'Backend: 확장성을 고려한 AI 모델 서빙 아키텍처',
          desc: 'Spring Boot와 LangChain을 연동하여, 프론트엔드에서의 요청을 AI 모델에 구애받지 않고 유연하게 처리할 수 있는 구조를 설계했습니다. 상담 로그를 데이터베이스에 저장하여 향후 파인튜닝을 위한 데이터셋 파이프라인까지 구축했습니다.',
        },
      ],
      retrospective:
        "기획자, 디자이너, 개발자의 역할을 넘나들며 '만들고 싶은 서비스'가 아닌 '사용자가 필요로 하는 서비스'를 만드는 데 집중했습니다. 특히 직접 진행한 UT를 통해 발견한 문제점을 디자인과 코드에 즉각 반영하며 제품을 개선해 나가는 과정에서, 프로덕트 오너(PO)로서의 시야를 넓힐 수 있었습니다.",
    },
  },
  {
    id: 4,
    title: 'minu',
    period: '2025.07 - 2025.08',
    description: '디지털 디톡스 서비스 (DND 13th)',
    role: 'Team Leader & Web Frontend',
    stack: ['Next.js 15', 'TypeScript', 'Zustand', 'TanStack Query', 'Tailwind CSS'],
    color: 'bg-emerald-600',
    link: 'https://github.com/dnd-side-project/dnd-13th-3-frontend',
    demo: '',
    details: {
      problem:
        '단순한 기능 구현을 넘어, 사용자에게 개인화된 경험을 제공하고 복잡한 데이터를 직관적으로 전달해야 했습니다. 특히 초기 진입 이탈을 막기 위한 매끄러운 온보딩 경험과, 서버 데이터와 클라이언트 상태가 유기적으로 동기화되는 메인 대시보드 구축이 필요했습니다.',
      solution:
        '사용자 흐름에 최적화된 단계별 온보딩 시스템과 데이터 시각화 리포트 페이지를 구현했습니다. Next.js 15의 기능을 활용하여 서버 사이드에서 데이터를 효율적으로 병렬 처리하고, 클라이언트에서는 커스텀 훅을 통해 복잡한 입력 및 상태 로직을 모듈화하여 유지보수성을 높였습니다.',
      features: [
        '온보딩 프로세스: 닉네임, 목표, 시간 설정을 위한 단계별 입력 폼 및 유효성 검사 구현',
        '메인 대시보드: 사용자 프로필 및 실시간 스크린타임 데이터 연동, 목표 달성률 시각화',
        '상세 리포트: 일간/주간 스크린타임 통계 시각화 및 AI 기반 맞춤형 피드백 제공',
        '사용자 설정: 프로필 수정, 목표 시간 변경 등 개인화 설정 기능 구현',
      ],
      techTopics: [
        {
          title: 'Custom Hooks를 활용한 복잡한 입력 로직 추상화',
          desc: '온보딩 과정에서 닉네임(한글 조합 처리), 목표 설정(프리셋/직접입력), 시간 설정 등 다양한 입력 케이스를 처리하기 위해 `useNicknameInput`, `useGoalSelection`, `useTimeTarget` 등의 커스텀 훅을 설계했습니다. 이를 통해 UI 컴포넌트와 비즈니스 로직을 분리하고, 코드의 가독성과 재사용성을 극대화했습니다.',
        },
        {
          title: 'Promise.allSettled를 활용한 서버 사이드 병렬 데이터 페칭',
          desc: '메인 페이지 진입 시 사용자 경험을 저해하지 않으면서 필요한 데이터(프로필, 스크린타임)를 빠르게 확보하기 위해 `Promise.allSettled`를 활용한 병렬 데이터 페칭 구조를 구현했습니다. 이를 통해 일부 API가 실패하더라도 전체 페이지 렌더링이 차단되지 않도록 하여 안정성을 확보했습니다.',
        },
        {
          title: '시계열 데이터 시각화 및 AI 피드백 연동',
          desc: "리포트 페이지에서 일간/주간 데이터를 효과적으로 보여주기 위해 시간 데이터를 '시간/분' 단위로 변환하고, 목표 달성 여부(OVER/UNDER)에 따른 동적 UI 스타일링 로직을 구현했습니다. 또한, 선택된 기간에 맞춰 AI 피드백 API를 호출하고 로딩/에러 상태를 관리하여 끊김 없는 사용자 경험을 제공했습니다.",
        },
      ],
      retrospective:
        '단순히 화면을 그리는 것을 넘어, 데이터가 흐르는 전체 파이프라인(API 호출 -> 데이터 가공 -> UI 렌더링)을 설계하고 구현하는 경험을 했습니다. 특히 온보딩부터 메인, 리포트까지 이어지는 사용자 여정을 책임지며, 각 단계에서 발생할 수 있는 예외 케이스(데이터 없음, 로딩 지연 등)를 꼼꼼히 처리하여 서비스의 완성도를 높였습니다.',
    },
  },
  {
    id: 6,
    title: 'react-kit-cli',
    period: '2025.05 - Present',
    description: 'CLI 기반 리액트 세팅 툴 킷',
    role: '1인 개발',
    stack: ['TypeScript', 'Node.js', 'Commander.js', 'NPM'],
    color: 'bg-blue-600',
    link: 'https://github.com/dohy-eon/react-kit-cli',
    demo: 'https://www.npmjs.com/package/react-kit-cli',
    stats: {
      downloads: 393,
    },
    details: {
      problem:
        'React 프로젝트를 시작할 때마다 TypeScript, ESLint, Prettier, Tailwind CSS, 상태 관리 라이브러리 등을 반복적으로 설정해야 하는 번거로움이 있었고, 이로 인해 초기 개발 환경 구축에 불필요한 리소스가 낭비되었습니다.',
      solution:
        '사용자가 명령줄 인터페이스(CLI)를 통해 원하는 기술 스택(Redux, Recoil, Zustand, Vitest 등)을 옵션으로 선택하면, 이에 맞춰 최적화된 보일러플레이트를 자동으로 생성해주는 도구를 개발하여 초기 설정 시간을 획기적으로 단축했습니다.',
      features: [
        '유연한 옵션 선택: Tailwind CSS, Vitest, Redux/Recoil/Zustand 등 필요한 기능만 플래그(--with-*)로 추가 가능',
        '동적 설정 관리: 선택된 옵션에 따라 package.json 의존성 주입 및 설정 파일(vite.config.ts 등) 자동 병합',
        '자동화된 릴리즈 시스템: 버전 관리, Git 태깅, NPM 배포, 롤백 기능을 포함한 커스텀 스크립트 제공',
        '안전한 프로젝트 생성: 프로젝트 명명 규칙 검증 및 기존 디렉토리 중복 방지 로직 적용',
      ],
      techTopics: [
        {
          title: '객체 지향적인 CLI 아키텍처 설계',
          desc: 'ProjectGenerator, ConfigManager 등 역할에 따라 클래스를 분리하여 유지보수성을 높였습니다. 특히 상태 관리 라이브러리별 설정을 모듈화하여, 추후 새로운 라이브러리 지원이 필요할 때 기존 코드를 최소한으로 수정하며 확장할 수 있는 구조를 구축했습니다.',
        },
        {
          title: 'Node.js Child Process를 활용한 배포 자동화',
          desc: "단순히 라이브러리를 사용하는 것을 넘어, child_process 모듈을 활용해 '사전 검사(Lint/Test) -> 버전 업데이트 -> Git 태그 생성 -> 원격 푸시 -> NPM 배포'로 이어지는 CI/CD 파이프라인 스크립트를 직접 구현했습니다. 배포 실패 시 이전 태그로 되돌리는 롤백(Rollback) 로직까지 구현하여 배포 안정성을 확보했습니다.",
        },
      ],
      retrospective:
        '최종 사용자가 아닌 개발자를 위한 도구를 만들며 DX(Developer Experience)에 대해 깊이 고민할 수 있었습니다. 특히 파일 시스템을 직접 다루며 프로젝트 구조를 동적으로 생성하는 로직과, 배포 자동화 스크립트를 작성하는 과정에서 Node.js 환경과 소프트웨어 배포 생명주기에 대한 이해도를 크게 높였습니다.',
    },
  },
  {
    id: 1,
    title: '다솜 홈페이지',
    period: '2024.12 - Present',
    description: '전공동아리 다솜 공식 홈페이지',
    role: 'Project Manager & Designer & Full Stack Developer',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'SpringBoot', 'Oracle OCI'],
    color: 'bg-indigo-600',
    link: 'https://github.com/DASOM-GitHub',
    demo: 'https://dmu-dasom.or.kr',
    details: {
      problem:
        '전공 동아리의 주기적인 부원 모집, 공지사항 전달, 활동 사진 공유 등 모든 운영 프로세스가 비체계적으로 이루어지고 있어, 효율적인 관리와 사용자 접근성이 부족했습니다.',
      solution:
        '부원 모집부터 활동 관리까지 가능한 종합 운영 웹사이트를 구축하여, 사용자와 운영자를 고려한 관리 시스템을 갖춘 플랫폼을 제공. 디자인부터 개발까지 전 과정을 직접 주도하여 단순한 웹사이트가 아닌 실질적인 운영 도구로 설계했습니다.',
      features: [
        '부원 모집 기능: 지원서 제출, 수정, 면접 예약, 합격 발표까지 한 곳에서 관리',
        '공지사항 및 활동 내역 게시: 동아리 소식을 누구나 확인 가능',
        '임원진 소개: GitHub 연동으로 기술 스택 공개',
        '백오피스 기능: 모집/면접 일정, 지원자 관리, 공지 CRUD, 관리자 인증 등',
        'JWT 기반 인증 및 데이터 암호화로 보안 강화',
        '유지보수 및 확장을 고려한 백엔드 구조 설계',
      ],
      techTopics: [
        {
          title: 'PM으로서의 프로젝트 관리 및 협업 전략',
          desc: 'Git Commit/PR/Issue/Branch 전략 수립 및 팀 적용, Squash Merge와 태그 기반 브랜칭 등 체계적인 협업 구조 마련. 일별 비대면 회의를 통한 진행사항 공유 및 일정 관리, 역할 분배를 주도하여 팀 내 개발 문화를 구축했습니다.',
        },
        {
          title: '프론트엔드와 백엔드 풀스택 개발',
          desc: 'React, TypeScript, TailwindCSS를 활용한 메인 페이지와 다솜 소식 페이지 개발. SpringBoot와 Oracle OCI를 사용한 RESTful API 설계 및 구현. 실시간 예약 및 데이터 처리 로직 구현을 통해 상태 동기화와 트랜잭션 처리 경험을 쌓았습니다.',
        },
        {
          title: '기획부터 디자인까지 전 과정 주도',
          desc: '웹사이트의 전체 방향성과 컨셉을 직접 기획하고, 사용자 흐름에 맞춰 UI/UX를 설계. 디자이너가 없는 상황에서 피그마를 활용하여 전체 페이지의 와이어프레임과 프로토타입을 구성했습니다.',
        },
      ],
      retrospective:
        '기획부터 전 과정을 주도한 경험을 통해 프로젝트의 전체적인 흐름을 이해할 수 있었고, 초기 설계 미비로 인한 일정 지연을 팀 회고 및 애자일 방법론을 통해 빠르게 재조정한 경험이 실제 유지보수 시의 중요성을 체감하는 계기가 되었습니다. PM으로서의 협업 전략 수립과 프론트엔드/백엔드 모두 경험하며 풀스택 개발자로서의 역량을 키울 수 있었습니다.',
    },
  },
  {
    id: 5,
    title: 'MixMix',
    period: '2024.10',
    description: '유학생들의 언어 장벽 및 사회적 고립 해소를 위한 커뮤니티 플랫폼',
    role: 'App Frontend Developer',
    stack: ['React Native', 'JavaScript', 'React Query'],
    color: 'bg-orange-500',
    link: 'https://github.com/9oormthon-univ/2024_DANPOONG_TEAM_20_FE',
    demo: '',
    details: {
      problem: '국내 외국인 유학생은 10년간 꾸준히 증가했으나, 언어/문화적 차이로 인한 부적응 및 고립감 심화.',
      solution: '소셜/교육 게시판, 실시간 쪽지 번역, Streak 시스템을 통한 소통 중심의 네트워킹 환경 제공.',
      features: [
        '정보 비대칭 해소를 위한 소셜/교육 카테고리 게시판',
        'Google Translation API 기반 실시간 쪽지 번역',
        '유저 리텐션 확보를 위한 Streak 및 퀴즈 시스템',
      ],
      techTopics: [
        {
          title: 'React Native CLI 환경 구축',
          desc: 'Expo의 한계를 넘어 Native Module 활용 범위를 넓히기 위해 CLI 환경 도입 및 빌드 파이프라인 구축.',
        },
        {
          title: '대용량 리스트 렌더링 최적화',
          desc: '초기 ScrollView의 메모리 누수 해결을 위해 FlatList로 마이그레이션 및 getItemLayout 최적화로 60fps 유지.',
        },
      ],
      retrospective:
        '와이어프레임을 직접 제작하여 개발 가능성을 사전 검증했고, 디자이너/기획자와의 소통 비용을 30% 절감했습니다.',
    },
  },
];
