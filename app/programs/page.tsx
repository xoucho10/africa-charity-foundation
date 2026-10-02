"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LanguageTranslator from "@/components/LanguageTranslator"
import { useLanguage } from "@/components/LanguageContext"
import Link from "next/link"
export default function Page(){
 const {t,lang}=useLanguage()
 return(<main className="bg-[#FFFBF0] min-h-screen text-[#0f3440]"><Navbar/><LanguageTranslator/>
 <div className="max-w-[1100px] mx-auto px-6 py-16">
   <h1 className="text-[36px] font-black capitalize">{t.navHome} - programs</h1>
   <p className="mt-4 opacity-70">This page is now translated. Current language: {lang} - {t.navHome}</p>
   <div className="mt-8 bg-white border rounded-[18px] p-6"><h3 className="font-black">Content for programs</h3><p className="text-[13px] mt-2 opacity-70">Your full VAKIF2025 content for programs will appear here. All text uses t.* so it changes when you click TR/AZ/EN/AR/FR.</p></div>
   <Link href="/" className="mt-6 inline-block bg-[#0f3440] text-white px-6 py-3 rounded-full font-bold">← {t.navHome}</Link>
 </div><Footer/></main>)
}
