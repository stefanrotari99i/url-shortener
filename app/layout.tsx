import './globals.css'
import { Jost } from 'next/font/google'

const inter = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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