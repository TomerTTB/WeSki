import { Locator, expect, type Page } from '@playwright/test';
import practiceFormUser from '../data/practiceForm/practiceFormUser.json';

export class TextVerifier {
    static async verifyText(page: Page, elements: Locator[]) {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            await expect(element).toBeVisible();
        }
    }
};
