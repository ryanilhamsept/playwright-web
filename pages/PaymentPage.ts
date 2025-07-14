import { Page, Locator } from '@playwright/test';

export class PaymentPage {
  readonly page: Page;
  readonly nameOnCardInput: Locator;
  readonly cardNumberInput: Locator;
  readonly cvcInput: Locator;
  readonly expiryMonthInput: Locator;
  readonly expiryYearInput: Locator;
  readonly payAndConfirmButton: Locator;
  readonly continueLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameOnCardInput = page.locator('input[name="name_on_card"]');
    this.cardNumberInput = page.locator('input[name="card_number"]');
    this.cvcInput = page.getByRole('textbox', { name: 'ex.' });
    this.expiryMonthInput = page.getByRole('textbox', { name: 'MM' });
    this.expiryYearInput = page.getByRole('textbox', { name: 'YYYY' });
    this.payAndConfirmButton = page.getByRole('button', { name: 'Pay and Confirm Order' });
    this.continueLink = page.getByRole('link', { name: 'Continue' });
  }

  async enterPaymentDetails(name: string, cardNumber: string, cvc: string, month: string, year: string) {
    await this.nameOnCardInput.fill(name);
    await this.cardNumberInput.fill(cardNumber);
    await this.cvcInput.fill(cvc);
    await this.expiryMonthInput.fill(month);
    await this.expiryYearInput.fill(year);
  }

  async payAndConfirm() {
    await this.payAndConfirmButton.click();
  }

  async continue() {
    await this.continueLink.click();
  }
}
