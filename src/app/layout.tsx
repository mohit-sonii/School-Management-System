import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" >
         <body className={inter.className} style={{ backgroundColor: "#000", color:'#fff' }}>{children}</body>
      </html>
   );
}
