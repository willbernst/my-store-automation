class footerElements{
    newsletterLabel = () => {return '#block-newsletter-label'}
    emailInputNewsletterSubscribe = () => {return '.input-wrapper > input'} 
    subscribeNewsletterButton = () => {return '.hidden-xs-down'}
    newsletterUnsubscribeInform = () => {return 'form > .row > :nth-child(2) > p'}
    footerContainer = () => {return '.footer-container'}
    inconvenienceInformationText = () => {return 'h4'}
    requestToSearchAgain = () => {return '#content > p'}
    inputToSearchProducts = () => {return 'input[type="text"]'}
    contentSubtitle = () => {return '#content > h3'}

    firstTextContent = () => {return '#content > :nth-child(2)'}
    secondTextContent = () => {return '#content > :nth-child(3)'}
    thirdTextContent = () => {return '#content > :nth-child(4)'}
    fourthTextContent = () => {return '#content > :nth-child(5)'}
    fifthTextContent = () => {return '#content > :nth-child(6)'}
    sixthTextContent = () => {return '#content > :nth-child(7)'}

    productsColumn = () => {return '.col-md-6.links > .row > :nth-child(1)'}
    pricesDropUrl = () => {return '/prices-drop'}
    pricesDropTitle = () => {return '#js-product-list-header'}
    newProductsUrl = () => {return '/new-products'}
    newProductsTitle = () => {return '#js-product-list-header'}
    
    ourCompanyColumn = () => {return '.col-md-6.links > .row > :nth-child(2)'}
    prestaShopSoftwareLink = () => {return 'http://www.prestashop.com'}
    prestaShopEcommerceLink = () => {return 'http://www.prestashop.com/blog/en/'}
    
    yourAccountColumn = () => {return '#block_myaccount_infos'}
    storeInformationColumn = () => {return '.block-contact > .hidden-sm-down'}
}

export default new footerElements()