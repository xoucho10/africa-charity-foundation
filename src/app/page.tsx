"use client"
import { useState, useEffect } from "react"

const T:any={
en:{
banner:"🌐 Trusted by donors from 27 countries • Verified NGO • 89% goes to field",
nav:["About","Where We Work","Our Impact","Projects","Sponsors","Transparency"],
hero_title:"Bridging Continents,\nBuilding Hope",
hero_desc:"Your donation from Türkiye, Azerbaijan, Europe or anywhere delivers clean water, education and healthcare to communities across Africa. 100% transparent, Zakat-eligible.",
give_title:"Give Hope Today", live:"● LIVE", donating_now:"donating now",
water:"Clean Water Access", water_sub:"78,000+ people • 156 wells", edu:"Education Program", edu_sub:"3,000+ students • 12 schools", health:"Healthcare Support", health_sub:"15,000+ consultations • 4 clinics",
global_title:"Global Presence", global_desc:"From Istanbul & Baku to 22 African nations", story_title:"Our Story", story_sub:"BRIDGING CULTURES SINCE 2021",
story_text:"Founded in 2021, Afrika Yardım Vakfı was born from a simple idea: Turkish & Azerbaijani compassion can change Africa. We are not just a charity — we are a bridge. Every Euro, Dollar, Lira, Manat you give is tracked, filmed, and reported. 89% goes directly to field. Our Istanbul coordination and Baku liaison work with teams in Kampala, Niamey, and Mogadishu.",
impact:"2024 Impact • Real-Time", projects:"Donor-Favorite Projects", donate_btn:"Donate Now →",
urgent_badge:"● URGENT", urgent_sub:"Campaigns needing immediate support", urgent_title:"Urgent Appeals", view_all:"View All 45 Projects →",
ramadan_title:"Ramadan Food Parcels for 1000 Families", ramadan_desc:"Each $40 feeds a family of 6 for entire month. Zakat eligible, video proof.",
orphan_title:"Orphan Sponsorship – Monthly Support", orphan_desc:"$35/month gives orphan child education, food, health, home. Monthly updates.",
well_title:"Deep Water Well – 800 People", well_desc:"Permanent solution. Solar powered. Name plate with donor name. 25 years.",
how_title:"How Your Donation Becomes Hope • 100% Tracked", how_sub:"We built trust for international donors. No black box. Click each step.",
step1_t:"You Donate Securely (2 mins)", step1_d:"Card, PayPal, Bank, Crypto, Troy, BirKart – receipt instantly. 256-bit SSL.",
step2_t:"We Deploy in 72 Hours", step2_d:"Local team in Kampala / Niamey / Mogadishu starts project. WhatsApp update with GPS.",
step3_t:"You Get Proof – Photos & GPS", step3_d:"Drone footage, beneficiary interviews, GPS coordinates, name plate video.",
step4_t:"Impact Report + Tax Receipt", step4_d:"Annual audited report, dashboard login, deductible receipt for TR, EU, US, AZ.",
proof_title:"Live Proof Feed • Last 24 Hours", proof_live:"LIVE UPDATES",
sponsor_why_title:"Why Corporates & Major Donors Sponsor Us", sponsor_why_sub:"More than charity – it is CSR, ESG, brand visibility across 3 continents",
benefit1_t:"Brand on Every Well & School", benefit1_d:"Your logo on plaque, opening video with 10k+ views, press coverage TR/AZ/Africa",
benefit2_t:"100% Tax Deductible", benefit2_d:"Türkiye (Dernek makbuzu), Azerbaijan, UK Gift Aid +25%, US 501c3, EU deductible",
benefit3_t:"Real-Time Dashboard", benefit3_d:"Login to see your impact live: GPS, photos, videos, beneficiary data",
benefit4_t:"Zakat & Sadaqah Certified", benefit4_d:"Fatwa approved, Shariah compliant, monthly Zakat distribution report",
tiers_title:"Corporate Sponsorship Tiers", tiers_sub:"Join 47 companies already sponsoring • From local SME to international corp",
partners_title:"Trusted By 47+ Partners & Sponsors", donor_wall_title:"Live Donor & Sponsor Wall", donor_wall_sub:"Transparency builds trust – every donation public (optional anonymous)",
zakat_title:"Zakat Calculator & Corporate Giving", zakat_desc:"Calculate your Zakat in 30 seconds – 100% goes to eligible categories with video proof", calc_btn:"Calculate Zakat →",
csr_title:"CSR & ESG Report Ready for Your Company", csr_desc:"We provide ESG documentation, photos, impact metrics for your annual sustainability report"
}
}

