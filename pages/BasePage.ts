import { Page,} from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async navigate() {
    const baseUrl = 'https://practicesoftwaretesting.com';
    await this.page.goto(baseUrl);
    await this.page.waitForLoadState('networkidle');
  }

  async waitForElement(selector: string, timeout: number = 10000) {
    await this.page.waitForSelector(selector, { timeout });
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `screenshots/${name}-${Date.now()}.png` });
  }
}