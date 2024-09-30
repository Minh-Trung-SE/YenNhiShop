import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://banhyennhi.com',
            lastModified:'2024-09-30',
            priority: 1,
        },
        {
            url: 'https://banhyennhi.com/cau-chuyen-san-pham',
            lastModified:'2024-09-30',
            priority: 1,
        },
    ]
}