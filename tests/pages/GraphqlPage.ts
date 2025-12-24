import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class GraphqlPage extends BasePage {
    readonly graphqlLink: Locator;
    readonly queryTextarea: Locator;
    readonly variablesTextarea: Locator;
    readonly executeButton: Locator;
    readonly responseDisplay: Locator;
    readonly schemaExplorer: Locator;

    constructor(page: Page) {
        super(page);
        this.graphqlLink = page.locator('a[href*="graphql"]');
        this.queryTextarea = page.locator('textarea.query');
        this.variablesTextarea = page.locator('textarea.variables');
        this.executeButton = page.locator('button.execute');
        this.responseDisplay = page.locator('.graphql-response');
        this.schemaExplorer = page.locator('.schema-explorer');
    }

    async navigateToGraphql() {
        await this.graphqlLink.click();
    }

    async enterQuery(query: string) {
        await this.queryTextarea.fill(query);
    }

    async enterVariables(variables: string) {
        await this.variablesTextarea.fill(variables);
    }

    async executeQuery() {
        await this.executeButton.click();
    }

    async getResponseText(): Promise<string> {
        return await this.responseDisplay.textContent() || '';
    }

    async exploreSchema() {
        await this.schemaExplorer.click();
    }
}