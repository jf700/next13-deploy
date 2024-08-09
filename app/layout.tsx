import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Helvetica from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Josh's Portfolio",
  description: "Goat 4000 Darnel",
};

const helvetica = Helvetica({
  src: [
    {
      path: "../public/fonts/helvetica-neue-5/HelveticaNeueMedium.otf",
    },
  ],
  variable: "--font-helvetica",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${helvetica.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
