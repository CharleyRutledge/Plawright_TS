import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ApiPage extends BasePage {
    readonly apiLink: Locator;
    readonly methodSelect: Locator;
    readonly urlInput: Locator;
    readonly requestBodyTextarea: Locator;
    readonly sendRequestButton: Locator;
    readonly responseDisplay: Locator;
    readonly headersSection: Locator;

    constructor(page: Page) {
        super(page);
        this.apiLink = page.locator('a[href*="api"]');
        this.methodSelect = page.locator('select[name="method"]');
        this.urlInput = page.locator('input[name="url"]');
        this.requestBodyTextarea = page.locator('textarea[name="body"]');
        this.sendRequestButton = page.locator('button.send-request');
        this.responseDisplay = page.locator('.response-display');
        this.headersSection = page.locator('.headers-section');
    }

    async navigateToApiTesting() {
        await this.apiLink.click();
    }

    async selectMethod(method: 'GET' | 'POST' | 'PUT' | 'DELETE') {
        await this.methodSelect.selectOption(method);
    }

    async enterUrl(url: string) {
        await this.urlInput.fill(url);
    }

    async enterRequestBody(body: string) {
        await this.requestBodyTextarea.fill(body);
    }

    async sendRequest() {
        await this.sendRequestButton.click();
    }

    async getResponseText(): Promise<string> {
        return await this.responseDisplay.textContent() || '';
    }

    async addHeader(name: string, value: string) {
        // Assuming there's an add header functionality
        const addHeaderBtn = this.page.locator('button.add-header');
        await addHeaderBtn.click();
        await this.page.locator('input[name="header-name"]').fill(name);
        await this.page.locator('input[name="header-value"]').fill(value);
    }
}