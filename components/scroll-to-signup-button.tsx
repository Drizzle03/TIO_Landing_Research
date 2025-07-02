"use client";

import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/use-analytics";

export function ScrollToSignupButton() {
  const { trackButtonClick } = useAnalytics();

  const handleClick = () => {
    // Analytics 트래킹
    trackButtonClick('free_start_hero_button');
    
    
    const targetElement = document.getElementById('beta-signup');
    if (!targetElement) return;

    // 부드러운 스크롤을 위한 커스텀 애니메이션
    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.offsetTop - 80; // 상단 여백 80px
    const distance = targetPosition - startPosition;
    const duration = 1200; // 1.2초 동안 스크롤
    let start = 0;

    // easeInOutCubic 이징 함수 - 더 자연스러운 애니메이션
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animateScroll = (currentTime: number) => {
      if (start === 0) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const ease = easeInOutCubic(progress);
      const currentPosition = startPosition + (distance * ease);
      
      window.scrollTo(0, currentPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <Button 
      size="lg" 
      className="rounded-full px-8 py-4 text-lg h-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 border-0"
      onClick={handleClick}
    >
      무료로 시작하기
    </Button>
  );
} 