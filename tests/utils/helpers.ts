import { Page } from '@playwright/test';

/**
 * Utility helper functions for Playwright tests
 */

/**
 * Wait for a specific duration
 * @param ms - milliseconds to wait
 */
export async function wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Generate random email address
 */
export function generateRandomEmail(): string {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `test.user${timestamp}${random}@example.com`;
}

/**
 * Generate random string
 * @param length - length of the string
 */
export function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

/**
 * Scroll to bottom of page
 */
export async function scrollToBottom(page: Page): Promise<void> {
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
}

/**
 * Scroll to top of page
 */
export async function scrollToTop(page: Page): Promise<void> {
    await page.evaluate(() => {
        window.scrollTo(0, 0);
    });
}

/**
 * Get current timestamp in ISO format
 */
export function getCurrentTimestamp(): string {
    return new Date().toISOString();
}

/**
 * Format date for test data
 */
export function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
}

