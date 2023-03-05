import Page from './page.js'

class TestPage extends Page {
    
    async getTitle(){
        return await browser.getTitle()
    }

}

// module.exports = new HomePage();
export default new TestPage()