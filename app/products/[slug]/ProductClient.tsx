"use client";
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Product } from '@/data/content';

export default function ProductClient({ product }: { product: Product }) {
    const [selectedOption, setSelectedOption] = useState(product.options[0].id);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    console.log(product)
    const options = [
        { id: 1, boxes: 1, label: 'Regular Price', price: 2200, original: 2500, tag: '' },
        { id: 2, boxes: 2, label: 'Most Popular', price: 4400, original: 5000, tag: 'Most Popular', perBox: 22000 },
        { id: 3, boxes: 3, label: 'Better Value', price: 6600, original: 7500, tag: 'Better Value', perBox: 22000 },
        { id: 5, boxes: 5, label: 'Bulk Pricing', price: 11000, original: 12500, tag: 'Bulk Pricing', perBox: 22000 },
    ];
    const galleryImages = [
        "https://primekinnow.com/wp-content/uploads/2025/12/Firefly_Gemini-Flash_convert-this-reference-image-into-a-high-quality-product-photo-to-display-on-website-168107-600x600.png", // The box on grass
        "https://primekinnow.com/wp-content/uploads/2025/12/Firefly_Gemini-Flash_convert-this-reference-image-into-a-high-quality-product-photo-to-display-on-website-168107-600x600.png", // The juice and oranges
        "https://primekinnow.com/wp-content/uploads/2025/12/Firefly_Gemini-Flash_convert-this-reference-image-into-a-high-quality-product-photo-to-display-on-website-168107-600x600.png", // The delivery truck
        "https://primekinnow.com/wp-content/uploads/2025/12/Firefly_Gemini-Flash_convert-this-reference-image-into-a-high-quality-product-photo-to-display-on-website-168107-600x600.png", // The close up box
    ];
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        // Replace these with your actual IDs from EmailJS
        const SERVICE_ID = 'service_pwqldb8';
        const TEMPLATE_ID = 'template_4auy4jf';
        const PUBLIC_KEY = 'Z08GQCHyPwkJgBEi7';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log('SUCCESS!', result.text);
                alert("Message sent successfully!");
                form.current?.reset(); // Clear the form
            }, (error) => {
                console.log('FAILED...', error.text);
                alert("Failed to send message. Please try again.");
            });
    };
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 bg-white text-gray-800">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Side: Images from product.gallery */}
                <div className="flex-1">
                    <div className="overflow-hidden bg-gray-100">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="flex gap-2 mt-6 overflow-x-auto">
                        {product.gallery.map((img, idx) => (
                            <div key={idx} className="flex-shrink-0 w-24 h-24 border hover:border-orange-500 cursor-pointer">
                                <img src={img} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Product Details */}
                <div className="flex-1">
                    <h1 className="text-3xl font-extrabold text-orange-500 mb-4">
                        {product.title}
                    </h1>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        Freshly harvested Sargodha kinnow, packed in a strong 5-ply export carton.
                        Each box contains approximately 54 premium-grade kinnow, carefully washed,
                        graded, and packed at our processing facility. Dispatched directly from
                        Sargodha with <span className="font-bold text-black">cash on delivery</span> available.
                    </p>

                    {/* Pricing Grid from product.options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {product.options.map((option) => (
                            <div
                                key={option.id}
                                onClick={() => setSelectedOption(option.id)}
                                className={`relative cursor-pointer border-2 rounded-xl p-4 transition-all ${selectedOption === option.id ? 'border-orange-500 bg-orange-50' : 'border-gray-200'
                                    }`}
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-bold">Buy {option.boxes} Box{option.boxes > 1 ? 'es' : ''}</p>
                                        <p className="text-xs text-gray-500">{option.label}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-green-700 font-bold">Rs. {option.price.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={() => setIsModalOpen(true)} className="w-full bg-orange-500 text-white font-bold py-4 rounded-md">
                        BUY NOW
                    </button>
                    {/* MODAL OVERLAY */}
                    {isModalOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">

                                {/* Modal Header */}
                                <div className="flex justify-between items-center p-6 border-b">
                                    <h2 className="text-2xl font-bold text-gray-800">Complete Your Order</h2>
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        X
                                    </button>
                                </div>

                                {/* Modal Form Body */}
                                <form ref={form} onSubmit={sendEmail} className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Hidden Field to capture selected option in email */}
                                        <input type="hidden" name="selected_plan" value={`Buy ${selectedOption} Boxes`} />

                                        <div className="md:col-span-1">
                                            <label className="block text-sm font-semibold mb-1">Name</label>
                                            <input type="text" name="name" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Your Name" />
                                        </div>
                                        <div className="md:col-span-1">
                                            <label className="block text-sm font-semibold mb-1">Phone</label>
                                            <input type="text" name="number" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="03xx-xxxxxxx" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-semibold mb-1">Email</label>
                                            <input type="email" name="email" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="email@example.com" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-semibold mb-1">Address</label>
                                            <textarea name="address" required rows={3} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Full Shipping Address"></textarea>
                                        </div>
                                        <div className="md:col-span-2 mt-4">
                                            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg shadow-md transition-all active:scale-95">
                                                Confirm Order - Rs. {options.find(o => o.id === selectedOption)?.price}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}
