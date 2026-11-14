"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import type { GalleryImage } from "@/lib/projects";

function Frame({ variant, children }: { variant: "tablet" | "browser"; children: React.ReactNode }) {
  if (variant === "tablet") {
    return <div className="rounded-[18px] border border-white/15 bg-[#05070d] p-2 shadow-2xl shadow-black/40">{children}</div>;
  }
  return (
    <div className="overflow-hidden rounded-xl border border-white/15 bg-[#05070d] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2"><span className="h-2 w-2 rounded-full bg-white/20" /><span className="h-2 w-2 rounded-full bg-white/20" /><span className="h-2 w-2 rounded-full bg-white/20" /></div>
      {children}
    </div>
  );
}

export function ScreenshotGallery({ title, images, variant }: { title: string; images: GalleryImage[]; variant: "tablet" | "browser" }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((delta: number) => setOpen((i) => (i === null ? i : (i + delta + images.length) % images.length)), [images.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, close, step]);

  const tile = (image: GalleryImage, index: number, sizes: string) => (
    <figure key={image.src}>
      <button type="button" onClick={() => setOpen(index)} aria-label={`Enlarge screenshot: ${image.caption}`} className="group relative block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300">
        <Frame variant={variant}>
          <div className={`relative overflow-hidden ${variant === "tablet" ? "rounded-[11px]" : ""}`}>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={sizes} className="h-auto w-full transition duration-500 group-hover:scale-[1.015]" />
            <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100 group-focus-visible:opacity-100"><Maximize2 size={12} /> Enlarge</span>
          </div>
        </Frame>
      </button>
      <figcaption className="mt-3 text-center text-xs leading-5 text-slate-400">{image.caption}</figcaption>
    </figure>
  );

  return (
    <section className="panel mt-7 p-5 sm:p-7" aria-label={title}>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-1 text-xs text-slate-500">Select a screenshot to enlarge it.</p>
      <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{images.map((image, i) => tile(image, i, "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"))}</div>

      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label={images[open].caption} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#04060b]/95 p-4 backdrop-blur-sm sm:p-8" onClick={close}>
          <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/5 p-2.5 text-white transition hover:bg-white/15"><X size={18} /></button>
          <div className="relative flex w-full max-w-6xl items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image src={images[open].src} alt={images[open].alt} width={images[open].width} height={images[open].height} sizes="100vw" loading="eager" className="h-auto max-h-[80vh] w-auto max-w-full rounded-lg" />
          </div>
          <div className="mt-4 flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
            {images.length > 1 && <button type="button" onClick={() => step(-1)} aria-label="Previous screenshot" className="rounded-full border border-white/20 bg-white/5 p-2.5 text-white transition hover:bg-white/15"><ChevronLeft size={18} /></button>}
            <p className="text-center text-sm text-slate-300">{images[open].caption} <span className="text-slate-500">· {open + 1} / {images.length}</span></p>
            {images.length > 1 && <button type="button" onClick={() => step(1)} aria-label="Next screenshot" className="rounded-full border border-white/20 bg-white/5 p-2.5 text-white transition hover:bg-white/15"><ChevronRight size={18} /></button>}
          </div>
        </div>
      )}
    </section>
  );
}
