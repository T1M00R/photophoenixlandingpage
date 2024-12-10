import { ChakraProvider } from '@chakra-ui/react';
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from '@/components/Navbar';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PhotoPhoenix - AI-Powered Social Media Image Editor",
  description: "Transform your social media content with AI-powered bulk image editing",
  icons: {
    icon: '/photophoenix.png',
    apple: '/photophoenix.png',
  },
  openGraph: {
    title: 'PhotoPhoenix - AI-Powered Social Media Image Editor',
    description: 'Transform your social media content with AI-powered bulk image editing',
    images: ['/photophoenix.png'],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ChakraProvider>
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
