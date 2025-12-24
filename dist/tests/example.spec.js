"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('has title', async ({ page }) => {
    await page.goto('https://practice-automation.com/');
    // Expect a title "to contain" a substring.
    await (0, test_1.expect)(page).toHaveTitle('Learn and Practice Automation | automateNow');
});
//# sourceMappingURL=example.spec.js.map