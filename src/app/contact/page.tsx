"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
export default function Contact(){
 return(<main className="bg-[#FFFBF0] min-h-screen"><Navbar/><section className="max-w-[1000px] mx-auto px-6 py-16 grid md:grid-cols-2 gap-10"><div><h1 className="text-[40px] font-black">Contact</h1><div className="mt-6 space-y-3 text-[13px]"><div className="bg-white border rounded-xl p-4"><b>🇹🇷 Istanbul</b><br/>+90 212 XXX<br/>info@afrikayardimvakfi.org</div><div className="bg-white border rounded-xl p-4"><b>🇦🇿 Baku</b><br/>+994 12 XXX</div><div className="bg-white border rounded-xl p-4"><b>🇺🇬 Kampala 24/7 WhatsApp</b><br/>+256 7XX XXX</div></div></div><div className="bg-white border rounded-[20px] p-7"><input placeholder="Name" className="w-full border rounded-full px-5 py-3 text-[12px]"/><input placeholder="Email" className="mt-3 w-full border rounded-full px-5 py-3 text-[12px]"/><textarea placeholder="Message" className="mt-3 w-full border rounded-[16px] px-5 py-3 text-[12px] h-32"></textarea><button className="mt-4 w-full bg-[#0f3440] text-white py-3 rounded-full font-black">Send → Reply in 2h</button></div></section><Footer/></main>)
}
