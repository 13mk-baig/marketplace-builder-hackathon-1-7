// src/sanity/imageUrl.ts


// src/sanity/imageUrl.ts
import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanityclient';

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
