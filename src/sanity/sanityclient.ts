// src/sanity/sanityClient.ts
// src/sanity/sanityClient.ts
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: '05p7b82f', // Replace with your actual project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2025-02-06', // Use the appropriate API version in 'YYYY-MM-DD' format
  useCdn: true, // Set to `false` if you want to ensure fresh data
});



