import Link from "next/link";
import './styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">

        <body>
          <nav className="h-16 fixed w-full bg-slate-400 top-0 flex gap-x-4">
            <Link href="about-us">About Us</Link>
            <Link href="/">Home</Link>
          </nav>

          {children}
        </body>
      </html>
    </>
  );
}
