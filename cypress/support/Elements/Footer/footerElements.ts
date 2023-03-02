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
    pricesDropTitle = () => {return '#js-product-list-header'}
    newProductsTitle = () => {return '#js-product-list-header'}

    storeInformationColumn = () => {return '.block-contact > .hidden-sm-down'}
}

export default new footerElements()