import React from 'react';
import { BadgeCheck, Camera, FileText, Wrench, ShieldCheck, Mail, Send } from 'lucide-react';
import Link from 'next/link';
import { FadeUp } from '@/components/FadeUp';

export default function SelgBil() {
  return (
    <div className="container mx-auto px-4 py-24 lg:py-32 max-w-6xl">
      <FadeUp className="text-center mb-24 cursor-default">
        <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-black/40 mb-4">Tjenester</h2>
        <h1 className="font-heading text-5xl md:text-6xl font-[300] tracking-tight mb-8 text-[#111111]">
          La oss håndtere salget <span className="italic">for deg</span>
        </h1>
        <p className="text-lg text-[#666666] font-light max-w-3xl mx-auto leading-relaxed">
          Når vi selger bilen din ordner vi hele prosessen for deg. Kommisjonssalg er en trygg, enkel og tidsbesparende måte å selge bilen på.
        </p>
      </FadeUp>

      <FadeUp delay={0.1} className="border border-black/10 rounded-none p-12 lg:p-16 mb-32 bg-[#fdfcfb]">
        <h2 className="font-heading text-3xl font-[300] mb-12 text-center text-[#111111] tracking-tight">Slik fungerer prosessen</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
          <div className="text-left flex flex-col group relative">
            <div className="absolute top-6 left-12 right-0 h-px bg-black/10 hidden lg:block -z-10 group-last:hidden" />
            <div className="w-12 h-12 bg-white border border-black/20 flex items-center justify-center mb-6 text-[#111111] z-10 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300 ease-out group-hover:scale-110">
              <Wrench className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-medium mb-3 text-[#111111] transition-colors duration-300">1. Klargjøring</h3>
            <p className="text-[#666666] font-light text-sm leading-relaxed">
              Grundig innvendig og utvendig vask, lakkrens og polering. Bilen fremstår på sitt absolutt beste.
            </p>
          </div>
          
          <div className="text-left flex flex-col group relative">
            <div className="absolute top-6 left-12 right-0 h-px bg-black/10 hidden lg:block -z-10 group-last:hidden" />
            <div className="w-12 h-12 bg-white border border-black/20 flex items-center justify-center mb-6 text-[#111111] z-10 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300 ease-out group-hover:scale-110">
              <Camera className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-medium mb-3 text-[#111111] transition-colors duration-300">2. Annonsering</h3>
            <p className="text-[#666666] font-light text-sm leading-relaxed">
              Vi tar smakfulle bilder i god kvalitet og publiserer en selgende og ryddig annonse for deg.
            </p>
          </div>
          
          <div className="text-left flex flex-col group relative">
            <div className="absolute top-6 left-12 right-0 h-px bg-black/10 hidden lg:block -z-10 group-last:hidden" />
            <div className="w-12 h-12 bg-white border border-black/20 flex items-center justify-center mb-6 text-[#111111] z-10 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300 ease-out group-hover:scale-110">
              <FileText className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-medium mb-3 text-[#111111] transition-colors duration-300">3. Dokumentasjon</h3>
            <p className="text-[#666666] font-light text-sm leading-relaxed">
              Vi håndterer all nødvendig dokumentasjon, alt papirarbeid og sikker omregistrering for deg.
            </p>
          </div>
          
          <div className="text-left flex flex-col group relative">
            <div className="w-12 h-12 bg-white border border-black/20 flex items-center justify-center mb-6 text-[#111111] z-10 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300 ease-out group-hover:scale-110">
              <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-medium mb-3 text-[#111111] transition-colors duration-300">4. Garantiansvar</h3>
            <p className="text-[#666666] font-light text-sm leading-relaxed">
              Kanskje det viktigste av alt: Vi overtar garantiansvaret i ettertid. Du er fri for alt ansvar.
            </p>
          </div>
        </div>
      </FadeUp>

      {/* Kommisjonsskjema */}
      <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-start">
        <FadeUp className="lg:col-span-2 lg:sticky top-32">
          <h2 className="font-heading text-4xl font-[300] tracking-tight mb-8 text-[#111111]">Be om verdivurdering</h2>
          <p className="text-lg text-[#666666] font-light mb-10 leading-relaxed">
            Send inn detaljer om din bil, så tar vi raskt kontakt med deg for et uforpliktende tilbud. 
          </p>
          
          <div className="space-y-8 pt-8 border-t border-black/10">
            <div className="flex items-start">
              <BadgeCheck className="w-5 h-5 text-[#111111] mt-1 mr-4 shrink-0 stroke-[1.5]" />
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#111111] font-medium mb-1.5">Trygt og enkelt</h4>
                <p className="text-sm font-light text-[#666666]">Slipp annonsering, visninger og pruting.</p>
              </div>
            </div>
            <div className="flex items-start">
              <BadgeCheck className="w-5 h-5 text-[#111111] mt-1 mr-4 shrink-0 stroke-[1.5]" />
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#111111] font-medium mb-1.5">Solid nettverk</h4>
                <p className="text-sm font-light text-[#666666]">Raskt salg via våre egne kundelister.</p>
              </div>
            </div>
          </div>
        </FadeUp>
        
        <FadeUp delay={0.2} className="lg:col-span-3 bg-transparent border border-black/10 rounded-none p-10 md:p-12">
          <form className="space-y-8">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-xs uppercase tracking-widest text-black/50 font-medium">Fornavn *</label>
                <input type="text" id="firstName" className="flex h-12 w-full rounded-none border border-black/20 bg-transparent px-4 py-2 text-sm focus-visible:outline-none focus:border-black transition-colors placeholder:text-black/30" placeholder="Ola" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-xs uppercase tracking-widest text-black/50 font-medium">Etternavn *</label>
                <input type="text" id="lastName" className="flex h-12 w-full rounded-none border border-black/20 bg-transparent px-4 py-2 text-sm focus-visible:outline-none focus:border-black transition-colors placeholder:text-black/30" placeholder="Nordmann" required />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-black/50 font-medium">E-post *</label>
                <input type="email" id="email" className="flex h-12 w-full rounded-none border border-black/20 bg-transparent px-4 py-2 text-sm focus-visible:outline-none focus:border-black transition-colors placeholder:text-black/30" placeholder="din@epost.no" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs uppercase tracking-widest text-black/50 font-medium">Telefonnummer *</label>
                <input type="tel" id="phone" className="flex h-12 w-full rounded-none border border-black/20 bg-transparent px-4 py-2 text-sm focus-visible:outline-none focus:border-black transition-colors placeholder:text-black/30" placeholder="99 99 99 99" required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="regno" className="text-xs uppercase tracking-widest text-black/50 font-medium">Registreringsnummer *</label>
              <input type="text" id="regno" className="flex h-12 w-full rounded-none border border-black/20 bg-transparent px-4 py-2 text-sm uppercase focus-visible:outline-none focus:border-black transition-colors placeholder:text-black/30" placeholder="AB 12345" required />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="mileage" className="text-xs uppercase tracking-widest text-black/50 font-medium">Kilometerstand *</label>
                <input type="text" id="mileage" className="flex h-12 w-full rounded-none border border-black/20 bg-transparent px-4 py-2 text-sm focus-visible:outline-none focus:border-black transition-colors placeholder:text-black/30" placeholder="f.eks 120 000" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="price" className="text-xs uppercase tracking-widest text-black/50 font-medium">Ønsket pris</label>
                <input type="text" id="price" className="flex h-12 w-full rounded-none border border-black/20 bg-transparent px-4 py-2 text-sm focus-visible:outline-none focus:border-black transition-colors placeholder:text-black/30" placeholder="Valgfritt" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-black/50 font-medium">Ekstra info</label>
              <textarea id="message" rows={4} className="flex min-h-[120px] w-full rounded-none border border-black/20 bg-transparent px-4 py-3 text-sm focus-visible:outline-none focus:border-black transition-colors resize-y placeholder:text-black/30" placeholder="Nevn viktig utstyr, servicehistorikk, eller mangler..."></textarea>
            </div>
            
            <button type="submit" className="mt-8 inline-flex w-full items-center justify-center rounded-none bg-[#111111] px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-black/80 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]">
              <Send className="mr-3 h-3.5 w-3.5" />
              Send inn forespørsel
            </button>
          </form>
        </FadeUp>
      </div>
    </div>
  );
}
