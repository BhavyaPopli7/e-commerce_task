"use client";

import React from 'react';
import Image from 'next/image'; 
import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/product3.jpg';
import product4 from '../assets/images/product4.jpg';
import product5 from '../assets/images/product5.jpg';
import product6 from '../assets/images/product6.jpg';
import product7 from '../assets/images/product7.jpg';
import product8 from '../assets/images/product8.jpg';
import product9 from '../assets/images/product9.jpg';
import product10 from '../assets/images/product10.jpg';


const products = [
  {
    id: 1,
    name: 'Target Batch 2025',
    price: 5000,
    images: [product1,product2,product3,product4,product5], 
  },
  {
    id: 2,
    name: 'Classroom Test Series 2025',
    price: 499,
    images: [product2, product10, product9,product8,product7],
  },
  {
    id: 3,
    name: 'Masterclass In Biology 2025',
    price: 3500,
    images: [product3,product1,product2,product10,product9],
  },
  {
    id: 4,
    name: 'Books Combo Series',
    price: 4200,
    images: [product4,product5,product6,product8,product9],
  },
  {
    id: 5,
    name: 'NEET 2026 Target Batch 2026',
    price: 6999,
    images: [product5,product10,product9,product7,product4],
  },
  {
    id: 6,
    name: 'Masterclass In Biology 2026',
    price: 499,
    images: [product6,product2,product6,product9,product2],
  },
  {
    id: 7,
    name: 'Nucleus Batch 2026',
    price: 349,
    images: [product7, product4,product8,product2,product5],
  },
  {
    id: 8,
    name: 'Books Combo Series',
    price: 3999,
    images: [product8, product2,product4,product6,product10],
  },
  {
    id: 9,
    name: 'Books Combo Series',
    price: 20000,
    images: [product9, product3,product6,product1,product4],
  },
  {
    id: 10,
    name: 'Classroom Test Series 2026',
    price: 4999,
    images: [product10, product2,product4,product6,product8],
  },
];
export default function ProductGrid({ onProductClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-4">
      {products.map(product => (
        <div 
          key={product.id}
          className="border rounded-lg overflow-hidden shadow-2xl shadow-gray-500 transition-transform transform hover:scale-105 hover:z-50 cursor-pointer"
          onClick={() => onProductClick(product)}
        >
          <Image 
            src={product.images[0]} 
            alt={product.name} 
            width={400} 
            height={300} 
            className="w-full h-60 object-cover" 
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-700">₹{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
