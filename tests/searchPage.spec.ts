import { test } from '../fixtures/base';
import hooks from '../utils/hooks';
import uiPages from '../utils/uiPages';

test.beforeEach(async ({ page }) => {
    await hooks.beforeEach(page, uiPages.index);
    await page.getByLabel('Accept all').click();
});

test.describe('Stand alone tests', () => {
    test.only('Verify search texts', async ({ searchPage }) => {
        await searchPage.verifyText();
    });

    test('Verify dropDown', async ({ searchPage }) => {
        await searchPage.verifyDropDown();
    });

    test('Verify dropDown user select', async ({ searchPage }) => {
        await searchPage.dropDownUserSelect();
    });

    test('Submit button', async ({ searchPage }) => {
        await searchPage.submitForm();
    });

    test('Input Email', async ({ searchPage, loginPage }) => {
        await searchPage.login();
        await loginPage.submitForm();
    });
});


test.describe('User Flow - search - select - submit', () => {
    test('Verify search texts', async ({ searchPage }) => {
        await searchPage.verifyText();
        await searchPage.verifyDropDown();
        await searchPage.dropDownUserSelect();
        await searchPage.submitForm();
    });
});
