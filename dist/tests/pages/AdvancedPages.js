"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokenLinksPage = exports.BrokenImagesPage = exports.IframesPage = exports.JavaScriptDelaysPage = void 0;
const BasePage_1 = require("./BasePage");
class JavaScriptDelaysPage extends BasePage_1.BasePage {
    constructor(page) {
        super(page);
        this.URL = 'https://practice-automation.com/javascript-delays/';
        this.triggerButton = page.locator('button', { hasText: 'Click' });
        this.resultMessage = page.locator('.result-message, h2:has-text("Result")');
        this.loadingSpinner = page.locator('.loading, .spinner');
    }
    async goto() {
        await super.goto(this.URL);
    }
    async clickTriggerButton() {
        await this.click(this.triggerButton);
    }
    async clickAndWaitForResult(timeout = 10000) {
        await this.click(this.triggerButton);
        await this.waitForElement(this.resultMessage, timeout);
    }
    async isLoadingSpinnerVisible() {
        return await this.isVisible(this.loadingSpinner);
    }
    async waitForLoadingToComplete(timeout = 10000) {
        await this.waitForElementHidden(this.loadingSpinner, timeout);
    }
    async getResultMessage() {
        return await this.getText(this.resultMessage);
    }
    async isResultMessageVisible() {
        return await this.isVisible(this.resultMessage);
    }
    async waitForResultToAppear(timeout = 10000) {
        await this.waitForElement(this.resultMessage, timeout);
    }
}
exports.JavaScriptDelaysPage = JavaScriptDelaysPage;
class IframesPage extends BasePage_1.BasePage {
    constructor(page) {
        super(page);
        this.URL = 'https://practice-automation.com/iframes/';
        this.iframe = page.locator('iframe');
    }
    async goto() {
        await super.goto(this.URL);
    }
    async getIframeCount() {
        return await this.iframe.count();
    }
    async getIframeByIndex(index) {
        return this.page.frameLocator(`iframe:nth-child(${index + 1})`);
    }
    async getTextFromIframe(iframeIndex, selector) {
        const iframe = this.page.frameLocator(`iframe:nth-child(${iframeIndex + 1})`);
        return await iframe.locator(selector).textContent() || '';
    }
    async fillFormInIframe(iframeIndex, inputSelector, value) {
        const iframe = this.page.frameLocator(`iframe:nth-child(${iframeIndex + 1})`);
        await iframe.locator(inputSelector).fill(value);
    }
    async clickElementInIframe(iframeIndex, elementSelector) {
        const iframe = this.page.frameLocator(`iframe:nth-child(${iframeIndex + 1})`);
        await iframe.locator(elementSelector).click();
    }
    async isElementVisibleInIframe(iframeIndex, elementSelector) {
        const iframe = this.page.frameLocator(`iframe:nth-child(${iframeIndex + 1})`);
        return await iframe.locator(elementSelector).isVisible();
    }
}
exports.IframesPage = IframesPage;
class BrokenImagesPage extends BasePage_1.BasePage {
    constructor(page) {
        super(page);
        this.URL = 'https://practice-automation.com/broken-images/';
        this.imageElement = page.locator('img');
        this.brokenImageClass = page.locator('.broken-image');
    }
    async goto() {
        await super.goto(this.URL);
    }
    async getImageCount() {
        return await this.imageElement.count();
    }
    async getImageSrc(imageIndex) {
        const image = this.page.locator(`img:nth-child(${imageIndex + 1})`);
        return await this.getAttribute(image, 'src') || '';
    }
    async getBrokenImageCount() {
        return await this.brokenImageClass.count();
    }
    async isImageBroken(imageIndex) {
        const hasErrorClass = await this.page.locator(`img:nth-child(${imageIndex + 1})`).evaluate(el => el.complete && el.naturalHeight === 0);
        return hasErrorClass;
    }
    async getAllImageSources() {
        const imageCount = await this.getImageCount();
        const sources = [];
        for (let i = 0; i < imageCount; i++) {
            const src = await this.getImageSrc(i);
            sources.push(src);
        }
        return sources;
    }
    async verifyImageIsLoaded(imageIndex) {
        const isLoaded = await this.page.locator(`img:nth-child(${imageIndex + 1})`).evaluate(el => el.complete && el.naturalHeight > 0);
        return isLoaded;
    }
}
exports.BrokenImagesPage = BrokenImagesPage;
class BrokenLinksPage extends BasePage_1.BasePage {
    constructor(page) {
        super(page);
        this.URL = 'https://practice-automation.com/broken-links/';
        this.linkElement = page.locator('a');
        this.brokenLinkClass = page.locator('.broken-link');
    }
    async goto() {
        await super.goto(this.URL);
    }
    async getLinkCount() {
        return await this.linkElement.count();
    }
    async getLinkHref(linkIndex) {
        const link = this.page.locator(`a:nth-child(${linkIndex + 1})`);
        return await this.getAttribute(link, 'href') || '';
    }
    async getLinkText(linkIndex) {
        const link = this.page.locator(`a:nth-child(${linkIndex + 1})`);
        return await this.getText(link);
    }
    async getBrokenLinkCount() {
        return await this.brokenLinkClass.count();
    }
    async clickLink(linkIndex) {
        const link = this.page.locator(`a:nth-child(${linkIndex + 1})`);
        await this.click(link);
    }
    async getAllLinks() {
        const linkCount = await this.getLinkCount();
        const links = [];
        for (let i = 0; i < linkCount; i++) {
            const text = await this.getLinkText(i);
            const href = await this.getLinkHref(i);
            links.push({ text, href });
        }
        return links;
    }
    async isLinkBroken(linkIndex) {
        const hasBrokenClass = await this.page.locator(`a:nth-child(${linkIndex + 1})`).evaluate(el => el.classList.contains('broken-link'));
        return hasBrokenClass;
    }
    async verifyLinkIsValid(linkIndex) {
        const href = await this.getLinkHref(linkIndex);
        return href !== '' && href !== '#' && !href.includes('broken');
    }
    async getAllLinkHrefs() {
        const linkCount = await this.getLinkCount();
        const hrefs = [];
        for (let i = 0; i < linkCount; i++) {
            const href = await this.getLinkHref(i);
            hrefs.push(href);
        }
        return hrefs;
    }
}
exports.BrokenLinksPage = BrokenLinksPage;
//# sourceMappingURL=AdvancedPages.js.map