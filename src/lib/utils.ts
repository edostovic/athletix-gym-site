import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Base path for GitHub Pages deployment.
 * Next.js basePath is NOT applied to plain <img> or CSS url() — only to <Image> and <Link>.
 * Use this helper for all static image references.
 */
const BASE_PATH = "/athletix-gym-site";

export function img(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : "/" + path}`;
}
