import './globals.css'
import { Jost } from 'next/font/google'

const inter = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Swiftly - URL Shortener',
  description: 'A simple URL shortener!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='main'>
          
        </div>
        <main className='app'>
          {children}
        </main>

      </body>
    </html>
  )
}
