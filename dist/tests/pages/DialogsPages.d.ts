import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export declare class PopupsPage extends BasePage {
    readonly URL = "https://practice-automation.com/popups/";
    readonly popupTriggerButton: Locator;
    readonly popupMessage: Locator;
    readonly popupCloseButton: Locator;
    constructor(page: Page);
    goto(): Promise<void>;
    openPopup(): Promise<void>;
    closePopup(): Promise<void>;
    acceptPopup(): Promise<void>;
    dismissPopup(): Promise<void>;
    isPopupVisible(): Promise<boolean>;
    getPopupMessage(): Promise<string>;
    isPopupClosed(): Promise<boolean>;
}
export declare class ModalsPage extends BasePage {
    readonly URL = "https://practice-automation.com/modals/";
    readonly modalTriggerButton: Locator;
    readonly modalOverlay: Locator;
    readonly modalContent: Locator;
    readonly modalCloseButton: Locator;
    readonly modalOkButton: Locator;
    readonly modalCancelButton: Locator;
    readonly modalMessage: Locator;
    readonly modalTitle: Locator;
    constructor(page: Page);
    goto(): Promise<void>;
    openModal(): Promise<void>;
    closeModal(): Promise<void>;
    clickOK(): Promise<void>;
    clickCancel(): Promise<void>;
    closeModalByClickingOverlay(): Promise<void>;
    isModalVisible(): Promise<boolean>;
    getModalMessage(): Promise<string>;
    isModalClosed(): Promise<boolean>;
    isOKButtonVisible(): Promise<boolean>;
    isCancelButtonVisible(): Promise<boolean>;
    getModalTitle(): Promise<string>;
}
//# sourceMappingURL=DialogsPages.d.ts.map