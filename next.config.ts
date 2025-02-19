import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'image.tmdb.org',
        pathname:'**'
      }
    ]
  }
  ,
    env: {
      REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    }

    ,
    pageExtensions: ['page.tsx', 'page.ts', 'ts', 'tsx'],
};

export default nextConfig;
