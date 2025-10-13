import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page Object Model for the Playwright Homepage
 */
export class HomePage extends BasePage {
    readonly getStartedLink: Locator;
    readonly searchButton: Locator;
    readonly docsLink: Locator;
    readonly apiLink: Locator;
    readonly communityLink: Locator;

    constructor(page: Page) {
        super(page);
        this.getStartedLink = page.getByRole('link', { name: 'Get started' });
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.docsLink = page.getByRole('link', { name: 'Docs' });
        this.apiLink = page.getByRole('link', { name: 'API' });
        this.communityLink = page.getByRole('link', { name: 'Community' });
    }

    /**
     * Navigate to the homepage
     */
    async navigate() {
        await this.goto('/');
    }

    /**
     * Click the Get Started link
     */
    async clickGetStarted() {
        await this.clickElement(this.getStartedLink);
    }

    /**
     * Open search dialog
     */
    async openSearch() {
        await this.clickElement(this.searchButton);
    }

    /**
     * Navigate to Docs section
     */
    async navigateToDocs() {
        await this.clickElement(this.docsLink);
    }

    /**
     * Navigate to API section
     */
    async navigateToAPI() {
        await this.clickElement(this.apiLink);
    }

    /**
     * Navigate to Community section
     */
    async navigateToCommunity() {
        await this.clickElement(this.communityLink);
    }
}

