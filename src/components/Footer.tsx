"use client"
import { useLanguage } from "./LanguageContext"
import Link from "next/link"
export default function Footer(){
 const {t}=useLanguage()
 return(
  <footer className="bg-[#0f3440] text-white mt-10">
    <div className="max-w-[1300px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div><h4 className="font-black">Afrika Yardım Vakfı</h4><p className="text-[11px] opacity-60 mt-2">Est. 2021 • Istanbul & Baku</p></div>
      <div><h5 className="font-black text-[12px]">{t.footerLinks}</h5><div className="mt-3 grid gap-2 text-[11px] opacity-70"><Link href="/about">{t.footerStory}</Link><Link href="/where-we-work">{t.footerWhere}</Link><Link href="/zakat">{t.footerZakat}</Link></div></div>
      <div><h5 className="font-black text-[12px]">{t.footerGive}</h5><div className="mt-3 grid gap-2 text-[11px] opacity-70"><Link href="/donate">{t.footerDonate}</Link><Link href="/zakat">{t.footerZakat}</Link></div></div>
      <div><Link href="/donate" className="bg-[#ffcc4d] text-[#0f3440] px-6 py-3 rounded-full font-black text-[12px]">{t.donateNow} →</Link></div>
    </div>
  </footer>
 )
}
