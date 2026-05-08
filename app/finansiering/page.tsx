import React from 'react';
import { ShieldCheck, Banknote, Clock, CheckCircle2, Send } from 'lucide-react';
import Link from 'next/link';

export default function Finansiering() {
  return (
    <div className="container mx-auto px-4 py-24 lg:py-32 max-w-6xl">
      <div className="text-center mb-24 cursor-default">
        <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-black/40 mb-4">Tjenester</h2>
        <h1 className="font-heading text-5xl md:text-6xl font-[300] tracking-tight mb-8 text-[#111111]">
          Finansiering & <span className="italic">Forsikring</span>
        </h1>
        <p className="text-lg text-[#666666] font-light max-w-3xl mx-auto leading-relaxed">
          Vi tilbyr alle våre kunder gode løsninger for både forsikring og finans via våre samarbeidspartnere. Vårt mål er å gjøre prosessen enkel, rask, og ikke minst trygg.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-32">
        <div className="bg-transparent border border-black/5 p-10 text-center rounded-none group hover:border-black/20 transition-all duration-500">
          <div className="w-12 h-12 flex items-center justify-center mx-auto mb-8 border border-black/10 text-[#111111]">
            <CheckCircle2 className="w-5 h-5 stroke-[1.5]" />
          </div>
          <h2 className="text-xl font-medium mb-4 text-[#111111]">Enkelt</h2>
          <p className="text-[#666666] font-light text-sm leading-relaxed">
            Vi tar oss av alt papirarbeidet og hjelper deg med å finne den beste løsningen i ro og mak.
          </p>
        </div>
        
        <div className="bg-transparent border border-black/5 p-10 text-center rounded-none group hover:border-black/20 transition-all duration-500">
          <div className="w-12 h-12 flex items-center justify-center mx-auto mb-8 border border-black/10 text-[#111111]">
            <Clock className="w-5 h-5 stroke-[1.5]" />
          </div>
          <h2 className="text-xl font-medium mb-4 text-[#111111]">Raskt</h2>
          <p className="text-[#666666] font-light text-sm leading-relaxed">
            Du får ofte svar på finansiering på få minutter, slik at du kan ta med deg bilen hjem med én gang.
          </p>
        </div>

        <div className="bg-transparent border border-black/5 p-10 text-center rounded-none group hover:border-black/20 transition-all duration-500">
          <div className="w-12 h-12 flex items-center justify-center mx-auto mb-8 border border-black/10 text-[#111111]">
            <Banknote className="w-5 h-5 stroke-[1.5]" />
          </div>
          <h2 className="text-xl font-medium mb-4 text-[#111111]">Gunstige vilkår</h2>
          <p className="text-[#666666] font-light text-sm leading-relaxed">
            Vi forhandler frem gode renter og betingelser gjennom våre solide samarbeidspartnere.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="lg:sticky top-32">
          <ShieldCheck className="w-10 h-10 text-[#111111]/40 mb-8 stroke-[1.5]" />
          <h2 className="font-heading text-4xl md:text-5xl font-[300] tracking-tight mb-8 text-[#111111] leading-tight">
            Trygghet gjennom <br/><span className="italic">hele avtalen</span>
          </h2>
          <p className="text-lg text-[#666666] font-light mb-10 leading-relaxed">
            Enten du trenger fullfinansiering av din nye bil, eller kun ønsker et godt tilbud på bilforsikring, så fikser vi dette før du forlater våre lokaler.
          </p>
          <ul className="space-y-6 mb-8 border-t border-black/10 pt-10">
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-[#111111] mr-4 shrink-0 mt-0.5 stroke-[1.5]" />
              <span className="text-[#666666] font-light">Inntil 100% finansiering (0,- egenkapital)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-[#111111] mr-4 shrink-0 mt-0.5 stroke-[1.5]" />
              <span className="text-[#666666] font-light">Inntil 10 års nedbetalingstid</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-[#111111] mr-4 shrink-0 mt-0.5 stroke-[1.5]" />
              <span className="text-[#666666] font-light">Forsikringsavtaler inkl. utvidet maskinskade</span>
            </li>
          </ul>
        </div>

        <div className="bg-transparent border border-black/10 p-8 md:p-12 rounded-none">
          <div className="mb-10 text-center">
            <h3 className="font-heading text-3xl font-[300] tracking-tight mb-3 text-[#111111]">Få et tilbud</h3>
            <p className="text-[#666666] font-light text-sm">Legg igjen en beskjed, så ser vi uforpliktende på saken.</p>
          </div>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-black/50 font-medium">Navn</label>
              <input type="text" id="name" className="flex h-12 w-full rounded-none border border-black/20 bg-transparent px-4 py-2 text-sm focus-visible:outline-none focus:border-black transition-colors" placeholder="Ola Nordmann" required />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs uppercase tracking-widest text-black/50 font-medium">E-post eller telefon</label>
              <input type="text" id="phone" className="flex h-12 w-full rounded-none border border-black/20 bg-transparent px-4 py-2 text-sm focus-visible:outline-none focus:border-black transition-colors" placeholder="post@eksempel.no" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-black/50 font-medium">Melding</label>
              <textarea id="message" rows={5} className="flex min-h-[120px] w-full rounded-none border border-black/20 bg-transparent px-4 py-3 text-sm focus-visible:outline-none focus:border-black transition-colors resize-y" placeholder="Jeg ønsker tilbud på..."></textarea>
            </div>
            
            <button type="submit" className="mt-8 inline-flex w-full items-center justify-center rounded-none bg-[#111111] px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-black/80 transition-colors">
              <Send className="mr-3 h-3.5 w-3.5" />
              Send forespørsel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
