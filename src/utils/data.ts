export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  priceRange: string;
  fabric: string;
  sizes: string[];
  image: string;
  badge?: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  shopName: string;
  city: string;
  text: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const WHATSAPP_NUMBER = "917509847447"; // SRS Shirts WhatsApp number

export const COLLECTIONS: Collection[] = [
  {
    id: "formal",
    name: "Formal Shirts",
    description: "Premium office wear and business shirts in crisp solids, checks, and micro-patterns.",
    image: "https://images.unsplash.com/photo-1620012253295-c05cb3e65228?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "casual",
    name: "Casual Shirts",
    description: "Comfortable semi-formals and casual wear in linen, denim, and cotton blends.",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "cotton",
    name: "Cotton Shirts",
    description: "100% pure premium cotton shirts, breathable and soft, ideal for all seasons.",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "check",
    name: "Check Shirts",
    description: "Classic checks, flannel styling, and windowpane patterns for modern retailers.",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "printed",
    name: "Printed Shirts",
    description: "Trendy digital prints, micro prints, and floral designs for wedding and festival seasons.",
    image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "office-wear",
    name: "Office Wear Shirts",
    description: "Wrinkle-resistant, structured shirts tailored for formal workspaces.",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "premium",
    name: "Premium Collection",
    description: "High-grade Giza cotton and linen shirts with luxury stitching and designer cuts.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "budget",
    name: "Budget Collection",
    description: "Value-for-money daily wear shirts starting at economical wholesale rates.",
    image: "https://images.unsplash.com/photo-1621072156002-e2fcc103e86e?q=80&w=600&auto=format&fit=crop",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Royal Navy Blue Formal",
    category: "Formal Shirts",
    priceRange: "₹210 - ₹240",
    fabric: "80% Cotton, 20% Polyester",
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=600&auto=format&fit=crop",
    badge: "Best Seller",
    description: "Crisp navy formal shirt with structured collar, ideal for corporate setups.",
  },
  {
    id: "prod-3",
    name: "Burgundy Micro Check",
    category: "Check Shirts",
    priceRange: "₹195 - ₹225",
    fabric: "Poly-Cotton Blend",
    sizes: ["M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop",
    description: "Sophisticated small checks pattern, perfect for office and daily casualwear.",
  },
  {
    id: "prod-4",
    name: "Olive Green Linen Casual",
    category: "Casual Shirts",
    priceRange: "₹290 - ₹340",
    fabric: "60% Linen, 40% Cotton",
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop",
    badge: "Premium",
    description: "Breathable light-wash linen casual shirt with soft spread collar.",
  },
  {
    id: "prod-5",
    name: "Slate Grey Satin Premium",
    category: "Premium Collection",
    priceRange: "₹320 - ₹370",
    fabric: "100% Giza Satin Cotton",
    sizes: ["M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=600&auto=format&fit=crop",
    badge: "Premium Choice",
    description: "High-sheen premium Giza cotton shirt with clean-stitch finishing.",
  },
  {
    id: "prod-6",
    name: "Mustard Oxford Casual",
    category: "Casual Shirts",
    priceRange: "₹180 - ₹210",
    fabric: "Heavy Oxford Cotton",
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop",
    badge: "Budget Friendly",
    description: "Economic daily wear casual shirt in a warm mustard shade.",
  },
  {
    id: "prod-7",
    name: "Royal Stripe Digital Print",
    category: "Printed Shirts",
    priceRange: "₹220 - ₹250",
    fabric: "Soft Rayon Cotton Blend",
    sizes: ["M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=600&auto=format&fit=crop",
    description: "Stylish vertical stripes in dark and light contrasts, very popular among youth.",
  },
  {
    id: "prod-8",
    name: "Sky Blue Pinpoint Oxford",
    category: "Office Wear Shirts",
    priceRange: "₹205 - ₹235",
    fabric: "80% Cotton, 20% Polyester",
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=600&auto=format&fit=crop",
    description: "Comfortable standard blue office shirt that requires minimal ironing.",
  },
  {
    id: "prod-9",
    name: "Charcoal Black Premium Matte",
    category: "Premium Collection",
    priceRange: "₹340 - ₹380",
    fabric: "100% Compact Cotton",
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop",
    badge: "Hot Seller",
    description: "Pitch black premium matte shirt. High thread count, anti-pilling fabric.",
  },
  {
    id: "prod-10",
    name: "Red & Black Buffalo Plaid",
    category: "Check Shirts",
    priceRange: "₹210 - ₹240",
    fabric: "100% Cotton Flannel",
    sizes: ["M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop",
    description: "Classic red-black checked flannel shirt for a cool, laid-back retail line.",
  },
  {
    id: "prod-11",
    name: "Peach Summer Linen",
    category: "Casual Shirts",
    priceRange: "₹280 - ₹320",
    fabric: "Linen-Viscose Blend",
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop",
    description: "Lightweight pastel peach shirt, a great choice for hot summer seasons.",
  },
  {
    id: "prod-12",
    name: "Dotted Micro Print Formal",
    category: "Printed Shirts",
    priceRange: "₹215 - ₹245",
    fabric: "Cotton-Satin Mix",
    sizes: ["M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=600&auto=format&fit=crop",
    description: "Subtle pin-dot prints on a light background for corporate or casual wear.",
  },
  {
    id: "prod-14",
    name: "Teal Green Formal Solid",
    category: "Office Wear Shirts",
    priceRange: "₹220 - ₹250",
    fabric: "60% Cotton, 40% Poly",
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=600&auto=format&fit=crop",
    description: "Eye-catching teal green shade that commands attention in retail displays.",
  },
  {
    id: "prod-15",
    name: "Multi-Color Block Check",
    category: "Check Shirts",
    priceRange: "₹185 - ₹215",
    fabric: "Poly-Cotton",
    sizes: ["M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop",
    badge: "Bulk Value",
    description: "Large grid color block checks. Cheap and highly popular among retailers.",
  },
  {
    id: "prod-16",
    name: "Maroon Mandarin Collar",
    category: "Casual Shirts",
    priceRange: "₹225 - ₹255",
    fabric: "100% Slub Cotton",
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop",
    description: "Stylish Chinese-collar shirt in deep maroon, looks great for evenings.",
  },
  {
    id: "prod-17",
    name: "Giza Cotton Powder Blue",
    category: "Cotton Shirts",
    priceRange: "₹295 - ₹335",
    fabric: "100% Long-Staple Giza Cotton",
    sizes: ["M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=600&auto=format&fit=crop",
    badge: "Premium",
    description: "Ultra-soft luxury blue formal shirt with a high-end natural sheen.",
  },
  {
    id: "prod-18",
    name: "Navy Dobby Self-Design",
    category: "Premium Collection",
    priceRange: "₹310 - ₹350",
    fabric: "100% Dobby Cotton",
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=600&auto=format&fit=crop",
    description: "Premium self-designed weave texture, providing a rich, touch-friendly structure.",
  },
  {
    id: "prod-19",
    name: "Yellow Floral Print Festive",
    category: "Printed Shirts",
    priceRange: "₹240 - ₹275",
    fabric: "Lustrous Cotton Satin",
    sizes: ["M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=600&auto=format&fit=crop",
    badge: "Festive Pick",
    description: "Festive floral prints in yellow background, ideal for weddings and celebrations.",
  },
  {
    id: "prod-21",
    name: "Tan Brown Linen Classic",
    category: "Casual Shirts",
    priceRange: "₹285 - ₹325",
    fabric: "Pure Linen",
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop",
    badge: "Summer Special",
    description: "Elegant brown linen shirt featuring maximum breathability for humid climates.",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Rajesh Kumar",
    shopName: "Kumar Garments",
    city: "Jabalpur",
    text: "We have been sourcing shirts from them for over 3 years. The rates are the best in Jabalpur and the cotton shirts sell out super fast. Highly recommended!",
    rating: 5,
  },
  {
    id: "test-2",
    name: "Manish Shah",
    shopName: "Fashion Hub",
    city: "Bhopal",
    text: "Getting catalog collections directly on WhatsApp is very convenient. We order in bulk, and they arrange fast transport to Bhopal. Quality is consistently good.",
    rating: 5,
  },
  {
    id: "test-3",
    name: "Aman Agrawal",
    shopName: "Agrawal Men's Wear",
    city: "Katni",
    text: "For retail shops, price and variety are the main factors. They have formal, casual, check, and printed shirts in all price ranges. Perfect partner for our store.",
    rating: 5,
  },
  {
    id: "test-4",
    name: "Sanjay Soni",
    shopName: "Soni Uniform Suppliers",
    city: "Indore",
    text: "We ordered 800 cotton shirts for a corporate client. The fabric was perfect, sizing was accurate, and they delivered it right on time. Great service!",
    rating: 4,
  },
  {
    id: "test-5",
    name: "Vijay Chawla",
    shopName: "New Look Garment Store",
    city: "Gwalior",
    text: "Their budget collection is excellent for retail margins. We sell their shirts at 40-50% markup easily. Order placements on WhatsApp are very smooth.",
    rating: 5,
  },
  {
    id: "test-6",
    name: "Deepak Patel",
    shopName: "Patel Resellers",
    city: "Rewa",
    text: "Simple ordering process. I select designs from the WhatsApp catalog, they verify stock, send the bill, and deliver through private buses or trucks next day.",
    rating: 5,
  },
];

export const FAQS: FAQ[] = [
  {
    id: "faq-1",
    question: "What is the minimum order quantity (MOQ)?",
    answer: "Our minimum order quantity is 30 shirts. You can mix and match different designs, colors, and sizes to fulfill the MOQ.",
  },
  {
    id: "faq-2",
    question: "Which areas do you deliver to?",
    answer: "We supply all over Madhya Pradesh including Bhopal, Indore, Gwalior, Rewa, Katni, Satna, Sagar, and nearby states. We use local transport networks or courier partners for fast delivery.",
  },
  {
    id: "faq-3",
    question: "How can I get the latest shirt catalog?",
    answer: "Simply click the 'Request Catalog' button. It will open WhatsApp with a pre-filled message. Send that, and our team will share the latest PDF catalog with detailed wholesale pricing.",
  },
  {
    id: "faq-4",
    question: "What payment methods do you accept?",
    answer: "We accept UPI (PhonePe, Google Pay, Paytm), Bank Transfer (NEFT/IMPS), and cash payments at our Jabalpur wholesale office. Credit terms are only available for regular long-term buyers.",
  },
  {
    id: "faq-5",
    question: "Do you offer discounts on larger bulk orders?",
    answer: "Yes, we have tiered pricing. For orders above 150 shirts, we offer additional cash discounts per piece. Please contact us on WhatsApp to discuss bulk pricing.",
  },
  {
    id: "faq-6",
    question: "What is your return policy for wholesale orders?",
    answer: "We verify the quality of every piece before dispatch. However, in case of any manufacturing defects, you can return those pieces within 7 days of delivery for a full replacement or store credit.",
  },
];
