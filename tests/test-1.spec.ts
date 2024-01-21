import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testpages.eviltester.com/styled/alerts/alert-test.html');
  await page.getByRole('button', { name: 'Show alert box' }).click();
  await expect(page.locator('#alertexplanation')).toContainText('You triggered and handled the alert dialog');
});