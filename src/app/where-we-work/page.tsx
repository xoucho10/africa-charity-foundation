"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"
export default function Where(){
 const c=[{n:"Uganda",p:28,f:"🇺🇬",img:"https://images.unsplash.com/photo-1541845157-a6d2d100c931?q=80&w=600"},{n:"Niger",p:18,f:"🇳🇪",img:"https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600"},{n:"Somalia",p:15,f:"🇸🇴",img:"https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=600"},{n:"Chad",p:8,f:"🇹🇩",img:"https://images.unsplash.com/photo-1504439268588-b72c50194707?q=80&w=600"}]
 return(<main className="bg-[#FFFBF0] min-h-screen"><Navbar/><section className="bg-[#0f3440] text-white py-20 text-center px-6"><h1 className="text-[44px] font-black">Where We Work</h1><p className="opacity-70 mt-2">Istanbul • Baku • Kampala • Niamey • Mogadishu – 22 countries</p></section><section className="max-w-[1300px] mx-auto px-6 py-12 grid md:grid-cols-4 gap-6">{c.map(x=><Link href={`/projects?country=${x.n}`} key={x.n} className="bg-white border rounded-[20px] overflow-hidden hover:shadow-xl transition"><img src={x.img} className="h-44 w-full object-cover"/><div className="p-4 flex justify-between"><div><b>{x.f} {x.n}</b><br/><span className="text-[11px] opacity-60">{x.p} projects</span></div><span className="bg-[#0f3440] text-white px-3 py-1 rounded-full text-[10px] h-fit">View →</span></div></Link>)}</section><Footer/></main>)
}
