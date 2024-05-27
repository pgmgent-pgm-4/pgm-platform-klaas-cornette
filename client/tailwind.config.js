
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '15px': '15px',
      },
      padding: {
        'padding-left': 'auto',
        'padding-righ': 'auto',
      },
      width: {
        'custom-1440': '1440px',
      },
      maxWidth: {
        'custom-1440': '1440px',
      },
      colors: {
        'custom-red': '#FFD8CF',
        'custom-green': '#DBFFCF',
        'custom-purple': '#F3CFFF',
        'cutom-darkblue': '#01294D',
      },
    },
  },
  plugins: [],
};
