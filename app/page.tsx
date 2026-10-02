"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LanguageTranslator from "@/components/LanguageTranslator"
import { useLanguage } from "@/components/LanguageContext"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Home(){
 const {t}=useLanguage()
 const [amount,setAmount]=useState(50)
 const [live,setLive]=useState(21)
 const [total,setTotal]=useState(12405)
 const [proofIdx,setProofIdx]=useState(0)
 const [wealth,setWealth]=useState("2500")
 const [donors,setDonors]=useState([
  {n:"Ahmet Y.",c:"Istanbul",a:100,t:"2m ago"},{n:"Leyla M.",c:"Baku",a:250,t:"5m ago"},{n:"Fatima K.",c:"Ankara",a:50,t:"9m ago"},{n:"Elvin A.",c:"Ganja",a:500,t:"12m ago"},
 ])
 const zakat = Number(wealth||0)*0.025
 const proofs=[
  {loc:"Uganda • Kayunga", text:t.proof1, img:"https://images.unsplash.com/photo-1541845157-a6d2d100c931?q=80&w=200"},
  {loc:"Niger • Tillaberi", text:t.proof2, img:"https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=200"},
  {loc:"Somalia • Mogadishu", text:t.proof3, img:"https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=200"},
 ]
 useEffect(()=>{
  const a=setInterval(()=>setLive(18+Math.floor(Math.random()*12)),3000)
  const b=setInterval(()=>setTotal(c=>c+1),5000)
  const c=setInterval(()=>setProofIdx(p=>(p+1)%3),3500)
  const d=setInterval(()=>{ setDonors(prev=>[{n:"Yeni Bağış",c:"Canlı",a:50,t:"now"},...prev.slice(0,3)])},7000)
  return()=>{clearInterval(a);clearInterval(b);clearInterval(c);clearInterval(d)}
 },[])

 return(<main className="bg-[#FFFBF0] text-[#123e4a] overflow-x-hidden"><Navbar/><LanguageTranslator/>

  {/* HERO */}
  <section className="relative min-h-[72vh] flex items-center overflow-hidden bg-[#0f3440]">
    <img src="/hero-flags.jpg" className="absolute inset-0 w-full h-full object-cover"/>
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20"/>
    <div className="relative z-10 px-5 md:px-14 py-10 max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
      <div>
        <div className="flex gap-2 mb-5"><span className="bg-white/15 backdrop-blur border border-white/20 text-white px-3 py-1 rounded-full text-[10px]">🇹🇷 {t.trLabel}</span><span className="bg-white/15 backdrop-blur border border-white/20 text-white px-3 py-1 rounded-full text-[10px]">🇦🇿 {t.azLabel}</span><span className="bg-green-600 text-white px-3 py-1 rounded-full text-[10px] font-black animate-pulse">● {t.live21}</span></div>
        <h1 className="text-[40px] md:text-[64px] font-black leading-[0.9] text-white">{t.hero1}<br/>{t.hero2}</h1>
        <p className="mt-4 text-white/80 text-[13px] max-w-[480px] leading-6">{t.heroSub}</p>
        <div className="mt-7 flex gap-3"><Link href="/donate" className="inline-block bg-[#ffcc4d] text-[#0f3440] px-8 py-4 rounded-full font-black text-[13px] hover:scale-105 transition">{t.heroBtn}</Link><a href="https://wa.me/256700000000" className="bg-white/10 border border-white/20 text-white px-6 py-4 rounded-full font-bold text-[12px]">{t.whatsapp}</a></div>
      </div>
      <div className="bg-white rounded-[24px] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.6)] w-full max-w-[420px] mx-auto lg:ml-auto">
        <div className="flex justify-between items-center"><h3 className="font-black text-[18px]">{t.give}</h3><span className="bg-green-50 text-green-700 border px-2.5 py-1 rounded-full text-[10px] font-bold">● {t.live21}</span></div>
        <div className="mt-5 grid grid-cols-4 gap-2.5">{[25,50,100,250].map(v=><button key={v} onClick={()=>setAmount(v)} className={`rounded-full py-3 font-black border-2 ${amount===v?"bg-[#0f3440] text-white border-[#0f3440] scale-105":"bg-white border-gray-200"}`}>${v}</button>)}</div>
        <Link href="/donate" className="mt-5 block w-full bg-[#0f3440] text-white rounded-full py-4 font-black text-center">{t.donateNow} → ${amount}</Link>
      </div>
    </div>
  </section>

  {/* 3 CARDS */}
  <section className="px-4 md:px-8 py-8 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1300px] mx-auto">
    <div className="bg-[#efe8d6] rounded-[20px] border border-[#0f3440]/15 p-5"><h2 className="font-black">{t.global}</h2><p className="text-[10px] opacity-60">{t.globalSub}</p><Link href="/where-we-work" className="mt-4 bg-[#ddd8c5] rounded-[14px] border h-[140px] grid place-items-center text-[10px] text-center p-4">🗺️ {t.globalMap}<br/><span className="underline">{t.globalClick}</span></Link><div className="mt-4 grid grid-cols-3 gap-2 text-center"><div className="bg-white rounded-[12px] border p-3"><b>{total.toLocaleString()}+</b><br/><span className="text-[10px]">{t.lives}</span></div><div className="bg-white rounded-[12px] border p-3"><b>45+</b><br/><span className="text-[10px]">{t.projects}</span></div><div className="bg-white rounded-[12px] border p-3"><b>22</b><br/><span className="text-[10px]">{t.countries}</span></div></div></div>
    <div className="bg-[#efe8d6] rounded-[20px] border border-[#0f3440]/15 p-7 flex flex-col"><h2 className="text-[20px] font-black text-center">{t.story}</h2><p className="text-center text-[8px] opacity-50">{t.since}</p><p className="mt-4 text-[12px] leading-6 opacity-80 text-center">{t.storyDesc}</p><Link href="/about" className="mt-auto mx-auto bg-white border border-[#0f3440] px-5 py-2 rounded-full text-[11px] font-bold">{t.storyBtn}</Link></div>
    <div className="bg-[#efe8d6] rounded-[20px] border border-[#0f3440]/15 p-5"><div className="flex justify-between"><h3 className="font-black text-[14px]">{t.impactT}</h3><span className="bg-green-600 text-white text-[8px] px-2 py-0.5 rounded-full">{t.live}</span></div><div className="mt-4 space-y-3"><div className="bg-white rounded-[14px] border p-3 flex justify-between items-center"><div className="flex gap-2 items-center"><div className="w-8 h-8 bg-blue-50 rounded-full grid place-items-center">💧</div><div className="text-[10px]"><b>{t.water}</b><br/><span className="opacity-60">{t.waterSub}</span></div></div><div className="bg-[#0f3440] text-white text-[10px] px-3 py-1 rounded-full">78%</div></div><div className="bg-white rounded-[14px] border p-3 flex justify-between items-center"><div className="flex gap-2 items-center"><div className="w-8 h-8 bg-blue-50 rounded-full grid place-items-center">📚</div><div className="text-[10px]"><b>{t.edu}</b><br/><span className="opacity-60">{t.eduSub}</span></div></div><div className="bg-[#0f3440] text-white text-[10px] px-3 py-1 rounded-full">60%</div></div><div className="bg-white rounded-[14px] border p-3 flex justify-between items-center"><div className="flex gap-2 items-center"><div className="w-8 h-8 bg-blue-50 rounded-full grid place-items-center">🏥</div><div className="text-[10px]"><b>{t.health}</b><br/><span className="opacity-60">{t.healthSub}</span></div></div><div className="bg-[#0f3440] text-white text-[10px] px-3 py-1 rounded-full">70%</div></div></div><Link href="/projects" className="mt-4 block bg-[#0f3440] text-white rounded-full py-2.5 text-[11px] font-black text-center">{t.viewProjects}</Link></div>
  </section>

  {/* URGENT */}
  <section className="px-4 md:px-8 py-6 max-w-[1300px] mx-auto"><div className="flex justify-between items-center mb-5"><div><span className="bg-red-600 text-white text-[8px] px-2.5 py-1 rounded-full font-black">● URGENT</span><h2 className="text-[22px] font-black mt-1">{t.urgent}</h2></div><Link href="/projects" className="border rounded-full px-5 py-2 text-[11px] font-bold">{t.viewAll}</Link></div><div className="grid grid-cols-1 md:grid-cols-3 gap-5">{[{k:"ramadan",img:"https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600",w:"78%"},{k:"orphan",img:"https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=600",w:"65%"},{k:"well",img:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600",w:"92%"}].map((x,i)=><Link key={i} href="/projects" className="bg-white rounded-[18px] border overflow-hidden hover:shadow-xl transition"><img src={x.img} className="h-48 w-full object-cover"/><div className="p-4"><h3 className="font-black text-[13px]">{(t as any)[x.k]}</h3><div className="mt-3 h-1.5 bg-gray-100 rounded-full"><div className="h-1.5 bg-[#0f3440] rounded-full" style={{width:x.w}}></div></div><div className="mt-3 bg-[#0f3440] text-white rounded-full py-2.5 text-[11px] font-black text-center">{t.donateNow} →</div></div></Link>)}</div></section>

  {/* HOW + PROOF */}
  <section className="px-4 md:px-8 py-10 bg-[#efe8d6]/60 max-w-[1300px] mx-auto rounded-[24px] mt-6">
    <h2 className="text-[22px] font-black text-center">{t.how}</h2>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-white rounded-[16px] border border-[#0f3440] shadow-sm p-5"><div className="w-9 h-9 bg-[#0f3440] text-white rounded-full grid place-items-center font-black">01</div><h4 className="font-black text-[12px] mt-3">{t.s1t}</h4><p className="text-[11px] opacity-60 mt-1">{t.s1d}</p></div>
      <div className="bg-white rounded-[16px] border p-5"><div className="w-9 h-9 bg-[#0f3440] text-white rounded-full grid place-items-center font-black">02</div><h4 className="font-black text-[12px] mt-3">{t.s2t}</h4><p className="text-[11px] opacity-60 mt-1">{t.s2d}</p></div>
      <div className="bg-white rounded-[16px] border p-5"><div className="w-9 h-9 bg-[#0f3440] text-white rounded-full grid place-items-center font-black">03</div><h4 className="font-black text-[12px] mt-3">{t.s3t}</h4><p className="text-[11px] opacity-60 mt-1">{t.s3d}</p></div>
      <div className="bg-white rounded-[16px] border p-5"><div className="w-9 h-9 bg-[#0f3440] text-white rounded-full grid place-items-center font-black">04</div><h4 className="font-black text-[12px] mt-3">{t.s4t}</h4><p className="text-[11px] opacity-60 mt-1">{t.s4d}</p></div>
    </div>
    <div className="mt-8 bg-[#0f3440] rounded-[18px] p-5 text-white">
      <div className="flex justify-between mb-4"><h3 className="font-black text-[14px]">{t.proof}</h3><span className="bg-green-500 text-[9px] px-2 py-1 rounded-full animate-pulse">{t.live}</span></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">{proofs.map((p,i)=><div key={i} className={`bg-white/10 rounded-[12px] p-3 border ${proofIdx===i?"bg-white/20 border-white/30 scale-105":"border-white/10"}`}><div className="flex gap-3"><img src={p.img} className="w-10 h-10 rounded-lg object-cover"/><div className="text-[10px]"><b>{p.loc}</b><br/>{p.text}</div></div></div>)}</div>
    </div>
  </section>

  {/* NEW: SPONSOR TIERS */}
  <section className="px-4 md:px-8 py-10 max-w-[1300px] mx-auto">
    <h2 className="text-[22px] font-black text-center">{t.sponsorT}</h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-white border rounded-[18px] p-5 hover:shadow-lg transition"><h4 className="font-black text-[12px]">{t.bronze}</h4><p className="text-[11px] opacity-60 mt-2">{t.bronzeD}</p><Link href="/sponsors" className="mt-4 block bg-[#0f3440] text-white rounded-full py-2 text-[11px] text-center">{t.viewTier}</Link></div>
      <div className="bg-white border rounded-[18px] p-5 hover:shadow-lg transition"><h4 className="font-black text-[12px]">{t.silver}</h4><p className="text-[11px] opacity-60 mt-2">{t.silverD}</p><Link href="/sponsors" className="mt-4 block bg-[#0f3440] text-white rounded-full py-2 text-[11px] text-center">{t.viewTier}</Link></div>
      <div className="bg-white border rounded-[18px] p-5 ring-2 ring-[#ffcc4d] hover:shadow-lg transition"><h4 className="font-black text-[12px]">⭐ {t.gold}</h4><p className="text-[11px] opacity-60 mt-2">{t.goldD}</p><Link href="/sponsors" className="mt-4 block bg-[#ffcc4d] text-[#0f3440] rounded-full py-2 text-[11px] font-black text-center">{t.viewTier}</Link></div>
      <div className="bg-[#0f3440] text-white border rounded-[18px] p-5 hover:shadow-lg transition"><h4 className="font-black text-[12px]">{t.platinum}</h4><p className="text-[11px] opacity-70 mt-2">{t.platinumD}</p><Link href="/sponsors" className="mt-4 block bg-white text-[#0f3440] rounded-full py-2 text-[11px] font-black text-center">{t.viewTier}</Link></div>
    </div>
  </section>

  {/* NEW: DONOR WALL + ZAKAT CALCULATOR */}
  <section className="px-4 md:px-8 py-8 max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-white border rounded-[20px] p-6"><div className="flex justify-between"><h3 className="font-black">{t.donorWall}</h3><span className="bg-green-50 text-green-700 text-[9px] px-2 py-1 rounded-full font-black animate-pulse">● {t.donorLive}</span></div><div className="mt-4 space-y-2">{donors.map((d,i)=><div key={i} className="flex justify-between bg-[#FFFBF0] border rounded-[12px] p-3 text-[11px]"><div><b>{d.n}</b> • {d.c} • {d.t}</div><b className="text-green-600">${d.a}</b></div>)}</div></div>
    <div className="bg-[#0f3440] text-white rounded-[20px] p-6"><h3 className="font-black">{t.zakatT}</h3><p className="text-[11px] opacity-60 mt-1">{t.zakatSub}</p><div className="mt-5"><label className="text-[11px] opacity-70">{t.zakatWealth} ($)</label><input value={wealth} onChange={e=>setWealth(e.target.value)} className="mt-1 w-full bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white" placeholder={t.calcPlaceholder}/><div className="mt-4 bg-[#ffcc4d] text-[#0f3440] rounded-[14px] p-4 flex justify-between"><span className="text-[11px] font-bold">{t.zakatDue}</span><b className="text-[18px]">${zakat.toFixed(2)}</b></div><Link href="/zakat" className="mt-4 block bg-white text-[#0f3440] rounded-full py-3 text-center font-black text-[12px]">{t.zakatBtn}</Link></div></div>
  </section>

  {/* NEW: VIDEO PROOF GALLERY */}
  <section className="px-4 md:px-8 py-10 max-w-[1300px] mx-auto">
    <h2 className="text-[22px] font-black text-center">{t.videoT}</h2><p className="text-center text-[12px] opacity-60 mt-1">{t.videoSub}</p>
    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">{[1,2,3,4,5,6].map(i=><div key={i} className="bg-black rounded-[16px] overflow-hidden relative aspect-video group"><img src={`https://images.unsplash.com/photo-${1500000000000+i*111111}?q=80&w=400`} className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition"/><div className="absolute inset-0 grid place-items-center"><div className="w-12 h-12 bg-white/90 rounded-full grid place-items-center">▶️</div></div><div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white text-[10px]">Uganda Well #{150+i} • GPS proof</div></div>)}</div>
  </section>

  {/* NEW: TRUST BADGES */}
  <section className="bg-white border-y py-6 mt-4"><div className="max-w-[1300px] mx-auto px-6 text-center"><p className="text-[11px] font-black tracking-widest opacity-60">{t.trustT}</p><div className="mt-4 flex flex-wrap justify-center gap-3 text-[10px]"><span className="bg-[#FFFBF0] border px-4 py-2 rounded-full">✓ Troy</span><span className="bg-[#FFFBF0] border px-4 py-2 rounded-full">✓ BirKart</span><span className="bg-[#FFFBF0] border px-4 py-2 rounded-full">✓ Kapital Bank</span><span className="bg-[#FFFBF0] border px-4 py-2 rounded-full">✓ Visa • Mastercard</span><span className="bg-[#FFFBF0] border px-4 py-2 rounded-full">✓ 3D Secure</span><span className="bg-[#FFFBF0] border px-4 py-2 rounded-full">✓ SSL 256-bit</span><span className="bg-green-50 border border-green-200 px-4 py-2 rounded-full">✓ Audited 2024 • 89% Field</span></div></div></section>

  {/* NEW: FINAL CTA */}
  <section className="bg-[#0f3440] text-white py-14 px-6 text-center mt-8 rounded-[24px] max-w-[1300px] mx-auto mb-6"><h2 className="text-[32px] md:text-[48px] font-black leading-[0.9]">{t.finalT1}<br/>{t.finalT2}</h2><p className="mt-4 opacity-70 text-[13px] max-w-[600px] mx-auto">{t.finalSub}</p><div className="mt-8 flex justify-center gap-3"><Link href="/donate" className="bg-[#ffcc4d] text-[#0f3440] px-8 py-4 rounded-full font-black">{t.finalBtn}</Link><a href="https://wa.me/256700000000" className="bg-white/10 border border-white/20 px-8 py-4 rounded-full font-bold">{t.whatsapp}</a></div></section>

  <Footer/>
</main>)
}
