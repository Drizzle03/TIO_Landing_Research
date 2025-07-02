import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, BarChart3, Users, Star, ArrowRight, ChevronRight, Building, TrendingUp, Upload, Globe, Newspaper, ArrowDown } from "lucide-react"
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
                필수적인 기업 분석,
                <br />5분 만에 끝내세요.
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
      <section id="features" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimateOnScroll className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                  기업 공시부터 최근 뉴스까지,
                  <br />
                  한 번에
                </h2>
                <div className="text-gray-600 dark:text-gray-300">
                  <p className="text-lg">Dart 기업 공시, 회사 홈페이지, 언론 보도까지</p>
                  <p className="text-lg">여러 곳에 흩어진 기업 정보를 한 곳에서</p>
                  <p className="text-lg">자소서에 필요한 핵심 내용만 정리해드려요</p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <Card className="overflow-hidden border-gray-200/60 dark:border-gray-700/60 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg shadow-gray-400/20 dark:shadow-black/10">
                  <div className="p-6 space-y-6">

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">기업 자료 통합 분석</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">파편화된 정보를 취합해 보기 쉽게 제공합니다.</p>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="bg-slate-100 dark:bg-slate-800/80 rounded-lg p-3">
                      <FileText className="h-6 w-6 text-gray-500 dark:text-gray-400 mx-auto mb-2" />  
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">DART 공시</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-800/80 rounded-lg p-3">
                      <Globe className="h-6 w-6 text-gray-500 dark:text-gray-400 mx-auto mb-2" />
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">홈페이지</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-800/80 rounded-lg p-3">
                      <Newspaper className="h-6 w-6 text-gray-500 dark:text-gray-400 mx-auto mb-2" />
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">최신 뉴스</p>
                      </div>
                    </div>

                    <div className="flex justify-center pt-2">
                      <ArrowDown className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                    </div>

                    {/* AI 요약 리포트 (강조) */}
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-5 text-white shadow-lg shadow-blue-500/20">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur">
                          <Image src="/LOGO.png" alt="TIO Logo" width={18} height={18} className="opacity-90"/>
                        </div>
                        <h4 className="font-semibold text-white">AI 최종 분석 리포트</h4>
                      </div>
                      <p className="text-sm text-white/90 leading-relaxed">
                        "삼성전자는 AI 반도체 시장을 선도하며, '갤럭시 AI'를 통해 글로벌 확산을 목표로 합니다. HBM3E와 2나노 파운드리 기술에 집중 투자하며 미래 성장을..."
                      </p>
                    </div>

                  </div>
                </Card>
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
                <Card className="overflow-hidden border-gray-200/60 dark:border-gray-700/60 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg shadow-gray-400/20 dark:shadow-black/10">
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 tracking-tight">마케팅</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Specialist</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-6 pb-6">
                    <div className="space-y-5">
                      <div>
                        <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">주요 역량</h4>
                        <div className="flex flex-wrap gap-2">
                          {['데이터 분석력', '디지털 마케팅', '창의적 기획', '커뮤니케이션', '트렌드 파악'].map((skill) => (
                            <span key={skill} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded text-xs font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">합격 자소서 키워드</h4>
                        <div className="flex flex-wrap gap-2">
                          {['#혁신', '#데이터', '#고객중심', '#협업', '#브랜드'].map((keyword) => (
                            <span key={keyword} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded text-xs font-medium">
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* 자소서 활용 예시 (강조) */}
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-5 text-white shadow-lg shadow-blue-500/20">
                        <h4 className="text-base font-semibold text-white mb-2">자소서 활용 Tip</h4>
                        <p className="text-sm text-white/90 leading-relaxed">
                          "SNS 캠페인 기획 시, 데이터 분석으로 타겟 고객을 세분화해 전환율 30%를 높인 경험이 있습니다. 이 과정에서 빠른 트렌드 파악과 창의적 콘텐츠 기획 역량을 키웠습니다."
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
                <Card className="overflow-hidden border-gray-200/60 dark:border-gray-700/60 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg shadow-gray-400/20 dark:shadow-black/10">
                  <div className="p-6 space-y-6">
                    {/* Header */}
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                        <Upload className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 tracking-tight">추가 리서치 자료</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">PDF, DOC, TXT 지원</p>
                      </div>
                    </div>

                    {/* Uploaded File */}
                    <div className="flex items-center space-x-3 p-3 bg-slate-100 dark:bg-slate-800/80 rounded-lg">
                      <FileText className="h-5 w-5 text-slate-500" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">삼성전자_2024_지속가능경영보고서.pdf</span>
                    </div>

                    {/* AI 분석 요약 (강조) */}
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-5 text-white shadow-lg shadow-blue-500/20">
                      <h4 className="text-base font-semibold text-white mb-2">AI 분석 요약</h4>
                      <p className="text-sm text-white/90 leading-relaxed">
                        환경경영 강화, 2050 탄소중립 목표, 순환경제 구축 등 지속가능경영 전략 발견. ESG 키워드를 자소서에 활용 가능.
                      </p>
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

            <Card className="overflow-hidden border-white/20 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl shadow-lg shadow-gray-400/20 dark:shadow-black/10">
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
