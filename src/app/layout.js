import { Inter } from 'next/font/google'
import './globals.css'
import TaskContextProvider from './Context'
import { Toaster } from 'react-hot-toast'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-primaryClr">
      <body className={`${inter.className} `}>
        <main className="bg-primaryClr">
          <TaskContextProvider>
            <Toaster /> 
            {children}
          </TaskContextProvider>
        </main>
      </body>
    </html>
  )
}
