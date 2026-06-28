import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clínica de Optometria",
  description: "Sistema de gestão para clínica de optometria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
