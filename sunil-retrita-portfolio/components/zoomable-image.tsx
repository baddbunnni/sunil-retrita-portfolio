"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Maximize2, X } from "lucide-react";
import type { GalleryImage } from "@/lib/projects";

// A thumbnail that opens the full image in a lightbox. Pass `label` to show a
// small thumbnail with a text button (for cards) instead of a full-width image.
export function ZoomableImage({ image, sizes, label, className = "" }: { image: GalleryImage; sizes: string; label?: string; className?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {label ? (
        <button type="button" onClick={() => setOpen(true)} className={`group flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[.03] p-2 text-left transition hover:border-indigo-300/40 hover:bg-indigo-300/[.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-300 ${className}`}>
          <Image src={image.src} alt="" width={image.width} height={image.height} sizes="72px" className="h-12 w-[68px] shrink-0 rounded-md object-cover" />
          <span className="inline-flex items-center gap-1.5 text-sm text-indigo-200 group-hover:text-white">{label} <Maximize2 size={13} /></span>
        </button>
      ) : (
        <button type="button" onClick={() => setOpen(true)} aria-label={`Enlarge: ${image.caption}`} className={`group relative block w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 ${className}`}>
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={sizes} className="h-auto w-full rounded-xl border border-white/10" />
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100 group-focus-visible:opacity-100"><Maximize2 size={12} /> Enlarge</span>
        </button>
      )}

      {open && (
        <div role="dialog" aria-modal="true" aria-label={image.caption} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#04060b]/95 p-4 backdrop-blur-sm sm:p-8" onClick={() => setOpen(false)}>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/5 p-2.5 text-white transition hover:bg-white/15"><X size={18} /></button>
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="100vw" loading="eager" onClick={(e) => e.stopPropagation()} className="h-auto max-h-[82vh] w-auto max-w-full rounded-lg" />
          <p className="mt-4 text-center text-sm text-slate-300">{image.caption}</p>
        </div>
      )}
    </>
  );
}
