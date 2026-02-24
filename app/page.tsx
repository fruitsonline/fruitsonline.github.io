import Image from "next/image";
import Link from 'next/link'
import TestimonialSlider from "./components/TestimonialSlider";
export default function Home() {
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

          <div className="relative border border-gray-800 mt-8 pt-8 pb-12 px-6 flex flex-col items-center group">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 tracking-widest text-sm font-medium"> 10KG Kinnow BOX</div>
            <div className="absolute top-0 right-0 bg-[#e9e9e1] py-2 px-2 clip-path-tag text-center">
              <div className="font-bold text-xl">2200 Rs</div>
            </div>
            <div className="h-48 flex items-center justify-center mb-6">
              <img src="/images/kinnow-orange.png" style={{ height: "180px" }} alt="Monthly Box" className="object-contain" />
            </div>
            <div className="w-full text-center space-y-2 border-t border-gray-100 pt-6">
              <p className="text-gray-500">Export-Quality Sargodha Kinnows</p>
              <div className="border-t border-gray-100"></div>
              <p className="text-gray-500">Premium Packing</p>
              <div className="border-t border-gray-100"></div>
              <p className="text-gray-500">Free Home Delivery</p>
            </div>
            <Link href={`/products/kinnow-10kg`} className="absolute -bottom-6 bg-[#6d7a5f] hover:bg-[#5a664f] text-white font-bold py-4 px-10 text-xs tracking-widest transition-colors uppercase">
              Order Now
            </Link>
          </div>

          <div className="relative border border-gray-800 mt-8 pt-8 pb-12 px-6 flex flex-col items-center group">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 tracking-widest text-sm font-medium"> 5KG Kinnow BOX</div>
            <div className="absolute top-0 right-0 bg-[#e9e9e1] py-2 px-2 clip-path-tag text-center">
              <div className="font-bold text-xl">1500 Rs</div>
            </div>
            <div className="h-48 flex items-center justify-center mb-6">
              <img src="/images/redblood-orange.png" style={{ height: "180px" }} alt="Monthly Box" className="object-contain" />
            </div>
            <div className="w-full text-center space-y-2 border-t border-gray-100 pt-6">
              <p className="text-gray-500">Export-Quality Sargodha Kinnows</p>
              <div className="border-t border-gray-100"></div>
              <p className="text-gray-500">Premium Packing</p>
              <div className="border-t border-gray-100"></div>
              <p className="text-gray-500">Free Home Delivery</p>
            </div>
            <Link href={`/products/kinnow-5kg`} className="absolute -bottom-6 bg-[#6d7a5f] hover:bg-[#5a664f] text-white font-bold py-4 px-10 text-xs tracking-widest transition-colors uppercase">
              Order Now
            </Link>
          </div>


          <div className="relative border border-gray-800 mt-8 pt-8 pb-12 px-6 flex flex-col items-center group">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 tracking-widest text-sm font-medium"> 5KG Kinnow BOX</div>
            <div className="absolute top-0 right-0 bg-[#e9e9e1] py-2 px-2 clip-path-tag text-center">
              <div className="font-bold text-xl">1500 Rs</div>
            </div>
            <div className="h-48 flex items-center justify-center mb-6">
              <img src="/images/musammi.png" style={{ height: "180px" }} alt="Monthly Box" className="object-contain" />
            </div>
            <div className="w-full text-center space-y-2 border-t border-gray-100 pt-6">
              <p className="text-gray-500">Export-Quality Sargodha Kinnows</p>
              <div className="border-t border-gray-100"></div>
              <p className="text-gray-500">Premium Packing</p>
              <div className="border-t border-gray-100"></div>
              <p className="text-gray-500">Free Home Delivery</p>
            </div>
            <Link href={`/products/kinnow-5kg`} className="absolute -bottom-6 bg-[#6d7a5f] hover:bg-[#5a664f] text-white font-bold py-4 px-10 text-xs tracking-widest transition-colors uppercase">
              Order Now
            </Link>
          </div>
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

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden mb-5">
              <img src="/images/kinnow-picking.png" className="h-[270px] w-[100%] m:w-[405px]" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">

                </div>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-[10px] tracking-[0.2em] text-gray-400 font-bold uppercase">March 3, 2025 | Fresh Crates</p>
              <h3 className="text-lg font-bold text-gray-800 leading-tight">Build Your Own Fresh Monthly Box</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna,
              </p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden mb-5">
              <img src="/images/kinnow-processing.png" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">

                </div>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-[10px] tracking-[0.2em] text-gray-400 font-bold uppercase">March 3, 2025 | Fresh Crates</p>
              <h3 className="text-lg font-bold text-gray-800 leading-tight">Fresh Crates are Coming to Town</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna,
              </p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden mb-5">
              <img src="/images/kinnow-packing.png" height={270} />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">

                </div>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-[10px] tracking-[0.2em] text-gray-400 font-bold uppercase">March 3, 2025 | Fresh Crates</p>
              <h3 className="text-lg font-bold text-gray-800 leading-tight">Open Up the Box, New Vegetables</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna,
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
