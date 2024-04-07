class CookiesPage{
    
    //elements
    modalBody = () => browser.$('div.modal-overlay__root');
    denyAllCookiesButton = () => browser.$('button.uc-list-button__deny-all');
    moreInformationButton = () => browser.$('button.uc-list-button__more-information');
    acceptAllCookiesButton = () => browser.$('button.uc-list-button__accept-all');
}

export default new CookiesPage();
