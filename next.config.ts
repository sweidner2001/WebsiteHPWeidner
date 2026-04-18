// Erklärung:
// - Setze `output: 'export'` nur, wenn die Umgebungsvariable NEXT_EXPORT === 'true' gesetzt ist.
//   Das erlaubt dir, lokal/statisch zu exportieren, ohne den serverseitigen Build in CI (z. B. opennextjs-cloudflare)
//   zu verhindern.

import type { NextConfig } from "next";

const isExport = process.env.NEXT_EXPORT === 'true';

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        unoptimized: true,
    },
    ...(isExport ? { output: 'export' as const } : {}),
};

export default nextConfig;
