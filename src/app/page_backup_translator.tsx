"use client"
import { useState, useEffect } from "react"

const T = {
en: {
banner: "🌐 Trusted by donors from 27 countries • Verified NGO •",
nav: ["About","Where We Work","Our Impact","Projects","Transparency"],
hero_title: "Bridging Continents,\nBuilding Hope",
hero_desc: "Your donation from Türkiye, Azerbaijan, Europe or anywhere delivers clean water, education and healthcare to communities across Africa. 100% transparent, Zakat-eligible.",
hero_sub: "From Türkiye & Azerbaijan to Africa — partnership, trust, sustainable development.",
donate_main: "Donate Now → Your $50 = 1 Month Water",
watch: "▶ Watch Impact (90s)",
trust1: "✓ 501(c)(3) • Dernek • QHT",
trust2: "✓ Audited Reports",
trust3: "✓ 12,400+ Lives Impacted",
give_title: "Give Hope Today",
live: "● LIVE • 23 donating now",
clean_water: "Clean Water Access",
water_sub: "78,000+ people • 156 wells",
education: "Education Program",
edu_sub: "3,000+ students • 12 schools",
health: "Healthcare Support",
health_sub: "15,000+ consultations • 4 clinics",
global_title: "Global Presence",
global_desc: "From Istanbul & Baku to 22 African nations",
our_story: "Our Story",
our_story_sub: "Bridging Cultures Since 2021",
story_text: "Founded in 2021, Afrika Yardım Vakfı was born from a simple idea: Turkish & Azerbaijani compassion can change Africa. We are not just a charity — we are a bridge. Every Euro, Dollar, Lira, Manat you give is tracked, filmed, and reported. 89% goes directly to field.",
impact_title: "2024 Impact • Real-Time",
projects_title: "Donor-Favorite Projects • Donate Directly",
uganda: "UGANDA • WATER",
uganda_title: "Clean Water Well",
uganda_desc: "$2,500 per well • 500 people",
niger: "NIGER • EDUCATION",
niger_title: "School Kit",
niger_desc: "$30 per child • 1 year",
somalia: "SOMALIA • HEALTH",
somalia_title: "Mobile Clinic",
somalia_desc: "$100 = 20 patients",
donate_btn: "Donate Now →",
footer_about: "Bridging Continents, Building Hope\nEst. 2021 • NGO No: 2021/047",
contact: "Headquarters",
transparency: "Transparency",
donate_secure: "Donate Securely"
},
tr: {
banner: "🌐 27 ülkeden bağışçıların güvendiği • Onaylı Dernek •",
nav: ["Hakkımızda","Nerede Çalışıyoruz","Etkimiz","Projeler","Şeffaflık"],
hero_title: "Kıtaları Birleştiriyoruz,\nUmut İnşa Ediyoruz",
hero_desc: "Türkiye, Azerbaycan, Avrupa veya dünyanın her yerinden yapacağınız bağış, Afrika'daki topluluklara temiz su, eğitim ve sağlık hizmeti ulaştırır. %100 şeffaf, zekat uygun.",
hero_sub: "Türkiye ve Azerbaycan'dan Afrika'ya — iş birliği, güven ve sürdürülebilir kalkınma.",
donate_main: "Bağış Yap → 50$ = 1 Ay Su",
watch: "▶ Etkimizi İzle (90sn)",
trust1: "✓ Onaylı Dernek",
trust2: "✓ Denetlenmiş Raporlar",
trust3: "✓ 12.400+ Hayata Dokunduk",
give_title: "Bugün Umut Ol",
live: "● CANLI • 23 kişi bağış yapıyor",
clean_water: "Temiz Su Erişimi",
water_sub: "78.000+ kişi • 156 kuyu",
education: "Eğitim Programı",
edu_sub: "3.000+ öğrenci • 12 okul",
health: "Sağlık Desteği",
health_sub: "15.000+ muayene • 4 klinik",
global_title: "Küresel Varlık",
global_desc: "İstanbul ve Bakü'den 22 Afrika ülkesine",
our_story: "Hikayemiz",
our_story_sub: "2021'den Beri Kültürleri Birleştiriyoruz",
story_text: "2021 yılında kurulan Afrika Yardım Vakfı, Türk ve Azerbaycan merhametinin Afrika'yı değiştirebileceği fikrinden doğdu. Biz sadece bir yardım kuruluşu değiliz — bir köprüyüz. Verdiğiniz her Euro, Dolar, Lira, Manat takip edilir, filme alınır ve raporlanır. %89 doğrudan sahaya gider.",
impact_title: "2024 Etki • Gerçek Zamanlı",
projects_title: "En Çok Bağış Alan Projeler",
uganda: "UGANDA • SU",
uganda_title: "Temiz Su Kuyusu",
uganda_desc: "Kuyu başı $2.500 • 500 kişi",
niger: "NİJER • EĞİTİM",
niger_title: "Okul Seti",
niger_desc: "Çocuk başı $30 • 1 yıl",
somalia: "SOMALİ • SAĞLIK",
somalia_title: "Mobil Klinik",
somalia_desc: "$100 = 20 hasta",
donate_btn: "Bağış Yap →",
footer_about: "Kıtaları Birleştiriyoruz, Umut İnşa Ediyoruz\nKur. 2021 • Dernek No: 2021/047",
contact: "Merkez Ofisler",
transparency: "Şeffaflık",
donate_secure: "Güvenli Bağış"
},
az: {
banner: "🌐 27 ölkədən donorların etibar etdiyi • Təsdiqlənmiş QHT •",
nav: ["Haqqımızda","Harada Çalışırıq","Təsirimiz","Layihələr","Şəffaflıq"],
hero_title: "Qitələri Birləşdiririk,\nÜmid Yaradırıq",
hero_desc: "Türkiyə, Azərbaycan, Avropa və ya dünyanın hər yerindən edəcəyiniz ianə Afrika icmalarına təmiz su, təhsil və səhiyyə çatdırır. 100% şəffaf, zəkat uyğun.",
hero_sub: "Türkiyə və Azərbaycandan Afrikaya — tərəfdaşlıq, etimad və davamlı inkişaf.",
donate_main: "İanə Et → $50 = 1 Ay Su",
watch: "▶ Təsirimizə Bax (90sn)",
trust1: "✓ Təsdiqlənmiş QHT",
trust2: "✓ Audit Olunmuş Hesabatlar",
trust3: "✓ 12.400+ Həyata Təsir",
give_title: "Bu Gün Ümid Ol",
live: "● CANLI • 23 nəfər ianə edir",
clean_water: "Təmiz Su Əlçatanlığı",
water_sub: "78.000+ insan • 156 quyu",
education: "Təhsil Proqramı",
edu_sub: "3.000+ şagird • 12 məktəb",
health: "Səhiyyə Dəstəyi",
health_sub: "15.000+ müayinə • 4 klinika",
global_title: "Qlobal Mövcudluq",
global_desc: "İstanbul və Bakıdan 22 Afrika ölkəsinə",
our_story: "Hekayəmiz",
our_story_sub: "2021-ci İldən Mədəniyyətləri Birləşdiririk",
story_text: "2021-ci ildə qurulan Afrika Yardım Vəqfi, Türk və Azərbaycan şəfqətinin Afrikanı dəyişə biləcəyi ideyasından yaranıb. Biz sadəcə xeyriyyə deyilik — körpüyük. Verdiyiniz hər Avro, Dollar, Lira, Manat izlənilir, çəkilir və hesabat verilir. 89% birbaşa sahəyə gedir.",
impact_title: "2024 Təsir • Real Vaxt",
projects_title: "Ən Çox İanə Alan Layihələr",
uganda: "UQANDA • SU",
uganda_title: "Təmiz Su Quyusu",
uganda_desc: "Quyusu $2.500 • 500 nəfər",
niger: "NİGER • TƏHSİL",
niger_title: "Məktəb Dəsti",
niger_desc: "Uşaq başı $30 • 1 il",
somalia: "SOMALİ • SƏHİYYƏ",
somalia_title: "Mobil Klinika",
somalia_desc: "$100 = 20 xəstə",
donate_btn: "İanə Et →",
footer_about: "Qitələri Birləşdiririk, Ümid Yaradırıq\nTəsis 2021 • QHT No: 2021/047",
contact: "Baş Ofislər",
transparency: "Şəffaflıq",
donate_secure: "Təhlükəsiz İanə"
},
ar: {
banner: "🌐 موثوق من متبرعين من 27 دولة • منظمة موثقة •",
nav: ["من نحن","أين نعمل","أثرنا","المشاريع","الشفافية"],
hero_title: "نربط القارات،\nنبني الأمل",
hero_desc: "تبرعك من تركيا وأذربيجان وأوروبا أو أي مكان يوصل الماء النظيف والتعليم والرعاية الصحية إلى المجتمعات في أفريقيا. شفافية 100% ومؤهل للزكاة.",
hero_sub: "من تركيا وأذربيجان إلى أفريقيا — شراكة وثقة وتنمية مستدامة.",
donate_main: "تبرع الآن → 50$ = شهر ماء",
watch: "▶ شاهد أثرنا (90ث)",
trust1: "✓ منظمة موثقة",
trust2: "✓ تقارير مدققة",
trust3: "✓ 12,400+ حياة تأثرت",
give_title: "امنح الأمل اليوم",
live: "● مباشر • 23 يتبرعون الآن",
clean_water: "الوصول للمياه النظيفة",
water_sub: "78,000+ شخص • 156 بئر",
education: "برنامج التعليم",
edu_sub: "3,000+ طالب • 12 مدرسة",
health: "الدعم الصحي",
health_sub: "15,000+ استشارة • 4 عيادات",
global_title: "الوجود العالمي",
global_desc: "من إسطنبول وباكو إلى 22 دولة أفريقية",
our_story: "قصتنا",
our_story_sub: "نربط الثقافات منذ 2021",
story_text: "تأسست مؤسسة أفريقيا الخيرية عام 2021 من فكرة بسيطة: الرحمة التركية والأذربيجانية يمكن أن تغير أفريقيا. نحن لسنا مجرد جمعية خيرية — نحن جسر. كل يورو ودولار وليرة ومانات تتبرع به يتم تتبعه وتصويره والإبلاغ عنه. 89% يذهب مباشرة للميدان.",
impact_title: "أثر 2024 • مباشر",
projects_title: "المشاريع المفضلة للمتبرعين",
uganda: "أوغندا • مياه",
uganda_title: "بئر مياه نظيفة",
uganda_desc: "$2,500 للبئر • 500 شخص",
niger: "النيجر • تعليم",
niger_title: "حقيبة مدرسية",
niger_desc: "$30 لكل طفل • سنة",
somalia: "الصومال • صحة",
somalia_title: "عيادة متنقلة",
somalia_desc: "$100 = 20 مريض",
donate_btn: "تبرع الآن →",
footer_about: "نربط القارات، نبني الأمل\nتأسيس 2021 • رقم المنظمة: 2021/047",
contact: "المقرات الرئيسية",
transparency: "الشفافية",
donate_secure: "تبرع آمن"
}
}

