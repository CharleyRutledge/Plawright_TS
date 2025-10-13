import { test, expect } from '@playwright/test';

/**
 * Seed Test
 * This test serves as the foundation for Playwright Agents (planner, generator, healer)
 * 
 * Purpose:
 * - Demonstrates the testing environment setup
 * - Provides example patterns for generated tests
 * - Sets up necessary context (fixtures, imports, etc.)
 * 
 * The planner agent will:
 * 1. Run this seed test to understand your environment
 * 2. Use it as a template for generating new tests
 * 3. Ensure generated tests follow the same patterns
 */

test.describe('Seed Test', () => {
  test('seed - basic navigation and interaction', async ({ page }) => {
    // Navigate to the application
    await page.goto('/');

    // Verify page loaded successfully
    await expect(page).toHaveTitle(/Playwright/);

    // Example interaction - click Get Started
    await page.getByRole('link', { name: 'Get started' }).click();

    // Verify navigation worked
    await expect(page).toHaveURL(/.*docs.*/);

    // Verify page content
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

    console.log('Seed test completed successfully');
  });
});
