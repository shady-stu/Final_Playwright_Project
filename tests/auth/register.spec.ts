import { test } from '@playwright/test';
import { RegisterPage } from '../../pages/RegisterPage';

test.describe('Register - Important Test Cases (Using .env)', () => {
  let registerPage: RegisterPage;

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await registerPage.goto();
  });

  test('TC-R01 - Valid registration (env data)', async () => {
    await registerPage.registerFull({
      firstName: process.env.REG_FIRST_NAME!,
      lastName: process.env.REG_LAST_NAME!,
      dob: process.env.REG_DOB!,
      street: process.env.REG_STREET!,
      postalCode: process.env.REG_POSTCODE!,
      city: process.env.REG_CITY!,
      state: process.env.REG_STATE!,
      countryCode: 'PS', 
      phone: process.env.REG_PHONE!,
      email: `user_${Date.now()}@test.com`,
      password: process.env.REG_PASSWORD!,
    });

    await registerPage.verifySuccess();
  });

  test('TC-R03 - Invalid email format', async () => {
    await registerPage.registerFull({
      firstName: process.env.REG_FIRST_NAME!,
      lastName: process.env.REG_LAST_NAME!,
      dob: process.env.REG_DOB!,
      street: process.env.REG_STREET!,
      postalCode: process.env.REG_POSTCODE!,
      city: process.env.REG_CITY!,
      state: process.env.REG_STATE!,
      countryCode: 'PS',
      phone: process.env.REG_PHONE!,
      email: 'invalidEmail',
      password: process.env.REG_PASSWORD!,
    });

    await registerPage.verifyErrorContains('Email');
  });

  test('TC-R05 - Phone is required', async () => {
    await registerPage.registerFull({
      firstName: process.env.REG_FIRST_NAME!,
      lastName: process.env.REG_LAST_NAME!,
      dob: process.env.REG_DOB!,
      street: process.env.REG_STREET!,
      postalCode: process.env.REG_POSTCODE!,
      city: process.env.REG_CITY!,
      state: process.env.REG_STATE!,
      countryCode: 'PS',
      phone: '',
      email: `user_${Date.now()}@test.com`,
      password: process.env.REG_PASSWORD!,
    });

    await registerPage.verifyErrorContains('Phone');
  });

  test('TC-R06 - Date of Birth is required', async () => {
    await registerPage.registerFull({
      firstName: process.env.REG_FIRST_NAME!,
      lastName: process.env.REG_LAST_NAME!,
      dob: '',
      street: process.env.REG_STREET!,
      postalCode: process.env.REG_POSTCODE!,
      city: process.env.REG_CITY!,
      state: process.env.REG_STATE!,
      countryCode: 'PS',
      phone: process.env.REG_PHONE!,
      email: `user_${Date.now()}@test.com`,
      password: process.env.REG_PASSWORD!,
    });

    await registerPage.verifyErrorContains('Date of Birth');
  });
  
});
