import Link from "next/link";
import '../styles/globals.css'

export default function RootLayout({ children }: any) {
  return (
    <>
      <html lang="en">
        <body>
          <nav className="h-16 fixed w-full bg-slate-100 top-0 flex gap-x-4 items-center shadow-sm">
            <div className="flex justify-between max-w-[1024px] mx-auto w-full">
              Logo...
              <div className="inline-block [&>*+*]:ml-4">
                <Link href="/">Home</Link>
                <Link href="about-us">About Us</Link>
                <Link href="/">Services</Link>
                <Link href="/">Projects</Link>
                <Link href="/">Contact</Link>
              </div>
            </div>
          </nav>
          {children}
        </body>
      </html>
    </>
  );
}
