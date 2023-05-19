/** @type {import('next').NextConfig} */
module.exports = {
     experimental: { serverComponentsExternalPackages: ["mongoose"] },
     webpack(config) {
         config.experiments = { ...config.experiments, topLevelAwait: true };
         return config;
     }
 };