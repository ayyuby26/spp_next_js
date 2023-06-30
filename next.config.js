/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    reactStrictMode: true,
    // async redirects() {
    //     return [
    //       {
    //         source: '/',
    //         destination: '/dashboard',
    //         permanent: true,
    //       },
    //     ]
    //   },
}

module.exports = nextConfig
