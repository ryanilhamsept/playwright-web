import { Page, Locator } from '@playwright/test';

export class SignupPage {
  readonly page: Page;

  // Elements
  readonly signupLoginLink: Locator;
  readonly nameInput: Locator;
  readonly signupEmailInput: Locator;
  readonly signupButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupLoginLink = page.getByRole('link', { name: ' Signup / Login' });
    this.nameInput = page.getByRole('textbox', { name: 'Name' });
    this.signupEmailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
    this.signupButton = page.getByRole('button', { name: 'Signup' });
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/');
  }

  async startSignup(name: string, email: string) {
    await this.signupLoginLink.click();
    await this.nameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
  }
}
