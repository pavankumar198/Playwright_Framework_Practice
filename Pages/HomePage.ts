import {Page,Locator, Dialog} from '@playwright/test';

export class HomePage{
    private readonly page:Page;
    private readonly productList:Promise<Locator[]>;
    private readonly addToCart:Locator;
    private readonly cartLink:Locator;

    constructor(page:Page){
        this.page=page;
        this.productList=this.page.locator("div.card.h-100 h4 a").all();
        this.addToCart=this.page.locator("//a[.='Add to cart']");
        this.cartLink=this.page.locator("#cartur");
    }

    async getProductList(product:string){
        await this.page.waitForTimeout(4000);
        const productElements=await this.productList;

        for(const element of productElements){
            if((await element.innerText())===product){
                
                await element.click();
                break;
            }
        }

    this.page.once('dialog',async (dialog:Dialog)=>{
        if(dialog.message().includes("added")){
            await dialog.accept();
        }
    })
    await this.addToCart.click();
    }

    async goToCart(){
        await this.cartLink.click();
    }
}