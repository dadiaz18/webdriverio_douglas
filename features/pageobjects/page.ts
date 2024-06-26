import { browser, $ } from '@wdio/globals'
import NavBar from './nav_bar.page.ts'
import CookiesPage from './cookies.page.ts'

export default class Page {
    
    // .page-loader-wrapper
    pageLoader = () => $('.page-loader-wrapper');

    get CookiesModalPage() {
        return CookiesPage;
    }

    get navBar() {
        return NavBar;
    }
    public open(path: string) {
        browser.navigateTo(`https://www.douglas.de/de${path}`);
    }
    
}
