import React from 'react';
import { Car } from 'lucide-react';

export default function Biler() {
  return (
    <div className="container mx-auto px-4 py-20 lg:py-32 max-w-7xl flex flex-col min-h-[80vh]">
      <div className="text-center mb-16">
        <h1 className="font-heading text-5xl md:text-6xl lg:text-[70px] font-[300] tracking-tight mb-8 text-[#111111] leading-tight">
          Biler til <span className="italic">salgs</span>
        </h1>
        <p className="text-lg text-[#666666] font-light max-w-2xl mx-auto leading-relaxed">
          Se vårt utvalg av kvalitetssikrede biler. Finner du ikke det du leter etter? Ta kontakt, vi finner drømmebilen for deg.
        </p>
      </div>

      {/* Iframe Container */}
      <div className="w-full relative bg-transparent border border-black/10 overflow-hidden min-h-[800px] flex-grow">
        <iframe 
          className="Z8YsjS absolute inset-0 w-full h-full border-0 z-10" 
          title="Våre biler" 
          name="htmlComp-iframe" 
          allow="fullscreen" 
          src="https://www-dreamcar-as.filesusr.com/html/8c6147_269b1ef95cbca596c4ac80017d5d99bc.html"
        ></iframe>
      </div>
    </div>
  );
}
