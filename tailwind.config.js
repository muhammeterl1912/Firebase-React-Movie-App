/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  // Kendi tema ayarlarınızı eklemek için bu kısmı kullanın.
  theme: {
    // Eğer tailwind'in varsayılan tema ayarları yerine kendi ayarlarınızı eklemek istemiyorsanız, mutlaka "extend" nesnesi içinde eklemeniz gerekir. Aksi takdirde, tüm tema nesnesi değiştirilir ve kendi eklediklerinizin dışındakileri kullanamazsınız.
    extend: {
      colors: {
        "gray-dark-main": "#23242a",
        "gray-dark-second": "#28292d",
        "gray-light": "#d3dce6",
        "red-main": "#ff4b45",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode: "selector",
};
