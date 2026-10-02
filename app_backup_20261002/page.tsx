"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"
import { useState, useEffect } from "react"

const dict:any = {
  en: { heroTitle: "Bridging Continents,\nBuilding Hope", heroSub: "Your donation from Türkiye, Azerbaijan, Europe or anywhere delivers clean water, education and healthcare to communities across Africa. 100% transparent, Zakat-eligible, video proof.", cta1: "Donate Now → $50 = 1 Month Water", cta2: "▶ Watch Impact (90s)", live: "LIVE", donating: "donating", give: "Give Hope Today", water: "💧 Clean Water Access", edu: "📚 Education", health: "🏥 Healthcare", donateBtn: "Donate Now →", global: "Global Presence", globalSub: "Istanbul & Baku to 22 nations", story: "Our Story", since: "SINCE 2021", storyText: "Founded 2021, born from idea: Turkish & Azerbaijani compassion can change Africa. We are bridge. Every donation tracked, filmed, reported. 89% field.", storyBtn: "Read Our Story →", impact: "2024 Impact - Real-Time", urgent: "Urgent Appeals", viewAll: "View All 45 →", how: "How Your Donation Becomes Hope • 100% Tracked", howSub: "We built trust for international donors. No black box. Click each step." },
  tr: { heroTitle: "Kıtaları Birleştiriyor,\nUmut İnşa Ediyoruz", heroSub: "Türkiye, Azerbaycan, Avrupa'dan bağışınız Afrika'ya temiz su, eğitim ve sağlık ulaştırıyor. %100 şeffaf, zekat uygun, video kanıtlı.", cta1: "Bağış Yap → $50 = 1 Aylık Su", cta2: "▶ Etkiyi İzle (90s)", live: "CANLI", donating: "bağış yapıyor", give: "Bugün Umut Ver", water: "💧 Temiz Su Erişimi", edu: "📚 Eğitim", health: "🏥 Sağlık", donateBtn: "Bağış Yap →", global: "Küresel Varlık", globalSub: "İstanbul ve Bakü'den 22 ülkeye", story: "Hikayemiz", since: "2021'DEN BERİ", storyText: "2021'de kuruldu: Türk ve Azerbaycan şefkati Afrika'yı değiştirebilir. Biz köprüyüz.", storyBtn: "Hikayemizi Oku →", impact: "2024 Etkisi - Canlı", urgent: "Acil Çağrılar", viewAll: "Tümünü Gör →", how: "Bağışınız Nasıl Umuda Dönüşüyor", howSub: "Uluslararası bağışçılar için güven inşa ettik." },
  az: { heroTitle: "Qitələri Birləşdirir,\nÜmid Quruculuğu", heroSub: "Türkiyə, Azərbaycan, Avropadan ianəniz Afrikaya təmiz su, təhsil və səhiyyə çatdırır. 100% şəffaf, zəkat uyğun, video sübutlu.", cta1: "İanə Et → $50 = 1 Aylıq Su", cta2: "▶ Təsiri İzlə (90s)", live: "CANLI", donating: "ianə edir", give: "Bu Gün Ümid Ver", water: "💧 Təmiz Su Girişi", edu: "📚 Təhsil", health: "🏥 Səhiyyə", donateBtn: "İanə Et →", global: "Qlobal Varlıq", globalSub: "İstanbul və Bakıdan 22 ölkəyə", story: "Hekayəmiz", since: "2021-Cİ İLDƏN", storyText: "2021-ci ildə quruldu: Türk və Azərbaycan şəfqəti Afrikanı dəyişə bilər.", storyBtn: "Hekayəmizi Oxu →", impact: "2024 Təsiri - Canlı", urgent: "Təcili Çağrışlar", viewAll: "Hamısına Bax →", how: "İanəniz Necə Ümidə Çevrilir", howSub: "Beynəlxalq donorlar üçün etibar qurduq." },
  ar: { heroTitle: "نربط القارات،\nنبني الأمل", heroSub: "تبرعك من تركيا وأذربيجان وأوروبا يوصل الماء النظيف والتعليم والصحة إلى أفريقيا. شفاف 100%، مستحق للزكاة، مع فيديو إثبات.", cta1: "تبرع الآن → 50$ = شهر ماء", cta2: "▶ شاهد الأثر", live: "مباشر", donating: "يتبرع الآن", give: "امنح الأمل اليوم", water: "💧 المياه النظيفة", edu: "📚 التعليم", health: "🏥 الصحة", donateBtn: "تبرع الآن →", global: "الحضور العالمي", globalSub: "من إسطنبول وباكو إلى 22 دولة", story: "قصتنا", since: "منذ 2021", storyText: "تأسست 2021 من فكرة: الرحمة التركية والأذربيجانية يمكن أن تغير أفريقيا.", storyBtn: "اقرأ قصتنا →", impact: "أثر 2024 - مباشر", urgent: "نداءات عاجلة", viewAll: "عرض الكل →", how: "كيف يصبح تبرعك أملاً", howSub: "بنينا الثقة للمتبرعين الدوليين." }
};

