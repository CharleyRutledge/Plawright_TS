"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
const test_1 = require("@playwright/test");
class BasePage {
    constructor(page) {
        this.page = page;
    }
    async goto(url) {
        await this.page.goto(url);
    }
    async waitForNavigation() {
        await this.page.waitForNavigation();
    }
    async waitForElement(locator, timeout = 5000) {
        await (0, test_1.expect)(locator).toBeVisible({ timeout });
    }
    async getText(locator) {
        return await locator.textContent() || '';
    }
    async getAttribute(locator, attribute) {
        return await locator.getAttribute(attribute);
    }
    async isVisible(locator) {
        return await locator.isVisible();
    }
    async isEnabled(locator) {
        return await locator.isEnabled();
    }
    async fill(locator, value) {
        await locator.fill(value);
    }
    async click(locator) {
        await locator.click();
    }
    async doubleClick(locator) {
        await locator.dblclick();
    }
    async rightClick(locator) {
        await locator.click({ button: 'right' });
    }
    async hover(locator) {
        await locator.hover();
    }
    async press(locator, key) {
        await locator.press(key);
    }
    async selectOption(locator, value) {
        await locator.selectOption(value);
    }
    async check(locator) {
        await locator.check();
    }
    async uncheck(locator) {
        await locator.uncheck();
    }
    async isChecked(locator) {
        return await locator.isChecked();
    }
    async waitForElementHidden(locator, timeout = 5000) {
        await (0, test_1.expect)(locator).toBeHidden({ timeout });
    }
    async getPageTitle() {
        return await this.page.title();
    }
    async getPageUrl() {
        return this.page.url();
    }
    async screenshot(filename) {
        await this.page.screenshot({ path: filename });
    }
    async dragAndDrop(sourceLocator, targetLocator) {
        await sourceLocator.dragTo(targetLocator);
    }
    async scrollIntoView(locator) {
        await locator.scrollIntoViewIfNeeded();
    }
    async acceptDialog() {
        this.page.once('dialog', dialog => dialog.accept());
    }
    async rejectDialog() {
        this.page.once('dialog', dialog => dialog.dismiss());
    }
    async waitForTimeout(ms) {
        await this.page.waitForTimeout(ms);
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=BasePage.js.map