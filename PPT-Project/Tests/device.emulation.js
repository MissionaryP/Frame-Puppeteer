const puppeteer = require('puppeteer')

describe('Device Emulation', ()=>{
    let browser
    let page

    before(async function(){
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 10, //frena la ejecución para que se vea todo lo q hace la automation
            devtools: false //Permite inspecionar el browser en tiempo real
        })

        page = browser.newPage()
        await page.setDefaultTimeout(10000)
        await page.setDefaultNavigationTimeout(20000)
    })

    after(async function(){
        await browser.close()

    })

    it('Desktop Device Test', async function () {

    })

    it.only('Mobile Device Test', async function () {
        const mobile = puppeteer.devices['iPhone X']
        await page.emulate(mobile)
        await page.goto('https://www.google.com')
        await page.waitFor(5000)
    })

    it('Tablet Device Test', async function () {

    })
})