import type { Config } from "tailwindcss";

export default {
  darkMode:'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        header: "#FFF8E6",
        headerDark:"#500826"
      },
      keyframes: {
        header: {
          "0%": { opacity: '0' },
          "100%": { opacity: "1" },
        },
        fade:{
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: 'translateY(-100px)' },
          "100%": { opacity: "1", transform: 'translateY(0)' },
        },
        slideDown: {
          "0%": { opacity: "0", transform: 'translateY(10px)' },
          "100%": { opacity: "1", transform: 'translateY(0)' },
        },
        slideIn: {
          "0%": { opacity: "0", transform: 'translateX(100px)' },
       
          to: { opacity: "1", transform: 'translateX(0)' },
        },
        slideInReverse: {
          "0%": { opacity: "0", transform: 'translateX(-100px)' },
  
          to: { opacity: "1", transform: 'translateX(0)' },
        },
        typing:{
          from:{
            width: '0%',
            visibility: 'hidden',
          },
          to:{
            width: '100%',
          }
        },
        typingMultiline: {
          '0%': { clipPath: 'inset(0 0 100% 0)' ,visibility: 'hidden'},
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
      },
      animation: {
        header: "header 1s linear",  
        fade: "fade 1s linear",  
        slideUp: "slideUp 1s linear",  
        slideIn: "slideIn 1s linear",
        slideInReverse: "slideInReverse 1s linear",
        typing:"typing 6s steps(80,end) forwards",
        typingMultiline: 'typingMultiline 2s steps(200, end) forwards',
      },
      
    },
  },
  plugins: [],
} satisfies Config;
