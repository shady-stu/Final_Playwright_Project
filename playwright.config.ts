import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests',

  fullyParallel: false,

  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },

  // ✅ تقرير HTML
  reporter: [['html', { open: 'never' }]],
  // غير never إلى:
  // 'always' → يفتح التقرير بعد كل run
  // 'on-failure' → يفتح بس لو في فشل

  use: {
    baseURL: 'https://practicesoftwaretesting.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'Chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,
        launchOptions: {
          slowMo: 600,
        },
      },
    },

    // Firefox (مغلق حاليًا)
    // {
    //   name: 'Firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     headless: false,
    //     launchOptions: {
    //       slowMo: 400,
    //     },
    //   },
    // },
  ],
});
