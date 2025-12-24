import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly BASE_URL = 'https://practice-automation.com';
  readonly formFieldsLink: Locator;
  readonly clickEventsLink: Locator;
  readonly tablesLink: Locator;
  readonly fileDownloadLink: Locator;
  readonly fileUploadLink: Locator;
  readonly popupsLink: Locator;
  readonly modalsLink: Locator;
  readonly slidersLink: Locator;
  readonly accordionLink: Locator;
  readonly hoverLink: Locator;
  readonly jsDelaysLink: Locator;
  readonly iframesLink: Locator;
  readonly brokenImagesLink: Locator;
  readonly brokenLinksLink: Locator;
  readonly pageHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.formFieldsLink = page.locator('a', { hasText: 'Form Fields' });
    this.clickEventsLink = page.locator('a', { hasText: 'Click Events' });
    this.tablesLink = page.locator('a', { hasText: 'Tables' });
    this.fileDownloadLink = page.locator('a', { hasText: 'File Download' });
    this.fileUploadLink = page.locator('a', { hasText: 'File Upload' });
    this.popupsLink = page.locator('a', { hasText: 'Popups' });
    this.modalsLink = page.locator('a', { hasText: 'Modals' });
    this.slidersLink = page.locator('a', { hasText: 'Sliders' });
    this.accordionLink = page.locator('a', { hasText: 'Accordion' });
    this.hoverLink = page.locator('a', { hasText: 'Hover' });
    this.jsDelaysLink = page.locator('a', { hasText: 'JavaScript Delays' });
    this.iframesLink = page.locator('a', { hasText: 'Iframes' });
    this.brokenImagesLink = page.locator('a', { hasText: 'Broken Images' });
    this.brokenLinksLink = page.locator('a', { hasText: 'Broken Links' });
    this.pageHeading = page.locator('h1');
  }

  async goto(): Promise<void> {
    await super.goto(this.BASE_URL);
  }

  async clickFormFieldsModule(): Promise<void> {
    await this.click(this.formFieldsLink);
  }

  async clickClickEventsModule(): Promise<void> {
    await this.click(this.clickEventsLink);
  }

  async clickTablesModule(): Promise<void> {
    await this.click(this.tablesLink);
  }

  async clickFileDownloadModule(): Promise<void> {
    await this.click(this.fileDownloadLink);
  }

  async clickFileUploadModule(): Promise<void> {
    await this.click(this.fileUploadLink);
  }

  async clickPopupsModule(): Promise<void> {
    await this.click(this.popupsLink);
  }

  async clickModalsModule(): Promise<void> {
    await this.click(this.modalsLink);
  }

  async clickSlidersModule(): Promise<void> {
    await this.click(this.slidersLink);
  }

  async clickAccordionModule(): Promise<void> {
    await this.click(this.accordionLink);
  }

  async clickHoverModule(): Promise<void> {
    await this.click(this.hoverLink);
  }

  async clickJavaScriptDelaysModule(): Promise<void> {
    await this.click(this.jsDelaysLink);
  }

  async clickIframesModule(): Promise<void> {
    await this.click(this.iframesLink);
  }

  async clickBrokenImagesModule(): Promise<void> {
    await this.click(this.brokenImagesLink);
  }

  async clickBrokenLinksModule(): Promise<void> {
    await this.click(this.brokenLinksLink);
  }

  async isModuleVisible(moduleName: string): Promise<boolean> {
    const moduleLink = this.page.locator('a', { hasText: moduleName });
    return await this.isVisible(moduleLink);
  }

  async navigateToModule(moduleName: string): Promise<void> {
    const moduleLink = this.page.locator('a', { hasText: moduleName });
    await this.click(moduleLink);
  }

  async getPageHeading(): Promise<string> {
    return await this.getText(this.pageHeading);
  }

  async verifyHomePage(): Promise<boolean> {
    const title = await this.getPageTitle();
    return title.includes('Practice Automation');
  }
}
