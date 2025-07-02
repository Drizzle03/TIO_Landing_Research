'use client'

import { useCallback } from 'react'

// GA4 이벤트 타입 정의
interface GA4Event {
  action: string
  category?: string
  label?: string
  value?: number
}

// Clarity 이벤트 타입 정의
interface ClarityEvent {
  name: string
  data?: Record<string, any>
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    clarity: (...args: any[]) => void
  }
}

export function useAnalytics() {
  // GA4 이벤트 트래킹
  const trackGA4Event = useCallback(({ action, category, label, value }: GA4Event) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }, [])

  // Clarity 커스텀 이벤트
  const trackClarityEvent = useCallback(({ name, data }: ClarityEvent) => {
    if (typeof window !== 'undefined' && window.clarity) {
      window.clarity('event', name, data)
    }
  }, [])

  // 베타 신청 완료 이벤트
  const trackBetaSignup = useCallback(() => {
    trackGA4Event({
      action: 'beta_signup_success',
      category: 'conversion',
      label: 'beta_form_submit_success'
    })
    
    trackClarityEvent({
      name: 'beta_signup_success',
      data: { form: 'main_beta_form', status: 'success' }
    })
  }, [trackGA4Event, trackClarityEvent])

  // 베타 폼 시작 이벤트
  const trackBetaFormStart = useCallback(() => {
    trackGA4Event({
      action: 'beta_form_start',
      category: 'engagement',
      label: 'beta_form_interaction'
    })
    
    trackClarityEvent({
      name: 'beta_form_start',
      data: { form: 'main_beta_form' }
    })
  }, [trackGA4Event, trackClarityEvent])

  // 스크롤 이벤트 (특정 섹션 도달)
  const trackSectionView = useCallback((sectionName: string) => {
    trackGA4Event({
      action: 'section_view',
      category: 'scroll',
      label: sectionName
    })
  }, [trackGA4Event])

  // 버튼 클릭 이벤트
  const trackButtonClick = useCallback((buttonName: string) => {
    trackGA4Event({
      action: 'button_click',
      category: 'engagement',
      label: buttonName
    })
  }, [trackGA4Event])

  return {
    trackGA4Event,
    trackClarityEvent,
    trackBetaSignup,
    trackBetaFormStart,
    trackSectionView,
    trackButtonClick,
  }
} 