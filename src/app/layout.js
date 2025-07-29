import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kashif Ali | Full Stack Developer",
  description: "Portfolio of Kashif Ali, a Full Stack Web Developer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-900 ${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  )
}
