"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Home(){
 const [amount,setAmount]=useState(50)
 const [live,setLive]=useState(23)
 const [total,setTotal]=useState(12400)
 const [activeStep,setActiveStep]=useState(0)
 const [wealth,setWealth]=useState("2500")
 const [proofIdx,setProofIdx]=useState(0)
 const zakat = Number(wealth||0)*0.025

 const proofs=[
  {time:"2m ago", loc:"Uganda • Kayunga", text:"Well #157 opened – 840 people now have water", img:"https://images.unsplash.com/photo-1541845157-a6d2d100c931?q=80&w=200"},
  {time:"18m ago", loc:"Niger • Tillaberi", text:"120 food parcels delivered – video proof uploaded", img:"https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=200"},
  {time:"1h ago", loc:"Somalia • Mogadishu", text:"Clinic treated 34 children today", img:"https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=200"},
  {time:"3h ago", loc:"Baku • Corporate", text:"AZN 5000 donated for school", img:"https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=200"},
 ]

 useEffect(()=>{
  const a=setInterval(()=>setLive(18+Math.floor(Math.random()*10)),3000)
  const b=setInterval(()=>setTotal(c=>c+1),5000)
  const c=setInterval(()=>setProofIdx(p=>(p+1)%proofs.length),3500)
  return()=>{clearInterval(a);clearInterval(b);clearInterval(c)}
 },[])

 return(<main className="bg-[#FFFBF0] text-[#123e4a] overflow-x-hidden"><Navbar/>

  {/* HERO WITH hero-flags.jpg */}
  <section className="relative min-h-[75vh] md:min-h-[84vh] flex items-center overflow-hidden bg-[#0f3440]">
    <img src="/hero-flags.jpg" className="absolute inset-0 w-full h-full object-cover object-center"/>
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20"/><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
    <div className="relative z-10 px-5 md:px-16 py-10 max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
      <div>
        <div className="flex gap-2 mb-4 flex-wrap"><span className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-[10px] border border-white/20">🇹🇷 Türkiye</span><span className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-[10px] border border-white/20">🇦🇿 Azerbaijan</span><span className="bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-black animate-pulse">● LIVE {live} donating</span></div>
        <h1 className="text-[34px] md:text-[60px] font-black leading-[0.9] text-white whitespace-pre-line">Bridging Continents,{"\n"}Building Hope</h1>
        <p className="mt-4 text-white/80 text-[13px] md:text-[15px] max-w-xl leading-6">Your donation from Türkiye, Azerbaijan, Europe or anywhere delivers clean water, education and healthcare to communities across Africa. 100% transparent, Zakat-eligible, video proof.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3"><Link href="/donate" className="bg-[#ffcc4d] text-[#0f3440] px-7 py-4 rounded-full font-black text-[14px] text-center hover:scale-105 transition">Donate Now → $50 = 1 Month Water</Link><Link href="/impact" className="bg-white/15 backdrop-blur border border-white/30 text-white px-7 py-4 rounded-full font-bold text-[13px] text-center">▶ Watch Impact (90s)</Link></div>
      </div>
      <div className="bg-white rounded-[24px] p-5 md:p-6 shadow-[0_20px_80px_rgba(0,0,0,0.5)] w-full max-w-[440px] mx-auto lg:ml-auto">
        <div className="flex justify-between"><h3 className="font-black text-[18px]">Give Hope Today</h3><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-[10px] font-bold animate-pulse">● LIVE • {live}</span></div>
        <div className="mt-4 grid grid-cols-4 gap-2">{[25,50,100,250].map(v=><button key={v} onClick={()=>setAmount(v)} className={`border-2 rounded-full py-3 font-black text-[14px] ${amount===v?"bg-[#0f3440] text-white border-[#0f3440] scale-105":"border-gray-200"}`}>${v}</button>)}</div>
        <div className="mt-4 space-y-2"><Link href="/projects?type=water" className="w-full bg-[#ffcc4d] rounded-full py-3 font-bold text-[12px] flex justify-between px-5">💧 Clean Water Access <span>85% →</span></Link><Link href="/projects?type=education" className="w-full border rounded-full py-3 font-bold text-[12px] flex justify-between px-5">📚 Education <span>62%</span></Link><Link href="/projects?type=health" className="w-full border rounded-full py-3 font-bold text-[12px] flex justify-between px-5">🏥 Healthcare <span>70%</span></Link></div>
        <Link href="/donate" className="mt-4 block w-full bg-[#0f3440] text-white rounded-full py-4 font-black text-center">Donate Now → ${amount}</Link>
      </div>
    </div>
  </section>

  {/* YOUR SCREENSHOT SECTION - Global Presence / Our Story / Impact */}
  <section className="px-4 md:px-8 py-8 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1300px] mx-auto">
    <div className="bg-[#efe8d6] rounded-[20px] border border-[#0f3440]/20 p-5 md:p-6 shadow-sm hover:shadow-xl transition">
      <h2 className="text-[16px] font-black">Global Presence</h2><p className="text-[10px] opacity-60">Istanbul & Baku to 22 nations</p>
      <Link href="/where-we-work" className="mt-4 bg-[#ddd8c5] rounded-[14px] border h-[140px] grid place-items-center text-[10px] text-center p-4 block">🗺️ Map – Türkiye • Azerbaijan • USA • UK • Uganda • Somalia • Niger<br/><span className="underline text-[9px]">Click to explore →</span></Link>
      <div className="mt-5 grid grid-cols-3 gap-2 text-center"><div className="bg-white rounded-[12px] border p-3"><b className="text-[14px]">{total.toLocaleString()}+</b><br/><span className="text-[10px]">Lives</span><div className="text-[8px] text-green-600 animate-pulse">● live</div></div><div className="bg-white rounded-[12px] border p-3"><b>45+</b><br/><span className="text-[10px]">Projects</span></div><div className="bg-white rounded-[12px] border p-3"><b>22</b><br/><span className="text-[10px]">Countries</span></div></div>
    </div>
    <div className="bg-[#efe8d6] rounded-[20px] border border-[#0f3440]/20 p-7 shadow-sm hover:shadow-xl transition flex flex-col"><h2 className="text-[20px] font-black text-center">Our Story</h2><p className="text-center text-[8px] opacity-50 uppercase tracking-widest">SINCE 2021</p><p className="mt-4 text-[12px] leading-[1.7] opacity-80 text-center">Founded 2021, born from idea: Turkish & Azerbaijani compassion can change Africa. We are bridge. Every donation tracked, filmed, reported. 89% field.</p><Link href="/about" className="mt-auto pt-6 mx-auto bg-white border border-[#0f3440] px-5 py-2 rounded-full text-[11px] font-bold hover:bg-[#0f3440] hover:text-white transition">Read Our Story →</Link></div>
    <div className="bg-[#efe8d6] rounded-[20px] border border-[#0f3440]/20 p-5 shadow-sm hover:shadow-xl transition"><div className="flex justify-between"><h3 className="font-black text-[14px]">2024 Impact - Real-Time</h3><span className="bg-green-600 text-white text-[8px] px-2 py-0.5 rounded-full animate-pulse">LIVE</span></div><div className="mt-4 space-y-3">{[{i:"💧",t:"Clean Water",s:"78k • 156 wells",p:78},{i:"📚",t:"Education",s:"3k • 12 schools",p:60},{i:"🏥",t:"Healthcare",s:"15k • 4 clinics",p:70}].map((r,i)=><Link key={i} href="/impact" className="bg-white rounded-[14px] border p-3 flex justify-between items-center"><div className="flex gap-3 items-center"><div className="w-8 h-8 bg-blue-50 rounded-full grid place-items-center">{r.i}</div><div className="text-[10px]"><b>{r.t}</b><br/><span className="opacity-60">{r.s}</span></div></div><div className="bg-[#0f3440] text-white text-[10px] px-3 py-1 rounded-full">{r.p}%</div></Link>)}</div><Link href="/projects" className="mt-4 block bg-[#0f3440] text-white rounded-full py-2.5 text-[11px] font-black text-center">View All Projects →</Link></div>
  </section>

  {/* URGENT APPEALS - YOUR SCREENSHOT */}
  <section className="px-4 md:px-8 py-6 max-w-[1300px] mx-auto">
    <div className="flex justify-between items-center mb-5"><div><span className="bg-red-600 text-white text-[8px] px-2.5 py-1 rounded-full font-black">● URGENT</span><h2 className="text-[20px] md:text-[24px] font-black mt-2">Urgent Appeals</h2></div><Link href="/projects" className="border rounded-full px-5 py-2 text-[11px] font-bold hover:bg-[#0f3440] hover:text-white transition">View All 45 →</Link></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <Link href="/projects/1" className="bg-white rounded-[18px] border overflow-hidden shadow-sm hover:shadow-xl transition hover:-translate-y-1"><img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600" className="h-52 w-full object-cover"/><div className="p-4"><h3 className="font-black text-[13px]">Ramadan Food Parcels</h3><p className="text-[10px] opacity-60">Each $40 feeds family for month</p><div className="mt-3 h-1.5 bg-gray-100 rounded-full"><div className="h-1.5 bg-[#0f3440] rounded-full" style={{width:"78%"}}></div></div><div className="mt-3 bg-[#0f3440] text-white rounded-full py-2.5 text-[11px] font-black text-center">Donate Now →</div></div></Link>
      <Link href="/projects/2" className="bg-white rounded-[18px] border overflow-hidden shadow-sm hover:shadow-xl transition hover:-translate-y-1"><img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=600" className="h-52 w-full object-cover"/><div className="p-4"><h3 className="font-black text-[13px]">Orphan Sponsorship</h3><p className="text-[10px] opacity-60">$35/month education + home</p><div className="mt-3 h-1.5 bg-gray-100 rounded-full"><div className="h-1.5 bg-[#ffcc4d] rounded-full" style={{width:"65%"}}></div></div><div className="mt-3 bg-[#0f3440] text-white rounded-full py-2.5 text-[11px] font-black text-center">Donate Now →</div></div></Link>
      <Link href="/projects/3" className="bg-white rounded-[18px] border overflow-hidden shadow-sm hover:shadow-xl transition hover:-translate-y-1"><img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600" className="h-52 w-full object-cover"/><div className="p-4"><h3 className="font-black text-[13px]">Deep Water Well – 800 People</h3><p className="text-[10px] opacity-60">Solar powered, 25 years, name plate</p><div className="mt-3 h-1.5 bg-gray-100 rounded-full"><div className="h-1.5 bg-[#0f3440] rounded-full" style={{width:"92%"}}></div></div><div className="mt-3 bg-[#0f3440] text-white rounded-full py-2.5 text-[11px] font-black text-center">Donate Now →</div></div></Link>
    </div>
  </section>

  {/* MISSING PREMIUM FIELDS - HOW IT WORKS + LIVE PROOF */}
  <section className="px-4 md:px-8 py-10 bg-[#efe8d6]/60 max-w-[1300px] mx-auto rounded-[24px] mt-4">
    <h2 className="text-[22px] md:text-[28px] font-black text-center">How Your Donation Becomes Hope • 100% Tracked</h2><p className="text-center text-[11px] opacity-60 mt-2">We built trust for international donors. No black box. Click each step.</p>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
      {[
        {n:"01",t:"You Donate Securely (2 mins)",d:"Card, PayPal, Bank, Crypto, Troy, BirKart – receipt instantly. 256-bit SSL."},
        {n:"02",t:"We Deploy in 72 Hours",d:"Local team Kampala / Niamey / Mogadishu starts. WhatsApp update with GPS."},
        {n:"03",t:"You Get Proof – Photos & GPS",d:"Drone footage, beneficiary interviews, GPS coordinates, name plate video."},
        {n:"04",t:"Impact Report + Tax Receipt",d:"Annual audited report, dashboard login, deductible receipt TR, EU, US, AZ."},
      ].map((s,i)=><div key={i} onClick={()=>setActiveStep(i)} className={`bg-white rounded-[16px] border p-5 cursor-pointer transition-all ${activeStep===i?"border-[#0f3440] shadow-xl scale-105":"hover:shadow-md"}`}><div className={`w-9 h-9 rounded-full grid place-items-center font-black text-[11px] ${activeStep===i?"bg-[#0f3440] text-white":"bg-gray-100"}`}>{s.n}</div><h4 className="font-black text-[12px] mt-3">{s.t}</h4><p className="text-[11px] opacity-60 mt-2 leading-5">{s.d}</p></div>)}
    </div>
    <div className="mt-8 bg-[#0f3440] rounded-[18px] p-5 text-white">
      <div className="flex justify-between mb-4"><h3 className="font-black text-[14px]">Live Proof Feed • Last 24 Hours</h3><span className="bg-green-500 text-[9px] px-2 py-1 rounded-full animate-pulse">LIVE</span></div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">{proofs.map((p,i)=><div key={i} className={`bg-white/10 rounded-[12px] p-3 border border-white/10 transition ${proofIdx===i?"bg-white/20 scale-105 border-white/30":""}`}><div className="flex gap-3"><img src={p.img} className="w-10 h-10 rounded-lg object-cover"/><div className="text-[10px]"><b className="text-[11px]">{p.loc}</b><br/><span className="opacity-60">{p.time}</span><br/>{p.text}</div></div></div>)}</div>
    </div>
  </section>

  {/* SPONSOR WHY + TIERS */}
  <section className="px-4 md:px-8 py-10 max-w-[1300px] mx-auto">
    <h2 className="text-[22px] md:text-[28px] font-black text-center">Why Corporates & Major Donors Sponsor Us</h2><p className="text-center text-[11px] opacity-60 mt-2 max-w-2xl mx-auto">More than charity – it is CSR, ESG, brand visibility across 3 continents</p>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      {[
        {t:"Brand on Every Well & School",d:"Your logo on plaque, opening video 10k+ views, press coverage TR/AZ/Africa"},
        {t:"100% Tax Deductible",d:"Türkiye, Azerbaijan, UK Gift Aid +25%, US 501c3, EU deductible"},
        {t:"Real-Time Dashboard",d:"Login to see your impact live: GPS, photos, videos, beneficiary data"},
        {t:"Zakat & Sadaqah Certified",d:"Fatwa approved, Shariah compliant, monthly Zakat distribution report"},
      ].map((b,i)=><div key={i} className="bg-white border rounded-[14px] p-4 hover:shadow-lg transition"><h4 className="font-black text-[11px]">{b.t}</h4><p className="text-[10px] opacity-60 mt-2">{b.d}</p></div>)}
    </div>
    <h3 className="mt-10 font-black text-[18px] text-center">Corporate Sponsorship Tiers</h3>
    <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-4">
      {[
        {t:"Bronze • $1k-$5k",d:"1 well or 30 kits • Social mention"},
        {t:"Silver • $5k-$15k",d:"3 wells or 1 classroom • Logo + video"},
        {t:"Gold • $15k-$50k",d:"Full school • Name on building • Africa visit",h:true},
        {t:"Platinum • $50k+",d:"Village complex • Naming rights • Board"},
      ].map((x,i)=><div key={i} className={`rounded-[16px] border p-5 text-center hover:scale-105 transition ${x.h?"bg-[#0f3440] text-white shadow-xl":"bg-white"}`}><h4 className="font-black text-[12px]">{x.t}</h4><p className="text-[10px] mt-2 opacity-70">{x.d}</p><Link href="/sponsors" className={`mt-4 block rounded-full py-2 text-[10px] font-black ${x.h?"bg-[#ffcc4d] text-[#0f3440]":"bg-[#0f3440] text-white"}`}>View Tier →</Link></div>)}
    </div>
  </section>

  {/* DONOR WALL + ZAKAT + CSR */}
  <section className="px-4 md:px-8 py-8 max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div className="bg-white border rounded-[18px] p-5">
      <h3 className="font-black text-[14px]">Live Donor & Sponsor Wall</h3><p className="text-[11px] opacity-60">Transparency builds trust</p>
      <div className="mt-4 space-y-2">{[{n:"Ahmet Y. • Istanbul",a:"$500",p:"Water Well",f:"🇹🇷"},{n:"Leyla M. • Baku",a:"$120",p:"Orphan",f:"🇦🇿"},{n:"John D. • London",a:"$250",p:"Food",f:"🇬🇧"},{n:"Sara K. • Berlin",a:"$100",p:"School Kit",f:"🇩🇪"}].map((d,i)=><div key={i} className="flex justify-between items-center bg-[#FFFBF0] border rounded-full px-4 py-2.5 text-[11px]"><span>{d.f} <b>{d.n}</b> • {d.p}</span><b className="text-green-700">{d.a}</b></div>)}</div>
      <Link href="/transparency" className="mt-3 block w-full border rounded-full py-2 text-[11px] font-bold text-center hover:bg-[#0f3440] hover:text-white transition">View Full Transparency →</Link>
    </div>
    <div className="bg-[#0f3440] text-white rounded-[18px] p-6">
      <h3 className="font-black text-[14px]">Zakat Calculator & Corporate Giving</h3><p className="text-[11px] opacity-70 mt-1">Calculate your Zakat in 30 seconds – 100% goes to eligible categories with video proof</p>
      <div className="mt-4 bg-white/10 rounded-[14px] p-4">
        <label className="text-[11px]">Your wealth (USD)</label><input value={wealth} onChange={e=>setWealth(e.target.value)} type="number" className="mt-1 w-full bg-white text-[#0f3440] rounded-full px-4 py-3 font-black text-[14px]"/>
        <div className="mt-3 flex justify-between text-[12px]"><span>Zakat due (2.5%)</span><b className="text-[#ffcc4d] text-[18px]">${zakat.toFixed(2)}</b></div>
        <Link href="/donate" className="mt-3 block w-full bg-[#ffcc4d] text-[#0f3440] rounded-full py-3 font-black text-[13px] text-center">Donate Zakat ${zakat.toFixed(0)} → Video Proof</Link>
      </div>
      <Link href="/sponsors" className="mt-4 block text-[11px] underline opacity-70">CSR & ESG Report Ready for Your Company →</Link>
    </div>
  </section>

  <Footer/>
</main>)
}
