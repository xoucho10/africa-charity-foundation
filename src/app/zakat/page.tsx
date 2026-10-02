"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"
import { useState } from "react"
export default function Zakat(){
 const [w,setW]=useState("2500")
 const z=Number(w||0)*0.025
 return(<main className="bg-[#FFFBF0] min-h-screen"><Navbar/><section className="max-w-[800px] mx-auto px-6 py-16"><h1 className="text-[38px] font-black text-center">Zakat Calculator – Certified</h1><div className="mt-8 bg-white border rounded-[24px] p-8"><label className="text-[12px] font-bold">Wealth USD</label><input value={w} onChange={e=>setW(e.target.value)} type="number" className="mt-2 w-full border-2 border-[#0f3440] rounded-full px-6 py-4 font-black text-[18px]"/><div className="mt-6 bg-[#0f3440] text-white rounded-[18px] p-6 flex justify-between items-center"><div><div className="text-[11px] opacity-70">Zakat 2.5%</div><div className="text-[32px] font-black text-[#ffcc4d]">${z.toFixed(2)}</div></div><Link href="/donate" className="bg-[#ffcc4d] text-[#0f3440] px-8 py-4 rounded-full font-black">Donate →</Link></div></div></section><Footer/></main>)
}
