import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, FileText, Wrench, ArrowRight, CheckCircle2, Star, ChevronDown, Car, Banknote, MapPin, Users, User } from 'lucide-react';
import { FadeUp } from '@/components/FadeUp';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-[#111111] text-slate-50 relative pt-32 pb-40 lg:pt-48 lg:pb-52 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#111111]">
          <Image 
            src="/dreamcar1.avif" 
            alt="Premium bruktbil" 
            fill 
            className="object-cover opacity-30 object-center"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/90 via-transparent to-[#111111]/95" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <FadeUp>
            <div className="inline-flex items-center rounded-lg border border-white/20 bg-transparent px-5 py-2 text-xs uppercase tracking-widest font-medium text-white mb-10 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 mr-3" />
              Din bilforhandler i Vennesla
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-[300] tracking-tight mb-8 leading-[0.95] text-white">
              Kvalitetsbiler til <br className="hidden md:block"/>
              <span className="italic">konkurransedyktige</span> priser
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-14 max-w-2xl mx-auto leading-relaxed font-light">
              Vi vet at bilkjøp kan føles usikkert. Derfor leveres alle våre biler med ny tilstandsrapport, fersk EU-kontroll og inntil 12 måneders garanti.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/biler" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-[12px] uppercase tracking-[0.1em] font-medium text-black hover:bg-slate-200 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]">
                Se våre biler
                <ArrowRight className="w-3.5 h-3.5 ml-3" />
              </Link>
              <Link href="/selg-bil" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-10 py-4 text-[12px] uppercase tracking-[0.1em] font-medium text-white hover:bg-white/10 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]">
                Vi selger bilen for deg
              </Link>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-white/10 max-w-3xl mx-auto">
              <div className="flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircle2 className="w-6 h-6 text-white/60 mb-2" />
                <span className="text-xs uppercase tracking-widest text-slate-300 font-medium">12 mnd garanti</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircle2 className="w-6 h-6 text-white/60 mb-2" />
                <span className="text-xs uppercase tracking-widest text-slate-300 font-medium">Ny tilstandsrapport</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircle2 className="w-6 h-6 text-white/60 mb-2" />
                <span className="text-xs uppercase tracking-widest text-slate-300 font-medium">Fri for heftelser</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* WHY CHOOSE US / TRUST SECTION */}
      <section className="py-32 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-xs uppercase tracking-widest font-medium text-black/40 mb-4">Om oss</h2>
            <h3 className="font-heading text-4xl md:text-5xl font-[300] tracking-tight mb-8 text-[#111111]">
              Hvorfor velge Dream Car?
            </h3>
            <p className="text-[#666666] text-lg font-light leading-relaxed">
              Å kjøpe privat sparer deg kanskje for noen tusenlapper der og da, men kan koste deg dyrt hvis noe går galt. Slik sikrer vi deg et trygt bilhold.
            </p>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <FadeUp delay={0.1} className="bg-transparent p-10 relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-400 ease-out">
              <div className="absolute inset-0 border border-black/5 rounded-lg group-hover:border-black/10 transition-colors duration-500" />
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 ease-out group-hover:w-full" />
              <div className="w-12 h-12 flex items-center justify-center mb-10 border border-black/10 text-black group-hover:scale-110 transition-transform duration-500 ease-out">
                <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h4 className="text-xl font-medium mb-4 text-[#111111]">12 måneders garanti</h4>
              <p className="text-[#666666] font-light leading-relaxed text-sm">
                Gjennom vår partner Fragus tilbyr vi omfattende bruktbilgaranti. Skulle noe uforutsett skje med motor eller drivverk, er du dekket.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.2} className="bg-transparent p-10 relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-400 ease-out">
              <div className="absolute inset-0 border border-black/5 rounded-lg group-hover:border-black/10 transition-colors duration-500" />
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 ease-out group-hover:w-full" />
              <div className="w-12 h-12 flex items-center justify-center mb-10 border border-black/10 text-black group-hover:scale-110 transition-transform duration-500 ease-out">
                <FileText className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h4 className="text-xl font-medium mb-4 text-[#111111]">Tilstandsrapport</h4>
              <p className="text-[#666666] font-light leading-relaxed text-sm">
                Vi stoler ikke bare på magefølelsen. Alle biler gjennomgår en grundig sjekk av uavhengig verksted før de legges ut for salg. Du får fullt innsyn.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.3} className="bg-transparent p-10 relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-400 ease-out">
              <div className="absolute inset-0 border border-black/5 rounded-lg group-hover:border-black/10 transition-colors duration-500" />
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 ease-out group-hover:w-full" />
              <div className="w-12 h-12 flex items-center justify-center mb-10 border border-black/10 text-black group-hover:scale-110 transition-transform duration-500 ease-out">
                <Wrench className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h4 className="text-xl font-medium mb-4 text-[#111111]">Ny EU-kontroll</h4>
              <p className="text-[#666666] font-light leading-relaxed text-sm">
                Vi leverer bilene med fersk EU-kontroll. Det betyr at bilen er teknisk sikker og lovlig å kjøre, og du slipper denne utgiften det første året.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* STEP BY STEP PROCESS */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeUp className="order-2 lg:order-1 relative h-[600px] lg:h-[700px] rounded-lg overflow-hidden border border-black/5 group">
              <Image 
                src="/dreamcar2.avif" 
                alt="Kunde får overlevert bil" 
                fill 
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 transition-transform duration-500 ease-out translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-white gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-white/60 font-semibold">Kunde tilbakemelding</span>
                  </div>
                  <p className="italic text-base text-white/90 leading-relaxed">&quot;Veldig ryddig prosess. Fikk se tilstandsrapporten med en gang, og de ordnet finansiering på kort tid.&quot;</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp className="order-1 lg:order-2">
              <h2 className="text-xs uppercase tracking-widest font-medium text-black/40 mb-4">Prosessen</h2>
              <h3 className="font-heading text-4xl md:text-5xl font-[300] tracking-tight mb-8 text-[#111111] leading-tight">
                Slik fungerer en bilhandel hos oss
              </h3>
              <p className="text-[#666666] text-lg font-light leading-relaxed mb-16">
                Vi har fjernet friksjonen og usikkerheten fra bilkjøpet. Hos oss er prosessen ryddig, dokumentert og forutsigbar.
              </p>
              
              <div className="space-y-12">
                <div className="flex group">
                  <div className="flex-shrink-0 mr-8 relative">
                    <div className="w-px h-full bg-black/10 absolute left-1/2 top-10 -translate-x-1/2 group-last:hidden" />
                    <div className="w-10 h-10 border border-black/20 bg-[#fdfcfb] text-black flex items-center justify-center font-medium relative z-10 text-sm italic group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300">01</div>
                  </div>
                  <div className="pb-4">
                    <h4 className="text-xl font-medium mb-3 text-[#111111] transition-colors duration-300">Finn bilen og les rapporten</h4>
                    <p className="text-[#666666] font-light leading-relaxed text-sm">Alle våre annonser inneholder ærlige bilder og full tilstandsrapport. Du vet nøyaktig hva du ser på før du kontakter oss.</p>
                  </div>
                </div>
                <div className="flex group">
                  <div className="flex-shrink-0 mr-8 relative">
                    <div className="w-px h-full bg-black/10 absolute left-1/2 top-10 -translate-x-1/2 group-last:hidden" />
                    <div className="w-10 h-10 border border-black/20 bg-[#fdfcfb] text-black flex items-center justify-center font-medium relative z-10 text-sm italic group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300">02</div>
                  </div>
                  <div className="pb-4">
                    <h4 className="text-xl font-medium mb-3 text-[#111111] transition-colors duration-300">Prøvekjøring og finansiering</h4>
                    <p className="text-[#666666] font-light leading-relaxed text-sm">Kom innom for en uforpliktende prøvetur. Mens du kjører, kan vi sette opp et uforpliktende tilbud på finansiering.</p>
                  </div>
                </div>
                <div className="flex group">
                  <div className="flex-shrink-0 mr-8 relative">
                    <div className="w-10 h-10 border border-black/20 bg-[#fdfcfb] text-black flex items-center justify-center font-medium relative z-10 text-sm italic group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300">03</div>
                  </div>
                  <div className="pb-4">
                    <h4 className="text-xl font-medium mb-3 text-[#111111] transition-colors duration-300">Kontrakt og overlevering</h4>
                    <p className="text-[#666666] font-light leading-relaxed text-sm">Vi bruker standardiserte kontrakter. Bilen overleveres nyvasket, med garanti og alle papirer i orden. Vi ordner omregistreringen på stedet.</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SERVICES: FINANCING & SELL YOUR CAR */}
      <section className="py-32 bg-[#111111] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* Financing */}
            <FadeUp delay={0.1} className="bg-transparent p-12 lg:p-16 border border-white/10 flex flex-col h-full group hover:bg-white/5 hover:border-white/20 transition-all duration-500 ease-out cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
              <Banknote className="w-8 h-8 text-white/50 mb-8 group-hover:text-white group-hover:scale-110 transition-all duration-500 ease-out" />
              <h3 className="font-heading text-3xl font-[300] mb-6 relative z-10">Finansiering <span className="italic">på minuttet</span></h3>
              <p className="text-white/60 mb-10 flex-grow leading-relaxed font-light relative z-10">
                Gjennom vårt samarbeid med ledende aktører tilbyr vi svært konkurransedyktige betingelser på billån og forsikring. Vi ordner papirarbeidet mens du venter.
              </p>
              <ul className="space-y-4 mb-12 relative z-10">
                <li className="flex items-center text-sm font-light text-white/80"><CheckCircle2 className="w-4 h-4 mr-4 text-white/40" /> Lån fra 0,- egenkapital</li>
                <li className="flex items-center text-sm font-light text-white/80"><CheckCircle2 className="w-4 h-4 mr-4 text-white/40" /> Svar på få minutter</li>
              </ul>
              <Link href="/finansiering" className="inline-flex items-center text-xs uppercase tracking-widest font-medium text-white/80 group-hover:text-white transition-colors duration-300 relative z-10">
                Les mer <ArrowRight className="w-3.5 h-3.5 ml-3 transition-transform duration-300 ease-out group-hover:translate-x-2" />
              </Link>
            </FadeUp>

            {/* Sell your car */}
            <FadeUp delay={0.2} className="bg-transparent p-12 lg:p-16 border border-white/10 flex flex-col h-full group hover:bg-white/5 hover:border-white/20 transition-all duration-500 ease-out cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
              <Car className="w-8 h-8 text-white/50 mb-8 group-hover:text-white group-hover:scale-110 transition-all duration-500 ease-out" />
              <h3 className="font-heading text-3xl font-[300] mb-6 relative z-10">Vi selger bilen <span className="italic">for deg</span></h3>
              <p className="text-white/60 mb-10 flex-grow leading-relaxed font-light relative z-10">
                Å selge bil privat kan være tidkrevende. La oss ta oss av klargjøring, fotografering, annonsering, visninger og papirarbeid. Du får oppgjøret.
              </p>
              <ul className="space-y-4 mb-12 relative z-10">
                <li className="flex items-center text-sm font-light text-white/80"><CheckCircle2 className="w-4 h-4 mr-4 text-white/40" /> Vi håndterer alle henvendelser</li>
                <li className="flex items-center text-sm font-light text-white/80"><CheckCircle2 className="w-4 h-4 mr-4 text-white/40" /> Trygt og raskt oppgjør</li>
              </ul>
              <Link href="/selg-bil" className="inline-flex items-center text-xs uppercase tracking-widest font-medium text-white/80 group-hover:text-white transition-colors duration-300 relative z-10">
                Be om vurdering <ArrowRight className="w-3.5 h-3.5 ml-3 transition-transform duration-300 ease-out group-hover:translate-x-2" />
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* TEAM & LOCATION */}
      <section className="py-32 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeUp delay={0.1} className="order-2 lg:order-1 grid grid-cols-2 gap-4 group">
              <div className="space-y-4 pt-12">
                <div className="relative h-[300px] rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center">
                  <Image src="https://images.unsplash.com/photo-1588508064977-ceba9828d578?q=80&w=400&auto=format&fit=crop" alt="Vår salgssjef" fill className="object-cover opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-700 ease-out" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center mix-blend-multiply pointer-events-none">
                    <User className="w-20 h-20 text-slate-400 stroke-[1]" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-[400px] rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center">
                  <Image src="https://images.unsplash.com/photo-1588508064977-ceba9828d578?q=80&w=400&auto=format&fit=crop" alt="Vår daglige leder" fill className="object-cover opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-700 ease-out" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center mix-blend-multiply pointer-events-none">
                    <User className="w-24 h-24 text-slate-400 stroke-[1]" />
                  </div>
                </div>
              </div>
            </FadeUp>
            
            <FadeUp className="order-1 lg:order-2">
              <div className="inline-flex items-center rounded-lg border border-black/20 bg-transparent px-5 py-2 text-xs uppercase tracking-widest font-medium mb-10 text-black/60 transition-colors duration-300">
                <Users className="w-3.5 h-3.5 mr-3" />
                Lokale og tilgjengelige
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-[300] tracking-tight mb-8 text-[#111111] leading-tight">
                Folkene bak <br /><span className="italic">Dream Car</span>
              </h2>
              <p className="text-[#666666] text-lg mb-8 leading-relaxed font-light">
                Vi er ikke et ansiktsløst konsern. Vi er en lokal bedrift i Vennesla som lever av fornøyde kunder i nærområdet. For oss er et bilkjøp en tillitssak, ikke bare en transaksjon.
              </p>
              <p className="text-[#666666] text-lg mb-12 leading-relaxed font-light">
                Derfor er vi alltid tilgjengelige, også etter at kontrakten er signert. Oppstår det et problem, gjemmer vi oss ikke bak lange telefonkøer. Du ringer direkte til oss.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="group/item">
                  <h4 className="text-xs uppercase tracking-widest font-medium text-black/40 mb-3 group-hover/item:text-black/60 transition-colors duration-300">Besøk oss</h4>
                  <p className="text-sm font-medium text-[#111111] transition-colors duration-300">Bilveien 1</p>
                  <p className="text-sm text-[#666666] font-light">4700 Vennesla</p>
                </div>
                <div className="group/item">
                  <h4 className="text-xs uppercase tracking-widest font-medium text-black/40 mb-3 group-hover/item:text-black/60 transition-colors duration-300">Kontakt</h4>
                  <p className="text-sm font-medium text-[#111111]">383 60 066</p>
                  <p className="text-sm text-[#666666] font-light">post@dreamcar.no</p>
                </div>
              </div>

              <Link href="/kontakt" className="inline-flex items-center justify-center rounded-full bg-[#111111] px-10 py-4 text-xs uppercase tracking-widest font-medium text-white hover:bg-black/80 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]">
                Ta kontakt
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 border-t border-black/5 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <FadeUp className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-[300] tracking-tight mb-6 text-[#111111]">Vanlige spørsmål</h2>
            <p className="text-[#666666] font-light text-lg">Ting kundene våre ofte lurer på i forkant.</p>
          </FadeUp>
          
          <FadeUp delay={0.1} className="space-y-2">
            {[
              {
                q: "Hva dekker egentlig bruktbilgarantien?",
                a: "Vår 12-måneders garanti (levert via Fragus) dekker plutselige og uforutsette feil på motor, girkasse og drivverk. Slitedeler som bremser og dekk dekkes ikke. Du får utlevert fullstendige vilkår før du signerer."
              },
              {
                q: "Kan jeg ta med egen mekaniker for å se på bilen?",
                a: "Absolutt! Vi oppfordrer til åpenhet. Selv om bilen har ny tilstandsrapport, er du hjertelig velkommen til å ta med en fagperson, eller ta bilen til et NAF-senter for en kjøpstest før du bestemmer deg."
              },
              {
                q: "Tar dere biler i innbytte?",
                a: "Ja, vi tar gjerne din gamle bil i innbytte. Vi gir deg en rettferdig markedspris basert på bilens tilstand, som du kan bruke som egenkapital på din nye bil."
              },
              {
                q: "Hva skjer hvis jeg oppdager en feil etter kjøpet?",
                a: "Da kontakter du oss med en gang. I henhold til forbrukerkjøpsloven har du reklamasjonsrett på skjulte feil og mangler som var til stede ved overtakelse. Vi er opptatt av å løse slike saker raskt og ryddig."
              }
            ].map((faq, i) => (
              <details key={i} className="group border-b border-black/5 last:border-0 pb-6 mb-6">
                <summary className="flex justify-between items-center cursor-pointer list-none py-2">
                  <span className="text-lg font-medium pr-6 text-[#111111]">{faq.q}</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0">
                    <ChevronDown className="w-5 h-5 text-black/40" />
                  </span>
                </summary>
                <div className="text-[#666666] pt-4 font-light leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
