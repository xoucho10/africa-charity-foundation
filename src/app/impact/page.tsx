"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"
import { useState, useEffect } from "react"
export default function Impact(){
 const [count,setCount]=useState(12400)
 useEffect(()=>{const i=setInterval(()=>setCount(c=>c+1),3000);return()=>clearInterval(i)},[])
 return(<main className="bg-[#FFFBF0] min-h-screen"><Navbar/><section className="px-6 py-16 max-w-[1200px] mx-auto"><h1 className="text-[44px] font-black text-center">2024 Impact – Live</h1><div className="mt-10 grid md:grid-cols-4 gap-4"><div className="bg-[#0f3440] text-white rounded-[20px] p-6 text-center"><b className="text-[36px]">{count.toLocaleString()}+</b><br/>Lives<br/><span className="text-[10px] text-green-300 animate-pulse">● live</span></div><div className="bg-white border rounded-[20px] p-6 text-center"><b className="text-[30px]">156</b><br/>Wells</div><div className="bg-white border rounded-[20px] p-6 text-center"><b className="text-[30px]">12</b><br/>Schools</div><div className="bg-white border rounded-[20px] p-6 text-center"><b className="text-[30px]">4</b><br/>Clinics</div></div><div className="mt-10 bg-white border rounded-[20px] p-8"><h3 className="font-black">Breakdown – click for proof</h3><div className="mt-6 space-y-4">{[{l:"Water",v:78},{l:"Education",v:60},{l:"Health",v:70},{l:"Food",v:85}].map(x=><Link href="/transparency" key={x.l} className="block"><div className="flex justify-between text-[12px]"><span>{x.l}</span><b>{x.v}%</b></div><div className="h-2 bg-gray-100 rounded-full mt-1"><div className="h-2 bg-[#0f3440] rounded-full" style={{width:`${x.v}%`}}></div></div></Link>)}</div></div></section><Footer/></main>)
}
