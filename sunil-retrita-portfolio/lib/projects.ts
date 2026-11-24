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
  photo?: GalleryImage;
  certificate?: GalleryImage;
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
    slug: "bcu-postgraduate-society-website",
    title: "BCU Postgraduate Society — Website",
    category: "Web platform · Student community",
    summary: "The digital home of Birmingham City University's Postgraduate Society, with opportunities, events and volunteer roles, designed and built while serving as society president.",
    detail: "As president of the BCU Postgraduate Society, I designed and built the society’s website to give postgraduate students one place to find opportunities, events and ways to get involved. It is built with Next.js, TypeScript and Tailwind CSS and hosted free on Vercel, with no database, CMS or paid services. All content lives in simple data files, so committee volunteers without coding experience can add opportunities, events and roles by following a written content guide, which keeps the site maintainable after committee handovers.",
    status: "Live · Built as society president",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Static generation", "SEO"],
    art: "bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950",
    image: "/bcu-pg-home.jpg",
    imageAlt: "BCU Postgraduate Society website homepage with a list of opportunities closing soon",
    highlights: [
      "Opportunities board with search, type and working-style filters, sorted by soonest deadline",
      "“Closing soon”, “New” and expired states calculated automatically from dates and refreshed hourly, so nobody has to update them by hand",
      "Build-time validation of dates, links and IDs, so a content mistake stops a preview build instead of breaking the live site",
      "Volunteer and committee roles with applications sent to the society inbox, without needing a server or form service",
      "Events with Add to Google Calendar links and structured event data for search engines",
      "Written content guide and architecture notes so future committees can maintain the site"
    ],
    gallery: {
      title: "Screenshots",
      variant: "browser",
      images: [
        { src: "/bcu-pg-home.jpg", alt: "Homepage with the society's mission, a closing-soon board and key statistics", caption: "Homepage with a live board of opportunities closing soon", width: 1440, height: 900 },
        { src: "/bcu-pg-opportunities.jpg", alt: "Opportunities page with search, filters and graduate job cards sorted by deadline", caption: "Opportunities board with search and filters, soonest deadline first", width: 1440, height: 900 },
        { src: "/bcu-pg-opportunity.jpg", alt: "Opportunity page for a data science graduate scheme showing deadline, location, pay and relevant courses", caption: "Opportunity page with deadline, pay, relevant courses and apply link", width: 1440, height: 900 },
        { src: "/bcu-pg-get-involved.jpg", alt: "Get involved page explaining the benefits of volunteering with the society", caption: "Get involved: volunteer roles that build CV experience", width: 1440, height: 900 }
      ]
    },
    confirmation: [],
    externalUrl: "https://bcupgsociety.vercel.app/",
    externalLabel: "Visit the society website"
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
    slug: "subscription-churn-dashboard",
    title: "Subscription Churn Dashboard — Who Is More Likely to Cancel?",
    category: "Data visualisation · Customer analytics",
    summary: "An interactive Streamlit dashboard exploring 243,787 streaming subscribers to find which customers are most likely to cancel, built as a five-person MSc group project.",
    detail: "The dashboard answers one question, “who is more likely to cancel their subscription?”, across 243,787 customers of a streaming service. It opens with an overview that ranks every factor by how strongly it separates customers who stay from those who leave, then lets the viewer drill into five topics: content preferences, plans and pricing, engagement, account age and customer experience. A risk-profile page combines factors from every section to find the highest- and lowest-risk customer groups. I was responsible for the account-age section, which turned out to be the strongest single factor in the data.",
    status: "MSc group project · Live dashboard",
    stack: ["Python", "Streamlit", "pandas", "Altair", "Data visualisation", "Git & GitHub"],
    art: "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900",
    image: "/churn-card.jpg",
    imageAlt: "Account age section of the churn dashboard: a bar chart of cancellation rate by account age and a heatmap of account age by subscription plan",
    attribution: "Group project for CMP7227 Data Visualisation at Birmingham City University. Each team member owned one topic section; I built the account-age section.",
    highlights: [
      "Account age separates customers more than any other factor: new customers (1–12 months) cancel at 31.2% against 9.0% for customers of 91+ months, a 22.1 percentage-point gap",
      "Cancellation falls with account age on every subscription plan, and Basic has the highest rate in all six age bands",
      "Combining account age with viewing habits shows new, light viewers cancel at 37.0% compared with 6.2% for long-standing heavy viewers",
      "Linked, clickable charts: selecting a bar highlights the matching row of a heatmap, and an engagement toggle filters every chart in the section",
      "One shared calculation and colour rule across all sections: orange above the all-customer rate, blue below, on a common 0–40% scale so sections can be compared fairly",
      "Data checks run every time the app loads, and it refuses to start if IDs are duplicated, values are missing or the churn field is invalid"
    ],
    gallery: {
      title: "Screenshots",
      variant: "browser",
      images: [
        { src: "/churn-overview.jpg", alt: "Overview page with customer totals, an 18.1% cancellation rate and a chart ranking eleven factors by how far apart their groups’ cancellation rates are", caption: "Overview: every factor ranked by how strongly it separates customers", width: 1500, height: 1420 },
        { src: "/churn-account-age.jpg", alt: "Account age section with an engagement toggle, a bar chart of cancellation rate by account age and a heatmap of account age by subscription plan", caption: "My section: cancellation by account age, by plan and by engagement", width: 1500, height: 1380 },
        { src: "/churn-risk-profiles.jpg", alt: "Risk profiles page where the viewer combines factors from every section to build a customer profile and compare it with all customers", caption: "Risk profiles: combine factors to find the highest-risk customers", width: 1500, height: 1190 }
      ]
    },
    results: {
      title: "Cancellation rate by account age",
      columns: ["Account age (months)", "Customers", "Cancellation rate"],
      rows: [
        { cells: ["1–12", "24.1k", "31.2%"], highlight: true },
        { cells: ["13–24", "24.7k", "28.3%"] },
        { cells: ["25–36", "24.8k", "24.7%"] },
        { cells: ["37–60", "49.1k", "19.7%"] },
        { cells: ["61–90", "61.6k", "13.8%"] },
        { cells: ["91+", "59.6k", "9.0%"] }
      ],
      note: "The all-customer cancellation rate is 18.1%. Rates are compared rather than counts, because larger groups always contain more cancellations."
    },
    sections: [
      { title: "What I put into practice", body: "Cleaning and validating a large dataset with pandas, grouping continuous values into meaningful bands, and calculating comparable rates against a single benchmark. On the design side: choosing the right chart for each question, honest scales with a zero baseline, colour-blind-safe colours, showing group sizes beside every percentage so small groups are not over-read, and linked views that let a viewer move from the big picture into detail without leaving the page." },
      { title: "Reading the results carefully", body: "The data is a single snapshot with no dates, so every result shows association, not cause. Long-standing customers are by definition the ones who have not yet left (survivorship), and a pattern in one chart can change once another factor is held constant (Simpson’s paradox), which is why the heatmaps and the risk-profile page compare factors together. The very even distributions also suggest a synthetic dataset, so the findings may not transfer directly to a real streaming service." },
      { title: "Skills gained", body: "Building and deploying an interactive web dashboard in Python with Streamlit and Altair, working to shared standards in a team so five people’s sections read as one product, version control with Git and GitHub, and presenting findings in plain language for a non-technical audience." }
    ],
    metrics: [
      { label: "Data", value: "243,787 customers" },
      { label: "Overall cancellation rate", value: "18.1%" },
      { label: "Largest gap", value: "22.1 pp, by account age" },
      { label: "Team", value: "5 members, one section each" }
    ],
    confirmation: [],
    externalUrl: "https://churn-dashboard-v2-4kdefa3nnqfcxtr8daw3id.streamlit.app/",
    externalLabel: "Open the live dashboard (may take 30 seconds to start)"
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
    photo: { src: "/futurebite-team9-third-place.jpg", alt: "Team 9 with the hackathon judges after being awarded third place", caption: "Team 9 receiving third place at the FutureBite hackathon awards", width: 626, height: 412 },
    certificate: { src: "/futurebite-certificate.jpg", alt: "Certificate of Achievement from Birmingham City University and Mondelēz International presented to Sunil Mangtani Retrita for securing third place in the FutureBite Hackathon", caption: "Certificate of Achievement for third place", width: 1754, height: 1241 },
    gallery: {
      title: "Website design",
      variant: "browser",
      images: [
        { src: "/futurebite-design-1.jpg", alt: "FutureBite homepage hero: Your future could make a big impact, with food scientists in a lab", caption: "Homepage hero introducing careers in food manufacturing", width: 2000, height: 966 },
        { src: "/futurebite-design-4.jpg", alt: "Learning hub cards: Food manufacturing explained, 5 skills you're already building, Introduction event", caption: "Learning hub content about the industry", width: 2000, height: 1025 },
        { src: "/futurebite-design-2.jpg", alt: "Employee stories from an automation engineer and a maintenance apprentice", caption: "Employee stories showing different career paths", width: 2000, height: 1110 },
        { src: "/futurebite-design-5.jpg", alt: "Opportunities search with interest and location filters and example roles", caption: "Opportunities search for apprenticeships, graduate roles and placements", width: 2000, height: 1068 },
        { src: "/futurebite-design-3.jpg", alt: "Career routes: apprenticeships, university and graduate routes, college and technical routes", caption: "Routes into the industry for different starting points", width: 2000, height: 1082 }
      ]
    },
    externalUrl: "https://hackathonmondelez.vercel.app/",
    externalLabel: "Explore FutureBite prototype"
  }
];
