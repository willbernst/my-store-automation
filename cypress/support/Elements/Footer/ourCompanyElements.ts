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
}

export default new ourCompanyElements()