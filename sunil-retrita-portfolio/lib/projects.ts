export type GalleryImage = { src: string; alt: string; caption: string; width: number; height: number };

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
  demoUrl?: string;
  image?: string;
  logo?: string;
  imageAlt?: string;
  attribution?: string;
  gallery?: { title: string; variant: "tablet" | "browser"; images: GalleryImage[] };
  sections?: { title: string; body: string }[];
  results?: { title: string; columns: string[]; rows: { cells: string[]; highlight?: boolean }[]; note?: string };
  metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "proof-of-delivery-app",
    title: "Proof of Delivery — iOS App",
    category: "iOS · Business systems",
    summary: "A modernised iPad proof-of-delivery app, rebuilt in SwiftUI and now published on the App Store to support an established operational workflow.",
    detail: "Rebuilt an existing proof-of-delivery app originally created by the operations director, using SwiftUI and a refreshed interface. The workflow allows users to scan a QR code containing shipment and order references, capture the recipient’s name and signature, and submit the delivery record to the company portal through existing APIs. Delivery records include geolocation captured at the point of confirmation. The portal and APIs were pre-existing components; this work focused on the iOS client, interface and additional app functionality. The rebuilt app is now published on the App Store.",
    status: "Live on the App Store",
    stack: ["SwiftUI", "iOS", "QR scanning", "Signature capture", "Geolocation", "Existing APIs"],
    art: "bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950",
    highlights: ["Rebuilt an existing app using modern SwiftUI code and UI patterns, now published on the App Store", "QR-based shipment and order identification with delivery status selection", "Recipient name and signature capture", "Delivery submission with geolocation through existing company APIs", "Failed-upload queue so delivery records are not lost when a submission fails", "Device linking by QR code, PIN-protected admin settings and exportable troubleshooting logs"],
    confirmation: ["Confirm whether any company names or screenshots may be made public", "Confirm exact wording for the original creator attribution"],
    image: "/pod-screen-menu.jpg",
    imageAlt: "Proof of Delivery app main menu on iPad, showing delivery statuses, the Scan POD button and the failed upload queue",
    gallery: {
      title: "Screenshots",
      variant: "tablet",
      images: [
        { src: "/pod-screen-menu.jpg", alt: "Main menu with Delivered, Shipped by courier and Returned undelivered statuses, a Scan POD button and the failed upload queue", caption: "POD menu: choose a delivery status, start a scan and monitor failed uploads", width: 1800, height: 1204 },
        { src: "/pod-screen-scan.jpg", alt: "Scan POD screen with the camera view for QR scanning and a scanned items list with a Capture signature button", caption: "Scanning shipments by QR code before capturing the recipient's signature", width: 1800, height: 1204 },
        { src: "/pod-screen-config.jpg", alt: "Configuration screen with PIN-locked network settings, troubleshooting logs and device link status", caption: "Configuration: PIN-protected admin settings, device linking and troubleshooting logs", width: 1800, height: 1204 }
      ]
    },
    logo: "/fp-group-logo.png",
    attribution: "Original application concept and first version by the operations director. Rebuild and UX enhancements by Sunil Retrita.",
    externalUrl: "https://vendedinventorysolutions.com/",
    externalLabel: "Vended Inventory Solutions"
  },
  {
    slug: "gbp-usd-forecasting",
    title: "GBP/USD Forecasting — Do ML Models Beat a Naive Baseline?",
    category: "Machine learning · FinTech",
    summary: "Five supervised models and K-Means applied to 16 years of GBP/USD and UK/US interest-rate data, benchmarked against a simple “tomorrow = today” forecast.",
    detail: "Using daily GBP/USD exchange rates from 2010 to 2025 alongside the US Effective Federal Funds Rate and the UK Bank Rate, I trained Linear Regression, Decision Tree, Random Forest, Polynomial Regression and Support Vector Regression models to predict the next day’s exchange rate, with a chronological train/test split so no model could see the future. The best model scored an R² of 0.978, which looks impressive until it is compared with a naive baseline that simply predicts tomorrow’s rate will equal today’s: that baseline scores 0.982. The project became an investigation into why, and into what interest-rate data can and cannot tell us.",
    status: "MSc project · Extended analysis",
    stack: ["Python", "scikit-learn", "pandas", "Time-series evaluation", "K-Means", "Matplotlib"],
    art: "bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900",
    demoUrl: "/demo/gbp-usd",
    image: "/gbp-usd-chart.png",
    imageAlt: "Line chart of the GBP/USD daily exchange rate from 2010 to 2025, with the October 2022 to 2025 test period highlighted",
    highlights: [
      "No model beat the naive baseline: Linear Regression came closest by learning a weight of 0.998 on today’s rate and near-zero weights on interest rates",
      "Direction accuracy of about 49%, no better than a coin flip at predicting whether the rate would rise or fall",
      "Identified a distribution shift: the test period’s UK Bank Rate (2.25–5.25%) lay outside anything seen in training (0.1–2.25%), explaining why tree-based models, polynomial regression and SVR performed worst",
      "Re-framed the task to predict next-day returns, removing the “copy today’s price” shortcut; every model scored a negative R²",
      "K-Means (k = 3, chosen by silhouette score) recovered three monetary-policy regimes: near-zero rates, US tightening ahead of the UK, and the post-2022 high-rate period"
    ],
    results: {
      title: "Results on the test period (Oct 2022 – Dec 2025)",
      columns: ["Model", "MAE", "R²", "Direction"],
      rows: [
        { cells: ["Naive baseline (tomorrow = today)", "0.0048", "0.982", "—"], highlight: true },
        { cells: ["Linear Regression", "0.0054", "0.978", "49%"] },
        { cells: ["Random Forest", "0.0059", "0.973", "48%"] },
        { cells: ["Decision Tree", "0.0084", "0.949", "51%"] },
        { cells: ["Polynomial Regression", "0.0308", "0.541", "49%"] },
        { cells: ["Support Vector Regression", "0.0451", "−0.185", "51%"] }
      ],
      note: "MAE is in exchange-rate units (0.0048 ≈ half a cent). Direction is the share of days on which the model correctly predicted whether the rate would rise or fall."
    },
    sections: [
      { title: "What I learned", body: "A high R² can be meaningless for time-series data: when tomorrow’s value is almost always close to today’s, any model that copies today’s value scores well. Comparing against a naive baseline, checking direction accuracy and watching for distribution shift between training and test periods tell a far more honest story. The result is consistent with the weak-form efficient market hypothesis: daily interest-rate levels alone carry no usable signal for next-day exchange-rate moves." },
      { title: "Next steps", body: "Walk-forward validation instead of a single split, lagged returns and macroeconomic surprise features such as inflation releases and central bank decision days, and separate models for each interest-rate regime found by K-Means." }
    ],
    metrics: [
      { label: "Data", value: "4,041 trading days, 2010–2025" },
      { label: "Models", value: "5 supervised + K-Means" },
      { label: "Best R²", value: "0.982 (the naive baseline)" }
    ],
    confirmation: []
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
    gallery: {
      title: "Website design",
      variant: "browser",
      images: [
        { src: "/futurebite-design-1.jpg", alt: "FutureBite homepage hero: Your future could make a big impact, with food scientists in a lab", caption: "Homepage hero introducing careers in food manufacturing", width: 2000, height: 966 },
        { src: "/futurebite-design-2.jpg", alt: "Learning hub cards: Food manufacturing explained, 5 skills you're already building, Introduction event", caption: "Learning hub content about the industry", width: 2000, height: 1110 },
        { src: "/futurebite-design-3.jpg", alt: "Employee stories from an automation engineer and a maintenance apprentice", caption: "Employee stories showing different career paths", width: 2000, height: 1082 },
        { src: "/futurebite-design-4.jpg", alt: "Opportunities search with interest and location filters and example roles", caption: "Opportunities search for apprenticeships, graduate roles and placements", width: 2000, height: 1025 },
        { src: "/futurebite-design-5.jpg", alt: "Career routes: apprenticeships, university and graduate routes, college and technical routes", caption: "Routes into the industry for different starting points", width: 2000, height: 1068 }
      ]
    },
    externalUrl: "https://hackathonmondelez.vercel.app/",
    externalLabel: "Explore FutureBite prototype"
  }
];
