let myButton = document.getElementById( "goup" )
window.onscroll = function () {
    if ( window.scrollY >= 600 ) {
        myButton.style.display = "flex"
        console.log( "I am here!" )
    } else {
        myButton.style.display = "none"
    }
}
myButton.onclick = function () {
    window.scrollTo( 0, 0 )
}
