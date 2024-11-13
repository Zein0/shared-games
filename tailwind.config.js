export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			red_salsa: '#ff2d47'
  		},
        screens: {
            'xs': '380px', // Example of an extra small breakpoint
        },
  	}
  },
  plugins: [require("tailwindcss-animate")],
}