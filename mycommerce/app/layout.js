import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'ECommerce by Miles',
  description: 'Website for ECommerce designed and developed by miles.cl',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        </body>
    </html>
  )
}
