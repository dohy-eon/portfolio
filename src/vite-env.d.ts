/// <reference types="vite/client" />

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

/* vite-imagetools — 경로가 *format=webp 로 끝나야 매칭됨 (&quality 뒤에 붙이지 말 것) */
declare module '*format=webp' {
  const src: string;
  export default src;
}