export default function Home(){
const [lang, setLang] = useState("en")
const [currency, setCurrency] = useState("USD")
const t = T[lang as keyof typeof T]
const isRTL = lang==="ar"

useEffect(()=>{
const saved = localStorage.getItem("africa-lang")
if(saved && T[saved as keyof typeof T]) setLang(saved)
},[])
useEffect(()=>{
localStorage.setItem("africa-lang", lang)
document.documentElement.dir = isRTL? "rtl" : "ltr"
},[lang,isRTL])

return(
<main className={`bg-[#FFFBF0] text-[#123e4a] ${isRTL? "font-[Amiri,serif]" : ""}`}>
<div className="bg-[#e8f4ff] text-[11px] text-center py-2 px-2 flex flex-wrap justify-center gap-2 items-center">
<span className="bg-green-600 text-white px-2 py-0.5 rounded-full text-[9px] font-black">✓ VERIFIED</span>
<span>{t.banner}</span>
<div className="flex gap-1 ml-2">
{["en","tr","az","ar"].map(l=>(
<button key={l} onClick={()=>setLang(l)} className={`px-2.5 py-1 rounded-full border text-[10px] font-black ${lang===l? "bg-[#0f3440] text-white border-[#0f3440]" : "bg-white border-gray-200"}`}>{l.toUpperCase()}</button>
))}
</div>
</div>

<header className="bg-[#0f3440] text-white px-4 md:px-8 py-3 flex justify-between items-center sticky top-0 z-50">
<div className="flex items-center gap-3">
<img src="/logo.png" alt="logo" className="w-16 h-16 md:w-[84px] md:h-[84px] rounded-full bg-white object-cover border-2 border-white shadow-xl -mb-6" onError={(e)=>{(e.target as HTMLImageElement).style.display="none"}} />
<div className="hidden md:block leading-3"><b className="text-[13px]">Afrika Yardım Vakfı</b><br/><span className="text-[10px] opacity-70">Africa Charity Foundation • 2021</span></div>
</div>
<nav className="hidden lg:flex gap-5 text-[13px] opacity-80">
{t.nav.map(n=><a key={n} className="hover:opacity-100 cursor-pointer">{n}</a>)}
</nav>
<div className="flex gap-2 items-center">
<div className="hidden md:flex bg-white/10 rounded-full p-1 text-[10px]"><button onClick={()=>setCurrency("USD")} className={`px-3 py-1 rounded-full ${currency==="USD"?"bg-white text-[#0f3440] font-black":""}`}>$ USD</button><button onClick={()=>setCurrency("EUR")} className={`px-3 py-1 rounded-full ${currency==="EUR"?"bg-white text-[#0f3440] font-black":""}`}>€ EUR</button><button onClick={()=>setCurrency("TRY")} className={`px-3 py-1 rounded-full ${currency==="TRY"?"bg-white text-[#0f3440] font-black":""}`}>₺ TRY</button></div>
<button className="bg-[#ffcc4d] text-[#0f3440] px-6 py-2.5 rounded-full text-[13px] font-black">{t.donate_btn}</button>
</div>
</header>

<section className="relative min-h-[78vh] bg-black text-white flex items-center">
<img src="/hero.jpg" alt="hero" className="absolute inset-0 w-full h-full object-cover opacity-80" onError={(e)=>{(e.target as HTMLImageElement).src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000"}} />
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
<div className="relative z-10 px-6 md:px-16 py-16 max-w-[1600px] w-full grid md:grid-cols-2 gap-10 items-center">
<div className={isRTL? "text-right" : ""}>
<div className="flex gap-2 mb-4 flex-wrap"><span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold">🇹🇷 Türkiye</span><span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold">🇦🇿 Azerbaijan</span><span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold">🇺🇬 Uganda</span><span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold">🌍 22</span></div>
<h1 className="text-[36px] md:text-[58px] font-black leading-[0.9] whitespace-pre-line">{t.hero_title}</h1>
<p className="mt-5 text-[14px] md:text-[16px] leading-7 max-w-xl opacity-90">{t.hero_desc}</p>
<p className="mt-3 text-[11px] opacity-60">{t.hero_sub}</p>
<div className="mt-8 flex flex-wrap gap-3">
<button className="bg-[#ffcc4d] text-[#0f3440] px-8 py-4 rounded-full font-black text-[15px] shadow-xl">{t.donate_main}</button>
<button className="bg-white/15 backdrop-blur border border-white/30 px-8 py-4 rounded-full font-bold text-[14px]">{t.watch}</button>
</div>
<div className="mt-6 flex gap-4 text-[11px] opacity-80 flex-wrap"><span>{t.trust1}</span><span>{t.trust2}</span><span>{t.trust3}</span></div>
</div>

<div className="bg-white text-[#123e4a] rounded-[24px] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] max-w-[420px] ml-auto w-full">
<div className="flex justify-between items-center"><h3 className="font-black text-[18px]">{t.give_title}</h3><span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">{t.live}</span></div>
<div className="mt-4 grid grid-cols-3 gap-2"><button className="border-2 border-[#123e4a] bg-[#123e4a] text-white rounded-full py-3 font-black">$25</button><button className="border rounded-full py-3 font-bold">$50</button><button className="border rounded-full py-3 font-bold">$100</button></div>
<div className="mt-4 space-y-2">
<button className="w-full bg-[#ffcc4d] rounded-full py-3 font-black text-[13px] flex justify-between px-5">💧 {t.clean_water} <span>85% →</span></button>
<button className="w-full border rounded-full py-3 font-bold text-[13px] flex justify-between px-5">📚 {t.education} <span>62%</span></button>
<button className="w-full border rounded-full py-3 font-bold text-[13px] flex justify-between px-5">🏥 {t.health} <span>70%</span></button>
</div>
<button className="mt-4 w-full bg-[#123e4a] text-white rounded-full py-4 font-black text-[15px]">{t.donate_btn} {currency}</button>
</div>
</div>
</section>

<section className="px-4 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1600px] mx-auto">
<div className="lg:col-span-3 bg-[#efe8d6] rounded-[20px] border p-6"><h2 className="text-[26px] font-black">{t.global_title}</h2><p className="text-[11px] mt-2 opacity-60">{t.global_desc}</p><div className="mt-5 bg-[#ddd8c5] rounded-[14px] border h-[170px] grid place-items-center text-[10px] text-center p-4">🗺️<br/>Türkiye • Azerbaijan • USA • UK • Germany • UAE • Uganda • Somalia • Niger • Kenya • Chad • Mali</div><div className="mt-5 grid grid-cols-3 gap-2 text-center"><div className="bg-white rounded-[12px] border p-3"><b>12,400+</b><br/><span className="text-[10px]">Lives</span></div><div className="bg-white rounded-[12px] border p-3"><b>45+</b><br/><span className="text-[10px]">Projects</span></div><div className="bg-white rounded-[12px] border p-3"><b>22</b><br/><span className="text-[10px]">Countries</span></div></div></div>
<div className="lg:col-span-4 bg-[#efe8d6] rounded-[20px] border p-7"><h2 className="text-[26px] font-black text-center">{t.our_story}</h2><p className="text-center text-[9px] opacity-50 uppercase tracking-widest mt-1">{t.our_story_sub}</p><div className="mt-5 text-[12.5px] leading-[1.7]">{t.story_text}</div><div className="mt-6 flex gap-2"><button className="flex-1 bg-[#0f3440] text-white py-2.5 rounded-full text-[11px] font-bold">→ Financials</button><button className="flex-1 bg-[#ffcc4d] py-2.5 rounded-full text-[11px] font-black">Join 8,400 Donors</button></div></div>
<div className="lg:col-span-5 bg-[#efe8d6] rounded-[20px] border p-5"><h3 className="font-black text-[14px]">{t.impact_title}</h3><div className="mt-4 space-y-3"><div className="bg-white rounded-[14px] border p-3.5 flex justify-between items-center"><div className="flex gap-3 items-center"><div className="w-10 h-10 bg-blue-50 rounded-full grid place-items-center">💧</div><div className="text-[11px]"><b>{t.clean_water}</b><br/><span className="opacity-60">{t.water_sub}</span></div></div><div className="bg-[#7fbf7a] text-white text-[11px] px-3 py-1 rounded-full font-black">78%</div></div><div className="bg-white rounded-[14px] border p-3.5 flex justify-between items-center"><div className="flex gap-3 items-center"><div className="w-10 h-10 bg-yellow-50 rounded-full grid place-items-center">📚</div><div className="text-[11px]"><b>{t.education}</b><br/><span className="opacity-60">{t.edu_sub}</span></div></div><div className="bg-[#4aa9c5] text-white text-[11px] px-3 py-1 rounded-full font-black">60%</div></div><div className="bg-white rounded-[14px] border p-3.5 flex justify-between items-center"><div className="flex gap-3 items-center"><div className="w-10 h-10 bg-green-50 rounded-full grid place-items-center">🏥</div><div className="text-[11px]"><b>{t.health}</b><br/><span className="opacity-60">{t.health_sub}</span></div></div><div className="bg-[#7fbf7a] text-white text-[11px] px-3 py-1 rounded-full font-black">70%</div></div></div><h3 className="mt-6 font-black text-[14px] text-center">{t.projects_title}</h3><div className="mt-4 grid grid-cols-3 gap-3"><div className="bg-white rounded-[14px] border overflow-hidden"><img src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?q=80&w=400" className="h-24 w-full object-cover"/><div className="p-2.5 text-[9px]"><b className="text-[8px]">{t.uganda}</b><br/><span className="text-[11px] font-black">{t.uganda_title}</span><br/><span className="opacity-60">{t.uganda_desc}</span><div className="mt-2 h-1.5 bg-gray-200 rounded-full"><div className="h-1.5 bg-[#0f3440] w-[85%] rounded-full"></div></div><button className="mt-2 w-full bg-[#0f3440] text-white rounded-full py-1.5 text-[10px] font-black">{t.donate_btn}</button></div></div><div className="bg-white rounded-[14px] border overflow-hidden"><img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400" className="h-24 w-full object-cover"/><div className="p-2.5 text-[9px]"><b className="text-[8px]">{t.niger}</b><br/><span className="text-[11px] font-black">{t.niger_title}</span><br/><span className="opacity-60">{t.niger_desc}</span><div className="mt-2 h-1.5 bg-gray-200 rounded-full"><div className="h-1.5 bg-[#4aa9c5] w-[62%] rounded-full"></div></div><button className="mt-2 w-full bg-[#0f3440] text-white rounded-full py-1.5 text-[10px] font-black">{t.donate_btn}</button></div></div><div className="bg-white rounded-[14px] border overflow-hidden"><img src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=400" className="h-24 w-full object-cover"/><div className="p-2.5 text-[9px]"><b className="text-[8px]">{t.somalia}</b><br/><span className="text-[11px] font-black">{t.somalia_title}</span><br/><span className="opacity-60">{t.somalia_desc}</span><div className="mt-2 h-1.5 bg-gray-200 rounded-full"><div className="h-1.5 bg-[#7fbf7a] w-[70%] rounded-full"></div></div><button className="mt-2 w-full bg-[#0f3440] text-white rounded-full py-1.5 text-[10px] font-black">{t.donate_btn}</button></div></div></div></div>
</section>

<footer className="bg-[#0f3440] text-white px-6 md:px-12 py-10">
<div className="max-w-[1600px] mx-auto grid md:grid-cols-4 gap-8 text-[11px]">
<div><img src="/logo.png" className="w-14 h-14 rounded-full bg-white mb-3" alt=""/><b>Afrika Yardım Vakfı</b><br/><span className="whitespace-pre-line">{t.footer_about}</span></div>
<div><b className="text-[#ffcc4d]">{t.contact}</b><br/>Istanbul: +90 212 XXX XX XX<br/>Baku: +994 12 XXX XX XX<br/>Kampala: +256 XXX XXX XXX<br/>info@afrikayardimvakfi.org</div>
<div><b className="text-[#ffcc4d]">{t.transparency}</b><br/>● Audited Financials<br/>● 89% Field • 11% Admin<br/>● Zakat Policy<br/>● Annual Report PDF</div>
<div><b className="text-[#ffcc4d]">{t.donate_secure}</b><br/>Visa • MasterCard • PayPal • Apple Pay<br/>Troy • BirKart • Crypto<br/>Bank: TRxx XXXX • AZxx XXXX<br/><button className="mt-3 bg-[#ffcc4d] text-[#0f3440] px-5 py-2 rounded-full font-black text-[12px]">{t.donate_btn}</button></div>
</div>
<div className="max-w-[1600px] mx-auto mt-8 pt-6 border-t border-white/10 flex justify-between text-[10px] opacity-50"><span>© 2024 Afrika Yardım Vakfı</span><span>EN • TR • AZ • AR • FR • DE</span></div>
</footer>
</main>
)
}
