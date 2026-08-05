import {Page,Locator} from '@playwright/test';

export class LoginPage{
    private readonly page:Page;
    private readonly loginLink:Locator;
    private readonly usernameInput:Locator;
    private readonly passwordInput:Locator;
    private readonly loginButton:Locator;

    constructor (page:Page){
        this.page=page;
        this.loginLink=this.page.locator('#login2');
        this.usernameInput=this.page.locator("#loginusername");
        this.passwordInput=this.page.locator('#loginpassword');
        this.loginButton=this.page.getByRole('button',{name:'Log in'});
    }

    async clickLoginlink():Promise<void>{
        await this.loginLink.click();
    }

    async enterUserName(username:string):Promise<void>{
        await this.usernameInput.fill(username);
    }
    async enterPassword(password:string):Promise<void>{
        await this.passwordInput.fill(password);
    }
    async clickLoginButton():Promise<void>{
        await this.loginButton.click();
    }

    async performLogin(username:string, password:string):Promise<void>{
        await this.clickLoginlink();
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}

