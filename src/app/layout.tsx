import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Loader from "@/components/Loader";

const Instrumental = localFont({
  src: "../../public/font/InstrumentSerif-Italic.woff2",
  display: "swap",
  variable: "--font-instrumental",
});

const satoshi = localFont({
  src: [
    {
      path: "../../public/font/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Doshpal",
  description: "Get instant loans at good rates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.className} ${Instrumental.variable} antialiased select-none max-w-[1280px] mx-auto overflow-x-hidden`}
      >
        <ThemeProvider attribute={"class"} defaultTheme="dark" enableSystem>
          {/* <Loader /> */}
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
