import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://yennhi.com',
            lastModified:'2024-09-29',
            priority: 1,
        },
        {
            url: 'https://yennhi.com/cau-chuyen-san-pham',
            lastModified:'2024-09-29',
            priority: 1,
        },
    ]
}