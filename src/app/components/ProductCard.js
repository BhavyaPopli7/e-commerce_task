"use client";
import { motion } from 'framer-motion';

export default function ProductCard({ product, onClick }) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-4 cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl"
      onClick={() => onClick(product)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
      <p className="mt-2 text-gray-500">₹{product.price}/-</p>
    </motion.div>
  );
}
