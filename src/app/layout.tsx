import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './components/theme-provider'
import Header from './components/Header'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'José Guadalupe Coca - Full Stack Developer',
  description: 'Portfolio de José Guadalupe Coca, desarrollador Full Stack especializado en React y Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ParticleBackground />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

