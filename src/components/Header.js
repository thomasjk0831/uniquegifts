import React from 'react'

function Header() {
    return (
        <header>
            <div className = "headerBackground">
            <nav className="aboutHeaderContainer">
                <div className="logo">
                  <img src={"./img/logo.png"} alt={"logo"} />
                </div>
                  <a href = "index.html">Home</a>
                  <a href = "about.html">Shop</a>
                  <a href = "#contact">Cart</a>
                  <a href = "#log-in">Log-in</a>
              </nav>
            </div>
        </header>
    )
}

export default Header
