"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverPage = exports.AccordionPage = exports.SliderPage = void 0;
const BasePage_1 = require("./BasePage");
class SliderPage extends BasePage_1.BasePage {
    constructor(page) {
        super(page);
        this.URL = 'https://practice-automation.com/sliders/';
        this.sliderInput = page.locator('input[type="range"]');
        this.sliderValueDisplay = page.locator('.slider-value, #slider-value');
    }
    async goto() {
        await super.goto(this.URL);
    }
    async setSliderValue(value) {
        await this.sliderInput.fill(value.toString());
    }
    async dragSlider(percentage) {
        const box = await this.sliderInput.boundingBox();
        if (box) {
            const x = box.x + (box.width * percentage) / 100;
            const y = box.y + box.height / 2;
            await this.page.mouse.move(x, y);
            await this.page.mouse.down();
            await this.page.mouse.up();
        }
    }
    async incrementSlider() {
        await this.press(this.sliderInput, 'ArrowRight');
    }
    async decrementSlider() {
        await this.press(this.sliderInput, 'ArrowLeft');
    }
    async getSliderValue() {
        return await this.getAttribute(this.sliderInput, 'value') || '';
    }
    async getSliderDisplayValue() {
        return await this.getText(this.sliderValueDisplay);
    }
    async getSliderMin() {
        const min = await this.getAttribute(this.sliderInput, 'min') || '0';
        return parseInt(min);
    }
    async getSliderMax() {
        const max = await this.getAttribute(this.sliderInput, 'max') || '100';
        return parseInt(max);
    }
    async isSliderVisible() {
        return await this.isVisible(this.sliderInput);
    }
}
exports.SliderPage = SliderPage;
class AccordionPage extends BasePage_1.BasePage {
    constructor(page) {
        super(page);
        this.URL = 'https://practice-automation.com/accordion/';
        this.accordionItem = page.locator('.accordion-item');
        this.accordionHeader = page.locator('.accordion-header');
        this.accordionContent = page.locator('.accordion-content, .accordion-body');
    }
    async goto() {
        await super.goto(this.URL);
    }
    async expandAccordionItem(itemIndex) {
        const header = this.page.locator(`.accordion-header:nth-child(${itemIndex + 1})`);
        await this.click(header);
    }
    async collapseAccordionItem(itemIndex) {
        const header = this.page.locator(`.accordion-header:nth-child(${itemIndex + 1})`);
        await this.click(header);
    }
    async expandAccordionByText(itemText) {
        const header = this.page.locator(`.accordion-header:has-text("${itemText}")`);
        await this.click(header);
    }
    async getAccordionItemCount() {
        return await this.accordionItem.count();
    }
    async isAccordionItemExpanded(itemIndex) {
        const item = this.page.locator(`.accordion-item:nth-child(${itemIndex + 1})`);
        const ariaExpanded = await this.getAttribute(item, 'aria-expanded');
        return ariaExpanded === 'true';
    }
    async getAccordionItemContent(itemIndex) {
        const content = this.page.locator(`.accordion-item:nth-child(${itemIndex + 1}) .accordion-content, .accordion-item:nth-child(${itemIndex + 1}) .accordion-body`);
        return await this.getText(content);
    }
    async getAccordionItemTitle(itemIndex) {
        const header = this.page.locator(`.accordion-header:nth-child(${itemIndex + 1})`);
        return await this.getText(header);
    }
    async isAccordionItemContentVisible(itemIndex) {
        const content = this.page.locator(`.accordion-item:nth-child(${itemIndex + 1}) .accordion-content, .accordion-item:nth-child(${itemIndex + 1}) .accordion-body`);
        return await this.isVisible(content);
    }
}
exports.AccordionPage = AccordionPage;
class HoverPage extends BasePage_1.BasePage {
    constructor(page) {
        super(page);
        this.URL = 'https://practice-automation.com/hover/';
        this.hoverElement = page.locator('.hover-element, .hover-item');
        this.hiddenElement = page.locator('.hidden-content, .hover-content');
    }
    async goto() {
        await super.goto(this.URL);
    }
    async hoverOverElement(elementIndex = 0) {
        const element = this.hoverElement.nth(elementIndex);
        await this.hover(element);
    }
    async hoverOverElementByText(text) {
        const element = this.page.locator(`.hover-element:has-text("${text}")`);
        await this.hover(element);
    }
    async getHoverElementCount() {
        return await this.hoverElement.count();
    }
    async isHiddenContentVisible(elementIndex = 0) {
        const hiddenContent = this.page.locator(`.hover-element:nth-child(${elementIndex + 1}) .hidden-content, .hover-element:nth-child(${elementIndex + 1}) .hover-content`);
        return await this.isVisible(hiddenContent);
    }
    async getHiddenContentText(elementIndex = 0) {
        const hiddenContent = this.page.locator(`.hover-element:nth-child(${elementIndex + 1}) .hidden-content, .hover-element:nth-child(${elementIndex + 1}) .hover-content`);
        return await this.getText(hiddenContent);
    }
    async getHoverElementText(elementIndex = 0) {
        const element = this.page.locator(`.hover-element:nth-child(${elementIndex + 1})`);
        return await this.getText(element);
    }
}
exports.HoverPage = HoverPage;
//# sourceMappingURL=InteractivePages.js.map