export {}
import "cypress-real-events";


declare global {
    namespace Cypress {
        interface Chainable {
            loginViaGUI(): Chainable<any>
            iteratingOverAJSONObject(): Chainable<any>
        }
    }
}