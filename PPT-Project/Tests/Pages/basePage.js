module.exports = {
    click: async function(page, selector){
        try{
                await page.waitForSelector(selector)
                await page.click(selector)
        }catch(error){
            throw new Error(`Could not click on selector: ${selector}`)
        }
    },
    clickXPath: async function(page, selector){
        try{
                const elements = await page.$x(selector)
                await elements[0].click()

        }catch(error){
            throw new Error(`Could not click on selector: ${selector}`)
        }
    },
    type: async function(page, selector, text){
        try{
            await page.waitForSelector(selector)
            await page.type(selector,text)
        }catch(error){
            throw new Error(`Could send text to selector: ${selector}`)
        }
    },
    typeXpath: async function(page, selector, text){
        try{
            const elements = await page.$x(selector)
            await elements[0].type(text)
        }catch(error){
            throw new Error(`Could send text to selector: ${selector}`)
        }
    },
    getText: async function(page, selector){
        try{
            await page.waitForSelector(selector)
            return await page.$eval(selector, element => element.innerHTML)
        }catch(error){
            throw new Error(`Could get text from selector: ${selector}`)
        }
    },
    getCount: async function(page, selector){
        try{
            await page.waitForSelector(selector)
            return await page.$$eval(selector, element => element.length)
        }catch(error){
            throw new Error(`Could get count of selector: ${selector}`)
        }
    }

}