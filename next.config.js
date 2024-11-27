/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/oasis_vida_dev_static',
    images: {
        unoptimized: true, // Evita problemas con imágenes en aplicaciones estáticas
    },
}

module.exports = nextConfig
