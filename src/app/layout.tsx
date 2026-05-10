import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Gym Coach - Personalized Workout Plans",
  description: "Get AI-generated personalized gym workout plans tailored to your goals, experience level, and schedule.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased transition-colors duration-200`}>
        {children}
      </body>
    </html>
  );
}
