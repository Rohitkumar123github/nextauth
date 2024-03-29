import Header from './components/Header'
import './globals.css'
import ProviderWrapper from './ProviderWrapper'

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
      <body>
        <ProviderWrapper>
          <Header />
        {children}
        </ProviderWrapper>
      </body>
    </html>
  )
}
