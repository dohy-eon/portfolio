/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'sans-serif',
        ],
        pretendard: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'sans-serif',
        ],
        galmuri: ['Galmuri11', 'system-ui', 'sans-serif'],
      },
      colors: {
        // 필요시 커스텀 컬러 추가
        // primary: '#whatever-color',
      },
    },
  },
  plugins: [],
}