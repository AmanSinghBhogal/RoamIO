import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "RoamIO Home",
    template: "RoamIO | %s"
  },
  description: 'RoamIO - Unleash Your Wanderlust, One Journey at a Time!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/icon.jpg" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className='container'>
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
