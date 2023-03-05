// const Page = require('./page')
import Page from './page.js'

class HomePage extends Page {

    get accountName() {
        return $('#nameofuser')
    }

    get buttonLogout() {
        return $(`[onclick='logOut()']`)
    }

    get footer() {
        return $(`#footc`)
    }

    async scrollToFooter(){
       await browser.pause(5000)
       await (await this.footer).scrollIntoView()
       await browser.pause(5000)
    }

    async buttonItemName(itemName){
        //back quote - dibawah tombol ESC
        return await $(`//a[text()='${itemName}']`)
    }

    async clickItemName(itemName){
        await (await this.buttonItemName(itemName)).click()
    }

    async verifyLoginSuccess(user) {
        return await expect(await this.accountName).toHaveTextContaining(user)
    }

    async clickBtnLogOut(){
        await browser.pause(3000)
        await (await this.buttonLogout).click()
        await browser.pause(2000)   
    }

    
}

// module.exports = new HomePage();
export default new HomePage()