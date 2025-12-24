"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormFieldsPage = void 0;
const BasePage_1 = require("./BasePage");
class FormFieldsPage extends BasePage_1.BasePage {
    constructor(page) {
        super(page);
        this.URL = 'https://practice-automation.com/form-fields/';
        this.firstNameInput = page.locator('#name-input');
        this.surnameInput = page.locator('#surname-input');
        this.emailInput = page.locator('#email');
        this.messageTextarea = page.locator('textarea[name="message"]');
        this.wineCheckbox = page.locator('#checkbox-wine');
        this.beerCheckbox = page.locator('#checkbox-beer');
        this.waterCheckbox = page.locator('#checkbox-water');
        this.maleRadio = page.locator('#radio-male');
        this.femaleRadio = page.locator('#radio-female');
        this.countryDropdown = page.locator('#country');
        this.submitButton = page.locator('[type="submit"]');
        this.successMessage = page.locator('p.result-message');
    }
    async goto() {
        await super.goto(this.URL);
    }
    async fillFirstName(name) {
        await this.fill(this.firstNameInput, name);
    }
    async getFirstName() {
        return await this.getAttribute(this.firstNameInput, 'value') || '';
    }
    async fillSurname(surname) {
        await this.fill(this.surnameInput, surname);
    }
    async getSurname() {
        return await this.getAttribute(this.surnameInput, 'value') || '';
    }
    async fillEmail(email) {
        await this.fill(this.emailInput, email);
    }
    async getEmail() {
        return await this.getAttribute(this.emailInput, 'value') || '';
    }
    async fillMessage(message) {
        await this.fill(this.messageTextarea, message);
    }
    async getMessage() {
        return await this.getAttribute(this.messageTextarea, 'value') || '';
    }
    async checkWine() {
        await this.check(this.wineCheckbox);
    }
    async uncheckWine() {
        await this.uncheck(this.wineCheckbox);
    }
    async isWineChecked() {
        return await this.isChecked(this.wineCheckbox);
    }
    async checkBeer() {
        await this.check(this.beerCheckbox);
    }
    async uncheckBeer() {
        await this.uncheck(this.beerCheckbox);
    }
    async isBeerChecked() {
        return await this.isChecked(this.beerCheckbox);
    }
    async checkWater() {
        await this.check(this.waterCheckbox);
    }
    async uncheckWater() {
        await this.uncheck(this.waterCheckbox);
    }
    async isWaterChecked() {
        return await this.isChecked(this.waterCheckbox);
    }
    async selectMale() {
        await this.check(this.maleRadio);
    }
    async isMaleSelected() {
        return await this.isChecked(this.maleRadio);
    }
    async selectFemale() {
        await this.check(this.femaleRadio);
    }
    async isFemaleSelected() {
        return await this.isChecked(this.femaleRadio);
    }
    async selectCountry(country) {
        await this.selectOption(this.countryDropdown, country);
    }
    async getSelectedCountry() {
        return await this.getAttribute(this.countryDropdown, 'value') || '';
    }
    async submitForm() {
        await this.click(this.submitButton);
    }
    async getSuccessMessage() {
        await this.waitForElement(this.successMessage);
        return await this.getText(this.successMessage);
    }
    async isSuccessMessageVisible() {
        return await this.isVisible(this.successMessage);
    }
    async fillAndSubmitForm(firstName, surname, email, message, country, gender, drinks) {
        await this.fillFirstName(firstName);
        await this.fillSurname(surname);
        await this.fillEmail(email);
        await this.fillMessage(message);
        for (const drink of drinks) {
            if (drink.toLowerCase() === 'wine')
                await this.checkWine();
            if (drink.toLowerCase() === 'beer')
                await this.checkBeer();
            if (drink.toLowerCase() === 'water')
                await this.checkWater();
        }
        if (gender === 'male')
            await this.selectMale();
        if (gender === 'female')
            await this.selectFemale();
        await this.selectCountry(country);
        await this.submitForm();
    }
}
exports.FormFieldsPage = FormFieldsPage;
//# sourceMappingURL=FormFieldsPage.js.map