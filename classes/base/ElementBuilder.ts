import { Page, Locator } from '@playwright/test';

export class ElementBuilder {
    static buildElements(page: Page,
        elements: { functionType: string; locator?: string; role?, text: string; text2: string, exact?: boolean }[]): Locator[] {
        const myElements: Locator[] = [];

        for (const element of elements) {
            const { functionType, ...params } = element;
            let currentElement;

            switch (element.functionType) {
                case 'getByText':
                    currentElement = page.getByText(params.text, params.exact ? { exact: true } : {});
                    break;
                case 'getByRole':
                    currentElement = page.getByRole(params.role, { name: params.text });
                    break;
                case 'getByPlaceholder':
                    currentElement = page.getByPlaceholder(params.text);
                    break;
                case 'getByDataTestId':
                    currentElement = page.locator(`[data-test-id="${params.text}"]`).getByText(params.text2);
                    break;
                case 'locator':
                    currentElement = page.locator(params.locator!);
                    break;
            }
            if (currentElement) {
                myElements.push(currentElement);
            };
        }
        return myElements;
    };
};