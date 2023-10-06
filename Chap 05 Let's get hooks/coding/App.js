import React from 'react'
import  ReactDOM  from 'react-dom/client'
import Header from "./Components/Header"
import Body from "./Components/Body.js"
import Footer from "./Components/Footer"

/* My Food App structure will look like this  
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
*/

// APPlayout component to render: Header, Body adn Footer component

const APPLayout = () => {
    return(
        <>
        <Header />
        <Body />
        <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <APPLayout />
)

