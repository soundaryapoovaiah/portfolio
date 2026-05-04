import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soundarya Kookanda — Java Backend & Cloud Engineer",
  description:
    "Portfolio of Soundarya Poovaiah Kookanda — Java Backend Engineer specializing in Spring Boot microservices, cloud-native systems on Azure & AWS, and DevOps pipelines.",
  keywords: [
    "Java Backend Engineer",
    "Spring Boot",
    "Microservices",
    "Azure",
    "AWS",
    "Kubernetes",
    "Cloud Engineer",
    "DevOps",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
