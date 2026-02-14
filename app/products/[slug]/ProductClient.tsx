"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function ProductClient() {
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
            {/* Upper Section: Images and Purchase Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

                {/* Left: Image Gallery */}
                <div className="flex flex-col gap-4">
                    <div className="bg-[#f9f9f9] rounded-sm p-10 relative group">
                        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            🔍
                        </button>
                        <img
                            src="/vegetable-box-main.png"
                            alt="Vegetables Box"
                            className="w-full h-auto object-contain mix-blend-multiply"
                        />
                    </div>

                    {/* Thumbnails */}
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="border border-gray-100 rounded-sm p-1 cursor-pointer hover:border-green-600 transition-colors">
                                <img src={`/thumb-${i}.jpg`} alt="thumbnail" className="w-full h-auto" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Product Details */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold text-gray-900">Export Quality 10 Kg Kinnow Box</h1>

                    <div className="text-2xl font-medium">
                        <span className="text-green-600">RS 2200</span>
                    </div>

                    <p className="text-gray-500 leading-relaxed text-lg">
                        Enjoy Fresh Export-Quality Kinnows, carefully packed with premium packaging and delivered straight to your doorstep.
                    </p>
                    <ul className="space-y-2 text-gray-600 mt-6">
                        <li className="flex items-center justify-center md:justify-start space-x-2">
                            <span className="text-green-600">✔</span>
                            <span>100% Guaranteed Export Quality</span>
                        </li>
                        <li className="flex items-center justify-center md:justify-start space-x-2">
                            <span className="text-green-600">✔</span>
                            <span>10 kg box – 54 pieces (Medium Size)</span>
                        </li>
                        <li className="flex items-center justify-center md:justify-start space-x-2">
                            <span className="text-green-600">✔</span>
                            <span>Free Doorstep Delivery all across Pakistan</span>
                        </li>
                    </ul>
                    <div className="flex justify-center items-center py-10 px-4">
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="w-full max-w-4xl bg-white p-8 shadow-xl rounded-2xl border border-gray-100"
                        >
                            <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Details</h2>

                            {/* Grid Container: 1 column on mobile, 2 columns on md (768px+) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Full Name"
                                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="email@example.com"
                                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone No</label>
                                    <input
                                        type="text"
                                        name="number"
                                        required
                                        placeholder="0000-0000000"
                                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all"
                                    />
                                </div>

                                {/* Quantity */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">No Of Boxes</label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        required
                                        min="1"
                                        placeholder="1"
                                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all"
                                    />
                                </div>

                                {/* Address: md:col-span-2 makes it full width on larger screens */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                                    <textarea
                                        name="address"
                                        required
                                        rows={3}
                                        placeholder="Shipping Address"
                                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all"
                                    ></textarea>
                                </div>

                                {/* Button: md:col-span-2 makes it full width on larger screens */}
                                <div className="md:col-span-2 pt-2">
                                    <button
                                        type="submit"
                                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-all active:scale-95 shadow-md"
                                    >
                                        Place Order
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}