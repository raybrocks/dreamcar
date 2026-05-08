import React from 'react';
import Image from 'next/image';

export default function Logo({ className = "w-48" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <Image
        src="/dreamcar.svg"
        alt="Dream Car Logo"
        width={1672}
        height={571}
        className="w-full h-auto"
        priority
      />
    </div>
  );
}
