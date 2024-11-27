"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ScrollProvider } from './ScrollContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollProvider>
          <Navbar />
          <main>
            {children}
          </main>
        </ScrollProvider>
        <Footer />
      </body>
    </html>
  )
}
