import { test, expect, chromium, firefox } from '@playwright/test';

test('Login works on Chromium and Firefox', async () => {
 
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

    await page.goto('https://practicesoftwaretesting.com/auth/login', {
      waitUntil: 'domcontentloaded',
    });

    await page.fill('[data-test="email"]', process.env.LOGIN_EMAIL!);
    await page.fill('[data-test="password"]', process.env.LOGIN_PASSWORD!);

    
    await Promise.all([
      page.waitForURL(/\/account/, { timeout: 60000 }),
      page.click('[data-test="login-submit"]'),
    ]);

    await expect(page).toHaveURL(/\/account/);

    await context.close();
    await br.close();
  }
});
