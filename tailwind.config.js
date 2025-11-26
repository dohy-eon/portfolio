/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // font-sans를 기본으로 덮어쓰거나 새로운 유틸리티 추가
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