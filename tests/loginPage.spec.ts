import { test } from '../fixtures/base';
import hooks from '../utils/hooks';
import uiPages from '../utils/uiPages';

test.beforeEach(async ({ page }) => {
    await hooks.beforeEach(page, uiPages.index);
    await page.getByLabel('Accept all').click();
});

test.describe('Stand alone tests', () => {
    test.only('login - Email - Submit', async ({ searchPage, loginPage }) => {
        await searchPage.login();
        await loginPage.submitForm();
    });
});

