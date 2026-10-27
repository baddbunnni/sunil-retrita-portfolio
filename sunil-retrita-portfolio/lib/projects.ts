export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  detail: string;
  status: string;
  stack: string[];
  art: string;
  highlights: string[];
  confirmation: string[];
  externalUrl?: string;
  externalLabel?: string;
  image?: string;
  logo?: string;
  imageAlt?: string;
  attribution?: string;
};

export const projects: Project[] = [
  {
    slug: "proof-of-delivery-app",
    title: "Proof of Delivery — iOS App",
    category: "iOS · Business systems",
    summary: "A modernised iOS proof-of-delivery experience, rebuilt in SwiftUI to improve the user experience and extend an established operational workflow.",
    detail: "Rebuilt an existing proof-of-delivery app originally created by the operations director, using SwiftUI and a refreshed interface. The workflow allows users to scan a QR code containing shipment and order references, capture the recipient’s name and signature, and submit the delivery record to the company portal through existing APIs. Delivery records include geolocation captured at the point of confirmation. The portal and APIs were pre-existing components; this work focused on the iOS client, interface and additional app functionality.",
    status: "Developed in a business setting",
    stack: ["SwiftUI", "iOS", "QR scanning", "Signature capture", "Geolocation", "Existing APIs"],
    art: "bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950",
    highlights: ["Rebuilt an existing app using modern SwiftUI code and UI patterns", "QR-based shipment and order identification", "Recipient name and signature capture", "Delivery submission with geolocation through existing company APIs"],
    confirmation: ["Confirm whether any company names or screenshots may be made public", "Confirm exact wording for the original creator attribution"],
    image: "/pod-concept.jpg",
    imageAlt: "Illustrative iPad proof-of-delivery interface concept",
    logo: "/fp-group-logo.png",
    attribution: "Original application concept and first version by the operations director. Rebuild and UX enhancements by Sunil Retrita.",
    externalUrl: "https://vendedinventorysolutions.com/",
    externalLabel: "Vended Inventory Solutions"
  },
  {
    slug: "toke-taxi-app",
    title: "Toke — Taxi Booking Platform",
    category: "Product concept · Mobility",
    summary: "A taxi-booking platform concept for licensed taxis in Las Palmas, designed with the potential to expand across Gran Canaria.",
    detail: "Toke is a product concept exploring a ride-booking experience for licensed taxi services in Las Palmas, with a longer-term ambition to serve the wider island. The proposed experience brings passenger booking and driver workflows together, while a fare-calculation concept accounts for meter-relevant inputs such as journey distance, elapsed time and applicable surcharges. The product remains in development; this portfolio describes the intended product direction rather than claiming a fully launched service or implemented payment processing.",
    status: "Concept in development",
    stack: ["SwiftUI", "Supabase", "Vercel", "Fare calculation"],
    art: "bg-gradient-to-br from-blue-950 via-slate-900 to-violet-950",
    image: "/toke-concept.jpg",
    imageAlt: "Illustrative taxi booking app concept visual",
    logo: "/toke-logo.png",
    highlights: ["Designed around licensed taxi services in Las Palmas", "Passenger booking and driver workflows are part of the product concept", "Fare-calculation logic considers time, distance and applicable surcharges", "Website available; the app is not currently showcased as a production release"],
    confirmation: ["Confirm which product flows are implemented versus planned", "Confirm any technologies you want to disclose publicly"],
    externalUrl: "https://tokelaspalmas.com/es",
    externalLabel: "Visit Toke website"
  },
  {
    slug: "futurebite-hackathon",
    title: "FutureBite Hackathon",
    category: "Hackathon · Career discovery",
    summary: "A digital destination concept designed to inspire young people to explore careers in food engineering and manufacturing.",
    detail: "Created as part of a university hackathon challenge connected with Mondelēz and the Food and Drink Federation, FutureBite explored how to make food engineering careers more visible, approachable and engaging. The team developed a Career Navigator concept featuring a career-discovery quiz, clearer career pathways and ideas such as taster sessions, day-in-the-life content, testimonials and mentoring. The prototype website and presentation communicated the experience; this was a digital product and content concept, not an AI model implementation.",
    status: "Hackathon project · Third place",
    stack: ["Figma", "Canva", "Career discovery", "UX research", "Prototype design"],
    art: "bg-gradient-to-br from-violet-950 via-slate-900 to-fuchsia-950",
    image: "/futurebite-leaflet.jpg",
    imageAlt: "FutureBite and Mondelēz hackathon promotional leaflet",
    highlights: ["Career Navigator concept for food engineering and manufacturing", "Career discovery quiz and jargon-free career pathway content", "Explored taster sessions, testimonials, mentoring and day-in-the-life content", "Team placed third in the hackathon"],
    confirmation: ["Check with teammates before publishing any shared or restricted materials"],
    externalUrl: "https://hackathonmondelez.vercel.app/",
    externalLabel: "Explore FutureBite prototype"
  }
];
