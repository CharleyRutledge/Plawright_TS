import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

/**
 * Custom fixtures extending Playwright's base test
 * This allows for reusable setup code across tests
 */

type MyFixtures = {
    homePage: HomePage;
};

export const test = base.extend<MyFixtures>({
    // HomePage fixture - automatically creates a HomePage instance for each test
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
});

export { expect } from '@playwright/test';

