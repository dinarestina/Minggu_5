
import {Given, When, Then} from '@wdio/cucumber-framework'
import FrontPage from '../pageobjects/front-page.js'
import HomePage from '../pageobjects/home-page.js'
import ProductDetailPage from '../pageobjects/product-detail-page.js'
import testPage from '../pageobjects/test-page.js'

Given(/^I am on the front page$/, async() => {
    await FrontPage.open()
})

// When(/^I try to login with correct credential$/, async() => {
//     await FrontPage.login('dina.jr', 'restina03');
// })

// Then (/^I am successfully logged in$/, async() => {
//     await HomePage.verifyLoginSuccess('dina.jr')
// })

When('I try to login with username {string} and password {string}', async(username, password) => {
    await FrontPage.login(username, password)
})

Then('I am successfully login with username {string}', async(username) => {
  await HomePage.verifyLoginSuccess(username)
  let temp = await testPage.getTitle() 
  console.log(temp)
})

When('I add items to cart:', async(table) => {
    let data = table.hashes()
    for(let i=0; i < data.length; i++){
        await HomePage.clickItemName(data[i].itemName)
        await ProductDetailPage.clickAddToCartBtn()
        await ProductDetailPage.acceptAlert()
        await ProductDetailPage.clickBackToProductList()
    }
})

Given('I perform scrolling to footer', async() => {
    await HomePage.scrollToFooter()
})

// And('I am successfully login with username {string}', async(username) => {
//     await HomePage.verifyLoginSuccess(username)
//     let temp = await testPage.getTitle() 
//     console.log(temp)
//   })

When('I click button logout', async() => {
  await HomePage.clickBtnLogOut()
})

Then('I am back on the front page', async() => {
  await HomePage.open()
})

