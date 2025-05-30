import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type React from "react"; // Import React

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Durim Fetahaj - Frontend Developer",
  description: "Frontend developer portfolio showcasing projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className="custom-cursor fixed top-0 left-0 w-3 h-3 bg-black rounded-full pointer-events-none z-[9999] transition-transform duration-100 -translate-x-1/2 -translate-y-1/2"
            id="cursor"
          ></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
