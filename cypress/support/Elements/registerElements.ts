class registerElements {
    registerPageUrl = () => { return '/login?create_account'}

    registrationForm = () => {return '#content'}

    socialTitleSelect = () => {return '#customer-form > section > :nth-child(1)'}
    firstNameField = () => {return ':nth-child(2) > .col-md-6 > .form-control'}
    lastNameField = () => {return ':nth-child(3) > .col-md-6 > .form-control'}
    emailField = () => {return ':nth-child(4) > .col-md-6 > .form-control'}
    passwordField = () => {return '.input-group > .form-control'}
    birthDateField = () => {return ':nth-child(6) > .col-md-6 > .form-control'}

    alert = () => {return '.alert'}

    reciveOffersCheckbox = ( )=> {return ':nth-child(7) > .col-md-6 > .custom-checkbox > label'}
    newsletterCheckbox = () => {return ':nth-child(8) > .col-md-6 > .custom-checkbox > label'}
    termsAndConditionsPolicy = () => {return ':nth-child(9) > .col-md-6 > .custom-checkbox > label'}

    registerButton = () => {return '.form-footer > .btn'}
}

export default new registerElements()