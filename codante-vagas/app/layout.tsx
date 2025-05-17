import Navbar from "@/components/layout/navbar";
import "./globals.css";
import Footer from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodanteVagas",
  description:
    "O CodanteVagas conecta candidatos a empregos ideais, oferecendo funcionalidades intuitivas para busca e gerenciamento de vagas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
