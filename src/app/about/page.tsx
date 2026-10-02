"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"
export default function About(){
 return(<main className="bg-[#FFFBF0] min-h-screen"><Navbar/>
  <section className="relative h-[50vh] flex items-center justify-center overflow-hidden"><img src="/hero-flags.jpg" className="absolute inset-0 w-full h-full object-cover"/><div className="absolute inset-0 bg-black/70"/><div className="relative z-10 text-center text-white px-6"><h1 className="text-[50px] font-black">Our Story</h1><p className="opacity-80">Bridging cultures since 2021</p></div></section>
  <section className="max-w-[1100px] mx-auto px-6 py-16 grid md:grid-cols-2 gap-10"><div><h2 className="text-[28px] font-black">Born from compassion</h2><p className="mt-4 text-[13px] leading-7 opacity-70">Founded 2021 from Turkish & Azerbaijani diaspora in Uganda. 1 well → 156 wells, 12 schools, 4 clinics. 89% field, audited. Local teams lead. Every donation GPS tracked + video proof.</p><div className="mt-6 flex gap-3"><Link href="/where-we-work" className="bg-[#0f3440] text-white px-5 py-3 rounded-full text-[12px] font-black">Where We Work →</Link><Link href="/transparency" className="border px-5 py-3 rounded-full text-[12px] font-bold">Transparency →</Link></div></div><div className="bg-white border rounded-[20px] p-6"><h3 className="font-black">Values</h3><ul className="mt-4 space-y-3 text-[12px]"><li>✓ 100% Transparency – drone, GPS, name plate</li><li>✓ Zakat Certified – fatwa approved</li><li>✓ Local Teams – no white savior</li><li>✓ 89% to field – audited</li></ul><Link href="/impact" className="mt-6 block bg-[#0f3440] text-white text-center py-3 rounded-full font-black">Impact Dashboard →</Link></div></section><Footer/></main>)
}
