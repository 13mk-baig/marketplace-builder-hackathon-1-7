// src/app/Products/page.tsx
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';
import Image from 'next/image';

const fetchProducts = async (): Promise<Product[]> => {
  // Replace with your data fetching logic
  return [{
    id: 1,
    productName: "Nike Air Force 1 Mid '07",
    category: "Men's Shoes",
    colors : "1 Colour",
    price: 10795,
    image: "/product1.png", // Replace with the correct image path
    isNew: true,
  },
  {
    id: 2,
    productName: "Nike Court Vision Low Next Nature",
    category: "Men's Shoes",
    colors: "1 Colour",
    price: 4995,
    image: "/product2.png", // Replace with the correct image path
    isNew: true,
  },
  {
    id: 3,
    productName: "Nike Air Force 1 PLT.AF.FORM",
    category: "Women's Shoes",
    colors: "1 Colour",
    price: 8695,
    image: "/product3.png", // Replace with the correct image path
    isNew: true,
  },
  {
      id: 4,
      productName: "Nike Air Force 1 PLT.AF.FORM",
      category: "Women's Shoes",
      colors: "1 Colour",
      price: 8695,
      image: "/product4.png", // Replace with the correct image path
      isNew: true,
    },
    {
      id: 5,
      productName: "Nike Air Force 1 PLT.AF.FORM",
      category: "Women's Shoes",
      colors: "1 Colour",
      price: 8695,
      image: "/product5.png", // Replace with the correct image path
      isNew: true,
    },
    {
      id: 6,
      productName: "Nike standard issue",
      category: "Women basketball jersey",
      colors: "1 Colour",
      price: 8695,
      image: "/product7.png", // Replace with the correct image path
      isNew: true,
    },
    {
      id: 7,
      productName: "Nike DUNK low retro SE",
      category: "Women's Shoes",
      colors: "1 Colour",
      price: 8695,
      image: "/product8.png", // Replace with the correct image path
      isNew: true,
    },
    {
      id: 8,
      productName:  "Nik-Dir-FIT UV Hyverse",
      category: "Men's short-selevees graphic fitness top",
      colors: "1 Colour",
      price: 8695,
      image: "/product88.png", // Replace with the correct image path
      isNew: true,
    },
    {
      id: 9,
      productName: "Nike Air Force 1 PLT.AF.FORM",
      category: "Women's Shoes",
      colors: "1 Colour",
      price: 8695,
      image: "/product9.png", // Replace with the correct image path
      isNew: true,
    },
  ];
};

const ProductsPage = async () => {
  const products = await fetchProducts();

  return (
    <section className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
