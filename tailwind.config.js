
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)"],
      },

      theme: {
        backgroundColor: {
          sidebar: "#333333",
        },
      },
      colors: {
        primary: "#87AA4B",
        primaryBlue: "#40BBF9",
        primaryLight: "#C50D40",
        primaryGreen: "#15D0AA",
        primaryBlack: "#0F172A",
        primaryPurple: "#7133BA",
        lightGreen: "#51F5D4",
        lightRed: "#F40418",
        lightBlue: "#1693D3",
        orange200: "#EF7426",
        magenta: "#E23B9F",
        orange100: "",
        darkBlue: "#26A6DE",
        darkGreen: "#005F6A",
        deepBlue: "#277BA0",
        deepRed: "#CC0818",
        deepPurple: "#5916AA",
        deepGreen: "#10A284",
        gold: "#FFC43D",
        accessBlue: "#1A3E79",
        accessOrange: "#E88105",
        accessGreen: "#A4C519",
        grey100: "#64748B",
        red: "#EC1C24",
        darkGreen: "#446e5d",
        lightYellow: "#30ED1C",
        darkGreen2: "#469852",
        darkRed: "#D0433E",
      },
      borderRadius: {
        "5px": "5px",
      },
      boxShadow: {
        dashboard: "0px 12px 30px 0px rgba(173, 173, 173, 0.25)",
        filterCard: "",
        footer: "-11px 0px 5px rgba(0, 0, 0, 0.15",
        card: "0px 2px 11px rgba(20, 100, 244, 0.15);",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
        widest: ".25em",
        normal: "0.5px",
      },
      lineHeight: {
        "extra-loose": "2.5",
        11: "3.125rem",
      },
      gap: {
        13: "3.125rem",
      },
      fontSize: {
        header: [
          "3rem",
          {
            lineHeight: "3.5rem",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        ],
        "": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
      },
      backgroundImage: {
        // bibleChallenge: "url('../src/assets/images/background-1.png')",
      },
    },
  },
  plugins: [],
};
