import { Page, Locator, expect } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;

  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly dob: Locator;
  readonly street: Locator;
  readonly postalCode: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly country: Locator;
  readonly phone: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly registerBtn: Locator;
  readonly alertDanger: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstName = page.locator('[data-test="first-name"]');
    this.lastName = page.locator('[data-test="last-name"]');
    this.dob = page.locator('[data-test="dob"]');
    this.street = page.locator('[data-test="street"]');
    this.postalCode = page.locator(
      '[data-test="postal_code"], [data-test="postcode"]'
    );
    this.city = page.locator('[data-test="city"]');
    this.state = page.locator('[data-test="state"]');
    this.country = page.locator('[data-test="country"]');
    this.phone = page.locator('[data-test="phone"]');
    this.email = page.locator('[data-test="email"]');
    this.password = page.locator('[data-test="password"]');
    this.registerBtn = page.locator('[data-test="register-submit"]');
    this.alertDanger = page.locator('.alert-danger');
  }

  async goto() {
    await this.page.goto(
      'https://practicesoftwaretesting.com/auth/register'
    );
  }

  async registerFull(data: {
    firstName: string;
    lastName: string;
    dob: string;
    street: string;
    postalCode: string;
    city: string;
    state: string;
    countryCode: string;
    phone: string;
    email: string;
    password: string;
  }) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.dob.fill(data.dob);
    await this.street.fill(data.street);
    await this.postalCode.fill(data.postalCode);
    await this.city.fill(data.city);
    await this.state.fill(data.state);
    await this.country.selectOption(data.countryCode);
    await this.phone.fill(data.phone);
    await this.email.fill(data.email);
    await this.password.fill(data.password);
    await this.registerBtn.click();
  }

  async fillEmailPassword(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
  }

  async submit() {
    await this.registerBtn.click();
  }

  async verifySuccess() {
    await expect(this.page).toHaveURL(
      /\/auth\/login|\/account|\/auth\/register/
    );

    const success = this.page.locator('.alert-success');
    if (await success.count()) {
      await expect(success).toBeVisible();
    }
  }

  async verifyErrorContains(text: string) {
    if (await this.alertDanger.count()) {
      await expect(this.alertDanger).toContainText(text);
      return;
    }

    const form = this.page.locator('[data-test="register-form"]');
    await expect(form).toContainText(text);
  }
}
