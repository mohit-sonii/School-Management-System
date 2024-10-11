import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";


export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div className="h-screen flex">
         {/* LEFT */}
         <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  p-4">
            <Link href={"/"} className="flex items-center justify-center lg:justify-start gap-2">
               <Image src={"/logo.png"} alt="SMS Logo" width={32} height={32} />
               <span className="hidden lg:block">School</span>
            </Link>
            <Menu />
         </div>
         {/* RIGHT */}
         <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll ">
            <NavBar />
            {children}
         </div>
      </div>
   )
}
