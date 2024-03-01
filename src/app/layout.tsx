import './globals.css'
import uncutSans from '@/font/uncutSans'
import meta from './meta'
import { DarkModeProvider } from '@/context/DarkMode'

export const metadata = meta

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <DarkModeProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={uncutSans.className}>{children}</body>
      </html>
    </DarkModeProvider>
  )
}
