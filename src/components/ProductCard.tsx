// src/components/ProductCard.tsx
import Image from 'next/image';
import { urlFor } from '../sanity/imageUrl';
import { Product } from '../types/product';




interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  // Check if the product and its image property are defined
  if (!product || !product.image) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
        {/* Placeholder for missing image */}
        <div className="relative w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
          No Image Available
        </div>
        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">{product?.productName|| 'Product Name'}</h3>
          <p className="text-sm text-gray-600">{product?.category || 'Category'}</p>
          <p className="text-sm text-gray-600">{product?.colors || 'Color'}</p>
          <p className="text-lg font-semibold text-gray-900 mt-2">
            MRP : ₹{product?.price || '0'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
      {/* Product Image */}
      <div className="relative w-full h-64">
        <Image
          src={urlFor(product.image).url()}
          alt={product.productName}
          fill
          className="object-contain bg-gray-50"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.productName}</h3>
        <p className="text-sm text-gray-600">{product.category}</p>
        <p className="text-sm text-gray-600">{product.colors}</p>
        <p className="text-lg font-semibold text-gray-900 mt-2">
          MRP : ₹{product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
