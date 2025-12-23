

import { test, expect } from '@playwright/test';
import { PriceRangePage } from '../../pages/PriceRangePage';

let pricePage: PriceRangePage;

test.beforeEach(async ({ page }) => {
  pricePage = new PriceRangePage(page);
  await pricePage.navigate();
  await page.waitForLoadState('domcontentloaded');
});
test.describe('Valid price range (EP + Boundary)', () => {

  const validCases = [
    { min: 0, max: 200, title: 'min=0 max=200 (boundaries)' },
    { min: 0, max: 0, title: 'min=0 max=0 (lower boundary)' },
    { min: 200, max: 200, title: 'min=200 max=200 (upper boundary)' },
    { min: 1, max: 199, title: 'inside limits' },
  ];

  for (const { min, max, title } of validCases) {
    test(title, async () => {
      await pricePage.setPriceRange(min, max);
    });
  }
});


test.describe('Invalid price range (EP)', () => {

  const invalidCases = [
    {
      min: -1,
      max: 100,
      error: 'Min price cannot be negative',
      title: 'min < 0',
    },
    {
      min: 50,
      max: 201,
      error: 'Max price cannot exceed 200',
      title: 'max > 200',
    },
    {
      min: 150,
      max: 100,
      error: 'min > max',
      title: 'min > max',
    },
  ];

  for (const { min, max, error, title } of invalidCases) {
    test(title, async () => {
      await expect(
        pricePage.setPriceRange(min, max)
      ).rejects.toThrow(error);
    });
  }
});


