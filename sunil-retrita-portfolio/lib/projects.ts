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
};

export const projects: Project[] = [
  {
    slug: "proof-of-delivery-app",
    title: "Proof of Delivery App",
    category: "Software development",
    summary: "An iOS proof-of-delivery app developed in a business setting as part of the user's Business Solutions Technician role.",
    detail: "A practical software project focused on digitising a business workflow. The exact feature set, architecture, rollout status and measurable impact should be confirmed before this page is published.",
    status: "Details to confirm",
    stack: ["SwiftUI", "iOS", "APIs — confirm"],
    art: "bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950",
    highlights: ["iOS app development using SwiftUI", "Built in a real business context", "Further technical details to confirm"],
    confirmation: ["Exact features and user workflow", "Whether it is live and who uses it", "API/backend technologies and your precise contribution", "Any measured time saved or error reduction"]
  },
  {
    slug: "toke-taxi-app",
    title: "Toke — Taxi Booking App",
    category: "Product development",
    summary: "A taxi-booking app concept for Las Palmas, with work spanning iOS, backend services and payments.",
    detail: "A product concept intended to connect passengers with licensed taxi drivers and support pre-booking. The planned technology has included SwiftUI, Supabase, Stripe and Vercel; implementation status and shipped functionality must be confirmed.",
    status: "Project in development — confirm current status",
    stack: ["SwiftUI", "Supabase", "Stripe", "Vercel"],
    art: "bg-gradient-to-br from-blue-950 via-slate-900 to-violet-950",
    highlights: ["Taxi-booking product concept for Las Palmas", "Pre-booking and licensed-driver workflow are part of the intended model", "Payments and backend implementation details to confirm"],
    confirmation: ["Current development status and working demo", "Which flows are implemented versus planned", "Payment integration status", "Your exact contribution and any collaborators"]
  },
  {
    slug: "ai-business-challenge",
    title: "AI Business Challenge",
    category: "AI & innovation",
    summary: "A university hackathon project exploring an AI-based solution to a real-world business problem.",
    detail: "A university hackathon project presented using a Canva presentation and a Figma website. The problem statement, solution design, team roles, technical implementation and outcomes should be added from the final submission.",
    status: "Details to confirm",
    stack: ["AI — approach to confirm", "Figma", "Canva"],
    art: "bg-gradient-to-br from-violet-950 via-slate-900 to-fuchsia-950",
    highlights: ["Participated in a university hackathon", "Presentation and website prototype were created", "No award or technical outcome is claimed here"],
    confirmation: ["Project name and problem statement", "What the proposed AI solution actually does", "Your contribution and team responsibilities", "Whether any code/model was built", "Any feedback, result or recognition"]
  }
];
