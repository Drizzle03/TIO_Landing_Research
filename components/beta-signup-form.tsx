'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCircle, Loader2, AlertCircle, Check } from 'lucide-react'
import { useAnalytics } from '@/hooks/use-analytics'

export default function BetaSignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    job: ''
  })
  const [agreement, setAgreement] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const { trackBetaSignup, trackButtonClick, trackBetaFormStart } = useAnalytics()
  const [hasStartedForm, setHasStartedForm] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // 베타 폼 제출 버튼 클릭 트래킹
    trackButtonClick('beta_signup_submit_button');
    
    setStatus('loading')

    // Google Apps Script 웹앱 URL - Google Apps Script에서 웹앱으로 배포한 후 받은 URL입니다.
    // 이 URL은 Google Sheets API를 사용하여 베타 신청자 정보를 스프레드시트에 저장하는 엔드포인트입니다.
    // TODO: 환경 변수로 이동하여 보안 강화 필요
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyHmvq2QC8j8mjCBUUQE1QPvzbVpkCTRm0oNIv6ZMalPdyi7TFl-OaNbAmoMudwo2hC/exec'

    try {
      // Google Apps Script URL에 파라미터를 직접 추가하여 호출
      const params = new URLSearchParams({
        name: formData.name,
        contact: formData.contact,
        job: formData.job
      });
      
      const finalUrl = `${SCRIPT_URL}?${params}`;
      console.log('전송할 URL:', finalUrl);
      
      // 먼저 no-cors로 실제 데이터 전송
      await fetch(finalUrl, {
        method: 'GET',
        mode: 'no-cors'
      });
      
      // 잠시 대기 후 성공 처리 (Google Apps Script 처리 시간 고려)
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setStatus('success')
      setMessage('베타 신청이 완료되었습니다! 곧 연락드리겠습니다.')
      
      // Analytics 이벤트 트래킹
      trackBetaSignup()
      
      setFormData({ name: '', contact: '', job: '' })
      setAgreement(false)
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : '전송 중 오류가 발생했습니다.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 첫 번째 입력 시 폼 시작 트래킹 (한 번만)
    if (!hasStartedForm && e.target.value.trim() !== '') {
      trackBetaFormStart();
      setHasStartedForm(true);
    }
    
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (status === 'success') {
    return (
      <div className="text-center space-y-4 p-8">
        <div className="flex justify-center">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          신청 완료!
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {message}
        </p>
        <Button
          onClick={() => setStatus('idle')}
          variant="outline"
          className="mt-4"
        >
          다시 신청하기
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="이름"
        required
        disabled={status === 'loading'}
        className="h-12 rounded-lg bg-white/80 dark:bg-slate-700/80 border-blue-200/50 dark:border-blue-700/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <Input
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        placeholder="이메일 또는 연락 가능한 연락처"
        required
        disabled={status === 'loading'}
        className="h-12 rounded-lg bg-white/80 dark:bg-slate-700/80 border-blue-200/50 dark:border-blue-700/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <Input
        name="job"
        value={formData.job}
        onChange={handleChange}
        placeholder="관심 직무 (예: 기획, 마케팅, 개발 등)"
        required
        disabled={status === 'loading'}
        className="h-12 rounded-lg bg-white/80 dark:bg-slate-700/80 border-blue-200/50 dark:border-blue-700/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />

      {/* 개인정보 수집 동의 */}
      <div className="space-y-3 pt-3">
        <div>
          <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
            개인정보 수집 및 이용 동의 (TIO 사전 등록)
          </h4>
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
            TIO 서비스 사전 등록을 위해 개인정보보호법에 따라 동의가 필요합니다. 서비스 베타테스트 소식 전송을 위해 [이름 혹은 닉네임, 이메일 주소] 항목에 대하여 수집일로부터 1년간 보유 후 폐기합니다. 이에 동의하십니까?
          </p>
        </div>
        
        <div className="bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <label 
            htmlFor="privacy-agreement" 
            className="flex items-center cursor-pointer select-none"
          >
            <div className="relative">
              <input
                type="checkbox"
                id="privacy-agreement"
                checked={agreement}
                onChange={(e) => setAgreement(e.target.checked)}
                disabled={status === 'loading'}
                className="sr-only"
              />
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                agreement 
                  ? 'bg-blue-600 border-blue-600' 
                  : 'bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600'
              }`}>
                {agreement && (
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                )}
              </div>
            </div>
            <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
              동의합니다.
            </span>
          </label>
        </div>
      </div>

      {status === 'error' && (
        <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{message}</span>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === 'loading' || !agreement}
        className="w-full h-12 mt-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 border-0 disabled:opacity-50 disabled:transform-none"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            전송 중...
          </>
        ) : (
          '베타서비스 먼저 써보고 싶어요'
        )}
      </Button>
    </form>
  )
} 