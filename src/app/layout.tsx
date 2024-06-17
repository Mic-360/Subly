import type { Metadata } from "next";
import { Inter } from "next/font/google";
<<<<<<< HEAD:src/app/layout.tsx
import "../shared/styles/globals.css";
import Providers from "../shared/utils/Providers";

=======
import "../src/shared/styles/globals.css";
>>>>>>> f7dfc13388b6d7ef72142a2f78f1c732cc4ed9e0:app/layout.tsx
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
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