const liveProofs=[
{time:"2m ago", loc:"Uganda • Kayunga", text:"Well #157 opened – 840 people now have water", img:"https://images.unsplash.com/photo-1541845157-a6d2d100c931?q=80&w=200"},
{time:"18m ago", loc:"Niger • Tillaberi", text:"120 food parcels delivered – video proof uploaded", img:"https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=200"},
{time:"1h ago", loc:"Somalia • Mogadishu", text:"Clinic treated 34 children today", img:"https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=200"},
{time:"3h ago", loc:"Azerbaijan • Baku", text:"Corporate sponsor AZN 5000 donated for school", img:"https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=200"},
]

const donors=[
{name:"Ahmet Y. • Istanbul", amount:"$500", project:"Water Well", flag:"🇹🇷", time:"3m"},
{name:"Leyla M. • Baku", amount:"$120", project:"Orphan", flag:"🇦🇿", time:"12m"},
{name:"John D. • London", amount:"$250", project:"Food Parcels", flag:"🇬🇧", time:"28m"},
{name:"Sara K. • Berlin", amount:"$100", project:"School Kit", flag:"🇩🇪", time:"42m"},
{name:"Omar H. • Dubai", amount:"$1000", project:"Clinic Wing", flag:"🇦🇪", time:"1h"},
]

