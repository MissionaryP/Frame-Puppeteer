module.exports ={
    userInput : "#username",
    passwordInput : "#password",
    loginButton : "#btn-login",
    logoutButton : "#btn-logout",
    userloged : "#btn-logged-user",
    username :"STARK_S",
    password : "Vct@34567",
    urlDev : "https://pod-it.is-np.its-plus.com/",
    invalidPassword: "wrongpassword",
    errorMessage: "#messages",
    loggedIn: "#btn-logged-user",
    login : async function(page,urlDev,userInput,username,passwordInput,password,loginButton,loggedIn){
        try{
            await page.goto(urlDev)
            await page.type(userInput,username)
            await page.type(passwordInput,password)
            await page.click(loginButton)
            await page.waitForSelector(loggedIn)
        }catch(error){
            throw new Error(`Could not login`)
        }
    }
}