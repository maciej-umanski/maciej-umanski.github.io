import {NavLink} from "react-router-dom";

const Header = () => {

    const getClassName = (state) => {
        return state.isActive ? 'navLinkActive' : 'navLinkInactive'
    }

    return (
        <div className="header">
            <h1>@maciej-umanski</h1>
            <div className="header-navigation-links">
                {`{`}
                <span><NavLink to="/" className={getClassName}>home</NavLink></span>
                <span><NavLink to="/about" className={getClassName}>about</NavLink></span>
                <span><NavLink to="/links" className={getClassName}>links</NavLink></span>
                <span><NavLink to="/blog" className={getClassName}>blog</NavLink></span>
                {`}`}
            </div>
            <br/>
            <hr/>
        </div>
    )
}

export default Header;