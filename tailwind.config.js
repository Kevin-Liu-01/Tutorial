module.exports = {
  content: [
    "./src/pages/Main.js",
    "./src/pages/Terms.js",
    "./src/pages/Privacy.js",
    "./src/pages/Rules.js",
    "./src/pages/About.js",
    "./src/pages/Creator.js",
    "./src/App.js",
    "./src/elements/Navbar.js",
    "./src/pages/Documentation.js",
    "./src/elements/Footer.js",
    "./src/elements/Banner.js",
    "./src/pages/FindClient.js",
    "./src/pages/FindTutor.js",
    "./src/elements/Banner.js",
    "./src/pages/CreateTutor.js",
    "./src/pages/CreateClient.js",
  ],
  theme: {
    backgroundImage: {
      tutorialogo: "url('.//images/TutorialLogo1.jfif')",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
