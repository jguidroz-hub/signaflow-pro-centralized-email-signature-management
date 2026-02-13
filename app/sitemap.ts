import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://signaflow-pro-centralized-email-signature-management.vercel.app', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://signaflow-pro-centralized-email-signature-management.vercel.app/pricing', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
