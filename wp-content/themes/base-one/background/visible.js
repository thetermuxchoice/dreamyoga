const menuLogin = document.getElementById("menu-item-799")
const navMenu = document.getElementById("Sing-in")

menuLogin.addEventListener( "click", () => {
    navMenu.classList.toggle("visibility")
});

const themeButton = document.querySelector( ".Pasword" )

themeButton.addEventListener( "click", () =>{
    document.body.classList.toggle( "visible" )

    if( themeButton.classList.contains( "fa-sharp fa-solid" ) ){
        themeButton.classList.replace( "fa-sharp fa-solid", "fa-solid fa-eye" )
    }else{
        themeButton.classList.replace( "fa-solid fa-eye", "fa-sharp fa-solid" )
    }
});