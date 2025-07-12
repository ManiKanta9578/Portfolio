import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-mont',
  weight: ['400', '500', '600', '700']
})

export const metadata = {
  title: 'Manikanta Kotni | Full-Stack Developer',
  description: 'Professional portfolio of Manikanta Kotni, Full-Stack Developer specializing in React and Node.js',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} font-sans`}>
      <body className="min-h-screen bg-white dark:bg-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}