/** @type {import('tailwindcss').Config} */
module.exports = {
    // The `content` array tells Tailwind where to look for class names.
    content: [
      // Scanning Astro component files
      "./src/**/*.{astro,html}",
      // Scanning JavaScript/TypeScript and React component files
      "./src/**/*.{js,jsx,ts,tsx}",
      // Scanning Vue component files
      "./src/**/*.{vue}",
      // Scanning Svelte component files
      "./src/**/*.{svelte}",
      // Optionally, include any public static HTML files
      "./public/**/*.html"
    ],
    theme: {
      // Extend the default Tailwind theme here if necessary
      extend: {},
    },
    // Plugins can be added here as needed
    plugins: [],
  };
  