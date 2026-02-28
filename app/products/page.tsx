import Link from 'next/link'

export default function Products() {
  // 1. Define your data in an array
  const products = [
    {
      id: 'kinnow-10kg',
      title: '10KG Kinnow BOX',
      price: '2200 Rs',
      image: 'https://spadethemes.com/quickmart/wp-content/uploads/sites/6/2025/08/product-20-600x600.webp',
      features: ['Export-Quality Sargodha Kinnows', 'Premium Packing', 'Free Home Delivery']
    },
    {
      id: 'kinnow-5kg',
      title: '5KG Kinnow BOX',
      price: '1500 Rs',
      image: 'https://spadethemes.com/quickmart/wp-content/uploads/sites/6/2025/08/product-20-600x600.webp',
      features: ['Export-Quality Sargodha Kinnows', 'Premium Packing', 'Free Home Delivery']
    },
    {
      id: 'kinnow-trial',
      title: '3KG Kinnow BOX',
      price: '950 Rs',
      image: 'https://spadethemes.com/quickmart/wp-content/uploads/sites/6/2025/08/product-20-600x600.webp',
      features: ['Export-Quality Sargodha Kinnows', 'Standard Packing', 'Delivery Charges Apply']
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>

      <div className="bg-white py-16 px-4 font-sans text-gray-700">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800">
            Get Box <span className="font-bold">Products Separately</span>
          </h2>
          <p className="text-gray-500 mt-2 text-lg">Subscribe to our month crates</p>
        </div>

        <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 2. Map through the products array */}
          {products.map((product) => (
            <div key={product.id} className="relative border border-gray-800 pt-8 pb-12 px-6 flex flex-col items-center group">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 tracking-widest text-sm font-medium">
                {product.title}
              </div>
              
              <div className="absolute top-0 right-0 bg-[#e9e9e1] py-2 px-2 clip-path-tag text-center">
                <div className="font-bold text-xl">{product.price}</div>
              </div>

              <div className="h-48 flex items-center justify-center mb-6">
                <img 
                  src={product.image} 
                  style={{ height: "180px" }} 
                  alt={product.title} 
                  className="object-contain" 
                />
              </div>

              <div className="w-full text-center space-y-2 border-t border-gray-100 pt-6">
                {product.features.map((feature, index) => (
                  <div key={index}>
                    <p className="text-gray-500">{feature}</p>
                    {index < product.features.length - 1 && (
                      <div className="border-t border-gray-100"></div>
                    )}
                  </div>
                ))}
              </div>

              <Link 
                href={`/products/${product.id}`} 
                className="absolute -bottom-6 bg-[#6d7a5f] hover:bg-[#5a664f] text-white font-bold py-4 px-10 text-xs tracking-widest transition-colors uppercase"
              >
                Order Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}