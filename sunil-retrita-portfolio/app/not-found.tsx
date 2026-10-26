import Link from "next/link";
export default function NotFound() {
  return <section className="section"><div className="container"><p className="section-label">404</p><h1 className="section-title">Page not found.</h1><p className="section-copy">That page doesn’t exist or may have moved.</p><Link className="btn-primary mt-6" href="/">Back home</Link></div></section>;
}
