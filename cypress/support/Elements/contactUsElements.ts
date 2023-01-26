 class contactUsElements {
    contactUsPageUrl = () => { return '/contact-us' }

    contactUsHeaderLink = () => { return '#contact-link > a'}

    storeInformations = () => { return '.contact-rich'}
    storeInfosBlock = () => {return '.block'}
    storeInfosData = () => {return '.data'}
    storeInfoEmail = () => {return ''}

    contactUsForm = () => {return '.form-fields'}
    contactUsTitlePage = () => {return 'h3'}
    contactSubject = () => {return ':nth-child(2) > .col-md-6 > .form-control'}
    contactEmail = () => {return ':nth-child(3) > .col-md-6 > .form-control'}
    contactAttachment = () => {return '.group-span-filestyle > .btn'}
    contactAttachmentTitle = () => {return 'input[type="text"]'}
    contactMessage = ( ) => {return '.col-md-9 > .form-control'}

    submitFormContact = () => {return '.form-footer > .btn'}

    successMessage = () => {return 'form > .col-xs-12'}
    errorMessageWhenFillingOutTheForm = () => {return 'form > .col-xs-12'}
}

 export default new contactUsElements()