export default function Home(){
 const [locale,setLocale]=useState('en')
 const t=dict[locale]
 const isAr=locale==='ar'
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
  const c=setInterval(()=>setProofIdx(p=>(p+1)%4),3500)
  return()=>{clearInterval(a);clearInterval(b);clearInterval(c)}
 },[])

 return(<main dir={isAr?'rtl':'ltr'} className="bg-[#FFFBF0] text-[#123e4a] overflow-x-hidden"><Navbar/>
  <div className="fixed top-[70px] right-3 md:right-6 z-[9999] flex items-center gap-1 bg-white/95 backdrop-blur border border-black/10 rounded-full p-1 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
    {[{k:'en',f:'🇬🇧'},{k:'tr',f:'🇹🇷'},{k:'az',f:'🇦🇿'},{k:'ar',f:'🇸🇦'}].map((x:any)=><button key={x.k} onClick={()=>setLocale(x.k)} className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-black transition-all ${locale===x.k?'bg-[#0f3440] text-white scale-105':'hover:bg-gray-100 text-[#0f3440]'}`}><span>{x.f}</span>{x.k.toUpperCase()}</button>)}
  </div>
  <section className="relative min-h-[75vh] md:min-h-[84vh] flex items-center overflow-hidden bg-[#0f3440]">
    <img src="/hero-flags.jpg" className="absolute inset-0 w-full h-full object-cover object-center"/>
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20"/><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
    <div className="relative z-10 px-5 md:px-16 py-10 max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
      <div>
        <div className="flex gap-2 mb-4 flex-wrap"><span className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-[10px] border border-white/20">🇹🇷 Türkiye</span><span className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-[10px] border border-white/20">🇦🇿 Azerbaijan</span><span className="bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-black animate-pulse">● {t.live} {live} {t.donating}</span></div>
        <h1 className="text-[34px] md:text-[60px] font-black leading-[0.9] text-white whitespace-pre-line">{t.heroTitle}</h1>
        <p className="mt-4 text-white/80 text-[13px] md:text-[15px] max-w-xl leading-6">{t.heroSub}</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3"><Link href="/donate" className="bg-[#ffcc4d] text-[#0f3440] px-7 py-4 rounded-full font-black text-[14px] text-center hover:scale-105 transition">{t.cta1}</Link><Link href="/impact" className="bg-white/15 backdrop-blur border border-white/30 text-white px-7 py-4 rounded-full font-bold text-[13px] text-center">{t.cta2}</Link></div>
      </div>
      <div className="bg-white rounded-[24px] p-5 md:p-6 shadow-[0_20px_80px_rgba(0,0,0,0.5)] w-full max-w-[440px] mx-auto lg:ml-auto">
        <div className="flex justify-between"><h3 className="font-black text-[18px]">{t.give}</h3><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-[10px] font-bold animate-pulse">● {t.live} • {live}</span></div>
        <div className="mt-4 grid grid-cols-4 gap-2">{[25,50,100,250].map((v:any)=><button key={v} onClick={()=>setAmount(v)} className={`border-2 rounded-full py-3 font-black text-[14px] ${amount===v?"bg-[#0f3440] text-white border-[#0f3440] scale-105":"border-gray-200"}`}>${v}</button>)}</div>
        <div className="mt-4 space-y-2"><Link href="/projects?type=water" className="w-full bg-[#ffcc4d] rounded-full py-3 font-bold text-[12px] flex justify-between px-5">{t.water} <span>85% →</span></Link><Link href="/projects?type=education" className="w-full border rounded-full py-3 font-bold text-[12px] flex justify-between px-5">{t.edu} <span>62%</span></Link><Link href="/projects?type=health" className="w-full border rounded-full py-3 font-bold text-[12px] flex justify-between px-5">{t.health} <span>70%</span></Link></div>
        <Link href="/donate" className="mt-4 block w-full bg-[#0f3440] text-white rounded-full py-4 font-black text-center">{t.donateBtn} ${amount}</Link>
      </div>
    </div>
  </section>
  <section className="px-4 md:px-8 py-8 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1300px] mx-auto">
    <div className="bg-[#efe8d6] rounded-[20px] border border-[#0f3440]/20 p-5 md:p-6 shadow-sm hover:shadow-xl transition">
      <h2 className="text-[16px] font-black">{t.global}</h2><p className="text-[10px] opacity-60">{t.globalSub}</p>
      <Link href="/where-we-work" className="mt-4 bg-[#ddd8c5] rounded-[14px] border h-[140px] grid place-items-center text-[10px] text-center p-4 block">Map – Türkiye • Azerbaijan • USA • UK • Uganda • Somalia • Niger<br/><span className="underline text-[9px]">Click to explore →</span></Link>
      <div className="mt-5 grid grid-cols-3 gap-2 text-center"><div className="bg-white rounded-[12px] border p-3"><b className="text-[14px]">{total.toLocaleString()}+</b><br/><span className="text-[10px]">Lives</span><div className="text-[8px] text-green-600 animate-pulse">● live</div></div><div className="bg-white rounded-[12px] border p-3"><b>45+</b><br/><span className="text-[10px]">Projects</span></div><div className="bg-white rounded-[12px] border p-3"><b>22</b><br/><span className="text-[10px]">Countries</span></div></div>
    </div>
    <div className="bg-[#efe8d6] rounded-[20px] border border-[#0f3440]/20 p-7 shadow-sm hover:shadow-xl transition flex flex-col"><h2 className="text-[20px] font-black text-center">{t.story}</h2><p className="text-center text-[8px] opacity-50 uppercase tracking-widest">{t.since}</p><p className="mt-4 text-[12px] leading-[1.7] opacity-80 text-center">{t.storyText}</p><Link href="/about" className="mt-auto pt-6 mx-auto bg-white border border-[#0f3440] px-5 py-2 rounded-full text-[11px] font-bold hover:bg-[#0f3440] hover:text-white transition">{t.storyBtn}</Link></div>
    <div className="bg-[#efe8d6] rounded-[20px] border border-[#0f3440]/20 p-5 shadow-sm hover:shadow-xl transition"><div className="flex justify-between"><h3 className="font-black text-[14px]">{t.impact}</h3><span className="bg-green-600 text-white text-[8px] px-2 py-0.5 rounded-full animate-pulse">{t.live}</span></div><div className="mt-4 space-y-3">{[{i:"💧",t:"Clean Water",s:"78k • 156 wells",p:78},{i:"📚",t:"Education",s:"3k • 12 schools",p:60},{i:"🏥",t:"Healthcare",s:"15k • 4 clinics",p:70}].map((r,i)=><Link key={i} href="/impact" className="bg-white rounded-[14px] border p-3 flex justify-between items-center"><div className="flex gap-3 items-center"><div className="w-8 h-8 bg-blue-50 rounded-full grid place-items-center">{r.i}</div><div className="text-[10px]"><b>{r.t}</b><br/><span className="opacity-60">{r.s}</span></div></div><div className="bg-[#0f3440] text-white text-[10px] px-3 py-1 rounded-full">{r.p}%</div></Link>)}</div><Link href="/projects" className="mt-4 block bg-[#0f3440] text-white rounded-full py-2.5 text-[11px] font-black text-center">{t.viewAll}</Link></div>
  </section>
  <Footer/>
</main>)
}
