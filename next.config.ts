import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
	// Ensure Next.js traces files relative to the repository root
	// (fixes workspace root inference issues that break Turbopack chunk paths)
	outputFileTracingRoot: path.resolve(__dirname),
};

export default nextConfig;
