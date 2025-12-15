import type { Metadata } from "next";
import localFont from 'next/font/local';
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const poppins = localFont({
	src: [
		{
			path: '../fonts/Poppins/Poppins-Regular.ttf',
			weight: '400',
			style: 'normal'
		},
		{
			path: '../fonts/Poppins/Poppins-Medium.ttf',
			weight: '500',
			style: 'normal'
		},
		{
			path: '../fonts/Poppins/Poppins-SemiBold.ttf',
			weight: '600',
			style: 'normal'
		}
	],
	display: 'swap',
	variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "Crampon Adventures",
  description: "Join us for your next adventure.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
