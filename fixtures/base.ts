import { test as baseTest } from '@playwright/test';
import { SearchPage } from '../pages/searchPage';
import { LoginPage } from '../pages/loginPage';

// This file is setting the fixtures to be used in tests
type MyFixtures = {
    searchPage: SearchPage;
    loginPage: LoginPage;
}

export const test = baseTest.extend<MyFixtures>({
    searchPage: async ({ page }, use) => {
        await use(new SearchPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
})
export { expect } from '@playwright/test';
