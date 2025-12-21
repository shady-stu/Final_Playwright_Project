import { test } from '@playwright/test';
import { PriceRangePage } from '../../pages/PriceRangePage';

test('Filter products by price range', async ({ page }) => {
  const pricePage = new PriceRangePage(page);
  await pricePage.navigate();
  await page.waitForLoadState('domcontentloaded');
  const min = Number(process.env.MIN_PRICE ?? 0);
  const max = Number(process.env.MAX_PRICE ?? 100);
  await pricePage.setPriceRange(min, max);
});