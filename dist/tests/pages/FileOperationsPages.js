"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadPage = exports.FileDownloadPage = void 0;
const BasePage_1 = require("./BasePage");
class FileDownloadPage extends BasePage_1.BasePage {
    constructor(page) {
        super(page);
        this.URL = 'https://practice-automation.com/file-download/';
        this.downloadButton = page.locator('a[download]');
    }
    async goto() {
        await super.goto(this.URL);
    }
    async downloadFile() {
        const downloadPromise = this.page.waitForEvent('download');
        await this.click(this.downloadButton);
        return await downloadPromise;
    }
    async downloadAndSaveFile(savePath) {
        const download = await this.downloadFile();
        await download.saveAs(savePath);
    }
    async getDownloadFileName() {
        const download = await this.downloadFile();
        return download.suggestedFilename();
    }
    async isDownloadButtonVisible() {
        return await this.isVisible(this.downloadButton);
    }
    async getDownloadButtonText() {
        return await this.getText(this.downloadButton);
    }
}
exports.FileDownloadPage = FileDownloadPage;
class FileUploadPage extends BasePage_1.BasePage {
    constructor(page) {
        super(page);
        this.URL = 'https://practice-automation.com/file-upload/';
        this.fileInput = page.locator('input[type="file"]');
        this.uploadButton = page.locator('button[type="submit"]');
        this.successMessage = page.locator('.success-message');
        this.errorMessage = page.locator('.error-message');
        this.uploadedFileName = page.locator('.uploaded-file-name');
    }
    async goto() {
        await super.goto(this.URL);
    }
    async uploadFile(filePath) {
        await this.fileInput.setInputFiles(filePath);
    }
    async uploadMultipleFiles(filePaths) {
        await this.fileInput.setInputFiles(filePaths);
    }
    async clickUploadButton() {
        await this.click(this.uploadButton);
    }
    async uploadFileAndSubmit(filePath) {
        await this.uploadFile(filePath);
        await this.clickUploadButton();
    }
    async isUploadInputVisible() {
        return await this.isVisible(this.fileInput);
    }
    async getSuccessMessage() {
        await this.waitForElement(this.successMessage);
        return await this.getText(this.successMessage);
    }
    async isSuccessMessageVisible() {
        return await this.isVisible(this.successMessage);
    }
    async getErrorMessage() {
        return await this.getText(this.errorMessage);
    }
    async isErrorMessageVisible() {
        return await this.isVisible(this.errorMessage);
    }
    async getUploadedFileName() {
        return await this.getText(this.uploadedFileName);
    }
}
exports.FileUploadPage = FileUploadPage;
//# sourceMappingURL=FileOperationsPages.js.map