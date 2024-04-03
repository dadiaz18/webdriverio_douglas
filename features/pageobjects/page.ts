import { browser } from '@wdio/globals'
import NavBar from './nav_bar.page.ts'

export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    //i want to add the object nav_bar.page.ts to the page object
    get navBar() {
        return NavBar
    }

    public open (path: string) {
        return browser.url(`https://www.douglas.de/${path}`)
    }
}
