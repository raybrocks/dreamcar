import React from 'react';
import Image from 'next/image';
import { Shield, ThumbsUp, Users, Target, User } from 'lucide-react';
import Link from 'next/link';
import { FadeUp } from '@/components/FadeUp';

export default function OmOss() {
  return (
    <div className="container mx-auto px-4 py-24 lg:py-32 max-w-6xl">
      <FadeUp className="text-center mb-24 max-w-4xl mx-auto cursor-default">
        <h2 className="text-xs uppercase tracking-widest font-medium text-black/40 mb-4">Om selskapet</h2>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-[80px] font-[300] tracking-tight mb-8 text-[#111111] leading-[0.95]">
          Velkommen til <br className="hidden md:block"/>
          <span className="italic">Dream Car.</span>
        </h1>
        <p className="text-lg lg:text-xl text-[#666666] font-light leading-relaxed">
          Dream Car er en bilforhandler med et tydelig mål: å skape trygge, profesjonelle og inspirerende kundeopplevelser for mennesker som er på jakt etter sin neste bil.
        </p>
      </FadeUp>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
        <FadeUp delay={0.1} className="space-y-8 text-lg font-light text-[#666666] leading-relaxed">
          <p>
            For oss handler bilhandel om mer enn selve kjøpet. Det handler om tillit, god rådgivning og en ryddig prosess fra første kontakt til nøklene er levert.
          </p>
          <p>
            Vi kombinerer ekte bilinteresse med høy servicegrad og et sterkt fokus på kvalitet. Kundene våre skal oppleve at de blir møtt av mennesker som lytter, forstår behovene deres og gir ærlige råd. Enten målet er en hverdagsbil eller drømmebilen.
          </p>
          <div className="border-l border-black/20 pl-8 pt-2 pb-2 mt-12 mb-4 hover:border-black/40 transition-colors duration-500">
            <p className="font-heading italic text-3xl font-[300] text-[#111111] leading-snug">
              &quot;Velkommen til Dream Car – der trygg bilhandel møter ekte engasjement.&quot;
            </p>
          </div>
        </FadeUp>
        
        <FadeUp delay={0.2} className="relative aspect-[4/5] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-black/5 bg-slate-100 flex items-center justify-center group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <Image 
            src="https://images.unsplash.com/photo-1588508064977-ceba9828d578?q=80&w=800&auto=format&fit=crop" 
            alt="Dream Car team" 
            fill 
            className="object-cover opacity-50 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
            sizes="(max-width: 1024px) 100vw, 50vw"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center mix-blend-multiply pointer-events-none">
            <User className="w-32 h-32 text-slate-400 stroke-[1]" />
          </div>
        </FadeUp>
      </div>

      <FadeUp className="border border-black/10 rounded-lg p-12 lg:p-24 mb-32 relative overflow-hidden bg-[#fdfcfb]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 blur-[100px] -mr-32 -mt-32 rounded-full pointer-events-none" />
        <div className="grid md:grid-cols-2 gap-16 relative z-10">
          <div className="space-y-6">
            <h2 className="font-heading text-4xl font-[300] tracking-tight text-[#111111] mb-6">Fremtidens ledere</h2>
            <p className="text-[#666666] font-light leading-relaxed">
              En viktig del av vår identitet er troen på unge mennesker, ansvar og utvikling. Vi ønsker å bygge en virksomhet med en kultur der nye talenter får mulighet til å vokse, ta eierskap og utvikle seg faglig.
            </p>
            <p className="text-[#666666] font-light leading-relaxed">
              Gjennom tydelige rammer, god oppfølging og en kultur preget av profesjonalitet, ønsker vi å bidra til å forme fremtidens ledere i bilbransjen.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="font-heading text-4xl font-[300] tracking-tight text-[#111111] mb-6">Tillit og kvalitet</h2>
            <p className="text-[#666666] font-light leading-relaxed">
              Hos Dream Car tror vi at langsiktig suksess skapes gjennom tillit, kvalitet og mennesker som bryr seg. Derfor jobber vi hver dag for å bygge gode relasjoner, levere høy standard og skape et miljø der både kunder og medarbeidere føler seg ivaretatt.
            </p>
          </div>
        </div>
      </FadeUp>

      <div className="text-center max-w-5xl mx-auto mb-32">
        <FadeUp>
          <h2 className="font-heading text-4xl lg:text-5xl font-[300] tracking-tight mb-16 text-[#111111]">Våre kjerneverdier</h2>
        </FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          <FadeUp delay={0.1} className="flex flex-col items-center group">
            <div className="w-16 h-16 border border-black/10 flex items-center justify-center text-[#111111] mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300 ease-out group-hover:scale-110">
              <Shield className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-medium text-[#111111] mb-3 transition-colors duration-300">Trygghet</h3>
            <p className="text-[#666666] font-light text-sm text-center leading-relaxed">En ryddig og sikker prosess for alle våre kunder.</p>
          </FadeUp>
          <FadeUp delay={0.2} className="flex flex-col items-center group">
            <div className="w-16 h-16 border border-black/10 flex items-center justify-center text-[#111111] mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300 ease-out group-hover:scale-110">
              <Users className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-medium text-[#111111] mb-3 transition-colors duration-300">Engasjement</h3>
            <p className="text-[#666666] font-light text-sm text-center leading-relaxed">Unge talenter og mennesker som bryr seg ekte om ditt behov.</p>
          </FadeUp>
          <FadeUp delay={0.3} className="flex flex-col items-center group">
            <div className="w-16 h-16 border border-black/10 flex items-center justify-center text-[#111111] mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300 ease-out group-hover:scale-110">
              <Target className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-medium text-[#111111] mb-3 transition-colors duration-300">Ambisjon</h3>
            <p className="text-[#666666] font-light text-sm text-center leading-relaxed">Vi bygger en virksomhet med lidenskap for bil.</p>
          </FadeUp>
          <FadeUp delay={0.4} className="flex flex-col items-center group">
            <div className="w-16 h-16 border border-black/10 flex items-center justify-center text-[#111111] mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300 ease-out group-hover:scale-110">
              <ThumbsUp className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-medium text-[#111111] mb-3 transition-colors duration-300">Integritet</h3>
            <p className="text-[#666666] font-light text-sm text-center leading-relaxed">Ærlige råd og kvalitet i alt vi leverer og gjør.</p>
          </FadeUp>
        </div>
      </div>

      <FadeUp className="text-center max-w-3xl mx-auto pb-12">
        <p className="text-xl lg:text-2xl font-light text-[#111111] leading-relaxed mb-12">
          Dream Car skal være mer enn en bilforhandler. Vi setter kunden først, bygger langsiktige relasjoner og skaper ekte verdier.
        </p>
        <Link href="/kontakt" className="inline-flex items-center justify-center rounded-full bg-[#111111] px-10 py-4 text-xs uppercase tracking-widest font-medium text-white hover:bg-black/80 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]">
          Kontakt oss
        </Link>
      </FadeUp>
    </div>
  );
}
