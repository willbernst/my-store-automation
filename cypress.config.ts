const { defineConfig } = require("cypress");

export default defineConfig({
  projectId: "tmgmg7",
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  e2e: {
    baseUrl: 'https://marcelodebittencourt.com/demoprestashop',
    specPattern: "cypress/e2e/**/*.{js,ts,feature}",
  }
})
