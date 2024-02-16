import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'First Steps',
  description: 'Generated with love by Vercel'
}

export default function RootLayout ({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='es'>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
