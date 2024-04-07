export default class ProductCardPage{
    container: WebdriverIO.Element;

    constructor(container: WebdriverIO.Element) {
        this.container = container;
    }

    //elements
    cardContainer = () => this.container;
    eyeCatcherDiscount = () => this.container.$('[class*="eyecatcher--discount"]');
    eyeCatcherNew = () => this.container.$('[class*="eyecatcher--new"]');
    brandTitle = () => this.container.$('div.product-info div.top-brand');
    productName = () => this.container.$('div.product-info div.brand-line');
    productType = () => this.container.$('div.product-info div.name');
    productCategory = () => this.container.$('div.product-info div.category');
    productDiscountPrice = () => this.container.$('div.product-price__discount span.product-price__price');

}
