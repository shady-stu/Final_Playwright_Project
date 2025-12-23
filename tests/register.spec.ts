// import { test, expect } from '@playwright/test';
// import { RegisterPage } from '../pages/RegisterPage';

// function generateRandomPassword(length = 12) {
//   const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
//   let pwd = '';
//   for (let i = 0; i < length; i++) {
//     pwd += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return pwd;
// }

// test.describe('Register Feature', () => {

//   test('register a new user successfully', async ({ page }) => {
//     const registerPage = new RegisterPage(page);

//     await registerPage.goto();

//     await registerPage.register({
//       firstName: 'Test',
//       lastName: 'User',
//       dob: '2000-01-01',
//       street: '123 Test St',
//       postalCode: '12345',
//       city: 'TestCity',
//       state: 'TestState',
//       country: 'PS', 
//       phone: '0591234567',
//       email: `testuser${Date.now()}@mail.com`, 
//       password: generateRandomPassword()
//     });

//     await page.waitForURL('https://practicesoftwaretesting.com/auth/login', { timeout: 15000 });
//     await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');
//   });

//   test('register with weak password should show error', async ({ page }) => {
//     const registerPage = new RegisterPage(page);
//     await registerPage.goto();

//     await registerPage.register({
//       firstName: 'Weak',
//       lastName: 'Password',
//       dob: '2000-01-01',
//       street: '123 Test St',
//       postalCode: '12345',
//       city: 'TestCity',
//       state: 'TestState',
//       country: 'PS', 
//       phone: '0591234567',
//       email: `weakpass${Date.now()}@mail.com`, 
//       password: '123' 
//     });

//     const errorMsg = page.locator('[data-test="password-error"]'); // عدّل لو الـ selector مختلف
//     await expect(errorMsg).toBeVisible();
//     await expect(errorMsg).toHaveText(/Password must be minimal 6 characters long|Password must include invalid characters/i);
//   });

//   test('register without required field should show error', async ({ page }) => {
//     const registerPage = new RegisterPage(page);
//     await registerPage.goto();

//     await registerPage.register({
//       firstName: '', // ما نملأ الاسم
//       lastName: 'NoFirstName',
//       dob: '', // ما نملأ تاريخ الميلاد
//       street: '123 Test St',
//       postalCode: '12345',
//       city: 'TestCity',
//       state: 'TestState',
//       country: 'PS', 
//       phone: '0591234567',
//       email: `nofirstname${Date.now()}@mail.com`, 
//       password: generateRandomPassword()
//     });

//     const dobError = page.locator('[data-test="dob-error"]'); // عدّل لو الـ selector مختلف
//     await expect(dobError).toBeVisible();
//     await expect(dobError).toHaveText(/Please enter a valid date in YYYY-MM-DD format|Date of Birth is required/i);
//   });

// });
