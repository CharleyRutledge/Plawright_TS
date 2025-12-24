"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const BasePage_1 = require("./BasePage");
class HomePage extends BasePage_1.BasePage {
    constructor(page) {
        super(page);
        this.BASE_URL = 'https://practice-automation.com';
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
    async goto() {
        await super.goto(this.BASE_URL);
    }
    async clickFormFieldsModule() {
        await this.click(this.formFieldsLink);
    }
    async clickClickEventsModule() {
        await this.click(this.clickEventsLink);
    }
    async clickTablesModule() {
        await this.click(this.tablesLink);
    }
    async clickFileDownloadModule() {
        await this.click(this.fileDownloadLink);
    }
    async clickFileUploadModule() {
        await this.click(this.fileUploadLink);
    }
    async clickPopupsModule() {
        await this.click(this.popupsLink);
    }
    async clickModalsModule() {
        await this.click(this.modalsLink);
    }
    async clickSlidersModule() {
        await this.click(this.slidersLink);
    }
    async clickAccordionModule() {
        await this.click(this.accordionLink);
    }
    async clickHoverModule() {
        await this.click(this.hoverLink);
    }
    async clickJavaScriptDelaysModule() {
        await this.click(this.jsDelaysLink);
    }
    async clickIframesModule() {
        await this.click(this.iframesLink);
    }
    async clickBrokenImagesModule() {
        await this.click(this.brokenImagesLink);
    }
    async clickBrokenLinksModule() {
        await this.click(this.brokenLinksLink);
    }
    async isModuleVisible(moduleName) {
        const moduleLink = this.page.locator('a', { hasText: moduleName });
        return await this.isVisible(moduleLink);
    }
    async navigateToModule(moduleName) {
        const moduleLink = this.page.locator('a', { hasText: moduleName });
        await this.click(moduleLink);
    }
    async getPageHeading() {
        return await this.getText(this.pageHeading);
    }
    async verifyHomePage() {
        const title = await this.getPageTitle();
        return title.includes('Practice Automation');
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map