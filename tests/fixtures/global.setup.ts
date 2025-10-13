import { chromium, type FullConfig } from '@playwright/test';

/**
 * Global Setup
 * This runs once before all tests
 * Use for database seeding, starting services, etc.
 */
async function globalSetup(config: FullConfig) {
    console.log('Starting global setup...');

    // Example: Authenticate and save state
    // const { baseURL, storageState } = config.projects[0].use;
    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();

    // try {
    //   await context.tracing.start({ screenshots: true, snapshots: true });
    //   await page.goto(baseURL!);
    //   await page.getByLabel('User Name').fill('user');
    //   await page.getByLabel('Password').fill('password');
    //   await page.getByText('Sign in').click();
    //   await context.storageState({ path: storageState as string });
    //   await context.tracing.stop({
    //     path: './test-results/setup-trace.zip',
    //   });
    //   await browser.close();
    // } catch (error) {
    //   await context.tracing.stop({
    //     path: './test-results/failed-setup-trace.zip',
    //   });
    //   await browser.close();
    //   throw error;
    // }

    console.log('Global setup completed');
}

export default globalSetup;

