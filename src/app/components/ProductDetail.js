"use client";
import { motion } from 'framer-motion';
import ImageCarousel from './ImageCarousel';
import { IoClose } from 'react-icons/io5';
export default function ProductDetail({ product, onClose, onAddToCart }) {
  return (
    <motion.div
      className="fixed inset-0 bg-white p-10 z-50 overflow-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <button
        className="absolute top-4 right-4 text-black hover:scale-110 transition-colors duration-200 flex bg-red-600 p-2 z-20 rounded-full"
        onClick={onClose}
      >
        Close <IoClose size={24} /> {/* Adding the cross icon */}
      </button>

<div className='mt-6'>
      {/* Image Carousel for the product */}
      <ImageCarousel images={product.images} />

      <h2 className="mt-4 text-2xl font-semibold">{product.name}</h2>
      <p className="mt-2 text-gray-500 text-[19px]">₹{product.price}/-</p>
      <p className="mt-4">Additional product details...</p>

      {/* Add to Cart button with animation */}
      <button
        className="mt-4 bg-yellow-400 text-white py-3 px-5 rounded-lg hover:bg-yellow-600 transition "
        onClick={() => {
          onAddToCart(product);
        }}
      >
       <p className='text-black font-medium'>Add to Cart</p>
      </button>
</div>
    </motion.div>
  );
}
