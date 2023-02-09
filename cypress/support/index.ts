export {}
import "cypress-real-events";


declare global {
    namespace Cypress {
        interface Chainable {
            loginSuccessfullyViaAPI(): Chainable<any>
        }
    }
}