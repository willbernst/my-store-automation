class ourCompanyElements{
    title = () => {return 'h1'}
    ourCompanyColumn = () => {return '.col-md-6.links > .row > :nth-child(2)'}
    sitemapOurOffersTitle = () => {return ':nth-child(1) > h2'}
    sitemapOurOffersColumn = () => {return '.container-fluid > .row > :nth-child(1) > :nth-child(2)'}
    sitemapCategoriesTitle = () => {return ':nth-child(2) > h2'}
    sitemapCategoriesColumn = () => {return '.container-fluid > .row > :nth-child(2) > :nth-child(2) > :nth-child(1)'}
    sitemapYourAccountTitle = () => {return ':nth-child(3) > h2'}
    sitemapYourAccountColumn = () => {return ':nth-child(3) > ul'}
    sitemapPagesTitle = () => {return ':nth-child(4) > h2'}
    sitemapPagesColumn = () => {return ':nth-child(4) > ul'}
    sitemapBrandsContainer = () => {return '#wrapper > .container'}
    newProductPageLink = () => {return '#new-product-page'}
    brandsPageLink = () => {return '#manufacturer-page'}
    graficCornerPageLink = () => {return '#manufacturer-page-2'}
    studioDesignPageLink = () => {return '#manufacturer-page-1'}
    supplierPageLink = () => {return '#supplier-page'}

    firstBrandCard = () => {return '#main > ul > :nth-child(1)'}
    secondBrandCard = () => {return '#main > ul > :nth-child(2)'}
    brandImg = () => {return 'brand-img'}
    brandInfos = () => {return 'brand-infos'}
    brandsInfosLink = () => {return 'brand-infos > p > a'}
    brandProducts = () => {return 'brand-products'}

    subtitle = () => {return 'p > span'}
    totalProductsLabel = () => {return '.total-products > p'}
    products = () => {return '.products'}
    productName = () => {return '.product-title'}
    productPrice = () => {return '.price'}
    productsBeingShown = () => {return '.pagination > .col-md-4'}

    productMiniature = () => {return '.product-miniature'}
    priceInsideTheProductPage = () => {return '.current-price > span'}
    productDescriptionInsideTheProductPage = () => {return '#product-description-short-17'}
    paperTypeLabel = () => {return '.control-label'}
    paperTypeSelect = () => {return '#group_4'}
    quantityOfProductsLabel = () => {return '.product-add-to-cart > .control-label'}
    quantityWanted = () => {return '#quantity_wanted'}
    arrowToAddQuantity = () => {return '.bootstrap-touchspin-up > .material-icons'}
    addToCartButton = () => {return '.add-to-cart'}
    socialSharing = () => {return '.social-sharing > ul'}
    blockReassurance = () => {return '#block-reassurance'}
    productDescription = () => {return '#description'}
    productDetails = () => {return '#product-details'}
    productDetailsLink = () => {return ':nth-child(2) > .nav-link'}
    productReference = () => {return '.product-reference > span'}
    productQuantity = () => {return '.product-quantities > span'}
    productComposition = () => {return '.data-sheet > :nth-child(2)'}
    productProperty = () => {return '.data-sheet > :nth-child(4)'}
}

export default new ourCompanyElements()