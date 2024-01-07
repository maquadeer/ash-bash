export const metadata = {
  title: "Quadeer's Arena",
  description: 'A blog for personal needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div>
        <h1>Quadeer Blog</h1>
        <p>A place I store junk.</p>
        <br />
      </div>
      </header>
  );

  const footer = (
    <footer>
      <div>
        <h3>Thanks for visiting</h3>
        <br />
      </div>
      </footer>
  );

  return (
    <html>
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
