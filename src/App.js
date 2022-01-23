import Footer from "./components/Footer";
import Header from "./components/Header";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./styles/Themes";
import {GlobalStyles} from "./styles/GlobalStyles";
import {useDarkMode} from "./hooks/useDarkMode";
import {Route, Routes} from "react-router-dom";
import Page from "./components/Page";
import Blog from "./components/Blog"
import Home from "./assets/Home/Home.md"
import Contact from "./assets/Contact/Contact.md"
import Links from "./assets/Links/Links.md"

function App() {

    const [theme, themeToggler] = useDarkMode();

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles/>
                <div>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Page content={Home}/>}/>
                        <Route path="/contact" element={<Page content={Contact}/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/links" element={<Page content={Links}/>}/>
                    </Routes>
                    <Footer themeToggler={themeToggler} activeTheme={theme}/>
                </div>
            </>
        </ThemeProvider>
    );
}

export default App;
