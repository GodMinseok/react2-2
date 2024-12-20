import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { ThemeProvider } from "@/contexts/ThemeContext";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${geistMono.variable} ${geistSans.variable}`}
    >
      <body>
        <ThemeProvider>
          <ThemeToggleButton />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
