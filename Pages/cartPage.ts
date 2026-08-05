import { Page,Locator } from "@playwright/test";

export class CartPage{
    private readonly page:Page;
    private readonly productNamesInCartSelector:Locator;

    constructor(page:Page){
        this.page=page;
        this.productNamesInCartSelector=this.page.locator("tbody#tbodyid tr td:nth-of-type(2)");
    }
   

    async checkProductInCart(productName:string):Promise<boolean>{
        await this.page.waitForTimeout(2000);
        await this.page.screenshot({path:"D:\\Playwright_Framework_Practice\\Pages\\ss.jpg"})
        
            if((await this.productNamesInCartSelector.allInnerTexts()).includes("Nexus 6")){
                return true;
            }
        return false;
    }

    
}

