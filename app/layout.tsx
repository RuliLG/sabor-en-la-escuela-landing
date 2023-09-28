import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Comidas para niños en escuelas | Sabor en la Oficina',
  description: 'Conseguir que las niñas y niños de tu escuela coman sano ya no es un reto. Con nuestro servicio, puedes disfrutar de comidas equilibradas y nutritivas, sin tener que preocuparte por la preparación ni la limpieza.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
