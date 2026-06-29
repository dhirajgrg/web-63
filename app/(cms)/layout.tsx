import { ReactNode } from "react";
import "../globals.css";
import { CMSNavbar } from "@/components/cms/CMSNavbar";
import { Metadata } from "next";
import { CMSSidebar } from "@/components/cms/CMSSidebar";

export const metadata: Metadata = {
  title: "CMS Dashboard",
  description: "A content management system",
};

export default function CMSLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <body>
        <CMSNavbar />
        <section className="w-full h-screen flex">
          <aside className="w-64 shrink-0 border-e border-gray-200 bg-white">
            <CMSSidebar />
          </aside>
          <main className="bg-zinc-200 w-full text-black">{children}</main>
        </section>
      </body>
    </html>
  );
}
