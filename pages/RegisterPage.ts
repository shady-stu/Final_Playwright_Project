// import { Page, Locator } from '@playwright/test';

// export class RegisterPage {
//   readonly page: Page;
//   readonly firstNameInput: Locator;
//   readonly lastNameInput: Locator;
//   readonly dobInput: Locator;
//   readonly streetInput: Locator;
//   readonly postalCodeInput: Locator;
//   readonly cityInput: Locator;
//   readonly stateInput: Locator;
//   readonly countrySelect: Locator;
//   readonly phoneInput: Locator;
//   readonly emailInput: Locator;
//   readonly passwordInput: Locator;
//   readonly registerButton: Locator;

//   constructor(page: Page) {
//     this.page = page;
//     this.firstNameInput = page.locator('[data-test="first-name"]');
//     this.lastNameInput = page.locator('[data-test="last-name"]');
//     this.dobInput = page.locator('[data-test="dob"]');
//     this.streetInput = page.locator('[data-test="street"]');
//     this.postalCodeInput = page.locator('[data-test="postal_code"]');
//     this.cityInput = page.locator('[data-test="city"]');
//     this.stateInput = page.locator('[data-test="state"]');
//     this.countrySelect = page.locator('[data-test="country"]');
//     this.phoneInput = page.locator('[data-test="phone"]');
//     this.emailInput = page.locator('[data-test="email"]');
//     this.passwordInput = page.locator('[data-test="password"]');
//     this.registerButton = page.locator('[data-test="register-submit"]');
//   }

//   async goto() {
//     await this.page.goto('https://practicesoftwaretesting.com/auth/register');
//   }

//   async register(user: {
//     firstName: string;
//     lastName: string;
//     dob: string;
//     street: string;
//     postalCode: string;
//     city: string;
//     state: string;
//     country: string;
//     phone: string;
//     email: string;
//     password: string;
//   }) {
//     await this.firstNameInput.waitFor({ state: 'visible', timeout: 15000 });

//     await this.firstNameInput.fill(user.firstName);
//     await this.lastNameInput.fill(user.lastName);
//     await this.dobInput.fill(user.dob);
//     await this.streetInput.fill(user.street);
//     await this.postalCodeInput.fill(user.postalCode);
//     await this.cityInput.fill(user.city);
//     await this.stateInput.fill(user.state);
//     await this.countrySelect.selectOption(user.country);
//     await this.phoneInput.fill(user.phone);
//     await this.emailInput.fill(user.email);
//     await this.passwordInput.fill(user.password);

//     await this.registerButton.click();
//   }
// }
