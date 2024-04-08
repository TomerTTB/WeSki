import { expect } from '@playwright/test';
import {
    Locator, Page, ElementBuilder, PageBase, TextVerifier, searchElementsText, searchDropDownElements, ElementsDropDown, searchUserParams, ElementsClick, searchElementsButton
} from '../utils/imports.ts';

export class SearchPage extends PageBase {

    //Variables 
    myElementsText: Locator[];
    myElementsDropDown: Locator[];
    myElementsUserParams: Locator[];
    myElementsClick: Locator[];

    //constructor
    constructor(page: Page) {
        super(page);
        this.myElementsText = ElementBuilder.buildElements(page, searchElementsText);
        this.myElementsDropDown = ElementBuilder.buildElements(page, searchDropDownElements);
        this.myElementsUserParams = ElementBuilder.buildElements(page, searchUserParams);
        this.myElementsClick = ElementBuilder.buildElements(page, searchElementsButton);
    };

    //Methods
    async verifyText() {
        await TextVerifier.verifyText(this.page, this.myElementsText);
    };

    async verifyDropDown() {
        await ElementsDropDown.verifyDropDown(this.page, this.myElementsDropDown);
    };

    async dropDownUserSelect() {
        await ElementsDropDown.dropDownuserSelect(this.page, this.myElementsDropDown, this.myElementsUserParams);
    }

    async submitForm() {
        await ElementsClick.clickOnElement(this.page, this.myElementsClick);
    }

    async login() {
        await this.page.locator('[data-test-id="home\\:auth-action-container"]').click();
        await this.page.locator('[data-test-id="log-in-dropdown-item"]').click();
    }
};
