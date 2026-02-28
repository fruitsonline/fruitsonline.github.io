import Image from "next/image";
import Link from 'next/link'
import TestimonialSlider from "./components/TestimonialSlider";
import { PRODUCTS, BLOG_POSTS } from '../data/content' // Adjust path as needed
export default function Home() {
  const posts = [
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
    },
  ];
  const products = [
    {
      id: 'kinnow-10kg',
      title: '10KG Kinnow BOX',
      price: '2200 Rs',
      image: '/images/kinnow-orange.png',
      features: ['Export-Quality Sargodha Kinnows', 'Premium Packing', 'Free Home Delivery']
    },
    {
      id: 'kinnow-5kg',
      title: '5KG Kinnow BOX',
      price: '1500 Rs',
      image: '/images/redblood-orange.png',
      features: ['Export-Quality Sargodha Kinnows', 'Premium Packing', 'Free Home Delivery']
    },
    {
      id: 'musammi-5kg', // Fixed ID to be unique
      title: '5KG Musammi BOX',
      price: '1500 Rs',
      image: '/images/musammi.png',
      features: ['Export-Quality Sargodha Kinnows', 'Premium Packing', 'Free Home Delivery']
    }
  ];
  return (
    <div>

      <section className="bg-gray-100 mx-auto px-6 lg:px-16 py-10 lg:py-16">


        <div className="container max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

          <div className="lg:w-1/2 text-center lg:text-left">

            <h1 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900">
              Export-Quality Fresh Kinnows <br />
              Straight to Your Door
            </h1>

            <ul className="space-y-2 text-gray-600 mt-6">
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <span className="text-green-600">✔</span>
                <span>100% Satisfaction Guarantee</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <span className="text-green-600">✔</span>
                <span>World-Class Shaving Products</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <span className="text-green-600">✔</span>
                <span>World-Class Shaving Products</span>
              </li>
            </ul>

            <button className="mt-8 inline-flex items-center gap-2 bg-[#6d7a5f] hover:bg-[#5a664f] 
                       text-white font-medium px-6 py-3 shadow-md 
                       transition duration-300">
              Shop Now
              <span className="text-xl">→</span>
            </button>

          </div>

          <div className="lg:w-1/2 flex ">
            <img
              src="/images/oranges.png"
              alt="Fresh Vegetables Basket"
              className="w-full  object-contain"
            />
          </div>

        </div>

      </section>
      <div className="bg-white py-16 px-4 font-sans text-gray-700">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light text-gray-800">
          Get Box <span className="font-bold">Products Separately</span>
        </h2>
        <p className="text-gray-500 mt-2 text-lg">Subscribe to our month crates</p>
      </div>

      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="relative border border-gray-800 mt-8 pt-8 pb-12 px-6 flex flex-col items-center group">
            {/* Badge Title */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 tracking-widest text-sm font-medium whitespace-nowrap">
              {product.title}
            </div>

            {/* Price Tag */}
            <div className="absolute top-0 right-0 bg-[#e9e9e1] py-2 px-2 clip-path-tag text-center">
              <div className="font-bold text-xl">{product.price}</div>
            </div>

            {/* Product Image */}
            <div className="h-48 flex items-center justify-center mb-6">
              <img 
                src={product.image} 
                style={{ height: "180px" }} 
                alt={product.title} 
                className="object-contain" 
              />
            </div>

            {/* Features List */}
            <div className="w-full text-center space-y-2 border-t border-gray-100 pt-6">
              {product.features.map((feature, index) => (
                <div key={index}>
                  <p className="text-gray-500">{feature}</p>
                  {index < product.features.length - 1 && (
                    <div className="border-t border-gray-100 mt-2"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Order Button */}
            <Link 
              href={`/products/${product.slug}`} 
              className="absolute -bottom-6 bg-[#6d7a5f] hover:bg-[#5a664f] text-white font-bold py-4 px-10 text-xs tracking-widest transition-colors uppercase"
            >
              Order Now
            </Link>
          </div>
        ))}
      </div>
    </div>
      {/* Testimonial Section (The new Auto Slider) */}
      <TestimonialSlider />
      <div className="bg-[#fcfcfc] py-16 px-4 font-sans text-gray-700">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-gray-800">
          Fresh Posts From <span className="font-bold text-gray-900">The Garden</span>
        </h2>
        <p className="text-gray-500 mt-2 text-sm tracking-wide">Find TheCrate's News and Offers</p>
      </div>

      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 2. Map through the posts */}
        {BLOG_POSTS.map((post) => (
          <div key={post.id} className="group cursor-pointer">
            <div className="relative overflow-hidden mb-5">
              <img 
                src={post.image} 
                alt={post.title}
                className="h-[270px] w-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                  {/* Icon could go here */}
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <p className="text-[10px] tracking-[0.2em] text-gray-400 font-bold uppercase">
                {post.date} | {post.category}
              </p>
              <h3 className="text-lg font-bold text-gray-800 leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
