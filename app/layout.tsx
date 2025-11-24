import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'فرص العمل في البرتغال للجزائريين',
  description: 'منصة للبحث عن عقود عمل في البرتغال من الجزائر',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
