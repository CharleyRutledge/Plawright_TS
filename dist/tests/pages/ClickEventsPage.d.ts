import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export declare class ClickEventsPage extends BasePage {
    readonly URL = "https://practice-automation.com/click-events/";
    readonly catButton: Locator;
    readonly dogButton: Locator;
    readonly pigButton: Locator;
    readonly cowButton: Locator;
    readonly resultDisplay: Locator;
    readonly resultText: Locator;
    constructor(page: Page);
    goto(): Promise<void>;
    clickCat(): Promise<void>;
    clickDog(): Promise<void>;
    clickPig(): Promise<void>;
    clickCow(): Promise<void>;
    getResultText(): Promise<string>;
    isResultDisplayed(): Promise<boolean>;
    verifyAnimalSelected(animal: string): Promise<boolean>;
    clickAnimal(animalName: string): Promise<void>;
    verifyButtonIsClickable(animalName: string): Promise<boolean>;
}
//# sourceMappingURL=ClickEventsPage.d.ts.map