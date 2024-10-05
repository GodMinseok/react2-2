export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <header>
          <h1> === Header === </h1>
        </header>
        <main>{children}</main>
        <footer>
          <h2>--- Footer ---</h2>
        </footer>
      </body>
    </html>
  );
}
