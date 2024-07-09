import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/pexels-finn-semmer-767004729-24605372.jpg')",
        "": "",
        "": "",
        "": "",
        "": "",
      },
      colors: {
        "customLight": "#F2F2F2",
        "customDark": "#580459",
        "customNeutral": "#A66583",
      },
      fontSize: {
        'body': ['16px', '1.5'],
        'h1': ['32px', '1.2'],
        'h2': ['24px', '1.3'],
        'h3': ['20px', '1.4'],
        'button': ['16px', '1.2']
      },
    },
  },
  plugins: [],
};
export default config;
