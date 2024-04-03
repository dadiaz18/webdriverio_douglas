import { $ } from '@wdio/globals'
import Page from './page.js';
import CookiesPage from './cookies.page.js';

class HomePage extends Page {
    
    get CookiesModalPage() {
        return CookiesPage
    }

    public open () {
        return super.open('/de');
    }
}

export default new HomePage();
