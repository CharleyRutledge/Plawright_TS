import { Page, Locator } from '@playwright/test';
export declare class BasePage {
    readonly page: Page;
    constructor(page: Page);
    goto(url: string): Promise<void>;
    waitForNavigation(): Promise<void>;
    waitForElement(locator: Locator, timeout?: number): Promise<void>;
    getText(locator: Locator): Promise<string>;
    getAttribute(locator: Locator, attribute: string): Promise<string | null>;
    isVisible(locator: Locator): Promise<boolean>;
    isEnabled(locator: Locator): Promise<boolean>;
    fill(locator: Locator, value: string): Promise<void>;
    click(locator: Locator): Promise<void>;
    doubleClick(locator: Locator): Promise<void>;
    rightClick(locator: Locator): Promise<void>;
    hover(locator: Locator): Promise<void>;
    press(locator: Locator, key: string): Promise<void>;
    selectOption(locator: Locator, value: string): Promise<void>;
    check(locator: Locator): Promise<void>;
    uncheck(locator: Locator): Promise<void>;
    isChecked(locator: Locator): Promise<boolean>;
    waitForElementHidden(locator: Locator, timeout?: number): Promise<void>;
    getPageTitle(): Promise<string>;
    getPageUrl(): Promise<string>;
    screenshot(filename: string): Promise<void>;
    dragAndDrop(sourceLocator: Locator, targetLocator: Locator): Promise<void>;
    scrollIntoView(locator: Locator): Promise<void>;
    acceptDialog(): Promise<void>;
    rejectDialog(): Promise<void>;
    waitForTimeout(ms: number): Promise<void>;
}
//# sourceMappingURL=BasePage.d.ts.map