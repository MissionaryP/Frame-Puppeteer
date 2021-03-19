const puppeteer = require('puppeteer')
const expect = require('chai').expect
const { click, clickXPath, type, typeXpath, getText, getCount } = require('../Pages/basePage')
const homePage = require('../Pages/homePage')
const loginPage = require("../Pages/loginPage")
const { login } = require("../Pages/loginPage")
const profPage = require("../Pages/profilesPage")
const newProfPage = require("../Pages/newProfilePage")
const { selectElement } = require ("../Pages/newProfilePage")



describe('Profiles Suite', ()=>{
    let browser
    let page
    let context
    var today = new Date()
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

    beforeEach(async function(){
        //browser = await puppeteer.launch({headless:false, slowMo: 0, devtools:false, args: ['--start-fullscreen'], args: ['--lang=en-US']})
        browser = await puppeteer.launch({
            //args:['--start-fullscreen'],
            args: ['--lang=en-US'],
            //defaultViewport: null,
            headless: false
        })
        //context = await browser.createIncognitoBrowserContext()
        page = await browser.newPage()
        //page = await context.newPage()
        await page.setDefaultTimeout(1200000)
        await page.setDefaultNavigationTimeout(120000)
        await page.setViewport({ width: 2000, height: 1000 })
        
    })

    afterEach(async function(){
        await browser.close()
    })

    it ('Login and enter to Profiles', async function () {
        //Login with function Login
        await login(page,loginPage.urlDev,
            loginPage.userInput,
            loginPage.username,
            loginPage.passwordInput,
            loginPage.password,
            loginPage.loginButton,
            loginPage.loggedIn)
        expect(loginPage.loggedIn).to.exist

        //Click en Menú 'Access Control'
        await page.waitForXPath(homePage.accessControlMenu)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.accessControlMenu)

        //Click en Menú 'Profiles'
        await page.waitForXPath(homePage.profileOption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.profileOption)

        //Verificar que se carga la página de Profiles
        await page.waitForTimeout(20000)
        await page.waitForXPath(homePage.profileTitle)
        expect(homePage.profileTitle).to.exist

    })

    it('Filter Profiles Input', async function () {

        //Login with function Login
        await login(page,loginPage.urlDev,
            loginPage.userInput,
            loginPage.username,
            loginPage.passwordInput,
            loginPage.password,
            loginPage.loginButton,
            loginPage.loggedIn)
        expect(loginPage.loggedIn).to.exist

        //Click en Menú 'Access Control'
        await page.waitForXPath(homePage.accessControlMenu)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.accessControlMenu)

        //Click en Menú 'Profiles'
        await page.waitForXPath(homePage.profileOption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.profileOption)

        //Verificar que se carga la página de Profiles
        await page.waitForTimeout(20000)
        await page.waitForXPath(homePage.profileTitle)
        expect(homePage.profileTitle).to.exist

        //Busco un profile con la letra 'A' y apreto el botón 'filter'
        await page.waitForTimeout(20000)
        await typeXpath(page,profPage.inputProfile,"A")
        await clickXPath(page,profPage.filterButton)
        expect(profPage.firstElemListPro).to.exist
    })

    it('Filter Profiles All Status', async function () {

        //Login with function Login
        await login(page,loginPage.urlDev,
            loginPage.userInput,
            loginPage.username,
            loginPage.passwordInput,
            loginPage.password,
            loginPage.loginButton,
            loginPage.loggedIn)
        expect(loginPage.loggedIn).to.exist

        //Click en Menú 'Access Control'
        await page.waitForXPath(homePage.accessControlMenu)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.accessControlMenu)

        //Click en Menú 'Profiles'
        await page.waitForXPath(homePage.profileOption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.profileOption)

        //Verificar que se carga la página de Profiles
        await page.waitForTimeout(20000)
        await page.waitForXPath(homePage.profileTitle)
        expect(homePage.profileTitle).to.exist

        //Elegir status. Como no se puede automatizar un selector de Angular,
        //se hace click en el dropdown, y se hace click en alguna de las opciones. Para automatizar
        //Angular, habría que usar Protractor
        await click(page,profPage.status)
        //await click(page,profPage.activeStatus)
        //await click(page,profPage.inactiveStatus)
        await click(page,profPage.allStatus)
        await clickXPath(page,profPage.filterButton)
        expect(profPage.firstElemListPro).to.exist
    })

    it('Filter Profiles Active Status', async function () {

        //Login with function Login
        await login(page,loginPage.urlDev,
            loginPage.userInput,
            loginPage.username,
            loginPage.passwordInput,
            loginPage.password,
            loginPage.loginButton,
            loginPage.loggedIn)
        expect(loginPage.loggedIn).to.exist

        //Click en Menú 'Access Control'
        await page.waitForXPath(homePage.accessControlMenu)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.accessControlMenu)

        //Click en Menú 'Profiles'
        await page.waitForXPath(homePage.profileOption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.profileOption)

        //Verificar que se carga la página de Profiles
        await page.waitForTimeout(20000)
        await page.waitForXPath(homePage.profileTitle)
        expect(homePage.profileTitle).to.exist

        //Elegir status. Como no se puede automatizar un selector de Angular,
        //se hace click en el dropdown, y se hace click en alguna de las opciones. Para automatizar
        //Angular, habría que usar Protractor
        await click(page,profPage.status)
        await click(page,profPage.activeStatus)
        //await click(page,profPage.inactiveStatus)
        //await click(page,profPage.allStatus)
        await clickXPath(page,profPage.filterButton)
        expect(profPage.firstElemListPro).to.exist
    })

    it('Filter Profiles Inactive Status', async function () {

        //Login with function Login
        await login(page,loginPage.urlDev,
            loginPage.userInput,
            loginPage.username,
            loginPage.passwordInput,
            loginPage.password,
            loginPage.loginButton,
            loginPage.loggedIn)
        expect(loginPage.loggedIn).to.exist

        //Click en Menú 'Access Control'
        await page.waitForXPath(homePage.accessControlMenu)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.accessControlMenu)

        //Click en Menú 'Profiles'
        await page.waitForXPath(homePage.profileOption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.profileOption)

        //Verificar que se carga la página de Profiles
        await page.waitForTimeout(20000)
        await page.waitForXPath(homePage.profileTitle)
        expect(homePage.profileTitle).to.exist

        //Elegir status. Como no se puede automatizar un selector de Angular,
        //se hace click en el dropdown, y se hace click en alguna de las opciones. Para automatizar
        //Angular, habría que usar Protractor
        await click(page,profPage.status)
        //await click(page,profPage.activeStatus)
        await click(page,profPage.inactiveStatus)
        //await click(page,profPage.allStatus)
        await clickXPath(page,profPage.filterButton)
        expect(profPage.firstElemListPro).to.exist
    })

    it('Export to Excel the filtered profiles', async function () {

        //Login with function Login
        await login(page,loginPage.urlDev,
                    loginPage.userInput,
                    loginPage.username,
                    loginPage.passwordInput,
                    loginPage.password,
                    loginPage.loginButton,
                    loginPage.loggedIn)
        expect(loginPage.loggedIn).to.exist

        //Click en Menú 'Access Control'
        await page.waitForXPath(homePage.accessControlMenu)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.accessControlMenu)

        //Click en Menú 'Profiles'
        await page.waitForXPath(homePage.profileOption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.profileOption)

        //Verificar que se carga la página de Profiles
        await page.waitForTimeout(20000)
        await page.waitForXPath(homePage.profileTitle)
        expect(homePage.profileTitle).to.exist

        //Elegir status. Como no se puede automatizar un selector de Angular,
        //se hace click en el dropdown, y se hace click en alguna de las opciones. Para automatizar
        //Angular, habría que usar Protractor
        await click(page,profPage.status)
        //await click(page,profPage.activeStatus)
        await click(page,profPage.inactiveStatus)
        //await click(page,profPage.allStatus)
        await clickXPath(page,profPage.filterButton)
        expect(profPage.firstElemListPro).to.exist

        //await page._client.send('Page.setDownloadBehavior', {behavior: 'allow',  downloadPath: '/tmp'})
        //await clickXPath(page,profPage.exportToExcel)
        
        //El botón no funciona aún
        
    })

    it('Enter to Create Profile Page', async function () {

        //Login with function Login
        await login(page,loginPage.urlDev,
                    loginPage.userInput,
                    loginPage.username,
                    loginPage.passwordInput,
                    loginPage.password,
                    loginPage.loginButton,
                    loginPage.loggedIn)
        expect(loginPage.loggedIn).to.exist

        //Click en Menú 'Access Control'
        await page.waitForXPath(homePage.accessControlMenu)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.accessControlMenu)

        //Click en Menú 'Profiles'
        await page.waitForXPath(homePage.profileOption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.profileOption)

        //Verificar que se carga la página de Profiles
        await page.waitForTimeout(20000)
        await page.waitForXPath(homePage.profileTitle)
        expect(homePage.profileTitle).to.exist
        
        //Apreto botón "Create new profile" y espero a que cargue la página
        await clickXPath(page,profPage.createNewProfile)
        await page.waitForXPath(newProfPage.titleLabel)
        expect(newProfPage.titleLabel).to.exist
    })

    it('Create New Profile and verify it creation', async function () {

        //Login with function Login
        await login(page,loginPage.urlDev,
                    loginPage.userInput,
                    loginPage.username,
                    loginPage.passwordInput,
                    loginPage.password,
                    loginPage.loginButton,
                    loginPage.loggedIn)
        expect(loginPage.loggedIn).to.exist

        //Click en Menú 'Access Control'
        await page.waitForXPath(homePage.accessControlMenu)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.accessControlMenu)

        //Click en Menú 'Profiles'
        await page.waitForXPath(homePage.profileOption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.profileOption)

        //Verificar que se carga la página de Profiles
        await page.waitForTimeout(20000)
        await page.waitForXPath(homePage.profileTitle)
        expect(homePage.profileTitle).to.exist
        
        //Apreto botón "Create new profile" y espero a que cargue la página
        await clickXPath(page,profPage.createNewProfile)
        await page.waitForXPath(newProfPage.titleLabel)
        expect(newProfPage.titleLabel).to.exist
        
        const profileName = "Test_NewProfile-"+date+time
        //Lleno los formularios y apreto Submit
        await page.waitForTimeout(10000)
        await type(page,newProfPage.nameInput,profileName)
        await type(page,newProfPage.descriptionInput,"This is a profile description")
        await clickXPath(page,newProfPage.accessControlCheckBox)
        await clickXPath(page,newProfPage.saveButton)
        await page.waitForTimeout(5000)
        //await clickXPath(page,newProfPage.backArrow)
        
        //Si se creo el perfil correctamente, volveremos a la página de Profiles
        await page.waitForXPath(homePage.profileTitle)
        expect(homePage.profileTitle).to.exist

        //Buscamos el perfil creado recientemente
        await typeXpath(page,profPage.inputProfile,profileName)
        await clickXPath(page,profPage.filterButton)
        expect(profPage.firstElemListPro).to.exist
    })

    it('Error message while creating new profile', async function () {

        //Login with function Login
        await login(page,loginPage.urlDev,
                    loginPage.userInput,
                    loginPage.username,
                    loginPage.passwordInput,
                    loginPage.password,
                    loginPage.loginButton,
                    loginPage.loggedIn)
        expect(loginPage.loggedIn).to.exist

        //Click en Menú 'Access Control'
        await page.waitForXPath(homePage.accessControlMenu)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.accessControlMenu)

        //Click en Menú 'Profiles'
        await page.waitForXPath(homePage.profileOption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.profileOption)

        //Verificar que se carga la página de Profiles
        await page.waitForTimeout(20000)
        await page.waitForXPath(homePage.profileTitle)
        expect(homePage.profileTitle).to.exist
        
        //Apreto botón "Create new profile" y espero a que cargue la página
        await clickXPath(page,profPage.createNewProfile)
        await page.waitForXPath(newProfPage.titleLabel)
        expect(newProfPage.titleLabel).to.exist
        
        //Lleno los formularios y apreto Submit
        await clickXPath(page,newProfPage.saveButton)
        await expect(newProfPage.errorMsg).to.exist
        const errorElements = page.$x(newProfPage.emptyFields)
        await expect(errorElements).to.exist
        
    })

    it.only('Clear inputs while creating new profile', async function () {

        //Login with function Login
        await login(page,loginPage.urlDev,
                    loginPage.userInput,
                    loginPage.username,
                    loginPage.passwordInput,
                    loginPage.password,
                    loginPage.loginButton,
                    loginPage.loggedIn)
        expect(loginPage.loggedIn).to.exist

        //Click en Menú 'Access Control'
        await page.waitForXPath(homePage.accessControlMenu)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.accessControlMenu)

        //Click en Menú 'Profiles'
        await page.waitForXPath(homePage.profileOption)
        await page.waitForTimeout(12000)
        await clickXPath(page,homePage.profileOption)

        //Verificar que se carga la página de Profiles
        await page.waitForTimeout(20000)
        await page.waitForXPath(homePage.profileTitle)
        expect(homePage.profileTitle).to.exist
        
        //Apreto botón "Create new profile" y espero a que cargue la página
        await clickXPath(page,profPage.createNewProfile)
        await page.waitForXPath(newProfPage.titleLabel)
        expect(newProfPage.titleLabel).to.exist
        
        const profileName = "Test_NewProfile-"+date+time
        //Lleno los formularios y apreto Submit
        await page.waitForTimeout(10000)
        await type(page,newProfPage.nameInput,profileName)
        await type(page,newProfPage.descriptionInput,"This is a profile description")
        await clickXPath(page,newProfPage.accessControlCheckBox)
        await clickXPath(page,newProfPage.clearButton)
        await expect(newProfPage.validateEmptyName).to.exist
        await expect(newProfPage.validateEmptyDescription).to.exist

    })


})