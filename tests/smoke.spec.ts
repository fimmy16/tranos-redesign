import { expect, test } from "@playwright/test";

const ROUTES = [
  "/",
  "/about/who-we-are",
  "/about/leadership",
  "/services",
  "/power-distribution",
  "/power-energy",
  "/enclosures",
  "/cable-management",
  "/product-engine",
  "/industries",
  "/case-studies",
  "/careers",
  "/privacy-policy",
  "/terms-of-service",
];

for (const route of ROUTES) {
  test(`${route} loads with no console errors`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") {
        consoleErrors.push(message.text());
      }
    });
    page.on("pageerror", (error) => {
      consoleErrors.push(error.message);
    });

    const response = await page.goto(route, { waitUntil: "load" });
    expect(response?.status(), `${route} should respond 200`).toBe(200);
    await expect(page.locator("h1").first()).toBeVisible();
    expect(consoleErrors, `${route} should have no console errors`).toEqual([]);
  });
}

test("old /about route redirects to /about/who-we-are", async ({ page }) => {
  await page.goto("/about");
  await expect(page).toHaveURL(/\/about\/who-we-are$/);
});
