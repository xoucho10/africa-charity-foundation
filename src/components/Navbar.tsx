"use client"
import Link from "next/link"
import { useLanguage } from "./LanguageContext"
import { useState } from "react"

export default function Navbar(){
 const {t}=useLanguage()
 const [open,setOpen]=useState(false)
 const links=[
  {href:"/",label:t.navHome},
  {href:"/about",label:t.navAbout},
  {href:"/where-we-work",label:t.navWhere},
  {href:"/impact",label:t.navImpact},
  {href:"/projects",label:t.navProjects},
  {href:"/sponsors",label:t.navSponsors},
  {href:"/transparency",label:t.navTrans},
 ]
 return(
  <nav className="bg-[#0f3440] text-white sticky top-0 z-[99] border-b border-white/10">
    <div className="max-w-[1600px] mx-auto px-5 md:px-8 h-[64px] flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3"><img src="/logo.png" alt="logo" className="w-10 h-10 rounded-full bg-white object-cover" onError={(e:any)=>e.target.style.display='none'}/><div><div className="font-black text-[13px] leading-none">Afrika Yardım Vakfı</div><div className="text-[10px] opacity-60">Est. 2021</div></div></Link>
      <div className="hidden lg:flex gap-6 text-[12px] font-medium">{links.map(l=><Link key={l.href} href={l.href} className="hover:text-[#ffcc4d] transition">{l.label}</Link>)}</div>
      <div className="flex gap-2 items-center">
        <Link href="/zakat" className="hidden md:block bg-white/10 border border-white/20 px-4 py-2 rounded-full text-[11px] font-bold">{t.navZakat}</Link>
        <Link href="/donate" className="bg-[#ffcc4d] text-[#0f3440] px-5 py-2.5 rounded-full text-[12px] font-black hover:scale-105 transition">{t.navDonate}</Link>
        <button onClick={()=>setOpen(!open)} className="lg:hidden ml-2 text-[20px]">☰</button>
      </div>
    </div>
    {open && <div className="lg:hidden bg-[#0a2430] px-5 py-4 grid gap-3">{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className="py-2 border-b border-white/10 text-[13px]">{l.label}</Link>)}</div>}
  </nav>
 )
}
