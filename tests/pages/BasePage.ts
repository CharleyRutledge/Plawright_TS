import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async waitForNavigation(): Promise<void> {
    await this.page.waitForNavigation();
  }

  async waitForElement(locator: Locator, timeout: number = 5000): Promise<void> {
    await expect(locator).toBeVisible({ timeout });
  }

  async getText(locator: Locator): Promise<string> {
    return await locator.textContent() || '';
  }

  async getAttribute(locator: Locator, attribute: string): Promise<string | null> {
    return await locator.getAttribute(attribute);
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
  }

  async isEnabled(locator: Locator): Promise<boolean> {
    return await locator.isEnabled();
  }

  async fill(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }

  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  async doubleClick(locator: Locator): Promise<void> {
    await locator.dblclick();
  }

  async rightClick(locator: Locator): Promise<void> {
    await locator.click({ button: 'right' });
  }

  async hover(locator: Locator): Promise<void> {
    await locator.hover();
  }

  async press(locator: Locator, key: string): Promise<void> {
    await locator.press(key);
  }

  async selectOption(locator: Locator, value: string): Promise<void> {
    await locator.selectOption(value);
  }

  async check(locator: Locator): Promise<void> {
    await locator.check();
  }

  async uncheck(locator: Locator): Promise<void> {
    await locator.uncheck();
  }

  async isChecked(locator: Locator): Promise<boolean> {
    return await locator.isChecked();
  }

  async waitForElementHidden(locator: Locator, timeout: number = 5000): Promise<void> {
    await expect(locator).toBeHidden({ timeout });
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async getPageUrl(): Promise<string> {
    return this.page.url();
  }

  async screenshot(filename: string): Promise<void> {
    await this.page.screenshot({ path: filename });
  }

  async dragAndDrop(sourceLocator: Locator, targetLocator: Locator): Promise<void> {
    await sourceLocator.dragTo(targetLocator);
  }

  async scrollIntoView(locator: Locator): Promise<void> {
    await locator.scrollIntoViewIfNeeded();
  }

  async acceptDialog(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
  }

  async rejectDialog(): Promise<void> {
    this.page.once('dialog', dialog => dialog.dismiss());
  }

  async waitForTimeout(ms: number): Promise<void> {
    await this.page.waitForTimeout(ms);
  }
}
