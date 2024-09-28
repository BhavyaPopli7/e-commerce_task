"use client";
import { useState } from 'react';
import ProductDetail from './components/ProductDetail';
import ProductGrid from './components/ProductGrid';
import { motion } from 'framer-motion';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log(`Added to cart: ${product.name}`);
  };

  return (
    <div>
      <header className="bg-gray-800 text-white p-4 text-center flex justify-between items-center">
      <h1 className="text-[40px] font-bold pl-4">Product Store</h1>
      <div className="relative pr-4">
        <AiOutlineShoppingCart size={30} />
        {cart.length > 0 && (
          <span className="absolute -top-1 right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1">
            {cart.length}
          </span>
        )}
      </div>
    </header>

      <main>
        <motion.div 
         initial={{ y: 100, opacity: 0 }}  
         animate={{ y: 0, opacity: 1 }}   
         transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
        >
           <ProductGrid onProductClick={handleProductClick} />
        </motion.div>

        {selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onClose={handleCloseDetail} 
            onAddToCart={handleAddToCart} 
          />
        )}
      </main>
    </div>
  );
}
