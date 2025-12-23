import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Login Test Cases ', () => {
  let loginPage: LoginPage;

 
  test.beforeAll(() => {
    console.log(' START LOGIN TESTS');
  });

 
  test.beforeEach(async ({ page }, testInfo) => {
    console.log(` START TEST: ${testInfo.title}`);
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('TC01 - Valid login', async () => {
    await loginPage.login(
      process.env.LOGIN_EMAIL!,
      process.env.LOGIN_PASSWORD!
    );

    await loginPage.verifySuccess();
  });

  test('TC02 - Invalid email and invalid password', async () => {
    await loginPage.login(
      'wrong@email.com',
      'wrongpass'
    );

    await loginPage.verifyErrorContains('Invalid email or password');
  });

  test('TC04 - Empty email only', async () => {
    await loginPage.login(
      '',
      process.env.LOGIN_PASSWORD!
    );

    await loginPage.verifyErrorContains('Email is required');
  });

  test('TC05 - Empty password', async () => {
    await loginPage.login(
      process.env.LOGIN_EMAIL!,
      ''
    );

    await loginPage.verifyErrorContains('Password is required');
  });

  test('TC06 - Invalid email format', async () => {
    await loginPage.login(
      's12326654@stu.najah',
      'wrongPassword'
    );

    await loginPage.verifyErrorContains('valid email');
  });




});


  test.afterEach(async ({ page }, testInfo) => {
    
    console.log(` THE END TC: ${testInfo.title}`);

   
  });

  test.afterAll(() => {
    console.log(' END LOGIN TESTS');
  });

