import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  
  // 마우스 좌표 저장
  const mouse = useRef({ x: 0, y: 0 });
  
  // GSAP quickTo 설정 (성능 최적화된 마우스 추적 함수)
  const cursorX = useRef<gsap.QuickToFunc>();
  const cursorY = useRef<gsap.QuickToFunc>();
  const followerX = useRef<gsap.QuickToFunc>();
  const followerY = useRef<gsap.QuickToFunc>();

  // 호버 상태 관리
  const [isHovering, setIsHovering] = useState(false);

  useGSAP(() => {
    // 1. 초기 설정: 커서 중앙 정렬을 위해 xPercent, yPercent 설정
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
    gsap.set(followerRef.current, { xPercent: -50, yPercent: -50 });

    // 2. quickTo 인스턴스 생성
    // 작은 점은 빠르지 않게(duration 없이 즉시 반응하지만 부드럽게)
    cursorX.current = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3" });
    cursorY.current = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3" });

    // 큰 원은 약간 느리게 따라옴 (duration: 0.6)
    followerX.current = gsap.quickTo(followerRef.current, "x", { duration: 0.6, ease: "power3" });
    followerY.current = gsap.quickTo(followerRef.current, "y", { duration: 0.6, ease: "power3" });

  }, { scope: cursorRef }); // scope 설정

  useEffect(() => {
    // 마우스 움직임 핸들러
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // 애니메이션 실행
      cursorX.current?.(e.clientX);
      cursorY.current?.(e.clientY);
      followerX.current?.(e.clientX);
      followerY.current?.(e.clientY);
    };

    // 인터랙션 요소(링크, 버튼) 호버 감지
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // a 태그, button 태그, 또는 cursor-pointer 클래스가 있는 요소 위일 때
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  // 호버 상태에 따른 스타일 변화 애니메이션
  useGSAP(() => {
    if (isHovering) {
      // 호버 시: 점은 숨기고, 원은 커지면서 배경색이 바뀜 (mix-blend-difference 효과 극대화)
      gsap.to(cursorRef.current, { scale: 0, duration: 0.2 });
      gsap.to(followerRef.current, { scale: 3, backgroundColor: "white", mixBlendMode: "difference", duration: 0.2 });
    } else {
      // 평소: 점 보이고, 원은 테두리만
      gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
      gsap.to(followerRef.current, { scale: 1, backgroundColor: "transparent", mixBlendMode: "normal", duration: 0.2 });
    }
  }, [isHovering]);

  return (
    <>
      {/* 따라다니는 큰 원 (Follower) */}
      <div 
        ref={followerRef}
        className="custom-cursor fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
      
      {/* 마우스 포인터 역할의 작은 점 (Cursor) */}
      <div 
        ref={cursorRef}
        className="custom-cursor fixed top-0 left-0 w-2 h-2 bg-yellow-400 rounded-full pointer-events-none z-[9999]"
      />
    </>
  );
};

export default Cursor;

