import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly errorBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.errorBox = page.locator('.alert-danger');
  }

  async goto() {
    await this.page.goto('https://practicesoftwaretesting.com/auth/login');
  }

  async login(email: string, password: string) {
    await this.page.fill('[data-test="email"]', email);
    await this.page.fill('[data-test="password"]', password);
    await this.page.click('[data-test="login-submit"]');
  }

async verifySuccess() {
  
  await expect(this.page).toHaveURL(/\/account/);

 
  await expect(
    this.page.getByRole("heading", { name: / account/i })
  ).toBeVisible();
}

  async verifyErrorContains(text: string) {
    await expect(this.errorBox).toContainText(text);
  }
  
}
