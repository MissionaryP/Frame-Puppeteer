const puppeteer = require('puppeteer')
const expect = require('chai').expect
const { click, clickXPath, type, getText, getCount } = require('../Pages/basePage')
const homePage = require('../Pages/homePage')

describe('Login Suite',() => {
    let browser
    let page

    before(async function(){
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 10, //frena la  ejecución para que se vea todo lo q hace la automation
            devtools: false //Permite inspecionar el browser en tiempo real
        })
        const context = await browser.createIncognitoBrowserContext()
        page = await context.newPage()
        await page.setDefaultTimeout(10000)
        await page.setDefaultNavigationTimeout(20000)
    })

    after(async function(){
        await browser.close()

    })

    /*beforeEach(async function(){
        //Se corre antes de cada prueba (it)
    })

    afterEach(async function(){
        //Se corre después de cada prueba (it)
    })*/

    it('Should lunch the browser', async function () {

        await page.goto(homePage.urlDev)
        //await page.waitForSelector('#header-sign-on')
        
        //const text = await getText(page,'#prompt-logo-center')
        //const text = await page.$eval('#header-sign-on', element => element.textContent)
        await type(page,homePage.userInput,homePage.username)
        await type(page,homePage.passwordInput,homePage.password)
        await click(page,homePage.loginButton)
        
        //const count = await page.$$eval('div', element => element.count)
            
        //ASSERTIONS
        //expect(title).to.be.a('string','Ingresar')
        //expect(url).to.include('string','vcis.auth0.com')
            
        //apretar ENTER o cualquier otra tecla en el keyboard
        //await page.keyboard.press('Enter',{delay: 10})

        //GetElement BY XPATH
        //await page.waitForXPath('//button[@id = \'btn-login\']')

        //Pick element in a select
        //                   Selector   Opcion Elegida
        //await page.select('#sp_payee','Apple')

        //Pick a date
        //                Selector   Fecha con formato
        //await page.type('#sp_date','2020-03-18')
        //await page.keyboard.press('Enter')
                    
    })

})