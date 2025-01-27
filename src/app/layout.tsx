import type { Metadata } from "next";
import { Geist, Geist_Mono , Roboto , Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight:["400","500"]
});
const poppins = Poppins({
  variable: "--font-poppins",
  weight:["400","500"]
});
const Dm_Sans = DM_Sans({
  variable: "--font-dm-sans",
  weight:["400","500"]
});

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
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} ${poppins.className} ${Dm_Sans.className} antialiased`}
        >
        <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
