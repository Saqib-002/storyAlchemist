import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          100: "#A9D6E5",
          200: "#61A5C2",
          300: "#468FAF",
          400: "#2C7DA0",
          500: "#2A6F97",
          600: "#014F86",
          700: "#01497C",
          800: "#013A63",
          850: "#012A4A",
          900: "#001628",
          950: "#00101D",
        },
        dayBlue: {
          100: "#EBEDFC",
          200: "#D2D8F9",
          300: "#A6B0F2",
          400: "#7989EC",
          500: "#4D62E5",
          600: "#3045C9",
          700: "#243497",
          800: "#182364",
          900: "#0C1132",
        },
        dark: {
          100: "#E8E9E9",
          200: "#CDCECF",
          300: "#9B9C9E",
          400: "#686B6E",
          500: "#363A3D",
          600: "#1A1D21",
          700: "#131619",
          800: "#0D0F10",
          900: "#060708",
        },
        light: {
          900: "#FFFFFF",
          800: "#F4F6F8",
          850: "#FDFDFD",
          700: "#DCE3F1",
          500: "#7B8EC8",
          400: "#858EAD",
        },
        "accent-blue": "#1DA1F2",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        spaceGrotesk: ["var(--font-spaceGrotesk)"],
      },
      boxShadow: {
        inset:
          "inset 1px 1px 0 0 #bcbcbc,inset -1px -1px 0 0 #fff,inset 1px -1px 0 0 #bcbcbc,inset -1px 1px 0 0 #bcbcbc",
        header: "0px 1px 4px 1px #000",
        input: "0px 0px 0px 4px rgba(54,58,61,0.25)",
      },
      backgroundImage: {
        "auth-dark": "url('/assets/images/auth-dark.png')",
        "auth-light": "url('/assets/images/auth-light.png')",
        "login-img": "url('/images/landing_img.png')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        btn: "100% auto",
        btnHover: "140% auto",
      },
      backgroundPosition: {
        "right-center": "right center",
      },
      screens: {
        xs: "420px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        header: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "anime-one": {
          "0%": { opacity: "0.4", transform: "translateX(0px)" },
          "100%": { opacity: "1", transform: "translateX(20px)" },
        },
        "anime-two": {
          "0%": { opacity: "0.4", transform: "translateX(0px)" },
          "100%": { opacity: "1", transform: "translateX(-20px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        header: "header 0.5s ease-out",
        "anime-one": "anime-one 2s ease-in-out 0s infinite alternate",
        "anime-two": "anime-two 2s ease-in-out 0s infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
