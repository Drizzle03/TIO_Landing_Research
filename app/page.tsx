import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, FileText, BarChart3, Users, Star, ArrowRight, ChevronRight } from "lucide-react"
import Image from "next/image"
import { ScrollingTags } from "@/components/scrolling-tags";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ThemeToggle } from "@/components/theme-toggle";
import BetaSignupForm from "@/components/beta-signup-form";
import { ScrollToSignupButton } from "@/components/scroll-to-signup-button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TIO - 취업 준비 AI Agent | 자소서 작성부터 면접 준비까지",
  description: "막막한 경험정리를 AI 대화로 자소서 소재로 만들어보세요. TIO와 함께 취업 준비를 체계적으로 시작하세요. 베타 서비스 무료 이용 가능.",
  keywords: ["TIO", "취업 준비", "자소서 작성", "면접 준비", "AI 취업", "경험 정리", "자기소개서", "취업 AI", "베타 서비스"],
  openGraph: {
    title: "TIO - 취업 준비 AI Agent",
    description: "질문만 답하면, 자소서 쓸 준비 끝. AI와의 대화로 경험을 자소서 소재로 정리하세요.",
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
    description: "질문만 답하면, 자소서 쓸 준비 끝.",
    images: ["/LOGO.png"],
  },
};

export default function TIOLanding() {
  const tags1 = [ 
    "채용 면접",
    "자기소개서 준비", 
    "면접 대비", 
    "컨설팅 기초자료", 
    "경험 정리", 
    "이직 준비", 
    "경험정리",  
    "포트폴리오 작성", 
    "자기소개서", 
    "직무적합성 분석"
  ];
  ;

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
                당신만을 위한 취업 Agent, TIO
              </Badge>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
              질문에 답하면
                <br />자소서 쓸 준비 끝.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200} className="mt-6 space-y-1">
              <div>
                <p className="text-lg text-gray-600 dark:text-gray-400">막막했던 경험이 직무 맞춤 리포트로 정리돼요</p>
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

      {/* Feature 1 */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimateOnScroll className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                  대화만 하면,
                  <br />
                  자소서 소재가 정리됩니다
                </h2>
                <div className="text-muted-foreground">
                  <p className="text-lg">편하게 얘기하세요.</p>
                  <p className="text-lg">AI와의 대화로 경험별 인사이트를 추출해</p>
                  <p className="text-lg">자소서에 바로 쓸 수 있는 리포트로 만들어드려요</p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="rounded-2xl border border-white/20 bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl p-3 shadow-2xl">
                  <div className="overflow-hidden rounded-xl">
                    {/* 실제 대화형 UI 미리보기 */}
                    <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 p-6 min-h-[450px] flex flex-col justify-start space-y-4 pt-8">
                      {/* 사용자 메시지 1 */}
                      <div className="flex items-start space-x-3 flex-row-reverse max-w-[85%] ml-auto">
                        <div className="flex-1 flex justify-end">
                          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl rounded-tr-sm px-4 py-3 shadow-lg">
                            <p className="text-white text-sm font-regular">
                              저희 동아리에서 무슨 실험 같은 걸 했던 기억이 있어요...
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* TIO 메시지 1 */}
                      <div className="flex items-start space-x-3 max-w-[85%]">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg flex-shrink-0">
                          <Image 
                            src="/LOGO.png" 
                            alt="TIO" 
                            width={16} 
                            height={16} 
                            className="w-4 h-4 object-contain brightness-0 invert"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="bg-white dark:bg-slate-700 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100 dark:border-slate-600">
                            <p className="text-gray-800 dark:text-gray-100 text-sm font-regular text-justify first:">
                              좋아요! 그 실험에서 맡은 역할이나 기억에 남는 과정이 있을까요?
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 사용자 메시지 2 */}
                      <div className="flex items-start space-x-3 flex-row-reverse max-w-[85%] ml-auto">
                        <div className="flex-1 flex justify-end">
                          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl rounded-tr-sm px-4 py-3 shadow-lg">
                            <p className="text-white text-sm font-regular">
                              음… 제가 실험 기획한 건 아니고, 데이터 정리랑 보고서 쓴 거요.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* TIO 메시지 2 */}
                      <div className="flex items-start space-x-3 max-w-[85%]">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg flex-shrink-0">
                          <Image 
                            src="/LOGO.png" 
                            alt="TIO" 
                            width={16} 
                            height={16} 
                            className="w-4 h-4 object-contain brightness-0 invert"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="bg-white dark:bg-slate-700 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100 dark:border-slate-600">
                            <p className="text-gray-800 dark:text-gray-100 text-sm font-regular text-justify first:">
                              그럼 '실험 결과를 분석하고 보고서로 정리한 경험'으로 정리해볼게요. 혹시 데이터 정리 시 사용한 도구나 주요 결과도 떠오르시나요?
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 사용자 메시지 3 */}
                      <div className="flex items-start space-x-3 flex-row-reverse max-w-[85%] ml-auto">
                        <div className="flex-1 flex justify-end">
                          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl rounded-tr-sm px-4 py-3 shadow-lg">
                            <p className="text-white text-sm font-regular">
                              엑셀로 150개 데이터를 정리했고, 통계 분석 결과 3개 그룹 간 유의미한 차이(p&lt;0.05)를 발견했어요. 그중 A 그룹의 만족도가 평균 4.6점으로 가장 높았고,  B, C 그룹은 각각 3.9점, 3.8점이었어요.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 */}
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
                  막연한 경험도
                  <br />
                  나만의 강점으로
                </h2>
                <div className="text-gray-600 dark:text-gray-300">
                  <p className="text-lg">TIO는 말 속에 숨은 키워드를 분석해</p>
                  <p className="text-lg">직무별 강점과 적합성을 뽑아드립니다.</p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200} className="lg:order-1">
                <Card className="overflow-hidden border-white/20 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl shadow-2xl">
                  <div className="p-6">
                    {/* 헤더 */}
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                        <BarChart3 className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">리포트 요약 예시</h3>
                    </div>

                    {/* 리포트 내용 */}
                    <div className="space-y-4">
                      {/* 직무 */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 shadow-sm border border-blue-100/50 dark:border-blue-800/30">
                        <div className="flex items-center space-x-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm">
                            직무
                          </span>
                          <span className="text-gray-900 dark:text-gray-100 font-medium">기획/운영</span>
                        </div>
                      </div>

                      {/* 강점 키워드 */}
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 shadow-sm border border-purple-100/50 dark:border-purple-800/30">
                        <div className="space-y-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-sm">
                            강점 키워드
                          </span>
                          <p className="text-gray-900 dark:text-gray-100 font-medium pl-1">
                            문제 해결, 협업 조율, 데이터 기반 실행
                          </p>
                        </div>
                      </div>

                      {/* 추천 문항 */}
                      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-4 shadow-sm border border-indigo-100/50 dark:border-indigo-800/30">
                        <div className="space-y-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-sm">
                            추천 자소서 문항
                          </span>
                          <p className="text-gray-700 dark:text-gray-200 pl-1">
                          예상치 못한 문제를 해결하며 성과를 낸 경험이 있다면 적어주세요.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3 */}
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
                  정리만 하고 끝? 아니요,
                  <br />
                  자소서까지 연결됩니다
                </h2>
                <div className="text-gray-600 dark:text-gray-300">
                  <p className="text-lg">정리된 경험은 그대로 자소서로 이어집니다.</p>
                  <p className="text-lg">소재 정리부터 문장 추천까지, TIO가 함께 갑니다.</p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <Card className="overflow-hidden border-white/20 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl shadow-2xl">
                  <div className="p-6 space-y-6">
                    {/* 헤더 */}
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">AI 자소서 초안 생성</h3>
                    </div>

                    {/* 1단계: 질문 */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold">Q</span>
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">질문</span>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50/80 to-slate-50 dark:from-blue-900/20 dark:to-slate-800/20 rounded-lg p-4 border border-blue-100/50 dark:border-blue-800/30">
                        <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
                          현재까지 진행했던 마케팅 경험 중 데이터 기반의 의사결정을 내린 사례를 작성해주세요.
                        </p>
                      </div>
                    </div>

                    {/* 2단계: 경험 */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-bold">E</span>
                        <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">추천 경험</span>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50/80 to-blue-50/60 dark:from-purple-900/20 dark:to-blue-900/15 rounded-lg p-4 border border-purple-100/50 dark:border-purple-800/30">
                        <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                          [마케팅 학회_신규 커피 브랜드 바이럴 마케팅]
                        </p>
                      </div>
                    </div>

                    {/* 3단계: 자소서 초안 */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold">D</span>
                        <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">자소서 초안</span>
                      </div>
                      <div className="bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-indigo-100/50 dark:border-indigo-800/30">
                        <div className="space-y-3">
                          <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
                            마케팅 학회에서 '신규 커피 브랜드'의 SNS 바이럴 마케팅 프로젝트를 맡게 되었습니다. 브랜드는 출시 초기였고, 인스타그램 계정 팔로워는 200명도 채 되지 않은 상황이었습니다.
                          </p>
                          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            브랜드 인지도 제고와 온라인 유입을 목표로, 1달 내에 팔로워 수 1,000명 돌파, 랜딩페이지 유입 1,000건 달성을 KPI로 설정했습니다.
                            <br/>...
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-muted/50 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <AnimateOnScroll className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-16 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">베타테스터 리뷰</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  review: "막연했던 활동들이 AI와 대화만 했는데 구조화되어서 깜짝 놀랐어요. 정리된 리포트를 보면서 '내가 이런 걸 했었네?' 싶더라고요. 면접 준비하면서도 계속 활용하게 될 것 같아요.",
                  author: "취준생",
                  role: "인사직무 지원"
                },
                {
                  review: "취업센터에서 상담 전에 링크를 보내줘서 사용했는데, 정리된 내용이 너무 체계적이라 상담시간이 절반밖에 안 걸렸어요. 컨설턴트 선생님도 정말 좋다고 하시더라고요.",
                  author: "대학교생",
                  role: "취업상담 전 사용"
                },
                {
                  review: "학회에서의 의사결정을 다시 돌아보면서, 마케팅 직무와 나를 더 잘 연결할 수 있었어요. 2년 전 활동인데도 세세한 부분까지 끌어내 주시네요.",
                  author: "대학생",
                  role: "경영학과 4학년"
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
                          {item.review}
                        </p>
                      </div>
                      
                      {/* 작성자 정보 */}
                      <div className="pt-2">
                        <p className="text-muted-foreground text-sm">
                          {item.author} / {item.role}
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

      {/* Beta Signup */}
      <section id="beta-signup" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* 배경 패턴 */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimateOnScroll className="max-w-2xl mx-auto text-center">
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">가장 먼저 써보고 싶다면?</h2>
              <div className="text-gray-600 dark:text-gray-300">
                <p className="text-lg">연락처를 남겨주시면</p>
                <p className="text-lg"><b>TIO를 가장 먼저 사용해보실 수 있어요!</b></p>
              </div>
            </div>

            <Card className="overflow-hidden border-white/20 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl shadow-2xl">
              <div className="p-6">
                <BetaSignupForm />
              </div>
            </Card>

            {/* 감동적인 메시지 섹션 */}
            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  {/* 아이콘 */}
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* 메인 메시지 */}
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                      여러분의 경험이
                    </h3>
                    <p className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100">
                      TIO를 더 나은 서비스로 만듭니다
                    </p>
                  </div>
                  
                  {/* 서브 메시지 */}
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p className="text-base leading-relaxed">
                      당신의 소중한 이야기 하나하나가 모여서
                    </p>
                    <p className="text-base leading-relaxed">
                      더 많은 사람들의 꿈을 현실로 만드는 힘이 됩니다
                    </p>
                  </div>
                  
                  {/* 하단 강조 */}
                  <div className="pt-4 border-t border-blue-200/30 dark:border-blue-700/30">
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                      함께 만들어가는 취업 준비의 새로운 시작
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Footer test */}
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
