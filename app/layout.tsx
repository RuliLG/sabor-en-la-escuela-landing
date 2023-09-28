import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Comida a domicilio para empresas | Sabor en la Oficina',
  description: 'Comer sano en el trabajo ya no es un reto. Con nuestro servicio, puedes disfrutar de comidas equilibradas y disponer de tiempo adicional para dedicarlo a lo que más te importa.',
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
