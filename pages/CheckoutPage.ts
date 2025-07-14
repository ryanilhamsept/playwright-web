import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly messageTextarea: Locator;
  readonly placeOrderLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.messageTextarea = page.locator('textarea[name="message"]');
    this.placeOrderLink = page.getByRole('link', { name: 'Place Order' });
  }

  async enterMessage(message: string) {
    await this.messageTextarea.click();
    await this.messageTextarea.fill(message);
  }

  async placeOrder() {
    await this.placeOrderLink.click();
  }
}
