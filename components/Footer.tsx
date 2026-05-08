import Link from 'next/link';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="text-slate-50 bg-[#111111] border-t border-white/5 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          
          {/* Brand & Trust */}
          <div className="space-y-6">
            <Link href="/" className="inline-block pb-2 -ml-2 group">
              <Logo className="w-48 md:w-56 transition-transform duration-500 ease-out group-hover:scale-105" />
            </Link>
            <p className="text-[13px] font-light text-slate-400 leading-relaxed max-w-xs">
              Din trygge bruktbilforhandler i Vennesla og Kristiansand. Vi gjør bilkjøpet forutsigbart og enkelt.
            </p>
            <div className="pt-2 space-y-3">
              <div className="flex items-center text-xs uppercase tracking-widest text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 mr-3 text-white/50" /> 12 mnd garanti
              </div>
              <div className="flex items-center text-xs uppercase tracking-widest text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 mr-3 text-white/50" /> Ny tilstandsrapport
              </div>
              <div className="flex items-center text-xs uppercase tracking-widest text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 mr-3 text-white/50" /> Fri for heftelser
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-8 text-white">Snarveier</h4>
            <ul className="space-y-4 text-[13px] font-light text-slate-400">
              <li><Link href="/biler" className="hover:text-white transition-colors">Se alle biler til salgs</Link></li>
              <li><Link href="/selg-bil" className="hover:text-white transition-colors">Vi selger bilen for deg</Link></li>
              <li><Link href="/finansiering" className="hover:text-white transition-colors">Finansiering & Forsikring</Link></li>
              <li><Link href="/om-oss" className="hover:text-white transition-colors">Om Dream Car AS</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt oss</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-8 text-white">Kontakt</h4>
            <ul className="space-y-5 text-[13px] font-light text-slate-400">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-4 shrink-0 text-white/50 mt-0.5" />
                <span className="leading-loose">Tjønnvoll Industriområde 1<br />4707 Vennesla</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-4 shrink-0 text-white/50" />
                <a href="tel:+4738360066" className="hover:text-white transition-colors">383 60 066</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-4 shrink-0 text-white/50" />
                <a href="mailto:post@dreamcar.no" className="hover:text-white transition-colors">post@dreamcar.no</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-8 text-white">Åpningstider</h4>
            <ul className="space-y-3 text-[13px] font-light text-slate-400">
              <li className="flex justify-between items-center border-b border-white/5 pb-2"><span>Man - Fre</span> <span>09:00 - 17:00</span></li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2"><span>Torsdag</span> <span>09:00 - 19:00</span></li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2"><span>Lørdag</span> <span>10:00 - 14:00</span></li>
              <li className="flex justify-between items-center text-white/50"><span>Søndag</span> <span>Stengt</span></li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-xs uppercase tracking-widest text-slate-500">Org.nr: 999 999 999 MVA</p>
            </div>
          </div>

        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest text-slate-500 font-medium">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Dream Car AS</p>
          <div className="flex gap-8">
            <Link href="/personvern" className="hover:text-white transition-colors">Personvern</Link>
            <Link href="/informasjonskapsler" className="hover:text-white transition-colors">Informasjonskapsler</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
