export interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  subtitle: string;
  headerTag: string;
  overview: string;
  tags: string[];
  result: string;
  image?: string;
  stats: { label: string; value: string }[];
  role: { title: string; desc: string }[];
  tools: string[];
  results: string;
  instagram?: string;
  website?: string;
  location?: string;
  badge?: string;
  accentColor?: string;
  instagramImage?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    category: "SMM",
    headerTag: "Social Media Management",
    title: "elaVate — Brand Content & Social Strategy",
    subtitle: "Cloud Kitchen · Hyderabad · Remote Client",
    description: "Full-scale social media branding and AI-powered content strategy for an authentic Kerala food brand.",
    overview: "elaVate is an authentic Kerala Pothichoru cloud kitchen based in Hyderabad, listed on Swiggy and Zomato. I managed their complete Instagram presence remotely from Kerala — handling content strategy, AI-generated visuals, seasonal campaigns, and brand identity.",
    stats: [
      { label: "Followers", value: "320" },
      { label: "Posts Created", value: "68" },
      { label: "Campaigns", value: "4 Seasonal" },
      { label: "Workflow", value: "100% Remote" }
    ],
    role: [
      { title: "AI-Generated Content", desc: "Created cinematic AI visuals including a Mother's Day reel with floating product shots" },
      { title: "Seasonal Campaigns", desc: "Mother's Day, Labour Day, Easter, Vishu" },
      { title: "Story Highlights", desc: "Designed and organised: Updates, Reviews, Team, Unwrap" },
      { title: "Brand Identity", desc: "Maintained consistent green/earthy Kerala aesthetic across all content" },
      { title: "Platform Marketing", desc: "Created posts driving orders to Swiggy & Zomato" },
      { title: "Remote Workflow", desc: "Full content calendar managed remotely with zero in-person meetings" }
    ],
    tools: ["Canva", "AI Image Tools", "Instagram", "Meta Business Suite", "Petpooja"],
    tags: ["AI Content", "Cloud Kitchen", "Swiggy & Zomato", "Remote Client"],
    result: "300% Engagement Growth ✦",
    results: "Grew page from launch to 320 highly engaged followers. Established brand identity from scratch and created campaigns that consistently drove traffic to Swiggy & Zomato listings.",
    instagram: "https://instagram.com/elavate.in",
    website: "https://elavate.netlify.app",
    image: "/elavate cover .png",
    accentColor: "#006D32",
    instagramImage: "/elavate.jpeg"
  },
  {
    id: 2,
    category: "SMM",
    headerTag: "Social Media Management",
    title: "K Shack Cafe — Instagram Branding & Content",
    subtitle: "Cafe & Events · Sulthan Bathery, Wayanad · Local Client",
    description: "Digital presence revamp for a local cafe in Wayanad focusing on ambiance and growth.",
    overview: "K Shack Cafe is a multi-generation cafe in Wayanad, Kerala. I managed their complete Instagram content — from daily cafe vibes and product highlights to major festival campaigns and event coverage including their Kshack 2.0 launch.",
    stats: [
      { label: "Followers", value: "501" },
      { label: "Posts Created", value: "158" },
      { label: "Highlights", value: "5 Categories" },
      { label: "Campaigns", value: "6+" }
    ],
    role: [
      { title: "Content Calendar", desc: "Full monthly calendar covering festivals, products, and events" },
      { title: "Festival Campaigns", desc: "Vishu, Easter, Eid Mubarak, Valentine's Day Special Shake" },
      { title: "Event Coverage", desc: "Kshack 2.0 launch, travel content, cafe moments" },
      { title: "Reels Production", desc: "Cafe ambience and product highlight videos" },
      { title: "Brand Identity", desc: "Consistent gold/black theme maintained across all 158 posts" },
      { title: "Story Highlights", desc: "Managed: Vibes, Kshack 2.0, Moments, Events, Travel & Explore" }
    ],
    tools: ["Canva", "Instagram", "Meta Business Suite"],
    tags: ["Festival Campaigns", "Cafe Reels", "Brand Identity", "Event Coverage", "Wayanad"],
    result: "+40% Footfall Increase ✦",
    results: "Grew page to 500+ followers and successfully executed the Kshack 2.0 relaunch campaign, significantly increasing weekend footfall and local brand awareness through targeted content.",
    instagram: "https://instagram.com/kshack.in",
    image: "/kshack cover .png",
    accentColor: "#D4AF37",
    instagramImage: "/kshack.jpeg"
  },
  {
    id: 3,
    category: "Design",
    headerTag: "Graphic Design",
    title: "Creative Design Showcase",
    subtitle: "Posters · Banners · Social Media Creatives",
    description: "A curated collection of my graphic design work including restaurant posters, festival greetings, and promotional banners.",
    overview: "This is a collection of various graphic design projects, focusing on social media marketing materials for restaurants and cafes. It includes promotional posters, event invitations, festival greetings, and daily product highlights. I designed these assets to create engaging visual experiences and maintain consistent brand identities.",
    stats: [
      { label: "Designs", value: "14+" },
      { label: "Formats", value: "Posters, Banners" },
      { label: "Niche", value: "F&B, Events" },
      { label: "Style", value: "Modern & Vibrant" }
    ],
    role: [
      { title: "Social Media Posters", desc: "Designed engaging daily content and promotional offers." },
      { title: "Festival Greetings", desc: "Created themed posts for New Year, Republic Day, etc." },
      { title: "Event Invitations", desc: "Designed grand opening banners and event cards." },
      { title: "Menu Highlights", desc: "Showcased specific dishes like Biriyani, Thaali, and Nadan Pothichore." }
    ],
    tools: ["Canva", "Photoshop", "Illustrator"],
    tags: ["Social Media Graphics", "Restaurant Posters", "Event Banners", "Branding"],
    result: "Portfolio Showcase ✦",
    results: "Delivered high-quality, conversion-focused design assets that enhanced the digital presence of various food and beverage brands.",
    image: "/design/Biriyani Poster.jpeg",
    accentColor: "#E11D48",
    gallery: [
      "/design/BREAD Omelette.png",
      "/design/Biriyani Poster.jpeg",
      "/design/Grand opening invitation card event vector image on VectorStock.jpeg",
      "/design/Green Orange Modern Fast Food Restaurant Grand Opening Banner  (Real Estate Flyer) (6).png",
      "/design/NADAN POTHICHORE.jpeg",
      "/design/Republic day poster (3).png",
      "/design/Restaurant Social Media Poster (2).jpeg",
      "/design/Restaurant Social Media Poster (3).jpeg",
      "/design/Thaali!!!.jpeg",
      "/design/Wishing You a Happy & Flavorful New Year! (1).png",
      "/design/new year post.png",
      "/design/post2.png",
      "/design/post3.png",
      "/design/poster2.png"
    ]
  },
  {
    id: 4,
    category: "Web Dev",
    headerTag: "Website Development",
    title: "Skywyn — Real Estate & Land Development",
    subtitle: "Corporate Website · Wayanad, Kerala",
    description: "A modern, responsive corporate website developed for a trusted real estate and land development company in Wayanad.",
    overview: "Skywyn is a premier real estate and land development brand in Wayanad, Kerala, dedicated to building 'From Land to Legacy.' I developed their digital presence from the ground up, creating a professional website that highlights their construction projects, land development services, and legacy of trust. The site is optimized for performance and mobile responsiveness to attract investors and modern home buyers.",
    stats: [
      { label: "Industry", value: "Real Estate" },
      { label: "Location", value: "Wayanad, Kerala" },
      { label: "Type", value: "Corporate Site" },
      { label: "Status", value: "Live" }
    ],
    role: [
      { title: "Frontend Development", desc: "Built a fully responsive, fast-loading user interface." },
      { title: "UI/UX Design", desc: "Designed a clean, professional layout tailored to real estate." },
      { title: "SEO Optimization", desc: "Implemented structural SEO for better local search visibility." },
      { title: "Content Integration", desc: "Structured property and service information for easy navigation." }
    ],
    tools: ["Web Development", "UI/UX", "SEO", "Frontend"],
    tags: ["Real Estate", "Corporate Website", "Land Development", "Wayanad"],
    result: "Live Project ✦",
    results: "Successfully launched the digital face for Skywyn, establishing a professional online presence that effectively showcases their real estate legacy and attracts potential clients.",
    website: "https://www.skywyn.in/",
    image: "/skywyn.png",
    accentColor: "#3B82F6"
  }
];
