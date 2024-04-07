import { $ } from '@wdio/globals'
class NavBarPage{
    //elements
    parfumOption = () => $('[data-uid="FragrancesNavNode_DE"]');
}

export default new NavBarPage();
