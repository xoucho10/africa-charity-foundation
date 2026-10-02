import "./globals.css"
import { LanguageProvider } from "@/components/LanguageContext"
export default function RootLayout({children}:{children:React.ReactNode}){
 return(<html><body><LanguageProvider>{children}</LanguageProvider></body></html>)
}
