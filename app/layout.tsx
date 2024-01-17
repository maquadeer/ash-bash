export const metadata = {
  title: "Quadeer's Arena",
  description: 'A blog for personal needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html>
      <body>
        <header>
          <h1>NextJs blog</h1>
          <p>A place where I store junk.</p>
          <hr />
        </header>

        {children}

        <footer>
            <hr />
          <h3>Thanks for visiting. </h3>
        </footer>
      </body>
    </html>
  )
}
