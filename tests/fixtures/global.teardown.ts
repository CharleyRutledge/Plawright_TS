import { type FullConfig } from '@playwright/test';

/**
 * Global Teardown
 * This runs once after all tests complete
 * Use for cleanup, stopping services, etc.
 */
async function globalTeardown(config: FullConfig) {
    console.log('Starting global teardown...');

    // Add your teardown logic here
    // Example: Clean up test data, close connections, etc.

    console.log('Global teardown completed');
}

export default globalTeardown;

