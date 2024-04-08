import { expect } from '@playwright/test';
import {
    Locator, Page, ElementBuilder, PageBase, TextVerifier, searchElementsText, ElementsClick, loginElementsButton
} from '../utils/imports.ts';

export class LoginPage extends PageBase {

    //Variables 
    myElementsText: Locator[];
    myElementsClick: Locator[];

    //constructor
    constructor(page: Page) {
        super(page);
        this.myElementsText = ElementBuilder.buildElements(page, searchElementsText);
        this.myElementsClick = ElementBuilder.buildElements(page, loginElementsButton);
    };

    //Methods

    async emailGenerator() {
        //Not implemented
        // await emailGenerator(this.page, Params for generator)
    }

    async submitForm() {
        await ElementsClick.clickOnElement(this.page, this.myElementsClick);
    }
};


