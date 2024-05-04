import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jesse',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
        rel="stylesheet"
        />

      <link
        href="https://fonts.googleapis.com/css2?family=Darumadrop+One&family=Montserrat:wght@200&family=Poppins&display=swap"
        rel="stylesheet"
        />
      <link
        href="https://fonts.googleapis.com/css2?family=Darumadrop+One&family=Poppins&display=swap"
        rel="stylesheet"
        />
      <link
        href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap"
        rel="stylesheet"
        />
        </head>
      <body className="font-custom">{children}</body>
      
    </html>
  );
}
