import { $ } from '@wdio/globals'

class CookiesPage{
    
    elements = {
        modalBody: () => $('div.modal-overlay__root'),
        denyAllCookiesButton: () => $('button.uc-list-button__deny-all'),
        moreInformationButton: () => $('button.uc-list-button__more-information'),
        acceptAllCookiesButton: () => $('button.uc-list-button__accept-all')
    }

    //actions
    public async isModalVisible() {
        await this.elements.modalBody().waitForExist();
    }

    public async denyAllCookies() {
        await this.elements.denyAllCookiesButton().click();
    }

    public async acceptAllCookies() {
        await this.elements.acceptAllCookiesButton().click();
    }

    public async moreInformation() {
        await this.elements.moreInformationButton().click();
    }

}

export default new CookiesPage();
