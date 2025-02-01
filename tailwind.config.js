/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./src/components/**/*.{js,jsx,ts,tsx,vue,svelte}",
    "./src/components/ui/**/*.{js,jsx,ts,tsx,vue,svelte}",
    "./public/**/*.html"
  ],
  theme: { extend: {} },
  plugins: [],
};
