import { ReactNode } from "react";
import "../globals.css"
import { CMSNavbar } from "@/components/cmsnavbar/CMSNavbar";
import { Metadata } from "next";

export const metadata:Metadata={
    title:"CMS Dashboard",
    description:"A content management system"
}


export default function CMSLayout({children}:Readonly <{children:ReactNode}>){
    return <html>
        <body>
        <CMSNavbar/>
            {children}
        </body>
    </html>
}