import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class BugsPage extends BasePage {
    readonly buggyFormLink: Locator;
    readonly formInputs: Locator;
    readonly submitBuggyFormButton: Locator;
    readonly buggyTableLink: Locator;
    readonly tableHeaders: Locator;
    readonly sortButtons: Locator;
    readonly filterInput: Locator;
    readonly buggyInteractionsLink: Locator;
    readonly buggyButtons: Locator;

    constructor(page: Page) {
        super(page);
        this.buggyFormLink = page.locator('a[href*="bugs/form"]');
        this.formInputs = page.locator('input, select, textarea');
        this.submitBuggyFormButton = page.locator('button[type="submit"]');
        this.buggyTableLink = page.locator('a[href*="bugs/table"]');
        this.tableHeaders = page.locator('th');
        this.sortButtons = page.locator('.sort-btn');
        this.filterInput = page.locator('.filter-input');
        this.buggyInteractionsLink = page.locator('a[href*="bugs/interactions"]');
        this.buggyButtons = page.locator('button.buggy');
    }

    async navigateToBuggyForm() {
        await this.buggyFormLink.click();
    }

    async fillBuggyForm() {
        // Fill all inputs with test data to trigger bugs
        const inputs = await this.formInputs.all();
        for (let i = 0; i < inputs.length; i++) {
            await inputs[i].fill(`Test Data ${i}`);
        }
    }

    async submitBuggyForm() {
        await this.submitBuggyFormButton.click();
    }

    async navigateToBuggyTable() {
        await this.buggyTableLink.click();
    }

    async testTableSorting() {
        const sortBtns = await this.sortButtons.all();
        for (const btn of sortBtns) {
            await btn.click();
        }
    }

    async testTableFiltering(filterText: string) {
        await this.filterInput.fill(filterText);
    }

    async navigateToBuggyInteractions() {
        await this.buggyInteractionsLink.click();
    }

    async clickBuggyButtons() {
        const buttons = await this.buggyButtons.all();
        for (const btn of buttons) {
            await btn.click();
        }
    }
}