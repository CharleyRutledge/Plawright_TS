"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalsPage = exports.PopupsPage = void 0;
const BasePage_1 = require("./BasePage");
class PopupsPage extends BasePage_1.BasePage {
    constructor(page) {
        super(page);
        this.URL = 'https://practice-automation.com/popups/';
        this.popupTriggerButton = page.locator('button', { hasText: 'Open' });
        this.popupMessage = page.locator('.popup-message');
        this.popupCloseButton = page.locator('.popup-close, .close-btn');
    }
    async goto() {
        await super.goto(this.URL);
    }
    async openPopup() {
        await this.click(this.popupTriggerButton);
    }
    async closePopup() {
        await this.click(this.popupCloseButton);
    }
    async acceptPopup() {
        this.page.once('dialog', dialog => dialog.accept());
        await this.openPopup();
    }
    async dismissPopup() {
        this.page.once('dialog', dialog => dialog.dismiss());
        await this.openPopup();
    }
    async isPopupVisible() {
        return await this.isVisible(this.popupMessage);
    }
    async getPopupMessage() {
        await this.waitForElement(this.popupMessage);
        return await this.getText(this.popupMessage);
    }
    async isPopupClosed() {
        return !(await this.isVisible(this.popupMessage));
    }
}
exports.PopupsPage = PopupsPage;
class ModalsPage extends BasePage_1.BasePage {
    constructor(page) {
        super(page);
        this.URL = 'https://practice-automation.com/modals/';
        this.modalTriggerButton = page.locator('button', { hasText: 'Open Modal' });
        this.modalOverlay = page.locator('.modal-overlay, .modal-backdrop');
        this.modalContent = page.locator('.modal-content, .modal-dialog');
        this.modalCloseButton = page.locator('.modal-close, [aria-label="Close"], .btn-close');
        this.modalOkButton = page.locator('button', { hasText: 'OK' });
        this.modalCancelButton = page.locator('button', { hasText: 'Cancel' });
        this.modalMessage = page.locator('.modal-body, .modal-message');
        this.modalTitle = page.locator('.modal-title, h4.modal-title');
    }
    async goto() {
        await super.goto(this.URL);
    }
    async openModal() {
        await this.click(this.modalTriggerButton);
    }
    async closeModal() {
        await this.click(this.modalCloseButton);
    }
    async clickOK() {
        await this.click(this.modalOkButton);
    }
    async clickCancel() {
        await this.click(this.modalCancelButton);
    }
    async closeModalByClickingOverlay() {
        await this.click(this.modalOverlay);
    }
    async isModalVisible() {
        return await this.isVisible(this.modalContent);
    }
    async getModalMessage() {
        await this.waitForElement(this.modalMessage);
        return await this.getText(this.modalMessage);
    }
    async isModalClosed() {
        return !(await this.isVisible(this.modalContent));
    }
    async isOKButtonVisible() {
        return await this.isVisible(this.modalOkButton);
    }
    async isCancelButtonVisible() {
        return await this.isVisible(this.modalCancelButton);
    }
    async getModalTitle() {
        return await this.getText(this.modalTitle);
    }
}
exports.ModalsPage = ModalsPage;
//# sourceMappingURL=DialogsPages.js.map