import { Page, Download, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export declare class FileDownloadPage extends BasePage {
    readonly URL = "https://practice-automation.com/file-download/";
    readonly downloadButton: Locator;
    constructor(page: Page);
    goto(): Promise<void>;
    downloadFile(): Promise<Download>;
    downloadAndSaveFile(savePath: string): Promise<void>;
    getDownloadFileName(): Promise<string>;
    isDownloadButtonVisible(): Promise<boolean>;
    getDownloadButtonText(): Promise<string>;
}
export declare class FileUploadPage extends BasePage {
    readonly URL = "https://practice-automation.com/file-upload/";
    readonly fileInput: Locator;
    readonly uploadButton: Locator;
    readonly successMessage: Locator;
    readonly errorMessage: Locator;
    readonly uploadedFileName: Locator;
    constructor(page: Page);
    goto(): Promise<void>;
    uploadFile(filePath: string): Promise<void>;
    uploadMultipleFiles(filePaths: string[]): Promise<void>;
    clickUploadButton(): Promise<void>;
    uploadFileAndSubmit(filePath: string): Promise<void>;
    isUploadInputVisible(): Promise<boolean>;
    getSuccessMessage(): Promise<string>;
    isSuccessMessageVisible(): Promise<boolean>;
    getErrorMessage(): Promise<string>;
    isErrorMessageVisible(): Promise<boolean>;
    getUploadedFileName(): Promise<string>;
}
//# sourceMappingURL=FileOperationsPages.d.ts.map