import { $ } from '@wdio/globals'

class NavBarPage{
    
    elements = {
        parfumOption: () => $('[data-uid="FragrancesNavNode_DE"] a'),
    }

    //actions
    public async selectParfumOption() {
        await this.elements.parfumOption().click();
    }

}

export default new NavBarPage();
