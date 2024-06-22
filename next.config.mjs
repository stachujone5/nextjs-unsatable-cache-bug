/** @type {import('next').NextConfig} */
export const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 99999,
      static: 99999,
    },
  },
};
