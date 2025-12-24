import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export declare class JavaScriptDelaysPage extends BasePage {
    readonly URL = "https://practice-automation.com/javascript-delays/";
    readonly triggerButton: Locator;
    readonly resultMessage: Locator;
    readonly loadingSpinner: Locator;
    constructor(page: Page);
    goto(): Promise<void>;
    clickTriggerButton(): Promise<void>;
    clickAndWaitForResult(timeout?: number): Promise<void>;
    isLoadingSpinnerVisible(): Promise<boolean>;
    waitForLoadingToComplete(timeout?: number): Promise<void>;
    getResultMessage(): Promise<string>;
    isResultMessageVisible(): Promise<boolean>;
    waitForResultToAppear(timeout?: number): Promise<void>;
}
export declare class IframesPage extends BasePage {
    readonly URL = "https://practice-automation.com/iframes/";
    readonly iframe: Locator;
    constructor(page: Page);
    goto(): Promise<void>;
    getIframeCount(): Promise<number>;
    getIframeByIndex(index: number): Promise<import("playwright-core").FrameLocator>;
    getTextFromIframe(iframeIndex: number, selector: string): Promise<string>;
    fillFormInIframe(iframeIndex: number, inputSelector: string, value: string): Promise<void>;
    clickElementInIframe(iframeIndex: number, elementSelector: string): Promise<void>;
    isElementVisibleInIframe(iframeIndex: number, elementSelector: string): Promise<boolean>;
}
export declare class BrokenImagesPage extends BasePage {
    readonly URL = "https://practice-automation.com/broken-images/";
    readonly imageElement: Locator;
    readonly brokenImageClass: Locator;
    constructor(page: Page);
    goto(): Promise<void>;
    getImageCount(): Promise<number>;
    getImageSrc(imageIndex: number): Promise<string>;
    getBrokenImageCount(): Promise<number>;
    isImageBroken(imageIndex: number): Promise<boolean>;
    getAllImageSources(): Promise<string[]>;
    verifyImageIsLoaded(imageIndex: number): Promise<boolean>;
}
export declare class BrokenLinksPage extends BasePage {
    readonly URL = "https://practice-automation.com/broken-links/";
    readonly linkElement: Locator;
    readonly brokenLinkClass: Locator;
    constructor(page: Page);
    goto(): Promise<void>;
    getLinkCount(): Promise<number>;
    getLinkHref(linkIndex: number): Promise<string>;
    getLinkText(linkIndex: number): Promise<string>;
    getBrokenLinkCount(): Promise<number>;
    clickLink(linkIndex: number): Promise<void>;
    getAllLinks(): Promise<Array<{
        text: string;
        href: string;
    }>>;
    isLinkBroken(linkIndex: number): Promise<boolean>;
    verifyLinkIsValid(linkIndex: number): Promise<boolean>;
    getAllLinkHrefs(): Promise<string[]>;
}
//# sourceMappingURL=AdvancedPages.d.ts.map