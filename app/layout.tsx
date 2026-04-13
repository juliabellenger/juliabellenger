import type { Metadata } from "next";
import { AuthProvider } from "@/components/AuthProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julia Bellenger",
  description: "A personal corner of the internet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Cormorant+SC:wght@400;500;600;700&family=Pinyon+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-slate antialiased">
        <AuthProvider>
          <div className="mx-auto max-w-2xl min-h-screen flex flex-col">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
