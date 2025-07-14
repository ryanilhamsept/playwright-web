import { Page, Locator } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class AccountCreationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillAccountInformation() {
    await this.page.getByRole('radio', { name: 'Mr.' }).check();
    await this.page.waitForTimeout(10);
    await this.page.getByRole('textbox', { name: 'Password *' }).fill('testing123');
    await this.page.waitForTimeout(10);
    await this.page.locator('#days').selectOption(faker.number.int({ min: 1, max: 30 }).toString());
    await this.page.waitForTimeout(10);
    await this.page.locator('#months').selectOption(faker.number.int({ min: 1, max: 12 }).toString());
    await this.page.waitForTimeout(10);
    await this.page.locator('#years').selectOption;(faker.number.int({ min: 1980, max: 2015 }).toString());
    await this.page.waitForTimeout(10);
    await this.page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
    await this.page.waitForTimeout(10);
    await this.page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
    await this.page.waitForTimeout(10);
    await this.page.getByRole('textbox', { name: 'First name *' }).fill(faker.person.firstName());
    await this.page.waitForTimeout(10);
    await this.page.getByRole('textbox', { name: 'Last name *' }).fill(faker.person.firstName());
    await this.page.waitForTimeout(10);
    await this.page.getByRole('textbox', { name: 'Company', exact: true }).fill(faker.company.name());
    await this.page.waitForTimeout(10);
    await this.page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill(faker.location.streetAddress());
    await this.page.waitForTimeout(10);
    await this.page.getByRole('textbox', { name: 'Address 2' }).fill(faker.location.secondaryAddress());
    await this.page.waitForTimeout(10);
    await this.page.getByLabel('Country *').selectOption('Australia');
    await this.page.waitForTimeout(10);
    await this.page.getByRole('textbox', { name: 'State *' }).fill(faker.location.state());
    await this.page.waitForTimeout(10);
    await this.page.getByRole('textbox', { name: 'City * Zipcode *' }).fill(faker.location.city());
    await this.page.waitForTimeout(10);
    await this.page.locator('#zipcode').fill(faker.location.zipCode());
    await this.page.waitForTimeout(10);
    await this.page.getByRole('textbox', { name: 'Mobile Number *' }).fill(faker.phone.number());
  }


  async createAccount() {
    await this.page.getByRole('button', { name: 'Create Account' }).click();
    await this.page.getByRole('link', { name: 'Continue' }).click();
  }
}
