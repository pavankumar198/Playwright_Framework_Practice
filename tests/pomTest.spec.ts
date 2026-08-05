import { test, expect } from "@playwright/test";

import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";
import { CartPage } from "../Pages/cartPage";

test("USER should login,add product to cart", async ({ page }) => {
    await page.goto("https://www.demoblaze.com");
    const loginPage = new LoginPage(page);
    await loginPage.performLogin("kumarsannidhi", "pavan123");
    const homePage = new HomePage(page);
    await homePage.getProductList("Nexus 6");
    await homePage.goToCart();
    const cartPage=new CartPage(page);
    await page.waitForTimeout(3000);
    const status=await cartPage.checkProductInCart("Nexus 6");
    expect(status).toBe(true);
})