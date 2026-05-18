import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Apex - AI-Powered SaaS Platform",
  description:
    "Scale your business with AI automation. Streamline workflows, boost productivity, and gain real-time insights with our intelligent automation platform.",
  keywords:
    "AI automation, SaaS, productivity, workflow management, analytics",
  openGraph: {
    title: "Apex - AI-Powered SaaS Platform",
    description: "Scale your business with AI automation and intelligent workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-white">{children}</body>
    </html>
  );
}
