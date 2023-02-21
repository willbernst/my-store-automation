class footerElements{
    newsletterLabel = () => {return '#block-newsletter-label'}
    emailInputNewsletterSubscribe = () => {return '.input-wrapper > input'} 
    subscribeNewsletterButton = () => {return '.hidden-xs-down'}
    newsletterUnsubscribeInform = () => {return 'form > .row > :nth-child(2) > p'}
    footerContainer = () => {return '.footer-container'}
    inconvenienceInformationText = () => {return 'h4'}
    requestToSearchAgain = () => {return '#content > p'}
    inputToSearchProducts = () => {return 'input[type="text"]'}
    pageTitle = () => {return 'h2' && 'h1'}
    contentTitle = () => {return '#content > h2'}
    contentSubtitle = () => {return '#content > h3'}
    contentText1 = () => {return '#content > :nth-child(3)'}
    contentText2 = () => {return '#content > :nth-child(4)'}

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