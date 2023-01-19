const { defineConfig } = require("cypress");

import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsBuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://marcelodebittencourt.com/demoprestashop',
    specPattern: "cypress/e2e/**/*.{js,ts,feature}",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsBuildPlugin(config)]
        })
      );
      return config
    },
  },
});
