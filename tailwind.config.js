/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer': "url('/images/footer.jpg')",
        'main': "url('/images/main.png')",
      },
      width: {
        '128': '60rem',
        '120': '45rem',
      },
      colors: {
        'main-title': '#e63946',
        'main-text-dark': '#f1faee',
        'main-text-light': '#1d3557',
        'main-body': '#F2E8CF',
        'main-blue': '#6A994E',
        'main-red': '#E63946'
        
      }
    },
  },
  plugins: [],
}