import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class EcommercePage extends BasePage {
    readonly loginLink: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly productList: Locator;
    readonly addToCartButtons: Locator;
    readonly cartLink: Locator;
    readonly cartItems: Locator;
    readonly checkoutButton: Locator;
    readonly billingForm: Locator;
    readonly submitOrderButton: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        super(page);
        this.loginLink = page.locator('a[href*="login"]');
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('button[type="submit"]');
        this.productList = page.locator('.product-item');
        this.addToCartButtons = page.locator('.add-to-cart-btn');
        this.cartLink = page.locator('.cart-link');
        this.cartItems = page.locator('.cart-item');
        this.checkoutButton = page.locator('.checkout-btn');
        this.billingForm = page.locator('.billing-form');
        this.submitOrderButton = page.locator('.submit-order-btn');
        this.logoutButton = page.locator('.logout-btn');
    }

    async navigateToLogin() {
        await this.loginLink.click();
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async addProductToCart(index: number = 0) {
        await this.addToCartButtons.nth(index).click();
    }

    async viewCart() {
        await this.cartLink.click();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

    async fillBillingInfo(info: { name: string; address: string; email: string }) {
        // Assuming form fields - adjust selectors as needed
        await this.page.locator('#billing-name').fill(info.name);
        await this.page.locator('#billing-address').fill(info.address);
        await this.page.locator('#billing-email').fill(info.email);
    }

    async submitOrder() {
        await this.submitOrderButton.click();
    }

    async logout() {
        await this.logoutButton.click();
    }
}