import { Product } from "../types";

export const products: Product[] = [
  {
    id: "1",
    name: "AirStride Pro Max",
    brand: "Nike",
    category: "running",
    gender: "men",
    price: 3999,
    originalPrice: 5999,
    discount: 33,
    sizes: [7, 8, 9, 10, 11],
    colors: [
      { name: "Neon Volt", hex: "#E8FF00" },
      { name: "Midnight Black", hex: "#000000" }
    ],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.8,
    reviewCount: 248,
    stock: 12,
    material: "Mesh upper, Rubber sole",
    weight: "280g",
    isNew: true,
    isTrending: true,
    description: "Designed for ultimate speed and comfort, the AirStride Pro Max features a lightweight mesh upper and a responsive foam midsole that propels you forward with every step."
  },
  {
    id: "2",
    name: "Urban Glide X",
    brand: "Adidas",
    category: "casual",
    gender: "unisex",
    price: 2499,
    originalPrice: 3499,
    discount: 28,
    sizes: [6, 7, 8, 9, 10],
    colors: [
      { name: "Cloud White", hex: "#FFFFFF" },
      { name: "Carbon Grey", hex: "#4B4B4B" }
    ],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512374382149-fb335c5242f8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.5,
    reviewCount: 156,
    stock: 8,
    material: "Synthetic leather, Rubber cupsole",
    weight: "320g",
    isNew: false,
    isTrending: true,
    description: "The Urban Glide X blends classic street style with modern comfort. Perfect for daily wear, it features a durable synthetic leather upper and a cushioned sockliner."
  },
  {
    id: "3",
    name: "SpeedForm Ignite",
    brand: "Puma",
    category: "sports",
    gender: "men",
    price: 4500,
    originalPrice: 6000,
    discount: 25,
    sizes: [8, 9, 10, 11, 12],
    colors: [
      { name: "Ignite Red", hex: "#FF3C00" },
      { name: "Deep Navy", hex: "#000080" }
    ],
    images: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511556532299-8f660fc26c06?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.7,
    reviewCount: 89,
    stock: 4,
    material: "Knit upper, Performance rubber",
    weight: "260g",
    isNew: true,
    isTrending: false,
    description: "Built for high-intensity sports, the SpeedForm Ignite offers superior energy return and explosive multi-directional movement capabilities."
  },
  {
    id: "4",
    name: "Classic Elite Oxford",
    brand: "Clarks",
    category: "formal",
    gender: "men",
    price: 5999,
    originalPrice: 7999,
    discount: 25,
    sizes: [7, 8, 9, 10],
    colors: [
      { name: "Tan Brown", hex: "#964B00" },
      { name: "Classic Black", hex: "#000000" }
    ],
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.9,
    reviewCount: 42,
    stock: 6,
    material: "Full-grain leather, Leather sole",
    weight: "450g",
    isNew: false,
    isTrending: false,
    description: "Refined and elegant, the Classic Elite Oxford is handcrafted from premium full-grain leather, providing unparalleled sophistication for your formal attire."
  },
  {
    id: "5",
    name: "Breeze Walking Sandals",
    brand: "Skechers",
    category: "sandals",
    gender: "women",
    price: 1899,
    originalPrice: 2499,
    discount: 24,
    sizes: [5, 6, 7, 8],
    colors: [
      { name: "Rose Pink", hex: "#FFC0CB" },
      { name: "Soft Beige", hex: "#F5F5DC" }
    ],
    images: [
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.3,
    reviewCount: 112,
    stock: 15,
    material: "Synthetic straps, Goga Mat footbed",
    weight: "180g",
    isNew: true,
    isTrending: false,
    description: "Enjoy effortless comfort with the Breeze Walking Sandals. Featuring a Goga Mat footbed for maximum support and adjustable straps for a perfect fit."
  },
  {
    id: "6",
    name: "Trail Blazer 5.0",
    brand: "New Balance",
    category: "running",
    gender: "unisex",
    price: 6499,
    originalPrice: 8499,
    discount: 23,
    sizes: [6, 7, 8, 9, 10, 11, 12],
    colors: [
      { name: "Forest Green", hex: "#228B22" },
      { name: "Slate Blue", hex: "#708090" }
    ],
    images: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1533681018184-68bd1d8f39fe?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.6,
    reviewCount: 75,
    stock: 10,
    material: "Vibram outsole, Gore-Tex lining",
    weight: "340g",
    isNew: false,
    isTrending: true,
    description: "The Trail Blazer 5.0 is built for the untamed path. With a rugged Vibram outsole and waterproof Gore-Tex lining, it tackles any terrain in any weather."
  },
  {
    id: "7",
    name: "Retro Court Low",
    brand: "Reebok",
    category: "casual",
    gender: "men",
    price: 3299,
    originalPrice: 4999,
    discount: 34,
    sizes: [7, 8, 9, 10, 11],
    colors: [
      { name: "Off White", hex: "#FAF9F6" },
      { name: "Forest Green", hex: "#013220" }
    ],
    images: [
      "https://images.unsplash.com/photo-1515347619252-60a4bdad858a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1597044766029-79841804f378?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.4,
    reviewCount: 198,
    stock: 20,
    material: "Suede overlays, Leather base",
    weight: "310g",
    isNew: false,
    isTrending: false,
    description: "Inspired by 80s tennis heritage, the Retro Court Low combines premium suede and leather for a timeless look that never goes out of style."
  },
  {
    id: "8",
    name: "SkyHigh Jumper",
    brand: "Nike",
    category: "sports",
    gender: "kids",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    sizes: [2, 3, 4, 5],
    colors: [
      { name: "Laser Blue", hex: "#007FFF" },
      { name: "Hyper Orange", hex: "#FF4500" }
    ],
    images: [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.2,
    reviewCount: 64,
    stock: 25,
    material: "Textile upper, Non-marking rubber",
    weight: "210g",
    isNew: true,
    isTrending: false,
    description: "Let your little one fly. The SkyHigh Jumper offers exceptional ankle support and a high-grip sole for energetic play on and off the court."
  },
  {
    id: "9",
    name: "Elegance Stiletto",
    brand: "Jimmy Choo",
    category: "formal",
    gender: "women",
    price: 12999,
    originalPrice: 18999,
    discount: 31,
    sizes: [5, 6, 7, 8],
    colors: [
      { name: "Champagne Gold", hex: "#F7E7CE" },
      { name: "Onyx Black", hex: "#0F0F0F" }
    ],
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1596702994230-a24c53549646?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1506190506097-3613f17ba35f?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 5.0,
    reviewCount: 18,
    stock: 3,
    material: "Silk Satin, Italian leather sole",
    weight: "220g",
    isNew: true,
    isTrending: true,
    description: "The pinnacle of event footwear. Handcrafted silk satin uppers and a perfectly balanced heel make the Elegance Stiletto a must-have for gala nights."
  },
  {
    id: "10",
    name: "Active Flow Slides",
    brand: "Puma",
    category: "sandals",
    gender: "unisex",
    price: 999,
    originalPrice: 1499,
    discount: 33,
    sizes: [6, 7, 8, 9, 10, 11, 12],
    colors: [
      { name: "Lava Orange", hex: "#FF4500" },
      { name: "Pitch Black", hex: "#000000" }
    ],
    images: [
      "https://images.unsplash.com/photo-1603191659812-ee978eeeef76?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1616422285623-13ff0167c95c?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.1,
    reviewCount: 312,
    stock: 45,
    material: "EVA foam",
    weight: "120g",
    isNew: false,
    isTrending: true,
    description: "From the pool deck to the street, the Active Flow Slides provide instant recovery cushion for tired feet with a sleek, aerodynamic silhouette."
  },
  {
    id: "11",
    name: "Zenith Air Runner",
    brand: "Nike",
    category: "running",
    gender: "women",
    price: 5499,
    originalPrice: 7999,
    discount: 31,
    sizes: [5, 6, 7, 8],
    colors: [
      { name: "Lilac Mist", hex: "#C8A2C8" },
      { name: "Ocean Teal", hex: "#008080" }
    ],
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.7,
    reviewCount: 145,
    stock: 9,
    material: "Flyknit, React foam",
    weight: "240g",
    isNew: true,
    isTrending: true,
    description: "Run on clouds. The Zenith Air Runner uses advanced Flyknit technology and responsive React foam for a custom-feel fit that lasts for miles."
  },
  {
    id: "12",
    name: "Rugged Peak Boot",
    brand: "Timberland",
    category: "casual",
    gender: "men",
    price: 8999,
    originalPrice: 11999,
    discount: 25,
    sizes: [8, 9, 10, 11],
    colors: [
      { name: "Wheat Leather", hex: "#F5DEB3" },
      { name: "Dark Walnut", hex: "#5D4037" }
    ],
    images: [
      "https://images.unsplash.com/photo-1520639889313-7272175b1c39?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1533681018184-68bd1d8f39fe?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.8,
    reviewCount: 320,
    stock: 11,
    material: "Nubuck leather, Lug sole",
    weight: "650g",
    isNew: false,
    isTrending: false,
    description: "An icon of durability. The Rugged Peak Boot is waterproof and exceptionally warm, making it the definitive choice for winter in the city."
  },
  {
    id: "13",
    name: "Urban Explorer Mid",
    brand: "Vans",
    category: "casual",
    gender: "unisex",
    price: 3499,
    originalPrice: 4499,
    discount: 22,
    sizes: [6, 7, 8, 9, 10, 11],
    colors: [
      { name: "Checkerboard", hex: "#000000" },
      { name: "Mustard Gold", hex: "#FFDB58" }
    ],
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512374382149-fb335c5242f8?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.4,
    reviewCount: 215,
    stock: 14,
    material: "Canvas upper, Waffle outsole",
    weight: "380g",
    isNew: true,
    isTrending: true,
    description: "The classic mid-top silhouette redefined. Featuring reinforced toecaps and the legendary waffle outsole for maximum board feel."
  },
  {
    id: "14",
    name: "Elite Performance Cleats",
    brand: "Adidas",
    category: "sports",
    gender: "women",
    price: 7999,
    originalPrice: 9999,
    discount: 20,
    sizes: [6, 7, 8],
    colors: [
      { name: "Solar Yellow", hex: "#FFFF00" },
      { name: "Core Blue", hex: "#0000FF" }
    ],
    images: [
      "https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1510267258428-29472e399042?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511556532299-8f660fc26c06?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.9,
    reviewCount: 32,
    stock: 5,
    material: "Primeknit upper, Studded outsole",
    weight: "220g",
    isNew: true,
    isTrending: false,
    description: "Dominate the pitch. These cleats feature a seamless Primeknit upper for a sock-like fit and a traction-optimized studded sole for explosive turns."
  },
  {
    id: "15",
    name: "Night Crawler Low",
    brand: "StepUp",
    category: "casual",
    gender: "unisex",
    price: 4999,
    originalPrice: 6999,
    discount: 28,
    sizes: [7, 8, 9, 10, 11, 12],
    colors: [
      { name: "Obsidian", hex: "#0D0D0D" },
      { name: "Neon Glow", hex: "#E8FF00" }
    ],
    images: [
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800"
    ],
    rating: 4.6,
    reviewCount: 54,
    stock: 8,
    material: "Tech-mesh, Glowing accents",
    weight: "290g",
    isNew: true,
    isTrending: true,
    description: "Step into the night with our signature silhouette. Featuring reflective materials and a neon yellow accent that pops under city lights."
  }
];
