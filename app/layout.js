import './globals.css'

export const metadata = {
  title: 'kaliya.in - Web & App Development',
  description: 'Professional web development and mobile app solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="top">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
