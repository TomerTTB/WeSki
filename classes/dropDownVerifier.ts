import { Locator, expect, type Page } from '@playwright/test';

export class ElementsDropDown {
    static async verifyDropDown(page: Page, elements: Locator[]) {
        for (let i = 0; i < elements.length; i++) {
            //console.log(elements);
            await elements[i].click();
        };
    };

    static async dropDownuserSelect(page: Page, elements: Locator[], elementsUser: Locator) {
        for (let i = 0; i < elements.length; i++) {
            await elements[i].click();
            await elementsUser[i].click();
        };
    };
};
