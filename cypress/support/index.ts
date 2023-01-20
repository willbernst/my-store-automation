export {}

declare global {
    namespace Cypress {
        interface Chainable {
            loginSuccessfullyViaAPI(): Chainable<any>
        }
    }
}