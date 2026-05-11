import Link from 'next/link';
import { Package, Phone, Mail, Disc, Settings, Wrench } from 'lucide-react';

export default function Bildeler() {
  return (
    <div className="container mx-auto px-4 py-24 lg:py-32 max-w-6xl">
      <div className="text-center mb-20 cursor-default">
        <h2 className="text-xs uppercase tracking-widest font-medium text-black/40 mb-4">Utstyr og deler</h2>
        <h1 className="font-heading text-5xl md:text-6xl font-[300] tracking-tight mb-8 text-[#111111]">
          Din totalleverandør av <br className="hidden md:block"/><span className="italic">deler og tilbehør</span>
        </h1>
        <p className="text-lg text-[#666666] font-light max-w-2xl mx-auto leading-relaxed">
          Vi er en fullverdig totalleverandør og skaffer alt du trenger til bilen. Vi leverer kvalitetsprodukter til de fleste bilmerker til konkurransedyktige priser.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        <div className="bg-[#fdfcfb] border border-black/5 p-8 text-center group hover:border-black/20 transition-all duration-500">
          <Settings className="w-8 h-8 mx-auto mb-6 text-[#111111]/40 stroke-[1.5] group-hover:text-[#111111] transition-colors" />
          <h3 className="text-lg font-medium text-[#111111] mb-2">Bildeler</h3>
          <p className="text-sm text-[#666666] font-light">Slitedeler, karosseri og elektronikk for de fleste merker.</p>
        </div>
        <div className="bg-[#fdfcfb] border border-black/5 p-8 text-center group hover:border-black/20 transition-all duration-500">
          <Disc className="w-8 h-8 mx-auto mb-6 text-[#111111]/40 stroke-[1.5] group-hover:text-[#111111] transition-colors" />
          <h3 className="text-lg font-medium text-[#111111] mb-2">Dekk</h3>
          <p className="text-sm text-[#666666] font-light">Kvalitetsdekk for sommer og vinter, for optimal sikkerhet.</p>
        </div>
        <div className="bg-[#fdfcfb] border border-black/5 p-8 text-center group hover:border-black/20 transition-all duration-500">
          <Wrench className="w-8 h-8 mx-auto mb-6 text-[#111111]/40 stroke-[1.5] group-hover:text-[#111111] transition-colors" />
          <h3 className="text-lg font-medium text-[#111111] mb-2">Felg</h3>
          <p className="text-sm text-[#666666] font-light">Aluminiumsfelger og stålfelger i ulike design og prisklasser.</p>
        </div>
        <div className="bg-[#fdfcfb] border border-black/5 p-8 text-center group hover:border-black/20 transition-all duration-500">
          <Package className="w-8 h-8 mx-auto mb-6 text-[#111111]/40 stroke-[1.5] group-hover:text-[#111111] transition-colors" />
          <h3 className="text-lg font-medium text-[#111111] mb-2">Bilprodukter</h3>
          <p className="text-sm text-[#666666] font-light">Bilpleie, olje, vindusviskere og annet nødvendig tilbehør.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
        <div className="md:col-span-2 space-y-8">
          <h2 className="font-heading text-4xl font-[300] text-[#111111] leading-tight">
            Trenger du <span className="italic">noe til bilen?</span>
          </h2>
          <p className="text-[#666666] font-light leading-relaxed">
            Ta kontakt med oss gjennom telefon eller e-post. Send oss gjerne en forespørsel med bilens registreringsnummer og hvilke produkter eller deler du er på jakt etter.
          </p>
          <div className="space-y-4 pt-4 border-t border-black/10">
            <a href="tel:+4738360066" className="flex items-center text-[#111111] hover:text-[#666666] transition-colors group">
              <div className="w-12 h-12 border border-black/10 flex items-center justify-center mr-5 group-hover:bg-[#111111] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#111111]/50 font-medium">Ring oss</p>
                <p className="font-medium text-lg">383 60 066</p>
              </div>
            </a>
          </div>
        </div>

        <div className="md:col-span-3 bg-[#111111] text-white p-10 lg:p-16 rounded-lg relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 blur-[50px] -mr-16 -mt-16 rounded-full pointer-events-none" />
          
          <Mail className="w-10 h-10 text-white/50 mb-8 stroke-[1.5]" />
          <h3 className="font-heading text-3xl font-[300] mb-4 text-white">Raskere henvisning og tilbud?</h3>
          <p className="text-white/60 font-light leading-relaxed mb-8">
            For raskest mulig saksbehandling, henvisning og pristilbud, anbefaler vi at du sender en e-post direkte til vår salgsavdeling. Vi svarer innen 1-3 virkedager.
          </p>
          
          <div className="bg-white/5 border border-white/10 p-8 mb-8">
            <p className="text-xs uppercase tracking-widest text-white/50 font-medium mb-3">Send e-post direkte til</p>
            <a href="mailto:salg-dreamcar@huba.as" className="text-xl md:text-2xl font-light text-white hover:text-white/80 transition-colors">
              salg-dreamcar@huba.as
            </a>
          </div>
          
          <a href="mailto:salg-dreamcar@huba.as" className="inline-flex items-center justify-center rounded-full bg-white text-black hover:bg-slate-200 px-10 py-4 text-xs uppercase tracking-widest font-medium transition-all duration-300 w-full sm:w-auto">
            Send forespørsel
          </a>
        </div>
      </div>
    </div>
  );
}
