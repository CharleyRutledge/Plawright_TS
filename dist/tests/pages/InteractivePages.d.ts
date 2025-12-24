import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export declare class SliderPage extends BasePage {
    readonly URL = "https://practice-automation.com/sliders/";
    readonly sliderInput: Locator;
    readonly sliderValueDisplay: Locator;
    constructor(page: Page);
    goto(): Promise<void>;
    setSliderValue(value: number): Promise<void>;
    dragSlider(percentage: number): Promise<void>;
    incrementSlider(): Promise<void>;
    decrementSlider(): Promise<void>;
    getSliderValue(): Promise<string>;
    getSliderDisplayValue(): Promise<string>;
    getSliderMin(): Promise<number>;
    getSliderMax(): Promise<number>;
    isSliderVisible(): Promise<boolean>;
}
export declare class AccordionPage extends BasePage {
    readonly URL = "https://practice-automation.com/accordion/";
    readonly accordionItem: Locator;
    readonly accordionHeader: Locator;
    readonly accordionContent: Locator;
    constructor(page: Page);
    goto(): Promise<void>;
    expandAccordionItem(itemIndex: number): Promise<void>;
    collapseAccordionItem(itemIndex: number): Promise<void>;
    expandAccordionByText(itemText: string): Promise<void>;
    getAccordionItemCount(): Promise<number>;
    isAccordionItemExpanded(itemIndex: number): Promise<boolean>;
    getAccordionItemContent(itemIndex: number): Promise<string>;
    getAccordionItemTitle(itemIndex: number): Promise<string>;
    isAccordionItemContentVisible(itemIndex: number): Promise<boolean>;
}
export declare class HoverPage extends BasePage {
    readonly URL = "https://practice-automation.com/hover/";
    readonly hoverElement: Locator;
    readonly hiddenElement: Locator;
    constructor(page: Page);
    goto(): Promise<void>;
    hoverOverElement(elementIndex?: number): Promise<void>;
    hoverOverElementByText(text: string): Promise<void>;
    getHoverElementCount(): Promise<number>;
    isHiddenContentVisible(elementIndex?: number): Promise<boolean>;
    getHiddenContentText(elementIndex?: number): Promise<string>;
    getHoverElementText(elementIndex?: number): Promise<string>;
}
//# sourceMappingURL=InteractivePages.d.ts.map