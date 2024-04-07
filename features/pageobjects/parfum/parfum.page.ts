import Page from '../page.ts';

class ParfumPage extends Page {

    //elements
    parfumPageTitle = () => browser.$('h1.headline-bold');
    quantityOfProductsInTitle = () => browser.$('div.product-overview__headline-wrapper');
    produktartDropdown = () => browser.$('div[data-testid="classificationClassName"]');
    markeDropDown = () => browser.$('div[data-testid="brand"]');
    furwenDropdown = () => browser.$('div[data-testid="gender"]');
    geschenkDropdown = () => browser.$('div[data-testid="Geschenk für"]');

    //dropdown handle elements
    facetMenu = () => browser.$('div.facet__menu-content');
    facetSearch = () => browser.$('input[name="facet-search"]');
    facetOptions = () => browser.$$(`div.facet-option__checkbox--rating-stars div`);
    facetCloseButton = () => browser.$('button.facet__close-button');


    //grid of products
    gridOfProducts = () => browser.$('#productlisting"');
    
    getProducts = () => browser.$$('div[data-testid="product-tile"]');

    //actions 
    public async getNueProductCards(): Promise<WebdriverIO.ElementArray> {
        const elements = await browser.$$('.//div[contains(@class, "eyecatcher--new")]//ancestor::div[@data-testid="product-tile"]');
        return elements;
    }

    public async getNueProductByIndex(index: number): Promise<WebdriverIO.Element> {
        try {
            const selector = `(.//div[contains(@class, "eyecatcher--new")]//ancestor::div[@data-testid="product-tile"])[${index + 1}]`;
            await browser.waitUntil(async () => {
                return (await browser.$(selector)).isExisting();
            }, {
                timeout: 10000,
                timeoutMsg: 'expected element to exist after 5s'
            });
            const element = await browser.$(selector);
            return element;
        } catch (error) {
            console.error(`Error fetching element at index ${index}:`, error);
            throw error; // or handle the error as needed
        }
    }

    public async getSaleProductCards(): Promise<WebdriverIO.ElementArray> {
        const elements = await browser.$$('.//div[contains(@class, "eyecatcher--discount")]//ancestor::div[@data-testid="product-tile"]');
        return elements;
    }

    public async getSaleProductByIndex(index: number): Promise<WebdriverIO.Element> {
        const element = await browser.$(`(//div[contains(@class, "eyecatcher--discount")]//ancestor::div[@data-testid="product-tile"])[${index + 1}]`);
        return element;
    }

    public open() {
        super.open('/c/parfum/01');
    }
}

export default new ParfumPage();