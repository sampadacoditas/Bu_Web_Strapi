/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {},
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  swcMinify: true,
  distDir: "build",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: false,
            svgoConfig: {
              plugins: [{ removeViewBox: false }],
            },
            titleProp: true,
            ref: true,
          },
        },
        {
          loader: "file-loader",
          options: {
            name: "static/media/[name].[hash:8].[ext]",
          },
        },
      ],
    }, 
    {
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "static/media/[name].[hash:8].[ext]",
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
