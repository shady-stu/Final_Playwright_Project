
import { BasePage } from './BasePage';

export class PriceRangePage extends BasePage {
  minSliderHandle = this.page.locator('.ngx-slider').first().locator('[role="slider"]').first();
  maxSliderHandle = this.page.locator('.ngx-slider').first().locator('[role="slider"]').nth(1);

  async  setPriceRange(min: number, max: number) {
 
  if (min < 0) throw new Error('Min price cannot be negative');
  if (max > 200) throw new Error('Max price cannot exceed 200');
  if (min > max) throw new Error('Min price cannot be greater than max price');
  
await this.page.locator('.ngx-slider').first().waitFor({ state: 'visible' });
    await this.minSliderHandle.focus();
    const currentMin = Number(await this.minSliderHandle.getAttribute('aria-valuenow') ?? 0);
  const minDiff = min - currentMin;
    
    if (minDiff > 0) {
      for (let i = 0; i < minDiff; i++) {
        await this.minSliderHandle.press('ArrowRight');
      }
    } else if (minDiff < 0) {
      for (let i = 0; i < Math.abs(minDiff); i++) {
        await this.minSliderHandle.press('ArrowLeft');
      }
    }
    

     await this.maxSliderHandle.focus();
  const currentMax = Number(await this.maxSliderHandle.getAttribute('aria-valuenow') ?? 200);
  const maxDiff = max - currentMax;
    
    if (maxDiff > 0) {
      for (let i = 0; i < maxDiff; i++) {
        await this.maxSliderHandle.press('ArrowRight');
      }
    } else if (maxDiff < 0) {
      for (let i = 0; i < Math.abs(maxDiff); i++) {
        await this.maxSliderHandle.press('ArrowLeft');
      }
    }
  }
}
