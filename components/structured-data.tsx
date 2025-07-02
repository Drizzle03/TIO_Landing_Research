export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://tio-landingpage.vercel.app/#organization",
        "name": "TIO",
        "alternateName": "취업 AI Agent TIO",
        "url": "https://tio-landingpage.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tio-landingpage.vercel.app/LOGO.png",
          "width": 512,
          "height": 512
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "tiotio.business@gmail.com",
          "contactType": "customer service",
          "availableLanguage": "Korean"
        },
        "founder": {
          "@type": "Person",
          "name": "편유나"
        },
        "description": "AI 기반 취업 준비 서비스로 자소서 작성부터 면접 준비까지 도와드립니다."
      },
      {
        "@type": "WebSite",
        "@id": "https://tio-landingpage.vercel.app/#website",
        "url": "https://tio-landingpage.vercel.app",
        "name": "TIO - 취업 준비 AI Agent",
        "description": "막막한 경험정리를 AI 대화로 자소서 소재로 만들어보세요. TIO와 함께 취업 준비를 체계적으로 시작하세요.",
        "publisher": {
          "@id": "https://tio-landingpage.vercel.app/#organization"
        },
        "inLanguage": "ko-KR"
      },
      {
        "@type": "WebPage",
        "@id": "https://tio-landingpage.vercel.app/#webpage",
        "url": "https://tio-landingpage.vercel.app",
        "name": "TIO - 취업 준비 AI Agent | 자소서 작성부터 면접 준비까지",
        "isPartOf": {
          "@id": "https://tio-landingpage.vercel.app/#website"
        },
        "about": {
          "@id": "https://tio-landingpage.vercel.app/#organization"
        },
        "description": "막막한 경험정리를 AI 대화로 자소서 소재로 만들어보세요. TIO와 함께 취업 준비를 체계적으로 시작하세요. 베타 서비스 무료 이용 가능.",
        "breadcrumb": {
          "@id": "https://tio-landingpage.vercel.app/#breadcrumb"
        },
        "inLanguage": "ko-KR"
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://tio-landingpage.vercel.app/#software",
        "name": "TIO",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Career Development",
        "operatingSystem": "Web Browser",
        "description": "AI 기반 취업 준비 도구로 경험 정리부터 자소서 작성까지 도와드립니다.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "KRW",
          "availability": "https://schema.org/InStock",
          "description": "베타 서비스 무료 이용"
        },
        "author": {
          "@id": "https://tio-landingpage.vercel.app/#organization"
        },
        "provider": {
          "@id": "https://tio-landingpage.vercel.app/#organization"
        }
      },
      {
        "@type": "Service",
        "@id": "https://tio-landingpage.vercel.app/#service",
        "name": "TIO 취업 준비 서비스",
        "description": "AI와의 대화를 통해 경험을 정리하고 자소서 소재를 만드는 취업 준비 서비스",
        "provider": {
          "@id": "https://tio-landingpage.vercel.app/#organization"
        },
        "serviceType": "취업 준비 컨설팅",
        "areaServed": "대한민국",
        "availableLanguage": "Korean",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "KRW",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
} 