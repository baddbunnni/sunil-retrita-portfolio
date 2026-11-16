export const INTRO_SESSION_KEY = "smr-portfolio-intro-seen";

// Runs in <head> before the page paints. If the intro has already played in this
// tab, or the visitor prefers reduced motion, the overlay is hidden by CSS straight
// away instead of flashing up until React loads.
export const introPrePaintScript = `try{if(sessionStorage.getItem("${INTRO_SESSION_KEY}")==="true"||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("intro-seen")}catch(e){}`;
