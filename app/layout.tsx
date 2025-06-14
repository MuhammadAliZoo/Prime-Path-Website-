import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Prime Path Export',
  description: 'Premium Nigerian Exports to Global Markets',
  generator: 'v0.dev',
}

type RootLayoutProps = {
  children: ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout
