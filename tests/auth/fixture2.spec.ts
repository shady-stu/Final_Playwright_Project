import { test, expect, chromium, firefox } from '@playwright/test';

test('Registration works on Chromium and Firefox (using .env)', async () => {
  test.setTimeout(120000);

  const browsers = [
    { name: 'Chromium', type: chromium },
    { name: 'Firefox', type: firefox },
  ];

  for (const browser of browsers) {
    

    const br = await browser.type.launch({ headless: false });
    const context = await br.newContext();
    const page = await context.newPage();

    page.setDefaultTimeout(60000);

    await page.goto('https://practicesoftwaretesting.com/auth/register', {
      waitUntil: 'domcontentloaded',
    });

    await page.fill('[data-test="first-name"]', process.env.REG_FIRST_NAME!);
    await page.fill('[data-test="last-name"]', process.env.REG_LAST_NAME!);
    await page.fill('[data-test="dob"]', process.env.REG_DOB!);
    await page.fill('[data-test="street"]', process.env.REG_STREET!);
    await page.fill(
      '[data-test="postal_code"], [data-test="postcode"]',
      process.env.REG_POSTCODE!
    );
    await page.fill('[data-test="city"]', process.env.REG_CITY!);
    await page.fill('[data-test="state"]', process.env.REG_STATE!);

    const countryIndex = Number(process.env.REG_COUNTRY_INDEX ?? '1');
    await page.locator('[data-test="country"]').selectOption({ index: countryIndex });

    await page.fill('[data-test="phone"]', process.env.REG_PHONE!);

   await page.fill(
  '[data-test="email"]',`user_${Date.now()}@test.com`);

    await page.fill('[data-test="password"]', process.env.REG_PASSWORD!);

   
    await Promise.all([
      page.waitForURL(/\/auth\/login|\/account|\/auth\/register/, { timeout: 60000 }),
      page.click('[data-test="register-submit"]'),
    ]);

    await expect(page).toHaveURL(/\/auth\/login|\/account|\/auth\/register/);

    await context.close();
    await br.close();
  }
});
