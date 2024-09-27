import { test, expect } from '@playwright/test';

test('main flow', async ({ page }) => {
  await page.goto('/');

  // Check if the header is present
  await expect(page.locator('text=CheckMate')).toBeVisible();

  // Upload a checklist
  await page.click('text=Upload');
  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.click('text=Choose Files');
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles({
    name: 'test-checklist.md',
    mimeType: 'text/markdown',
    buffer: Buffer.from('# Test Checklist\n- [ ] Item 1\n- [ ] Item 2'),
  });

  // Check if the checklist is added to the manage section
  await page.click('text=Manage');
  await expect(page.locator('text=test-checklist.md')).toBeVisible();

  // Start the checklist
  await page.click('text=Start >> nth=0');

  // View the checklist
  await page.click('text=View');
  await expect(page.locator('text=Item 1')).toBeVisible();
  await expect(page.locator('text=Item 2')).toBeVisible();

  // Toggle between list and carousel views
  await page.click('text=Carousel');
  await expect(page.locator('button:has-text(">")')).toBeVisible();
  await page.click('text=List');
  await expect(page.locator('text=Item 1')).toBeVisible();
  await expect(page.locator('text=Item 2')).toBeVisible();
});
