import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, FileText, Wrench, ArrowRight, CheckCircle2, Star, ChevronDown, Car, Banknote, MapPin, Users } from 'lucide-react';

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
          <div className="inline-flex items-center rounded-none border border-white/20 bg-transparent px-5 py-2 text-xs uppercase tracking-[0.2em] font-medium text-white mb-10 backdrop-blur-md">
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
            <Link href="/biler" className="w-full sm:w-auto inline-flex items-center justify-center rounded-none bg-white px-10 py-4 text-[12px] uppercase tracking-[0.15em] font-medium text-black hover:bg-slate-200 transition-colors">
              Se våre biler
              <ArrowRight className="w-3.5 h-3.5 ml-3" />
            </Link>
            <Link href="/selg-bil" className="w-full sm:w-auto inline-flex items-center justify-center rounded-none border border-white/20 bg-transparent px-10 py-4 text-[12px] uppercase tracking-[0.15em] font-medium text-white hover:bg-white/10 transition-colors">
              Vi selger bilen for deg
            </Link>
          </div>
          
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
        </div>
      </section>

      {/* WHY CHOOSE US / TRUST SECTION */}
      <section className="py-32 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-black/40 mb-4">Om oss</h2>
            <h3 className="font-heading text-4xl md:text-5xl font-[300] tracking-tight mb-8 text-[#111111]">
              Hvorfor velge Dream Car?
            </h3>
            <p className="text-[#666666] text-lg font-light leading-relaxed">
              Å kjøpe privat sparer deg kanskje for noen tusenlapper der og da, men kan koste deg dyrt hvis noe går galt. Slik sikrer vi deg et trygt bilhold.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-transparent p-10 relative overflow-hidden group">
              <div className="absolute inset-0 border border-black/5 rounded-none group-hover:border-black/20 transition-colors duration-500" />
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full" />
              <div className="w-12 h-12 flex items-center justify-center mb-10 border border-black/10 text-black">
                <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h4 className="text-xl font-medium mb-4 text-[#111111]">12 måneders garanti</h4>
              <p className="text-[#666666] font-light leading-relaxed text-sm">
                Gjennom vår partner Fragus tilbyr vi omfattende bruktbilgaranti. Skulle noe uforutsett skje med motor eller drivverk, er du dekket.
              </p>
            </div>
            
            <div className="bg-transparent p-10 relative overflow-hidden group">
              <div className="absolute inset-0 border border-black/5 rounded-none group-hover:border-black/20 transition-colors duration-500" />
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full" />
              <div className="w-12 h-12 flex items-center justify-center mb-10 border border-black/10 text-black">
                <FileText className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h4 className="text-xl font-medium mb-4 text-[#111111]">Tilstandsrapport</h4>
              <p className="text-[#666666] font-light leading-relaxed text-sm">
                Vi stoler ikke bare på magefølelsen. Alle biler gjennomgår en grundig sjekk av uavhengig verksted før de legges ut for salg. Du får fullt innsyn.
              </p>
            </div>
            
            <div className="bg-transparent p-10 relative overflow-hidden group">
              <div className="absolute inset-0 border border-black/5 rounded-none group-hover:border-black/20 transition-colors duration-500" />
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full" />
              <div className="w-12 h-12 flex items-center justify-center mb-10 border border-black/10 text-black">
                <Wrench className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h4 className="text-xl font-medium mb-4 text-[#111111]">Ny EU-kontroll</h4>
              <p className="text-[#666666] font-light leading-relaxed text-sm">
                Vi leverer bilene med fersk EU-kontroll. Det betyr at bilen er teknisk sikker og lovlig å kjøre, og du slipper denne utgiften det første året.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEP BY STEP PROCESS */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative h-[600px] lg:h-[700px] rounded-none overflow-hidden border border-black/5">
              <Image 
                src="/dreamcar2.avif" 
                alt="Kunde får overlevert bil" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-none border border-white/20">
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
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-black/40 mb-4">Prosessen</h2>
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
                    <h4 className="text-xl font-medium mb-3 text-[#111111]">Finn bilen og les rapporten</h4>
                    <p className="text-[#666666] font-light leading-relaxed text-sm">Alle våre annonser inneholder ærlige bilder og full tilstandsrapport. Du vet nøyaktig hva du ser på før du kontakter oss.</p>
                  </div>
                </div>
                <div className="flex group">
                  <div className="flex-shrink-0 mr-8 relative">
                    <div className="w-px h-full bg-black/10 absolute left-1/2 top-10 -translate-x-1/2 group-last:hidden" />
                    <div className="w-10 h-10 border border-black/20 bg-[#fdfcfb] text-black flex items-center justify-center font-medium relative z-10 text-sm italic group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300">02</div>
                  </div>
                  <div className="pb-4">
                    <h4 className="text-xl font-medium mb-3 text-[#111111]">Prøvekjøring og finansiering</h4>
                    <p className="text-[#666666] font-light leading-relaxed text-sm">Kom innom for en uforpliktende prøvetur. Mens du kjører, kan vi sette opp et uforpliktende tilbud på finansiering.</p>
                  </div>
                </div>
                <div className="flex group">
                  <div className="flex-shrink-0 mr-8 relative">
                    <div className="w-10 h-10 border border-black/20 bg-[#fdfcfb] text-black flex items-center justify-center font-medium relative z-10 text-sm italic group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300">03</div>
                  </div>
                  <div className="pb-4">
                    <h4 className="text-xl font-medium mb-3 text-[#111111]">Kontrakt og overlevering</h4>
                    <p className="text-[#666666] font-light leading-relaxed text-sm">Vi bruker standardiserte kontrakter. Bilen overleveres nyvasket, med garanti og alle papirer i orden. Vi ordner omregistreringen på stedet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES: FINANCING & SELL YOUR CAR */}
      <section className="py-32 bg-[#111111] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* Financing */}
            <div className="bg-transparent p-12 lg:p-16 border border-white/10 flex flex-col h-full group hover:bg-white/5 transition-colors duration-500">
              <Banknote className="w-8 h-8 text-white/50 mb-8" />
              <h3 className="font-heading text-3xl font-[300] mb-6">Finansiering <span className="italic">på minuttet</span></h3>
              <p className="text-white/60 mb-10 flex-grow leading-relaxed font-light">
                Gjennom vårt samarbeid med ledende aktører tilbyr vi svært konkurransedyktige betingelser på billån og forsikring. Vi ordner papirarbeidet mens du venter.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center text-sm font-light text-white/80"><CheckCircle2 className="w-4 h-4 mr-4 text-white/40" /> Lån fra 0,- egenkapital</li>
                <li className="flex items-center text-sm font-light text-white/80"><CheckCircle2 className="w-4 h-4 mr-4 text-white/40" /> Svar på få minutter</li>
              </ul>
              <Link href="/finansiering" className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-medium text-white hover:text-white/70 transition-colors">
                Les mer <ArrowRight className="w-3.5 h-3.5 ml-3" />
              </Link>
            </div>

            {/* Sell your car */}
            <div className="bg-transparent p-12 lg:p-16 border border-white/10 flex flex-col h-full group hover:bg-white/5 transition-colors duration-500">
              <Car className="w-8 h-8 text-white/50 mb-8" />
              <h3 className="font-heading text-3xl font-[300] mb-6">Vi selger bilen <span className="italic">for deg</span></h3>
              <p className="text-white/60 mb-10 flex-grow leading-relaxed font-light">
                Å selge bil privat kan være tidkrevende. La oss ta oss av klargjøring, fotografering, annonsering, visninger og papirarbeid. Du får oppgjøret.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center text-sm font-light text-white/80"><CheckCircle2 className="w-4 h-4 mr-4 text-white/40" /> Vi håndterer alle henvendelser</li>
                <li className="flex items-center text-sm font-light text-white/80"><CheckCircle2 className="w-4 h-4 mr-4 text-white/40" /> Trygt og raskt oppgjør</li>
              </ul>
              <Link href="/selg-bil" className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-medium text-white hover:text-white/70 transition-colors">
                Be om vurdering <ArrowRight className="w-3.5 h-3.5 ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM & LOCATION */}
      <section className="py-32 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="relative h-[300px] rounded-none overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <Image src="https://picsum.photos/seed/dealership1/400/600" alt="Våre lokaler" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-[400px] rounded-none overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <Image src="https://picsum.photos/seed/team/400/600" alt="Vårt team" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center rounded-none border border-black/20 bg-transparent px-5 py-2 text-xs uppercase tracking-[0.2em] font-medium mb-10">
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
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-black/40 mb-3">Besøk oss</h4>
                  <p className="text-sm font-medium text-[#111111]">Bilveien 1</p>
                  <p className="text-sm text-[#666666] font-light">4700 Vennesla</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-black/40 mb-3">Kontakt</h4>
                  <p className="text-sm font-medium text-[#111111]">383 60 066</p>
                  <p className="text-sm text-[#666666] font-light">post@dreamcar.no</p>
                </div>
              </div>

              <Link href="/kontakt" className="inline-flex items-center justify-center rounded-none bg-[#111111] px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-black/80 transition-colors">
                Ta kontakt
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 border-t border-black/5 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-[300] tracking-tight mb-6 text-[#111111]">Vanlige spørsmål</h2>
            <p className="text-[#666666] font-light text-lg">Ting kundene våre ofte lurer på i forkant.</p>
          </div>
          
          <div className="space-y-2">
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
          </div>
        </div>
      </section>
    </div>
  );
}
