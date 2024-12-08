import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        'xs' : '480',
        'sm' : '640px',
        'md' : '768',
        'lg' : '1024',
        'xl' : '1280',
        '2xl': '1536',
        'custom' :'1400'
       },
       
    },
  },
  plugins: [],
} satisfies Config;
