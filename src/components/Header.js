import {Link} from "react-router-dom";

const Header = () => {

    return (
        <div className="header">
            <h1>@maciej-umanski</h1>
            <div className="header-navigation-links">
                {`{`}
                <span><Link to="/">home</Link></span>
                <span><Link to="/about">about</Link></span>
                <span><Link to="/links">links</Link></span>
                <span><Link to="/blog">blog</Link></span>
                {`}`}
            </div>
            <br/>
            <hr/>
        </div>
    )
}

export default Header;