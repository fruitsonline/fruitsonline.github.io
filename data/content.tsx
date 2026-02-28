// src/data/content.js
export interface ProductOption {
  id: number;
  boxes: number;
  label: string;
  price: number;
  original: number;
  tag?: string;
  perBox?: number;
}

export interface Product {
  id:string;
  slug: string;
  title:string;
  price: string;
  image:string;
  features: string[];
  basePrice: number;
  discountPrice: number;
  gallery: string[];
  options: ProductOption[];
}
export const PRODUCTS:Product[] = [
  {
    id: 'kinnow-10kg',
    slug: 'kinnow-10kg',
    title: '10KG Kinnow BOX',
    price: '2200 Rs',
    image: '/images/kinnow-orange.png',
    features: ['Export-Quality Sargodha Kinnows', 'Premium Packing', 'Free Home Delivery'],
    basePrice: 2200,
    discountPrice: 2500,
    gallery: ["https://primekinnow.com/wp-content/uploads/2025/12/Firefly_Gemini-Flash_convert-this-reference-image-into-a-high-quality-product-photo-to-display-on-website-168107-600x600.png", // The box on grass
        "https://primekinnow.com/wp-content/uploads/2025/12/Firefly_Gemini-Flash_convert-this-reference-image-into-a-high-quality-product-photo-to-display-on-website-168107-600x600.png", // The juice and oranges
        "https://primekinnow.com/wp-content/uploads/2025/12/Firefly_Gemini-Flash_convert-this-reference-image-into-a-high-quality-product-photo-to-display-on-website-168107-600x600.png", // The delivery truck
        "https://primekinnow.com/wp-content/uploads/2025/12/Firefly_Gemini-Flash_convert-this-reference-image-into-a-high-quality-product-photo-to-display-on-website-168107-600x600.png", // The close up box
    ],
    options: [
        { id: 1, boxes: 1, label: 'Regular Price', price: 2200, original: 2500, tag: '' },
        { id: 2, boxes: 2, label: 'Most Popular', price: 4400, original: 5000, tag: 'Most Popular', perBox: 22000 },
        { id: 3, boxes: 3, label: 'Better Value', price: 6600, original: 7500, tag: 'Better Value', perBox: 22000 },
        { id: 5, boxes: 5, label: 'Bulk Pricing', price: 11000, original: 12500, tag: 'Bulk Pricing', perBox: 22000 },
    ]
  },
  {
    id: 'red-blood-10kg',
    slug: 'red-blood-10kg',
    title: '10KG Red Blood BOX',
    price: '1500 Rs',
    image: '/images/redblood-orange.png',
    features: ['Export-Quality Sargodha Kinnows', 'Premium Packing', 'Free Home Delivery'],
    basePrice: 2200,
    discountPrice: 2500,
    gallery: ["https://primekinnow.com/wp-content/uploads/2025/12/Firefly_Gemini-Flash_convert-this-reference-image-into-a-high-quality-product-photo-to-display-on-website-168107-600x600.png", // The box on grass
        "https://primekinnow.com/wp-content/uploads/2025/12/Firefly_Gemini-Flash_convert-this-reference-image-into-a-high-quality-product-photo-to-display-on-website-168107-600x600.png", // The juice and oranges
        "https://primekinnow.com/wp-content/uploads/2025/12/Firefly_Gemini-Flash_convert-this-reference-image-into-a-high-quality-product-photo-to-display-on-website-168107-600x600.png", // The delivery truck
        "https://primekinnow.com/wp-content/uploads/2025/12/Firefly_Gemini-Flash_convert-this-reference-image-into-a-high-quality-product-photo-to-display-on-website-168107-600x600.png", // The close up box
    ],
    options: [
        { id: 1, boxes: 1, label: 'Regular Price', price: 2200, original: 2500, tag: '' },
        { id: 2, boxes: 2, label: 'Most Popular', price: 4400, original: 5000, tag: 'Most Popular', perBox: 22000 },
        { id: 3, boxes: 3, label: 'Better Value', price: 6600, original: 7500, tag: 'Better Value', perBox: 22000 },
        { id: 5, boxes: 5, label: 'Bulk Pricing', price: 11000, original: 12500, tag: 'Bulk Pricing', perBox: 22000 },
    ]
  },
  {
    id: 'mosammi-10kg',
    slug: 'mosammi-10kg',
    title: '10KG Musammi BOX',
    price: '1500 Rs',
    image: '/images/musammi.png',
    features: ['Export-Quality Sargodha Kinnows', 'Premium Packing', 'Free Home Delivery'],
    basePrice: 2200,
    discountPrice: 2500,
    gallery: ["https://primekinnow.com/wp-content/uploads/2025/12/Firefly_Gemini-Flash_convert-this-reference-image-into-a-high-quality-product-photo-to-display-on-website-168107-600x600.png", // The box on grass
        "https://primekinnow.com/wp-content/uploads/2025/12/Firefly_Gemini-Flash_convert-this-reference-image-into-a-high-quality-product-photo-to-display-on-website-168107-600x600.png", // The juice and oranges
        "https://primekinnow.com/wp-content/uploads/2025/12/Firefly_Gemini-Flash_convert-this-reference-image-into-a-high-quality-product-photo-to-display-on-website-168107-600x600.png", // The delivery truck
        "https://primekinnow.com/wp-content/uploads/2025/12/Firefly_Gemini-Flash_convert-this-reference-image-into-a-high-quality-product-photo-to-display-on-website-168107-600x600.png", // The close up box
    ],
    options: [
        { id: 1, boxes: 1, label: 'Regular Price', price: 2200, original: 2500, tag: '' },
        { id: 2, boxes: 2, label: 'Most Popular', price: 4400, original: 5000, tag: 'Most Popular', perBox: 22000 },
        { id: 3, boxes: 3, label: 'Better Value', price: 6600, original: 7500, tag: 'Better Value', perBox: 22000 },
        { id: 5, boxes: 5, label: 'Bulk Pricing', price: 11000, original: 12500, tag: 'Bulk Pricing', perBox: 22000 },
    ]
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    date: "March 3, 2025",
    category: "Fresh Crates",
    title: "Build Your Own Fresh Monthly Box",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna,",
    image: "/images/kinnow-picking.png",
  },
  {
    id: 2,
    date: "March 3, 2025",
    category: "Fresh Crates",
    title: "Fresh Crates are Coming to Town",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna,",
    image: "/images/kinnow-processing.png",
  },
  {
    id: 3,
    date: "March 3, 2025",
    category: "Fresh Crates",
    title: "Open Up the Box, New Vegetables",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna,",
    image: "/images/kinnow-packing.png",
  }
];


export const TESTIMONIALS = [
  { id: 1, text: "Oranges were fresh, juicy and properly packed. No damaged fruit at all.", author: "Ali Raza – Lahore" },
  { id: 2, text: "Very clean carton and consistent size. Taste was sweet, not market kinnow.", author: "Sana Malik – Islamabad" },
  { id: 3, text: "Delivered on time and fruit was export-quality. Family loved it.", author: "Usman Khan – Karachi" },
  { id: 4, text: "The quality is unmatched compared to local vendors. Highly recommended.", author: "Hamza Khan – Karachi" },
  { id: 5, text: "Fast delivery to my doorstep in perfect condition. Great experience.", author: "Umer Khan – Karachi" },
  { id: 6, text: "Best value for money if you are looking for premium grade fruit.", author: "Moeen Khan – Karachi" },
];
