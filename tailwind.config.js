/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 메인 화면 기본 폰트 (PretendardVariable)
        sans: ['PretendardVariable', 'system-ui', 'sans-serif'],
        pretendard: ['PretendardVariable', 'system-ui', 'sans-serif'],
        // 헤더 네비게이션 전용 폰트 (Galmuri11)
        galmuri: ['Galmuri11', 'sans-serif'],
      },
      colors: {
        // 필요시 커스텀 컬러 추가
        // primary: '#whatever-color',
      },
    },
  },
  plugins: [],
}