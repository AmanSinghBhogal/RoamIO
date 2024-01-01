import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RoamIo',
  description: 'RoamIO - Unleash Your Wanderlust, One Journey at a Time!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/icon.jpg" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
