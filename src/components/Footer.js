import React from "react"

const Footer = (props) => {

    const getOppositeThemeEmoji = (activeTheme) => {
        return activeTheme === 'light' ? '🌚' : '🌝'
    }

    return (
        <div className="footer">
            <hr/>
            <span>Maciej Umanski</span>
            <span className="clickable" onClick={props.themeToggler}>{getOppositeThemeEmoji(props.activeTheme)}</span>
            <span>{new Date().getFullYear()}</span>
        </div>
    )
}

export default Footer;