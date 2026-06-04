/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Meshy-like design tokens
        bg: {
          base: '#18181B',
          strong: '#27272A',
          shade: '#3F3F46',
          translucent: 'rgba(255,255,255,0.04)',
          'translucent-strong': 'rgba(255,255,255,0.07)',
        },
        label: {
          title: '#FFFFFF',
          base: '#E0E0E0',
          soft: '#BCBCBC',
          muted: '#707070',
        },
        'accent-blue': {
          base: '#3B82F6',
          'base-hover': '#60A5FA',
          label: '#3B82F6',
          soft: 'rgba(59,130,246,0.15)',
        },
        cyan: {
          base: '#22D3EE',
          soft: 'rgba(34,211,238,0.12)',
        },
        wash: {
          blue: '#3B82F6',
          cyan: '#22D3EE',
          indigo: '#6366F1',
          pink: '#F6A0D3',
          orange: '#DF9578',
          purple: '#A043BF',
        },
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
        'inter-tight': ['Inter Tight', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        'league-gothic': ['League Gothic', 'sans-serif'],
      },
      boxShadow: {
        'accent-glow': '0 0 30px rgba(59,130,246,0.3)',
        'accent-glow-sm': '0 0 15px rgba(59,130,246,0.2)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "cursor-blink": {
          from: { opacity: "1" },
          "50%": { opacity: "0" },
          to: { opacity: "1" },
        },
        "shadow-slide": {
          from: {
            background: "hsl(var(--primary) / 20%)",
            right: "460px",
          },
          to: {
            background: "hsl(var(--primary) / 80%)",
            right: "160px",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "cursor-blink": "cursor-blink 1s steps(1, end) infinite",
        "shadow-slide": "shadow-slide 4s linear alternate infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
