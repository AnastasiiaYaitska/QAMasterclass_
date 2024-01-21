import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://testpages.eviltester.com/styled/alerts/alert-test.html');
    await page.getByRole('button', { name: 'Show alert box' }).click();
    await page.on('dialog', dialog => dialog.accept());
    await page.getByRole('button', { name: "OK" }).click()
});