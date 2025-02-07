// src/types/Product.ts
// src/types/Product.ts
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Product {
  id: number;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string;
  status: string;
  description: string;
  image: string;
  isNew:boolean;
}
