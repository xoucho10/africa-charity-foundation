"use client"
import { useLanguage } from "./LanguageContext"
export default function LanguageTranslator(){
  const {lang,change}=useLanguage()
  const langs=[{k:"tr",f:"🇹🇷",n:"TR"},{k:"az",f:"🇦🇿",n:"AZ"},{k:"en",f:"🇬🇧",n:"EN"},{k:"ar",f:"🇸🇦",n:"AR"},{k:"fr",f:"🇫🇷",n:"FR"}]
  return (
    <div className="w-full bg-[#0a2430] border-b border-white/10 text-white py-2.5 px-3 md:px-8 flex justify-between items-center text-[11px] sticky top-0 z-[100]">
      <div className="flex items-center gap-2 opacity-70">🌐 <span>Choose Language / Dil Seçin</span></div>
      <div className="flex gap-1.5">
        {langs.map(l=>(
          <button key={l.k} onClick={()=>change(l.k)} className={`px-3 py-1.5 rounded-full border font-black transition ${lang===l.k?"bg-[#ffcc4d] text-[#0f3440] border-[#ffcc4d] scale-105":"bg-white/10 border-white/20 hover:bg-white/20"}`}>{l.f} {l.n}</button>
        ))}
      </div>
    </div>
  )
}
