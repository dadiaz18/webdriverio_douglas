import { $ } from '@wdio/globals'
class CookiesPage{
    
    //elements
    modalBody = () => $('div.modal-overlay__root');
    denyAllCookiesButton = () => $('button.uc-list-button__deny-all');
    moreInformationButton = () => $('button.uc-list-button__more-information');
    acceptAllCookiesButton = () => $('button.uc-list-button__accept-all');
}

export default new CookiesPage();
