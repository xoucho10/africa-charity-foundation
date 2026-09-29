"use client"
import { useState, useEffect } from "react"

const T:any = {
en: {
banner:"🌐 Trusted by donors from 27 countries • Verified NGO • 89% goes to field",
nav:["About","Where We Work","Our Impact","Projects","Sponsors","Transparency"],
hero_title:"Bridging Continents,\nBuilding Hope",
hero_desc:"Your donation from Türkiye, Azerbaijan, Europe or anywhere delivers clean water, education and healthcare to communities across Africa. 100% transparent, Zakat-eligible.",
hero_sub:"From Türkiye & Azerbaijan to Africa — partnership, trust, sustainable development.",
donate_main:"Donate Now → Your $50 = 1 Month Water",
watch:"▶ Watch Impact (90s)",
give_title:"Give Hope Today", live:"● LIVE • 23 donating now",
water:"Clean Water Access", water_sub:"78,000+ people • 156 wells",
edu:"Education Program", edu_sub:"3,000+ students • 12 schools",
health:"Healthcare Support", health_sub:"15,000+ consultations • 4 clinics",
global_title:"Global Presence", global_desc:"From Istanbul & Baku to 22 African nations",
story_title:"Our Story", story_sub:"BRIDGING CULTURES SINCE 2021",
story_text:"Founded in 2021, Afrika Yardım Vakfı was born from a simple idea: Turkish & Azerbaijani compassion can change Africa. We are not just a charity — we are a bridge. Every Euro, Dollar, Lira, Manat you give is tracked, filmed, and reported. 89% goes directly to field.",
impact:"2024 Impact • Real-Time", projects:"Donor-Favorite Projects",
donate_btn:"Donate Now →",
urgent_badge:"● URGENT", urgent_sub:"Campaigns needing immediate support", urgent_title:"Urgent Appeals",
view_all:"View All 45 Projects →",
ramadan_title:"Ramadan Food Parcels for 1000 Families", ramadan_desc:"Each $40 feeds a family of 6 for entire month. Zakat eligible, video proof.",
orphan_title:"Orphan Sponsorship – Monthly Support", orphan_desc:"$35/month gives orphan child education, food, health, home. Monthly updates.",
well_title:"Deep Water Well – 800 People", well_desc:"Permanent solution. Solar powered. Name plate with donor name. 25 years.",
how_title:"How Your Donation Becomes Hope • 100% Tracked", how_sub:"We built trust for international donors. No black box.",
step1_t:"You Donate Securely (2 mins)", step1_d:"Card, PayPal, Bank, Crypto, Troy, BirKart – receipt instantly.",
step2_t:"We Deploy in 72 Hours", step2_d:"Local team in Kampala / Niamey / Mogadishu starts project. WhatsApp update.",
step3_t:"You Get Proof – Photos & GPS", step3_d:"Drone footage, beneficiary interviews, GPS coordinates, name plate.",
step4_t:"Impact Report + Tax Receipt", step4_d:"Annual audited report, dashboard login, deductible receipt for TR, EU, US, AZ.",
proof_title:"Live Proof Feed • Last 24 Hours",
// NEW SPONSOR FIELDS
sponsor_why_title:"Why Corporates & Major Donors Sponsor Us",
sponsor_why_sub:"More than charity – it is CSR, ESG, brand visibility across 3 continents",
benefit1_t:"Brand on Every Well & School", benefit1_d:"Your logo on plaque, opening video with 10k+ views, press coverage TR/AZ/Africa",
benefit2_t:"100% Tax Deductible", benefit2_d:"Türkiye (Dernek makbuzu), Azerbaijan, UK Gift Aid +25%, US 501c3, EU deductible",
benefit3_t:"Real-Time Dashboard", benefit3_d:"Login to see your impact live: GPS, photos, videos, beneficiary data",
benefit4_t:"Zakat & Sadaqah Certified", benefit4_d:"Fatwa approved, Shariah compliant, monthly Zakat distribution report",
tiers_title:"Corporate Sponsorship Tiers",
tiers_sub:"Join 47 companies already sponsoring • From local SME to international corp",
bronze:"Bronze • $1k-$5k", bronze_p:"1 water well or 30 orphans school kits • Social media mention • Certificate",
silver:"Silver • $5k-$15k", silver_p:"3 wells or 1 classroom • Logo on site + video • Quarterly report • Press release",
gold:"Gold • $15k-$50k", gold_p:"Full school or clinic wing • Name on building • Delegation visit to Africa • TRT/AZTV feature",
platinum:"Platinum • $50k+", platinum_p:"Village complex (water+school+clinic+mosque) • Naming rights • Board invitation • Annual gala",
partners_title:"Trusted By 47+ Partners & Sponsors",
donor_wall_title:"Live Donor & Sponsor Wall",
donor_wall_sub:"Transparency builds trust – every donation public (optional anonymous)",
zakat_title:"Zakat Calculator & Corporate Giving",
zakat_desc:"Calculate your Zakat in 30 seconds – 100% goes to eligible categories with video proof",
calc_btn:"Calculate Zakat →",
csr_title:"CSR & ESG Report Ready for Your Company",
csr_desc:"We provide ESG documentation, photos, impact metrics for your annual sustainability report"
},
tr: {
banner:"🌐 27 ülkeden bağışçıların güvendiği • Onaylı Dernek • %89 sahaya gider",
nav:["Hakkımızda","Nerede Çalışıyoruz","Etkimiz","Projeler","Sponsorlar","Şeffaflık"],
hero_title:"Kıtaları Birleştiriyoruz,\nUmut İnşa Ediyoruz",
hero_desc:"Türkiye, Azerbaycan, Avrupa veya dünyanın her yerinden bağışınız Afrika'ya temiz su, eğitim ve sağlık ulaştırır. %100 şeffaf, zekat uygun.",
hero_sub:"Türkiye ve Azerbaycan'dan Afrika'ya — iş birliği, güven ve kalkınma.",
donate_main:"Bağış Yap → 50$ = 1 Ay Su",
watch:"▶ Etkimizi İzle",
give_title:"Bugün Umut Ol", live:"● CANLI • 23 kişi bağış yapıyor",
water:"Temiz Su Erişimi", water_sub:"78.000+ kişi • 156 kuyu",
edu:"Eğitim Programı", edu_sub:"3.000+ öğrenci • 12 okul",
health:"Sağlık Desteği", health_sub:"15.000+ muayene • 4 klinik",
global_title:"Küresel Varlık", global_desc:"İstanbul ve Bakü'den 22 Afrika ülkesine",
story_title:"Hikayemiz", story_sub:"2021'DEN BERİ KÜLTÜRLERİ BİRLEŞTİRİYORUZ",
story_text:"2021 yılında kurulan vakfımız, Türk ve Azerbaycan merhametinin Afrika'yı değiştirebileceği fikrinden doğdu. Biz sadece bir yardım kuruluşu değiliz — bir köprüyüz. Her bağış takip edilir, filme alınır ve raporlanır. %89 doğrudan sahaya gider.",
impact:"2024 Etki • Gerçek Zamanlı", projects:"Bağışçıların Favori Projeleri",
donate_btn:"Bağış Yap →",
urgent_badge:"● ACİL", urgent_sub:"Acil destek gerektiren kampanyalar", urgent_title:"Acil Çağrılar",
view_all:"Tüm 45 Projeyi Gör →",
ramadan_title:"1000 Aileye Ramazan Gıda Kolisi", ramadan_desc:"Her 40$ 6 kişilik aileyi 1 ay doyurur. Zekat uygun, video kanıtlı.",
orphan_title:"Yetim Sponsorluğu – Aylık Destek", orphan_desc:"Aylık 35$ yetim çocuğa eğitim, gıda, sağlık, ev sağlar.",
well_title:"Derin Su Kuyusu – 800 Kişi", well_desc:"Kalıcı çözüm. Güneş enerjili. İsim plakası. 25 yıl ömür.",
how_title:"Bağışınız Nasıl Umuda Dönüşüyor • %100 Takip", how_sub:"Uluslararası bağışçılar için güven inşa ettik.",
step1_t:"Güvenle Bağış Yap (2 dk)", step1_d:"Kart, PayPal, Banka, Kripto – anında makbuz.",
step2_t:"72 Saatte Sahada", step2_d:"Kampala / Niamey / Mogadişu ekibi başlar.",
step3_t:"Kanıt Al – Foto & GPS", step3_d:"Drone görüntüleri, röportajlar, GPS, isim plakan.",
step4_t:"Etki Raporu + Vergi Makbuzu", step4_d:"Yıllık denetlenmiş rapor, panel girişi.",
proof_title:"Canlı Kanıt Akışı • Son 24 Saat",
sponsor_why_title:"Neden Şirketler Bize Sponsor Oluyor",
sponsor_why_sub:"Sadece yardım değil – CSR, ESG, 3 kıtada marka görünürlüğü",
benefit1_t:"Her Kuyu & Okulda Markanız", benefit1_d:"Plakada logonuz, 10bin+ izlenen açılış videosu, basın kapsama",
benefit2_t:"%100 Vergi İndirimli", benefit2_d:"Türkiye, Azerbaycan, UK Gift Aid +%25, US 501c3",
benefit3_t:"Canlı Panel", benefit3_d:"Etkinizi canlı gör: GPS, fotoğraflar, videolar",
benefit4_t:"Zekat ve Sadaka Sertifikalı", benefit4_d:"Fetva onaylı, Şeriata uygun, aylık Zekat raporu",
tiers_title:"Kurumsal Sponsorluk Seviyeleri",
tiers_sub:"47 şirket zaten sponsor • KOBİ'den uluslararası şirkete",
bronze:"Bronz • $1k-$5k", bronze_p:"1 su kuyusu veya 30 yetim okul seti • Sosyal medya • Sertifika",
silver:"Gümüş • $5k-$15k", silver_p:"3 kuyu veya 1 sınıf • Sitede logo + video • Çeyrek rapor",
gold:"Altın • $15k-$50k", gold_p:"Tam okul veya klinik kanadı • Binada isim • Afrika ziyareti",
platinum:"Platin • $50k+", platinum_p:"Köy kompleksi (su+okul+klinik+cami) • İsim hakkı • Yönetim daveti",
partners_title:"47+ Ortak ve Sponsora Güvenilir",
donor_wall_title:"Canlı Bağışçı ve Sponsor Duvarı",
donor_wall_sub:"Şeffaflık güven oluşturur – her bağış açık (isteğe bağlı anonim)",
zakat_title:"Zekat Hesaplama ve Kurumsal Bağış",
zakat_desc:"Zekatınızı 30 saniyede hesaplayın – %100 uygun kategorilere video kanıtlı",
calc_btn:"Zekat Hesapla →",
csr_title:"Şirketiniz İçin CSR ve ESG Raporu Hazır",
csr_desc:"Yıllık sürdürülebilirlik raporunuz için ESG belgeleri, fotoğraflar, etki metrikleri sağlıyoruz"
},
az: {
banner:"🌐 27 ölkədən donorların etibarı • Təsdiqlənmiş QHT • 89% sahəyə gedir",
nav:["Haqqımızda","Harada Çalışırıq","Təsirimiz","Layihələr","Sponsorlar","Şəffaflıq"],
hero_title:"Qitələri Birləşdiririk,\nÜmid Yaradırıq",
hero_desc:"Türkiyə, Azərbaycan, Avropa və ya dünyanın hər yerindən ianəniz Afrikaya təmiz su, təhsil və səhiyyə çatdırır. 100% şəffaf.",
hero_sub:"Türkiyə və Azərbaycandan Afrikaya — tərəfdaşlıq və etimad.",
donate_main:"İanə Et → $50 = 1 Ay Su",
watch:"▶ Təsirimizə Bax",
give_title:"Bu Gün Ümid Ol", live:"● CANLI • 23 nəfər ianə edir",
water:"Təmiz Su", water_sub:"78.000+ insan • 156 quyu",
edu:"Təhsil Proqramı", edu_sub:"3.000+ şagird • 12 məktəb",
health:"Səhiyyə Dəstəyi", health_sub:"15.000+ müayinə • 4 klinika",
global_title:"Qlobal Mövcudluq", global_desc:"İstanbul və Bakıdan 22 Afrika ölkəsinə",
story_title:"Hekayəmiz", story_sub:"2021-Cİ İLDƏN MƏDƏNİYYƏTLƏRİ BİRLƏŞDİRİRİK",
story_text:"2021-ci ildə qurulan vəqfimiz Türk və Azərbaycan şəfqətinin Afrikanı dəyişə biləcəyi ideyasından yarandı. Biz körpüyük. Hər ianə izlənilir. 89% sahəyə gedir.",
impact:"2024 Təsir • Real Vaxt", projects:"Donorların Sevimli Layihələri",
donate_btn:"İanə Et →",
urgent_badge:"● TƏCİLİ", urgent_sub:"Təcili dəstəyə ehtiyac", urgent_title:"Təcili Çağırışlar",
view_all:"Bütün 45 Layihəyə Bax →",
ramadan_title:"1000 Ailəyə Ramazan Ərzaq", ramadan_desc:"Hər $40 6 nəfərlik ailəni 1 ay doyurur.",
orphan_title:"Yetim Sponsorluğu", orphan_desc:"Aylıq $35 yetim uşağa təhsil, yemək, ev.",
well_title:"Dərin Su Quyusu – 800 Nəfər", well_desc:"Daimi həll. Günəş enerjili. Ad lövhəsi.",
how_title:"İanəniz Necə Ümidə Çevrilir • 100% İzlənir", how_sub:"Beynəlxalq donorlar üçün etibar.",
step1_t:"Təhlükəsiz İanə Et", step1_d:"Kart, PayPal, Bank, Kripto – dərhal qəbz.",
step2_t:"72 Saatda Sahədə", step2_d:"Kampala / Niamey / Moqadişu komandası başlayır.",
step3_t:"Sübut Al – Foto & GPS", step3_d:"Drone, müsahibələr, GPS, ad lövhəsi.",
step4_t:"Təsir Hesabatı + Vergi Qəbzi", step4_d:"İllik hesabat, panel girişi.",
proof_title:"Canlı Sübut Axını • Son 24 Saat",
sponsor_why_title:"Niyə Şirkətlər Bizə Sponsor Olur",
sponsor_why_sub:"Sadəcə xeyriyyə deyil – CSR, ESG, 3 qitədə brend görünürlüğü",
benefit1_t:"Hər Quyu və Məktəbdə Brendiniz", benefit1_d:"Lövhədə loqonuz, 10min+ baxışlı açılış videosu",
benefit2_t:"100% Vergi Endirimli", benefit2_d:"Azərbaycan, Türkiyə, UK Gift Aid +25%, US 501c3",
benefit3_t:"Canlı Panel", benefit3_d:"Təsirinizi canlı görün: GPS, foto, video",
benefit4_t:"Zəkat və Sədəqə Sertifikatlı", benefit4_d:"Fətva təsdiqli, Şəriətə uyğun",
tiers_title:"Korporativ Sponsorluq Səviyyələri",
tiers_sub:"47 şirkət artıq sponsor",
bronze:"Bürünc • $1k-$5k", bronze_p:"1 su quyusu və ya 30 yetim dəsti • Sosial media",
silver:"Gümüş • $5k-$15k", silver_p:"3 quyu və ya 1 sinif • Saytda logo + video",
gold:"Qızıl • $15k-$50k", gold_p:"Tam məktəb və ya klinika qanadı • Binada ad",
platinum:"Platin • $50k+", platinum_p:"Kənd kompleksi (su+məktəb+klinika+məscid) • Ad hüqu",
partners_title:"47+ Tərəfdaş və Sponsora Etibarlı",
donor_wall_title:"Canlı Donor və Sponsor Divarı",
donor_wall_sub:"Şəffaflıq etibar yaradır – hər ianə açıq",
zakat_title:"Zəkat Kalkulyatoru və Korporativ İanə",
zakat_desc:"Zəkatınızı 30 saniyədə hesablayın – 100% uyğun kateqoriyalara",
calc_btn:"Zəkat Hesabla →",
csr_title:"Şirkətiniz Üçün CSR və ESG Hesabatı Hazır",
csr_desc:"İllik dayanıqlılıq hesabatınız üçün ESG sənədləri, foto, metrikalar"
},
ar: {
banner:"🌐 موثوق من 27 دولة • منظمة موثقة • 89% للميدان",
nav:["من نحن","أين نعمل","أثرنا","المشاريع","الرعاة","الشفافية"],
hero_title:"نربط القارات،\nنبني الأمل",
hero_desc:"تبرعك من تركيا وأذربيجان وأوروبا يوصل الماء والتعليم والصحة إلى أفريقيا. شفافية 100%.",
hero_sub:"من تركيا وأذربيجان إلى أفريقيا — شراكة وثقة.",
donate_main:"تبرع الآن → 50$ = شهر ماء",
watch:"▶ شاهد أثرنا",
give_title:"امنح الأمل اليوم", live:"● مباشر • 23 يتبرعون",
water:"المياه النظيفة", water_sub:"78,000+ شخص • 156 بئر",
edu:"برنامج التعليم", edu_sub:"3,000+ طالب • 12 مدرسة",
health:"الدعم الصحي", health_sub:"15,000+ استشارة • 4 عيادات",
global_title:"الوجود العالمي", global_desc:"من إسطنبول وباكو إلى 22 دولة",
story_title:"قصتنا", story_sub:"نربط الثقافات منذ 2021",
story_text:"تأسست مؤسستنا عام 2021 من فكرة: الرحمة التركية والأذربيجانية تغير أفريقيا. نحن جسر. كل تبرع يتم تتبعه. 89% للميدان.",
impact:"أثر 2024 • مباشر", projects:"المشاريع المفضلة",
donate_btn:"تبرع الآن →",
urgent_badge:"● عاجل", urgent_sub:"حملات تحتاج دعم فوري", urgent_title:"نداءات عاجلة",
view_all:"عرض كل 45 مشروع →",
ramadan_title:"طرود رمضان لـ 1000 أسرة", ramadan_desc:"كل 40$ يطعم أسرة 6 أشخاص لشهر. مؤهل للزكاة.",
orphan_title:"كفالة يتيم – دعم شهري", orphan_desc:"35$ شهريا يمنح اليتيم تعليم وغذاء وصحة.",
well_title:"بئر عميق – 800 شخص", well_desc:"حل دائم. طاقة شمسية. لوحة باسم المتبرع. 25 سنة.",
how_title:"كيف يصبح تبرعك أملاً • 100% متتبع", how_sub:"بنينا الثقة للمتبرعين الدوليين.",
step1_t:"تبرع بأمان", step1_d:"بطاقة، PayPal، بنك، كريبتو – إيصال فوري.",
step2_t:"ننطلق خلال 72 ساعة", step2_d:"فريقنا المحلي يبدأ. تحديث واتساب.",
step3_t:"تحصل على إثبات", step3_d:"لقطات درون، مقابلات، إحداثيات، لوحة باسمك.",
step4_t:"تقرير الأثر + إيصال ضريبي", step4_d:"تقرير سنوي مدقق.",
proof_title:"بث الإثبات المباشر • آخر 24 ساعة",
sponsor_why_title:"لماذا ترعانا الشركات والمتبرعون الكبار",
sponsor_why_sub:"أكثر من خيرية – مسؤولية اجتماعية ورؤية عبر 3 قارات",
benefit1_t:"علامتك على كل بئر ومدرسة", benefit1_d:"شعارك على اللوحة، فيديو افتتاح 10k+ مشاهدة",
benefit2_t:"خصم ضريبي 100%", benefit2_d:"تركيا، أذربيجان، UK Gift Aid +25%، US 501c3",
benefit3_t:"لوحة تحكم مباشرة", benefit3_d:"شاهد أثرك مباشر: GPS، صور، فيديو",
benefit4_t:"معتمد زكاة وصدقة", benefit4_d:"فتوى معتمدة، متوافق مع الشريعة",
tiers_title:"مستويات الرعاية المؤسسية",
tiers_sub:"انضم إلى 47 شركة ترعى بالفعل",
bronze:"برونزي • $1k-$5k", bronze_p:"1 بئر أو 30 حقيبة مدرسية • ذكر في السوشيال • شهادة",
silver:"فضي • $5k-$15k", silver_p:"3 آبار أو فصل • شعار على الموقع + فيديو",
gold:"ذهبي • $15k-$50k", gold_p:"مدرسة كاملة أو جناح عيادة • اسم على المبنى • زيارة لأفريقيا",
platinum:"بلاتيني • $50k+", platinum_p:"مجمع قرية (ماء+مدرسة+عيادة+مسجد) • حقوق تسمية",
partners_title:"موثوق من 47+ شريك وراع",
donor_wall_title:"جدار المتبرعين والرعاة المباشر",
donor_wall_sub:"الشفافية تبني الثقة – كل تبرع علني",
zakat_title:"حاسبة الزكاة والعطاء المؤسسي",
zakat_desc:"احسب زكاتك في 30 ثانية – 100% للفئات المستحقة مع إثبات فيديو",
calc_btn:"احسب الزكاة →",
csr_title:"تقرير المسؤولية الاجتماعية جاهز لشركتك",
csr_desc:"نوفر وثائق ESG وصور ومقاييس الأثر لتقرير الاستدامة السنوي"
}
}

