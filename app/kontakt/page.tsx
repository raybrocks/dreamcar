import React from 'react';
import { MapPin, Phone, Mail, Send, Building2, Briefcase, CarFront, Megaphone } from 'lucide-react';

export default function Kontakt() {
  return (
    <div className="container mx-auto px-4 py-24 lg:py-32 max-w-6xl">
      <div className="text-center mb-24 cursor-default">
        <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-black/40 mb-4">Ta kontakt</h2>
        <h1 className="font-heading text-5xl md:text-6xl font-[300] tracking-tight mb-8 text-[#111111]">
          Kontakt <span className="italic">oss</span>
        </h1>
        <p className="text-lg text-[#666666] font-light max-w-3xl mx-auto leading-relaxed">
          Vi er her for å hjelpe deg. Ta gjerne kontakt med oss eller ta en tur innom våre lokaler for en kaffe og hyggelig bilprat.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-16 items-start">
        {/* Kontaktinfo */}
        <div className="space-y-12">
          <div className="bg-transparent border border-black/10 rounded-none p-10 md:p-12">
            <h2 className="text-2xl font-medium mb-8 border-b border-black/5 pb-6 text-[#111111]">Kontaktinformasjon</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 border border-black/10 flex items-center justify-center mr-6 shrink-0 text-[#111111]">
                  <MapPin className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-black/50 font-medium mb-2">Besøksadresse</h3>
                  <a href="https://maps.google.com/?q=Tjønnvoll+Industriområde+1,4707+Vennesla" target="_blank" rel="noreferrer" className="text-[#111111] font-medium hover:text-[#666666] transition-colors leading-loose">
                    Tjønnvoll Industriområde 1<br />
                    4707 Vennesla
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 border border-black/10 flex items-center justify-center mr-6 shrink-0 text-[#111111]">
                  <Phone className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-black/50 font-medium mb-2">Telefon</h3>
                  <a href="tel:+4738360066" className="text-[#111111] font-medium text-lg hover:text-[#666666] transition-colors">
                    383 60 066
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-transparent border border-black/10 rounded-none p-10 md:p-12">
            <h2 className="text-2xl font-medium mb-8 border-b border-black/5 pb-6 text-[#111111]">Ansatte</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-2 group">
                <div className="flex items-center text-[#111111] text-xs uppercase tracking-widest font-medium mb-2">
                  <Building2 className="w-3.5 h-3.5 mr-3 text-black/40" />
                  Daglig Leder
                </div>
                <a href="mailto:amin-dreamcar@huba.as" className="text-sm font-light text-[#666666] group-hover:text-[#111111] transition-colors">
                  amin-dreamcar@huba.as
                </a>
              </div>

              <div className="flex flex-col space-y-2 group">
                <div className="flex items-center text-[#111111] text-xs uppercase tracking-widest font-medium mb-2">
                  <CarFront className="w-3.5 h-3.5 mr-3 text-black/40" />
                  Salg
                </div>
                <a href="mailto:salg-dreamcar@huba.as" className="text-sm font-light text-[#666666] group-hover:text-[#111111] transition-colors">
                  salg-dreamcar@huba.as
                </a>
              </div>

              <div className="flex flex-col space-y-2 group">
                <div className="flex items-center text-[#111111] text-xs uppercase tracking-widest font-medium mb-2">
                  <Briefcase className="w-3.5 h-3.5 mr-3 text-black/40" />
                  Innkjøp
                </div>
                <a href="mailto:Amir.barrios@huba.as" className="text-sm font-light text-[#666666] group-hover:text-[#111111] transition-colors">
                  Amir.barrios@huba.as
                </a>
              </div>

              <div className="flex flex-col space-y-2 group">
                <div className="flex items-center text-[#111111] text-xs uppercase tracking-widest font-medium mb-2">
                  <Megaphone className="w-3.5 h-3.5 mr-3 text-black/40" />
                  Markedsføring
                </div>
                <a href="mailto:amir.barrios@huba.as" className="text-sm font-light text-[#666666] group-hover:text-[#111111] transition-colors">
                  amir.barrios@huba.as
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Kontaktskjema */}
        <div className="bg-[#111111] border border-transparent rounded-none p-10 md:p-12 text-white">
          <div className="mb-10 min-h-[4rem]">
            <h2 className="font-heading text-3xl font-[300] mb-3">Send oss en melding</h2>
            <p className="text-white/60 font-light text-sm">Vi svarer deg så fort vi kan innenfor våre åpningstider.</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-white/50 font-medium">Navn</label>
                <input type="text" id="name" className="flex h-12 w-full rounded-none border border-white/20 bg-transparent px-4 py-2 text-sm text-white focus-visible:outline-none focus:border-white transition-colors" placeholder="Ditt navn" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs uppercase tracking-widest text-white/50 font-medium">Telefon</label>
                <input type="tel" id="phone" className="flex h-12 w-full rounded-none border border-white/20 bg-transparent px-4 py-2 text-sm text-white focus-visible:outline-none focus:border-white transition-colors" placeholder="Telefon" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-white/50 font-medium">E-post *</label>
              <input type="email" id="email" className="flex h-12 w-full rounded-none border border-white/20 bg-transparent px-4 py-2 text-sm text-white focus-visible:outline-none focus:border-white transition-colors" placeholder="din@epost.no" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-xs uppercase tracking-widest text-white/50 font-medium">Hva gjelder det?</label>
              <div className="relative">
                <select id="subject" className="flex h-12 w-full rounded-none border border-white/20 bg-transparent px-4 py-2 text-sm text-white focus-visible:outline-none focus:border-white transition-colors appearance-none">
                  <option value="salg" className="text-black">Kjøp av bil</option>
                  <option value="kjop" className="text-black">Salg av bil / Kommisjon</option>
                  <option value="deler" className="text-black">Bildeler</option>
                  <option value="annet" className="text-black">Generell henvendelse</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-white/50 font-medium">Melding *</label>
              <textarea id="message" rows={5} className="flex min-h-[120px] w-full rounded-none border border-white/20 bg-transparent px-4 py-3 text-sm text-white focus-visible:outline-none focus:border-white transition-colors resize-y" placeholder="Skriv meldingen din her..." required></textarea>
            </div>
            
            <button type="button" className="inline-flex w-full items-center justify-center rounded-none bg-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium text-black hover:bg-slate-200 transition-colors mt-8">
              <Send className="mr-3 h-3.5 w-3.5" />
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
