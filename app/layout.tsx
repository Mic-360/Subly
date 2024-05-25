import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/shared/styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Subly: The Newsletter Hub',
  description:
    'Subly takes the hassle out of email marketing. Craft compelling newsletters with intelligent content suggestions. Analyze data insights to optimize your reach.  Automate your workflow, streamline your strategy.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
