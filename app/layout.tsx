import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { OrganizationSchema, BreadcrumbSchema } from "./components/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SalvTec - Manutenção de Ar Condicionado",
  description: "SalvTec oferece instalação, manutenção e higienização de ar condicionado em Campinas e região. Atendemos residências, comércios e indústrias com marcas Hitachi e Gree. 6 anos de experiência.",
  keywords: "ar condicionado, climatização, ar condicionado residencial, ar condicionado comercial, ar condicionado industrial, HVAC, Hitachi, Gree",
  authors: [{ name: "SalvTec" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://salvtec.com.br",
    siteName: "SalvTec",
    title: "SalvTec - Manutenção de Ar Condicionado",
    description: "Instalação, manutenção e higienização de ar condicionado em Campinas e Região. Atendemos residências, comércios e indústrias com as melhores marcas do mercado.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SalvTec - Manutenção de Ar Condicionado",
    description: "Instalação, manutenção e higienização de ar condicionado em Campinas e Região. Atendemos residências, comércios e indústrias com as melhores marcas do mercado.",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0066cc" />
        <link rel="canonical" href="https://salvtec.com.br" />
        <OrganizationSchema />
        <BreadcrumbSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
