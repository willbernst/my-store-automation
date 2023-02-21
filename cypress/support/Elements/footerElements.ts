class footerElements{
    newsletterLabel = () => {return '#block-newsletter-label'}
    emailInputNewsletterSubscribe = () => {return '.input-wrapper > input'} 
    subscribeNewsletterButton = () => {return '.hidden-xs-down'}
    newsletterUnsubscribeInform = () => {return 'form > .row > :nth-child(2) > p'}
    footerContainer = () => {return '.footer-container'}
    inconvenienceInformationText = () => {return 'h4'}
    requestToSearchAgain = () => {return '#content > p'}
    inputToSearchProducts = () => {return 'input[type="text"]'}

    productsColumn = () => {return '.col-md-6.links > .row > :nth-child(1)'}
    pageTitle = () => {return 'h2'}
    pricesDropUrl = () => {return '/prices-drop'}
    pricesDropTitle = () => {return '#js-product-list-header'}
    newProductsUrl = () => {return '/new-products'}
    newProductsTitle = () => {return '#js-product-list-header'}
    
    ourCompanyColumn = () => {return '.col-md-6.links > .row > :nth-child(2)'}
    yourAccountColumn = () => {return '#block_myaccount_infos'}
    storeInformationColumn = () => {return '.block-contact > .hidden-sm-down'}
}

export default new footerElements()