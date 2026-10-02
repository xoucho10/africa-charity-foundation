"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"
export default function Sponsors(){
 return(<main className="bg-[#FFFBF0] min-h-screen"><Navbar/><section className="bg-[#0f3440] text-white py-20 text-center px-6"><h1 className="text-[44px] font-black">Corporate Sponsorship</h1><p className="mt-3 opacity-70">47 companies – brand visibility + ESG + tax deduction</p><Link href="/contact" className="mt-6 inline-block bg-[#ffcc4d] text-[#0f3440] px-8 py-4 rounded-full font-black">Become Sponsor →</Link></section><section className="max-w-[1100px] mx-auto px-6 py-12 grid md:grid-cols-4 gap-4">{[{t:"Bronze $1k-$5k",d:"1 well • Social mention"},{t:"Silver $5k-$15k",d:"3 wells • Logo + video"},{t:"Gold $15k-$50k",d:"Full school • Name on building • TRT feature",h:true},{t:"Platinum $50k+",d:"Village complex • Board invitation"}].map((x,i)=><div key={i} className={`border rounded-[20px] p-6 text-center ${x.h?"bg-[#0f3440] text-white":"bg-white"}`}><h3 className="font-black text-[13px]">{x.t}</h3><p className="text-[11px] mt-2 opacity-70">{x.d}</p><Link href="/donate" className={`mt-4 block rounded-full py-2.5 text-[11px] font-black ${x.h?"bg-[#ffcc4d] text-[#0f3440]":"bg-[#0f3440] text-white"}`}>Sponsor Now</Link></div>)}</section><Footer/></main>)
}
