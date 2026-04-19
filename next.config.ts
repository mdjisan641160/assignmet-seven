/** @type {import('next').NextConfig} */
const nextConfig = {
  // বিল্ডের সময় ESLint এরর ইগনোর করবে
  eslint: {
    ignoreDuringBuilds: true,
  },
  // টাইপ এরর থাকলেও বিল্ড হতে দেবে
  typescript: {
    ignoreBuildErrors: true,
  },
  // এক্সটার্নাল ইমেজ এবং অপ্টিমাইজেশন এরর এড়াতে এটি যোগ করা হয়েছে
  images: {
    unoptimized: true,
  },
};

export default nextConfig;