export default function Home(){
const [lang,setLang]=useState("en")
const [currency,setCurrency]=useState("USD")
const t:any = T[lang]
const isRTL = lang==="ar"
useEffect(()=>{const s=localStorage.getItem("africa-lang"); if(s&&T[s]) setLang(s)},[])
useEffect(()=>{localStorage.setItem("africa-lang",lang); document.documentElement.dir=isRTL?"rtl":"ltr"},[lang,isRTL])

return(
<main className="bg-[#FFFBF0] text-[#123e4a]">
<div className="bg-[#e8f4ff] text-[11px] text-center py-2 px-2 flex flex-wrap justify-center gap-2 items-center">
<span className="bg-green-600 text-white px-2 py-0.5 rounded-full text-[9px] font-black">✓ VERIFIED NGO</span>
<span>{t.banner}</span>
<div className="flex gap-1 ml-2">
{["en","tr","az","ar"].map(l=>(
<button key={l} onClick={()=>setLang(l)} className={`px-2.5 py-1 rounded-full border text-[10px] font-black ${lang===l?"bg-[#0f3440] text-white border-[#0f3440]":"bg-white"}`}>{l.toUpperCase()}</button>
))}
</div>
</div>

<header className="bg-[#0f3440] text-white px-4 md:px-8 py-3 flex justify-between items-center sticky top-0 z-50">
<div className="flex items-center gap-3"><img src="/logo.png" className="w-16 h-16 md:w-[84px] md:h-[84px] rounded-full bg-white object-cover border-2 border-white shadow-xl -mb-6" alt="logo"/><div className="hidden md:block leading-3"><b className="text-[13px]">Afrika Yardım Vakfı</b><br/><span className="text-[10px] opacity-70">Africa Charity • 2021</span></div></div>
<nav className="hidden lg:flex gap-5 text-[12px] opacity-80">{t.nav.map((n:string)=><a key={n} className="cursor-pointer hover:opacity-100">{n}</a>)}</nav>
<div className="flex gap-2 items-center">
<div className="hidden md:flex bg-white/10 rounded-full p-1 text-[10px]"><button onClick={()=>setCurrency("USD")} className={`px-3 py-1 rounded-full ${currency==="USD"?"bg-white text-[#0f3440] font-black":""}`}>$ USD</button><button onClick={()=>setCurrency("TRY")} className={`px-3 py-1 rounded-full ${currency==="TRY"?"bg-white text-[#0f3440] font-black":""}`}>₺ TRY</button><button onClick={()=>setCurrency("AZN")} className={`px-3 py-1 rounded-full ${currency==="AZN"?"bg-white text-[#0f3440] font-black":""}`}>₼ AZN</button></div>
<button className="bg-[#ffcc4d] text-[#0f3440] px-6 py-2.5 rounded-full text-[13px] font-black">{t.donate_btn}</button>
</div>
</header>

<section className="relative min-h-[78vh] bg-black text-white flex items-center">
<img src="/hero.jpg" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="hero" onError={(e)=>{(e.target as HTMLImageElement).src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000"}}/>
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"/>
<div className="relative z-10 px-6 md:px-16 py-16 max-w-[1600px] w-full grid md:grid-cols-2 gap-10 items-center">
<div className={isRTL?"text-right":""}>
<h1 className="text-[36px] md:text-[58px] font-black leading-[0.9] whitespace-pre-line">{t.hero_title}</h1>
<p className="mt-5 text-[15px] leading-7 max-w-xl opacity-90">{t.hero_desc}</p>
<div className="mt-8 flex flex-wrap gap-3"><button className="bg-[#ffcc4d] text-[#0f3440] px-8 py-4 rounded-full font-black text-[15px] shadow-xl">{t.donate_main}</button><button className="bg-white/15 backdrop-blur border border-white/30 px-8 py-4 rounded-full font-bold text-[14px]">{t.watch}</button></div>
</div>
<div className="bg-white text-[#123e4a] rounded-[24px] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] max-w-[420px] ml-auto w-full">
<div className="flex justify-between items-center"><h3 className="font-black text-[18px]">{t.give_title}</h3><span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">{t.live}</span></div>
<div className="mt-4 grid grid-cols-3 gap-2"><button className="border-2 border-[#123e4a] bg-[#123e4a] text-white rounded-full py-3 font-black">$25</button><button className="border rounded-full py-3 font-bold">$50</button><button className="border rounded-full py-3 font-bold">$100</button></div>
<div className="mt-4 space-y-2"><button className="w-full bg-[#ffcc4d] rounded-full py-3 font-black text-[13px] flex justify-between px-5">💧 {t.water} <span>85% →</span></button><button className="w-full border rounded-full py-3 font-bold text-[13px] flex justify-between px-5">📚 {t.edu} <span>62%</span></button><button className="w-full border rounded-full py-3 font-bold text-[13px] flex justify-between px-5">🏥 {t.health} <span>70%</span></button></div>
<button className="mt-4 w-full bg-[#123e4a] text-white rounded-full py-4 font-black text-[15px]">{t.donate_btn} {currency}</button>
</div>
</div>
</section>

{/* KEEP EXISTING 3 COLUMNS FROM YOUR SCREENSHOT */}
<section className="px-4 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1600px] mx-auto">
<div className="lg:col-span-3 bg-[#efe8d6] rounded-[20px] border p-6"><h2 className="text-[26px] font-black">{t.global_title}</h2><p className="text-[11px] mt-2 opacity-60">{t.global_desc}</p><div className="mt-5 bg-[#ddd8c5] rounded-[14px] border h-[170px] grid place-items-center text-[10px] text-center p-4">🗺️ Türkiye • Azerbaijan • USA • UK • Uganda • Somalia • Niger</div><div className="mt-5 grid grid-cols-3 gap-2 text-center"><div className="bg-white rounded-[12px] border p-3"><b>12,400+</b><br/><span className="text-[10px]">Lives</span></div><div className="bg-white rounded-[12px] border p-3"><b>45+</b><br/><span className="text-[10px]">Projects</span></div><div className="bg-white rounded-[12px] border p-3"><b>22</b><br/><span className="text-[10px]">Countries</span></div></div></div>
<div className="lg:col-span-4 bg-[#efe8d6] rounded-[20px] border p-7"><h2 className="text-[26px] font-black text-center">{t.story_title}</h2><p className="text-center text-[9px] opacity-50 uppercase tracking-widest mt-1">{t.story_sub}</p><div className="mt-5 text-[12.5px] leading-[1.7]">{t.story_text}</div></div>
<div className="lg:col-span-5 bg-[#efe8d6] rounded-[20px] border p-5"><h3 className="font-black text-[14px]">{t.impact}</h3><div className="mt-4 space-y-3"><div className="bg-white rounded-[14px] border p-3.5 flex justify-between items-center"><div className="flex gap-3 items-center"><div className="w-10 h-10 bg-blue-50 rounded-full grid place-items-center">💧</div><div className="text-[11px]"><b>{t.water}</b><br/><span className="opacity-60">{t.water_sub}</span></div></div><div className="bg-[#7fbf7a] text-white text-[11px] px-3 py-1 rounded-full font-black">78%</div></div><div className="bg-white rounded-[14px] border p-3.5 flex justify-between items-center"><div className="flex gap-3 items-center"><div className="w-10 h-10 bg-yellow-50 rounded-full grid place-items-center">📚</div><div className="text-[11px]"><b>{t.edu}</b><br/><span className="opacity-60">{t.edu_sub}</span></div></div><div className="bg-[#4aa9c5] text-white text-[11px] px-3 py-1 rounded-full font-black">60%</div></div><div className="bg-white rounded-[14px] border p-3.5 flex justify-between items-center"><div className="flex gap-3 items-center"><div className="w-10 h-10 bg-green-50 rounded-full grid place-items-center">🏥</div><div className="text-[11px]"><b>{t.health}</b><br/><span className="opacity-60">{t.health_sub}</span></div></div><div className="bg-[#7fbf7a] text-white text-[11px] px-3 py-1 rounded-full font-black">70%</div></div></div><h3 className="mt-6 font-black text-[14px] text-center">{t.projects}</h3><div className="mt-4 grid grid-cols-3 gap-3"><div className="bg-white rounded-[14px] border overflow-hidden"><img src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?q=80&w=400" className="h-24 w-full object-cover"/><div className="p-2.5 text-[9px]"><b className="text-[8px]">UGANDA • Water Well</b><br/><button className="mt-2 w-full bg-[#0f3440] text-white rounded-full py-1.5 text-[10px] font-black">{t.donate_btn}</button></div></div><div className="bg-white rounded-[14px] border overflow-hidden"><img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400" className="h-24 w-full object-cover"/><div className="p-2.5 text-[9px]"><b className="text-[8px]">NIGER • School</b><br/><button className="mt-2 w-full bg-[#0f3440] text-white rounded-full py-1.5 text-[10px] font-black">{t.donate_btn}</button></div></div><div className="bg-white rounded-[14px] border overflow-hidden"><img src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=400" className="h-24 w-full object-cover"/><div className="p-2.5 text-[9px]"><b className="text-[8px]">SOMALIA • Clinic</b><br/><button className="mt-2 w-full bg-[#0f3440] text-white rounded-full py-1.5 text-[10px] font-black">{t.donate_btn}</button></div></div></div></div>
</section>

{/* KEEP URGENT APPEALS FROM YOUR SCREENSHOT */}
<section className="px-4 md:px-12 py-10 max-w-[1600px] mx-auto">
<div className="flex justify-between items-end mb-6"><div><div className="flex items-center gap-2"><span className="bg-red-600 text-white text-[10px] px-2 py-1 rounded-full animate-pulse font-black">{t.urgent_badge}</span><span className="text-[11px] font-bold opacity-60">{t.urgent_sub}</span></div><h2 className="text-[28px] md:text-[36px] font-black mt-2">{t.urgent_title}</h2></div><button className="hidden md:block border rounded-full px-6 py-2 text-[12px] font-bold">{t.view_all}</button></div>
<div className="grid md:grid-cols-3 gap-5">
<div className="bg-white rounded-[20px] border-2 border-red-200 overflow-hidden shadow-lg"><div className="relative"><img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600" className="h-48 w-full object-cover"/><div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] px-3 py-1 rounded-full font-black">🔥 MOST URGENT</div></div><div className="p-5"><h3 className="font-black text-[16px]">{t.ramadan_title}</h3><p className="text-[12px] opacity-60 mt-2">{t.ramadan_desc}</p><div className="mt-4"><div className="flex justify-between text-[11px] mb-1"><span>78% funded</span><span className="font-black">$5,400 left</span></div><div className="h-2 bg-gray-100 rounded-full"><div className="h-2 bg-red-500 w-[78%] rounded-full"></div></div></div><button className="mt-4 w-full bg-[#0f3440] text-white rounded-full py-3 font-black text-[13px]">{t.donate_btn} $40</button></div></div>
<div className="bg-white rounded-[20px] border overflow-hidden shadow"><div className="relative"><img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=600" className="h-48 w-full object-cover"/><div className="absolute top-3 left-3 bg-[#ffcc4d] text-[#0f3440] text-[10px] px-3 py-1 rounded-full font-black">⚡ TRENDING</div></div><div className="p-5"><h3 className="font-black text-[16px]">{t.orphan_title}</h3><p className="text-[12px] opacity-60 mt-2">{t.orphan_desc}</p><button className="mt-4 w-full bg-[#0f3440] text-white rounded-full py-3 font-black text-[13px]">{t.donate_btn} $35</button></div></div>
<div className="bg-white rounded-[20px] border overflow-hidden shadow"><div className="relative"><img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600" className="h-48 w-full object-cover"/><div className="absolute top-3 left-3 bg-[#0f3440] text-white text-[10px] px-3 py-1 rounded-full font-black">💧 WATER</div></div><div className="p-5"><h3 className="font-black text-[16px]">{t.well_title}</h3><p className="text-[12px] opacity-60 mt-2">{t.well_desc}</p><div className="mt-3"><div className="flex justify-between text-[11px] mb-1"><span>$2,500 goal</span><span className="font-black">$1,100 left</span></div><div className="h-2 bg-gray-100 rounded-full"><div className="h-2 bg-[#7fbf7a] w-[56%] rounded-full"></div></div></div><button className="mt-4 w-full bg-[#ffcc4d] text-[#0f3440] rounded-full py-3 font-black text-[13px]">{t.donate_btn} $100</button></div></div>
</div>
</section>

{/* KEEP HOW IT WORKS FROM YOUR SCREENSHOT */}
<section className="px-4 md:px-12 py-10 bg-[#efe8d6]">
<div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-10 items-start">
<div>
<h2 className="text-[32px] font-black leading-[0.95]">{t.how_title}</h2>
<p className="mt-3 text-[12px] opacity-60">{t.how_sub}</p>
<div className="mt-8 space-y-5">
<div className="flex gap-4"><div className="w-10 h-10 bg-[#0f3440] text-white rounded-full grid place-items-center font-black">1</div><div><b className="text-[14px]">{t.step1_t}</b><br/><span className="text-[12px] opacity-60">{t.step1_d}</span></div></div>
<div className="flex gap-4"><div className="w-10 h-10 bg-[#0f3440] text-white rounded-full grid place-items-center font-black">2</div><div><b className="text-[14px]">{t.step2_t}</b><br/><span className="text-[12px] opacity-60">{t.step2_d}</span></div></div>
<div className="flex gap-4"><div className="w-10 h-10 bg-[#0f3440] text-white rounded-full grid place-items-center font-black">3</div><div><b className="text-[14px]">{t.step3_t}</b><br/><span className="text-[12px] opacity-60">{t.step3_d}</span></div></div>
<div className="flex gap-4"><div className="w-10 h-10 bg-[#ffcc4d] text-[#0f3440] rounded-full grid place-items-center font-black">4</div><div><b className="text-[14px]">{t.step4_t}</b><br/><span className="text-[12px] opacity-60">{t.step4_d}</span></div></div>
</div>
</div>
<div className="bg-white rounded-[20px] border p-6 shadow-xl">
<div className="flex justify-between"><h3 className="font-black">{t.proof_title}</h3><span className="bg-green-600 text-white text-[10px] px-2 py-1 rounded-full">● LIVE</span></div>
<div className="mt-5 space-y-4 text-[11px]"><div>💧 Well #157 – Uganda – 500 people – Video 2m ago – <span className="text-blue-600 font-bold">▶ Watch</span></div><div>🍞 Food Parcels – Niger – 200 families – 5h ago</div><div>🏥 Mobile Clinic – Somalia – 78 patients – 1d ago</div></div>
</div>
</div>
</section>

{/* ===== NEW SPONSOR-ATTRACTING FIELDS - ADDING, NOT REMOVING ===== */}

{/* WHY SPONSOR US */}
<section className="bg-white border-y py-14 px-4 md:px-12">
<div className="max-w-[1600px] mx-auto">
<div className="text-center max-w-3xl mx-auto"><h2 className="text-[32px] md:text-[44px] font-black leading-[0.95]">{t.sponsor_why_title}</h2><p className="text-[13px] opacity-60 mt-4">{t.sponsor_why_sub}</p></div>
<div className="mt-10 grid md:grid-cols-4 gap-5">
<div className="bg-[#FFFBF0] rounded-[18px] border p-6 text-center"><div className="text-[28px]">🏷️</div><b className="block mt-3 text-[14px]">{t.benefit1_t}</b><p className="text-[11px] opacity-60 mt-2 leading-5">{t.benefit1_d}</p></div>
<div className="bg-[#FFFBF0] rounded-[18px] border p-6 text-center"><div className="text-[28px]">🧾</div><b className="block mt-3 text-[14px]">{t.benefit2_t}</b><p className="text-[11px] opacity-60 mt-2 leading-5">{t.benefit2_d}</p></div>
<div className="bg-[#FFFBF0] rounded-[18px] border p-6 text-center"><div className="text-[28px]">📊</div><b className="block mt-3 text-[14px]">{t.benefit3_t}</b><p className="text-[11px] opacity-60 mt-2 leading-5">{t.benefit3_d}</p></div>
<div className="bg-[#FFFBF0] rounded-[18px] border p-6 text-center"><div className="text-[28px]">🕌</div><b className="block mt-3 text-[14px]">{t.benefit4_t}</b><p className="text-[11px] opacity-60 mt-2 leading-5">{t.benefit4_d}</p></div>
</div>
</div>
</section>

{/* CORPORATE TIERS */}
<section className="px-4 md:px-12 py-14 bg-[#0f3440] text-white">
<div className="max-w-[1600px] mx-auto">
<div className="flex flex-col md:flex-row justify-between gap-4 items-end"><div><h2 className="text-[32px] md:text-[40px] font-black">{t.tiers_title}</h2><p className="text-[12px] opacity-60 mt-2">{t.tiers_sub}</p></div><button className="bg-[#ffcc4d] text-[#0f3440] px-6 py-3 rounded-full font-black text-[13px]">Download Sponsorship Deck PDF →</button></div>
<div className="mt-10 grid md:grid-cols-4 gap-5">
<div className="bg-white/10 backdrop-blur rounded-[20px] border border-white/10 p-6"><div className="w-10 h-10 bg-[#cd7f32] rounded-full grid place-items-center font-black">B</div><h3 className="font-black mt-4 text-[16px]">{t.bronze}</h3><p className="text-[11px] opacity-70 mt-3 leading-5">{t.bronze_p}</p><button className="mt-5 w-full border border-white/20 rounded-full py-2.5 text-[12px] font-bold">Become Bronze →</button></div>
<div className="bg-white/10 backdrop-blur rounded-[20px] border border-white/10 p-6"><div className="w-10 h-10 bg-[#c0c0c0] rounded-full grid place-items-center font-black text-[#0f3440]">S</div><h3 className="font-black mt-4 text-[16px]">{t.silver}</h3><p className="text-[11px] opacity-70 mt-3 leading-5">{t.silver_p}</p><button className="mt-5 w-full bg-white text-[#0f3440] rounded-full py-2.5 text-[12px] font-black">Become Silver →</button></div>
<div className="bg-[#ffcc4d] text-[#0f3440] rounded-[20px] border p-6 shadow-[0_10px_40px_rgba(255,204,77,0.3)] scale-[1.03]"><div className="flex justify-between"><div className="w-10 h-10 bg-[#0f3440] text-white rounded-full grid place-items-center font-black">G</div><span className="bg-[#0f3440] text-white text-[9px] px-2 py-1 rounded-full font-black">MOST POPULAR</span></div><h3 className="font-black mt-4 text-[16px]">{t.gold}</h3><p className="text-[11px] opacity-80 mt-3 leading-5 font-medium">{t.gold_p}</p><button className="mt-5 w-full bg-[#0f3440] text-white rounded-full py-2.5 text-[12px] font-black">Become Gold →</button></div>
<div className="bg-white/10 backdrop-blur rounded-[20px] border border-white/10 p-6"><div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-300 rounded-full grid place-items-center font-black text-[#0f3440]">P</div><h3 className="font-black mt-4 text-[16px]">{t.platinum}</h3><p className="text-[11px] opacity-70 mt-3 leading-5">{t.platinum_p}</p><button className="mt-5 w-full border border-white/20 rounded-full py-2.5 text-[12px] font-bold">Contact for Platinum →</button></div>
</div>
</div>
</section>

{/* PARTNERS + DONOR WALL + ZAKAT */}
<section className="px-4 md:px-12 py-14 bg-[#FFFBF0]">
<div className="max-w-[1600px] mx-auto grid lg:grid-cols-3 gap-8">
<div className="bg-white rounded-[20px] border p-6">
<h3 className="font-black text-[16px]">{t.partners_title}</h3>
<div className="mt-5 grid grid-cols-3 gap-3">
<div className="bg-[#FFFBF0] border rounded-[12px] h-16 grid place-items-center text-[10px] font-black">TURKISH AIRLINES</div>
<div className="bg-[#FFFBF0] border rounded-[12px] h-16 grid place-items-center text-[10px] font-black">AZERCELL</div>
<div className="bg-[#FFFBF0] border rounded-[12px] h-16 grid place-items-center text-[10px] font-black">TRT WORLD</div>
<div className="bg-[#FFFBF0] border rounded-[12px] h-16 grid place-items-center text-[10px] font-black">QATAR CHARITY</div>
<div className="bg-[#FFFBF0] border rounded-[12px] h-16 grid place-items-center text-[10px] font-black">AFAD</div>
<div className="bg-[#FFFBF0] border rounded-[12px] h-16 grid place-items-center text-[10px] font-black">ISDB</div>
<div className="bg-[#FFFBF0] border rounded-[12px] h-16 grid place-items-center text-[10px] font-black">KIZILAY</div>
<div className="bg-[#FFFBF0] border rounded-[12px] h-16 grid place-items-center text-[10px] font-black">+40 MORE</div>
<div className="bg-[#0f3440] text-white border rounded-[12px] h-16 grid place-items-center text-[10px] font-black">YOUR LOGO HERE</div>
</div>
<p className="mt-4 text-[11px] opacity-60">{t.csr_title}<br/>{t.csr_desc}</p>
</div>

<div className="bg-white rounded-[20px] border p-6">
<h3 className="font-black text-[16px]">{t.donor_wall_title}</h3>
<p className="text-[11px] opacity-60 mt-1">{t.donor_wall_sub}</p>
<div className="mt-5 space-y-2">
<div className="bg-[#FFFBF0] border rounded-full px-4 py-2.5 text-[11px] flex justify-between"><span><b>Ahmet Y. • Istanbul</b> $100 💧</span><span className="opacity-60">2m ago</span></div>
<div className="bg-[#FFFBF0] border rounded-full px-4 py-2.5 text-[11px] flex justify-between"><span><b>Leyla M. • Baku</b> ₼50 📚</span><span className="opacity-60">5m ago</span></div>
<div className="bg-[#FFFBF0] border rounded-full px-4 py-2.5 text-[11px] flex justify-between"><span><b>Sarah K. • London</b> £250 🏥</span><span className="opacity-60">8m ago</span></div>
<div className="bg-[#0f3440] text-white border rounded-full px-4 py-2.5 text-[11px] flex justify-between"><span><b>Al Baraka Corp • Dubai</b> $15,000 🏫 Gold Sponsor</span><span className="opacity-70">1h ago</span></div>
<div className="bg-[#FFFBF0] border rounded-full px-4 py-2.5 text-[11px] flex justify-between"><span><b>Emre • Berlin</b> $2,500 💧 Well #158</span><span className="opacity-60">3h ago</span></div>
<div className="bg-[#FFFBF0] border rounded-full px-4 py-2.5 text-[11px] flex justify-between"><span><b>USAID Match</b> matched $500</span><span className="opacity-60">12m ago</span></div>
</div>
<button className="mt-5 w-full bg-[#0f3440] text-white rounded-full py-3 text-[12px] font-black">Join 8,421 Donors →</button>
</div>

<div className="bg-[#0f3440] text-white rounded-[20px] border p-6">
<h3 className="font-black text-[16px] text-[#ffcc4d]">{t.zakat_title}</h3>
<p className="text-[12px] opacity-70 mt-2 leading-5">{t.zakat_desc}</p>
<div className="mt-6 bg-white/10 rounded-[14px] p-4 border border-white/10">
<div className="flex justify-between text-[11px]"><span>Gold (g)</span><span>Cash ($)</span></div>
<div className="mt-2 grid grid-cols-2 gap-3"><input placeholder="80" className="bg-white text-[#0f3440] rounded-full px-4 py-2.5 text-[12px]"/><input placeholder="1000" className="bg-white text-[#0f3440] rounded-full px-4 py-2.5 text-[12px]"/></div>
<div className="mt-4 bg-[#ffcc4d] text-[#0f3440] rounded-full py-3 text-center font-black text-[13px]">Your Zakat: $175</div>
<button className="mt-3 w-full bg-white text-[#0f3440] rounded-full py-3 font-black text-[12px]">{t.calc_btn}</button>
</div>
<div className="mt-6 text-[10px] opacity-60">✓ Zakat eligible • ✓ Fatwa approved • ✓ Video proof of distribution • ✓ Monthly report</div>
</div>
</div>
</section>

<footer className="bg-[#0f3440] text-white px-6 md:px-12 py-10">
<div className="max-w-[1600px] mx-auto grid md:grid-cols-4 gap-8 text-[11px]">
<div><img src="/logo.png" className="w-14 h-14 rounded-full bg-white mb-3" alt=""/><b>Afrika Yardım Vakfı</b><br/>Bridging Continents, Building Hope<br/>Est. 2021 • NGO No: 2021/047</div>
<div>Contact<br/>Istanbul: +90 212 XXX<br/>Baku: +994 12 XXX<br/>Kampala: +256 XXX<br/>info@afrikayardimvakfi.org</div>
<div>Transparency<br/>● Audited Financials<br/>● 89% Field • 11% Admin<br/>● Zakat Policy<br/>● Annual Report PDF</div>
<div><button className="bg-[#ffcc4d] text-[#0f3440] px-5 py-2 rounded-full font-black text-[12px]">{t.donate_btn}</button><br/><br/>Visa • MasterCard • PayPal • Troy • BirKart • Crypto<br/>Bank: TRxx XXXX • AZxx XXXX</div>
</div>
<div className="max-w-[1600px] mx-auto mt-8 pt-6 border-t border-white/10 flex justify-between text-[10px] opacity-50"><span>© 2024 Afrika Yardım Vakfı</span><span>EN • TR • AZ • AR • Sponsor Login • Impact Dashboard</span></div>
</footer>
</main>
)
}
