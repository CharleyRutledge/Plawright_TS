"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickEventsPage = void 0;
const BasePage_1 = require("./BasePage");
class ClickEventsPage extends BasePage_1.BasePage {
    constructor(page) {
        super(page);
        this.URL = 'https://practice-automation.com/click-events/';
        this.catButton = page.locator('button', { hasText: 'Cat' });
        this.dogButton = page.locator('button', { hasText: 'Dog' });
        this.pigButton = page.locator('button', { hasText: 'Pig' });
        this.cowButton = page.locator('button', { hasText: 'Cow' });
        this.resultDisplay = page.locator('#result');
        this.resultText = page.locator('h2:has-text("You selected")');
    }
    async goto() {
        await super.goto(this.URL);
    }
    async clickCat() {
        await this.click(this.catButton);
    }
    async clickDog() {
        await this.click(this.dogButton);
    }
    async clickPig() {
        await this.click(this.pigButton);
    }
    async clickCow() {
        await this.click(this.cowButton);
    }
    async getResultText() {
        await this.waitForElement(this.resultText);
        return await this.getText(this.resultText);
    }
    async isResultDisplayed() {
        return await this.isVisible(this.resultDisplay);
    }
    async verifyAnimalSelected(animal) {
        const resultText = await this.getResultText();
        return resultText.includes(animal);
    }
    async clickAnimal(animalName) {
        const lowerName = animalName.toLowerCase();
        switch (lowerName) {
            case 'cat':
                await this.clickCat();
                break;
            case 'dog':
                await this.clickDog();
                break;
            case 'pig':
                await this.clickPig();
                break;
            case 'cow':
                await this.clickCow();
                break;
            default:
                throw new Error(`Unknown animal: ${animalName}`);
        }
    }
    async verifyButtonIsClickable(animalName) {
        const button = animalName.toLowerCase();
        const buttonLocator = this.page.locator(`button:has-text("${button.charAt(0).toUpperCase()}${button.slice(1)}")`);
        return await this.isEnabled(buttonLocator);
    }
}
exports.ClickEventsPage = ClickEventsPage;
//# sourceMappingURL=ClickEventsPage.js.map