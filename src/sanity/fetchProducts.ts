// src/sanity/fetchProducts.ts
import { client } from './sanityclient';
import { Product } from '@/types/product';

export const fetchProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product"]{
    _id,
    productName,
    category,
    price,
    inventory,
    colors,
    status,
    description,
    image {
      asset -> {
        _ref
      }
    }
  }`;
  const products = await client.fetch(query);
  return products;
};



