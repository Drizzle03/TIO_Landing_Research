// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Analytics from "@/components/analytics";
import StructuredData from "@/components/structured-data";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "TIO - 취업 준비 AI Agent | 자소서 작성부터 면접 준비까지",
    template: "%s | TIO"
  },
  description: "막막한 경험정리를 AI 대화로 자소서 소재로 만들어보세요. TIO와 함께 취업 준비를 체계적으로 시작하세요. 베타 서비스 무료 이용 가능.",
  keywords: [
    "TIO", "취업 준비", "자소서 작성", "면접 준비", "AI 취업", "경험 정리", 
    "자기소개서", "취업 AI", "베타 서비스", "취업 도우미", "AI Agent",
    "취업 상담", "자소서 첨삭", "면접 대비", "취업 컨설팅"
  ],
  authors: [{ name: "편유나" }],
  creator: "TIO",
  publisher: "TIO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tio-landingpage.vercel.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/LOGO.png', sizes: '32x32', type: 'image/png' },
      { url: '/LOGO.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/LOGO.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://tio-landingpage.vercel.app',
    title: 'TIO - 취업 준비 AI Agent | 자소서 작성부터 면접 준비까지',
    description: '막막한 경험정리를 AI 대화로 자소서 소재로 만들어보세요. TIO와 함께 취업 준비를 체계적으로 시작하세요.',
    siteName: 'TIO',
    images: [
      {
        url: '/LOGO.png',
        width: 1200,
        height: 630,
        alt: 'TIO - 취업 준비 AI Agent',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TIO - 취업 준비 AI Agent',
    description: '막막한 경험정리를 AI 대화로 자소서 소재로 만들어보세요.',
    images: ['/LOGO.png'],
    creator: '@TIO_careers',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '', // Google Search Console 인증 코드 (나중에 추가)
    // naver: '', // 네이버 웹마스터 인증 코드 (나중에 추가)
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          crossOrigin="anonymous"
        />
        {/* Google Analytics 4 - Direct implementation */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SPX3KT7CC3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SPX3KT7CC3', {
                page_title: document.title,
                page_location: window.location.href
              });
              console.log('GA4 Direct: Initialized');
            `,
          }}
        />
        {/* Microsoft Clarity - Direct implementation */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "s8jaf40nh0");
              console.log('Clarity Direct: Initialized');
            `,
          }}
        />
        <StructuredData />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
