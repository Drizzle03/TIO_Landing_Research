import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, BarChart3, Users, Star, ArrowRight, ChevronRight, Building, TrendingUp, Upload } from "lucide-react"
import Image from "next/image"
import { ScrollingTags } from "@/components/scrolling-tags";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ThemeToggle } from "@/components/theme-toggle";
import BetaSignupForm from "@/components/beta-signup-form";
import { ScrollToSignupButton } from "@/components/scroll-to-signup-button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TIO - 취업 준비 AI Agent | 자소서에 필요한 기업 분석, 5분만에 끝내세요",
  description: "Dart 기업 공시부터 회사 홈페이지, 최근 뉴스까지 취업에 필요한 기업 정보만 모으고 AI가 정리해드려요. TIO와 함께 자소서 작성을 위한 기업 분석을 시작하세요.",
  keywords: ["TIO", "취업 준비", "자소서 작성", "기업 분석", "AI 취업", "기업 정보", "자기소개서", "취업 AI", "베타 서비스"],
  openGraph: {
    title: "TIO - 취업 준비 AI Agent",
    description: "자소서에 필요한 기업 분석, 5분만에 끝내세요. AI가 기업 정보를 정리해드려요.",
    url: "https://tio-landingpage.vercel.app",
    type: "website",
    images: [
      {
        url: "/LOGO.png",
        width: 1200,
        height: 630,
        alt: "TIO 취업 AI Agent",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TIO - 취업 준비 AI Agent",
    description: "자소서에 필요한 기업 분석, 5분만에 끝내세요.",
    images: ["/LOGO.png"],
  },
};

export default function TIOLanding() {
  const tags1 = [ 
    "기업공고",
    "재무제표", 
    "최신 뉴스 기사", 
    "CSR 활동", 
    "기업문화", 
    "산업동향", 
    "경쟁사 분석",  
    "사업 보고서", 
    "IR 자료", 
    "기업 비전"
  ];

  return (
    <main className="min-h-screen bg-background text-foreground" role="main">
      {/* Header */}
      <header className="border-b border-border/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-xl font-bold">
              <Image src="/LOGO.png" alt="TIO 취업 AI Agent 로고" width={32} height={32} className="rounded-md" priority />
              <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">TIO</h1>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* 배경 패턴 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <AnimateOnScroll>
              <Badge variant="outline" className="mb-6 gap-2 px-4 py-1.5 border-blue-200 bg-blue-50/80 text-blue-800 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-200 backdrop-blur-sm">
                당신만을 위한 취업 Agent TIO
              </Badge>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
                자소서에 필요한 기업 분석,
                <br />5분만에 끝내세요.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200} className="mt-6 space-y-1">
              <div>
                <p className="text-lg text-gray-600 dark:text-gray-400">Dart 기업 공시부터 회사 홈페이지, 최근 뉴스까지</p>
                <p className="text-lg text-gray-600 dark:text-gray-400">취업에 필요한 기업 정보만 모으고 AI가 정리해드려요</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div>
                <ScrollToSignupButton />
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* Scrolling Tags Section */}
      <section>
        <div className="container mx-auto px-3">
          <ScrollingTags tags={tags1} speed="normal" direction="left"/>
        </div>
      </section>

      {/* Feature 1: 기업 공시부터 최근 뉴스까지 한 번에 */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimateOnScroll className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                  기업 공시부터 최근 뉴스까지
                  <br />
                  한 번에
                </h2>
                <div className="text-muted-foreground">
                  <p className="text-lg">Dart 기업 공시, 회사 홈페이지, 언론 보도까지</p>
                  <p className="text-lg">여러 곳에 흩어진 기업 정보를 한 곳에서</p>
                  <p className="text-lg">자소서에 필요한 핵심 내용만 정리해드려요</p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="rounded-2xl border border-white/20 bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl p-3 shadow-2xl">
                  <div className="overflow-hidden rounded-xl">
                    {/* 기업 분석 UI 미리보기 */}
                    <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 p-6 min-h-[450px] flex flex-col justify-start space-y-4">
                      {/* 헤더 */}
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                          <Building className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">삼성전자 분석 결과</h3>
                      </div>

                      {/* 최근 동향 */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 shadow-sm border border-blue-100/50 dark:border-blue-800/30">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm">
                            최근 동향
                          </span>
                        </div>
                        <p className="text-gray-900 dark:text-gray-100 text-sm leading-relaxed">
                          2025년 AI 반도체 시장 공격적 투자 확대, 갤럭시 AI 기능 강화로 프리미엄 스마트폰 차별화 전략 추진
                        </p>
                      </div>

                      {/* 사업 현황 */}
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 shadow-sm border border-purple-100/50 dark:border-purple-800/30">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-sm">
                            주요 사업
                          </span>
                        </div>
                        <p className="text-gray-900 dark:text-gray-100 text-sm leading-relaxed">
                          메모리 반도체(매출 1위), 스마트폰(갤럭시 시리즈), 디스플레이, 가전제품 등 다각화된 사업 포트폴리오
                        </p>
                      </div>

                      {/* 자소서 포인트 */}
                      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-4 shadow-sm border border-indigo-100/50 dark:border-indigo-800/30">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-sm">
                            자소서 포인트
                          </span>
                        </div>
                        <p className="text-gray-900 dark:text-gray-100 text-sm leading-relaxed">
                          AI 기술 혁신, 지속가능경영, 글로벌 경쟁력과 관련된 경험을 어필하면 효과적
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: 기업 직무에 대한 리서치도 해야죠 */}
      <section className="bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20 md:py-28 relative overflow-hidden">
        {/* 배경 패턴 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimateOnScroll className="space-y-6 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                  기업 직무에 대한
                  <br />
                  리서치도 해야죠
                </h2>
                <div className="text-gray-600 dark:text-gray-300">
                  <p className="text-lg">지원하는 직무가 어떤 업무를 하는지,</p>
                  <p className="text-lg">어떤 역량이 필요한지까지 분석해서</p>
                  <p className="text-lg">맞춤형 자소서 포인트를 제안드려요</p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200} className="lg:order-1">
                <Card className="overflow-hidden border-white/20 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl shadow-2xl">
                  <div className="p-6">
                    {/* 헤더 */}
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">마케팅 직무 분석</h3>
                    </div>

                    {/* 직무 내용 */}
                    <div className="space-y-4">
                      {/* 주요 업무 */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 shadow-sm border border-blue-100/50 dark:border-blue-800/30">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm">
                            주요 업무
                          </span>
                        </div>
                        <p className="text-gray-900 dark:text-gray-100 text-sm leading-relaxed">
                          브랜드 전략 수립, 디지털 마케팅 캠페인 기획, 고객 데이터 분석, ROI 측정 및 개선
                        </p>
                      </div>

                      {/* 필요 역량 */}
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 shadow-sm border border-purple-100/50 dark:border-purple-800/30">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-sm">
                            필요 역량
                          </span>
                        </div>
                        <p className="text-gray-900 dark:text-gray-100 text-sm leading-relaxed">
                          데이터 분석력, 창의적 사고, 트렌드 파악, 커뮤니케이션, 프로젝트 관리
                        </p>
                      </div>

                      {/* 자소서 어필 포인트 */}
                      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-4 shadow-sm border border-indigo-100/50 dark:border-indigo-800/30">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-sm">
                            어필 포인트
                          </span>
                        </div>
                        <p className="text-gray-900 dark:text-gray-100 text-sm leading-relaxed">
                          데이터 기반 의사결정 경험, 창의적 아이디어 실행 사례, 팀워크를 통한 성과 달성 경험
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: 따로 찾은 자료도 쉽게 추가해요 */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* 배경 패턴 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimateOnScroll className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                  따로 찾은 자료도
                  <br />
                  쉽게 추가해요
                </h2>
                <div className="text-gray-600 dark:text-gray-300">
                  <p className="text-lg">추가로 서치한 자료가 있다면</p>
                  <p className="text-lg">쉽게 파일을 등록해서 인사이트를 확인하세요</p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <Card className="overflow-hidden border-white/20 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl shadow-2xl">
                  <div className="p-6 space-y-6">
                    {/* 헤더 */}
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                        <Upload className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">추가 자료 업로드</h3>
                    </div>

                    {/* 업로드 영역 */}
                    <div className="space-y-4">
                      {/* 파일 업로드 */}
                      <div className="border-2 border-dashed border-blue-300 dark:border-blue-600 rounded-xl p-6 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20">
                        <div className="text-center space-y-2">
                          <Upload className="h-8 w-8 text-blue-500 mx-auto" />
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">파일을 드래그하거나 클릭해서 업로드</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">PDF, DOC, TXT 파일 지원</p>
                        </div>
                      </div>

                      {/* 업로드된 파일 예시 */}
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">업로드된 파일:</p>
                        <div className="flex items-center space-x-3 p-3 bg-white dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600">
                          <FileText className="h-5 w-5 text-blue-500" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">삼성전자_2024_지속가능경영보고서.pdf</span>
                        </div>
                      </div>

                      {/* AI 분석 결과 */}
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4 shadow-sm border border-green-100/50 dark:border-green-800/30">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-sm">
                            AI 분석 완료
                          </span>
                        </div>
                        <p className="text-gray-900 dark:text-gray-100 text-sm leading-relaxed">
                          환경경영 강화, 탄소중립 2050 목표, 순환경제 구축 등 지속가능경영 전략 발견. ESG 관련 자소서 작성 시 활용 가능한 키워드 추출 완료
                        </p>
                      </div>
                    </div>

                  </div>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews - 새로운 리뷰 내용 */}
      <section className="bg-muted/50 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <AnimateOnScroll className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-16 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">베타서비스 유저 리뷰</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  review: "자소서 작성하면서 지원 기업에 대한 분석이 가장 귀찮았는데, 도움이 많이 됐어요",
                  author: "김민수",
                  role: "취업 준비생"
                },
                {
                  review: "지원 기업의 최근 사업 내용까지 파악되니까 자소서로 어필해야 하는 부분을 쉽게 알 수 있었어요",
                  author: "이서연",
                  role: "경력 구직자"
                },
                {
                  review: "베타 서비스로도 이정도면 정식 서비스가 너무 기대돼요",
                  author: "박지훈",
                  role: "대학생"
                }
              ].map((item, index) => (
                <AnimateOnScroll key={index} delay={index * 150}>
                  <Card className="overflow-hidden border-border/40 bg-card/30 hover:bg-card/50 transition-colors h-full">
                    <div className="p-6 h-full flex flex-col">
                      {/* 별점 */}
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      
                      {/* 리뷰 내용 */}
                      <div className="flex-1 mb-4">
                        <p className="text-foreground/90 leading-relaxed text-sm">
                          "{item.review}"
                        </p>
                      </div>
                      
                      {/* 작성자 정보 */}
                      <div className="pt-2">
                        <p className="text-muted-foreground text-sm">
                          - {item.author}, {item.role}
                        </p>
                      </div>
                    </div>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Beta Signup - 출시 알림 받기 */}
      <section id="beta-signup" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* 배경 패턴 */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimateOnScroll className="max-w-2xl mx-auto text-center">
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">출시 알림을 받아보세요!</h2>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="text-lg">지금 예약하시면 서비스 출시 시</p>
                <p className="text-lg">가장 먼저 체험하실 수 있습니다.</p>
              </div>
            </div>

            <Card className="overflow-hidden border-white/20 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl shadow-2xl">
              <div className="p-6">
                <BetaSignupForm />
                <div className="mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">개인정보는 안전하게 보호됩니다.</p>
                </div>
              </div>
            </Card>

          </AnimateOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-start gap-2 text-xl font-bold mb-4">
            <Image src="/LOGO.png" alt="TIO 취업 AI Agent 로고" width={24} height={24} className="rounded-md" loading="lazy" />
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">TIO</span>
          </div>
          
          <div className="space-y-1 text-sm text-muted-foreground text-left">
            <p>대표 : 편유나</p>
            <p>문의 : tiotio.business@gmail.com</p>
            <p>ⓒ 2025 TIO All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
