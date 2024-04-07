import Page from '../page.ts';
import { $, $$ } from '@wdio/globals'

class ParfumPage extends Page {

    //elements
    parfumPageTitle = () => $('h1.headline-bold');
    quantityOfProductsInTitle = () => $('div.product-overview__headline-wrapper');
    produktartDropdown = () => $('div[data-testid="classificationClassName"]');
    markeDropDown = () => $('div[data-testid="brand"]');
    furwenDropdown = () => $('div[data-testid="gender"]');
    geschenkDropdown = () => $('div[data-testid="Geschenk für"]');
    highlightsDropdown = () => $('div[data-testid="flags"]');

    //filters selected
    selectedFacets = () => $$('button.selected-facets__value');

    //dropdown handle elements
    facetMenu = () => $('div.facet__menu-content');
    facetSearch = () => $('input[name="facet-search"]');
    facetOptions = () => $$(`div.facet-option__checkbox--rating-stars div`);
    facetCloseButton = () => $('button.facet__close-button');

    //grid of products
    gridOfProducts = () => $('#productlisting');
    getProducts = () => $$('div[data-testid="product-tile"]');

    public open() {
        super.open('/c/parfum/01');
    }
}

export default new ParfumPage();