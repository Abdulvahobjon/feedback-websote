import React from 'react'

function Header({text , bgColor , textColor}) {
    const headerStyle = {
        color: textColor,
        backgroundColor: bgColor,
    }
    return (
        <header className='header' style={headerStyle}> 
            <div className="container">
                 <h1>{text}</h1>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95",
}


export default Header