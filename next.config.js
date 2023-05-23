/** @type {import('next').NextConfig} */
module.exports = {
     experimental: { serverComponentsExternalPackages: ["firebase"], serverActions: true },
     webpack(config) {
         config.experiments = { ...config.experiments, topLevelAwait: true };
         return config;
     }
 };