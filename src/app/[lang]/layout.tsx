import { Geist } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { cn } from "@/lib/utils"
import { i18n, type Locale } from "@/lib/i18n-config"
import { CustomCursor } from "@/components/shared/CustomCursor"

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  
  const titles: Record<string, string> = {
    en: "Elite Hospital | Next-Gen Healthcare Excellence",
    kn: "ಎಲೈಟ್ ಆಸ್ಪತ್ರೆ | ಮುಂದಿನ ಪೀಳಿಗೆಯ ಆರೋಗ್ಯ ಶ್ರೇಷ್ಠತೆ"
  }
  
  const descriptions: Record<string, string> = {
    en: "Experience world-class medical care with Elite Hospital. Cutting-edge technology and compassionate specialists at your service.",
    kn: "ಎಲೈಟ್ ಆಸ್ಪತ್ರೆಯೊಂದಿಗೆ ವಿಶ್ವ ದರ್ಜೆಯ ವೈದ್ಯಕೀಯ ಸೇವೆಯನ್ನು ಅನುಭವಿಸಿ. ಅತ್ಯಾಧುನಿಕ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಅನುಕಂಪದ ತಜ್ಞರು ನಿಮ್ಮ ಸೇವೆಯಲ್ಲಿ."
  }

  const title = titles[lang] || titles.en
  const description = descriptions[lang] || descriptions.en
  const url = `https://yogeesh-s.github.io/hospital_landing/${lang}`

  return {
    metadataBase: new URL('https://yogeesh-s.github.io/hospital_landing'),
    title,
    description,
    alternates: {
      languages: {
        'en-US': '/en',
        'kn-IN': '/kn',
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Elite Hospital',
      locale: lang === 'kn' ? 'kn_IN' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/assets/images/hero/hero-main.webp',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/images/hero/hero-main.webp'],
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
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = (await params) as { lang: Locale }

  // Hospital Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": lang === 'kn' ? "ಎಲೈಟ್ ಆಸ್ಪತ್ರೆ" : "Elite Hospital",
    "description": lang === 'kn' ? "ವಿಶ್ವ ದರ್ಜೆಯ ವೈದ್ಯಕೀಯ ಸೇವೆ" : "World-class medical care",
    "url": `https://elitehospital.com/${lang}`,
    "logo": "https://elitehospital.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Health Blvd",
      "addressLocality": "Bangalore",
      "addressRegion": "KA",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946
    },
    "telephone": "+91-80-9000-8000",
    "openingHours": "Mo-Su 00:00-23:59",
    "emergencyService": true
  }

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={cn("antialiased font-sans", geist.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="lg:cursor-none">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
