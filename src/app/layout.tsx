import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export const metadata: Metadata = {
  title: {
    default:"drlaljikidneycenter | Best in chandigarh - Dr. Lal ji kidney center",
    template:"%s"
  },
  description: "Best - kidney care center in Chandigarh 160014",
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/logo.jpg",
      },
      {
        rel: "apple-touch-icon",
        url: "/next.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
        >
        <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
