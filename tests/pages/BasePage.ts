import { Page, Locator } from '@playwright/test';

/**
 * Base Page Object Model class
 * Contains common methods that can be used across all page objects
 */
export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigate to a specific URL
     */
    async goto(url: string) {
        await this.page.goto(url);
    }

    /**
     * Wait for page to load
     */
    async waitForPageLoad() {
        await this.page.waitForLoadState('domcontentloaded');
    }

    /**
     * Get page title
     */
    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    /**
     * Take a screenshot
     */
    async takeScreenshot(name: string) {
        await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
    }

    /**
     * Wait for element to be visible
     */
    async waitForElement(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
    }

    /**
     * Click element with retry logic
     */
    async clickElement(locator: Locator) {
        await locator.click();
    }

    /**
     * Fill input field
     */
    async fillInput(locator: Locator, text: string) {
        await locator.fill(text);
    }

    /**
     * Get element text
     */
    async getElementText(locator: Locator): Promise<string> {
        return await locator.textContent() || '';
    }
}

