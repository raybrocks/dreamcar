'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import Logo from '@/components/Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#111111] text-slate-50 backdrop-blur-md supports-[backdrop-filter]:bg-[#111111] transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar - Trust & Contact */}
        <div className="hidden md:flex items-center justify-between py-2.5 border-b border-white/5 text-xs uppercase tracking-widest text-slate-400 font-medium">
          <div className="flex items-center space-x-8">
            <span className="flex items-center hover:text-white transition-colors cursor-default"><MapPin className="w-3 h-3 mr-2" /> Vennesla / Kristiansand</span>
            <span className="flex items-center text-slate-300">12 mnd garanti på alle biler</span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="tel:+4799999999" className="flex items-center hover:text-white transition-colors">
              <Phone className="w-3 h-3 mr-2" /> +47 99 99 99 99
            </a>
            <span>Åpent i dag: 09:00 - 17:00</span>
          </div>
        </div>

        {/* Logo Row */}
        <div className="flex justify-center items-center py-5 md:py-8 relative">
          <Link href="/" className="flex items-center group" onClick={() => setIsMenuOpen(false)}>
            <Logo className="w-40 md:w-56 transition-transform duration-500 ease-out group-hover:scale-105" />
          </Link>
          
          <div className="md:hidden absolute right-0 flex items-center">
            <button 
              className="p-2 text-slate-50 flex items-center justify-center -mr-2 transition-transform active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
            </button>
          </div>
        </div>

        {/* Menu & CTA Row (Desktop) */}
        <div className="hidden md:flex items-center justify-center pb-6 relative">
          <nav className="flex items-center space-x-10">
            <Link href="/biler" className="text-xs uppercase tracking-[0.15em] font-medium text-slate-300 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-white after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out">Biler til salgs</Link>
            <Link href="/selg-bil" className="text-xs uppercase tracking-[0.15em] font-medium text-slate-300 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-white after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out">Selg bilen din</Link>
            <Link href="/finansiering" className="text-xs uppercase tracking-[0.15em] font-medium text-slate-300 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-white after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out">Finansiering & Forsikring</Link>
            <Link href="/bildeler" className="text-xs uppercase tracking-[0.15em] font-medium text-slate-300 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-white after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out">Bildeler</Link>
            <Link href="/om-oss" className="text-xs uppercase tracking-[0.15em] font-medium text-slate-300 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-white after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 after:ease-out">Om oss</Link>
          </nav>

          <div className="absolute right-0">
            <Link href="/kontakt" className="inline-flex items-center justify-center rounded-none border border-white/20 bg-transparent px-8 py-2.5 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-white hover:text-black transition-all duration-300 ease-out">
              Kontakt oss
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-8 animate-in slide-in-from-top-4 fade-in duration-300">
            <nav className="flex flex-col space-y-6 items-center pt-4">
              <Link href="/biler" className="text-sm uppercase tracking-[0.15em] font-medium text-slate-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Biler til salgs</Link>
              <Link href="/selg-bil" className="text-sm uppercase tracking-[0.15em] font-medium text-slate-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Selg bilen din</Link>
              <Link href="/finansiering" className="text-sm uppercase tracking-[0.15em] font-medium text-slate-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Finansiering & Forsikring</Link>
              <Link href="/bildeler" className="text-sm uppercase tracking-[0.15em] font-medium text-slate-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Bildeler</Link>
              <Link href="/om-oss" className="text-sm uppercase tracking-[0.15em] font-medium text-slate-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Om oss</Link>
              <div className="pt-8 border-t border-white/5 w-full flex justify-center">
                <Link href="/kontakt" className="inline-flex items-center justify-center rounded-none border border-white/20 bg-transparent px-10 py-3 text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-white hover:text-black transition-all duration-300 ease-out w-full max-w-[250px]" onClick={() => setIsMenuOpen(false)}>
                  Kontakt oss
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
