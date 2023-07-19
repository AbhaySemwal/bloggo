import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bloggo',
  description: 'A Blog Site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <ThemeProvider>
        <AuthProvider>
          <div className='flex flex-col min-h-[100vh] justify-between w-9/12 mx-auto '>
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </AuthProvider>
      </ThemeProvider>
      </body>
    </html>
  )
}
