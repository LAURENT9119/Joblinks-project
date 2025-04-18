import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JobLink',
  description: 'Created with MLMF',
  generator: 'Depaye92',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
