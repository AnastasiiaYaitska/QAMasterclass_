import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://testpages.eviltester.com/styled/attributes-test.html');
    const inputElement = page.locator('#domattributes');
    const customAttribute = await inputElement.getAttribute('original-title');
    await expect(customAttribute).toContain("This used to be the title");
});