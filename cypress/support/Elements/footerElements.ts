class footerElements{
    newsletterLabel = () => {return '#block-newsletter-label'}
    emailInputNewsletterSubscribe = () => {return '.input-wrapper > input'} 
    subscribeNewsletterButton = () => {return '.hidden-xs-down'}
    newsletterUnsubscribeInform = () => {return 'form > .row > :nth-child(2) > p'}
    footerContainer = () => {return '.footer-container'}
    inconvenienceInformationText = () => {return 'h4'}
    requestToSearchAgain = () => {return '#content > p'}
    inputToSearchProducts = () => {return 'input[type="text"]'}
    contentSubtitle = () => {return 'h3'}

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

    sitemapOurOffersTitle = () => {return ':nth-child(1) > h2'}
    sitemapOurOffersColumn = () => {return '.container-fluid > .row > :nth-child(1) > :nth-child(2)'}
    sitemapCategoriesTitle = () => {return ':nth-child(2) > h2'}
    sitemapCategoriesColumn = () => {return '.container-fluid > .row > :nth-child(2) > :nth-child(2) > :nth-child(1)'}
    sitemapYourAccountTitle = () => {return ':nth-child(3) > h2'}
    sitemapYourAccountColumn = () => {return ':nth-child(3) > ul'}
    sitemapPagesTitle = () => {return ':nth-child(4) > h2'}
    sitemapPagesColumn = () => {return ':nth-child(4) > ul'}
    
    newProductPageLink = () => {return '#new-product-page'}
    brandsPageLink = () => {return '#manufacturer-page'}
    graficCornerPageLink = () => {return '#manufacturer-page-2'}
    studioDesignPageLink = () => {return '#manufacturer-page-1'}
    supplierPageLink = () => {return '#supplier-page'}
    
    yourAccountColumn = () => {return '#block_myaccount_infos'}
    storeInformationColumn = () => {return '.block-contact > .hidden-sm-down'}
}

export default new footerElements()