export default function Home(){
const t=T.en
const [amount,setAmount]=useState(50)
const [customAmount,setCustomAmount]=useState("")
const [activeStep,setActiveStep]=useState(0)
const [liveCount,setLiveCount]=useState(23)
const [totalLives,setTotalLives]=useState(12400)
const [zakatInput,setZakatInput]=useState("2500")
const [proofIdx,setProofIdx]=useState(0)
const [donorList,setDonorList]=useState(donors)
const [showToast,setShowToast]=useState("")

useEffect(()=>{
  const i=setInterval(()=>setLiveCount(c=>Math.floor(18+Math.random()*12)),3000)
  const j=setInterval(()=>setTotalLives(c=>c+Math.floor(Math.random()*3)),5000)
  const k=setInterval(()=>setProofIdx(p=>(p+1)%liveProofs.length),4000)
  return()=>{clearInterval(i);clearInterval(j);clearInterval(k)}
},[])

const triggerDonate=(a:any)=>{
  setShowToast(`Thank you! Redirecting to secure checkout for $${a}...`)
  setTimeout(()=>setShowToast(""),3000)
}

const zakatValue=Number(zakatInput||0)*0.025

return(
<main className="bg-[#FFFBF0] text-[#123e4a] overflow-x-hidden">
{showToast && <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-[#0f3440] text-white px-6 py-3 rounded-full text-[13px] font-bold z-[999] shadow-2xl animate-bounce">{showToast}</div>}

<div className="bg-[#e8f4ff] text-[11px] text-center py-2 px-2 flex justify-center gap-2 items-center">
<span className="bg-green-600 text-white px-2 py-0.5 rounded-full text-[9px] font-black animate-pulse">✓ VERIFIED NGO</span>
<span>{t.banner}</span>
<span className="hidden md:inline bg-[#0f3440] text-white px-2 py-0.5 rounded-full text-[9px] ml-2">● {liveCount} {t.donating_now}</span>
</div>

<header className="bg-[#0f3440] text-white px-4 md:px-8 py-3 flex justify-between items-center sticky top-0 z-50 shadow-md backdrop-blur">
<div className="flex items-center gap-3">
<img src="/logo.png" className="w-12 h-12 md:w-[64px] md:h-[64px] rounded-full bg-white object-cover border-2 border-white shadow" alt="logo"/>
<div className="hidden md:block leading-3"><b className="text-[12px]">Afrika Yardım Vakfı</b><br/><span className="text-[10px] opacity-70">Africa Charity • 2021</span></div>
</div>
<nav className="hidden lg:flex gap-5 text-[12px] opacity-80">{t.nav.map((n:string)=><a key={n} className="cursor-pointer hover:text-[#ffcc4d] transition">{n}</a>)}</nav>
<div className="flex gap-2 items-center">
<div className="hidden md:flex bg-white/10 rounded-full p-1 text-[10px]"><span className="px-3 py-1 rounded-full bg-white text-[#0f3440] font-black">$ USD</span><span className="px-3 py-1">₺ TRY</span><span className="px-3 py-1">₼ AZN</span></div>
<button onClick={()=>triggerDonate(amount)} className="bg-[#ffcc4d] text-[#0f3440] px-5 py-2.5 rounded-full text-[12px] font-black shadow hover:scale-105 transition">{t.donate_btn}</button>
</div>
</header>

{/* HERO WITH YOUR hero-flags.jpg */}
<section className="relative min-h-[75vh] md:min-h-[84vh] flex items-center overflow-hidden bg-[#0f3440]">
<img src="/hero-flags.jpg" alt="hero flags" className="absolute inset-0 w-full h-full object-cover object-center scale-105"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/20"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="relative z-10 px-5 md:px-16 py-10 md:py-16 max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
<div>
<div className="flex gap-2 mb-4 flex-wrap"><span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold border border-white/20 text-white">🇹🇷 Türkiye</span><span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold border border-white/20 text-white">🇦🇿 Azerbaijan</span><span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold border border-white/20 text-white">🌍 22 Countries</span><span className="bg-green-500/90 px-3 py-1 rounded-full text-[10px] font-black text-white animate-pulse">● LIVE {liveCount} donating</span></div>
<h1 className="text-[34px] md:text-[60px] font-black leading-[0.9] whitespace-pre-line text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]">{t.hero_title}</h1>
<p className="mt-4 text-[13px] md:text-[16px] leading-6 max-w-xl text-white/90">{t.hero_desc}</p>
<div className="mt-6 flex flex-wrap gap-3">
<button onClick={()=>triggerDonate(50)} className="bg-[#ffcc4d] text-[#0f3440] px-7 py-4 rounded-full font-black text-[14px] shadow-xl hover:scale-105 transition">Donate Now → Your $50 = 1 Month Water</button>
<button className="bg-white/15 backdrop-blur border border-white/30 text-white px-7 py-4 rounded-full font-bold text-[13px] hover:bg-white/25 transition">▶ Watch Impact (90s)</button>
</div>
<div className="mt-6 flex gap-6 text-white/80 text-[11px]"><span>✓ 89% to field</span><span>✓ 12,400+ lives</span><span>✓ Video proof</span></div>
</div>

<div className="bg-white text-[#123e4a] rounded-[24px] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.5)] max-w-[440px] w-full mx-auto lg:ml-auto border">
<div className="flex justify-between items-center"><h3 className="font-black text-[18px]">{t.give_title}</h3><span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold animate-pulse">{t.live} • {liveCount}</span></div>
<div className="mt-4 grid grid-cols-4 gap-2">
{[25,50,100,250].map(v=>(
<button key={v} onClick={()=>setAmount(v)} className={`border-2 rounded-full py-3 font-black text-[14px] transition ${amount===v?"border-[#0f3440] bg-[#0f3440] text-white scale-105":"border-gray-200 hover:border-[#0f3440]"}`}>${v}</button>
))}
</div>
<input value={customAmount} onChange={e=>setCustomAmount(e.target.value)} placeholder="Custom amount" className="mt-3 w-full border rounded-full px-5 py-3 text-[13px] text-center font-bold"/>
<div className="mt-4 space-y-2">
{[ {l:`💧 ${t.water}`, p:85, c:"bg-[#ffcc4d]" }, {l:`📚 ${t.edu}`, p:62, c:"bg-[#0f3440] text-white"}, {l:`🏥 ${t.health}`, p:70, c:"border"}].map((x,i)=>(
<button key={i} onClick={()=>triggerDonate(amount)} className={`w-full rounded-full py-3 font-bold text-[12px] flex justify-between px-5 ${x.c} transition hover:scale-[1.02]`}><span>{x.l}</span><span>{x.p}% →</span></button>
))}
</div>
<button onClick={()=>triggerDonate(customAmount||amount)} className="mt-4 w-full bg-[#0f3440] text-white rounded-full py-4 font-black text-[15px] hover:bg-black transition">Donate Now → ${customAmount||amount}</button>
<p className="text-center text-[10px] opacity-50 mt-3">🔒 SSL Secure • Instant Receipt • 89% to field</p>
</div>
</div>
</section>

{/* 3 COLUMNS - EXACTLY LIKE YOUR SCREENSHOT BUT DYNAMIC */}
<section className="px-3 md:px-8 py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-5 max-w-[1600px] mx-auto">
<div className="lg:col-span-3 bg-[#efe8d6] rounded-[20px] border p-6 hover:shadow-xl transition">
<h2 className="text-[18px] font-black">{t.global_title}</h2><p className="text-[11px] mt-2 opacity-60">{t.global_desc}</p>
<div className="mt-5 bg-[#ddd8c5] rounded-[14px] border h-[160px] grid place-items-center text-[10px] text-center p-4 relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-[#0f3440]/5 group-hover:bg-[#0f3440]/10 transition"></div>
<span className="relative">🗺️ Interactive Map<br/><b className="text-[12px]">Türkiye • Azerbaijan • USA • UK • Uganda • Somalia • Niger</b><br/><span className="text-[9px] underline">Click to explore</span></span>
</div>
<div className="mt-5 grid grid-cols-3 gap-2 text-center">
<div className="bg-white rounded-[12px] border p-3 hover:scale-105 transition"><b className="text-[15px]">{totalLives.toLocaleString()}+</b><br/><span className="text-[10px]">Lives</span><div className="text-[8px] text-green-600">▲ live</div></div>
<div className="bg-white rounded-[12px] border p-3 hover:scale-105 transition"><b className="text-[15px]">45+</b><br/><span className="text-[10px]">Projects</span></div>
<div className="bg-white rounded-[12px] border p-3 hover:scale-105 transition"><b className="text-[15px]">22</b><br/><span className="text-[10px]">Countries</span></div>
</div>
</div>

<div className="lg:col-span-4 bg-[#efe8d6] rounded-[20px] border p-7 hover:shadow-xl transition">
<h2 className="text-[20px] font-black text-center">{t.story_title}</h2><p className="text-center text-[9px] opacity-50 uppercase tracking-widest mt-1">{t.story_sub}</p>
<div className="mt-5 text-[12.5px] leading-[1.8]">{t.story_text}</div>
<div className="mt-5 grid grid-cols-2 gap-2 text-[10px]">
<div className="bg-white rounded-full px-3 py-2 border flex gap-2 items-center"><span>✓</span> Audited yearly</div>
<div className="bg-white rounded-full px-3 py-2 border flex gap-2 items-center"><span>✓</span> 89% to field</div>
<div className="bg-white rounded-full px-3 py-2 border flex gap-2 items-center"><span>✓</span> Video proof</div>
<div className="bg-white rounded-full px-3 py-2 border flex gap-2 items-center"><span>✓</span> Zakat certified</div>
</div>
</div>

<div className="lg:col-span-5 bg-[#efe8d6] rounded-[20px] border p-5 hover:shadow-xl transition">
<div className="flex justify-between items-center"><h3 className="font-black text-[14px]">{t.impact}</h3><span className="text-[9px] bg-green-600 text-white px-2 py-1 rounded-full animate-pulse">LIVE</span></div>
<div className="mt-4 space-y-3">
{[
{icon:"💧", title:t.water, sub:t.water_sub, pct:78, color:"bg-[#7fbf7a]"},
{icon:"📚", title:t.edu, sub:t.edu_sub, pct:60, color:"bg-[#4aa9c5]"},
{icon:"🏥", title:t.health, sub:t.health_sub, pct:70, color:"bg-[#7fbf7a]"},
].map((r,i)=>(
<div key={i} className="bg-white rounded-[14px] border p-3.5 flex justify-between items-center hover:shadow-md transition cursor-pointer group">
<div className="flex gap-3 items-center"><div className="w-10 h-10 bg-blue-50 rounded-full grid place-items-center group-hover:scale-110 transition">{r.icon}</div><div className="text-[11px]"><b>{r.title}</b><br/><span className="opacity-60">{r.sub}</span></div></div>
<div className={`${r.color} text-white text-[11px] px-3 py-1 rounded-full font-black transition-all`} style={{width:`${r.pct<75?"60px":"70px"}`}}>{r.pct}%</div>
</div>
))}
</div>
<h3 className="mt-6 font-black text-[14px] text-center">{t.projects}</h3>
<div className="mt-4 grid grid-cols-3 gap-3">
{[
{loc:"UGANDA • Water Well", img:"https://images.unsplash.com/photo-1541845157-a6d2d100c931?q=80&w=400"},
{loc:"NIGER • School", img:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400"},
{loc:"SOMALIA • Clinic", img:"https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=400"},
].map((p,i)=>(
<div key={i} className="bg-white rounded-[14px] border overflow-hidden hover:scale-105 transition shadow-sm cursor-pointer">
<img src={p.img} className="h-24 w-full object-cover"/><div className="p-2.5 text-[9px]"><b className="text-[8px]">{p.loc}</b><br/><button onClick={()=>triggerDonate(50)} className="mt-2 w-full bg-[#0f3440] text-white rounded-full py-1.5 text-[10px] font-black hover:bg-black">{t.donate_btn}</button></div>
</div>
))}
</div>
</div>
</section>

{/* URGENT APPEALS - DYNAMIC PROGRESS */}
<section className="px-3 md:px-12 py-10 max-w-[1600px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 mb-6"><div><div className="flex items-center gap-2"><span className="bg-red-600 text-white text-[10px] px-3 py-1 rounded-full animate-pulse font-black">{t.urgent_badge}</span><span className="text-[11px] font-bold opacity-60">{t.urgent_sub}</span></div><h2 className="text-[26px] md:text-[36px] font-black mt-2">{t.urgent_title}</h2></div><button className="border rounded-full px-6 py-2 text-[12px] font-bold hover:bg-[#0f3440] hover:text-white transition">{t.view_all}</button></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
{[
{title:t.ramadan_title, desc:t.ramadan_desc, img:"https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600", badge:"🔥 MOST URGENT", color:"bg-red-600", progress:78, left:"$5,400 left", cta:"Donate Now – $40", dark:true},
{title:t.orphan_title, desc:t.orphan_desc, img:"https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=600", badge:"⚡ TRENDING", color:"bg-[#ffcc4d] text-[#0f3440]", progress:65, left:"$2,100 left", cta:"Donate Now – $35", dark:true},
{title:t.well_title, desc:t.well_desc, img:"https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600", badge:"💧 WATER", color:"bg-[#0f3440]", progress:92, left:"$800 left", cta:"Donate Now – $100", dark:false},
].map((c,i)=>(
<div key={i} className="bg-white rounded-[20px] border-2 overflow-hidden shadow-lg hover:shadow-2xl transition hover:-translate-y-1 group">
<div className="relative"><img src={c.img} className="h-48 w-full object-cover group-hover:scale-105 transition duration-700"/><div className={`absolute top-3 left-3 ${c.color} text-white text-[10px] px-3 py-1 rounded-full font-black`}>{c.badge}</div><div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-16"></div></div>
<div className="p-5"><h3 className="font-black text-[15px]">{c.title}</h3><p className="text-[12px] opacity-60 mt-2 line-clamp-2">{c.desc}</p>
<div className="mt-4"><div className="flex justify-between text-[11px] mb-1"><span>{c.progress}% funded</span><span className="font-black">{c.left}</span></div><div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className={`h-2 rounded-full transition-all duration-1000 ${c.progress>80?"bg-green-500":c.progress>60?"bg-yellow-500":"bg-red-500"}`} style={{width:`${c.progress}%`}}></div></div></div>
<button onClick={()=>triggerDonate(c.cta.match(/\$\d+/)?.[0].replace("$","")||50)} className={`mt-4 w-full rounded-full py-3 font-black text-[13px] transition ${c.dark?"bg-[#0f3440] text-white hover:bg-black":"bg-[#ffcc4d] text-[#0f3440] hover:bg-[#ffbb00]"}`}>{c.cta}</button>
</div>
</div>
))}
</div>
</section>

{/* HOW IT WORKS + LIVE PROOF */}
<section className="px-3 md:px-12 py-10 bg-[#efe8d6]/50 max-w-[1600px] mx-auto rounded-[24px]">
<h2 className="text-[24px] md:text-[32px] font-black text-center">{t.how_title}</h2><p className="text-center text-[12px] opacity-60 mt-2">{t.how_sub}</p>
<div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
{[
{title:t.step1_t, desc:t.step1_d, num:"01", active: activeStep===0},
{title:t.step2_t, desc:t.step2_d, num:"02", active: activeStep===1},
{title:t.step3_t, desc:t.step3_d, num:"03", active: activeStep===2},
{title:t.step4_t, desc:t.step4_d, num:"04", active: activeStep===3},
].map((s,i)=>(
<div key={i} onClick={()=>setActiveStep(i)} className={`bg-white rounded-[18px] border p-5 cursor-pointer transition-all ${s.active?"border-[#0f3440] shadow-xl scale-105":"hover:shadow-md"}`}>
<div className={`w-10 h-10 rounded-full grid place-items-center font-black text-[12px] ${s.active?"bg-[#0f3440] text-white":"bg-gray-100"}`}>{s.num}</div>
<h4 className="font-black text-[13px] mt-3">{s.title}</h4><p className="text-[11px] opacity-60 mt-2 leading-5">{s.desc}</p>
</div>
))}
</div>

<div className="mt-10 bg-[#0f3440] rounded-[20px] p-5 md:p-6 text-white">
<div className="flex justify-between items-center mb-4"><h3 className="font-black text-[16px]">{t.proof_title}</h3><span className="bg-green-500 text-[9px] px-2 py-1 rounded-full animate-pulse font-black">{t.proof_live}</span></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-3">
{liveProofs.map((p,i)=>(
<div key={i} className={`bg-white/10 rounded-[14px] p-3 border border-white/10 transition-all ${proofIdx===i?"bg-white/20 scale-105 border-white/30":""}`}>
<div className="flex gap-3"><img src={p.img} className="w-12 h-12 rounded-lg object-cover"/><div className="text-[10px]"><b className="text-[11px]">{p.loc}</b><br/><span className="opacity-60">{p.time}</span><br/>{p.text}</div></div>
</div>
))}
</div>
</div>
</section>

{/* SPONSORS + TIERS + DONOR WALL + ZAKAT */}
<section className="px-3 md:px-12 py-10 max-w-[1600px] mx-auto">
<h2 className="text-[24px] md:text-[30px] font-black text-center">{t.sponsor_why_title}</h2><p className="text-center text-[12px] opacity-60 mt-2 max-w-2xl mx-auto">{t.sponsor_why_sub}</p>
<div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
{[
{t:t.benefit1_t, d:t.benefit1_d}, {t:t.benefit2_t, d:t.benefit2_d}, {t:t.benefit3_t, d:t.benefit3_d}, {t:t.benefit4_t, d:t.benefit4_d}
].map((b,i)=>(
<div key={i} className="bg-white border rounded-[16px] p-5 hover:shadow-lg transition">
<h4 className="font-black text-[12px]">{b.t}</h4><p className="text-[11px] opacity-60 mt-2">{b.d}</p>
</div>
))}
</div>

<h3 className="mt-10 font-black text-[20px] text-center">{t.tiers_title}</h3>
<div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-4">
{[
{title:"Bronze • $1k-$5k", perks:"1 well or 30 kits • Social mention", price:"1000"},
{title:"Silver • $5k-$15k", perks:"3 wells or 1 classroom • Logo + video", price:"5000"},
{title:"Gold • $15k-$50k", perks:"Full school • Name on building • Visit", price:"15000", highlight:true},
{title:"Platinum • $50k+", perks:"Village complex • Naming rights • Board", price:"50000"},
].map((tier,i)=>(
<div key={i} className={`rounded-[18px] border p-5 text-center hover:scale-105 transition cursor-pointer ${tier.highlight?"bg-[#0f3440] text-white shadow-xl border-[#0f3440]":"bg-white"}`}>
<h4 className="font-black text-[13px]">{tier.title}</h4><p className="text-[11px] mt-3 opacity-70">{tier.perks}</p><button onClick={()=>triggerDonate(tier.price)} className={`mt-4 w-full rounded-full py-2.5 text-[11px] font-black ${tier.highlight?"bg-[#ffcc4d] text-[#0f3440]":"bg-[#0f3440] text-white"}`}>Sponsor Now</button>
</div>
))}
</div>

<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="bg-white border rounded-[18px] p-6">
<h3 className="font-black text-[14px]">{t.donor_wall_title}</h3><p className="text-[11px] opacity-60">{t.donor_wall_sub}</p>
<div className="mt-4 space-y-2 max-h-[280px] overflow-y-auto pr-2">
{donorList.map((d,i)=>(
<div key={i} className="flex justify-between items-center bg-[#FFFBF0] border rounded-full px-4 py-2.5 text-[11px] hover:shadow-sm transition">
<span>{d.flag} <b>{d.name}</b> • {d.project}</span><span className="font-black text-green-700">{d.amount}</span><span className="opacity-50 text-[9px]">{d.time}</span>
</div>
))}
</div>
<button onClick={()=>setDonorList([...donorList, {name:"You • Just now", amount:`$${amount}`, project:"Water", flag:"❤️", time:"now"}])} className="mt-3 w-full border rounded-full py-2 text-[11px] font-bold hover:bg-[#0f3440] hover:text-white transition">+ Add your donation to wall</button>
</div>

<div className="bg-[#0f3440] text-white rounded-[18px] p-6">
<h3 className="font-black text-[15px]">{t.zakat_title}</h3><p className="text-[11px] opacity-70 mt-2">{t.zakat_desc}</p>
<div className="mt-4 bg-white/10 rounded-[14px] p-4">
<label className="text-[11px]">Your wealth (USD)</label>
<input value={zakatInput} onChange={e=>setZakatInput(e.target.value)} type="number" className="mt-1 w-full bg-white text-[#0f3440] rounded-full px-4 py-3 font-black text-[14px]"/>
<div className="mt-3 flex justify-between text-[12px]"><span>Zakat due (2.5%)</span><b className="text-[#ffcc4d] text-[18px]">${zakatValue.toFixed(2)}</b></div>
<button onClick={()=>triggerDonate(zakatValue.toFixed(0))} className="mt-3 w-full bg-[#ffcc4d] text-[#0f3440] rounded-full py-3 font-black text-[13px] hover:scale-105 transition">Donate Zakat ${zakatValue.toFixed(0)} → Video Proof</button>
<p className="text-[9px] opacity-50 mt-2 text-center">Shariah certified • 8 categories • Fatwa approved</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#0f3440] text-white px-5 md:px-12 py-10 mt-10">
<div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-[11px]">
<div className="col-span-2 md:col-span-1"><img src="/logo.png" className="w-14 h-14 rounded-full bg-white mb-3" alt=""/><b>Afrika Yardım Vakfı</b><br/>Bridging Continents, Building Hope<br/>Est. 2021 • NGO No: 2021/047<br/><br/><span className="opacity-60">47+ corporate sponsors • 12,400+ lives • 22 countries</span></div>
<div>Contact<br/>Istanbul: +90 212 XXX<br/>Baku: +994 12 XXX<br/>Kampala: +256 XXX<br/>info@afrikayardimvakfi.org<br/><br/>WhatsApp: +256 7XX XXX<br/>24/7 donor support</div>
<div>Transparency<br/>● Audited Financials<br/>● 89% Field • 11% Admin<br/>● Zakat Policy<br/>● Annual Report PDF<br/><br/>Legal<br/>● Privacy • Terms<br/>● KVKK • GDPR</div>
<div><button onClick={()=>triggerDonate(100)} className="bg-[#ffcc4d] text-[#0f3440] px-6 py-3 rounded-full font-black text-[12px] hover:scale-105 transition">Donate Now →</button><br/><br/>Visa • MasterCard • PayPal • Troy • BirKart • Crypto<br/><br/><span className="opacity-60">© 2025 Afrika Yardım Vakfı. All rights reserved.</span></div>
</div>
</footer>
</main>
)
}
