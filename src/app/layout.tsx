import type { Metadata } from "next"
import { Providers } from "./providers"
import "./globals.css"
import Navbar from "./components/layout/navbar"
import Footer from "./components/layout/footer"

export const metadata: Metadata = {
  title: "JoseGuadalupeCoca.dev",
  description: "Portfolio y blog personal de José Guadalupe Coca",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}