import './css/style.css'

import { Inter } from 'next/font/google'
import localFont from 'next/font/local'


import Header from '@/components/ui/header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const babyBlocks = localFont({
  src: '../public/fonts/baby_blocks.ttf',
  variable: '--font-baby-blocks'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${babyBlocks.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`} >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
