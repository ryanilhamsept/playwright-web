import { Page, Locator } from "@playwright/test";

export class HomePage {
    readonly page:Page;
    readonly signupLoginLink: Locator;
    readonly firstProductLink: Locator;
    readonly addToCartButton: Locator;
    readonly viewCartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signupLoginLink = page.getByRole('link', { name: ' Signup / Login' });
        this.firstProductLink = page.locator('.nav.nav-pills.nav-justified > li > a').first();
        this.addToCartButton = page.getByRole('button', { name: ' Add to cart' });
        this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/');
  }

  async clickSignupLogin() {
    await this.signupLoginLink.click();
  }

  async selectFirstProduct() {
    await this.firstProductLink.click();
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async viewCart() {
    await this.viewCartLink.click();
  }
}
